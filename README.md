# React テンプレート

もっくんが個人開発でよく使うライブラリ等を詰め込んだリポジトリです。

## 入っているもの

### ライブラリ
- vite
  - 爆速ビルド
- turbo
  - 爆速タスク実行
- react
- react-router
- typescript
- mantine
  - 最近個人的に流行ってるUIコンポーネント
- sass
- biome
  - linter formatter どっちも使える優秀なヤツ
- cspell
- lefthook
  - commit時に biome spellcheck tsc を動かしてます
### 便利ツール
- github actions
  - biomeとtscをciで動かしてます
- renovate
  - ライブラリにアップデートがあれば、自動的にPRを作成してくれるヤツ
### 推しポイント
- 絶対パスでインポート
  - @ で srcを起点にインポートできる
  - 相対インポート地獄にならなくて良き
- renovate
  - いちいちアップデートを調べる必要が無いのは神
- lefthook 
  - huskyより爆速でcommit時にチェックしてくれるの助かる

## インストール

1. リポジトリをクローン:
   ```bash
   git clone https://github.com/mokkun55/react-templete.git
   ```
2. プロジェクトディレクトリに移動:
   ```bash
   cd react-template
   ```
3. pnpm を使用して依存関係をインストール:
   ```bash
   pnpm install
   ```
4. lefthookの設定
   ```bash
   lefthook install
   ```

##  開発🎉
   ```bash
   pnpm dev
   ```
