FROM node:16.15.1 as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

FROM nginx:1.21
COPY --from=node /app/dist/SOMA /usr/share/nginx/html

EXPOSE 80
