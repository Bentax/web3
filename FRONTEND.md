## React
Установить приложение `create-react-app` помогает настроить все инструменты, необходимые для создания приложений React. 
Выполните следующую команду npm, чтобы установить утилиту `create-response-app`:
```bash
sudo npm -g install create-react-app
```
Проверьте, обновлена ли версия (5.0.1 - 15.03.23) с помощью команды:
```bash
create-react-app --version
```
Процесс загрузки завершен. Теперь вы можете создать React-Application.

Мы даем название приложению `client`. Выполните указанную ниже команду, чтобы создать приложение:
```bash
npx create-react-app client
```
We will also need Axios in order to make get/post requests with ajax. So let’s install that now:

Перейдите в папку проекта

cd frontend
Начните процесс сборки Запустите процесс сборки с помощью npm start.

npm start
Каждый раз для пересборки надо остановить ^C и запустить заново npm start

Дальнейшая работа
Может понадобится библиотека Ethers
```bash
npm install ethers@5.7.2 --save
npm install react-bootstrap bootstrap
npm i -S axios
```
Для роутинга установим в папке проекта:
```bash
npm i -D react-router-dom@5.2.0
```
Но эта версия ругается на Switch
In React router v6, we have to replace the Switch component with Routes Make sure your project is running the latest version by issuing the
```bash
npm i -D react-router-dom@latest
```
Есть несколько вариантов как можно обращаться к файлам: 
1: / - путь к корневой папке Пример:
import styles from '/dist/styles/main.min.css';
2: './' - путь относительно файла в котором мы находимся. Пример:
import store from './store.js';
3: '../' - выходим из папки в которой находимся, т.е. путь на уровень выше. Пример:
import store from '../store.js';
4: 'react' - путь к папке react в папке node_modules Пример:
import React from 'react'; 
