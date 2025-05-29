---
id: getting-started
sidebar_position: 2

---

# Швидкий старт

## Вимоги

- PHP >= 8.2
- Composer
- Node.js >= 22.16
- npm або yarn
- MySQL

## Клонування репозиторію

```bash
git clone https://github.com/IrynaKlosovych/laravel-react.git
cd laravel-react
```

або

```bash
git clone git@github.com:IrynaKlosovych/laravel-react.git
cd laravel-react
```

## Встановлення залежностей

Laravel (бекенд)

```bash
composer install
```

React (фронтенд)

```bash
cd my-react-app
npm install
```

## Налаштування змінних оточення .env

Перейдіть в laravel-react і створіть файл .env на основі шаблону:

```bash
cp .env.example .env
```

Вкажіть свої параметри:

```ini
APP_NAME=laravel_react_app
APP_ENV=local
APP_KEY=
APP_DEBUG=true
APP_URL=http://localhost:8000

LOG_CHANNEL=stack

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel_react_app
DB_USERNAME=your_username
DB_PASSWORD=your_password
```

Після створення .env не забудьте згенерувати ключ:

```bash
php artisan key:generate
```

## Міграції

```bash
php artisan migrate
```

## Запуск серверів

Laravel (бекенд)

```bash
php artisan serve
```

Бекенд буде доступний за адресою: [http://localhost:8000](http://localhost:8000)

React (фронтенд)

```bash
cd my-react-app
npm run dev
```

Фронтенд буде доступний за адресою: [http://localhost:3000](http://localhost:3000)
