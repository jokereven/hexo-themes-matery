---
title: Vscode网页版搭建
author: 周靖
img: medias/featureimages/15.jpg
top: false
cover: false
toc: false
mathjax: false
summary: Vscode网页版搭建
categories: vscode
tags:
  - vscode
keywords: 周靖
essay: false
abbrlink: 4910
date: 2021-09-02 16:47:34
coverImg:
password:
---

````
## `vscode网页版搭建`

### `配置code-server`

1. `下载可能有点慢`

```js
/* 挂载代理 */
/* 先挂载代理在下载 */
export http_proxy=http://proxyAddress:port
````

2. `下载`

```js
wget https://github.com/cdr/code-server/releases/download/v3.10.2/code-server-3.10.2-linux-amd64.tar.gz
```

3. `解压`

```js
tar -xvzf code-server-3.10.2-linux-amd64.tar.gz
```

4. `改一下名字`

```js
mv code-server-3.10.2-linux-amd64 code-server
```

5. `运行一下`

```js
export PASSWORD="123456"/* 登陆使用的密码 */
./code-server --port 8080 --host 0.0.0.0 --auth password /* 不用改 */

/* 浏览器访问服务器ip:8080 ok了*/
```

6. `挂到后台运行`

```js
nohup ./code-server --port 8080 --host 0.0.0.0 --auth password > test.log 2>&1 &

/* 会产生一个PID */

/* 杀死进程 */
kill -9 PID

/* 查询PID的方法 */
ps aux | grep ./code-server
```

7. `使用bash文件进行上面的操作`

```js
/* 在code-server根文件夹下 */
vim start.sh

# start.sh
export PASSWORD="123456" /* 密码改成自己的 */
nohup ./code-server --port 8080 --host 0.0.0.0 --auth password > test.log 2>&1 &
echo $! > save_pid.txt

vim shut.sh

# shut.sh
kill -9 'cat save_pid.txt'
```

8. `使用code-server`

```js
cd code-server
./start.sh

/*可能会报错 -bash: ./startup.sh: Permission denied */

/* 修改一下权限 */
(chmod u+x *.sh)

/* 在试一下 */
./start.sh
```

```

```
