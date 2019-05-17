# Page Counter

[![](https://img.shields.io/badge/based-serverless-ff69b4.svg?style=popout-square)](https://github.com/dongyuanxin/page-counter)
[![](https://img.shields.io/badge/build-success-success.svg?style=popout-square)](https://github.com/dongyuanxin/page-counter)
[![](https://img.shields.io/badge/code_size-5kb-success.svg?style=popout-square)](https://github.com/dongyuanxin/page-counter)
[![](https://img.shields.io/badge/release-v1.4.1-blue.svg?style=popout-square)](https://github.com/dongyuanxin/page-counter/issues)
[![](https://img.shields.io/badge/license-MIT-blue.svg?style=popout-square)](https://github.com/dongyuanxin/page-counter)

基于 `Serverless` 开发的的**极简网页计数器**，支持基于 `Hexo`、`Jekyll`、`Octopress`、`ReactJS`、`VueJS` 等框架开发的博客、网站、中后台等**任何应用**。

## 特性

- 无后端快速部署
- 源码精简，大小仅 5kb
- 支持 `npm` 和 `CDN` 引入
- 数据安全、自持有、永久存储
- 支持 `Leancloud`、`Bomb` 平台
- **支持腾讯云云开发(敬请期待)**

## 浏览器支持

| ![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) |
| --- | --- | --- | --- | --- |
| Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ×  |

## 快速使用

- [Leancloud 平台](#leancloud-平台)    
  - [用法一：`CDN` 引入](#用法一cdn-引入)    
  - [用法二：`npm` 引入](#用法二npm-引入)  
- [Bomb 平台](#bomb-平台)    
  - [用法一：`CDN` 引入](#用法一cdn-引入-1)    
  - [用法二：`npm` 引入](#用法二npm-引入-1)

## Leancloud 平台

### 用法一：`CDN` 引入

到Leancloud控制台查看应用相关信息，将以下代码插入 `<head>` 标签中：

```html
<script>
  window.PAGE_COUNTER_CONFIG = {
    serverless: 'leancloud',
    leancloud: {
      history: 0, // 历史访客数量，可不填，默认是0
      table: '存放数据的表格',
      appId: 'leancloud应用的appId',
      appKey: 'leancloud应用的appKey'
    }
  }
</script>
```

引入 `CDN`：

```html
<script src="//cdn.jsdelivr.net/npm/leancloud-storage@3.13.1/dist/av-min.js"></script>
<script src="//unpkg.com/page-counter@1.4.1/dist/page-counter.min.js"></script>
```

总浏览量和当前页面浏览量会自动放入ID为 `page-counter-total-times` 和 `page-counter-single-times` 的DOM元素中。

### 用法二：`npm` 引入

安装：

```sh
npm install --save page-counter leancloud-storage
```

使用：

```javascript
import('leancloud-storage')
  .then(res => {
    // 将 Bomb 对象挂载在 window 上
    window.AV = res.default
    // 设置应用信息
    window.PAGE_COUNTER_CONFIG = {
      serverless: 'leancloud',
      leancloud: {
        history: 0, // 历史访客数量，可不填，默认是0
        table: '存放数据的表格',
        appId: 'leancloud应用的appId',
        appKey: 'leancloud应用的appKey'
      }
    }

    return import('page-counter')
  })
  .then(res => {
    const PageCounter = res.default
    PageCounter.setData() // 发送当前页面数据
    PageCounter.countTotal() // 将总浏览量放入 ID 为 page-counter-total-times 的DOM元素中
    PageCounter.countSingle() // 将当前页面浏览量放入 ID 为 page-counter-single-times 的DOM元素中
  })
```

## Bomb 平台

### 用法一：`CDN` 引入

到Bomb控制台查看应用相关信息，将以下代码插入 `<head>` 标签中：

```html
<script>
  window.PAGE_COUNTER_CONFIG = {
    serverless: 'bomb',
    bomb: {
      history: 0, // 历史访客数量，可不填，默认是0
      table: '存放数据的表格',
      appId: 'Bomb 应用的 Application ID',
      appKey: 'Bomb 应用的 REST API Key'
    }
  }
</script>
```

引入 `CDN`：

```html
<script src="//unpkg.com/page-counter@1.4.1/dist/page-counter.bomb-1.6.7.min.js"></script>
<script src="//unpkg.com/page-counter@1.4.1/dist/page-counter.min.js"></script>
```

总浏览量和当前页面浏览量会自动放入ID为 `page-counter-total-times` 和 `page-counter-single-times` 的DOM元素中。

### 用法二：`npm` 引入

安装：

```sh
npm install --save page-counter hydrogen-js-sdk
```

使用：

```javascript
import('hydrogen-js-sdk')
  .then(res => {
    // 将 Bomb 对象挂载在 window 上
    window.Bomb = res.default
    // 设置应用信息
    window.PAGE_COUNTER_CONFIG = {
      serverless: 'bomb',
      bomb: {
        history: 0, // 历史访客数量，可不填，默认是0
        table: '存放数据的表格',
        appId: 'Bomb 应用的 Application ID',
        appKey: 'Bomb 应用的 REST API Key'
      }
    }

    return import('page-counter')
  })
  .then(res => {
    const PageCounter = res.default
    PageCounter.setData() // 发送当前页面数据
    PageCounter.countTotal() // 将总浏览量放入 ID 为 page-counter-total-times 的DOM元素中
    PageCounter.countSingle() // 将当前页面浏览量放入 ID 为 page-counter-single-times 的DOM元素中
  })
```

## 待做

- [ ] 支持更多的 `Serverless` 平台
- [ ] 快速本地数据备份

## 更多

通过以下方式提供新的想法来进一步讨论，也可以直接发起 `PR` 参与到项目中：

- [Issues](https://github.com/dongyuanxin/page-counter/issues)
- yuanxin.me@gmail.com