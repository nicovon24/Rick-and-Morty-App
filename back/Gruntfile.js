module.exports = function (grunt) {
	grunt.initConfig({
		jshint: {
			files: ["*.js", "lib/**/*.js", "test/**/*.js"],
			options: {
				esversion: 6,
			},
		},
		nodeunit: {
			files: ["test/**/*.js"],
		},
		watch: {
			files: ["<%= jshint.files %>", "<%= nodeunit.files %>"],
			tasks: ["jshint", "nodeunit"],
		},
		clean: {
			build: {
				src: ["build"],
			},
		},
		copy: {
			main: {
				expand: true,
				cwd: "src",
				src: "**",
				dest: "dist/",
			},
		},
	});

	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-contrib-nodeunit");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-contrib-clean");

	grunt.registerTask("default", ["jshint", "nodeunit"]);
	grunt.registerTask("test", ["nodeunit"]);
	grunt.registerTask("build", ["clean"]);
};
