FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
#Hello
COPY . .

RUN npm config set registry http://registry.npmjs.org/
