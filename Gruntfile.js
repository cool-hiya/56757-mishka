"use strict";

module.exports = function (grunt) {

  require("load-grunt-tasks")(grunt);

  grunt.initConfig({
    sass: {
      style: {
        files: {
          "source/css/style.css": "source/sass/style.scss"
        }
      }
    },

    postcss: {
      style: {
        options: {
          processors: [
            require("autoprefixer")()
          ]
        },
        src: "source/css/*.css"
      }
    },

    browserSync: {
      server: {
        bsFiles: {
          src: [
            "source/*.html",
            "source/css/*.css"
          ]
        },
        options: {
          server: "source/",
          watchTask: true,
          notify: false,
          open: true,
          cors: true,
          ui: false
        }
      }
    },

    watch: {
      style: {
        files: ["source/sass/**/*.{scss,sass}"],
        tasks: ["sass", "postcss"]
      }
    }
  });

  grunt.registerTask("serve", ["browserSync", "watch"]);
};
