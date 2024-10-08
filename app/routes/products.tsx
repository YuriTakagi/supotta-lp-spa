import type { MetaFunction } from "@remix-run/node";
import styles from "./_products.module.css";

export const meta: MetaFunction = () => {
  return [
    { title: "製品一覧" },
    { name: "description", content: "supottaの製品一覧ページ" },
  ];
};

export default function Products() {
  return (
    <main>
      <h1 className={styles.title}>製品一覧</h1>
    </main>
  );
}
