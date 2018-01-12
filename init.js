#!/usr/bin/env node
/*
 * 初始化项目 (或使用 yarn init 来初始化)
 * @Author: ciwyaitd
 * @Date: 2017-12-15 18:30:14
 * @Last Modified by: hejinming
 * @Last Modified time: 2018-01-12 19:22:26
 */
'use strict'

const inquirer = require('inquirer')
const fs = require('fs-extra')
const path = require('path')
const confirm = require('./template/tools/util/confirm')

require('shelljs/global')

async function init() {
    let answers = await inquirer.prompt([{
        type: 'input',
        name: 'path',
        message: '请输入要新建的项目的相对路径（包含项目名称）？',
        default: () => {
            return path.join(__dirname, 'wepy-template')
        },
    }, {
        type: 'input',
        name: 'name',
        message: 'Project name(项目名称)：',
        default: () => {
            return 'wepy-project'
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
            return 'wepy typescript project'
        }
    }, {
        type: 'input',
        name: 'author',
        message: '作者：',
        default: () => {
            return ''
        }
    }])

    let target = path.join(__dirname, answers.path)

    if (fs.existsSync(target)) {
        confirm(`The "${target}" is exist. Do your want to override it?`, async (flag) => {
            if (flag) {
                await build(answers)
            }
            process.exit()
            return
        })
        return
    }

    await build(answers)
    process.exit()
    return
}

async function build(answers) {
    mkdir('-p', answers.path)
    cp('-R', 'template/.', answers.path)
    const target = path.join(__dirname, answers.path, 'package.json')
    const packagePath = path.join(__dirname, 'template', 'package.json')
    let packageFile = JSON.parse( fs.readFileSync(packagePath, 'utf8') )
    packageFile.name = answers.name
    packageFile.description = answers.description
    packageFile.author = answers.author

    let packageJson = JSON.stringify(packageFile, null, 4)

    await new Promise((resolve) => {
        setTimeout(function () {
            resolve(true)
        }, 500)
    })

    fs.writeFileSync(target, packageJson, 'utf8')

    console.log('初始化 package.json 操作')
    console.log('项目初始化完成')
}

init()
