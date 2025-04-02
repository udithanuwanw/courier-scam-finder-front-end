# Step 1: Build the app using Node.js
FROM node:22 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the front-end files
COPY . .

# Build the React app (Vite outputs to 'dist' by default)
RUN npm run build

# Step 2: Serve the static files using Nginx
FROM nginx:alpine

# Set the working directory
WORKDIR /usr/share/nginx/html

# Remove the default Nginx configuration
RUN rm -rf ./*

# Copy the Vite build output to Nginx's public directory
COPY --from=build /app/dist .

# Expose port 80
EXPOSE 80

# Run Nginx
ENTRYPOINT ["nginx", "-g", "daemon off;"]
