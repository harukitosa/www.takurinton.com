import _ from 'highlight.js/lib/languages/*';
import marked from 'marked';
import { Heading } from '../../component/common/atoms/Heading'
import { HtmlHead } from '../../component/common/Head'
const css = require('../../styles/markdown/wiki.scss')
const { markdownStyle } = require('../../styles/markdown/dairyreport')

export const Wiki = (res: {wiki: string}) => {
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
        title={`たくりんとん | wiki`}
        description={`wikiなのじゃ`}
        image={'https://www.takurinton.com/me.jpeg'}
        url={'https://takurinton.com'}
      />
      
      <div style={
        { 
          textAlign: 'center', 
          marginTop: '50px', 
        }}>
        <Heading text="wiki" />
      </div>
       <div className={css.main} dangerouslySetInnerHTML={{ __html: md }} />
    </div>
  )
}


Wiki.getInitialProps = async (context:any) => {
  const lang:string = context.asPath.split('?').length === 1 ? '' : context.asPath.split('?')[1].split('=')[1]
  const wiki:string = lang === 'en' ? wiki_en : wiki_ja
  return { wiki: wiki }
}

const wiki_ja = ` 
# 基本
- 名前: 片山 拓海
- HN: たくりんとん
- 生年月日: 1999年11月23日
- 所属: 金沢工業大学工学部情報工学科3年
- 就職先: 2022年新卒でVOYAGE GROUPにエンジニアとして入社します

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
- 2022年
  - 金沢工業大学卒業見込み

# 研究
- 明確に定まっているわけではありませんが、ソーシャルメディアを用いた株式の推移の予測を行う予定です。

# 好き
- ランニング
- 散歩
- 猫
- ビール
- カシスオレンジ
- お寿司
- チキン南蛮
- ラーメン

# 嫌い 
- 辛いもの
- いじわる

# スキル(言語)
- C
- Python
- Go
- JavaScript
- html/css

# スキル(ツール、フレームワーク、ミドルウェア)
- Django
- gin 
- AWS
- heroku
- SQL
- 自作インタプリタ

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
- 日本語(これが一番難しい!!!)



# インターンシップ 
- **株式会社シスネクト**
  - 2020/2
  - システム開発
  - PHP, MySQL, 自社サーバ
- **株式会社D2C**
  - 2020/2
  - インターネット広告の開発
  - Flask/Python
- **株式会社VOYAGE GROUP**
  - 2020/8
  - チームでの開発
  - インプット、アウトプットの両方を行う1ヶ月のインターンシップ
  - preact/JavaScript, Go, AWS
  - [blog](https://www.takurinton.com/post/17)
- **株式会社サイバーエージェント**
  - 2020/9
  - 就業型インターン
  - Ameba広告のDSPのJSONの処理を高速化するタスク
  - Go
  - [blog](https://www.takurinton.com/post/18)
- **株式会社楽天**
  - 2020/9
  - 2週間のチーム開発
  - React/JavaScript, Django/Python
  - [blog](https://www.takurinton.com/post/19)

# サイト
- [ポートフォリオ](https://www.takurinton.com/profile)
- [ブログ](https://www.takurinton.com)
- [日報](https://www.takurinton.com/dairyreport)
- [github](https://github.com/takurinton)
- [wantedly](https://www.wantedly.com/id/takurinton)
- [qiita](https://qiita.com/takurinton)
- [facebook](https://www.facebook.com/takurinton)
- [instagram](https://www.instagram.com/___katayama___/)
`

  const wiki_en = `
# base
- name: Takumi Katayama
- nickname: takurinton
- birth: November 23, 1999
- belong: Kanazawa Institute of Technology computer science 3rd
- will works at: VOYAGE GROUP Inc. from 2022 

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
- 2022
  - Scheduled to graduate from Kanazawa Institute of Technology computer science

# research
- Maybe I plan to use social media to predict stock trends.

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
- gin 
- AWS
- heroku
- SQL
- handmade language

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
  - 2020/2
  - Web backend developmend
  - PHP, MySQL, On premises server
- **D2C Inc.**
  - 2020/2
  - Ad technology
  - Flask/Python
- **VOYAGE GROUP Inc.**
  - 2020/8
  - Team development
  - preact/JavaScript, Go, AWS
  - [blog](https://www.takurinton.com/post/17)
- **CyberAgent Inc.**
  - 2020/9
  - Employment type
  - Ad technology of Ameba
  - Go
  - [blog](https://www.takurinton.com/post/18)
- **Rakuten Inc.**
  - 2020/9
  - Team development
  - React/JavaScript, Django/Python
  - [blog](https://www.takurinton.com/post/19)


# site
- [portfolio](https://www.takurinton.com/profile)
- [blog](https://www.takurinton.com)
- [daily report](https://www.takurinton.com/dairyreport)
- [github](https://github.com/takurinton)
- [wantedly](https://www.wantedly.com/id/takurinton)
- [qiita](https://qiita.com/takurinton)
- [facebook](https://www.facebook.com/takurinton)
- [instagram](https://www.instagram.com/___katayama___/)
`


export default Wiki