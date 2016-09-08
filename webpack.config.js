var webpack = require("webpack");
var path = require("path");

var devpath = path.resolve(__dirname, "dev");
var outpath = path.resolve(__dirname, "output");

var config = {
    entry: devpath + "/index.jsx",
    output: {
        path: outpath,
        filename: "compiledCode.js"
    },
    module: {
        loaders: [{
            include: devpath,
            loader: "babel"
        }]
    }
};