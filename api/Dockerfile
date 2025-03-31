FROM node:23

WORKDIR /app

RUN npm install pm2 -g

COPY package*.json .

COPY . .

RUN npm i

RUN npm run build

ENV PORT=4500

EXPOSE 4500

# CMD [ "pm2-runtime", "ecosystem.config.js" ]

CMD [ "pm2-runtime", "process.yml" ]