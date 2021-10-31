---
title: time
author: 周靖
img: medias/featureimages/15.jpg
top: false
cover: false
toc: true
mathjax: false
summary: time
categories:
  - Golang
  - time
tags:
  - Golang
  - time
keywords: 周靖
essay: false
abbrlink: 36931
date: 2021-10-09 17:54:34
coverImg:
password:
---

# time

```go
package main

import (
 "fmt"
 "time"
)

// time 包
// time包提供了时间的显示和测量用的函数。日历的计算采用的是公历。

// TimeType 时间类型
func TimeType() {
 now := time.Now()
 fmt.Printf("now is:%v\n", now)
 year := now.Year()
 month := now.Month()
 day := now.Month()
 hour := now.Hour()
 minute := now.Minute()
 second := now.Second()
 fmt.Printf("%d-%02d-%02d %02d:%02d:%02d\n", year, month, day, hour, minute, second)
}

// TimeStamp 时间戳
func TimeStamp() {
 now := time.Now()
 fmt.Printf("%v\n", now)
 timestamp := now.Unix() // 普通时间戳
 fmt.Printf("%v\n", timestamp)
 secondtimestamp := now.UnixNano() // 纳秒时间戳
 fmt.Printf("%v\n", secondtimestamp)
 // TimeStamp -> time
 TimeObj := time.Unix(timestamp, 0)
 fmt.Printf("%v\n", TimeObj)
}

func main() {
 TimeType()
 TimeStamp()

 /*
  time.Duration是time包定义的一个类型，它代表两个时间点之间经过的时间，以纳秒为单位。time.Duration表示一段时间间隔，可表示的最长时间段大约290年。

  time包中定义的时间间隔类型的常量如下：

  const (
      Nanosecond  Duration = 1
      Microsecond          = 1000 * Nanosecond
      Millisecond          = 1000 * Microsecond
      Second               = 1000 * Millisecond
      Minute               = 60 * Second
      Hour                 = 60 * Minute
  )
  例如：time.Duration表示1纳秒，time.Second表示1秒。
 */

 // 时间操作
 // Add
 now := time.Now()
 fmt.Printf("%v\n", now)
 later := now.Add(time.Minute)
 fmt.Printf("%v\n", later)
 // sub
 SUB := later.Sub(now)
 fmt.Printf("%v\n", SUB)
 // Equal
 EQUAL := now.Equal(later)
 fmt.Printf("%v\n", EQUAL)
 // Before
 BEFORE := now.Before(later)
 fmt.Printf("%v\n", BEFORE)
 // After
 AFTER := later.After(now)
 fmt.Printf("%v\n", AFTER)

 // 定时器
 ticker := time.Tick(time.Second)
 for i := range ticker {
  fmt.Println(i)
 }

 // 时间格式化
 /*
   时间类型有一个自带的方法Format进行格式化，需要注意的是Go语言中格式化时间模板不是常见的Y-m-d H:M:S而是使用Go的诞生时间2006年1月2号15点04分（记忆口诀为2006 1 2 3 4）。也许这就是技术人员的浪漫吧。

  补充：如果想格式化为12小时方式，需指定PM。
 */

 // 时间格式化
 formatDemo()
}

// formatDemo 时间格式化
func formatDemo() {
 now := time.Now()
 // 格式化个模板未Golang的出生时间2006年1月2号15点04分

 // 24小时制
 fmt.Println(now.Format("2006-01-02 15:04:05.000 Mon Jan"))

 // 12小时制
 fmt.Println(now.Format("2006-01-02 03:04:05.000 PM Mon Jan"))
 fmt.Println(now.Format("2006/01/02 15:04"))
 fmt.Println(now.Format("15:04 2006/01/02"))
 fmt.Println(now.Format("2006/01/02"))

 AnalyzeStringFormatTime()
}

// AnalyzeStringFormatTime 解析字符串格式时间
func AnalyzeStringFormatTime() {
 now := time.Now()
 fmt.Println(now)
 // 加载时区
 loc, err := time.LoadLocation("Asia/Shanghai")
 if err != nil {
  fmt.Println(err)
  return
 }
 // 按照指定时区和指定格式解析字符串时间
 timeObj, err := time.ParseInLocation("2006/01/02 15:04:05", "2019/08/04 14:15:20", loc)
 if err != nil {
  fmt.Println(err)
  return
 }
 fmt.Println(timeObj)
 fmt.Println(timeObj.Sub(now))
}

```
