import { html } from 'lit';
import { fn } from 'storybook/test';
import './Modal';
import '../../molecules/ItemRow/ItemRow';
import '../../atoms/Divider/Divider';

export default {
  title: 'Organisms/Modal',
  tags: ['autodocs'],
  argTypes: { 
    title: { control: 'text' }, 
    open: { control: 'boolean' },
    hideBackdrop: { control: 'boolean' }
  },
  args: { onClose: fn() },
};

const modalStyles = html`
  <style>
    .a11y-options { display: flex; flex-direction: column; gap: 2px; }
    .a11y-category-title {
      font-size: 10px; font-weight: 700; text-transform: uppercase;
      letter-spacing: 0.05em; color: var(--color-gray-light);
      padding: 4px var(--space-sm) 2px var(--space-sm); margin-top: 2px; display: block;
      font-family: var(--font-family, sans-serif);
    }
    .a11y-category-title.mt-group { margin-top: var(--space-md); }
  </style>
`;

export const AccessibilityMenu = {
  args: { title: 'Accessibility', open: true, hideBackdrop: true },
  render: (args) => html`
    <div style="padding: 20px; background: var(--color-card-bg); border-radius: 12px;">
      <ds-modal title="${args.title}" open="${args.open}" hide-backdrop="${args.hideBackdrop}" @ds-modal-close="${args.onClose}">
        ${modalStyles}
        <div class="a11y-options">
          <span class="a11y-category-title mt-group">Typography</span>
          <ds-item-row icon="play" label="Text Size" kbd="⇧ T" control="font-size"></ds-item-row>
          <ds-item-row icon="play" label="Dyslexia Font" kbd="⇧ Y" control="toggle"></ds-item-row>
          
          <ds-divider style="margin: 4px 0;"></ds-divider>
          
          <span class="a11y-category-title">Visuals</span>
          <ds-item-row icon="eye-closed" label="Dark Mode" kbd="⇧ D" control="toggle"></ds-item-row>
          <ds-item-row icon="eye-open" label="High Contrast" kbd="⇧ C" control="toggle" active="true"></ds-item-row>
          
          <ds-divider style="margin: 4px 0;"></ds-divider>
          
          <span class="a11y-category-title mt-group">Motion & Focus</span>
          <ds-item-row icon="play" label="Reduce Motion" kbd="⇧ M" control="toggle"></ds-item-row>
          <ds-item-row icon="play" label="TAB Nav" kbd="⇧ F" control="toggle"></ds-item-row>

          <ds-divider style="margin: 4px 0;"></ds-divider>

          <span class="a11y-category-title mt-group">Example Check Row</span>
          <ds-item-row icon="check" label="Enable Feature" control="check" selected="true"></ds-item-row>
        </div>
      </ds-modal>
    </div>
  `,
};

export const LanguageMenu = {
  args: { title: 'Language', open: true, hideBackdrop: true },
  render: (args) => html`
    <div style="padding: 20px; background: var(--color-card-bg); border-radius: 12px;">
      <ds-modal title="${args.title}" open="${args.open}" hide-backdrop="${args.hideBackdrop}" @ds-modal-close="${args.onClose}">
        ${modalStyles}
        <div class="a11y-options">
          <ds-item-row icon="language" label="English" control="check" selected="true"></ds-item-row>
          <ds-divider style="margin: 4px 0;"></ds-divider>
          <ds-item-row icon="language" label="Português" control="check"></ds-item-row>
        </div>
      </ds-modal>
    </div>
  `,
};