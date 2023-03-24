from node:18.10

WORKDIR /usr/src/app

COPY package.json .

COPY yarn.lock .

RUN yarn install

COPY /dist . 

EXPOSE 3000

CMD ["node", "main.js"]