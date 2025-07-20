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
              "01-introduce",
              "02-variable",
              "03-string",
              "04-number",
              "05-list",
              "06-tuple",
              "07-if",
              "08-dict",
              "09-input",
              "10-while",
              "11-function",
              "12-class",
              "13-file"
            ],
          },
          {
            text: "📁杂项",
            prefix: "/python/miscellaneous",
            collapsible: true,
            expanded: false,
            children: [
                "client_database"
            ]
          }
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
              "array_string",
              "document_writing",
              "pointer",
              "structure",
              "core",
            ],
          },
        ]
      }
    ],
    "/项目专栏/":
    [
      {
        text: "📁项目专栏",
        prefix: "/项目专栏/",
        icon: "earth-americas",
        collapsible: true,
        expanded: false,
        children: [
          {
            text: "📁 00001-00050",
            prefix: "/项目专栏/学生项目/00001-00050",
            collapsible: true,
            expanded: false,
            children: [
                "00007-扶贫项目",
                "00008-宠物领养管理系统",
                "00009-在线政务预约管理系统",
                "00010-景点预约参观管理系统",
                "00011-校园水果管理系统",
                "00012-基于微信小程序的景点预约系统",
                "00013-实验室预约管理系统",
                "00014-健身房预约管理系统",
                "00015-文化宣传系统",
                "00016-好胃口点餐管理系统",
                "00017-城镇文化管理系统",
                "00018-预约探监管理平台",
            ]
          }
        ]
      }
    ],
    "/网页设计/":
        [
          {
            text: "📁网页设计",
            prefix: "/网页设计/",
            icon: "earth-americas",
            collapsible: true,
            expanded: false,
            children: [
              {
                text: "📁 AI软件",
                prefix: "/网页设计/ai",
                collapsible: true,
                expanded: false,
                children: [
                    "01-新建",
                    "01-todo",
                ]
              }
            ]
          }
        ],
    "/aiandartificialintelligence/":
    [
      {
        text: "📁AI和人工智能专栏",
        prefix: "/c/",
        icon: "earth-americas",
        collapsible: true,
        expanded: false,
        children: [
          {
            text: "📁入门篇",
            prefix: "/aiandartificialintelligence",
            collapsible: true,
            expanded: false,
            children: [
              "第一章",
            ],
          },
        ]
      }
    ],
    "/书籍/":
    [
      {
        text: "📁教育",
        prefix: "/教育",
        icon: "earth-americas",
        collapsible: true,
        expanded: false,
        children: [
          {
            text: "📁语文",
            prefix: "/书籍/教育/苏教版/语文",
            collapsible: true,
            expanded: false,
            children: [
              "第一册",
            ],
          },
        ]
      }
    ],
  },
);
