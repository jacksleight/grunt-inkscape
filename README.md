# grunt-inkscape

**Sorry, I'm no longer actively maintaining this plugin. If you have a specfic request please create an issue and I'll try to take a look when I can, alternatively pull requests are very welcome. If anyone wants to take it over they're more than welcome, just get in touch.**

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
