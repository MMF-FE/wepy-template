# wepy-template
微信小程序模板框架。(目前支持和使用 `typescript` )

### 介绍
`wepy-template` 是由 [`wepy-cli`](https://github.com/Tencent/wepy) 生成后的项目结构，根据 `typescript，scss，wxml` 语言分离出相应文件且有针对性的小程序项目模板。

由于 `wepy-cli` 原因，目前只能先把代码 `clone` 下来，然后在该项目进行 `git inti` 和 `yarn init` 操作，或使用 `yarn init-project` 命令。

### 特性

* 默认使用 ES2015+特性 ~~（暂不支持 typescript ，[主要原因 bug(1)](#bug)）~~
* 默认使用 Typescript
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
#### 构建
```console
yarn build 或 yarn web
```

#### [注意](https://tencent.github.io/wepy/document.html#/?id=%e9%87%8d%e8%a6%81%e6%8f%90%e9%86%92)
- 使用微信开发者工具 --> 添加项目，项目目录请选择 `dist` 目录
- 关闭微信开发者工具 `ES6` 转 `ES5` 功能
- 关闭上传代码时样式自动补全
- 关闭代码压缩上传

#### bug
1. ~~`script` 标签中添加 `lang=typescript` 属性，编译后的代码缺少执行函数。~~
2. `wepy.config.js` 中设置 `wepyExt=.vue` 会出现部分编译出错。
3. 在 js 中添加 config ，能编译出相应的 json 文件，但该段代码还会保留在编译后的 js 文件（代码冗余）。
4. web 还不是支持很好。
