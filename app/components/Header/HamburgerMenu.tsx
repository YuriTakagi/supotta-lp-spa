import { useState } from "react";
import styles from "app/components/Header/HamburgerMenu.module.css";
import HamburgerMenuIcon from "../Icon/HamburgerMenuIcon";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      {/* Hamburger Menu Button */}
      <button className={styles.iconContainer} type="button" onClick={() => console.log("動いとる？")}>
        <HamburgerMenuIcon />
      </button>
      {/* Menu */}
      <ul className={`${styles.menu} ${isOpen ? styles.menuBtnChecked : ""}`}>
        <li>
          <a href="/index.html">HOME</a>
        </li>
        <li>
          <a href="/products/index2.html">商品一覧</a>
        </li>
        <li>
          <a href="https://www.loadoff.jp/">会社HP</a>
        </li>
      </ul>
    </div>
  );
}
