## CSS Classes

Alternatively, you may use CSS classes instead of ligatures to display icons.

> **Note:** This method is not recommended as it requires an additional large CSS file.

Import in JS file (example: `src/index.js` in Create React App, `src/main.js` in Vue CLI):

```js
import 'material-icons/css/material-icons.css';
```

or import in CSS file (example: `src/styles.css` in Angular CLI):

```css
@import 'material-icons/css/material-icons.css';
```

or import in HTML file:

```html
<link href="/path/to/material-icons/css/material-icons.css" rel="stylesheet">
```

To display an icon, use one of the following:

```html
<span class="material-icons mi-pie-chart"></span>          <!-- Filled -->
<span class="material-icons-outlined mi-pie-chart"></span> <!-- Outlined -->
<span class="material-icons-round mi-pie-chart"></span>    <!-- Round -->
<span class="material-icons-sharp mi-pie-chart"></span>    <!-- Sharp -->
<span class="material-icons-two-tone mi-pie-chart"></span> <!-- Two Tone -->
```

### Using Sass

Import in Sass file (example: `src/styles.scss` in Angular CLI):

```scss
@import 'material-icons/css/material-icons.scss';
```

Available Sass variables:

```scss
$material-icons-css-prefix: 'mi' !default;
$material-icons-css-search: '_' !default;
$material-icons-css-replace: '-' !default; // Replaces '_' with '-' in CSS classes
```

### Using Angular `mat-icon`

To display an icon, use one of the following:

```html
<mat-icon fontIcon="mi-pie-chart"></mat-icon>
<mat-icon fontSet="material-icons-outlined" fontIcon="mi-pie-chart"></mat-icon>
<mat-icon fontSet="material-icons-round" fontIcon="mi-pie-chart"></mat-icon>
<mat-icon fontSet="material-icons-sharp" fontIcon="mi-pie-chart"></mat-icon>
<mat-icon fontSet="material-icons-two-tone" fontIcon="mi-pie-chart"></mat-icon>
```

---

For installation and other information, see [README](https://github.com/marella/material-icons#readme).
