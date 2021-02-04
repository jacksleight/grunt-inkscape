[![No Maintenance Intended](http://unmaintained.tech/badge.svg)](http://unmaintained.tech/) → **This project is abandoned**

# grunt-inkscape

### Installation

You must have Inkscape installed and available via the `inkscape` command.

### Options

Please refer to [https://inkscape.org/en/doc/inkscape-man.html#options](https://inkscape.org/en/doc/inkscape-man.html#options) for more information.

#### options.backgroundOpacity
Type: `Number`
Default value: `null`

Background opacity of exported bitmap (either 0.0 to 1.0, or 1 to 255).

#### options.density
Type: `Number`
Default value: `null`

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
