# Page Counter

[![](https://img.shields.io/badge/based-serverless-ff69b4.svg?style=popout-square)](https://github.com/dongyuanxin/page-counter)
[![](https://img.shields.io/badge/build-success-success.svg?style=popout-square)](https://github.com/dongyuanxin/page-counter)
[![](https://img.shields.io/badge/code_size-3kb-success.svg?style=popout-square)](https://github.com/dongyuanxin/page-counter)
[![](https://img.shields.io/badge/release-v1.3.1-blue.svg?style=popout-square)](https://github.com/dongyuanxin/page-counter/issues)
[![](https://img.shields.io/badge/license-MIT-blue.svg?style=popout-square)](https://github.com/dongyuanxin/page-counter)


基于 `Serverless` 开发的的**极简网页计数器**，支持基于 `Hexo`、`Jekyll`、`Octopress`、`ReactJS`、`VueJS` 等框架开发的博客、网站、中后台等**任何应用**。

## 特性

- 无后端快速部署
- 源码精简，仅有3kb
- 支持 `npm` 和 `CDN` 引入
- 数据持久化存储
- 支持 `Leancloud`、`Bomb` 平台
- 支持腾讯云云开发(敬请期待)

## 浏览器支持

| ![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) |
| --- | --- | --- | --- | --- |
| Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔  |

## 安装

### 方法一：`CDN`

请将以下代码复制到 `</body>` 标签的前面：

```html
<script>
  window.PAGE_COUNTER_CONFIG = {
    leancloud: {
      table: '存放记录的表格',
      appId: 'leancloud应用的appId',
      appKey: 'leancloud应用的appKey'
    }
  }
</script>
<script src="//cdn.jsdelivr.net/npm/leancloud-storage@3.13.1/dist/av-min.js"></script>
<script src="//unpkg.com/page-counter/lib/page-counter.min.js"></script>
```

### 方法二：`npm`

安装：

```sh
npm install --save page-counter
# 或者: yarn add page-counter
```

设置全局环境变量：

```javascript
window.PAGE_COUNTER_CONFIG = {
  serverless: 'leancloud',
  leancloud: {
    table: '存放记录的表格',
    appId: 'leancloud应用的appId',
    appKey: 'leancloud应用的appKey'
  }
}
```

## 使用

总浏览量和当前页面浏览量会分别放在ID为 `page-counter-total-times` 和 `page-counter-single-times` 的DOM元素中

### 方法一：`CDN` 引入

```html
<div>
  网站总浏览量<span id="page-counter-total-times"></span>
</div>
<div>
  当前页面浏览量<span id="page-counter-single-times"></span>
</div>
```

### 方法二：`npm` 引入

```javascript
import PageCounter from page-counter

PageCounter.setData() // 统计当前页面

PageCounter.countTotal() // 总浏览量自动放入ID为 page-counter-total-times 的DOM元素中

PageCounter.countSingle() // 总浏览量自动放入ID为 page-counter-single-times 的DOM元素中
```

## 多 `Serverless` 平台

修改 `window.PAGE_COUNTER_CONFIG.serverless` 字段以及设置对应平台需要的自定义字段。

### 腾讯云云开发(最推荐)

无缝对接小程序，同时支持H5，提供腾讯企业级安全数据护航，而且支持数据导出、导入等常用功能。

目前平台研发功能内测，暂不开放。

### Leancloud

```javascript
window.PAGE_COUNTER_CONFIG = {
  serverless: 'leancloud',
  leancloud: {
    table: '存放记录的表格',
    appId: 'leancloud应用的 appId',
    appKey: 'leancloud应用的 appKey'
  }
}
```

### Bomb

```javascript
window.PAGE_COUNTER_CONFIG = {
  serverless: 'bomb',
  bomb: {
    table: '存放记录的表格',
    appId: 'bomb应用的 Application Key',
    restApi: 'bomb应用的 REST API Key'
  }
}
```

## Todolist

- [ ] 支持更多地 `Serverless` 平台，包括但不限于腾讯云开发、Google Parse等
- [ ] 一键备份命令，优化线上空间，本地持久化数据
- [ ] 更详细的使用和 `code` 文档

## 更多

通过以下方式提供新的想法来进一步讨论，也可以直接发起 `PR` 参与到项目中：

- [Issues](https://github.com/dongyuanxin/page-counter/issues)
- yuanxin.me@gmail.com