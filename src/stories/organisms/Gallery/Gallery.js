// src/stories/organisms/Gallery/Gallery.js
import css from './gallery.css?inline';
import '../../molecules/GalleryItem/GalleryItem.js';

const DEFAULT_SCREEN_COVER = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop';

const DEFAULT_GALLERY_ITEMS = [
    {
        title: 'Agentic AI Design',
        shortDesc: 'A concept case study exploring interface generation and product choreography.',
        readTime: '3 min',
        thumbSrc: DEFAULT_SCREEN_COVER,
        thumbCategory: 'mobile',
        thumbBrand: 'apple',
        thumbModel: 'Apple iPhone 12',
        thumbColor: 'Black',
        hasVideo: true,
        hasRepo: true,
        hasLive: true,
    },
    {
        title: 'Wrist Companion',
        shortDesc: 'A compact wearable case with quick-glance controls and motion-first navigation.',
        readTime: '2 min',
        thumbSrc: DEFAULT_SCREEN_COVER,
        thumbCategory: 'wearable',
        thumbBrand: 'apple',
        thumbModel: 'Apple Watch Series 6',
        thumbColor: 'Silver',
        aspectRatio: '1:1',
        hasVideo: false,
        hasRepo: true,
        hasLive: false,
    },
    {
        title: 'Mobile Checkout',
        shortDesc: 'A phone-first flow tuned for high-throughput purchasing without visual clutter.',
        readTime: '4 min',
        thumbSrc: DEFAULT_SCREEN_COVER,
        thumbCategory: 'mobile',
        thumbBrand: 'apple',
        thumbModel: 'Apple iPhone 12',
        thumbColor: 'Blue',
        hasVideo: true,
        hasRepo: false,
        hasLive: true,
    },
    {
        title: 'Quiet Metrics',
        shortDesc: 'A restrained dashboard story with clear hierarchy and lightweight motion.',
        readTime: '5 min',
        thumbSrc: DEFAULT_SCREEN_COVER,
        thumbCategory: 'desktop',
        thumbBrand: 'apple',
        thumbModel: 'Apple iMac 24',
        thumbColor: 'Silver',
        aspectRatio: '16:9',
        hasVideo: false,
        hasRepo: true,
        hasLive: true,
    },
    {
        title: 'Field Notes',
        shortDesc: 'A research archive tuned for dense browsing and quick visual scanning.',
        readTime: '3 min',
        thumbSrc: DEFAULT_SCREEN_COVER,
        thumbCategory: 'desktop',
        thumbBrand: 'apple',
        thumbModel: 'Apple iMac 24',
        thumbColor: 'Green',
        aspectRatio: '4:3',
        hasVideo: true,
        hasRepo: false,
        hasLive: false,
    },
    {
        title: 'Pocket System',
        shortDesc: 'A smaller companion layout with the same content language and brand system.',
        readTime: '2 min',
        thumbSrc: DEFAULT_SCREEN_COVER,
        thumbCategory: 'mobile',
        thumbBrand: 'apple',
        thumbModel: 'Apple iPhone 12',
        thumbColor: 'Red',
        hasVideo: false,
        hasRepo: true,
        hasLive: false,
    },
    {
        title: 'Release Preview',
        shortDesc: 'A launch-ready presentation card with a denser balance of data and image.',
        readTime: '6 min',
        thumbSrc: DEFAULT_SCREEN_COVER,
        thumbCategory: 'desktop',
        thumbBrand: 'apple',
        thumbModel: 'Apple iMac 24',
        thumbColor: 'Blue',
        aspectRatio: '16:9',
        hasVideo: true,
        hasRepo: true,
        hasLive: true,
    },
    {
        title: 'Studio Cut',
        shortDesc: 'A visual edit that keeps the gallery movement tight and intentional.',
        readTime: '4 min',
        thumbSrc: DEFAULT_SCREEN_COVER,
        thumbCategory: 'wearable',
        thumbBrand: 'apple',
        thumbModel: 'Apple Watch SE',
        thumbColor: 'Midnight',
        aspectRatio: '1:1',
        hasVideo: false,
        hasRepo: true,
        hasLive: true,
    },
];

const DEFAULT_GALLERY_ENGINE = 'minimal';
const GALLERY_ENGINES = {
    minimal: {
        dragOverscrollMax: 64,
        dragOverscrollTension: 180,
        dragFollowFactor: 0.28,
        dragPointerMultiplier: 0.85,
        edgeReturnDuration: 420,
        edgeReturnEasing: 'cubic-bezier(0.22, 1, 0.36, 1)',
    },
};

export class Gallery extends HTMLElement {
    static get observedAttributes() {
        return ['item-count', 'engine'];
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this._items = null;
        this._engine = DEFAULT_GALLERY_ENGINE;
        this._themeObserver = null;
        this._dragState = null;
        this._suppressNextClick = false;
        this._offsetX = 0;
        this._velocityX = 0;
        this._momentumFrame = null;
        this._lastPointerSample = null;
        this._focusedItemIndex = 0;
        this._dragPointerId = null;
        this._pointerStartX = 0;
        this._pointerStartOffset = 0;
        this._isDragging = false;
        this._boundPointerDown = this._handlePointerDown.bind(this);
        this._boundPointerMove = this._handlePointerMove.bind(this);
        this._boundPointerUp = this._handlePointerUp.bind(this);
        this._boundResize = this._handleResize.bind(this);
        this._boundClickCapture = this._handleClickCapture.bind(this);
        this._boundKeyDown = this._handleKeyDown.bind(this);
        this.shadowRoot.innerHTML = `
            <style>${css}</style>
            <div class="gallery-viewport" id="galleryViewport" tabindex="0" role="region" aria-label="Gallery">
                <div class="gallery-track" id="galleryTrack"></div>
            </div>
        `;
        this.viewport = this.shadowRoot.getElementById('galleryViewport');
        this.track = this.shadowRoot.getElementById('galleryTrack');
    }

    connectedCallback() {
        this.viewport.addEventListener('pointerdown', this._boundPointerDown);
        this.viewport.addEventListener('click', this._boundClickCapture, true);
        this.viewport.addEventListener('keydown', this._boundKeyDown);
        window.addEventListener('resize', this._boundResize);

        this._observeRootAccessibility();
        this.render();
        this._syncOffsetToBounds(true);
    }

    disconnectedCallback() {
        this.viewport.removeEventListener('pointerdown', this._boundPointerDown);
        this.viewport.removeEventListener('click', this._boundClickCapture, true);
        this.viewport.removeEventListener('keydown', this._boundKeyDown);
        window.removeEventListener('resize', this._boundResize);
        this._stopMomentum();
        this._detachPointerListeners();

        if (this._themeObserver) {
            this._themeObserver.disconnect();
            this._themeObserver = null;
        }
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'item-count' && oldValue !== newValue) {
            this.render();
            this._syncOffsetToBounds(true);
            return;
        }

        if (name === 'engine' && oldValue !== newValue) {
            this._engine = this._normalizeEngine(newValue);
            this._syncOffsetToBounds(true);
        }
    }

    get itemCount() {
        const parsed = Number.parseInt(this.getAttribute('item-count') || '', 10);
        if (Number.isNaN(parsed)) return 5;
        return Math.max(1, Math.min(parsed, DEFAULT_GALLERY_ITEMS.length));
    }

    set itemCount(value) {
        if (value === null || value === undefined || value === '') {
            this.removeAttribute('item-count');
            return;
        }

        this.setAttribute('item-count', String(value));
    }

    get engine() {
        return this._engine;
    }

    set engine(value) {
        const normalizedEngine = this._normalizeEngine(value);
        this._engine = normalizedEngine;

        if (value === null || value === undefined || value === '') {
            this.removeAttribute('engine');
            return;
        }

        this.setAttribute('engine', normalizedEngine);
    }

    get items() {
        const sourceItems = Array.isArray(this._items) ? this._items : DEFAULT_GALLERY_ITEMS;
        return sourceItems.slice(0, this.itemCount);
    }

    set items(value) {
        this._items = Array.isArray(value) ? value : null;
        this.render();
        this._syncOffsetToBounds(true);
    }

    _normalizeEngine(value) {
        const engineName = String(value || '').trim().toLowerCase();
        return GALLERY_ENGINES[engineName] ? engineName : DEFAULT_GALLERY_ENGINE;
    }

    _getEngineConfig() {
        const baseEngine = GALLERY_ENGINES[this._engine] || GALLERY_ENGINES[DEFAULT_GALLERY_ENGINE];

        if (!this.hasAttribute('a11y-reduce-motion')) {
            return baseEngine;
        }

        return {
            dragOverscrollMax: 0,
            dragOverscrollTension: baseEngine.dragOverscrollTension,
            dragFollowFactor: 1,
            dragPointerMultiplier: 1,
            edgeReturnDuration: 0,
            edgeReturnEasing: 'linear',
        };
    }

    _observeRootAccessibility() {
        const root = this.ownerDocument.documentElement;
        const sync = () => {
            this.toggleAttribute('a11y-reduce-motion', root.classList.contains('a11y-reduce-motion'));
        };

        sync();
        this._themeObserver = new MutationObserver(sync);
        this._themeObserver.observe(root, {
            attributes: true,
            attributeFilter: ['class'],
        });
    }

    render() {
        if (!this.track) return;

        const sourceItems = Array.isArray(this._items)
            ? this._items.slice(0, this.itemCount)
            : DEFAULT_GALLERY_ITEMS.slice(0, this.itemCount);

        this.track.innerHTML = '';

        sourceItems.forEach((item, index) => {
            const galleryItem = document.createElement('ds-gallery-item');
            galleryItem.setAttribute('title', item.title || `Case ${index + 1}`);
            galleryItem.setAttribute('short-desc', item.shortDesc || '');
            galleryItem.setAttribute('read-time', item.readTime || '');
            galleryItem.setAttribute('thumb-src', item.thumbSrc || '');

            if (item.thumbCategory) galleryItem.setAttribute('thumb-category', item.thumbCategory);
            if (item.thumbBrand) galleryItem.setAttribute('thumb-brand', item.thumbBrand);
            if (item.thumbModel) galleryItem.setAttribute('thumb-model', item.thumbModel);
            if (item.thumbColor) galleryItem.setAttribute('thumb-color', item.thumbColor);
            if (item.thumbDeviceSrc) galleryItem.setAttribute('thumb-device-src', item.thumbDeviceSrc);
            if (item.aspectRatio) galleryItem.setAttribute('aspect-ratio', item.aspectRatio);

            if (item.hasVideo) galleryItem.setAttribute('has-video', '');
            if (item.hasRepo) galleryItem.setAttribute('has-repo', '');
            if (item.hasLive) galleryItem.setAttribute('has-live', '');
            if (item.isProtected) galleryItem.setAttribute('is-protected', '');
            if (item.isUnlocked) galleryItem.setAttribute('is-unlocked', '');

            galleryItem.setAttribute('data-gallery-index', String(index));

            this.track.appendChild(galleryItem);
        });

        this._focusedItemIndex = Math.min(this._focusedItemIndex, Math.max(0, sourceItems.length - 1));
        this._applyTransform(this._clampOffset(this._offsetX), false);
    }

    _getGalleryItems() {
        return Array.from(this.track?.querySelectorAll('ds-gallery-item') || []);
    }

    _getItemThumb(item) {
        return item?.shadowRoot?.querySelector('.case-thumb-wrapper') || null;
    }

    _focusItem(index) {
        const galleryItems = this._getGalleryItems();
        if (!galleryItems.length) return;

        const nextIndex = Math.max(0, Math.min(index, galleryItems.length - 1));
        const thumb = this._getItemThumb(galleryItems[nextIndex]);
        if (!thumb) return;

        this._focusedItemIndex = nextIndex;
        thumb.focus({ preventScroll: true });
    }

    _getFocusedItemIndex() {
        const active = this.shadowRoot.activeElement || this.ownerDocument.activeElement;
        const activeItem = active?.closest?.('ds-gallery-item');
        if (!activeItem) return this._focusedItemIndex;

        const galleryItems = this._getGalleryItems();
        const index = galleryItems.indexOf(activeItem);
        return index >= 0 ? index : this._focusedItemIndex;
    }

    _handleKeyDown(event) {
        const key = event.key;
        if (!['ArrowLeft', 'ArrowRight', 'Home', 'End', 'Enter', ' '].includes(key)) return;

        const galleryItems = this._getGalleryItems();
        if (!galleryItems.length) return;

        const currentIndex = this._getFocusedItemIndex();

        if (key === 'ArrowRight') {
            event.preventDefault();
            this._focusItem(currentIndex + 1);
            return;
        }

        if (key === 'ArrowLeft') {
            event.preventDefault();
            this._focusItem(currentIndex - 1);
            return;
        }

        if (key === 'Home') {
            event.preventDefault();
            this._focusItem(0);
            return;
        }

        if (key === 'End') {
            event.preventDefault();
            this._focusItem(galleryItems.length - 1);
            return;
        }

        if (key === 'Enter' || key === ' ') {
            event.preventDefault();
            const targetItem = galleryItems[currentIndex];
            const thumb = this._getItemThumb(targetItem);
            if (thumb) thumb.click();
        }
    }

    _handleResize() {
        this._syncOffsetToBounds(true);
    }

    _handlePointerDown(event) {
        if (event.button !== 0 || !this.viewport || !this.track) return;

        this._stopMomentum();
        this._dragPointerId = event.pointerId;
        this._pointerStartX = event.clientX;
        this._pointerStartOffset = this._offsetX;
        this._isDragging = true;
        this._dragState = { moved: false };

        this.viewport.setPointerCapture(event.pointerId);
        this.viewport.classList.add('is-dragging');
        this.track.classList.add('is-dragging');
        this.classList.add('is-dragging');
        this.track.style.transition = 'none';
        this._lastPointerSample = {
            x: event.clientX,
            time: event.timeStamp || performance.now(),
        };
        this._velocityX = 0;

        window.addEventListener('pointermove', this._boundPointerMove);
        window.addEventListener('pointerup', this._boundPointerUp);
        window.addEventListener('pointercancel', this._boundPointerUp);
    }

    _handlePointerMove(event) {
        if (!this._isDragging || event.pointerId !== this._dragPointerId) return;
        const engine = this._getEngineConfig();

        const deltaX = event.clientX - this._pointerStartX;
        const nextOffset = this._pointerStartOffset + (deltaX * engine.dragPointerMultiplier);
        const boundedOffset = this._projectDragOffset(nextOffset, engine);
        const sampleTime = event.timeStamp || performance.now();

        this._dragState.moved = this._dragState.moved || Math.abs(deltaX) > 3;
        if (this._lastPointerSample) {
            const deltaTime = Math.max(8, sampleTime - this._lastPointerSample.time);
            const instantaneousVelocity = (event.clientX - this._lastPointerSample.x) / deltaTime;
            this._velocityX = (this._velocityX * 0.75) + (instantaneousVelocity * 0.25);
        }
        this._lastPointerSample = { x: event.clientX, time: sampleTime };
        const smoothedOffset = this._offsetX + ((boundedOffset - this._offsetX) * engine.dragFollowFactor);
        this._applyTransform(smoothedOffset, false);
        event.preventDefault();
    }

    _handlePointerUp(event) {
        if (!this._isDragging || event.pointerId !== this._dragPointerId) return;

        this._suppressNextClick = Boolean(this._dragState?.moved);
        this._detachPointerListeners();
        this.viewport.classList.remove('is-dragging');
        this.track.classList.remove('is-dragging');
        this.classList.remove('is-dragging');

        const engine = this._getEngineConfig();
        const boundedOffset = this._clampOffset(this._offsetX);
        const isOverscrolled = boundedOffset !== this._offsetX;
        const shouldAnimateReturn = !this.hasAttribute('a11y-reduce-motion') && isOverscrolled;
        this._applyTransform(boundedOffset, shouldAnimateReturn, shouldAnimateReturn ? engine.edgeReturnDuration : undefined, shouldAnimateReturn ? engine.edgeReturnEasing : undefined);

        this._isDragging = false;
        this._dragPointerId = null;
        this._lastPointerSample = null;
    }

    _handleClickCapture(event) {
        if (this._suppressNextClick) {
            event.preventDefault();
            event.stopImmediatePropagation();
            this._suppressNextClick = false;
        }
    }

    _detachPointerListeners() {
        window.removeEventListener('pointermove', this._boundPointerMove);
        window.removeEventListener('pointerup', this._boundPointerUp);
        window.removeEventListener('pointercancel', this._boundPointerUp);

        if (this.viewport && this._dragPointerId != null) {
            try {
                this.viewport.releasePointerCapture(this._dragPointerId);
            } catch {
                // The browser may release capture automatically when the pointer ends.
            }
        }
    }

    _projectDragOffset(offset, engine = this._getEngineConfig()) {
        const minOffset = this._minOffset();
        const maxOffset = 0;

        if (offset > maxOffset) {
            return maxOffset + this._smoothOverscroll(offset - maxOffset, engine);
        }

        if (offset < minOffset) {
            return minOffset + this._smoothOverscroll(offset - minOffset, engine);
        }

        return offset;
    }

    _smoothOverscroll(distance, engine = this._getEngineConfig()) {
        const magnitude = Math.abs(distance);
        if (!magnitude) return 0;

        const softened = engine.dragOverscrollMax * (1 - Math.exp(-magnitude / engine.dragOverscrollTension));
        return Math.sign(distance) * softened;
    }

    _minOffset() {
        const viewportWidth = this.viewport ? this.viewport.clientWidth : 0;
        const trackWidth = this.track ? this.track.scrollWidth : 0;
        return Math.min(0, viewportWidth - trackWidth);
    }

    _clampOffset(offset) {
        return Math.min(0, Math.max(this._minOffset(), offset));
    }

    _applyTransform(offset, animate, duration, easing) {
        this._offsetX = offset;

        if (!this.track) return;

        const transitionDuration = typeof duration === 'number' ? `${duration}ms` : '240ms';
        const transitionEasing = easing || 'cubic-bezier(0.22, 1, 0.36, 1)';
        this.track.style.transition = animate ? `transform ${transitionDuration} ${transitionEasing}` : 'none';
        this.track.style.transform = `translate3d(${offset}px, 0, 0)`;
    }

    _syncOffsetToBounds(animate = false) {
        const shouldAnimate = animate && !this.hasAttribute('a11y-reduce-motion');
        this._applyTransform(this._clampOffset(this._offsetX), shouldAnimate);
    }

    _stopMomentum() {
        if (this._momentumFrame != null) {
            cancelAnimationFrame(this._momentumFrame);
            this._momentumFrame = null;
        }
    }
}

if (!customElements.get('ds-gallery')) {
    customElements.define('ds-gallery', Gallery);
}