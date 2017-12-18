/**
 * loading
 * @author vfasky<vfasky@gmail.com>
 * 
 **/
'use strict'

const ora = require('ora')

module.exports = function loading(msg = 'loading') {
    var spinner = ora(msg + ' ')
    spinner.start()
    return spinner
}

