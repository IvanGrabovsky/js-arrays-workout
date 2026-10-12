# ⚡ JavaScript Array Methods Mastery Workout

> Практичний воркаут з методів масивів у JavaScript: **від реалізації власних поліфілів під капотом (`myMap`, `myFilter`, `myReduce`...) до бойових пайплайнів обробки бізнес-даних**.

[![Array Methods Tests](https://github.com/IvanGrabovsky/js-arrays-workout/actions/workflows/test.yml/badge.svg)](https://github.com/IvanGrabovsky/js-arrays-workout/actions/workflows/test.yml)
[![Node.js Version](https://img.shields.io/badge/Node.js-20%2B-brightgreen.svg)](https://nodejs.org)
[![Vite](https://img.shields.io/badge/Vite-5.x-blueviolet.svg)](https://vitejs.dev)

---

## 🎯 Концепція воркауту

Більшість курсів пропонують іграшкові задачі на кшталт `[1, 2, 3] * 2`.  
У цьому воркауті кожна тема побудована за принципом **«Під капотом ➔ Реальний сервіс»**:

1. **Етап 1: Власний поліфіл (Під капотом)**:
   - Ви пишете метод самостійно з нуля через класичні цикли (наприклад, `myMap`, `myFilter`, `myReduce`, `myFind`), щоб глибоко зрозуміти внутрішню механіку мови, роботу аргументів `(item, index, array)` та акумулятора.
2. **Етап 2: Бойові практичні задачі (Реальний продакшн)**:
   - Застосовуєте методи для обробки реальних структур даних:
     - 🛒 **E-Commerce**: перерахунок цін у національну валюту з ПДВ, розрахунок купонів, валідація кредитного ліміту кошика.
     - 🛡️ **GDPR & Безпека**: маскування персональних даних (`anonymizeUsers`), виявлення загроз у системних логах (`findSecurityIncident`).
     - 🏨 **Сервіси бронювання**: алгоритм перевірки перетину дат номерів у готелі (`getAvailableRooms`).
     - ✈️ **Авіалінії**: алгоритм підбору ідеального місця в літаку (`locateFlightSeat`).
     - 📊 **Фінансова аналітика**: зведені бізнес-метрики замовлень за один прохід (`reduce`).
     - 🎧 **Стримінгові платформи**: генератор плейлиста під настрій з лімітом тривалості.
     - ⚔️ **RPG Ігри**: жадібний алгоритм пакування інвентаря героя за питомою цінністю лута (`efficiency = value / weight`).

---

## 📚 Структура модулів (23 задачі)

| Модуль | Тема | Власний метод (Поліфіл) | Бойові прикладні задачі |
|---|---|---|---|
| **01** | `forEach` | `myForEach` | Розсилка сповіщень `notifySubscribers`, підрахунок голосів `tallyVotes` |
| **02** | `map` | `myMap` | Картки інтернет-магазину `formatProductCards`, GDPR маскування `anonymizeUsers`, гео-точки `normalizeGeoCoordinates` |
| **03** | `filter` | `myFilter` | Промокоди `filterActiveDiscounts`, модерація спаму `sanitizeComments`, бронювання дат `getAvailableRooms` |
| **04** | `find` & `findIndex` | `myFind`, `myFindIndex` | Системні аномалії `findSecurityIncident`, вибір місця в літаку `locateFlightSeat` |
| **05** | `some` & `every` | `mySome`, `myEvery` | Валідація форми `validateRegistrationForm`, VIP-доступ `hasVipAccess`, ліміт кошика `canAffordCart` |
| **06** | `reduce` | `myReduce` | Групування `groupByCategory`, фінансові метрики `calculateOrderMetrics`, генератор `flattenQueryString` |
| **07** | `flat` & `flatMap` | `myFlat`, `myFlatMap` | Витягування хештегів `extractAllHashtags`, дерево категорій `flattenCategoryTree` |
| **08** | **Boss Pipelines** | *Method Chaining* | Топ-покупці `getTopSpendersAnalytics`, плейлист `generateMusicPlaylist`, оптимізація лута `optimizeInventoryLoot` |

---

## 🚀 Покроковий воркфлоу для студента (Fork ➔ Код ➔ Тести ➔ PR)

### Крок 1. Зробіть Fork репозиторію
1. Натисніть кнопку **Fork** у верхньому правому куті цієї сторінки GitHub.
2. Це створить копію репозиторію у вашому власному GitHub-профілі.

### Крок 2. Клонуйте свій форк
```bash
git clone https://github.com/IvanGrabovsky/js-arrays-workout.git
cd js-arrays-workout
```

### Крок 3. Встановіть залежності
```bash
npm install
```
*(Потрібен встановлений Node.js версії 18 або 20+)*.

### Крок 4. Створіть власну робочу гілку
```bash
git checkout -b solution/ваше-ім'я-прізвище
```

---

## 💻 2 Зручні способи виконання завдань

### Варіант А: Через інтерактивний веб-тренажер у браузері (Рекомендовано)
Запустіть локальний сервер:
```bash
npm run dev
```
У браузері відкриється сторінка `http://localhost:5173/`:
- Обирайте будь-який модуль та задачу в зручному бічному меню.
- Пишіть код прямо у вбудованому редакторі (з автозбереженням у браузері).
- Натискайте **`Ctrl + Enter`** (або кнопку **«▶️ Перевірити рішення»**) для миттєвого тестування.

### Варіант Б: Класичний через термінал та Vitest
Пишіть розв'язки у файлах папки `src/` (наприклад, `src/01-forEach.js`, `src/02-map.js`), а тести запускайте через консоль:
```bash
# Запустити всі тести одноразово:
npm test

# Запустити тести у режимі відстеження змін (Watch Mode):
npm run test:watch
```

---

## 📤 Подача рішення на перевірку (Pull Request)

Коли всі тести успішно проходять (зелені):

1. Зафіксуйте ваші розв'язки в git:
```bash
git add src/
git commit -m "feat: complete array methods tasks"
```

2. Відправте гілку у ваш форк на GitHub:
```bash
git push origin solution/ваше-ім'я-прізвище
```

3. Відкрийте **Pull Request**:
   - Перейдіть у ваш форк на GitHub.
   - Натисніть кнопку **Compare & pull request**.
   - Переконайтеся, що base repository — це репозиторій викладача, а head repository — ваша гілка.
   - Заповніть шаблон Pull Request (впишіть своє ім'я та коментарі).
   - Натисніть **Create pull request**.

> 🤖 **Автоперевірка CI**: Після створення PR система **GitHub Actions** автоматично запустить автотести та встановить зелену галочку біля вашого коміту, якщо всі 23 завдання розв'язані коректно!

---

## 📋 Правила академічної доброчесності
- Для написання власних поліфілів (`myForEach`, `myMap`, `myFilter`, `myReduce` тощо) **заборонено викликати оригінальні однойменні методи масиву**. Мета — самостійно пройтися елементами через циклічні конструкції (`for`, `while`).
- Уникайте сліпого копіювання з ШІ — розбирайтеся в кожному рядку самостійно!
