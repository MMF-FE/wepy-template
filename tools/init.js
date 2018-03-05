#!/usr/bin/env node
/*
 * 初始化项目 (或使用 yarn init 来初始化)
 * @Author: ciwyaitd
 * @Date: 2017-12-15 18:30:14
 * @Last Modified by: hejinming
 * @Last Modified time: 2018-01-09 16:02:04
 */
'use strict'

const inquirer = require('inquirer')
const fs = require('fs-extra')
const os = require('os')
const path = require('path')
const colors = require('colors')

require('shelljs/global')

const packagePath = path.join(__dirname, '../package.json')
let packageFile = JSON.parse( fs.readFileSync(packagePath, 'utf8') )

async function init() {
    let answers = await inquirer.prompt([{
        type: 'list',
        name: 'init',
        message: '是否初始化项目？',
        choices: [
            'yes',
            'no',
        ],
        default: () => {
            return 'no'
        },
    }, {
        type: 'list',
        name: 'git',
        message: '是否初始化项目 git ？',
        choices: [
            'yes',
            'no',
        ],
        default: () => {
            return 'no'
        },
    }, {
        type: 'input',
        name: 'name',
        message: 'Project name(项目名称)：',
        default: () => {
            return 'wepy typescript project'
        },
        validate: (name) => {
            if (!name) return '请输入项目名称'
            return true
        }
    }, {
        type: 'input',
        name: 'description',
        message: '项目描述：',
        default: () => {
            return ''
        }
    }, {
        type: 'input',
        name: 'author',
        message: '作者：',
        default: () => {
            return ''
        }
    }])

    if (answers.init === 'no') {
        process.exit()
        return
    }

    if (answers.git === 'yes') {
        console.log('初始化 git 操作'.green)
        exec('git init')
    }

    packageFile.name = answers.name
    packageFile.description = answers.description
    packageFile.author = answers.author

    let packageJson = JSON.stringify(packageFile, null, 4)
    console.log('初始化 package.json 操作'.green)

    try {
        await fs.writeFile(packagePath, packageJson, 'utf8')
    } catch (error) {

    }
    console.log('项目初始化完成'.green)
    process.exit()
    return
}

init()
