## Install on Ubuntu 20.04.
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
## Screen
```bash
apt install screen -y
screen -S session1
screen -list
```
First, you would want to know which process is using port 3000
```bash
sudo lsof -i :3000
sudo lsof -i :8000
```
this will list all PID listening on this port, once you have the PID you can terminate it with the following:
```bash
kill -9 <PID>
```
