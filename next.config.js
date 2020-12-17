const withSass = require('@zeit/next-sass')
const withPlugins = require('next-compose-plugins')

module.exports = withSass({cssModules: true})

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

// MODULE_NOT_FOUNDになる、なんで？
// const nextConfig = {
//   webpack: config => {
//     config.module.rules.push({
//       test: /\.mdx$/,
//       use: 'raw-loader',
//     })
//     return config
//   },
// };

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