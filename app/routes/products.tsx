import type { MetaFunction } from "@remix-run/node";
import SupottaBlackIcon from "../components/Icon/SupottaBlackIcon";
import styles from "./products.module.css";

export const meta: MetaFunction = () => {
  return [
    { title: "製品一覧" },
    { name: "description", content: "supottaの製品一覧ページ" },
  ];
};

export default function Products() {
  return (
    <main>
      <div className={styles.supottaBlack}>
        <div className={styles.supottaBlackIcon}>
          <SupottaBlackIcon style={{ width: "100%", height: "auto" }} />
          <span className={styles.supottaBlackKatafana}>(サポッタ)</span>
        </div>
        <div className={styles.supottaBlackGoodPoint}>
          栽培環境の管理を簡単に栽培データ管理/分析ツール
        </div>
        <ul className={styles.supottaBlackList}>
          <li>置くだけカンタン設置</li>
          <li>低コスト・小規模からはじめる</li>
          <li>計測データはクラウド一元管理</li>
        </ul>
      </div>
    </main>
  );
}
