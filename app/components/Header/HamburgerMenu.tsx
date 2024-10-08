import { Link } from "@remix-run/react";
import styles from "app/components/Header/HamburgerMenu.module.css";
import { useState } from "react";
import HamburgerMenuIcon from "../Icon/HamburgerMenuIcon";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      {/* Hamburger Menu Button */}
      <button
        className={styles.iconContainer}
        type="button"
        onClick={() => toggleMenu()}
      >
        <HamburgerMenuIcon />
      </button>
      {/* Menu */}
      <ul className={isOpen ? styles.menuBtnChecked : styles.menu}>
        <li>
          <Link to="/" prefetch="viewport">
            HOME
          </Link>
        </li>
        <li>
          <Link to="/products/" prefetch="viewport">
            商品一覧
          </Link>
        </li>
        <li>
          <Link
            to="https://www.loadoff.jp/"
            target="_blank"
            prefetch="viewport"
          >
            会社HP
          </Link>
        </li>
      </ul>
    </>
  );
}
