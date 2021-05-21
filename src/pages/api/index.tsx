const getRSS = () => {
    return fetch('https://api.takurinton.com/blog/v1/rss')
    .then(res => {
        return res.json()
        .then(json => {    
            // content.contents.slice は邪悪なので早くサーバサイドを書き換えなさい。
            const response = `<?xml version="1.0" encoding="UTF-8"?>
            <rss version='2.0'  xmlns:atom="http://www.w3.org/2005/Atom">
            <channel>
            <atom:link href="https://www.takurinton.com/api" rel="self" type="application/rss+xml" />
            <title>たくりんとん</title>
            <link>https://www.takurinton.com</link>
            <description>たくりんとんのポートフォリオです</description>
            <language>en</language>
            <managingEditor>takurinton@takurinton.com (takurinton)</managingEditor>
            <webMaster>takurinton@takurinton.com (takurinton)</webMaster>
            <image>
                <url>https://www.takurinton.com/me.jpeg</url>
                <title>たくりんとん</title>
                <link>https://www.takurinton.com</link>
                <width>32</width>
                <height>32</height>
            </image>
            ${json.map((content => {
                  return `
                <item>
                <title>${content.title} | たくりんとんのブログ</title>
                <link>https://www.takurinton.com/post/${content.id}</link>
                <description>${content.contents.slice(0,300)}</description>
                <guid>https://www.takurinton.com/post/${content.id}</guid>
                </item>
                    `;
                }
              ))
              .join("")}
            </channel>
            </rss>
          `;
          return response;
        })
    })
}

export default function handler(req, res) {
    // try {
    //     getRSS()
    //       .then((xml) => {
    //         res.status(200);
    //         res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate'); // 24時間のキャッシュ
    //         res.setHeader('Content-Type', 'text/xml;charset=UTF-8');
    //         res.end(xml);
    //       })
    //       .catch((e) => {
    //         throw console.error(e);
    //       });
    //   } catch (e) {
    res.status(500).send("internal server error");
      // }
}