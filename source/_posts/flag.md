---
title: flag
author: 周靖
img: medias/featureimages/1.jpg
top: false
cover: false
toc: true
mathjax: false
summary: flag
categories:
  - Golang
  - flag
tags:
  - Golang
  - flag
keywords: 周靖
essay: false
abbrlink: 36954
date: 2021-10-09 17:32:16
coverImg:
password:
---

# flag

```go
package main

import (
 "flag"
 "fmt"
 "time"
)

//os.Args demo

/*
 os.Args
 如果你只是简单的想要获取命令行参数，可以像下面的代码示例一样使用os.Args来获取命令行参数。
*/

func main() {
 //os.Args是一个[]string
 // if len(os.Args) > 0 {
 //  for index, arg := range os.Args {
 //   fmt.Printf("args[%d]=%v\n", index, arg)
 //  }
 // }

 // 导入flag包

 // flag参数类型

 /*
  flag包支持的命令行参数类型有bool、int、int64、uint、uint64、float float64、string、duration。

  flag参数 有效值
  字符串flag 合法字符串
  整数flag 1234、0664、0x1234等类型，也可以是负数。
  浮点数flag 合法浮点数
  bool类型flag 1, 0, t, f, T, F, true, false, TRUE, FALSE, True, False。
  时间段flag 任何合法的时间段字符串。如”300ms”、”-1.5h”、”2h45m”。
  合法的单位有”ns”、”us” /“µs”、”ms”、”s”、”m”、”h”。
 */

 // 定义命令行flag参数
 // name := flag.String("name", "Joker", "姓名")
 // age := flag.Int("age", 18, "年龄")
 // married := flag.Bool("married", false, "婚否")
 // delay := flag.Duration("d", 0, "时间间隔")

 /*
  flag.TypeVar()
  基本格式如下： flag.TypeVar(Type指针, flag名, 默认值, 帮助信息) 例如我们要定义姓名、年龄、婚否三个命令行参数，我们可以按如下方式定义：

  var name string
  var age int
  var married bool
  var delay time.Duration
  flag.StringVar(&name, "name", "张三", "姓名")
  flag.IntVar(&age, "age", 18, "年龄")
  flag.BoolVar(&married, "married", false, "婚否")
  flag.DurationVar(&delay, "d", 0, "时间间隔")
 */

 /*
  flag.Parse()
  通过以上两种方法定义好命令行flag参数后，需要通过调用flag.Parse()来对命令行参数进行解析。

  支持的命令行参数格式有以下几种：

  -flag xxx （使用空格，一个-符号）
  --flag xxx （使用空格，两个-符号）
  -flag=xxx （使用等号，一个-符号）
  --flag=xxx （使用等号，两个-符号）
  其中，布尔类型的参数必须使用等号的方式指定。

  Flag解析在第一个非flag参数（单个”-“不是flag参数）之前停止，或者在终止符”–“之后停止。
 */

 /*

  flag其他函数
  flag.Args()  ////返回命令行参数后的其他参数，以[]string类型
  flag.NArg()  //返回命令行参数后的其他参数个数
  flag.NFlag() //返回使用的命令行参数个数
 */
 FullFlag()
}

// FullFlag 完整的Flag
func FullFlag() {
 //定义命令行参数方式1
 var name string
 var age int
 var married bool
 var delay time.Duration
 flag.StringVar(&name, "name", "张三", "姓名")
 flag.IntVar(&age, "age", 18, "年龄")
 flag.BoolVar(&married, "married", false, "婚否")
 flag.DurationVar(&delay, "d", 0, "延迟的时间间隔")

 //解析命令行参数
 flag.Parse()
 fmt.Println(name, age, married, delay)
 //返回命令行参数后的其他参数
 fmt.Println(flag.Args())
 //返回命令行参数后的其他参数个数
 fmt.Println(flag.NArg())
 //返回使用的命令行参数个数
 fmt.Println(flag.NFlag())
}

```
