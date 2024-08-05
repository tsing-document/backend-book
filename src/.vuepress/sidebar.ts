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
              "persistence",
              "application",
              "dynamics-string",
              "list"
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
    ],
    "/java/":
    [
      { 
        text: "Java 技术", 
        prefix: "/java/",
        icon: "earth-americas",
        collapsible: true,
        expanded: false,
        children: [
          {
            text: "入门篇",
            prefix: "/java/base",
            collapsible: true,
            expanded: false,
            children: [
              "introduce",
              "install",
              "note-data-type-operator",
              "processcontrol-container"
            ],
          }
        ]
      }
    ]
  },
);
