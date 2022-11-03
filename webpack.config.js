const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
	entry: "./src/index.tsx",
	output: {
		//filename: 'main.js',
		filename: "[name][contenthash].js",
		path: path.resolve(__dirname, "dist"),
		clean: true,
	},
	devServer: {
		static: {
			directory: path.resolve(__dirname, "dist"),
		},
		port: 3000,
		open: true,
		hot: true,
		compress: true,
		historyApiFallback: true,
	},
	devtool: "source-map",
	plugins: [
		new HtmlWebpackPlugin({
			title: "Christopher Noel Goldsmith",
			filename: "index.html",
			template: "public/index.html",
		}),
	],
	devtool: "inline-source-map",
	module: {
		rules: [
			{
				test: /\.scss$/i,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset/resource",
			},
			{
				test: /\.ts$/,
				use: "ts-loader",
				exclude: /node-modules/,
			},
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env", "@babel/preset-react"],
					},
				},
			},
			{
				test: /\.tsx?$/,
				loader: "babel-loader",
			},
		],
	},
	resolve: {
		extensions: [".ts", ".js", ".tsx", "jsx"],
	},
};
