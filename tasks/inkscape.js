/*
* grunt-inkscape
* https://github.com/jacksleight/grunt-inkscape
*
* Copyright (c) 2013 Jack Sleight
* Licensed under the MIT license.
*/

'use strict';

module.exports = function(grunt) {

	grunt.registerMultiTask('inkscape', 'Your task description goes here.', function() {
	
		var options = this.options({
			density: null,
			backgroundOpacity: null,
		});

		var args = [];
		if (options.density) {
			args.push('-d', options.density);
		}
		if (options.backgroundOpacity) {
			args.push('-y', options.backgroundOpacity);
		}
		
		grunt.util.async.forEach(this.files, function (el, next) {

			var dir = el.dest.split('/');
			dir.pop();
			dir = dir.join('/');
			if (!grunt.file.exists(dir)) {
				grunt.file.mkdir(dir);
			}

			var argsb = args;
			argsb.push('-f', el.src[0], '-e', el.dest);

			var spawn = grunt.util.spawn({
				cmd: 'inkscape',
				args: argsb,
			}, function(err, result, code) {
				grunt.log.writeln('✔ '.green + el.src);
				next();
			});
		/*	spawn.stderr.on('data', function(buf) {
				grunt.fail.fatal(String(buf));
			});*/

		}, this.async());

	});

};