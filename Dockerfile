FROM node:lts-alpine as build-stage

# install simple http server for serving static content
RUN npm install -g http-server

# make the 'app' folder the current working directory
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# install project dependencies
RUN npm install

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# build app for production with minification
RUN npm run build

# 关于nginx的配置
FROM nginx:alpine

COPY --from=build-stage /app/dist /usr/share/nginx/html/dist

RUN rm /etc/nginx/conf.d/default.conf
ADD ./nginx/nginx.conf  /etc/nginx/conf.d/
#ADD ./nginx/cert/ /etc/nginx/cert/

EXPOSE 443

WORKDIR /etc/nginx

CMD ["nginx", "-g", "daemon off;"]
