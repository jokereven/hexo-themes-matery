---
title: go-socket
author: 周靖
img: medias/featureimages/10.jpg
top: false
cover: false
toc: true
mathjax: false
summary:
  - Golang
  - socket
categories:
  - Golang
  - socket
tags:
  - Golang
  - socket
keywords: 周靖
essay: false
abbrlink: 48558
date: 2022-07-04 20:31:31
coverImg:
password:
---

# go-socket.io

reference:

go-socket.io: [https://github.com/googollee/go-socket.io](https://github.com/googollee/go-socket.io)

socket.io: [https://github.com/socketio/socket.io](https://github.com/socketio/socket.io)



## _example

reference:

example: [https://github.com/googollee/go-socket.io/tree/master/_examples](https://github.com/googollee/go-socket.io/tree/master/_examples)

### go-echo

reference: https://github.com/googollee/go-socket.io/tree/master/_examples/go-echo

```go
package main

import (
	"fmt"
	"log"

	"github.com/labstack/echo"

	socketio "github.com/googollee/go-socket.io"
)

func main() {
	// create a server
	server := socketio.NewServer(nil)

	// 监听连接
	server.OnConnect("/", func(s socketio.Conn) error {
		s.SetContext("")
		log.Println("connected:", s.ID())
		return nil
	})

	server.OnEvent("/", "notice", func(s socketio.Conn, msg string) {
		log.Println("notice:", msg)
		// 设置返回给前端的值
		s.Emit("reply", "notice "+msg)
	})

	// 返回给前端的数据
	server.OnEvent("/chat", "msg", func(s socketio.Conn, msg string) string {
		s.SetContext(msg)
		return "recv " + msg
	})

	// echo
	server.OnEvent("/", "echo", func(s socketio.Conn, msg interface{}) {
		log.Println("echo: ", msg)
		s.Emit("echo", msg)
	})

	// bye
	server.OnEvent("/", "bye", func(s socketio.Conn) string {
		fmt.Println("bye bye bye...")
		last := s.Context().(string)
		s.Emit("bye", last)
		s.Close()
		return last
	})

	// 发生错误的时候做的处理
	server.OnError("/", func(s socketio.Conn, e error) {
		log.Println("meet error:", e)
	})

	// 退出的时候做的事情
	server.OnDisconnect("/", func(s socketio.Conn, reason string) {
		log.Println("closed:", reason)
	})

	// 启动 server
	go server.Serve()
	defer server.Close()

	// 通过go web 框架 echo 监听8000端口
	e := echo.New()
	e.HideBanner = true

	e.Static("/", "../asset")
	e.Any("/socket.io/", func(context echo.Context) error {
		server.ServeHTTP(context.Response(), context.Request())
		return nil
	})
	e.Logger.Fatal(e.Start("localhost:8000"))
}
```

![image-20220704213956404](https://qiniuyun.code520.com.cn/images/image-20220704213956404.png)

### default-http: 通过 net/http 实现

### dockerize-default-http: build by docker

### gf: Golang 框架 GoFrame 的实现

### gin-cors: 通过gin实现并添加cors中间件

### gin-gonice: 通过gin实现

![image-20220705133848754](https://qiniuyun.code520.com.cn/images/image-20220705133848754.png)

### graceful-shutdown: 通过 net/http 实现（优雅关机）

### iris: 一个叫iris的web框架的实现

### pprof: 性能分析

### redis-adapter: redis 适配器

这里的代码 和 gin-gonic 差不多 多了个docker-compose.yml文件 多了个Adapter（适配器的方法）。



具体逻辑差不多懂了还有一些核心的东西不怎么理解2333
