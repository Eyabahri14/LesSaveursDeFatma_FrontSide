#-- STAGE 1 : Build
FROM node:latest as builder 
WORKDIR /app 
COPY . .
RUN rm -rf /root/.npm
RUN npm install --force
RUN npm run build

#-- STAGE 2 : Run
FROM nginx:alpine
COPY --from=builder /app/dist/project-food2 /usr/share/nginx/html
