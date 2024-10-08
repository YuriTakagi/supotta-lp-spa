import type { MetaFunction } from "@remix-run/node";
import styles from "./_product.module.css";

export const meta: MetaFunction = () => {
  return [
    { title: "製品詳細" },
    { name: "description", content: "supottaの製品詳細ページ" },
  ];
};

export default function Product() {
  return (
    <main>
      <h1 className={styles.title}>製品詳細</h1>
    </main>
  );
}
