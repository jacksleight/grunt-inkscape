# grunt-inkscape

### Options

Please refer to [https://inkscape.org/en/doc/inkscape-man.html#options](https://inkscape.org/en/doc/inkscape-man.html#options) for more information.

#### options.backgroundOpacity
Type: `Number`
Default value: `1`

Background opacity of exported bitmap (either 0.0 to 1.0, or 1 to 255).

#### options.density
Type: `Number`
Default value: `90`

DPI at which to render the SVG images.
This was renamed to dpi in Inkscape, but it's still called density in this plugin.

### Usage Examples

```js
inkscape: {
    options: {
      backgroundOpacity: 0,
      density: 180,
    },
    files: [],
},
```
