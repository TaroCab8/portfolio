const path = require('path')
const CURRENT_WORKING_DIR = process.cwd()
const CopyPlugin = require("copy-webpack-plugin");

const config = {
    mode: "production",
    entry:"./index.js",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "main.js",
        publicPath:'/build/',
    },
    devServer:{
        static: ["./public"],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.(mp4|png|svg|jpg|gif|pdf)$/,
                use: [{
                    loader:"file-loader",
                    options: {
                        name: '[name].[ext]'
                    }
                }]
            }
        ]
    },
    plugins: [
        new CopyPlugin({
          patterns: [
            { from: "public/index.html", to: "build/" },
            ,
          ],
        }),
      ],

}

module.exports = config
