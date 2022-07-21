---
title: vim
date: 2022-06-21 10:20:30
type: 'vim'
layout: 'vim'
---

# 之前刷到这样一个视频（一个关于 vim 的挑战游戏）

Reference:

vim Golf（上）: [https://www.bilibili.com/video/BV1zY4y1z7zz](https://www.bilibili.com/video/BV1zY4y1z7zz)

新手如何正确入门vim？: [https://www.bilibili.com/video/BV1BJ411q7ax](https://www.bilibili.com/video/BV1BJ411q7ax)

官网: http://www.vimgolf.com/

某个挑战（Fix the shell script!）: [http://www.vimgolf.com/challenges/9v006233d72d000000000219](http://www.vimgolf.com/challenges/9v006233d72d000000000219)

这玩意需要用twitter去注册还是用点门槛2333

在windows下安装ruby使用gem: [https://daner1990.github.io/%E5%B7%A5%E5%85%B7/2015/10/12/install-ruby-in-windows/](https://daner1990.github.io/%E5%B7%A5%E5%85%B7/2015/10/12/install-ruby-in-windows/)

ruby国内镜像: [https://gems.ruby-china.com/](https://gems.ruby-china.com/)

Ruby 安装 - Windows: [https://www.runoob.com/ruby/ruby-installation-windows.html](https://www.runoob.com/ruby/ruby-installation-windows.html)

# vim 笔记

## 普通模式

上	下	左	右

h	j	k	l



下一个单词开头	前一个单词的开头

w(word)	b(begin)



文档最上方	文档最下方

gg	G



向上翻页	向下翻页

ctrl + u	ctrl + d



移动到最近的字母

fr(移动到最近的r上往后找)



复制单词

yaw == Yank All Words



向上复制四行

y4k



删除当前行

dd



删除当前行和下一行

dj



删除到r位置

dfr



撤销

u



当前光标之前输入	当前光标之后输入

i a



从行首输入	从行末输入

I	A



删除当前单词并进入插入模式	删除整行进入插入模式

caw	cc

## 可视模式

进入输入模式之后与普通模式的操作基本一样

v
