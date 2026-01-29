FROM node:18-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM nginx:alpine
RUN addgroup -g 1001 -S nodejs && \
    adduser -S react -u 1001 && \
    chown -R react:nodejs /var/cache/nginx && \
    chown -R react:nodejs /var/run && \
    chmod -R 755 /var/cache/nginx

COPY --from=builder --chown=react:nodejs /app/build /usr/share/nginx/html

USER react

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]