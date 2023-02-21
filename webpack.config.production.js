const path = require('path')
const CURRENT_WORKING_DIR = process.cwd()

const config = {
    mode: "production",
    entry: [
        path.join(CURRENT_WORKING_DIR, 'index.js')
    ],
    output:{
        path: path.join(CURRENT_WORKING_DIR, "/public"),
        filename: "main.js",
        publicPath: "/"
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
                test: /\.(png|svg|jpg|gif|pdf)$/,
                use: [{
                    loader:"file-loader",
                    options: {
                        name: '[name].[ext]'
                    }
                }]
            }
        ]
    }

}

module.exports = config
