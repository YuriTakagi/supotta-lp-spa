import { useState } from 'react';
import HeaderIcons from '../Icon/HeaderIcons';
import HamburgerMenu from './HamburgerMenu';
import styles from './Header.module.css'

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
          <a href="/index.html">HOME</a>
          <a href="/products/index2.html">商品一覧</a>
          <a href="https://www.loadoff.jp/">会社HP</a>
        </div>
      </div>
    </header>
);
}
