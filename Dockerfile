# Используем LTS версию Node.js
FROM node:20-alpine AS build

WORKDIR /app

# 1. Копируем package файлы
COPY package.json package-lock.json ./

# 2. Устанавливаем зависимости
RUN npm ci

# 3. Копируем исходный код
COPY . .

# 4. Собираем проект
RUN npm run build

# 5. Production сервер
FROM nginx:alpine

# Копируем сборку
COPY --from=build /app/dist /usr/share/nginx/html

# Базовый nginx конфиг для SPA
RUN echo 'server { \
    listen 80; \
    server_name _; \
    root /usr/share/nginx/html; \
    \
    location / { \
        try_files \$uri \$uri/ @rewrites; \
    } \
    \
    location @rewrites { \
        rewrite ^.*\$ /index.html last; \
    } \
    \
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)\$ { \
        expires 1y; \
        add_header Cache-Control "public, immutable"; \
    } \
}' > /etc/nginx/conf.d/default.conf
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]