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
- styles/
  - スタイルを入れている
  - theme.scssではカラーテーマやフォントサイズなどの共通の設定をしている
  - 青とピンクをベースカラーとして選定
  - あとは基本的に白と黒
- hooks/
  - useComment.ts
    - コメント投稿のpost requestを投げるためのフック
    - 状態管理がメイン
  - useContact.ts
    - お問い合わせ投稿のpost requestを投げるためのフック
    - 状態管理がメイン
- function/
  - api/
    - comment/
      - post.ts
        - コメントを投げる
    - contact/
      - post.ts
        - お問い合わせを投稿する
  - speech/
    - morphemeDissected.ts
      - kuromoji.jsにて形態素解析をする実装
      - recognition.tsで拾った音声を元に行う
      - ブログの音声検索機能を行うため
      - バックエンドで実装すると処理が重かったりする
      - Frontend Studyでフロントエンドの守備範囲が今後増えると聞いたので、それを実際に体験してみようということで少しアウトプットを兼ねて実装してみた
      - まだまだ準備段階なのでもっと洗練していきたい
      - 研究ではNLPをやる予定なのでその練習？
    - recognition.ts
      - ブラウザから音声を拾って文字起こしをするための処理
      - これChromeとedgeでしか使えないけど面白い機能
- component/
  - blog/
  - contact/
  - main/
  - dairyreport/
  - profile/
    - それぞれのページのパーツが入っている
  - common/
    - Head.tsx
      - htmlのheadの部分を同的に変更するための実装
      - 引数をわたし適宜呼び出す
      - 特にブログや日報で使用している
    - Character/
      - Pien.tsx
        - みんな大好きぴえんをCSSで書いてる
        - 404ページで実装してる
      - Gopher.tsx
        - トップページのGopherを書いてる
        - 可愛いね
    - atoms/
      - Heading.tsx
        - 見出しテキストのコンポーネント
      - Title.tsx
        - タイトルテキストのコンポーネント
      - Submit.tsx
        - Submitボタンのコンポーネント
      - PageButton.tsx
        - ページネーションのボタンのコンポーネント
    - layout/
      - Layout.tsx
        - 共通部分の実装
        - _app.tsxで呼び出している
        - ヘッダーを呼び出している
    - parts/
      - Header.tsx
        - ヘッダーのコンポーネント
        - いい感じだねこれ
      - Pagination.tsx
        - ページネーションの部分のコンポーネント
        - 次ページがなかったら表示しないようにしてる
        - ここ可愛くて好き

## 使用方法
```bash
git clone https://github.com/takurinton/portfolio
cd portfolio
npm i
npm run dev
```