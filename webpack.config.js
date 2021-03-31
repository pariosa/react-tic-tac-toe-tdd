const path = require("path"); 
module.exports = {  
    devtool: false,
    resolve: {
        extensions: [".jsx", ".js"],
    }, 
    devServer: {
        publicPath: "/",
        contentBase: "./dist",
        hot: true
    },
    entry: {
        main: path.resolve(__dirname, './src/app.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
    module: {
        rules: [
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
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "fonts/[name].[ext]",
                    },
                },
            },
            {
                test: /\.(jpe?g|png|gif|svg|ico)$/i,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            outputPath: "assets/"
                        }
                    }
                ]
            }
        ]
    },
    plugins: [ 

    ] 
};