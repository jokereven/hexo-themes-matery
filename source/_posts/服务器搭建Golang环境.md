---
title: 服务器搭建Golang环境
author: 周靖
img: medias/featureimages/14.jpg
top: false
cover: false
toc: true
mathjax: false
summary: 服务器搭建Golang环境
categories: Golang
tags:
  - 服务器
  - Golang
keywords: 周靖
essay: false
abbrlink: 28507
date: 2021-09-02 15:55:19
coverImg:
password:
---

### `服务器搭建Golang环境`

1. 下载 Golang 安装包

   <https://golang.google.cn/dl/>

   ![image-20211120145901614](http://qiniuyun.code520.com.cn/images/20211120145901.png)

```
这里我把有关servser的东西都放在/www/server里面

cd /www/server
wget https://dl.google.com/go/go1.17.3.linux-amd64.tar.gz(这里速度可能太慢)
自己下载之后上传就好了(使用xftp软件上传)
```

2. 解压

   ```
   tar -xzvf go1.17.3.linux-amd64.tar.gz
   ```

3. 添加环境变量

   ```
   vi /etc/profile

   export GOROOT=/www/server/go
   export GOBIN=$GOROOT/bin
   export GOPKG=$GOROOT/pkg/tool/linux_amd64
   export GOARCH=amd64
   export GOOS=linux
   export GOPATH=/www/wwwroot/Golang
   export PATH=$PATH:$GOBIN:$GOPKG:$GOPATH/bin
   ```

4. 重新加载配置文件

   ```
   source /etc/profile
   ```

5. 查看 go 版本

   ```
   go version
   ```

   ![image-20211120151317291](http://qiniuyun.code520.com.cn/images/20211120151317.png)

6. 创建 GOROOT

   ```
   mkdir /www/wwwroot/Golang -p
   ```

7. 开始写 Go 代码

   > 来个 Golang 的 helloWorld

   ```
   package main

   import "fmt"

   func main(){
    fmt.Println("Hello World")
   }
   ```

   ![image-20211126133711151](http://qiniuyun.code520.com.cn/images/20211126133711.png)
