---
title: 【第一篇章】认识一下GIT
index: false
isOriginal: true
category: "奇谈杂论"
tag: "git"
date: 2024-08-19
---

Git是一种分布式版本控制系统，用于敏捷高效地处理任何或小或大的项目。以下是Git的详细介绍：

## 一、Git的基本概念

* **分布式**：Git的最大特点之一是它的分布式设计。这意味着每个开发者都拥有完整的代码仓库，包含项目的全部历史记录。开发者可以在离线状态下工作，减少对中央服务器的依赖，并且可以在本地进行提交、分支和合并等操作。
* **版本控制**：Git可以跟踪文件和目录的变化，并保存每次提交的快照。这些快照包括文件的当前状态以及提交时的元数据信息（如作者、日期和注释）。
* **分支管理**：Git鼓励使用分支进行并行开发。分支是Git中非常重要的概念，允许开发者在不影响主线（通常是master或main分支）的情况下进行实验性的更改。

## 二、Git的工作流程

Git的工作流程通常包括以下几个步骤：

1. **初始化仓库**：在本地或远程创建一个新的Git仓库，并在其中存储项目的代码和历史版本。
2. **添加文件到暂存区**：将要进行版本控制的文件添加到Git的暂存区（或称为索引区）。
3. **提交更改**：将暂存区中的更改提交到版本库中，并生成一个唯一的哈希值来标识这次提交。
4. **查看提交历史**：通过Git命令查看项目的提交历史，了解每次提交的详细信息。

## 三、Git的主要特点

* **快速高效**：Git设计优化了存储和传输过程，使用了快速的算法，使得Git在处理大型项目和大量数据时表现得非常高效。
* **强大的分支管理**：Git的分支管理功能非常强大，可以轻松创建、合并和删除分支，使得团队协作更加灵活和高效。
* **完整性保证**：Git使用哈希值来标识版本，保证了版本的完整性和可追溯性。
* **多种协议支持**：Git支持多种协议和方式进行代码的传输和交换，包括HTTP、SSH等，使得团队成员可以方便地共享代码和进行协作开发。
* **缓存机制**：Git引入了缓存机制，将文件的变化在内存中暂存，只有在需要提交时才会写入磁盘，大大提高了文件的读写效率。

## 四、Git的应用场景

Git广泛应用于软件开发、项目管理、学术研究等领域。它可以帮助团队成员更好地协作开发，确保代码的可追溯性和可维护性。同时，Git也支持与其他开发工具和平台的集成，如GitHub、GitLab等，为开发者提供了更加便捷的代码托管和协作环境。

综上所述，Git是一种功能强大、灵活高效的分布式版本控制系统，为现代软件开发和团队协作提供了重要的支持。

Git和SVN作为两种流行的版本控制系统，各有其独特的特性和应用场景。以下是对Git和SVN的详细对比：

## 五、Git VS Svn 对比

### 1、系统架构

* **Git**：分布式版本控制系统。每个开发者都可以在本地完整地复制整个代码仓库，并独立进行开发和版本控制。这种架构使得Git更适合分布式团队和开发模式，支持并行开发和灵活的分支管理。
* **SVN**：集中式版本控制系统。所有的开发者需要通过中央服务器进行版本控制，每个开发者只能从中央服务器获取代码，并且提交修改也需要依赖于中央服务器。因此，SVN对中央服务器的稳定性和可用性有较高要求，同时也限制了开发者的独立性和灵活性。

### 2、数据存储与完整性

* **Git**：使用快照机制来存储项目数据，每个提交都记录了一个完整的项目状态。这种机制确保了内容的完整性，即使在遇到磁盘故障和网络问题时也能降低对版本库的破坏。Git通过SHA-1哈希算法保护文件内容和更改历史的完整性。
* **SVN**：保存文件前后变化的差异数据。这种方式在查看历史版本时需要合并多个差异数据，可能在某些情况下影响性能。此外，SVN对服务器的依赖较高，一旦服务器出现问题，可能导致整个团队无法工作。

### 3、分支管理

* **Git**：支持在本地轻松创建和管理任意数量的分支。Git的分支操作非常快速，因为它只是创建了一个指向某个提交的指针，并不会复制实际的文件数据。这使得Git非常适合多分支并行开发。
* **SVN**：分支管理相对较为复杂。SVN的分支实际上是一个完整的目录副本，包含实际的文件数据。创建和删除分支都需要在服务器上操作，且需要与其他开发者同步。这限制了SVN在多分支并行开发方面的灵活性。

### 4、性能与效率

* **Git**：在提交、分支、合并和比较等操作上进行了性能优化。Git关注文件内容而不是文件名，并使用增量编码、压缩和明确存储目录内容和版本元数据对象来存储文件。这使得Git在处理大型项目和大量数据时表现出色。
* **SVN**：由于所有操作都需要通过服务器进行同步，因此服务器的性能对SVN的整体性能有较大影响。在服务器性能不足或网络状况不佳的情况下，SVN的响应速度可能会受到影响。

### 5、安全性与权限管理

* **Git**：每个开发者的本地仓库都包含完整的项目历史和版本信息，这在一定程度上提高了数据的安全性。然而，Git的权限管理相对较为宽松，主要通过账号角色划分来控制访问权限。
* **SVN**：服务端统一控制好访问权限，可以按组、个人针对某个子目录的权限进行控制。这使得SVN在安全管理方面具有一定的优势。

### 6、应用场景

* **Git**：更适合分布式团队、高度并行开发、大型项目以及开源项目。Git的分布式特性和强大的分支管理功能使得它成为这些场景下的首选版本控制系统。
* **SVN**：对于传统团队、集中式开发以及较为简单的项目来说，SVN可能是一个更合适的选择。SVN的集中式管理方式和简单易用的操作界面使得它更容易被这些团队所接受和使用。

综上所述，Git和SVN各有其优缺点和适用场景。在选择版本控制系统时，需要根据具体的项目需求、团队特点和开发模式来综合考量。

### 7、直接记录快照，并非差异比较

Git 和其他控制系统相比，Git 只关心文件数据的整体是否发生了变化，而大多数其他系统则关心文件的内容的具体差异。
![avatar](./1.3.png)

Git 不保存这些前后变化的差异数据。Git 更像是把变化的文件作快照后，记录在一个微型文件系统中。每次提交更新时，他会纵览一遍所有文件的指纹信息并对文件作一个快照，然后保存一个指向快照的索引。为了提高性能，如果文件没有变化，Git不会保存，而是对上次保存到快照做一个链接。
![avatar](./1.4.png)


### 8、文件的状态转化

Untracked

* 未跟踪, 此文件在文件夹中, 但并没有加入到git库, 不参与版本控制. 通过git add 状态变为Staged。

Unmodify

* 文件已经入库, 未修改, 即版本库中的文件快照内容与文件夹中完全一致. 这种类型的文件有两种去处, 如果它被修改, 而变为Modified. 如果使用git rm移出版本库, 则成为Untracked文件。

Modified

* 文件已修改, 仅仅是修改, 并没有进行其他的操作. 这个文件也有两个去处, 通过git add可进入暂存staged状态, 使用git checkout 则丢弃修改过, 返回到unmodify状态, 这个git checkout即从库中取出文件, 覆盖当前修改。

Staged

* 暂存状态. 执行git commit则将修改同步到库中, 这时库中的文件和本地文件又变为一致, 文件为Unmodify状态. 执行git reset HEAD filename取消暂存, 文件状态为Modified。

![avatar](./1.5.png)


## 六、Windows 安装 Git

git 官网下载地址 `https://git-scm.com/`。按照傻瓜式安装就 OK 了。