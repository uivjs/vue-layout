const path = require(`path`);
const pkg = require('./package.json');

module.exports = {
  productionSourceMap: true,
  publicPath: '/vue-layout/',
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Vue Layout, Handling the overall layout of a page.',
      description: pkg.description,
      keywordss: pkg.keywords.join(','),
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      // chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    // 当使用只有入口的字符串格式时，
    // 模板会被推导为 `public/subpage.html`
    // 并且如果找不到的话，就回退到 `public/index.html`。
    // 输出文件名会被推导为 `subpage.html`。
    // subpage: 'src/subpage/main.js'
  },
  configureWebpack: {
    resolve: {
      symlinks: false,
      alias: {
        vue: path.resolve(`./node_modules/vue`),
        'vue-router': path.resolve(`./node_modules/vue-router`),
      },
    },
  },
  chainWebpack: (conf) => {
    conf.module.rule('text').test(/\.md$/i).use('raw-loader').loader('raw-loader').end();
    // conf.when(process.env.NODE_ENV !== 'development', (config) => {
    //   config.optimization.splitChunks({
    //     chunks: 'all',
    //     cacheGroups: {
    //       hastutilselect: {
    //         name: 'vendors-hast-util',
    //         chunks: 'initial',
    //         test: /[\\/]node_modules[\\/]hast-util-(.*)[\\/]/,
    //         priority: -3,
    //       },
    //     },
    //   });
    //   // https://webpack.js.org/configuration/optimization/#optimizationruntimechunk
    //   config.optimization.runtimeChunk('single');
    // });
  },
};
