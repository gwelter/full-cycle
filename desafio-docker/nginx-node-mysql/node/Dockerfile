FROM node:15 as builder

WORKDIR /usr/src/app

COPY . .

EXPOSE 3000
ENTRYPOINT [ "npm", "i" ]
CMD [ "node", "index.js" ]