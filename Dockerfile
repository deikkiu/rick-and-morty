# Используем официальный Node.js образ как базовый
FROM node:18

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем package.json и package-lock.json (или yarn.lock) в рабочую директорию
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем весь исходный код в рабочую директорию
COPY . .

# Строим проект
RUN npm run build

# Используем nginx для сервировки статических файлов
FROM nginx:alpine

# Копируем файлы сборки из предыдущего контейнера
COPY --from=0 /app/dist /usr/share/nginx/html

# Копируем конфигурацию nginx (если у вас есть кастомная конфигурация)
COPY nginx.conf /etc/nginx/nginx.conf

# Открываем порт 80 для доступа к приложению
EXPOSE 80

# Запускаем nginx
CMD ["nginx", "-g", "daemon off;"]
