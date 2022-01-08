---
title: git标准提交
author: 周靖
img: medias/featureimages/4.jpg
top: false
cover: false
toc: true
mathjax: false
summary: git标准提交
categories:
  - git
  - 标准
tags:
  - git
  - 标准
keywords: 周靖
essay: false
date: 2022-01-08 13:33:40
coverImg:
password:
---

全局安装 `commitizen` 和 `cz-conventional-changelog`

`commitizen` 是一个撰写合格 `commit message` 的工具，用于代替 `git commit` 指令，而 `cz-conventional-changelog` 适配器提供 `conventional-changelog` 标准（约定式提交标准）。基于不同需求，也可以使用不同适配器(`Adapter`)。

```
npm install -g commitizen cz-conventional-changelog

git add .

git cz
```

![image-20220108163444035](https://qiniuyun.code520.com.cn/images/20220108163444.png)

![image-20220108163511088](https://qiniuyun.code520.com.cn/images/20220108163511.png)
