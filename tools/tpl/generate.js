/*
 * generate files
 * @Author: ciwyaitd
 * @Date: 2017-12-15 18:13:21
 * @Last Modified by: hejinming <b84866466@gmail.com>
 * @Last Modified time: 2017-12-16 10:58:51
 */

'use strict'

let fs = require('fs-extra')
let path = require('path')
let colors = require('colors')
let confirm = require('../util/confirm')

function compile (tplFile, data) {
    let conent = fs.readFileSync(tplFile, 'utf8')

    return conent.replace(/\${(\w+)}/gi, function (match, name) {
        return data[name] ? data[name] : ''
    })
}

function writeFiles (type, distPath, data) {
    let tplPath = path.join(__dirname, type)

    fs.readdir(tplPath, 'utf8', (err, files) => {
        if (err) {
            console.log(colors.red(err))
            return false
        }

        files.forEach((filename) => {
            let content = compile(path.join(tplPath, filename), data)
            let distFileName = data.name + '.' + filename.split('.')[1]

            let filePath = path.join(distPath, distFileName)

            console.log(colors.green('write file: '))
            console.log(colors.underline(filePath))
            fs.writeFileSync(filePath, content, 'utf8')
        })

        console.log(colors.green(`${type}: ${data.name} is generated.`))
    })
}

module.exports = function (type, distPath, data) {
    if (fs.existsSync(distPath)) {
        confirm(`The component ${type}s/${data.name} is exist. Do your want to override it?`, (flag) => {
            if (flag) {
                writeFiles(type, distPath, data)
            }
        })
    } else {
        fs.mkdirpSync(distPath)
        writeFiles(type, distPath, data)
    }
}
