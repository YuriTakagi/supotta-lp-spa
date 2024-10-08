import { Link } from "@remix-run/react";
import HeaderIcons from "../Icon/HeaderIcons";
import HamburgerMenu from "./HamburgerMenu";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.navtextContainer}>
        <HeaderIcons />
      </div>
      <div className={styles.headerLink}>
        <div className={styles.spHeader}>
          <HamburgerMenu />
        </div>
        <div className={styles.pcHeader}>
          <Link to="/" prefetch="intent">
            HOME
          </Link>
          <Link to="/products/" prefetch="intent">
            商品一覧
          </Link>
          <Link to="https://www.loadoff.jp/" target="_blank" prefetch="intent">
            会社HP
          </Link>
        </div>
      </div>
    </header>
  );
}
