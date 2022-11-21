/**
 * Webpack https://webpack.js.org/
 *  - точка входа
 *  - точка вывода - выкидывает все что собрал
 *  - загрузчики - функция которая приминяется к каждому файлу отдельно
 *  - плагины - расширение, применяется после сборки к результату
 */

/*

1. Создаем папку

2. npm init -y

3. npm install webpack webpack-cli --save-dev

webpack — сборщик модулей и ресурсов
webpack-cli — интерфейс командной строки для вебпака

4.  создаем проект webpack
  |- package.json
  |- package-lock.json
  |- index.html
  |- /src
    |- index.js

5. Создаем webpack.config.js
описываем настройки ввиде обьекта, после чего экспортируем
module.exports = {};

6. Entry точка входа - указываем где лежит самый главный файл от которой строиться дерево зависимости
entry: './src/index.js'

7. Output точка вывода - результат сборки
filename - имя файла в котором будет собран результат
path - папку в которую будем собран результат

const path = require('path');

output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },

8. Пишим скрипт "build": "webpack" в package.json

9. Можем проверить npm run build

10. module.exports = {
      mode: 'production',  или development (не минимизирован, неменифицирован)
    };

11. DevServer - делает перекомпиляцию
npm install webpack-dev-server --save-dev устанавливаем
webpack-dev-server добавляем в scripts

12. Настройка devServer
 devServer: {
    static: {
      directory: path.join(__dirname, 'build'), папка продакшн
    },
    port: 4444,
    open: true,  открывать в браузере
  },

13. stats: 'errors-only' убирает лишнюю инфу в терминале

14. Добавляем загрузчики
пишем  module и в нем массив правил (обьектов)
rules: [{},{},{}],

15. Устанавливаем css-loader
npm install --save-dev css-loader
npm install --save-dev style-loader

добавляем
rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"], // массив загрузчиков
      },
    ],

16. Ставим babel
npm install --save-dev babel-loader @babel/core

rules: [
      {
        test: /\.m?js$/,   хотим загружать
        exclude: /node_modules/,   не хотим загружать
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]


или 
{
  test: /\.js$/,
  exclude: /node_modules/,
  use: ['babel-loader'],
},

конфигурацию пишем в отдельном файле babel.config.json
npm install @babel/preset-env --save-dev

{
  "presets": ["@babel/preset-env"]
}

17. sass-loader
npm install sass-loader sass webpack --save-dev

webpack.config.js - test: /\.s[ac]ss$/i / use - "sass-loader"
app.js - import "./style.scss";

18. HtmlWebpackPlugin
npm install --save-dev html-webpack-plugin

const HtmlWebpackPlugin = require('html-webpack-plugin');
plugins: [new HtmlWebpackPlugin({ template: 'src/index.html' })],

19. MiniCssExtractPlugin вытягивает css в отдельный файл
npm install --save-dev mini-css-extract-plugin
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
MiniCssExtractPlugin.loader



https://github.com/luxplanjay/webpack-starter-kit  // репета



*/

/**
 * После того как сделали сборку:
 *
 * заливаем на github
 *
 * что бы запустить сборку копируем и вводим команду npm i
 */
