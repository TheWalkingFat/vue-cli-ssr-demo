const webpack = require("webpack");
const merge = require("webpack-merge");
const base = require("./webpack.base.conf");
//  手动安装
//  在服务端渲染中，所需要的文件都是使用require引入，不需要把node_modules文件打包
const webapckNodeExternals = require("webpack-node-externals");


const vueSSRServerPlugin = require("vue-server-renderer/server-plugin");

module.exports = merge(base,{
    //  告知webpack，需要在node端运行
    target:"node",
    entry:"./src/entry-server.js",
    devtool:"source-map",
    output:{
        filename:'server-buldle.js',
        libraryTarget: "commonjs2"
    },
    externals:[
        webapckNodeExternals()
    ],
    plugins:[
        new webpack.DefinePlugin({
            'process.env.NODE_ENV':'"development"',
            'process.ent.VUE_ENV': '"server"'
        }),
        new vueSSRServerPlugin()
    ]
});