module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // tsd: {
        //     refresh: {
        //         options: {
        //             // execute a command
        //             command: 'reinstall',

        //             //optional: always get from HEAD
        //             latest: true,

        //             // specify config file
        //             config: 'tsd.json',

        //             // experimental: options to pass to tsd.API
        //             opts: {
        //                 // props from tsd.Options
        //             }
        //         }
        //     }
        // },
        ts: {
            task : {
		src: ["app/**/*.ts", "!node_modules/**/*.ts"],
		out: 'dist/app.js'
            },
            options: {
                fast: 'never'
            }
        },
        watch: {
            typescript: {
                files: 'app/**/*.ts',
                tasks: ['ts']
            }
        },
	tslint: {
            options: {
                configuration: grunt.file.readJSON("tslint.json"),
            },
            files: {
                src: ['./app/**/*.ts']
            }
        },
        typedoc: {
            build: {
                src: [ './app/**/*.ts'],
                options: {
                    module: 'commonjs',
                    out: './docs',
                    name: 'tspdx',
                    target: 'es5'
                }
            }
        }
    });

    grunt.registerTask('doc', ['typedoc']); //generate documentation
    grunt.registerTask('lint', ['tslint', 'watch']); //Lint TS continuously
    grunt.registerTask('compile', ['ts', 'watch']); //Compile TS continuously
    // grunt.registerTask('compile-lint', ['tslint', 'ts', 'watch']); //Compile and lint SASS and TS continuously

    //Run ALL TASKS - "grunt"
    // grunt.registerTask('default', ['tsd','typedoc', 'tslint', 'ts', 'watch']); 
};
