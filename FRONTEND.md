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
Перейдите в папку проекта `cd client`
Начните процесс сборки Запустите процесс сборки с помощью `npm start`.
Каждый раз для пересборки надо остановить `^C` и запустить заново `npm start`
Для Vite нужна команда
```bash
yarn dev --host
```
## Дальнейшая работа
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
