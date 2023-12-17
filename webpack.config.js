const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const { dependencies } = require("./package.json");
const webpack = require("webpack");
const { DefinePlugin } = webpack;

module.exports = {
  entry: "./src/entry",
  mode: "development",
  devServer: {
    port: 3020, // Modificar
    historyApiFallback: true, // Esto hace que redirija siempre al index.html
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react",
                "@babel/preset-typescript",
              ],
            },
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      name: "mf_panel", // Modificar
      filename: "remoteEntry.js",
      exposes: {
        "./Creacion": "./src/pages/Creacion",
        "./EnReunion": "./src/pages/EnReunion",
        "./PostReunion": "./src/pages/PostReunion",
        "./PreReunion": "./src/pages/PreReunion",
        "./Panel": "./src/pages/Panel",
      },
      shared: {
        ...dependencies,
        react: {
          singleton: true,
          requiredVersion: dependencies["react"],
        },
        "react-dom": {
          singleton: true,
          requiredVersion: dependencies["react-dom"],
        },
      },
    }),
    new webpack.DefinePlugin({
      "process.env.backend_url": JSON.stringify("http://172.111.10.181/api/"),
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
  },
  target: "web",
};

// Solo modificar las lineas que tienen comentarios
