FROM octoblu/pnpm
RUN mkdir -p /usr/src/app
COPY ./template/* /usr/src/app/
WORKDIR /usr/src/app
RUN pnpm install
RUN pnpm build
RUN pnpm export
RUN pnpm make

STOPSIGNAL SIGQUIT