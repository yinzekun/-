module.exports = {
    // configureWebpack: config => {
    //     require('vux-loader').merge(config, {
    //         options: {},
    //         plugins: ['vux-ui']
    //     })
    // },
    css: undefined,
    outputDir: undefined,
    assetsDir: undefined,
    runtimeCompiler: true, //包含运行时编译器的 Vue 构建版本
    productionSourceMap: false,
    parallel: undefined,
    lintOnSave: true,
    devServer: {
        proxy: {
            '/api': {
                target: 'https://ware.leziedu.com/',   //代理接口
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''    //代理的路径
                }
            }
        }
    }
}
