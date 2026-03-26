/**
 * smartcardfyi-embed — TypeScript declarations
 *
 * The embed script is self-executing. Simply import it to activate widgets.
 * All configuration is provided via data-* attributes on DOM elements.
 */

export {};

declare global {
  interface HTMLElement {
    dataset: DOMStringMap & {
      /** Widget type for SmartCardFYI */
      'smartcardfyi'?: 'spec' | 'compare' | 'features' | 'glossary' | 'faq' | 'guide' | 'search' | 'standard';
      /** Entity slug (e.g. "card-types") */
      slug?: string;
      /** Visual theme */
      theme?: 'light' | 'dark' | 'sepia' | 'auto';
      /** Widget design style */
      style?: 'technical' | 'modern';
      /** Widget size */
      size?: 'default' | 'compact' | 'large';
      /** Search box placeholder text */
      placeholder?: string;
    };
  }
}
