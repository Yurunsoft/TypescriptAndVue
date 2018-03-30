## 简介

这是一个已经配置好的 TypeScript + Vue 传统多页面开发模式项目。

本 demo 中的 ts 代码仅供参考，不是最佳方案，后续会优化更新。

这一套配置，我花了4天研究出来，也算是弥补这一领域的空缺吧。前端高手勿喷，我只是一个更倾向于后端的开发者，多页面应用目前确实还有很多应用，否则 layui 也不会这么受欢迎了！

欢迎各位大佬加入QQ群：74401592 [![点击加群](https://pub.idqqimg.com/wpa/images/group.png "点击加群")](https://shang.qq.com/wpa/qunwpa?idkey=e2e6b49e9a648aae5285b3aba155d59107bb66fde02e229e078bd7359cac8ac3) 前后端全方位技术交流探讨。

## 项目组成

**IDE:** VSCode

**开发语言:** TypeScript

**用到的 JS 库:**

jQuery、RequireJS、Vue (可选)、其它（如 layui 你都可以自己集成进来）

**编译工具:** gulp

**TS 代码提示:** typings

## 实现功能

* 代码提示
* 无报错
* 支持传统多页面入口开发模式

## 项目起因

这种开发方式很非主流，但我确实有这种需求。Vue 适合用来开发 SPA 单页应用，所以连官方文档和网络上的各种资料、问答也都是适合用于单页应用的项目配置。

我也是最近因为种种原因才开始接触 Vue，发现对于网页中需要有大量数据变动和组件联动情况下，Vue 还是比较方便的。所以打算用 TypeScript 和 Vue 集成到以前使用 layui 的后台中去，开发一些新的比较复杂的页面。

## 为何要使用这些工具来组成项目

首先说明为何不使用 Webpack，如上面所说，Webpack 更适合用于单入口的单页应用。传统多页面开发模式，也不是不能用 Webpack，你加一个页面就要加一项配置，非常麻烦的。

### TypeScript

TypeScript 是微软开发的一个编程语言，它是 JavaScript 的超集。你可以使用 class 等关键词进行开发，然后 TypeScript 会帮你把代码编译成 JavaScript 代码，并且最终是可以在不支持 ES6 的浏览器中运行的！

对，我就是因为 TypeScript 写类比 JavaScript 好看好理解，才用的！

### Vue

如上面所说，其实这个项目你可以自己选择是否使用 Vue。

### RequireJS

RequireJS 是可以让你避免手动在页面中写 `<script>` 标签的一个库，同时也是解决 TypeScript 中的 `import` 编译成 JavaScript 后是 `require` 的问题……

### VSCode

我喜欢~

### gulp

为了实现非主流的 Vue 组件开发。在这个项目中，我把 Vue 组件开发分为了模版 (`template.html`) 和逻辑代码 (`.ts`) 两个文件。

光光依靠 VSCode 本身的 `tsc` 编译，无法实现将 `template.html` 文件从 `ts` 目录中复制到 `js` 目录中去。

## 使用方法

1. 首先你得有 NodeJS 和 TypeScript 环境，这就不说了，自己百度，简单。
2. 在项目目录下执行 `npm install`，用于安装 typings、gulp 等
3. 在项目目录下执行 `typings install`，用于安装代码提示所需文件
4. 在 VSCode 中按 `Ctrl + Shift + B` 运行生成任务。一旦你修改了 `.ts` 文件，会自动编译到 `js` 目录中。

## 配置修改

根据实际项目情况，你肯定不会用我这个 demo 的目录结构，所以你需要改目录。

两个文件：`tsconfig.json` 和 `gulpfile.js`

`./js` 和 `./ts` 分别是生成目标路径和原始代码路径，改了就好。