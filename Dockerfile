# Build stage
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . ./
RUN npm run build

# Serve stage
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
# Expose port 80 to the outside once the container has launched
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
