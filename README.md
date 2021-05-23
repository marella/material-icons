# Material Icons

Material design icon font and CSS framework for self hosting the icons.

> This package contains only the icon font and required CSS. So it is considerably smaller than the official `material-design-icons` package and easy to install.

- [Installation](#installation)
- [Usage](#usage)
- [Available Icons](#available-icons)

## Upcoming Changes

- [ ] Remove `eot` font files as they are only required for IE6-8
- [ ] Remove `ttf` and `otf` font files as `woff2` and `woff` font files should be enough for modern browsers

## Installation

Download the [latest release] or install using npm:

```sh
npm install material-icons
```

## Usage

Font files are present in the [`iconfont`][iconfont] directory and can be imported using CSS.

Import CSS:

```html
<link rel="stylesheet" href="/path/to/material-icons/iconfont/material-icons.css">
```

To display an icon, use:

```html
<span class="material-icons">pie_chart</span>
```

To display outlined, round, sharp and two tone icons, use:

```html
<span class="material-icons-outlined">pie_chart</span>
<span class="material-icons-round">pie_chart</span>
<span class="material-icons-sharp">pie_chart</span>
<span class="material-icons-two-tone">pie_chart</span>
```

<details>
<summary><strong>Customize using Sass</strong></summary>

To customize the build, import Sass instead of CSS:

```scss
@import 'material-icons/iconfont/material-icons.scss';
```

If you are using webpack sass-loader, use:

```scss
$material-icons-font-path: '~material-icons/iconfont/';

@import '~material-icons/iconfont/material-icons.scss';
```

Available Sass variables:

```scss
$material-icons-font-path: './' !default;
$material-icons-font-size: 24px !default;
$material-icons-font-display: block !default;
```

</details>

### CSS Classes

Alternatively, you may use CSS classes instead of ligatures to display an icon.

> **Note:** This method is not recommended as it requires a large CSS file to be imported in addition to above files.

Import CSS:

```html
<link rel="stylesheet" href="/path/to/material-icons/css/material-icons.min.css">
```

To display an icon, use:

```html
<span class="material-icons mi-pie-chart"></span>
```

To display outlined, round, sharp and two tone icons, use:

```html
<span class="material-icons-outlined mi-pie-chart"></span>
<span class="material-icons-round mi-pie-chart"></span>
<span class="material-icons-sharp mi-pie-chart"></span>
<span class="material-icons-two-tone mi-pie-chart"></span>
```

<details>
<summary><strong>Customize using Sass</strong></summary>

To customize the build, import Sass instead of CSS:

```scss
@import 'material-icons/css/material-icons.scss';
```

If you are using webpack sass-loader, use:

```scss
@import '~material-icons/css/material-icons.scss';
```

Available Sass variables:

```scss
$material-icons-css-prefix: 'mi' !default;
$material-icons-css-search: '_' !default;
$material-icons-css-replace: '-' !default; /* To replace '_' with '-' in CSS class names */
```

</details>

## Available Icons

See [demo].

[latest release]: https://github.com/marella/material-icons/releases
[iconfont]: https://github.com/marella/material-icons/tree/master/iconfont
[demo]: https://marella.github.io/material-icons/demo/
