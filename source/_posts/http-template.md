---
title: http-template
author: 周靖
img: medias/featureimages/21.jpg
top: false
cover: false
toc: true
mathjax: false
summary: http-template
categories:
  - Golang
tags:
  - http-template
  - Golang
keywords: 周靖
essay: false
abbrlink: 53635
date: 2021-11-03 21:58:33
coverImg:
password:
---

```go
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Hello</title>
</head>
<body>
    <p>Hello {{.}}</p>
</body>
</html>
```

```go
package main

import (
 "fmt"
 "html/template"
 "net/http"
)

// SayHello 定义函数
func SayHello(w http.ResponseWriter, r *http.Request) {
 // 解析模板
 t, err := template.ParseFiles("./hello.tmpl")
 if err != nil {
  fmt.Println("解析模板错误:", err)
  return
 }
 // 渲染模板
 err = t.Execute(w, "周靖")
 if err != nil {
  fmt.Println("渲染模板错误:", err)
  return
 }
}

func main() {
 http.HandleFunc("/", SayHello)
 err := http.ListenAndServe(":8000", nil)
 if err != nil {
  fmt.Println("Http Service Start Failed:", err)
  return
 }
}
```
