import { navbar } from "vuepress-theme-hope";

export default navbar(
  [
    "/home.md",
    { text: "Java技术", icon: "java", link: "/java/base/introduce.md",  activeMatch: "^/java/$",  },
    { text: "分布式技术", icon: "edasqiyejifenbushiyingyongfuwu", link: "/distributed/zookeeper/introduce.md",  activeMatch: "^/distributed/$",  },
    { text: "数据库技术", icon: "shujuku", link: "/database/mysql/basic/introduce.md",  activeMatch: "^/database/$", },
    { text: "奇谈杂论", icon: "guaishou", link: "/other/server/nginx/introduce.md",  activeMatch: "^/other/$", },
    { text: "面试宝典", icon: "stump", link: "/interview/",  activeMatch: "^/interview/$", },
    { text: "书籍下载", icon: "jiandurenyuan", link: "/bookdownload/README.md",  activeMatch: "^/bookdownload/$", },
    "/mine/"
  ]
);
