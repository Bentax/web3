## Install web3 on Ubuntu 20.04.
1. Keep the server Up to date
```bash
apt update -y && apt upgrade -y
```
2. Install build-essential
```bash
apt-get install build-essential -y
```
3. Install required package
```bash
apt install curl -y
```
4 . Install NodeJS and NPM
Add the latest stable release of NodeJS.
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
```
Вам предложат ввести следующую команду
```bash
sudo apt-get update
```
YARN 
```bash
## You may also need development tools to build native addons:
     sudo apt-get install gcc g++ make
## To install the Yarn package manager, run:
     curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | gpg --dearmor | sudo tee /usr/share/keyrings/yarnkey.gpg >/dev/null
     echo "deb [signed-by=/usr/share/keyrings/yarnkey.gpg] https://dl.yarnpkg.com/debian stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
     sudo apt-get update && sudo apt-get install yarn
```
https://unetway.com/blog/kak-ustanovit-yarn-na-ubuntu-2004
Импортируйте ключ GPG репозитория и добавьте репозиторий Yarn APT в свою систему, выполнив следующие команды:
```bash
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
```
После включения репозитория обновите список пакетов и установите Yarn.
```bash
sudo apt update
sudo apt install yarn -y
```
Приведенная выше команда также установит Node.js. Если вы установили Node через nvm, пропустите установку Node.js с помощью:
```bash
sudo apt install --no-install-recommends yarn
```
Install Git
```bash
apt install git
```
Verify the installations.
```bash
node -v
npm -v
yarn -v
```
# VITE
```bash
yarn create vite
```
```bash
cd client
yarn
yarn run dev --host
```
# Установим `thirdweb`
```bash
npx thirdweb@latest create --contract
```
Установки делаем следующие
```bash
web3
Hardhat
Crowdfunding
Empty
```
Нам предложат обновление
```bash
npm install -g npm@9.6.1
```
Перейдём в директорию web3
```bash
npm install dotenv
```
В папке `contracts` переименовываем контракт на `CrowdFunding.sol` и вставляем код смартконтракта
Создаём `.env` файл и прописываем `PRIVATE_KEY=` из кошелька
Копируем ссылку
https://www.ankr.com/rpc/eth/ - есть все сети
Изменяем 
```bash
hardhat.config.js
module.exports = {
  solidity: {
    version: '0.8.9',
    defaultNetwork: 'goerli',
    networks: {
      hardhat: {},
      goerli: {
        url: 'https://rpc.ankr.com/eth_goerli',
        accounts: [`0x${process.env.PRIVATE_KEY}`]
      }
    },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
```
Деплоим смартконтракт
`cd web3 > npm run deploy`
переходим по полученной ссылке: https://thirdweb.com/contracts/deploy/QmVRAGvMjWfBCDJGgHzsru9eJyyVfwsFkZxVY3tGKLA9x5
подключаем кошелёк 0xc88882bDf7cEA8429b73CD2af758C97d7CdfC00E
и деплоим всё-таки в goerli
получили номер контракта 0x89FD49daF5c21e6011D62A4bAC20B345d361D67a

# FRONTEND
```bash
cd client
```
устанавливаем реакт
```bash
npx thirdweb create --app
```
evm or solana?
what is your project name? ./
                          vite
                          JS

ПРИЛОЖЕНИЕ СОЗДАНО
```bash
npm install react-router-dom
```
почему то поругалось на wagmi
запустим приложение `npm run dev`
http://94.103.90.157:5173 - не взлетело

поставил    `npm i wagmi ethers@^5`       не взлетело
поставил    `sudo npm -g install create-react-app`     получл предупреждение про tar@2.2.2
поставил    `npm i --save-dev @wagmi/cli`  не взлетело
заново создал `frontend`      `npx thirdweb create --template vite-javascript-starter`
```bash
Conflicting peer dependency react@17.0.2
node_modules/react from wagmi@0.2.28
node_modules/@thirdweb-dev/react/node_modules/wagmi
wagmi@"^0.2.28" from @thirdweb-dev/react@3.10.3
node_modules/@thirdweb-dev/react
```
