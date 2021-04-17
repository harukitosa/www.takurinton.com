import _ from 'highlight.js/lib/languages/*';
import marked from 'marked';
import { Heading } from '../../component/common/atoms/Heading'
import { HtmlHead } from '../../component/common/Head'
const css = require('../../styles/markdown/markdown.scss')
const { markdownStyle } = require('../../styles/markdown/dairyreport')

export const Me = (res: {wiki: string}) => {
  const r: marked.Renderer = markdownStyle()
  // const requireMarkdown = require("require-markdown")
  // const _wiki: string = require('../../../md/wiki.md');
  // console.log(_wiki)
  // const _wiki = requireMarkdown("../../../md/wiki.md"); 
  // マークダウンなぜか呼べなくてイライラしちゃった


  // const wiki = lang === 'en' ? wiki_en : wiki_ja; 

  const md: string = marked(res.wiki, {renderer: r})

  return (
    <div>
      <HtmlHead 
        title={`たくりんとん | about me`}
        description={`about me`}
        image={'https://www.takurinton.com/me.jpeg'}
        url={'https://takurinton.com'}
      />
      
      <div style={
        { 
          textAlign: 'center', 
          marginTop: '50px', 
        }}>
        <Heading text="me" />
      </div>
       <div className={css.main} dangerouslySetInnerHTML={{ __html: md }} />
    </div>
  )
}


Me.getInitialProps = async (context:any) => {
  const lang:string = context.asPath.split('?').length === 1 ? '' : context.asPath.split('?')[1].split('=')[1]
  const wiki:string = lang === 'en' ? wiki_en : wiki_ja
  return { wiki: wiki }
}

const wiki_ja = ` 
# 基本
- ### 名前: 片山 拓海
- ### HN: たくりんとん
- ### 生年月日: 1999年11月23日
- ### 所属: 金沢工業大学工学部情報工学科3年
- ### 2022年新卒でVOYAGE GROUPにエンジニアとして入社します

# 自己紹介
石川県で大学生をしています．たくりんとんといいます．親しい友人からは代謝と呼ばれることもあります．  
ソフトウェア全般に対して興味があり，特にWebのフロントエンド/サーバサイドに興味があります．  
最近では趣味で preactjs や vitejs のコードを読んだり，インターン先でPHPのコードを書いています．  
インフラの知識が皆無なのでこれから鍛えていきたいです．  
弱点は寒さとみぞおちです．優しくしてください．


# 経歴
- 2015年
  - 石川県 遊学館高等学校入学
  - 石川県高校駅伝優勝
  - 全国高校駅伝出場
- 2016年
  - 石川県高校駅伝優勝
  - 全国高校駅伝出場
- 2017年
  - [石川県高校駅伝優勝](https://mainichi.jp/articles/20171106/ddl/k17/050/232000c)
  - [石川県高校駅伝2区区間賞](https://mainichi.jp/articles/20171106/ddl/k17/050/232000c)
  - [北信越高校駅伝3位](https://mainichi.jp/articles/20171119/ddl/k17/050/167000c)
  - [全国高校駅伝出場](https://mainichi.jp/articles/20171222/ddl/k17/050/280000c)
- 2018年
  - 遊学館高等学校卒業
  - 金沢工業大学情報工学科入学
- 2019年
  - 石川県民体育大会1500m優勝
  - 野々市市スポーツ賞受賞
  - 手取川駅伝4区区間新記録
  - 河北潟駅伝1区区間新記録
- 2020年
  - 石川県元旦駅伝1区区間2位、3区区間賞、総合優勝(1人2回以上走ってはいけないらしいので失格になっちゃった)
  - 根上駅伝1区区間賞
  - VOYAGE GROUP内定
  - VOYAGE GROUP内定承諾
- 2021年
  - Vitejs 日本語翻訳チーム立ち上げ
  - Vue-jp Organization
- 2022年
  - 金沢工業大学卒業見込み

# 研究
ソーシャルメディアを用いた株式の傾向の予測を行います．株式の傾向は実際のレートの他に有識者などによるソーシャルメディアでの発信によって左右されることがあります．  
そこの関連性を引き出す研究を行います．

# 好き
- ランニング
- シーシャ
- 散歩
- 猫
- ビール
- カシスオレンジ
- お寿司
- チキン南蛮
- ラーメン
- 埼玉

# 嫌い 
- 辛いもの
- エディタ戦争
- 怖い人（居酒屋で騒ぐ人, ヤンキー, 不良, 高圧的な人など）
- 寒さ

# スキル(言語)
- C
- Python
- Go
- JavaScript
- html/css

# スキル(ツール、フレームワーク、ミドルウェア)
- Django
  - 簡単なサイト作成
  - APIサーバの開発
  - ORMを使いこなします
- gin 
  - シンプルなルーティング（エンドポイント）の作成
  - APIサーバの作成
  - ユーザーなどの認証の作成
- AWS
  - route53
  - S3
  - EC2
  - RDS
  - ELB
  - ALB
  - (Lambda)
- heroku
  - デプロイ
  - ポスグレの拡張の使用
- SQL
  - 簡単なレコードの作成
  - N+1問題とは切っても切れない（勉強中）
- 自作インタプリタ
  - Goで作るインタプリタを読んで作ってみた、楽しかったので拡張中

# わからんからこれからやりたい
- TypeScript
- Rust
- Docker
- k8s
- ECS
- webpack
- babel
- wasm
- モバイルアプリ開発
- 機械学習
- 深層学習
- インフラのスケーリングや最適化
- 自動化(開発者目線)
- フロントエンドのパフォーマンスチューニング
- 自前のSSR

# インターンシップ 
- **株式会社シスネクト**
  - 2020/02
  - システム開発
  - PHP, MySQL, 自社サーバ
- **株式会社D2C**
  - 2020/02
  - インターネット広告の開発
  - Flask/Python
- **株式会社VOYAGE GROUP**
  - 2020/08
  - チームでの開発
  - インプット、アウトプットの両方を行う1ヶ月のインターンシップ
  - preact/JavaScript, Go, AWS
  - [blog](https://www.takurinton.com/post/17)
- **株式会社サイバーエージェント**
  - 2020/09
  - 就業型インターン
  - Ameba広告のDSPのJSONの処理を高速化するタスク
  - Go
  - [blog](https://www.takurinton.com/post/18)
- **株式会社楽天**
  - 2020/09
  - 2週間のチーム開発
  - React/JavaScript, Django/Python
  - [blog](https://www.takurinton.com/post/19)
- **株式会社VOYAGE GROUP**
  - 2021/02 ~ 2021/06(予定)
  - 内定者インターン
- **株式会社プレイド**
  - 2021/07(予定) ~ ???
  - フロントエンドエンジニア

# サイト
- [ブログ](/)
- [日報](/dairyreport)
- [github](https://github.com/takurinton)
- [wantedly](https://www.wantedly.com/id/takurinton)
- [qiita](https://qiita.com/takurinton)
- [facebook](https://www.facebook.com/takurinton)
- [instagram](https://www.instagram.com/takurinton/)
`

  const wiki_en = `
# base
- name: Takumi Katayama
- nickname: takurinton
- birth: November 23, 1999
- belong: Kanazawa Institute of Technology computer science 3rd
- Worked at VOYAGE GROUP from 2022

# profile
I am a university student in Ishikawa prefecture. My name is Takurinton. It is sometimes called metabo1ism by core / close friends.  
I'm interested in software in general, especially the front end / server side of the Web.  
Recently, I read preactjs and vitejs code as a hobby, and write PHP code at the internship.  
I have no knowledge of infrastructure, so I would like to train from now on.  
Weaknesses are cold and epigastrium. Please be kind.  

# career
- 2015
  - Enter Yugakkan High School
  - Ishikawa High School Ekiden Winner
  - National High School Ekiden
- 2016
  - Ishikawa High School Ekiden Winner
  - National High School Ekiden
- 2017
  - [Ishikawa High School Ekiden Winner](https://mainichi.jp/articles/20171106/ddl/k17/050/232000c)
  - [Ishikawa High School Ekiden Winner 2nd ward section prize](https://mainichi.jp/articles/20171106/ddl/k17/050/232000c)
  - [Hokushinetsu High School Ekiden 3rd](https://mainichi.jp/articles/20171119/ddl/k17/050/167000c)
  - [National High School Ekiden](https://mainichi.jp/articles/20171222/ddl/k17/050/280000c)
- 2018
  - Graduated from Yugakkan High School
  - Enter Kanazawa Institute of Technology computer science
- 2019
  - Ishikawa Prefectural Athletic Meet 1500m Winner
  - Received the Nonoichi Sports Award
  - Tedorigawa Ekiden Winner 4nd ward section prize(Game Record)
  - Kahokugata Ekiden Winner 1st ward section prize(Game Record)
- 2020
  - New year Ekiden in Ishikawa Winner 3nd ward section prize and 2nd 2nd ward section prize
  - Neagari Ekiden Winner 1st ward section prize
  - Job offerd from VOYAGE GROUP
  - Acceptance of job offer VOYAGE GROUP
- 2021年
  - Vitejs build vitejs japanese translation team
  - Vue-jp Organization
- 2022
  - Scheduled to graduate from Kanazawa Institute of Technology computer science

# research
Predict stock trends using social media. In addition to the actual rate, the stock trend may be influenced by the transmission on social media by experts.
We will conduct research to bring out the relevance there.

# like
- running
- walking
- cat
- beer 
- cassis orange
- sushi
- chicken Nanban
- ramen noodle

# dislike 
- spicy food 
- spite

# skill(language)
- C
- Python
- Go
- JavaScript
- html/css

# skill(tools, framework, middleware)
- Django
  - dev non SPA site
  - dev API server
  - use ORM
- gin 
  - simple routing
  - dev API server
- AWS
  - route53
  - S3
  - EC2
  - RDS
  - ELB
  - ALB
  - (Lambda)
- heroku
  - deploy
  - Postgres
- SQL
  - simple record
  - N+1( ；∀；)
- handmade language
  - interpreter made of golang

# wanna do cuz I don't understand
- TypeScript
- Rust
- Docker
- k8s
- ECS
- webpack
- babel
- wasm
- mobile applcation dev
- machine learning
- deep learning
- Infrastructure scaling/best practice
- Automation(from developer's perspective)
- performance tuning of frontend
- Japanese(most defficult!!!)

# internship 
- **Sysnect Inc.**
  - 2020/02
  - Web backend developmend
  - PHP, MySQL, On premises server
- **D2C Inc.**
  - 2020/02
  - Ad technology
  - Flask/Python
- **VOYAGE GROUP Inc.**
  - 2020/08
  - Team development
  - preact/JavaScript, Go, AWS
  - [blog](https://www.takurinton.com/post/17)
- **CyberAgent Inc.**
  - 2020/09
  - Employment type
  - Ad technology of Ameba
  - Go
  - [blog](https://www.takurinton.com/post/18)
- **Rakuten Inc.**
  - 2020/09
  - Team development
  - React/JavaScript, Django/Python
  - [blog](https://www.takurinton.com/post/19)
- **VOYAGE GROUP Inc.**
  - 2021/02 ~ 2021/06(plans)
  - Intern as an informal candidate
- **VOYAGE GROUP Inc.**
  - 2021/07(plans) ~ ???
  - Frontend developer


# site
- [portfolio](https://www.takurinton.com/profile)
- [blog](https://www.takurinton.com)
- [daily report](https://www.takurinton.com/dairyreport)
- [github](https://github.com/takurinton)
- [wantedly](https://www.wantedly.com/id/takurinton)
- [qiita](https://qiita.com/takurinton)
- [facebook](https://www.facebook.com/takurinton)
- [instagram](https://www.instagram.com/takurinton/)
`

export default Me
