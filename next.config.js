const withSass = require('@zeit/next-sass')
const withPlugins = require('next-compose-plugins')

// これ効いてなさそう
const withMDX = require('@next/mdx')({
    extension: /\.md$/
})

module.exports = withPlugins([
    withMDX,
    withSass({cssModules: true})
])