import styles from "app/components/Icon/HeaderIcons.module.css";

import iconWhite from "app/images/icon_white.svg";
import supottaWhite from "app/images/supotta_white.svg";

export default function HeaderIcons() {
  return (
    <div className={styles.icon}>
      <img className={styles.iconIcon} src={iconWhite} alt="supottaアイコン" />
      <img
        className={styles.iconText}
        src={supottaWhite}
        alt="supotta文字アイコン"
      />
    </div>
  );
}
