---
title: 同步PicGo配置
author: 周靖
img: medias/featureimages/1.jpg
top: false
cover: false
toc: true
mathjax: false
summary: PicGo
categories: PicGo
tags:
  - PicGo
keywords: 周靖
essay: false
abbrlink: 35653
date: 2022-03-28 20:33:44
coverImg:
password:
---

# PicGo 配置文件同步

```
这PicGo莫名奇妙就什么都没了
```

## 配置手册

PicGo 的配置文件在不同系统里是不一样的。

- Windows: `%APPDATA%\picgo\data.json`
- Linux: `$XDG_CONFIG_HOME/picgo/data.json` or `~/.config/picgo/data.json`
- macOS: `~/Library/Application\ Support/picgo/data.json`

举例，在 windows 里你可以在：

`C:\Users\你的用户名\AppData\Roaming\picgo\data.json`找到它。

在 linux 里你可以在：

`~/.config/picgo/data.json`里找到它。

macOS 同理。

## 可同步图床配置——PicGo+Gitee/Github/Gitlab+Onedrive

[可同步图床配置](https://xinyu-yang.github.io/blog/2021/21-09-09_picture-bed/)

[PicGo 配置手册](https://picgo.github.io/PicGo-Doc/zh/guide/config.html)

![image-20220328203218130](https://qiniuyun.code520.com.cn/images/image-20220328203218130.png)
