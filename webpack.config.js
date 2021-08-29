const path = require('path');
const nodeExternals = require('webpack-node-externals');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
    resolve: { 
        extensions: ['.js',] 
    },
    entry: {
        'packages/Sedax': './app/servidor',
        'client_packages': './app/cliente',
    },
    output: {
        path: path.resolve(__dirname),
        filename: '[name]/index.js'
    },
    target: 'node',
    externals: [nodeExternals()],
    plugins: [
        new CopyWebpackPlugin([
            { from: 'app/cliente/Vistas', to: 'client_packages/Vistas' }
        ])
    ]
};