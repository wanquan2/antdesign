const CracoLessPlugin = require('craco-less');

module.exports = {
    hot:true,
    plugins: [
        {
            plugin: CracoLessPlugin,
                options: {
                    lessLoaderOptions: { //antd全局样式更改 
                    lessOptions: {
                        modifyVars: { '@primary-color': '#1DA57A' },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
    //配置代理
    // devServer: {
    //     proxy: {
    //     "/api": {
    //         target: 'http://XXXXXXXX:8888',
    //         changeOrigin: true,
    //         pathRewrite: {
    //         "^/api": ""
    //         }
    //     }
    //     }
    // }
};