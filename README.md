# Alexey Worker — portfolio

Премиальный сайт-портфолио разработчика цифровых продуктов. Проект собран на Next.js, React, TypeScript и Tailwind CSS; визуальная система адаптирует опубликованные принципы Paradigm 2.0 под тёмный персональный бренд.

## Локальный запуск

```bash
npm install
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000).

Production-проверка:

```bash
npm run lint
npm run build
npm start
```

## Контакт в Telegram

Перед публикацией создайте `.env.local` и укажите реальную ссылку Alexey Worker:

```env
NEXT_PUBLIC_TELEGRAM_URL=https://t.me/AlexWorker7
```

Без переменной форма использует стандартное окно отправки сообщения Telegram и показывает резервную прямую ссылку. Это сделано намеренно: в проекте нет вымышленного username.

## Страницы

- `/` — главная страница портфолио;
- `/projects/pink-club` — развёрнутый кейс PINK CLUB.

Все количественные результаты и неподтверждённые клиентские данные намеренно исключены.
