import { sidebar } from "vuepress-theme-hope";

export default sidebar(
  {
    "/database/":
    [
      {
        text: "📁 数据库专栏",
        prefix: "/database/",
        icon: "database",
        collapsible: true,
        expanded: false,
        children: [
          {
            text: "📁 MySQL",
            prefix: "/database/mysql/",
            collapsible: true,
            expanded: false,
            children: [
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
                  "binlog",
                  "framework"
                ],
              },
            ],
          },
          {
            text: "📁 redis",
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
            ],
          },
          {
            text: "📁 influxdb",
            prefix: "/database/influxdb/",
            collapsible: true,
            expanded: false,
            children: [
              "introduce",
              "install",
              "agreement",
              "commandline"
            ],
          }
        ]
      },
    ],
    "/distributed/":
    [
      {
        text: "📁 分布式专栏",
        prefix: "/distributed/",
        icon: "earth-americas",
        collapsible: true,
        expanded: false,
        children: [
          {
            text: "📁 zookeeper",
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
            text: "📁 dubbo",
            prefix: "/distributed/dubbo/",
            collapsible: true,
            expanded: false,
            children: [
              "introduce",
              "build_project"
            ],
          },
          {
            text: "📁 nacos",
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
        text: "📁Java 专栏",
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
          },
          {
            text: "📁高级篇",
            prefix: "/java/senior",
            collapsible: true,
            expanded: false,
            children: [
              "class_load"
            ],
          },
          {
            text: "📁SpringBoot篇",
            prefix: "/java/springboot",
            collapsible: true,
            expanded: false,
            children: [
              "jimuReport"
            ],
          },
          {
            text: "📁脚手架篇",
            prefix: "/java/ruoyi",
            collapsible: true,
            expanded: false,
            children: [
              "introduce",
              "install"
            ],
          }
        ]
      }
    ],
    "/nestJs/":
    [
      {
        text: "nestJs 专栏",
        prefix: "/nestJs/",
        icon: "earth-americas",
        collapsible: true,
        expanded: false,
        children: [
          {
            text: "📁入门篇",
            prefix: "/nestJs/base",
            collapsible: true,
            expanded: false,
            children: [
              "opening",
              "Introduction-install",
              "controller",
              "provider"
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
          },
          {
            text: "📁团队管理",
            prefix: "/other/team",
            collapsible: true,
            expanded: false,
            children: [
              "agility",
              "yslow"
            ],
          },
          {
            text: "📁流媒体",
            prefix: "/other/streaming_media",
            collapsible: true,
            expanded: false,
            children: [
              "service_install"
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
    ],
    "/python/":
    [
      {
        text: "📁Python 专栏",
        prefix: "/python/",
        icon: "earth-americas",
        collapsible: true,
        expanded: false,
        children: [
          {
            text: "📁入门篇",
            prefix: "/python/base",
            collapsible: true,
            expanded: false,
            children: [
              "introduce",
              "install-number-text-list",
              "process-control",
              "function",
              "data-structure",
              "string-file",
              "class",
              "standard-library"
            ],
          },
        ]
      }
    ],
    "/c/":
    [
      {
        text: "📁C++ 专栏",
        prefix: "/c/",
        icon: "earth-americas",
        collapsible: true,
        expanded: false,
        children: [
          {
            text: "📁入门篇",
            prefix: "/c/base",
            collapsible: true,
            expanded: false,
            children: [
              "introduce",
              "variable_constant",
              "storage_class",
              "loop_judgment_statement",
              "function",
              "array_string"
            ],
          },
        ]
      }
    ],
    "/practicalProject/":
    [
      {
        text: "📁实战项目专栏",
        prefix: "/practicalProject/",
        icon: "earth-americas",
        collapsible: true,
        expanded: false,
        children: [
          {
            text: "📁基础篇",
            prefix: "/practicalProject/base",
            collapsible: true,
            expanded: false,
            children: [
              "002-Campus-Second-hand-Trading-Platform",
              "003-Campus-Dormitory-Management-System",
            ],
          },
        ]
      }
    ]
  },
);
