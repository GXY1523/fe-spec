---
title: 文档规范
categories:
    - 工程规范
tags:
    - 工程规范
author:
    name: GXY
    link: https://github.com/GXY1523/fe-spec
---

# 文档 规范

:::tip
在撰写文档的时候如果能遵循一点良好的规约，将能**提升读者的阅读体验**。

在此，文档的含义非常广泛，可以指代任何供人类阅读的文本材料。包括但不限于：`Readme`、`Changelog`、代码注释、上手指南、`Issue` 说明和`PPT` 分享等。
:::

## 1. 空格

- 1.1.【强制】中英文之间需要增加空格

  ```markdown
  <!-- bad -->
  在HTML文档的开头使用<!DOCTYPE html>来声明文档的HTML版本。

  <!-- good -->
  在 HTML 文档的开头使用 <!DOCTYPE html> 来声明文档的 HTML 版本。
  ```

- 1.2.【强制】中英文与数字之间需要增加空格

  ```markdown
  <!-- bad -->
  在JavaScript编码规范中，switch语句应包含至少3个条件分支。

  <!-- good -->
  在 JavaScript 编码规范中，switch 语句应包含至少 3 个条件分支。
  ```

- 1.3.【强制】全角标点与其他字符之间不加空格

  ```markdown
  <!-- bad -->
  虽然 CSS 语法中最后一条声明的分号是可选的， 但使用分号可以增加代码的一致性和易用性。

  <!-- good -->
  虽然 CSS 语法中最后一条声明的分号是可选的，但使用分号可以增加代码的一致性和易用性。
  ```

- 1.4.【强制】半角标点与其他字符之间需要增加空格

  ```markdown
  <!-- bad -->
  我们推荐单行代码最多不要超过 100 个字符，除了以下两种情况：
  1.字符串和模板字符串
  2.正则表达式

  <!-- good -->
  我们推荐单行代码最多不要超过 100 个字符，除了以下两种情况：
  1. 字符串和模板字符串
  2. 正则表达式

  <!-- bad -->
  const a=1

  <!-- good -->
  const a = 1
  ```

- 1.5.【推荐】链接文字前后不需要增加空格

  ```markdown
  <!-- bad -->
  [了解更多](https:///fe-spec/engineering/doc.html) 文档规范。

  <!-- good -->
  [了解更多](https:///fe-spec/engineering/doc.html)文档规范。
  ```

## 2. 标点符号

- 2.1.【推荐】正确使用引号

  中文句子内夹用英文句子时，该英文句子用中文双引号标示，保留英文句子内部的英文标点符号，句末使用中文标点。

  ```markdown
  <!-- bad -->
  他写的是 "Hello, world!"。

  <!-- bad -->
  他写的是‘Hello, world!’。

  <!-- bad -->
  他写的是“Hello，world！”。

  <!-- good -->
  他写的是“Hello, world!”。
  ```

- 2.2.【推荐】正确使用省略号

  中文省略号的形式为“……”（中文输入法下 SHIFT + 6），6 个居中小圆点；英文省略号的形式为“...”，3 个齐线小圆点。

  夹用英文的中文句子里，英文内部的省略使用英文省略号；中文内部的省略使用中文省略号。

  ```markdown
  <!-- bad -->
  省略号是 3 个小圆点...
  省略号是 6 个齐线小圆点......
  省略号是 6 个句号。。。。。。

  <!-- good -->
  省略号是 6 个居中小圆点，占两个全角空格……
  ```

- 2.3.【推荐】正确使用破折号

  中文破折号的形式为“——”，长度相当于两个汉字的长度。

  ```markdown
  <!-- bad - 破折号不推荐使用两个中横线 -->
  第三方框架和库--用来快速构建网站和应用。

  <!-- good -->
  第三方框架和库——用来快速构建网站和应用。
  ```

## 3. 全角和半角

- 3.1.【强制】中文标点符号使用全角

  ```markdown
  <!-- bad - 中文句子冒号未使用全角 -->
  伪类（伪元素）选择器: a:hover、a::before

  <!-- bad - 中文句子内夹用并列的英文单词时使未使用顿号分隔 -->
  伪类（伪元素）选择器：a:hover，a::before

  <!-- good -->
  伪类（伪元素）选择器：a:hover、a::before

  <!-- bad - 中文句子括号未使用全角 -->
  控制语句(if、while 等)的左小括号 ( 前有一个空格。

  <!-- good -->
  控制语句（if、while 等）的左小括号 （ 前有一个空格。
  ```

- 3.2.【强制】英文和数字使用半角

  ```markdown
  <!-- bad - 英文和数字不应该使用全角 -->
  在非空文件中保留拖尾换行是一种常见的 ＵＮＩＸ 风格。

  <!-- good -->
  在非空文件中保留拖尾换行是一种常见的 UNIX 风格。
  ```

- 3.3.【强制】完整的英文整句和特殊名词使用半角标点

  ```markdown
  <!-- bad -->
  乔布斯那句话是怎么说的？「Stay hungry，stay foolish。」
  推荐你阅读《Hackers＆Painters：Big Ideas from the Computer Age》，非常的有趣。

  <!-- good -->
  乔布斯那句话是怎么说的？「Stay hungry, stay foolish.」
  推荐你阅读《Hackers & Painters: Big Ideas from the Computer Age》，非常的有趣。
  ```

## 4. 名词

- 4.1.【强制】正确地拼写英文专有词汇

  ```markdown
  <!-- bad -->
  TS 是微软开发的一款开源编程语言，它是 JS 的超集。

  <!-- good -->
  TypeScript 是微软开发的一款开源编程语言，它是 JavaScript 的超集。
  ```

## 附录

前端常用专有名词：

```markdown
HTML, CSS, JavaScript/JS, AJAX, JSON, DOM, BOM, Less, HTTP, HTTPS, WebSocket, ECMAScript, ECMAScript 2015, ECMAScript 6, ES6, ES2015
jQuery, jQuery UI, jQuery Mobile, YUI, Zepto, Dojo
React, React Native, Bootstrap, RequireJS, Sea.js, AngularJS, Backbone.js
Gulp, Grunt, webpack, Yeoman, npm, spm, Babel
Mocha, Jasmine, Should.js
PHP, Java, Node.js
MySQL, MongoDB, Redis
Apache, Nginx
GitHub, GitLab, GitCafe
Chrome, Firefox, Safari, Internet Explore/IE, IE 7, Opera, UC
Android, iOS, Windows, OS X, Ubuntu, Linux, Debian
PC, Mobile, H5
MacBook, MacBook Pro, MacBook Air, iMac, Mac Pro, Mac mini
iPad Air, iPad Air 2, iPad mini, iPhone, iPhone 6s, iPhone 6s Plus, Apple Watch
FPS, UI, URL, URI, URLs, URIs
```

## 参考资料

- [《中文文案排版指北》](https://github.com/sparanoid/chinese-copywriting-guidelines)
- [《标点符号用法》](http://www.moe.gov.cn/ewebeditor/uploadfile/2015/01/13/20150113091548267.pdf)
- [夹用英文的中文文本的标点符号用法（草案）](http://www.moe.gov.cn/ewebeditor/uploadfile/2015/01/13/20150113092346124.pdf)
- [《中文排版需求》](https://www.w3.org/TR/clreq/)