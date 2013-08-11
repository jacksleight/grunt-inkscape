/*
* grunt-inkscape
* https://github.com/jacksleight/grunt-inkscape
*
* Copyright (c) 2013 Jack Sleight
* Licensed under the MIT license.
*/

'use strict';

module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		jshint: {
			all: [
			'Gruntfile.js',
			'tasks/*.js',
			'<%= nodeunit.tests %>',
			],
			options: {
				jshintrc: '.jshintrc',
			},
		},

	// Before generating any new files, remove any previously-created files.
	clean: {
		tests: ['tmp'],
	},

	// Configuration to be run (and then tested).
	inkscape: {
		options: {
			backgroundOpacity: 0,
		},
		images1x: {
			files: [
				{
					expand: true,
					cwd: 'test/images',
					src: ['*.svg'],
					dest: 'tmp/1x',
					ext: '.png',
				},
			],
		},
		images2x: {
			options: {
				density: 180,
			},
			files: [
				{
					expand: true,
					cwd: 'test/images',
					src: ['*.svg'],
					dest: 'tmp/2x',
					ext: '.png',
				},
			],
		},
	},

	// Unit tests.
	nodeunit: {
		tests: ['test/*_test.js'],
	},

	});

	// Actually load this plugin's task(s).
	grunt.loadTasks('tasks');

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-nodeunit');

	// Whenever the "test" task is run, first clean the "tmp" dir, then run this
	// plugin's task(s), then test the result.
	grunt.registerTask('test', ['clean', 'inkscape', 'nodeunit']);

	// By default, lint and run all tests.
	grunt.registerTask('default', ['jshint', 'test']);

};
