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
Либо так
```bash
## https://unetway.com/blog/kak-ustanovit-yarn-na-ubuntu-2004
## Импортируйте ключ GPG репозитория и добавьте репозиторий Yarn APT в свою систему, выполнив следующие команды:
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
## После включения репозитория обновите список пакетов и установите Yarn.
sudo apt update
sudo apt install yarn -y
## Приведенная выше команда также установит Node.js. Если вы установили Node через nvm, пропустите установку Node.js с помощью:
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
git --version
```
## Создадим приложение React
```bash
npx create-react-app client
```
Вам предложат обновить
```bash
npm install -g npm@9.6.2
```
И обновить tar@2.2.2
```bash
npm update tar
```
```bash
tar --version
```
