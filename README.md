# Material Icons

Material design icon font and CSS framework for self hosting the icons.

- [Installation](#installation)
- [Usage](#usage)
- [Available Icons](#available-icons)

## Installation

Install the [latest version][releases] using:

```sh
npm install material-icons@latest
```

## Usage

Fonts are located in the [`iconfont`][iconfont] directory and can be imported using CSS:

```html
<link href="/path/to/material-icons/iconfont/material-icons.css" rel="stylesheet">
```

To display an icon, use:

```html
<span class="material-icons">pie_chart</span>
```

To display outlined, round, sharp and two-tone icons, use:

```html
<span class="material-icons-outlined">pie_chart</span>
<span class="material-icons-round">pie_chart</span>
<span class="material-icons-sharp">pie_chart</span>
<span class="material-icons-two-tone">pie_chart</span>
```

For more advanced usage, see:

<details>
<summary><strong>Import using build tools</strong></summary>

If you are using webpack, Create React App or Vue CLI, import CSS in `src/index.js` or `src/main.js`:

```js
import 'material-icons/iconfont/material-icons.css';
```

If you are using Angular CLI, import CSS in `src/styles.css`:

```css
@import 'material-icons/iconfont/material-icons.css';
```

</details>

<details>
<summary><strong>Display using Angular <code>mat-icon</code></strong></summary>

To display an icon, use:

```html
<mat-icon>pie_chart</mat-icon>
```

To display outlined, round, sharp and two-tone icons, use:

```html
<mat-icon fontSet="material-icons-outlined">pie_chart</mat-icon>
<mat-icon fontSet="material-icons-round">pie_chart</mat-icon>
<mat-icon fontSet="material-icons-sharp">pie_chart</mat-icon>
<mat-icon fontSet="material-icons-two-tone">pie_chart</mat-icon>
```

</details>

<details>
<summary><strong>Customize using Sass</strong></summary>

To customize the build, import Sass instead of CSS:

```scss
@import 'material-icons/iconfont/material-icons.scss';
```

Available Sass variables:

```scss
$material-icons-font-path: './' !default;
$material-icons-font-size: 24px !default;
$material-icons-font-display: block !default;
```

If you are getting errors with webpack or Vue CLI, add this line before importing above Sass file:

```scss
$material-icons-font-path: '~material-icons/iconfont/';
```

</details>

### CSS Classes

> **Note:** This method is not recommended as it requires an additional large CSS file.

Alternatively, you may use CSS classes to display icons by importing additional CSS:

```html
<link href="/path/to/material-icons/css/material-icons.css" rel="stylesheet">
```

To display an icon, use:

```html
<span class="material-icons mi-pie-chart"></span>
```

To display outlined, round, sharp and two-tone icons, use:

```html
<span class="material-icons-outlined mi-pie-chart"></span>
<span class="material-icons-round mi-pie-chart"></span>
<span class="material-icons-sharp mi-pie-chart"></span>
<span class="material-icons-two-tone mi-pie-chart"></span>
```

For more advanced usage, see:

<details>
<summary><strong>Import using build tools</strong></summary>

If you are using webpack, Create React App or Vue CLI, import CSS in `src/index.js` or `src/main.js`:

```js
import 'material-icons/css/material-icons.css';
```

If you are using Angular CLI, import CSS in `src/styles.css`:

```css
@import 'material-icons/css/material-icons.css';
```

</details>

<details>
<summary><strong>Display using Angular <code>mat-icon</code></strong></summary>

To display an icon, use:

```html
<mat-icon fontIcon="mi-pie-chart"></mat-icon>
```

To display outlined, round, sharp and two-tone icons, use:

```html
<mat-icon fontSet="material-icons-outlined" fontIcon="mi-pie-chart"></mat-icon>
<mat-icon fontSet="material-icons-round" fontIcon="mi-pie-chart"></mat-icon>
<mat-icon fontSet="material-icons-sharp" fontIcon="mi-pie-chart"></mat-icon>
<mat-icon fontSet="material-icons-two-tone" fontIcon="mi-pie-chart"></mat-icon>
```

</details>

<details>
<summary><strong>Customize using Sass</strong></summary>

To customize the build, import Sass instead of CSS:

```scss
@import 'material-icons/css/material-icons.scss';
```

Available Sass variables:

```scss
$material-icons-css-prefix: 'mi' !default;
$material-icons-css-search: '_' !default;
$material-icons-css-replace: '-' !default; // Replaces '_' with '-' in CSS classes
```

</details>

## Available Icons

See [demo].

## License

Material design icons are created by [Google](https://github.com/google/material-design-icons#license).

> We have made these icons available for you to incorporate into your products under the [Apache License Version 2.0][license]. Feel free to remix and re-share these icons and documentation in your products.
We'd love attribution in your app's *about* screen, but it's not required. The only thing we ask is that you not re-sell these icons.

[releases]: https://github.com/marella/material-icons/releases
[iconfont]: https://github.com/marella/material-icons/tree/main/iconfont
[license]: https://github.com/marella/material-icons/blob/main/LICENSE
[demo]: https://marella.github.io/material-icons/demo/
