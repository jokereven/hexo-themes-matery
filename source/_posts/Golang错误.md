---
title: Golang错误
author: 周靖
img: medias/featureimages/10.jpg
top: false
cover: false
toc: true
mathjax: false
summary: Golang错误
categories:
  - Golang
  - 错误
tags:
  - Golang
  - 错误
keywords: 周靖
essay: false
abbrlink: 36985
date: 2021-10-09 17:54:16
coverImg:
password:
---

# 错误

## 什么是错误

```go
package main

import (
 "fmt"
 "os"
)

func main() {
 f, err := os.Open("./test.txt")
 if err != nil {
  fmt.Println(err)
  return
 }
 // 根据f进行文件的读或写
 fmt.Println(f.Name(), "opened successfully")
}
```

## 错误类型表示

```go
package main

import (
    "fmt"
    "net"
)

func main() {
    addr, err := net.LookupHost("golangbot123.com")
    if err, ok := err.(*net.DNSError); ok {
        if err.Timeout() {
            fmt.Println("operation timed out")
        } else if err.Temporary() {
            fmt.Println("temporary error")
        } else {
            fmt.Println("generic error: ", err)
        }
        return
    }
    fmt.Println(addr)
}
```
