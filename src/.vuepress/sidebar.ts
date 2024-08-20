import { sidebar } from "vuepress-theme-hope";

export default sidebar(
  {
    "/database/": 
    [
      { 
        text: "📁数据库技术", 
        prefix: "/database/",
        icon: "database",
        collapsible: true,
        expanded: false,
        children: [
          {
            text: "📁MYSQL数据库",
            prefix: "/database/mysql/",
            collapsible: true,
            expanded: false,
            children: [
              // "sql"
              {
                text: "📁基础",
                collapsible: true,
                expanded: false,
                prefix: "/database/mysql/basic/",
                children: ["introduce"],
              },
              {
                text: "📁进阶",
                collapsible: true,
                expanded: false,
                prefix: "/database/mysql/advanced/",
                children: [
                  "system-mysql-server",
                  "request-process",
                  "innodb",
                  "binlog"
                ],
              },
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
            text: "📁REDIS数据库",
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
              "list",
              "efficient"
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
        text: "📁分布式技术", 
        prefix: "/distributed/",
        icon: "earth-americas",
        collapsible: true,
        expanded: false,
        children: [
          {
            text: "📁Zookeeper 文档",
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
            text: "📁Dubbo 文档",
            prefix: "/distributed/dubbo/",
            collapsible: true,
            expanded: false,
            children: [
              "introduce",
              "build_project"
            ],
          },
          {
            text: "📁Nacos 文档",
            prefix: "/distributed/nacos/",
            collapsible: true,
            expanded: false,
            children: [
              "install",
            ],
          }
        ]
      }
    ],
    "/java/":
    [
      { 
        text: "📁Java技术", 
        prefix: "/java/",
        icon: "earth-americas",
        collapsible: true,
        expanded: false,
        children: [
          {
            text: "📁入门篇",
            prefix: "/java/base",
            collapsible: true,
            expanded: false,
            children: [
              "introduce",
              "install",
              "note-data-type-operator",
              "processcontrol-container",
              "oop",
              "generic",
              "abnormal",
              "annotation",
              "thread",
              "reflex"
            ],
          },
          {
            text: "📁进阶篇",
            prefix: "/java/advanced",
            collapsible: true,
            expanded: false,
            children: [
              "spring",
              "springmvc",
              "mybatis"
            ],
          }
        ]
      }
    ],
    "/other/":
    [
      { 
        text: "📁奇谈杂论", 
        prefix: "/other/",
        icon: "earth-americas",
        collapsible: true,
        expanded: false,
        children: [
          {
            text: "📁服务器",
            prefix: "/other/server/nginx",
            collapsible: true,
            expanded: false,
            children: [
              "introduce",
              "install"
            ],
          },
          {
            text: "📁版本控制",
            prefix: "/other/version_control/git",
            collapsible: true,
            expanded: false,
            children: [
              "introduce",
              "basic_commands"
            ],
          }
        ]
      }
    ],
    "/interview/":
    [
      { 
        text: "📁面试宝典", 
        prefix: "/interview/",
        icon: "earth-americas", 
        collapsible: true,
        expanded: false,
        children: [
          {
            text: "📁java基础常见面试题总结",
            prefix: "/interview/javabase/",
            collapsible: true,
            expanded: false,
            children: [
              "java_base_upper",
              "java_oop_upper"
            ],
          },
          {
            text: "📁java多线程常见面试题总结",
            prefix: "/interview/thread/",
            collapsible: true,
            expanded: false,
            children: [
              "thread_upper",
              "thread_center"
            ],
          },
          {
            text: "📁存储介质常见面试题总结",
            prefix: "/interview/storage/",
            collapsible: true,
            expanded: false,
            children: [
              "mysql_upper",
              "mysql_center",
              "redis_upper"
            ],
          },
          {
            text: "📁mybatis常见面试题总结",
            prefix: "/interview/mybatis/",
            collapsible: true,
            expanded: false,
            children: [
              "mybatis_upper",
            ],
          },
          {
            text: "📁spring常见面试题总结",
            prefix: "/interview/spring/",
            collapsible: true,
            expanded: false,
            children: [
              "spring_upper",
            ],
          },
          {
            text: "📁springboot常见面试题总结",
            prefix: "/interview/springboot/",
            collapsible: true,
            expanded: false,
            children: [
              "springboot_upper",
            ],
          }
        ]
      }
    ]
  },
);
