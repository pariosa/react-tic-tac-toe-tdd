const webpack = require('webpack');

module.exports= {
    mode:'development',
    entry: './src/app.js',
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader','resolve-url-loader']
            },
            {
                test:/\.scss$/,
                use:[{
                    loader:'style-loader',
                },{
                    loader:'css-loader',
                },{
                    loader:'sass-loader',
                }],
            },

        ]
    },
    resolve:{
        extensions: ['*','.js','.jsx']
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer:{
        contentBase: './dist',
        hot: true
    }
}