# templates/spa

This template leverages [Remix SPA Mode](https://remix.run/docs/en/main/guides/spa-mode) to build your app as a Single-Page Application using [Client Data](https://remix.run/docs/en/main/guides/client-data) for all of your data loads and mutations.

## Setup

```shellscript
npx create-remix@latest --template remix-run/remix/templates/spa
```

## Development

You can develop your SPA app just like you would a normal Remix app, via:

```shellscript
npm run dev
```

## Production

When you are ready to build a production version of your app, `npm run build` will generate your assets and an `index.html` for the SPA.

```shellscript
npm run build
```

### Preview

You can preview the build locally with [vite preview](https://vitejs.dev/guide/cli#vite-preview) to serve all routes via the single `index.html` file:

```shellscript
npm run preview
```

> [!IMPORTANT]
>
> `vite preview` is not designed for use as a production server

### Deployment

You can then serve your app from any HTTP server of your choosing. The server should be configured to serve multiple paths from a single root `/index.html` file (commonly called "SPA fallback"). Other steps may be required if the server doesn't directly support this functionality.

For a simple example, you could use [sirv-cli](https://www.npmjs.com/package/sirv-cli):

```shellscript
npx sirv-cli build/client/ --single
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever css framework you prefer. See the [Vite docs on css](https://vitejs.dev/guide/features.html#css) for more information.

## Memo

```
project-root/
├── app/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── ...
│   ├── hooks/
│   │   ├── useStrapi.ts
│   │   └── ...
│   ├── routes/
│   │   ├── _index.tsx
│   │   ├── products.tsx
|   |   |-- products.$id.tsx
|   |   |-- contact.tsx
│   │   └── ...
│   ├── styles/
│   │   ├── global.css
│   │   └── reset.css
│   ├── types/
│   │   ├── strapi.d.ts
│   │   └── ...
│   ├── utils/
│   │   ├── api.ts
│   │   └── ...
│   ├── entry.client.tsx
│   └── root.tsx
├── public/
│   ├── favicon.ico
│   └── ...
├── server.js
├── vite.config.js
├── package.json
└── tsconfig.json
```

説明：

1. app/: Remixアプリケーションのメインディレクトリ
   - components/: 再利用可能なReactコンポーネント
   - hooks/: カスタムReactフック（Strapiデータフェッチ用のフックなど）
   - routes/: Remixのルート（ページコンポーネント）
   - styles/: グローバルスタイルとリセットCSS
   - types/: TypeScript型定義（Strapiのレスポンス型など）
   - utils/: ユーティリティ関数（APIリクエスト、データ整形など）
   - entry.client.tsx: クライアントサイドエントリーポイント
   - root.tsx: アプリケーションのルートコンポーネント

2. public/: 静的アセット用ディレクトリ

3. server.js: カスタムサーバー設定（必要な場合）

4. vite.config.ts: Vite設定ファイル（SPAモードの設定を含む）

5. package.json: プロジェクトの依存関係とスクリプト

6. tsconfig.json: TypeScript設定ファイル

注意点：
- Strapiとの連携は主にhooks/useStrapi.tsとutils/api.tsで行います。
- CSS ModulesはRemixで自動的にサポートされるため、[コンポーネント名].module.cssファイル(例：Header.module.css)を作成し、対応するコンポーネントでインポートするだけです。

## How to develop
1. developブランチを最新にする
```
git switch develop
git pull origin develop
```
2. developブランチからfeature/#[issue番号]ブランチを作成する
```
git switch develop
git switch -c feature/#1
```
3. リントチェック(エラーが出たら修正)
```
npm run format
npm run lint
npm run check
```
4. 作業内容をコミット・プッシュ
```
git add ファイル名
git commit -m "コミットメッセージ"
```
5. developブランチに対してプルリクエストを作成
6. 問題なければマージ
