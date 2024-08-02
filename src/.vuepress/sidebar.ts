import { sidebar } from "vuepress-theme-hope";

export default sidebar(
  {
    "/database/": 
    [
      { 
        text: "数据库技术", 
        prefix: "/database/",
        icon: "database",
        collapsible: true,
        expanded: false,
        children: [
          {
            text: "MYSQL数据库",
            prefix: "/database/mysql/",
            collapsible: true,
            expanded: false,
            children: [
              // "introduce",
              // "sql"
              // {
              //   text: "基础",
              //   collapsible: true,
              //   expanded: false,
              //   prefix: "/database/mysql/basic/",
              //   children: ["introduce"],
              // },
              // {
              //   text: "进阶",
              //   collapsible: true,
              //   expanded: false,
              //   prefix: "/database/mysql/intermediate/",
              //   children: ["sql"],
              // },
              // {
              //   text: "高级",
              //   collapsible: true,
              //   expanded: false,
              //   prefix: "/database/mysql/intermediate/",
              //   children: ["sql"],
              // }
            ],
          },
          {
            text: "REDIS数据库",
            prefix: "/database/redis/",
            collapsible: true,
            expanded: false,
            children: [
              "introduce",
              "install",
              "type-server",
              "transaction",
              "persistence"
              // {
              //   text: "基础",
              //   collapsible: true,
              //   expanded: false,
              //   prefix: "/database/mysql/basic/",
              //   children: ["introduce"],
              // },
              // {
              //   text: "进阶",
              //   collapsible: true,
              //   expanded: false,
              //   prefix: "/database/mysql/intermediate/",
              //   children: ["sql"],
              // },
              // {
              //   text: "高级",
              //   collapsible: true,
              //   expanded: false,
              //   prefix: "/database/mysql/intermediate/",
              //   children: ["sql"],
              // }
            ],
          }
        ]
      },
    ],
    "/distributed/":
    [
      { 
        text: "分布式技术", 
        prefix: "/distributed/",
        icon: "earth-americas",
        collapsible: true,
        expanded: false,
        children: [
          {
            text: "Zookeeper 文档",
            prefix: "/distributed/zookeeper/",
            collapsible: true,
            expanded: false,
            children: [
              "introduce",
              "install",
              "client-api",
              "watcher",
              "curator",
              "lock",
              "custer"
            ],
          },
          {
            text: "Dubbo 文档",
            prefix: "/distributed/dubbo/",
            collapsible: true,
            expanded: false,
            children: [
              "introduce",
            ],
          }
        ]
      }
    ]
  }, 
  // "/": [
  // "",
  // {
  //   text: "如何使用",
  //   icon: "laptop-code",
  //   prefix: "demo/",
  //   link: "demo/",
  //   children: "structure",
  // },
  // {
  //   text: "文章",
  //   icon: "book",
  //   prefix: "posts/",
  //   children: "structure",
  // },
  // "intro",
  // {
  //   text: "幻灯片",
  //   icon: "person-chalkboard",
  //   link: "https://plugin-md-enhance.vuejs.press/zh/guide/content/revealjs/demo.html",
  // },
  // ],
);
