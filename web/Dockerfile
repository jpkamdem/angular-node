FROM node:23 AS build

WORKDIR /app

RUN npm install -g @angular/cli

COPY package*.json .

COPY angular.json .

COPY tsconfig.json .

RUN npm i

COPY . .

RUN ng build -c=production

FROM nginx:1.27.2

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist/web/browser /usr/share/nginx/html

EXPOSE 90

CMD [ "nginx", "-g", "daemon off;" ]