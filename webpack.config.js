const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    mode: 'development',// 指定开发者打包模式
    entry :path.resolve(__dirname,'./src/main.js') ,//入口文件
    output : {//输出文件
        filename : 'js/[name].js',//输出文件名
        path : path.resolve( __dirname,'dist')//输出文件路径
    },
    module : {
        rules: [
            {/*将js或者jsx文件转码成es5*/
                test: /\.jsx?$/,// 正则惰性匹配后缀名为js或者jsx的文件
                exclude: /node_modules/,//排除这个文件夹
                use: {
                    loader: 'babel-loader',
                    options: {
                      presets: ['@babel/preset-env']
                    }
                  }
            },
        ]
    },
}