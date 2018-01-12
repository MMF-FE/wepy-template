const path = require('path');
var prod = process.env.NODE_ENV === 'production'

module.exports = {
    wpyExt: '.wpy',
    build: {
        web: {
            htmlTemplate: path.join('src', 'index.template.html'),
            htmlOutput: path.join('web', 'index.html'),
            jsOutput: path.join('web', 'index.js')
        }
    },
    resolve: {
        alias: {
            '@': path.join(__dirname, 'src'),
            'page': path.join(__dirname, 'src/common/base.js'),
            'component': path.join(__dirname, 'src/common/baseComponent.js')
        },
        modules: ['node_modules']
    },
    eslint: true,
    compilers: {
        sass: {
            sourceMap: true,
            includePaths: [
                path.join(__dirname, 'src/style'),
            ]
        },
        typescript: {
            // compilerOptions: {
                // module: "system"
            // }
        },
        babel: {
            sourceMap: true,
            presets: [
                'es2015',
                'stage-0'
            ],
            plugins: [
                'transform-class-properties',
                'transform-decorators-legacy',
                'transform-object-rest-spread',
                'transform-export-extensions',
            ]
        }
    },
    plugins: {
    },
    appConfig: {
        noPromiseAPI: ['createSelectorQuery']
    }
}

if (prod) {

    delete module.exports.compilers.babel.sourcesMap;
    // 压缩sass
    module.exports.compilers['sass'] = { outputStyle: 'compressed' }

    // 压缩js
    module.exports.plugins = {
        uglifyjs: {
            filter: /\.js$/,
            config: {
            }
        },
        imagemin: {
            filter: /\.(jpg|png|jpeg)$/,
            config: {
                jpg: {
                    quality: 80
                },
                png: {
                    quality: 80
                }
            }
        }
    }
}
