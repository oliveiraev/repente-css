module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.name %>-<%= pkg.version %>' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    uglify: {
        modernizr: {
            files: {
                'src/lib/modernizr/modernizr.min.js': 'src/lib/modernizr/modernizr.js'
            }
        }
    },
    cssmin: {
        normalize: {
            src: 'src/lib/normalize-css/normalize.css',
            dest: 'src/lib/normalize-css/normalize.min.css'
        },
        src: {
            src: [
                'src/**/css/*.css',
                '!**.min.css'
            ],
            expand: true,
            ext: '.min.css'
        }
    },
    bower: {
        install: {},
        options: {
            targetDir: 'src/lib',
            layout: 'byComponent'
        }
    },
    clean: {
        all: [
            'components',
            'src/lib/modernizr',
            'src/lib/normalize-css'
        ],
        modernizr: 'src/lib/modernizr/modernizr.js',
        normalize: 'src/lib/normalize-css/normalize.css'
    },
    watch: {
        css: {
            files: ['src/**/css/*.css', '!**.min.css'],
            tasks: 'cssmin:src',
            options: {
                event: 'changed'
            }
        }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-bower-task');

  grunt.registerTask(
    'setup',
    [
        'bower',
        'uglify',
        'cssmin',
        'clean:modernizr',
        'clean:normalize'
    ]
  );
  grunt.registerTask('default', ['setup']);

};
