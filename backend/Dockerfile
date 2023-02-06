FROM node:16-alpine

WORKDIR /usr/src/app

#COPY package*.json ./
COPY package.json .

#RUN npm install
RUN npm install -g nodemon

COPY . .

EXPOSE 8000

#CMD ["node", "server.js"]
CMD ["npm", "run", "dev"]