1.Linux下的上传和下载yum install -y lrzsz

2.node.js官网下载安装包

3.上传服务器，解压 tar -xvf node-v8.11.3-linux-x64.tar.xz

4.重命名 mv node-v8.11.3-linux-x64 nodejs

5.确认一下nodejs下bin目录是否有 node 和 npm 文件, 建立软连接，变为全局:
ln -s /usr/local/src/nodejs/bin/node/usr/local/bin/node
ln -s /usr/local/src/nodejs/bin/npm /usr/local/bin/npm

6.安装zip压缩工具 yun install -y zip
