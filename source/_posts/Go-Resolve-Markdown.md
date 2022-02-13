---
title: Go-Resolve-Markdown
author: 周靖
img: medias/featureimages/21.jpg
top: false
cover: false
toc: true
mathjax: false
summary: Go-Resolve-Markdown
categories:
  - Golang
  - Markdown
tags:
  - Golang
  - Markdown
keywords: 周靖
essay: false
abbrlink: 57882
date: 2022-02-09 21:45:12
coverImg:
password:
---

#### Golang 解析 markdown

##### 想法

```tex
后端把markdown解析,通过id把文章区分开来,把数据存储到数据库,前端负责页面处理...
```

![image-20220209220035781](https://qiniuyun.code520.com.cn/images/20220209220035.png)

[加载并解析 markdown](https://github.com/Ming-Lian/Setup-Database/blob/master/%E5%89%8D%E7%AB%AF%E5%B0%8F%E6%8A%80%E5%B7%A7%EF%BC%9A%E5%8A%A0%E8%BD%BD%E5%B9%B6%E8%A7%A3%E6%9E%90Markdown%E6%96%87%E6%A1%A3.md)

这里感觉挺麻烦就搞到前端解析
把文件存储到后端\_posts 文件夹
前端读取用 react-markdown 进行处理
[react-markdown](https://github.com/remarkjs/react-markdown)

参考链接 🔗
[React.js reading from a local file](https://stackoverflow.com/questions/57007536/react-js-reading-from-a-local-file)

[kentcdodds
/
babel-plugin-preval
Public](https://github.com/kentcdodds/babel-plugin-preval#usage)

[使用 Node.js 读取文件](http://nodejs.cn/learn/reading-files-with-nodejs)
