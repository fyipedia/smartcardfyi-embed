# smartcardfyi-embed

[![npm](https://img.shields.io/npm/v/smartcardfyi-embed)](https://www.npmjs.com/package/smartcardfyi-embed)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Zero Dependencies](https://img.shields.io/badge/dependencies-0-brightgreen)](https://www.npmjs.com/package/smartcardfyi-embed)
[![Size](https://img.shields.io/badge/size-~11--16KB_gzipped-green)](https://bundlephobia.com/package/smartcardfyi-embed)

Embed **SmartCardFYI** specification widgets — smart card types, technical standards, glossary terms, and interactive tools — on any website. **8 widget types**, zero dependencies, Shadow DOM style isolation, 3 built-in themes (light, dark, sepia), and live data from the [SmartCardFYI](https://smartcardfyi.com) database.

Every widget includes a "Powered by SmartCardFYI" backlink directing readers to the full technical reference.

> **Try the interactive widget builder at [widget.smartcardfyi.com](https://widget.smartcardfyi.com)**

## Quick Start

```html
<!-- Place widget div where you want it to appear -->
<div data-smartcardfyi="spec" data-slug="card-types" data-theme="light"></div>

<!-- Load the embed script once, anywhere on the page -->
<script src="https://cdn.jsdelivr.net/npm/smartcardfyi-embed@1/dist/embed.min.js"></script>
```

That's it. The widget fetches data from the SmartCardFYI API and renders with full style isolation.

## Widget Types

| Type | Usage | Description |
|------|-------|-------------|
| `spec` | `<div data-smartcardfyi="spec" data-slug="..."></div>` | Technical specification card — protocol, range, data rate, standards |
| `compare` | `<div data-smartcardfyi="compare" data-slug="..."></div>` | Side-by-side comparison of two technologies or standards |
| `features` | `<div data-smartcardfyi="features" data-slug="..."></div>` | Feature list card — capabilities, supported modes, variants |
| `glossary` | `<div data-smartcardfyi="glossary" data-slug="..."></div>` | Glossary term definition with cross-references |
| `faq` | `<div data-smartcardfyi="faq" data-slug="..."></div>` | FAQ accordion for common technical questions |
| `guide` | `<div data-smartcardfyi="guide" data-slug="..."></div>` | Implementation guide — setup, code examples, best practices |
| `search` | `<div data-smartcardfyi="search" data-slug="..."></div>` | Search box linking to the full technology database |
| `standard` | `<div data-smartcardfyi="standard" data-slug="..."></div>` | Smart card standard reference — ISO 7816, EMV, GlobalPlatform |

## Widget Options

| Attribute | Values | Default | Description |
|-----------|--------|---------|-------------|
| `data-smartcardfyi` | spec, compare, features, glossary, faq, guide, search, [tools] | required | Widget type |
| `data-slug` | e.g. "card-types" | — | Entity slug from the SmartCardFYI database |
| `data-theme` | light, dark, sepia, auto | light | Visual theme (`auto` follows OS preference) |
| `data-styleVariant` | technical, modern | technical | Widget design style |
| `data-size` | default, compact, large | default | Widget size |
| `data-placeholder` | any string | "Search Smart Card Types…" | Search box placeholder |

## Themes

```html
<!-- Light (default) -->
<div data-smartcardfyi="spec" data-slug="card-types" data-theme="light"></div>

<!-- Dark -->
<div data-smartcardfyi="spec" data-slug="card-types" data-theme="dark"></div>

<!-- Sepia -->
<div data-smartcardfyi="spec" data-slug="card-types" data-theme="sepia"></div>

<!-- Auto — follows OS dark/light preference -->
<div data-smartcardfyi="spec" data-slug="card-types" data-theme="auto"></div>
```

## Web Components (Custom Elements)

As an alternative to `data-*` attributes, you can use native HTML custom elements:

```html
<!-- Custom element form -->
<smartcardfyi-spec slug="card-types" theme="light"></smartcardfyi-spec>
<smartcardfyi-compare slug-a="card-types" slug-b="other-slug"></smartcardfyi-compare>
<smartcardfyi-search placeholder="Search Smart Card Types…"></smartcardfyi-search>

<script src="https://cdn.jsdelivr.net/npm/smartcardfyi-embed@1/dist/embed.min.js"></script>
```

Use `style-variant` (not `style`) to avoid conflicts with the HTML reserved `style` attribute.

## Examples

### Specification Card

```html
<div data-smartcardfyi="spec" data-slug="card-types" data-theme="light"></div>
<script src="https://cdn.jsdelivr.net/npm/smartcardfyi-embed@1/dist/embed.min.js"></script>
```

### Side-by-Side Comparison

```html
<div data-smartcardfyi="compare" data-slug-a="card-types" data-slug-b="other-slug"></div>
<script src="https://cdn.jsdelivr.net/npm/smartcardfyi-embed@1/dist/embed.min.js"></script>
```

### Search Box

```html
<div data-smartcardfyi="search" data-placeholder="Search Smart Card Types…"></div>
<script src="https://cdn.jsdelivr.net/npm/smartcardfyi-embed@1/dist/embed.min.js"></script>
```

### Glossary Term

```html
<div data-smartcardfyi="glossary" data-slug="example-term" data-theme="light"></div>
<script src="https://cdn.jsdelivr.net/npm/smartcardfyi-embed@1/dist/embed.min.js"></script>
```

## CDN Options

### jsDelivr (recommended — global CDN, auto-updates with npm)

```html
<script src="https://cdn.jsdelivr.net/npm/smartcardfyi-embed@1/dist/embed.min.js"></script>
```

### Specific version (production stability)

```html
<script src="https://cdn.jsdelivr.net/npm/smartcardfyi-embed@1.0.0/dist/embed.min.js"></script>
```

### npm (for bundlers)

```bash
npm install smartcardfyi-embed
```

```javascript
import 'smartcardfyi-embed';
```

## Technical Details

- **Shadow DOM**: Complete style isolation — no CSS conflicts with your site
- **Zero dependencies**: No jQuery, React, or any external library
- **JetBrains Mono**: Code blocks use JetBrains Mono loaded from jsDelivr
- **System fonts**: Body text uses system-ui — no extra font requests
- **CORS**: SmartCardFYI API has CORS enabled for all origins
- **MutationObserver**: Works with dynamically added elements (SPAs)
- **IntersectionObserver**: Lazy loading — widgets only fetch when entering viewport (200px margin)
- **Bundle size**: ~11–16KB gzipped (per-site build — only includes tools available on SmartCardFYI)

## Learn More About Smart Card Types

Visit [smartcardfyi.com](https://smartcardfyi.com) — SmartCardFYI is a comprehensive smart card types technical reference with specifications, standards, interactive tools, and implementation guides.

- **API docs**: [smartcardfyi.com/developers/](https://smartcardfyi.com/developers/)
- **Widget builder**: [widget.smartcardfyi.com](https://widget.smartcardfyi.com)
- **npm package**: [npmjs.com/package/smartcardfyi-embed](https://www.npmjs.com/package/smartcardfyi-embed)
- **GitHub**: [github.com/fyipedia/smartcardfyi-embed](https://github.com/fyipedia/smartcardfyi-embed)

## Tag FYI Family

Part of [FYIPedia](https://fyipedia.com) — open-source developer tools ecosystem. Tag FYI covers identification, tagging, and wireless communication technologies.

| Site | Domain | Focus | Package |
|------|--------|-------|---------|
| BarcodeFYI | [barcodefyi.com](https://barcodefyi.com) | Barcode formats, EAN, UPC, ISBN, QR, Code 128 standards | [npm](https://www.npmjs.com/package/barcodefyi-embed) |
| QRCodeFYI | [qrcodefyi.com](https://qrcodefyi.com) | QR code generation, scanning, error correction, encoding modes | [npm](https://www.npmjs.com/package/qrcodefyi-embed) |
| NFCFYI | [nfcfyi.com](https://nfcfyi.com) | NFC tags, NDEF records, contactless payments, ISO 14443 | [npm](https://www.npmjs.com/package/nfcfyi-embed) |
| BLEFYI | [blefyi.com](https://blefyi.com) | Bluetooth Low Energy, GATT profiles, beacons, iBeacon, Eddystone | [npm](https://www.npmjs.com/package/blefyi-embed) |
| RFIDFYI | [rfidfyi.com](https://rfidfyi.com) | RFID tags, frequency bands, EPC Gen 2, ISO 18000 standards | [npm](https://www.npmjs.com/package/rfidfyi-embed) |
| **SmartCardFYI** | [smartcardfyi.com](https://smartcardfyi.com) | Smart cards, EMV, APDU commands, Java Card, ISO 7816 | **[npm](https://www.npmjs.com/package/smartcardfyi-embed)** |

## Embed Widget

Embed [SmartCardFYI](https://smartcardfyi.com) widgets on any website with [smartcardfyi-embed](https://widget.smartcardfyi.com):

```html
<script src="https://cdn.jsdelivr.net/npm/smartcardfyi-embed@1/dist/embed.min.js"></script>
<div data-smartcardfyi="entity" data-slug="example"></div>
```

Zero dependencies · Shadow DOM · 4 themes (light/dark/sepia/auto) · [Widget docs](https://widget.smartcardfyi.com)

## License

MIT — see [LICENSE](./LICENSE).

Built with care by [FYIPedia](https://fyipedia.com).
