const path = require('path');

module.exports = {
    mode: 'development',

    /*入口*/
    entry: [
        path.resolve(__dirname, 'src/index.js')
    ],
    
    /*输出到dist文件夹，输出文件名字为bundle.js*/
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },

    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader?cacheDirectory=true'],
            include: path.join(__dirname, 'src')
        }, {
            test: /\.css$/,
            use: [
                'style-loader',
                {
                    loader: 'css-loader' 
                }
            ]
        }]
    },

    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
    }
};