# xy-eslint-plugin

## 安装

除了本包，你需要同时安装 [ESlint](https://eslint.org/)

```shell
$ npm install xy-eslint-plugin eslint --save-dev
```

## 使用

### 引入插件

```js
// .eslintrc.js
module.exports = {
  plugin: ['gxy-eslint-config'],
  rules: {
    'xy-eslint-plugin/no-secret-info': 'error',
  },
};
```

### 使用 presets

```js
// .eslintrc.js
module.exports = {
  extends: 'plugin:xy-eslint-plugin/recommended',
};
```
