---
title: 使用Hexo搭建个人博客
author: 周靖
img: medias/featureimages/6.jpg
top: true
cover: false
toc: true
mathjax: false
summary: 使用Hexo搭建个人博客
categories: Hexo
tags:
  - Hexo
  - 个人博客
keywords: 周靖
essay: false
abbrlink: 45829
date: 2021-09-02 16:53:47
coverImg:
password:
---

## `使用Hexo搭建个人博客`

##### [Hexo配置](https://gitee.com/yafine66/hexo-theme-matery)

### `一. 服务器配置Git`

#### `1. 安装依赖库`

```js
yum install curl-devel expat-devel gettext-devel openssl-devel zlib-devel -y
```

#### `2. 安装编译工具`

```js
yum install gcc perl-ExtUtils-MakeMaker package -y
```

#### `3. 查看git的版本`

```js
# git version
git version 1.8.3.1
```

#### `4. 安装高版本的Git`

```js
/* 如果是 CentOS 7 系统就安装下面两个之一吧 */

yum install http://opensource.wandisco.com/centos/7/git/x86_64/wandisco-git-release-7-1.noarch.rpm -y

yum install http://opensource.wandisco.com/centos/7/git/x86_64/wandisco-git-release-7-2.noarch.rpm -y

```

#### `5. 更新`

```js
yum update git -y
```

#### `6. 再次查看git的版本`

```js
# git version
git version 2.22.0
```

#### `7. 创建git用户并且修改权限`

```js
adduser even
passwd even
chmod 740 /etc/sudoers
vim /etc/sudoers
root ALL=(ALL) ALL
even ALL=(ALL) ALL /* 修改一下配置文件 */
```

#### `8. 本地windows10使用Gitbash创建密钥`

```js
ssh-keygen -t rsa
```

#### `9. 将本地的id_rsa.pub文件复制`

```js
su even
mkdir ~/.ssh
vim ~/.ssh/authorized_keys /* 粘贴到该文件 */
```

#### `10. 本地测试`

```js
ssh -v even@服务器ip/* 没报错出现一大堆的东西OK了 */
```

### `二. 云服务器网站配置`

#### `1. 创建网站目录并且设置权限`

```js
su root
mkdir /home/hexo
chown even:even -R /home/hexo
```

#### `2. 安装Nginx`

```js
yum install -y nginx
systemctl start nginx.service    /*启动服务*/
```

#### `3. 修改Nginx配置文件`

```js
vim /etc/nginx/nginx.conf

38 server {
39 listen 80;
40 listen [::]:80;
41 server_name zhou125disorder.icu; #域名
42 root /home/hexo; #网站目录
```

#### `4. 重启服务器`

```js
systemctl restart nginx.service
```

#### `5. 建立git仓库`

```js
su root
cd /home/even
git init --bare blog.git
chown even:even -R blog.git
```

#### `6. 同步网站根目录`

```js
vim blog.git/hooks/post-receive

# /bin/sh
git --work-tree=/home/hexo --git-dir=/home/even/blog.git checkout -f
```

#### `7. 修改权限`

```js
chmod +x /home/even/blog.git/hooks/post-receive
```

#### `8. 在windows10本地hexo根目录修改_config.yml文件`

```js
deploy:
  type: git
  repository: even@121.4.48.188:/home/even/blog.git    #用户名@服务器Ip:git仓库位置
  branch: master
```

#### `9. 在本机gitbash部署`

```js
hexo s /* 可以先看一下效果 */
hexo clean
hexo g /* 生成静态文件 */
hexo d /* 上传到服务器 */
```

### `三. 常见报错`

```js
git-upload-pack: 未找到命令
bash: git-upload-pack: command not found
fatal: Could not read from remote repositorqy.

/* 解决方法 */
sudo ln -s /usr/local/git/bin/git-upload-pack /usr/bin/git-upload-pack
```

```js
git-receive-pack: 未找到命令
bash: git-receive-pack: command not found
fatal: Could not read from remote repository.
/* 解决方法 */

sudo ln -s /usr/local/git/bin/git-receive-pack /usr/bin/git-receive-pack
```

```js
无法远程连接获取
fatal: Could not read from remote repository.
/* 解决方法 */

重试或者 删掉本地 ssh 公钥重新上传至服务器
```

```js
key 出错(基本都是这一步出错)
Host key verification failed.
/* 解决方法 */

ssh-keygen -R 你要访问的 IP 地址
```
