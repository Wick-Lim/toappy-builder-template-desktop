FROM node:16.19.0
RUN mkdir -p /usr/src/app
COPY ./template/* /usr/src/app/
WORKDIR /usr/src/app
RUN npm install
RUN npm build
RUN npm run export
RUN npm run make

STOPSIGNAL SIGQUIT