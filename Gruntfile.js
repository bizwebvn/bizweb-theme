module.exports = function(grunt){
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-bizweb');

  grunt.initConfig({
     bizweb: {
      options: {
          api_key: "5ed23438423448e7bbe16cb7d641eb18",
          password: "c27928e47ddf4876865bba964c7fb1cb",
          url: "only-one3.bizwebvietnam.net",
          base: 'theme',
          theme: '44467',
          sync: '44467'
        }
    },

    watch: {
      bizweb: {
        files: ['theme/**/*'],
        tasks: ["bizweb"]
      }
    }
  });

  grunt.registerTask('default', ['bizweb']);
};
