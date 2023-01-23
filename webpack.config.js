const path = require('path')

module.exports={
    mode:"development",
    entry:"./index.js",
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
        extensions: ['.js','.jsx','.json']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.(|jpg|png)(\?[\s\S]+)?$/,
                use: "file-loader"
            }
        ]
    },
}

