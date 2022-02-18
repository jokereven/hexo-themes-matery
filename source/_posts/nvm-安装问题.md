---
title: nvm-安装问题
author: 周靖
img: medias/featureimages/0.jpg
top: false
cover: false
toc: true
mathjax: false
summary: nvm-安装问题
categories: nvm
tags:
  - nvm
keywords: 周靖
essay: false
abbrlink: 26351
date: 2022-02-16 20:20:17
coverImg:
password:
---

# nvm安装node

![image-20220216202108994](https://qiniuyun.code520.com.cn/images/20220216202109.png)

下载npm 8.3.1版本…下载失败。回滚。回滚失败了。remove E: Vinstall\nvm) temp (npm-v8.3.1.zip:进程无法访问该文件，因为它正在被其他进程使用。



## 把npm_mirror 设置成github仓库地址

```txt
之前一直是taobao官方的镜像
nvm npm_mirror https://github.com/npm/cli/archive/
```

![image-20220216203932971](https://qiniuyun.code520.com.cn/images/20220216203933.png)

### 挂个代理

![image-20220216204200738](https://qiniuyun.code520.com.cn/images/20220216204200.png)

![image-20220216204051048](https://qiniuyun.code520.com.cn/images/20220216204101.png)

## ok

[nvm下载node时无法下载npm](https://segmentfault.com/q/1010000016674253)
