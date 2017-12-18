/**
 * 
 * @author vfasky<vfasky@gmail.com>
 * 
 **/
'use strict'
const path = require('path')
require('shelljs/global')

module.exports = function getFileList(root, ignoreSuffix = ['.map']) {
    let ignoreRegs = []
    let list = []
    for (let v of ignoreSuffix) {
        ignoreRegs.push(new RegExp(v + '$', 'i'))
    }
    for (let file of ls(path.join(root, '**/*.*'))) {
        let pass = true
        for (let r of ignoreRegs) {
            if (r.test(file)) {
                pass = false
                break
            }
        }
        if (pass) {
            list.push(file)
        }
    }
    return list
}
