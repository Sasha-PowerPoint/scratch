const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry  : './index.js',
    output : {
        path       : path.join(__dirname, '/public/static'),
        filename   : 'bundle.js',
        publicPath : '/static/'
    },
    module : {
        rules : [
            {
                test    : /\.js$/,
                exclude : /node_modules/,
                use     : {
                    loader : 'babel-loader'
                }
            },
            {
                test : /\.less$/,
                use  : [ 'style-loader', 'css-loader', 'less-loader' ]
            },
            {
                test : /\.(png|jpe?g|gif)$/i,
                use  : [
                    {
                        loader : 'file-loader'
                    }
                ]
            }
        ]
    },
    devServer : {
        contentBase        : path.join(__dirname, 'public'),
        publicPath         : '/static/',
        hot                : true,
        port               : 3000,
        historyApiFallback : true
    },
    plugins : [
        new webpack.HotModuleReplacementPlugin()
    ]
};
