const withSass = require('@zeit/next-sass');
const marked = require('marked');
const renderer = new marked.Renderer();
const withPlugins = require('next-compose-plugins');

// これ効いてなさそう
// https://mdxjs.com/getting-started/next
// これ参考にしてるんだけどうまくいかない
// const withMDX = require('@next/mdx')({
//   extension: /\.mdx?$/,
//   options: {
//     remarkPlugins: [],
//     rehypePlugins: []
//   }
// })

const sassConfig = (
  withSass({cssModules: true})
)

// MODULE_NOT_FOUNDになる、なんで？
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      loader: 'frontmatter-markdown-loader',
      options: { 
        mode: ['react-component'] 
      }, 
    })
    return config
  }
}

// ready - started server on http://localhost:3000
// Error: options/query provided without loader (use loader + options) in {
//   "test": {},
//   "use": "frontmatter-markdown-loader",
//   "options": {
//     "mode": [
//       "react-component"
//     ]
//   }
// }

// module.exports = withPlugins([
//   // withMDX({
//   //   pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'], 
//   // }), 
//   // withSass({cssModules: true})
//   [withSass, {
//     cssModules: true
//   }], 
//    nextConfig
// ])


module.exports = withPlugins([
  [sassConfig], 
  // nextConfig  // これあったらMODULE_NOT_FOUND、なかったら動くけどmarkdownが読み込まれない
])

// module.exports = [
//   withSass({cssModules: true}), 
//   {
//     webpack: (config) => {
//       config.module.rules.push({
//         test: /\.md$/,
//         use: 'raw-loader'
//         // loader: 'frontmatter-markdown-loader',
//         // options: { 
//         //   mode: ['react-component'] 
//         // }, 
//       })
//       return config
//     }
//   }
// ]
