import type { MetaFunction } from "@remix-run/node";
import styles from "./_index.module.css";

export const meta: MetaFunction = () => {
  return [
    { title: "トップ" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <main>
      <h1 className={styles.title}>トップ</h1>
    </main>
  );
}
