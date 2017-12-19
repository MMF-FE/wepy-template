# wepy-template
微信小程序 typescript 框架。(目前 typescript 支持还不是很好，所有先默认使用 es6。)

### 介绍
wepy-typescript 是由 wepy-cli 生成后的项目结构，根据 typescript，scss，wxml 语言分离出相应文件且有针对性的小程序项目模板。

### 特性

* 默认使用 ES2015+特性（暂不支持 typescript ，[主要原因](#bug)）
* 默认使用 Scss
* 新增 cli 工具，生成 pages 或 components 文件

### 安装使用
##### 安装
```console
yarn 或 npm i -d
```
#### 初始化
```console
yarn init 或 yarn init-project
```
#### 运行
```console
yarn dev
```
#### cli 工具
```console
yarn cli -- -h

如
pages : yarn cli -- a index
components : yarn cli -- a index -t c
```
#### bug
1. `script` 标签中添加 `lang=typescript` 属性，编译后的代码缺少执行函数。
2. `wepy.config.js` 中设置 `wepyExt=.vue` 会出现部分编译出错。
3. 在 js 中添加 config ，能编译出相应的 json 文件，但该段代码还会保留在编译后的 js 文件（代码冗余）。
