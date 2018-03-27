# Material Icons

Material design icon font and CSS framework for self hosting the icons.

> **Note:** This package contains only the icon font and required CSS. So it is considerably small compared to the official [material-design-icons] package and easy to install.

## Installation

Download the [latest release] or install using npm:

```
npm install material-icons
```

## Usage

Font files are present in the `iconfont` directory and can be imported using CSS.

Import the required CSS:

```html
<link rel="stylesheet" href="/path/to/material-icons/iconfont/material-icons.css">
```

or import the SCSS:

```scss
$material-icons-font-path: '~material-icons/iconfont/';

@import 'material-icons/iconfont/material-icons.scss';
```

To display an icon use:

```html
<span class="material-icons">face</span>
```

Available Sass variables:

```scss
$material-icons-codepoints: () !default; /* Sass map of icon names and codepoints */
$material-icons-font-path: '' !default;
$material-icons-font-name: 'MaterialIcons-Regular' !default;
$material-icons-font-size: 24px !default;
$material-icons-font-family: 'Material Icons' !default;
```

Available Sass mixins:

```scss
.material-icons {
  @include material-icons();
}
```

## CSS Classes (Optional)

Alternatively you can use CSS classes to display an icon.

> **Note:** This method is not recommended as it requires a large CSS file to be imported in addition to above files.

Import the required CSS:

```html
<link rel="stylesheet" href="/path/to/material-icons/css/material-icons.min.css">
```

or import the SCSS:

```scss
$material-icons-css-prefix: 'mi';

@import 'material-icons/css/material-icons.scss';
```

To display an icon use:

```html
<span class="mi mi-face"></span>
```

Available Sass variables:

```scss
$material-icons-css-prefix: 'mi' !default;
$material-icons-css-search: '_' !default;
$material-icons-css-replace: '-' !default; /* To replace '_' with '-' in CSS class names */
```

Available Sass mixins:

```scss
.mi-face {
  @include material-icon('face');
}
```

## Available Icons

See [material design icons].

[latest release]: https://github.com/marella/material-icons/releases
[material design icons]: https://material.io/icons/
[material-design-icons]: https://github.com/google/material-design-icons
