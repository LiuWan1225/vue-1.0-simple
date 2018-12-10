# vue-1.0-simple

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

### 准备工作

> 核心框架 vue.js
> 依赖环境 Node.js, Vue官方脚手架：vue-cli
> webpack 模块化打包工具， 使用vue-cli初始项目的时候， 选择webpack作为我们的打包工具
> vue init webpack project-name

### 目录说明

``` bash
# build、config
webpack打包的相关配置文件

# config
config
    - proxyTable.js    设置代理

# src 编写业务代码的位置
src
    - assets    公共静态资源
    - components    公共组件（组件名首字母小写）
    - config    基本配置文件
        - api.js    接口路径
    - router    路由
    - services    services请求
    - utils    公共方法工具  
        - request.js 封装的axios请求
    - view    页面组件
        - home    模块化
    - App.vue    根组件
    - main.js    程序主入口

# package.json
package.json是项目最基础的配置文件

# eslint
统一团队内代码风格，使用eslint语法校验插件来实现代码风格的统一
```
