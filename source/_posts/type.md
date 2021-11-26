---
title: type
author: 周靖
img: medias/featureimages/22.jpg
top: false
cover: false
toc: true
mathjax: false
summary: type
categories:
  - Golang
tags:
  - Golang
  - type
keywords: 周靖
essay: false
abbrlink: 36543
date: 2021-10-09 17:54:16
coverImg:
password:
---

# 类型

Atoi

```go
package main

import (
 "fmt"
 "strconv"
)

func main() {
 // string <-> int
 s := "996"
 si, err := strconv.Atoi(s)
 if err != nil {
  fmt.Println("cha't change to the  type")
 } else {
  fmt.Printf("type: %T:of value:%#v", si, si)
 }
}
```

iota

```go
package main

import (
 "fmt"
 "strconv"
)

// Itoa

func main() {
 i2 := 996
 fmt.Printf("type: %T value: %v", i2, i2)
 s2 := strconv.Itoa(i2)
 fmt.Printf("type: %T value: %v", s2, s2)
}

```
