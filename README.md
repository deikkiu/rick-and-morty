# Rick and Morty

Добро пожаловать в проект на основе Vite и Vue! В этом README описаны шаги для локального запуска проекта, а также запуск через Docker.

https://github.com/user-attachments/assets/83d8cc04-a23c-40b6-aced-6d99ecc5b685

<br />

https://github.com/user-attachments/assets/b13e8520-6281-437c-914b-e7726a791143

<br />

https://github.com/user-attachments/assets/8928fd56-5652-4b23-bcd8-4357e22bc3bb

<br />

## Запуск локально

### Требования

Для запуска проекта локально, вам нужно иметь установленный [Node.js](https://nodejs.org/) (версии 16 или новее) и [npm](https://www.npmjs.com/) или [yarn](https://yarnpkg.com/).

### Установка зависимостей

1. Клонируйте репозиторий:

   ```bash
   git clone <URL-репозитория>
   cd <папка-проекта>
   ```

2. Установите зависимости:

   С использованием npm:

   ```bash
   npm install
   ```

   Или с использованием yarn:

   ```bash
   yarn install
   ```

### Запуск проекта

1. Запустите проект в режиме разработки:

   С использованием npm:

   ```bash
   npm run dev
   ```

   Или с использованием yarn:

   ```bash
   yarn dev
   ```

2. Откройте браузер и перейдите по адресу [http://localhost:5173](http://localhost:5173) для просмотра проекта.

## Запуск через Docker

### Требования

Для запуска проекта через Docker, вам нужно иметь установленный [Docker](https://www.docker.com/products/docker-desktop) и [Docker Compose](https://docs.docker.com/compose/).

### Сборка и запуск

1. Соберите Docker-образ:

   ```bash
   docker build -t my-vue-app .
   ```

   Здесь `my-vue-app` — это имя вашего Docker-образа. Вы можете изменить его по своему усмотрению.

2. Запустите контейнер:

   ```bash
   docker run -p 5173:5173 my-vue-app
   ```

3. Откройте браузер и перейдите по адресу [http://localhost:5173](http://localhost:5173) для просмотра проекта.

### Использование Docker Compose

Если в проекте есть файл `docker-compose.yml`, вы можете использовать Docker Compose для более удобного управления контейнерами.

1. Соберите и запустите проект с помощью Docker Compose:

   ```bash
   docker-compose up --build
   ```

2. Откройте браузер и перейдите по адресу [http://localhost:5173](http://localhost:5173) для просмотра проекта.

## Дополнительная информация

- Для подробной информации о Vite, посетите [официальный сайт Vite](https://vitejs.dev/).
- Для подробной информации о Vue.js, посетите [официальный сайт Vue.js](https://vuejs.org/).
