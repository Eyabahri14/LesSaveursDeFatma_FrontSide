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

# Copy the build output from the builder stage to the nginx web server directory
COPY --from=builder /app/dist/project-food2 /usr/share/nginx/html
