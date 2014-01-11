module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        exec: {
            start_server: {
                cmd: 'node app.js'
            }
        }
    });

    // load plugin
    grunt.loadNpmTasks('grunt-exec');

    // custom task
    grunt.registerTask('start', ['exec:start_server']);
};
