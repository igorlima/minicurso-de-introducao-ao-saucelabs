module.exports = function( grunt ){
  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 9001,
          base: 'source'
        }
      }
    },
    vows: {
      all: {
        options: {
          // String {spec|json|dot-matrix|xunit|tap}
          // defaults to "dot-matrix"
          //reporter: "spec"
        },
        src: ['spec/vows/**/*']
      }
    },
    watch: {
      all: {
        options: {
          atBegin: true
        },
        files: ['source/**/*', 'spec/vows/**/*'],
        tasks: ['connect', 'vows']
      }
    }
  });

  grunt.loadNpmTasks('grunt-vows'); // Linux e OSX
  //grunt.loadNpmTasks('grunt-vows-runner'); //querido Windows
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', ['connect', 'vows']);
};
