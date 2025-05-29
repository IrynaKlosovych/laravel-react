---
id: project-structure
sidebar_position: 3

---
# Структура проєкту

## Ключові папки з каталогу laravel-react

* app/
  * Http/Controllers/ — API-контролери Laravel.
  * Models/ — моделі Eloquent для роботи з БД.
  * Providers/ — Laravel-сервіси (Service Providers).
* routes/
  * api.php — Маршрути для REST API (React з ними спілкується).
* database/
  * migrations/ — Опис структури таблиць.
  * seeders/ — Початкові дані для таблиць (за потреби).
  * factories/ — Генератори фейкових даних для тестів.
* tests/ — Папка з тестами для проєкту

## Ключові папки з каталогу my-react-app

* src/
  * components/ — Папка, де містяться загальні компоненти
  * contexts / — Папка, що містить ContextProvider та логіку збереження стану
  * css/ — Стилі для інтерфейсів
  * views/ — Інтерфейси, що розділені для гостьового режиму, залогіненого, базового для усіх сторінок та допоміжні елементи
