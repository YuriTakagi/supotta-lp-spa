import React from "react";
import { Link, useLocation } from "react-router-dom";
import ChevronRightIcon from "../Icon/ChevronRightIcon";
import styles from "./TopicPath.module.css";
type BreadcrumbItem = {
  name: string;
  path: string;
};

const translateInfo = {
  products: "商品一覧",
  "water-level-sensor": "水位センサー",
  "environmental-sensor": "環境センサー",
};

function getJapanese(nameEn: keyof typeof translateInfo) {
  return translateInfo[nameEn] || nameEn;
}

export default function TopicPath() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  const breadcrumbs: BreadcrumbItem[] = pathnames.map((_, index) => {
    const path = `/${pathnames.slice(0, index + 1).join("/")}`;
    return {
      name: pathnames[index],
      path,
    };
  });

  return (
    <nav>
      <ul className={styles.navUl}>
        <li className={styles.navLi}>
          <Link className={styles.navLink} to="/">
            Home
          </Link>
        </li>
        {breadcrumbs.map((breadcrumb) => (
          <React.Fragment key={breadcrumb.name}>
            <ChevronRightIcon style={{ width: "20px", height: "20px" }} />
            <li className={styles.navLi}>
              <Link className={styles.navLink} to={breadcrumb.path}>
                {getJapanese(breadcrumb.name as keyof typeof translateInfo)}
              </Link>
            </li>
          </React.Fragment>
        ))}
      </ul>
    </nav>
  );
}
