## Install web3 on Ubuntu 20.04.
1. Keep the server Up to date
```bash
apt update -y
```
```bash
apt upgrade -y
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
Импортируйте ключ GPG репозитория и добавьте репозиторий Yarn APT в свою систему, выполнив следующие команды:
```bash
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
```
После включения репозитория обновите список пакетов и установите Yarn.
```bash
sudo apt update
sudo apt install yarn
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
Установим `thirdweb`
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

