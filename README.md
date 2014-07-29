# WORK IN PROGRESS

Most of this is the default grunt plugin template. The task works, but only supports the background-opacity and density options at the moment.

# grunt-inkscape

> The best Grunt plugin ever.

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-inkscape --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-inkscape');
```

## The "inkscape" task

### Overview
In your project's Gruntfile, add a section named `inkscape` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  inkscape: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### options.density
Type: `Number`
Default value: `90`

DPI at which to render the SVG images

#### options.backgroundOpacity
Type: `Number`
Default value: `1`

Background opacity of exported bitmap (either 0.0 to 1.0, or 1 to 255)

### Usage Examples

#### Default Options
In this example, all SVG files in the project root will be rendered as PNGs using the default options. The PNG files will be written to the `dest` folder, with '.png' appended to the file name.

```js
grunt.initConfig({
  inkscape: {
    options: {},
    files: [{
        expand: true,
        src: ['*.svg'],
        dest: 'dest/',
        ext: '.svg.png'
      }
    ]},
})
```

#### Custom Options
In this example, the export DPI is set to 300. This might be useful for generating a file to send to print.

```js
grunt.initConfig({
  inkscape: {
    options: {
      density: 300
    },
    files: [{
        expand: true,
        src: ['*.svg'],
        dest: 'dest/'
    }]
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
