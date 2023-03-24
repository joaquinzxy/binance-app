# Build stage
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN yarn install --production
COPY . .
RUN yarn build

# Production stage
FROM node:18-alpine
WORKDIR /app
COPY --from=build /app/dist ./dist
COPY package*.json ./
RUN yarn install --production=true
EXPOSE 3000
CMD ["node", "dist/main"]