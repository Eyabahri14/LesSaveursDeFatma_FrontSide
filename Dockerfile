#-- STAGE 1 : Build
FROM node:latest as builder

# Set the working directory inside the container
WORKDIR /app

# Copy the entire project to the working directory
COPY . .

# Delete cache files
RUN rm -rf /root/.npm

# Install Node.js dependencies forcefully
RUN npm install --force

# Run the build script
RUN npm run build

#-- STAGE 2 : Run
FROM nginx:alpine

WORKDIR /usr/share/nginx/html

#Remove nginx static assets 
RUN rm -rf ./*

# Copy the build output from the builder stage to the nginx web server directory
COPY --from=builder /app/dist/project-food2 .

#change permissions to access the working directory
RUN chown nginx:nginx /usr/share/nginx/html/*

#Containers run nginx with global directives and daemon off 
CMD ["nginx","-g","daemon off;"]
