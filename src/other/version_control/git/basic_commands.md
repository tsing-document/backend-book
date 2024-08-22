---
title: 【第二篇章】GIT常用命令
index: false
isOriginal: true
category: "奇谈杂论"
tag: "git"
date: 2024-08-19
---

Git的常用命令非常丰富，以下是一些最基础且频繁使用的Git命令，以及它们的简要说明：

## 一、初始化与克隆

* **git init**：在当前目录初始化一个新的Git仓库，创建一个.git目录。
* **git clone [url]**：克隆远程仓库到本地，包括所有的分支和提交历史。

## 二、状态与差异

* **git status**：显示当前工作目录和暂存区的状态，如哪些文件已被修改但尚未提交。
* **git diff**：显示工作目录中文件与暂存区或历史提交之间的差异。

## 三、提交与暂存

* **git add [filename]**：将文件添加到暂存区，准备提交。
* **git commit -m "message"**：提交暂存区的文件到本地仓库，并附上一条描述性消息。

## 四、分支管理

* **git branch**：列出本地所有分支，默认显示当前分支前有星号标记。
* **git branch [branchname]**：创建新分支，但不切换。
* **git checkout [branchname]**：切换到指定分支。
* **git checkout -b [branchname]**：创建新分支并立即切换到该分支。
* **git merge [branchname]**：将指定分支合并到当前分支。
* **git rebase [branchname]**：将当前分支的提交基于指定分支重新应用，通常用于保持提交历史的线性。

## 五、远程操作

* **git remote -v**：显示远程仓库的详细信息，包括URL。
* **git fetch [remote]**：从远程仓库拉取最新变更，但不合并到本地分支。
* **git pull [remote] [branch]**：拉取远程分支的变更并合并到本地分支。
* **git push [remote] [branch]**：将本地分支的变更推送到远程仓库。

## 六、版本回退与撤销

* **git reset --hard [commit_id]**：将当前分支重置到指定提交，工作区和暂存区都将被该提交的内容覆盖。
* **git revert [commit_id]**：创建一个新的提交来撤销指定提交的更改，这不会改变项目历史。
* **git checkout -- [filename]**：恢复文件到最近一次提交的状态，用于撤销工作区的修改。

## 七、查看历史与日志

* **git log**：显示提交日志，列出项目的提交历史。
* **git show [commit_id]**：显示指定提交的详细信息。
* **git reflog**：查看所有引用的变更记录，包括已经删除的提交和分支。

## 八、其他常用命令

* **git tag**：列出标签，用于给特定的提交打上标签，便于查找和引用。
* **git stash**：暂存当前工作进度，以便能够切换到其他分支进行工作。
* **git clean**：删除工作区中未跟踪的文件，通常用于清理构建产物等。
* **git grep**：在代码库中搜索特定内容或模式。

### 注意事项

* 使用Git时，务必谨慎使用那些会改变项目历史的命令，如`git reset --hard`和`git push --force`，因为它们可能会导致数据丢失或协作问题。
* 在多人协作的项目中，定期与远程仓库同步（使用`git pull`或`git fetch`后合并）是一个好习惯，可以避免潜在的冲突和重复工作。
* 对于初学者来说，理解和掌握Git的基本命令和操作流程是非常重要的，这将为后续的版本控制和协作开发打下坚实的基础。