---
title: 一直启动Node服务
author: 周靖
img: medias/featureimages/12.jpg
top: false
cover: false
toc: true
mathjax: false
summary: 一直启动Node服务
categories:
  - Node
  - 服务
tags:
  - Node
  - 服务
keywords: 周靖
essay: false
abbrlink: 47338
date: 2021-10-10 16:29:47
coverImg:
password:
---

1.安装forever
sudo npm install -g forever

2.使用forever开启nodejs程序
forever start ***.js

如果你需要用npm start来运行你的程序，则用命令
forever start -c "npm start" 路径
