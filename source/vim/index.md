---
title: vim
date: 2022-06-21 10:20:30
type: 'vim'
layout: 'vim'
---

# 之前刷到这样一个视频（一个关于 vim 的挑战游戏）

Reference:

vim Golf（上）: [https://www.bilibili.com/video/BV1zY4y1z7zz](https://www.bilibili.com/video/BV1zY4y1z7zz)

新手如何正确入门 vim？: [https://www.bilibili.com/video/BV1BJ411q7ax](https://www.bilibili.com/video/BV1BJ411q7ax)

官网: http://www.vimgolf.com/

某个挑战（Fix the shell script!）: [http://www.vimgolf.com/challenges/9v006233d72d000000000219](http://www.vimgolf.com/challenges/9v006233d72d000000000219)

这玩意需要用 twitter 去注册还是用点门槛 2333

在 windows 下安装 ruby 使用 gem: [https://daner1990.github.io/%E5%B7%A5%E5%85%B7/2015/10/12/install-ruby-in-windows/](https://daner1990.github.io/%E5%B7%A5%E5%85%B7/2015/10/12/install-ruby-in-windows/)

ruby 国内镜像: [https://gems.ruby-china.com/](https://gems.ruby-china.com/)

Ruby 安装 - Windows: [https://www.runoob.com/ruby/ruby-installation-windows.html](https://www.runoob.com/ruby/ruby-installation-windows.html)

vscode-vim [https://zhuanlan.zhihu.com/p/430603620](https://zhuanlan.zhihu.com/p/430603620)

# vim 笔记

https://www.bilibili.com/video/BV1z541177Jy

![image-20220717221342336](https://qiniuyun.code520.com.cn/images/image-20220717221342336.png)

![image-20220717221538548](https://qiniuyun.code520.com.cn/images/image-20220717221538548.png)

![image-20220717221854491](https://qiniuyun.code520.com.cn/images/image-20220717221854491.png)

![image-20220718082817955](https://qiniuyun.code520.com.cn/images/image-20220718082817955.png)![image-20220718083038030](https://qiniuyun.code520.com.cn/images/image-20220718083038030.png)

![image-20220718083209827](https://qiniuyun.code520.com.cn/images/image-20220718083209827.png)

![image-20220718084646556](https://qiniuyun.code520.com.cn/images/image-20220718084646556.png)

![image-20220718090021807](https://qiniuyun.code520.com.cn/images/image-20220718090021807.png)

![image-20220718092512285](https://qiniuyun.code520.com.cn/images/image-20220718092512285.png)

## 普通模式

上 下 左 右

h j k l

下一个单词开头 前一个单词的开头

w(word) b(begin)

文档最上方 文档最下方

gg G

向上翻页 向下翻页

ctrl + u ctrl + d

移动到最近的字母

fr(移动到最近的 r 上往后找)

复制单词

yaw == Yank All Words

向上复制四行

y4k

删除当前行

dd

删除当前行和下一行

dj

删除到 r 位置

dfr

撤销

u

当前光标之前输入 当前光标之后输入

i a

从行首输入 从行末输入

I A

删除当前单词并进入插入模式 删除整行进入插入模式

caw(ciw) cc

i 和 a 的区别一个包括一个不包括

在下一行插入 在上一行插入

o O

die(删除整个文件内容普通模式) yie(复制整个文件内容) cie(删除整个文件内容进入插入模式)

```html
<div>dit cit</div>
```

gh(函数 hover) gt(页面跳转) gd(函数跳转) ctrl + 0

<leader><leader> s... === space space s(待探索中)

复制一行 复制 n 行

yy nyy

**全选（高亮显示**）：按 esc 后，然后 ggvG 或者 ggVG

**全部复制：**按 esc 后，然后 ggyG

**全部删除：**按 esc 后，然后 dG

### vscode 多光标模式好像有点问题

## 可视模式

进入输入模式之后与普通模式的操作基本一样

v
