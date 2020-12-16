const withSass = require('@zeit/next-sass')
const withPlugins = require('next-compose-plugins')

const withMDX = require('@next/mdx')({
    extension: /\.(md|mdx)$/
})

module.exports = withPlugins([
    withMDX,
    withSass({cssModules: true})
])