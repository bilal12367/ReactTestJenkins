FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm config set registry http://registry.npmjs.org/

RUN npm install
#Hello
COPY . .

