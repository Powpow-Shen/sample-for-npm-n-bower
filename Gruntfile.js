var grunt = require('grunt');

grunt.loadNpmTasks('grunt-nuget');

grunt.initConfig({
    nugetrestore: {
        restore: {
            src: 'packages.config',
            dest: 'nuget_packages/'

        }
    }
});

grunt.registerTask('default', [
    'nugetrestore:restore'
]);
