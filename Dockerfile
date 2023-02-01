FROM node:latest

RUN mkdir -p /app
RUN chmod -R 777 /app
WORKDIR /app
COPY ./template/ /app/
ENV NODE_ENV=production
RUN npm i -g pnpm
RUN pnpm install

STOPSIGNAL SIGQUIT