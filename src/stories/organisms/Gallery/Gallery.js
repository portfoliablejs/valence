// src/stories/organisms/Gallery/Gallery.js
import css from './gallery.css?inline';

export class Gallery extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>${css}</style>
            <div class="gallery-container" id="gallery">
                <slot></slot>
            </div>
        `;
        this.container = this.shadowRoot.getElementById('gallery');
    }

    connectedCallback() {
        this._setupDrag();
        this._setupWheelScroll();
    }

    _setupDrag() {
        let isDown = false, startX, scrollLeft;
        
        this.container.addEventListener('mousedown', (e) => {
            isDown = true;
            this.container.classList.add('dragging');
            startX = e.pageX - this.container.offsetLeft;
            scrollLeft = this.container.scrollLeft;
        });

        this.container.addEventListener('mouseleave', () => {
            isDown = false;
            this.container.classList.remove('dragging');
        });

        this.container.addEventListener('mouseup', () => {
            isDown = false;
            this.container.classList.remove('dragging');
        });

        this.container.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - this.container.offsetLeft;
            const walk = (x - startX) * 2; // Adjust multiplier for scroll speed
            this.container.scrollLeft = scrollLeft - walk;
        });
    }

    _setupWheelScroll() {
        this.container.addEventListener('wheel', (e) => {
            if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
                e.preventDefault();
                this.container.scrollLeft += e.deltaX;
            }
        }, { passive: false });
    }
}

if (!customElements.get('ds-gallery')) {
    customElements.define('ds-gallery', Gallery);
}