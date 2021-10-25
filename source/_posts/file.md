---
title: file
author: 周靖
img: medias/featureimages/4.jpg
top: false
cover: false
toc: true
mathjax: false
summary: file
categories:
  - Golang
  - file
tags:
  - Golang
  - file
keywords: 周靖
essay: false
abbrlink: 36932
date: 2021-10-09 17:54:43
coverImg:
password:
---

# 文件

```go
package main

import (
 "fmt"
 "io"
 "os"
)

// file operate
// open and cloese the file

func main() {
 // only read to open the file
 // file, err := os.Open("../README.md")
 // if err != nil {
 //  fmt.Println("open the file failed", err)
 //  return
 // }
 // // file close
 // file.Close()
 // fmt.Println("open the file success")

 // // read file
 // // review slice
 // // init a slice
 // var SLI []int
 // fmt.Println(SLI)
 // // init and assign
 // SLIASS := []int{1024}
 // fmt.Println(SLIASS)
 // // array
 // arr := [3]int{996, 1024, 520}
 // fmt.Println(arr)
 // // array and slice
 // fmt.Println(len(arr))
 // fmt.Println(cap(arr))
 // fmt.Println(len(SLI))
 // fmt.Println(cap(SLI))
 // // low and high
 // LH := [4]int{717, 996, 1024, 666}
 // // low
 // // high
 // fmt.Println(LH[1:])
 // fmt.Println(LH[:1])
 // fmt.Println(LH[:])
 // // out of range
 // // fmt.Println(LH[996])
 // // full slice
 // // low high max
 // FULLSLI := []int{1, 2, 3, 4, 5, 6, 7, 8, 9}
 // // 2,3
 // fmt.Println(FULLSLI[1:3:5])
 // // use make to init a slice
 // MSLI := make([]int, 4, 10)
 // fmt.Println(MSLI)
 // fmt.Println(len(MSLI))
 // fmt.Println(cap(MSLI))
 // // judge a slice are not a nil
 // judge := make([]int, 0, 4)
 // jud := []int{996}
 // if judge != nil {
 //  fmt.Println("this slice is not nil")
 // } else {
 //  fmt.Println("this slice is nil")
 // }
 // if jud != nil {
 //  fmt.Println("this slice is not nil")
 // } else {
 //  fmt.Println("this slice is nil")
 // }
 // // traverse
 // for i := 0; i < len(FULLSLI); i++ {
 //  fmt.Println(FULLSLI[i])
 // }
 // for index, value := range FULLSLI {
 //  fmt.Println(index, value)
 // }

 // read file
 // 它接收一个字节切片，返回读取的字节数和可能的具体错误，读到文件末尾时会返回0和io.EOF。 举个例子：
 // only read to open the file
 // 只读方式打开当前目录下的main.go文件
 file, err := os.Open("../README.md")
 if err != nil {
  fmt.Println("open file failed!, err:", err)
  return
 }
 defer file.Close()
 // 使用Read方法读取数据
 var tmp = make([]byte, 256)
 n, err := file.Read(tmp)
 if err == io.EOF {
  fmt.Println("文件读完了")
  return
 }
 if err != nil {
  fmt.Println("read file failed, err:", err)
  return
 }
 fmt.Printf("读取了%d字节数据\n", n)
 fmt.Println(string(tmp[:n]))
}

```

循环读取

```go
package mian

import (
 "fmt"
 "io"
 "os"
)

// for 循环读取文件

func main() {
 // 只读方式打开当前目录下的main.go文件
 file, err := os.Open("../README.md")
 if err != nil {
  fmt.Println("open file failed!, err:", err)
  return
 }
 defer file.Close()
 // 循环读取文件
 var content []byte
 var tmp = make([]byte, 128)
 for {
  n, err := file.Read(tmp)
  if err == io.EOF {
   fmt.Println("文件读完了")
   break
  }
  if err != nil {
   fmt.Println("read file failed, err:", err)
   return
  }
  content = append(content, tmp[:n]...)
 }
 fmt.Println(string(content))
}

```

bufio 按行读取示例

```go
package main

import (
 "bufio"
 "fmt"
 "io"
 "os"
)

// bufio按行读取示例
func main() {
 file, err := os.Open("../README.md")
 if err != nil {
  fmt.Println("open file failed, err:", err)
  return
 }
 defer file.Close()
 reader := bufio.NewReader(file)
 for {
  line, err := reader.ReadString('\n') //注意是字符
  if err == io.EOF {
   if len(line) != 0 {
    fmt.Println(line)
   }
   fmt.Println("文件读完了")
   break
  }
  if err != nil {
   fmt.Println("read file failed, err:", err)
   return
  }
  fmt.Print(line)
 }
}

```

read all file

```go
package main

import (
 "fmt"
 "io/ioutil"
)

// read all file

func main() {
 content, err := ioutil.ReadFile("../README.md")
 if err != nil {
  fmt.Println("read file failed", err)
  return
 }
 fmt.Println(string(content))
}

```

write

```go
package main

import (
 "fmt"
 "os"
)

// write to file
func main() {
 file, err := os.OpenFile("xx.txt", os.O_CREATE|os.O_TRUNC|os.O_WRONLY, 0666)
 if err != nil {
  fmt.Println("open file failed, err:", err)
  return
 }
 defer file.Close()
 str := "hello 沙河"
 file.Write([]byte(str))       //写入字节切片数据
 file.WriteString("hello 小王子") //直接写入字符串数据
}

```
