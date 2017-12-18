#!/usr/bin/env node
/*
 * cli 快速生成文件
 * @Author: ciwyaitd
 * @Date: 2017-12-15 17:32:38
 * @Last Modified by: hejinming <b84866466@gmail.com>
 * @Last Modified time: 2017-12-18 14:07:37
 */
'use strict'

const fs = require('fs-extra')
const os = require('os')
const path = require('path')
const yargs = require('yargs')
const getGitUser = require('./util/getGitUser')
const getDate = require('./util/getDate')
const version = require('../package.json').version
const generate = require('./tpl/generate')

let gitUser = getGitUser()
let user = os.userInfo({ encoding: 'utf8' })

yargs.command(['add <name>', 'a'], '添加组件', {
    type: {
        alias: 't',
        describe: '组件类型',
        choices: ['page', 'p', 'component', 'c'],
        default: 'page'
    },
}, function (args) {

    let distPath = args.name
    let name = distPath.substr(distPath.lastIndexOf('/') + 1)
    let componentName = name[0].toLocaleUpperCase() + name.substr(1)
    let type = args.type

    if (['page', 'p'].indexOf(type) > -1) {
        generate('page', path.join(__dirname, '../src/pages', distPath), {
            name,
            componentName,
            curDate: getDate(),
            username:  gitUser,
            version,
        })
        return
    }

    if (['component', 'c'].indexOf(type) > -1) {
        generate('component', path.join(__dirname, '../src/components', distPath), {
            name,
            componentName,
            username:  gitUser,
            curDate: getDate(),
            version,
        })
        return
    }
})
.version(version)
.alias('version', 'v')
.help()
.alias('help', 'h')
.argv
