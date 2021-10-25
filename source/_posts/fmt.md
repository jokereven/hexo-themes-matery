---
title: fmt
author: 周靖
img: medias/featureimages/10.jpg
top: false
cover: false
toc: true
mathjax: false
summary: fmt
categories:
  - Golang
  - fmt
tags:
  - Golang
  - fmt
keywords: 周靖
essay: false
abbrlink: 36965
date: 2021-10-09 12:54:16
coverImg:
password:
---

# fmt

```go
package main

import (
 "bufio"
 "errors"
 "fmt"
 "os"
 "strings"
)

// fmt包的基本使用

// Print
// Printf
// Println

func main() {
 // Fprint
 // 向标准输出写入内容
 fmt.Fprintln(os.Stdout, "向标准输出写入内容")
 fileObj, err := os.OpenFile("./test.txt", os.O_CREATE|os.O_WRONLY|os.O_APPEND, 0644)
 if err != nil {
  fmt.Println("打开文件出错，err:", err)
  return
 }
 name := "沙河小王子"
 // 向打开的文件句柄中写入内容
 fmt.Fprintf(fileObj, "往文件中写如信息：%s", name)

 // Sprint
 // Sprint系列函数会把传入的数据生成并返回一个字符串。
 s1 := fmt.Sprint("Joker")
 fmt.Println(s1)
 sname := "Joker"
 sage := 19
 s2 := fmt.Sprintf("name:%s, age:%d", sname, sage)
 fmt.Println(s1, s2)

 // Errorf
 // Errorf函数根据format参数生成格式化字符串并返回一个包含该字符串的错误。
 e := errors.New("This Is A Error")
 w := fmt.Errorf("Wrap一个错误%w", e)
 fmt.Println(w)

 // 定义一个结构体
 type InitStruct struct {
  name string
 }

 STR := InitStruct{"Joker"}
 // 格式化占位符
 // %v默认格式输出
 fmt.Printf("%v\n", 996)
 // %+v 与%v类似但是输出结构体时会添加字段名
 fmt.Printf("%+v\n", 996)
 fmt.Printf("%+v\n", STR)
 fmt.Print(STR)
 fmt.Println("")
 // 值的Go语法表示
 fmt.Printf("%#v", STR)
 fmt.Println("")
 fmt.Printf("%T", STR)
 // %% %号
 fmt.Println("")
 fmt.Printf("%%")
 // %t
 fmt.Printf("%t", true)
 fmt.Println("")
 /*
  占位符 说明
  %b   表示为二进制
  %c   该值对应的unicode码值
  %d   表示为十进制
  %o   表示为八进制
  %x   表示为十六进制，使用a-f
  %X   表示为十六进制，使用A-F
  %U   表示为Unicode格式：U+1234，等价于”U+%04X”
  %q   该值对应的单引号括起来的go语法字符字面值，必要时会采用安全的转义表示
 */
 n := 65
 fmt.Printf("%b\n", n)
 fmt.Printf("%c\n", n)
 fmt.Printf("%d\n", n)
 fmt.Printf("%o\n", n)
 fmt.Printf("%x\n", n)
 fmt.Printf("%X\n", n)
 /*
  浮点数与复数
  占位符 说明
  %b 无小数部分、二进制指数的科学计数法，如-123456p-78
  %e 科学计数法，如-1234.456e+78
  %E 科学计数法，如-1234.456E+78
  %f 有小数部分但无指数部分，如123.456
  %F 等价于%f
  %g 根据实际情况采用%e或%f格式（以获得更简洁、准确的输出）
  %G 根据实际情况采用%E或%F格式（以获得更简洁、准确的输出）
 */
 f := 12.34
 fmt.Printf("%b\n", f)
 fmt.Printf("%e\n", f)
 fmt.Printf("%E\n", f)
 fmt.Printf("%f\n", f)
 fmt.Printf("%g\n", f)
 fmt.Printf("%G\n", f)

 /*
  字符串和[]byte
  占位符 说明
  %s 直接输出字符串或者[]byte
  %q 该值对应的双引号括起来的go语法字符串字面值，必要时会采用安全的转义表示
  %x 每个字节用两字符十六进制数表示（使用a-f
  %X 每个字节用两字符十六进制数表示（使用A-F）
 */
 STRING := "我爱罗"
 fmt.Printf("%s\n", STRING)
 fmt.Printf("%q\n", STRING)
 fmt.Printf("%x\n", STRING)
 fmt.Printf("%X\n", STRING)

 // 指针
 var inter = "我是一个指针"
 fmt.Printf("%p\n", &inter)
 fmt.Printf("%#p\n", &inter)

 // 宽度标识符
 /*
   宽度标识符
   宽度通过一个紧跟在百分号后面的十进制数指定，如果未指定宽度，则表示值时除必需之外不作填充。精度通过（可选的）宽度后跟点号后跟的十进制数指定。如果未指定精度，会使用默认精度；如果点号后没有跟数字，表示精度为0。举例如下：

  占位符 说明
  %f 默认宽度，默认精度
  %9f 宽度9，默认精度
  %.2f 默认宽度，精度2
  %9.2f 宽度9，精度2
  %9.f 宽度9，精度0
 */

 NUM := 3.1415
 fmt.Printf("%f\n", NUM)
 fmt.Printf("%9f\n", NUM)
 fmt.Printf("%.2f\n", NUM)
 fmt.Printf("%9.2f\n", NUM)
 fmt.Printf("%9.f\n", NUM)

 // 其它flag(标识)
 /*
  占位符 说明
  ’+’ 总是输出数值的正负号；对%q（%+q）会生成全部是ASCII字符的输出（通过转义）；
  ’ ‘ 对数值，正数前加空格而负数前加负号；对字符串采用%x或%X时（% x或% X）会给各打印的字节之间加空格
  ’-’ 在输出右边填充空白而不是默认的左边（即从默认的右对齐切换为左对齐）；
  ’#’ 八进制数前加0（%#o），十六进制数前加0x（%#x）或0X（%#X），指针去掉前面的0x（%#p）对%q（%#q），对%U（%#U）会输出空格和单引号括起来的go字面值；
  ‘0’ 使用0而不是空格填充，对于数值类型会把填充的0放在正负号后面；
 */

 // 获取输入
 // Scan
 var (
  gender string
 )
 /*
  Scan从标准输入扫描文本，读取由空白符分隔的值保存到传递给本函数的参数中，换行符视为空白符。
  本函数返回成功扫描的数据个数和遇到的任何错误。如果读取的数据个数比提供的参数少，会返回一个错误报告原因。
 */
 fmt.Scan(&gender)
 fmt.Printf("获取输入结果如下:%s\n", gender)

 fmt.Scanf("one:%s", &gender)
 fmt.Printf("输入结果如下:%s\n", gender)

 /*
  Scanln类似Scan，它在遇到换行时才停止扫描。最后一个数据后面必须有换行或者到达结束位置。
  本函数返回成功扫描的数据个数和遇到的任何错误。
 */
 fmt.Scanln(&gender)
 fmt.Printf("输入结果如下:%s\n", gender)
 bufioDemo()
}

func bufioDemo() {
 reader := bufio.NewReader(os.Stdin) // 从标准输入生成读对象
 fmt.Print("请输入内容：")
 text, _ := reader.ReadString('\n') // 读到换行
 text = strings.TrimSpace(text)
 fmt.Printf("%#v\n", text)

 /*
  Fscan系列
  这几个函数功能分别类似于fmt.Scan、fmt.Scanf、fmt.Scanln三个函数，只不过它们不是从标准输入中读取数据而是从io.Reader中读取数据。

  func Fscan(r io.Reader, a ...interface{}) (n int, err error)
  func Fscanln(r io.Reader, a ...interface{}) (n int, err error)
  func Fscanf(r io.Reader, format string, a ...interface{}) (n int, err error)

  Sscan系列
  这几个函数功能分别类似于fmt.Scan、fmt.Scanf、fmt.Scanln三个函数，只不过它们不是从标准输入中读取数据而是从指定字符串中读取数据。

  func Sscan(str string, a ...interface{}) (n int, err error)
  func Sscanln(str string, a ...interface{}) (n int, err error)
  func Sscanf(str string, format string, a ...interface{}) (n int, err error)
 */
}

```
