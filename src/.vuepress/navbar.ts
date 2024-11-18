import { navbar } from "vuepress-theme-hope";

export default navbar(
  [
    "/home.md",
    { text: "Java 专栏", icon: "java", link: "/java/",  activeMatch: "^/java/$",  },
    { text: "nestJs 专栏", icon: "nestJs", link: "/nestJs/",  activeMatch: "^/nestJs/$",  },
    { text: "Python 专栏", icon: "java", link: "/python/",  activeMatch: "^/python/$",  },
    { text: "分布式专栏", icon: "edasqiyejifenbushiyingyongfuwu", link: "/distributed/",  activeMatch: "^/distributed/$",  },
    { text: "数据库专栏", icon: "shujuku", link: "/database/",  activeMatch: "^/database/$", },
    { text: "奇谈杂论", icon: "guaishou", link: "/other/",  activeMatch: "^/other/$", },
    { text: "面试宝典", icon: "stump", link: "/interview/",  activeMatch: "^/interview/$", },
    { text: "书籍下载", icon: "jiandurenyuan", link: "/bookdownload/README.md",  activeMatch: "^/bookdownload/$", },
    "/mine/"
  ]
);
