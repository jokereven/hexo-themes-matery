---
title: ginweb
author: 周靖
img: medias/featureimages/11.jpg
top: false
cover: false
toc: true
mathjax: false
summary: ginweb
categories:
  - web
  - gin
tags:
  - web
  - gin
keywords: 周靖
essay: false
abbrlink: 21842
date: 2021-10-29 21:14:02
coverImg:
password:
---

```go

package main

import (
 "fmt"
 "net/http"
)

func sayHello(w http.ResponseWriter, r *http.Request) {
 _, _ = fmt.Fprintln(w, "Hello World")
}

func main() {
 http.HandleFunc("/hello", sayHello)
 err := http.ListenAndServe(":8080", nil)
 if err != nil {
  fmt.Println("Http Serve Not Start Failed:", err)
  return
 }
}
```
