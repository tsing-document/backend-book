import { navbar } from "vuepress-theme-hope";

export default navbar(
  [
    "/home.md",
    { text: "Java技术", icon: "java", link: "/java/base/introduce.md",  activeMatch: "^/java/$",  },
    { text: "分布式技术", icon: "edasqiyejifenbushiyingyongfuwu", link: "/distributed/zookeeper/introduce.md",  activeMatch: "^/distributed/$",  },
    { text: "数据库技术", icon: "shujuku", link: "/database/mysql/introduce.md",  activeMatch: "^/database/$", },
    "/mine/"
  ]
);
