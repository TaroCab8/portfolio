const path = require('path')

module.exports={
    mode:"development",
    entry:"./index.js",
    devtool: "inline-source-map",
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "main.js",
        publicPath:'/',
    },
    target:"web",
    devServer:{
        port: "3000",
        static: ["./public"],
        open: false,
        hot: true,
        liveReload: true,
        historyApiFallback: true,
    },
    resolve: {
        extensions: ['.js','.jsx','.json'],
        fallback: {
            "url": false,
            "buffer": false,
            "net": false,
            "tls": false,
            "assert": false,
            "os": false,
            "crypto": false,
            "https": false,
            "querystring": false,
            "fs": false,
            "stream": false,
            "dns": false,
            "vm": false,
            "http": false,
            "zlib":false,
            "async_hooks": false,
            "child_process": false

        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                //test: /\.(|gif|jpg|png)(\?[\s\S]+)?$/,
                test: /\.(png|svg|jpg|gif|pdf)$/,
                use: [{
                    loader:'file-loader',
                    options: {
                        name: '[name].[ext]'
                    }
                }]
            }
        ]
    },
    
}

