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

    csso: {
      compress: {
        options: {
          report: "gzip"
        },
        files: {
          "source/css/style.min.css": ["source/css/style.css"]
        }
      }
    },

    imagemin: {
      images: {
        options: {
          optimizationLevel: 3,
          progressive: true
        },
        files: [{
          expand: true,
          src: ["source/img/**/*.{png,jpg,svg}"],
        }]
      }
    },

    cwebp: {
      images: {
        options: {
          q: 90
        },
        files: [{
          expand: true,
          src: ["source/img/**/*.{png,jpg}"],
        }]
      }
    },

    // svgstore: {
    //   options: {
    //     prefix: 'icon-', // This will prefix each ID
    //     svg: { // will add and overide the the default xmlns="http://www.w3.org/2000/svg" attribute to the resulting SVG
    //       viewBox: '0 0 100 100',
    //       xmlns: 'http://www.w3.org/2000/svg'
    //     }
    //   },
    //   your_target: {
    //     // Target-specific file lists and/or options go here.
    //   },
    // },

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
