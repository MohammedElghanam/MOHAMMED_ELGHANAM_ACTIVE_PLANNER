FROM node:18-alpine

WORKDIR /backend-activePlanner

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD [ "npm", "run", "start:dev" ]