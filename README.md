** otus-react **


# package.json
скрипты запуска
все установленные пакеты

# package-lock.json
все установленные пакеты

# node_mudules
все файлы скачиваемых модулей
    
# modules 
`react`: работа с react
`react-dom`: что бы реакт понимал dom

`webpack`: вебпак
`webpack-cli`: консольное управление вебпаком
`webpack-dev-server`: локальный webpack / автоперезапуск сервера при изменении в коде

`@babel/core`: трансполятор, для понимания html тегов в js
`@babel/preset-env`:  es6 in es5
`@babel/preset-react`: перевод jsx в js (используется для конвертации react-плагинов;)
`@babel/preset-stage-0`: пресет для вызова функций .bind(this)  [не_поддерживается]
`@babel/plugin-proposal-class-properties`: плагин для вызова функций .bind(this)

`babel-loader`: используются для конвертации JS-файла, написанного на ES6, в совместимый с браузером E5

`css-loader`: webpack-плагин может загрузить файлы CSS, вставить небольшие изображения PNG в качестве URL-адреса данных и jpg файлы;
`style-loader`: добавляет CSS в html DOM, добавляя тег <style>;
`autoprefixer`: автоматически добавляет префиксы к CSS свйствам;
`node-sass`: работа с препроцессором sass
`sass-loader`: работа с препроцессором sass

`file-loader`: file-loader - файловый загрузчик для webpack;

`html-webpack-plugin`: webpack плагин, который упрощает создание HTML-файлов. Это
особенно полезно для webpack пакетов, которые включают в себя хэш в имени файла,
который меняется при каждой компиляции;
`mini-css-extract-plugin`: минификация CSS, все в одну неразборчивую строчку;
`uglifyjs-webpack-plugin`: минификация JS;
`postcss-loader`: `^3.0.0`,

`rimraf`: очищает файлы в папке перед записью вебпака

`prop-types`: проверка типов данных в props
    

# NodeJS
`dotenv` - для чтения переменных из файла .env в Node
`mongoose` - для работы с БД MongoDB
`faker` - генерирование фейковых данных
`request` - обработка запросов [?]
`express` - для обработки запросов [?]
`concurrently` - одновременный запуск несколький сценариев
`cors` - разрешить браузеру КЛИЕНТА принимать некоторые данные
`jsonwebtoken` - работа с токенами

# подписать позже
`cross-env`: "^5.2.0",
`extract-text-webpack-plugin`: "^3.0.2",
`image-webpack-loader`: "^4.6.0",
`inline-source-map`: "^0.6.2",
`inline-svg-loader`: "0.0.1",
`minify`: "^4.1.1",
`minimist`: "^1.2.0",
`optimize-css-assets-webpack-plugin`: "^5.0.1",
`pug`: "^2.0.3",
`pug-loader`: "^2.4.0",
`svg-sprite-loader`: "^4.1.3",
`svg-transform-loader`: "^2.0.7",
`svgo-loader`: "^2.2.0",
`tinypng-webpack-plugin`: "^2.0.0",
`webfontloader`: "^1.6.28",

babel-eslint — позволяет использовать линтинг в применении ко всему тому, что даёт Babel. Этот плагин вам не нужен в том случае, если вы не используете Flow или экспериментальные возможности, которые пока не поддерживает ESLint.
eslint — это основной инструмент, который используется для линтинга кода.
eslint-config-airbnb — предоставляет правила Airbnb в виде конфигурации, которую можно модифицировать.
eslint-plugin-babel — это плагин для ESLint, дополняющий плагин babel-eslint. В нём переделаны правила, которые, при применении babel-eslint, вызывают проблемы при обработке экспериментальных возможностей.
eslint-plugin-import — этот пакет поддерживает линтинг свежих синтаксических конструкций import/export и позволяет предотвращать проблемы, связанные с неправильным написанием путей к файлам и имён импортируемых модулей.
eslint-plugin-jsx-a11y — предоставляет правила, касающиеся доступности JSX-элементов для людей с ограниченными возможностями. Доступность веба — это очень важно.
eslint-plugin-prettier — помогает совместной работе ESLint и Prettier. Выглядит это следующим образом: когда Prettier форматирует код, он делает это с учётом правил ESLint.
eslint-plugin-react — содержит ESLint-правила, рассчитанные на React.
eslint-config-jest-enzyme — данный пакет предназначен для тех случаев, когда пользуются jest-environment-enzyme, что приводит к тому, что переменные React и Enzyme оказываются глобальными. Благодаря ему ESLint не будет выдавать предупреждения о таких переменных.
eslint-plugin-jest — ESlint-плагин для Jest.
