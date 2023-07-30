#-- STAGE 1 : DEVELOPMENT --
FROM node:latest as builder 
WORKDIR /app 
COPY . .
RUN npm update
#delete cache files 
RUN rm -rf /root/.npm
#update the dependencies
RUN npm update --force
#force npm installation
RUN npm install --force
RUN npm run build

#-- STAGE 2 : PRODUCTION --
FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80 
CMD ["nginx","-g","daemon off;"]
