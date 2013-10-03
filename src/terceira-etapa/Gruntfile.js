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
        src: ['spec/meus-testes.js']
      }
    },
    watch: {
      spec: {
        options: {
          atBegin: true
        },
        files: ['source/**/*', 'spec/meus-testes.js'],
        tasks: ['connect', 'vows']
      }
    }
  });

  grunt.loadNpmTasks('grunt-vows');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', ['vows']);
};
