import { navbar } from "vuepress-theme-hope";

export default navbar(
  [
    "/home.md",
    { text: "Java 专栏", icon: "java", link: "/java/",  activeMatch: "^/java/$",  },
    { text: "nestJs 专栏", icon: "nestJs", link: "/nestJs/",  activeMatch: "^/nestJs/$",  },
    { text: "Python 专栏", icon: "java", link: "/python/",  activeMatch: "^/python/$",  },
    { text: "C++ 专栏", icon: "c", link: "/c/",  activeMatch: "^/c/$",  },
    { text: "分布式专栏", icon: "edasqiyejifenbushiyingyongfuwu", link: "/distributed/",  activeMatch: "^/distributed/$",  },
    { text: "数据库专栏", icon: "shujuku", link: "/database/",  activeMatch: "^/database/$", },
    { text: "奇谈杂论", icon: "guaishou", link: "/other/",  activeMatch: "^/other/$", },
    { text: "AI和人工智能", icon: "jiandurenyuan", link: "/aiandartificialintelligence/",  activeMatch: "^/aiandartificialintelligence/$", },
    { text: "面试宝典", icon: "stump", link: "/interview/",  activeMatch: "^/interview/$", },
    { text: "实战项目", icon: "stump", link: "/practicalProject/",  activeMatch: "^/practicalProject/$", },
    { text: "书籍下载", icon: "jiandurenyuan", link: "/bookdownload/README.md",  activeMatch: "^/bookdownload/$", },
    "/mine/"
  ]
);
