# ポートフォリオ

わいわい  

![](https://github.com/takurinton/portfolio/blob/master/images/lightouse.png)

## 前提
初めてNextを使ったので至らない点がたくさんある。  
もっと勉強してリファクタリングしていく。

## 使用技術
- Next.js
- Sass
- vercel
- Route53

## 構成
- 全体で共通
  - getInitialPropsでSSR 
  - pages/の下でルーティング
  - ページ以外の部分はcomponentに全ておいて適宜呼び出し
- pages/
  - index.tsx 
    - メインページ
    - ブログの最新5件の投稿を表示
  - _app.tsx
    - 共通部分の実装
    - いい感じに囲ってあげてる
  - _document.tsx
    - これも共通部分を実装してる
  - dairyreport/
    - index.tsx
      - 日報の一覧を表示
    - post/
      - [id].tsx
        - idが一致する投稿を表示
  - post/ 
    - [id].tsx
      - ブログの投稿詳細
      - idが一致する投稿を表示
  - profile/
    - 自分のプロフィールのページ
- props/
  - props.ts
    - 共通のinterfaceを全て入れてここから適宜呼び出している