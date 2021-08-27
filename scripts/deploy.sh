#!/usr/bin/env sh
###
 # @Descripttion: 
 # @Author: velen.zhang
 # @Date: 2021-08-27 11:12:24
 # @LastEditors: velen.zhang
 # @LastEditTime: 2021-08-27 11:15:02
### 

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add .
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git remote add origin git@github.com:huabingtao/vuepress-starter.git
git branch -M main
git push -f git@github.com:huabingtao/vuepress-starter.git main:gh-pages