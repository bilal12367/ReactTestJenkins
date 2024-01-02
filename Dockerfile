FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm config set registry http://registry.npmjs.org/

RUN npm install
#Hello

COPY . .

RUN npm run build

RUN rm -r ./server/build

RUN mv build ./server

RUN cd server

RUN npm install

CMD ["npm","start"]




