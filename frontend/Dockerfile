FROM node:latest AS builder
WORKDIR /build
COPY package.json package.json
COPY package-lock.json package-lock.json
COPY tsconfig.json tsconfig.json
RUN npm ci
COPY public/ public
COPY src/ src
RUN npm run build

FROM nginx:latest
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /build/build/ .
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
