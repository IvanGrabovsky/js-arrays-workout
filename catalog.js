/**
 * КАТАЛОГ ЗАВДАНЬ: JS Arrays Mastery Workout
 * ==========================================
 * 8 модулів, 23 практичні задачі:
 * 1. forEach (кастомний поліфіл + розсилка + підрахунок голосів)
 * 2. map (кастомний поліфіл + e-commerce картки + анонімізація GDPR + гео-координати)
 * 3. filter (кастомний поліфіл + промокоди + модерація коментарів + бронювання готелю)
 * 4. find & findIndex (кастомні поліфіли + пошук аномалій у логах + вибір місця в літаку)
 * 5. some & every (кастомні поліфіли + валідація форми + перевірка VIP + платоспроможність кошика)
 * 6. reduce (кастомний поліфіл + групування за категоріями + метрики замовлень + генератор query string)
 * 7. flat & flatMap (кастомні поліфіли + витягування хештегів + дерево категорій)
 * 8. Boss Challenges (пайплайни топ-покупців, генератор плейлиста, оптимізація RPG інвентаря)
 */

export const modulesCatalog = [
  {
    id: 1,
    title: 'Модуль 1: forEach — Перебір та побічні ефекти',
    slug: '01-forEach',
    tasks: [
      {
        id: '1.1',
        name: 'myForEach',
        title: 'Власна реалізація forEach (Кастомний поліфіл)',
        level: 'Легкий рівень',
        goal: 'Реалізувати перебір масиву через класичний цикл for без використання вбудованого array.forEach.',
        requirements: [
          'Викликати callback(item, index, array) для кожного елемента.',
          'Функція повертає undefined.',
          'Якщо масив порожній — callback не викликається.'
        ],
        examples: 'myForEach([1, 2], (x) => console.log(x)) => undefined',
        theoryHint: '💡 <b>Поліфіл forEach:</b> Використовуйте звичайний цикл <code>for (let i = 0; i < array.length; i++)</code> і передавайте поточний елемент, індекс та весь масив у колбек.',
        starterCode: `export function myForEach(array, callback) {\n  // TODO: Напиши свій розв'язок\n}`
      },
      {
        id: '1.2',
        name: 'notifySubscribers',
        title: 'Практична розсилка сповіщень підписникам',
        level: 'Легкий рівень',
        goal: 'За допомогою forEach відфільтрувати активних підписників та зібрати масив надісланих повідомлень.',
        requirements: [
          'Опрацьовувати лише користувачів із isSubscribed === true.',
          'Формат тексту: "Привіт, [name]! [message]".',
          'Повернути масив обʼєктів { to: email, text }.'
        ],
        examples: 'notifySubscribers([{ name: "Олена", isSubscribed: true, email: "o@test.com" }], "Привіт")',
        theoryHint: '💡 <b>Ітерація з накопиченням:</b> Створіть порожній масив результатів перед циклом і пушіть туди повідомлення для користувачів з увімкненою підпискою.',
        starterCode: `export function notifySubscribers(users, message) {\n  // TODO: Напиши свій розв'язок\n  return [];\n}`
      },
      {
        id: '1.3',
        name: 'tallyVotes',
        title: 'Підрахунок голосів на студентських виборах',
        level: 'Середній рівень',
        goal: 'Підрахувати кількість голосів за кожного кандидата, ігноруючи зіпсовані бюлетені.',
        requirements: [
          'Ігнорувати порожні рядки, null та undefined.',
          'Сформувати обʼєкт candidateVotes: { [name]: count } та загальну кількість totalValidVotes.'
        ],
        examples: 'tallyVotes(["Іван", "Марія", "Іван"]) => { candidateVotes: { "Іван": 2, "Марія": 1 }, totalValidVotes: 3 }',
        theoryHint: '💡 <b>Обʼєкт-лічильник:</b> Перевіряйте, чи ключ уже існує в обʼєкті (candidateVotes[name] = (candidateVotes[name] || 0) + 1).',
        starterCode: `export function tallyVotes(ballots) {\n  // TODO: Напиши свій розв'язок\n  return { candidateVotes: {}, totalValidVotes: 0 };\n}`
      }
    ]
  },
  {
    id: 2,
    title: 'Модуль 2: map — Трансформація та проекції даних',
    slug: '02-map',
    tasks: [
      {
        id: '2.1',
        name: 'myMap',
        title: 'Власна реалізація map (Кастомний поліфіл)',
        level: 'Легкий рівень',
        goal: 'Створити новий масив такої ж довжини з результатами виклику callback.',
        requirements: [
          'Не використовувати нативний array.map.',
          'Повертати новий масив, не змінюючи оригінал.',
          'Передавати у callback аргументи (item, index, array).'
        ],
        examples: 'myMap([1, 2, 3], x => x * 2) => [2, 4, 6]',
        theoryHint: '💡 <b>Імутабельність map:</b> Створіть новий масив, у циклі викликайте колбек для кожного елемента та додавайте результат у вихідний масив.',
        starterCode: `export function myMap(array, callback) {\n  // TODO: Напиши свій розв'язок\n  return [];\n}`
      },
      {
        id: '2.2',
        name: 'formatProductCards',
        title: 'Картки товарів інтернет-магазину (Ціни з ПДВ)',
        level: 'Середній рівень',
        goal: 'Перерахувати ціни з валюти постачальника (USD) у гривні з урахуванням ПДВ.',
        requirements: [
          'Формула: (priceUsd * exchangeRate) * (1 + vatPercent / 100).',
          'Округлити ціну в UAH до 2 знаків після коми.',
          'Сформувати картку: { id, title, priceFormatted, priceUah, badge }.'
        ],
        examples: 'formatProductCards([{ id: 1, name: "Мишка", priceUsd: 10, inStock: true }], 40, 20)',
        theoryHint: '💡 <b>Форматування чисел:</b> Використовуйте Math.round(val * 100) / 100 для точного збереження двох знаків копійок.',
        starterCode: `export function formatProductCards(products, exchangeRate, vatPercent = 20) {\n  // TODO: Напиши свій розв'язок\n  return [];\n}`
      },
      {
        id: '2.3',
        name: 'anonymizeUsers',
        title: 'Маскування персональних даних (GDPR)',
        level: 'Середній рівень',
        goal: 'Знеособити список користувачів: замаскувати email, телефон та скоротити прізвище.',
        requirements: [
          'email: перша літера + "***@" + домен.',
          'phone: перші 4 цифри + "******" + останні 2 цифри.',
          'maskedName: Імʼя + перша літера прізвища з крапкою.'
        ],
        examples: 'anonymizeUsers([{ fullName: "Іван Франко", email: "ivan@franko.ua", phone: "+380991234567" }])',
        theoryHint: '💡 <b>Робота з рядками:</b> Використовуйте методи .split("@"), .slice(0, 4) та .split(" ") для розбиття на складові частини.',
        starterCode: `export function anonymizeUsers(users) {\n  // TODO: Напиши свій розв'язок\n  return [];\n}`
      },
      {
        id: '2.4',
        name: 'normalizeGeoCoordinates',
        title: 'Нормалізація гео-точок для карти',
        level: 'Середній-Важкий рівень',
        goal: 'Привести координати з різних форматів (масив, рядок, обʼєкт) до єдиної структури { lat, lng, isValid }.',
        requirements: [
          'Підтримувати вхідні дані: [lat, lng], "lat, lng", { lat, lng }, { latitude, longitude }.',
          'Перевірити межі: lat від -90 до 90, lng від -180 до 180.',
          'Повернути числові значення lat та lng.'
        ],
        examples: 'normalizeGeoCoordinates([[50.45, 30.52], "49.83, 24.01"])',
        theoryHint: '💡 <b>Парсинг різних структур:</b> Використовуйте Array.isArray, перевірку typeof або оператор нульового злиття ?? для отримання значень.',
        starterCode: `export function normalizeGeoCoordinates(locations) {\n  // TODO: Напиши свій розв'язок\n  return [];\n}`
      }
    ]
  },
  {
    id: 3,
    title: 'Модуль 3: filter — Фільтрація та селекція',
    slug: '03-filter',
    tasks: [
      {
        id: '3.1',
        name: 'myFilter',
        title: 'Власна реалізація filter (Кастомний поліфіл)',
        level: 'Легкий рівень',
        goal: 'Створити новий масив з елементами, для яких предикат повертає істину.',
        requirements: [
          'Не використовувати вбудований array.filter.',
          'Повернути новий масив лише з відфільтрованими елементами.',
          'Оригінальний масив не мутувати.'
        ],
        examples: 'myFilter([1, 2, 3, 4], x => x % 2 === 0) => [2, 4]',
        theoryHint: '💡 <b>Предикат:</b> Викликайте predicate(item, index, array) всередині циклу; якщо вираз повертає truthy — додавайте елемент у результуючий масив.',
        starterCode: `export function myFilter(array, predicate) {\n  // TODO: Напиши свій розв'язок\n  return [];\n}`
      },
      {
        id: '3.2',
        name: 'filterActiveDiscounts',
        title: 'Фільтр діючих промокодів інтернет-магазину',
        level: 'Середній рівень',
        goal: 'Відфільтрувати промокоди, які активні, перевищують мінімальну знижку та ще не закінчилися.',
        requirements: [
          'isActive === true.',
          'discountPercent >= minDiscount.',
          'new Date(expiresAt) > currentDate.'
        ],
        examples: 'filterActiveDiscounts(coupons, 15, new Date("2026-06-01"))',
        theoryHint: '💡 <b>Порівняння дат:</b> Перетворюйте дату завершення в обʼєкт new Date(c.expiresAt) для коректного порівняння з поточною датою.',
        starterCode: `export function filterActiveDiscounts(coupons, minDiscount = 10, currentDate = new Date()) {\n  // TODO: Напиши свій розв'язок\n  return [];\n}`
      },
      {
        id: '3.3',
        name: 'sanitizeComments',
        title: 'Модерація коментарів від спаму та образ',
        level: 'Середній рівень',
        goal: 'Залишити лише чисті коментарі, видаливши заблоковані за скаргами, спамом або забороненими словами.',
        requirements: [
          'Відкинути коментарі зі скаргами reportsCount >= 3.',
          'Відкинути коментарі з довжиною після .trim() менше 3 символів.',
          'Відкинути коментарі, що містять заборонені слова (без урахування регістру).'
        ],
        examples: 'sanitizeComments([{ text: "Гарна робота!", reportsCount: 0 }], ["спам"])',
        theoryHint: '💡 <b>Нечутливий пошук слів:</b> Переводьте текст коментаря та заборонені слова в нижній регістр (.toLowerCase()) та перевіряйте методом .includes().',
        starterCode: `export function sanitizeComments(comments, bannedWords = []) {\n  // TODO: Напиши свій розв'язок\n  return [];\n}`
      },
      {
        id: '3.4',
        name: 'getAvailableRooms',
        title: 'Бронювання готельних номерів (Перетин інтервалів)',
        level: 'Важкий рівень',
        goal: 'Знайти вільні номери, у яких немає перетину дат із запланованим заїздом.',
        requirements: [
          'Перетин дат: booking.from < checkOut && booking.to > checkIn.',
          'Номер вільний, якщо жодне з його бронювань не конфліктує із запитом.',
          'Повернути масив вільних номерів.'
        ],
        examples: 'getAvailableRooms(rooms, "2026-07-16", "2026-07-20")',
        theoryHint: '💡 <b>Перетин відрізків:</b> Два діапазони дат [A, B] та [C, D] перетинаються тоді і тільки тоді, коли A < D та B > C.',
        starterCode: `export function getAvailableRooms(rooms, targetCheckIn, targetCheckOut) {\n  // TODO: Напиши свій розв'язок\n  return [];\n}`
      }
    ]
  },
  {
    id: 4,
    title: 'Модуль 4: find та findIndex — Точковий пошук сутності',
    slug: '04-find-findIndex',
    tasks: [
      {
        id: '4.1',
        name: 'myFind & myFindIndex',
        title: 'Власні реалізації find та findIndex',
        level: 'Легкий рівень',
        goal: 'Реалізувати точковий пошук першого збігу та його індексу з миттєвою зупинкою циклу.',
        requirements: [
          'myFind повертає елемент або undefined.',
          'myFindIndex повертає індекс або -1.',
          'Зупиняти цикл одразу після знаходження першого елемента.'
        ],
        examples: 'myFind([1, 2, 3], x => x > 1) => 2',
        theoryHint: '💡 <b>Раннє повернення:</b> Щойно predicate повертає true, відразу повертайте поточний елемент або індекс через return.',
        starterCode: `export function myFind(array, predicate) {\n  // TODO: Напиши свій розв'язок\n  return undefined;\n}\n\nexport function myFindIndex(array, predicate) {\n  // TODO: Напиши свій розв'язок\n  return -1;\n}`
      },
      {
        id: '4.2',
        name: 'findSecurityIncident',
        title: 'Пошук критичної аномалії в системних логах',
        level: 'Середній рівень',
        goal: 'Знайти перший підозрілий інцидент безпеки у журналі серверних подій.',
        requirements: [
          'Умови: statusCode === 500 і responseTimeMs > 2000, АБО statusCode === 401 і endpoint.includes("/admin"), АБО responseTimeMs > 10000.',
          'Повернути знайдений обʼєкт або null.'
        ],
        examples: 'findSecurityIncident(logs) => { timestamp: "...", ip: "..." }',
        theoryHint: '💡 <b>Комбіновані логічні умови:</b> Обʼєднайте правила через оператор логічного АБО (||) всередині колбеку методу find.',
        starterCode: `export function findSecurityIncident(serverLogs) {\n  // TODO: Напиши свій розв'язок\n  return null;\n}`
      },
      {
        id: '4.3',
        name: 'locateFlightSeat',
        title: 'Підбір ідеального місця в літаку',
        level: 'Середній рівень',
        goal: 'Знайти індекс та код першого доступного місця за вподобаннями пасажира.',
        requirements: [
          'Місце вільне (isAvailable === true) та потрібного класу.',
          'Враховувати побажання щодо вікна (needsWindow) та простору для ніг (needsLegroom).',
          'Повернути { seatIndex, seatCode } або { seatIndex: -1, seatCode: null }.'
        ],
        examples: 'locateFlightSeat(seats, { seatClass: "economy", needsWindow: true })',
        theoryHint: '💡 <b>findIndex для пошуку індексу:</b> Використовуйте findIndex, а потім за знайденим індексом зчитуйте код місця з масиву.',
        starterCode: `export function locateFlightSeat(seatsMap, preferences) {\n  // TODO: Напиши свій розв'язок\n  return { seatIndex: -1, seatCode: null };\n}`
      }
    ]
  },
  {
    id: 5,
    title: 'Модуль 5: some та every — Предикатна валідація',
    slug: '05-some-every',
    tasks: [
      {
        id: '5.1',
        name: 'mySome & myEvery',
        title: 'Власні реалізації some та every (Short-circuiting)',
        level: 'Легкий-Середній рівень',
        goal: 'Реалізувати перевірку умов з достроковим перериванням циклу.',
        requirements: [
          'mySome повертає true, якщо хоч один елемент відповідає умові; false для порожнього масиву.',
          'myEvery повертає true, якщо ВСІ відповідають умові; true для порожнього масиву.',
          'Миттєво виходити з циклу при першому вирішальному результаті.'
        ],
        examples: 'mySome([1, 2], x => x > 1) => true; myEvery([2, 4], x => x % 2 === 0) => true',
        theoryHint: '💡 <b>Short-circuiting:</b> У mySome якщо предикат true — негайно повертайте true. У myEvery якщо хоча б один false — негайно повертайте false.',
        starterCode: `export function mySome(array, predicate) {\n  // TODO: Напиши свій розв'язок\n  return false;\n}\n\nexport function myEvery(array, predicate) {\n  // TODO: Напиши свій розв'язок\n  return true;\n}`
      },
      {
        id: '5.2',
        name: 'validateRegistrationForm',
        title: 'Валідація форми реєстрації',
        level: 'Середній рівень',
        goal: 'Перевірити коректність обовʼязкових полів, мінімальної довжини та патернів регулярних виразів.',
        requirements: [
          'Перевірити required (не порожнє), minLength та pattern.test().',
          'Повернути { isValid: boolean, invalidFieldNames: string[] }.'
        ],
        examples: 'validateRegistrationForm(fields) => { isValid: true, invalidFieldNames: [] }',
        theoryHint: '💡 <b>Збір помилок:</b> Перебирайте поля форми та додавайте назви тих полів, які не пройшли валідацію, у масив помилок.',
        starterCode: `export function validateRegistrationForm(fields) {\n  // TODO: Напиши свій розв'язок\n  return { isValid: false, invalidFieldNames: [] };\n}`
      },
      {
        id: '5.3',
        name: 'hasVipAccess',
        title: 'Перевірка корпоративного VIP-доступу',
        level: 'Середній рівень',
        goal: 'Визначити, чи має команда право на вхід у VIP-зону через хоча б одного лідера.',
        requirements: [
          'Учасник має роль зі списку vipRoles АБО має бейдж "VIP_PASS".',
          'Повернути { hasAccess: boolean, authorizedBy: string | null }.'
        ],
        examples: 'hasVipAccess(team, ["speaker", "sponsor"])',
        theoryHint: '💡 <b>Пошук авторизатора:</b> Можна використати find для пошуку першого відповідного учасника та визначити наявність доступу за його присутністю.',
        starterCode: `export function hasVipAccess(teamMembers, vipRoles = ['speaker', 'sponsor']) {\n  // TODO: Напиши свій розв'язок\n  return { hasAccess: false, authorizedBy: null };\n}`
      },
      {
        id: '5.4',
        name: 'canAffordCart',
        title: 'Перевірка кредитного ліміту та кошика покупця',
        level: 'Середній-Важкий рівень',
        goal: 'Перевірити коректність цін, ліміти кількості товарів та достатність коштів з урахуванням кредитної лінії.',
        requirements: [
          'Ціни > 0, кількість <= maxPerOrder.',
          'Загальна вартість <= balance + creditLimit.',
          'Повернути причину відмови, якщо замовлення не проходить.'
        ],
        examples: 'canAffordCart(cart, { balance: 100, creditLimit: 50 })',
        theoryHint: '💡 <b>Послідовна перевірка:</b> Використовуйте метод some для швидкого виявлення помилок у кошику перед розрахунком фінальної суми.',
        starterCode: `export function canAffordCart(cartItems, wallet) {\n  // TODO: Напиши свій розв'язок\n  return { canCheckout: false, reason: null };\n}`
      }
    ]
  },
  {
    id: 6,
    title: 'Модуль 6: reduce — Агрегація та згортання даних',
    slug: '06-reduce',
    tasks: [
      {
        id: '6.1',
        name: 'myReduce',
        title: 'Власна реалізація reduce (Кастомний поліфіл)',
        level: 'Середній-Важкий рівень',
        goal: 'Реалізувати згортання масиву в акумулятор з підтримкою необовʼязкового initialValue.',
        requirements: [
          'Якщо initialValue передано — починати з нього та індексу 0.',
          'Якщо не передано — перший елемент стає акумулятором, стартувати з індексу 1.',
          'Порожній масив без initialValue викидає TypeError.'
        ],
        examples: 'myReduce([1, 2, 3], (acc, x) => acc + x, 0) => 6',
        theoryHint: '💡 <b>Початковий стан:</b> Перевіряйте arguments.length або наявність initialValue для визначення початкового значення акумулятора та стартового індексу циклу.',
        starterCode: `export function myReduce(array, callback, initialValue) {\n  // TODO: Напиши свій розв'язок\n}`
      },
      {
        id: '6.2',
        name: 'groupByCategory',
        title: 'Групування масиву обʼєктів за категорією',
        level: 'Середній рівень',
        goal: 'Перетворити плаский список товарів на обʼєкт зі списками за категоріями.',
        requirements: [
          'Ключі — назви категорій, значення — масиви елементів.',
          'Відсутнє поле групувати як "uncategorized".',
          'Використати метод reduce.'
        ],
        examples: 'groupByCategory([{ title: "Mac", category: "tech" }]) => { tech: [...] }',
        theoryHint: '💡 <b>Акумулятор-обʼєкт:</b> Починайте reduce з порожнього обʼєкта {}, ініціалізуйте масив під категорію (acc[cat] = acc[cat] || []) та пушіть поточний елемент.',
        starterCode: `export function groupByCategory(items, key = 'category') {\n  // TODO: Напиши свій розв'язок\n  return {};\n}`
      },
      {
        id: '6.3',
        name: 'calculateOrderMetrics',
        title: 'Зведена аналітика фінансових замовлень',
        level: 'Середній рівень',
        goal: 'За один прохід масиву замовлень порахувати виручку, успішні й скасовані замовлення та середній чек.',
        requirements: [
          'Враховувати гроші тільки для status === "completed".',
          'Розрахувати averageCheck з округленням до 2 знаків.',
          'Підрахувати загальну кількість проданих одиниць товарів.'
        ],
        examples: 'calculateOrderMetrics(orders) => { totalRevenue, completedCount, ... }',
        theoryHint: '💡 <b>Складний акумулятор:</b> Зберігайте в обʼєкті акумулятора кілька лічильників одночасно, оновлюючи їх залежно від статусу замовлення.',
        starterCode: `export function calculateOrderMetrics(orders) {\n  // TODO: Напиши свій розв'язок\n  return {\n    totalRevenue: 0,\n    completedCount: 0,\n    cancelledCount: 0,\n    averageCheck: 0,\n    totalItemsSold: 0\n  };\n}`
      },
      {
        id: '6.4',
        name: 'flattenQueryString',
        title: 'Генератор параметрів URL-рядка',
        level: 'Середній рівень',
        goal: 'Зібрати query-рядок пошуку з масиву фільтрів за допомогою reduce.',
        requirements: [
          'Ігнорувати null, undefined та порожні рядки.',
          'Кодувати значення через encodeURIComponent.',
          'Починати з "?" якщо є параметри, інакше повертати "".'
        ],
        examples: 'flattenQueryString([{ key: "page", value: 1 }]) => "?page=1"',
        theoryHint: '💡 <b>Збирання рядка:</b> Акумулюйте валідні пари "ключ=значення" у масив рядків, а потім обʼєднайте їх через .join("&").',
        starterCode: `export function flattenQueryString(params) {\n  // TODO: Напиши свій розв'язок\n  return '';\n}`
      }
    ]
  },
  {
    id: 7,
    title: 'Модуль 7: flat та flatMap — Згладжування структур',
    slug: '07-flat-flatMap',
    tasks: [
      {
        id: '7.1',
        name: 'myFlat & myFlatMap',
        title: 'Власні реалізації flat та flatMap',
        level: 'Середній-Важкий рівень',
        goal: 'Реалізувати рекурсивне згладжування масиву за глибиною та плоску проекцію flatMap.',
        requirements: [
          'myFlat(array, depth) рекурсивно згладжує вкладені масиви.',
          'myFlatMap(array, callback) відображає елементи та сплющує результат на 1 рівень.'
        ],
        examples: 'myFlat([1, [2, [3]]], 1) => [1, 2, [3]]',
        theoryHint: '💡 <b>Рекурсивне сплющення:</b> Для кожного елемента перевіряйте Array.isArray; якщо це масив і depth > 0 — рекурсивно викликайте функцію зі зменшеною глибиною depth - 1.',
        starterCode: `export function myFlat(array, depth = 1) {\n  // TODO: Напиши свій розв'язок\n  return [];\n}\n\nexport function myFlatMap(array, callback) {\n  // TODO: Напиши свій розв'язок\n  return [];\n}`
      },
      {
        id: '7.2',
        name: 'extractAllHashtags',
        title: 'Аналіз та агрегація хештегів соцмережі',
        level: 'Середній рівень',
        goal: 'Витягти з постів хештеги з тексту та готових полів, нормалізувати їх та відсортувати.',
        requirements: [
          'Знайти всі теги через regex або flatMap.',
          'Зробити lowercase, переконатися що кожен починається з "#".',
          'Повернути масив УНІКАЛЬНИХ тегів за алфавітом.'
        ],
        examples: 'extractAllHashtags(posts) => ["#coding", "#js", "#react"]',
        theoryHint: '💡 <b>Унікальність через Set:</b> Використовуйте new Set(tags) для миттєвого видалення дублікатів та .sort() для впорядкування.',
        starterCode: `export function extractAllHashtags(posts) {\n  // TODO: Напиши свій розв'язок\n  return [];\n}`
      },
      {
        id: '7.3',
        name: 'flattenCategoryTree',
        title: 'Зведення дерева категорій до плаского каталогу',
        level: 'Важкий рівень',
        goal: 'Перетворити ієрархічне дерево категорій із subcategories на плаский список з повним шляхом хлібних крихт.',
        requirements: [
          'Кожен елемент: { id, name, path: "Батько > Дитина > Нащадок" }.',
          'Підтримувати довільну глибину вкладеності через flatMap або рекурсію.'
        ],
        examples: 'flattenCategoryTree(tree) => [{ id: 1, name: "Одяг", path: "Одяг" }, ...]',
        theoryHint: '💡 <b>Передача батьківського шляху:</b> Передавайте parentPath у рекурсивний виклик для конкатенації " > " на кожному рівні дерева.',
        starterCode: `export function flattenCategoryTree(categoryTree, parentPath = '') {\n  // TODO: Напиши свій розв'язок\n  return [];\n}`
      }
    ]
  },
  {
    id: 8,
    title: 'Модуль 8: Boss Challenges — Пайплайни методів масивів',
    slug: '08-boss-pipelines',
    tasks: [
      {
        id: '8.1',
        name: 'getTopSpendersAnalytics',
        title: 'Аналітика топ-покупців (Pipelining)',
        level: 'Важкий рівень',
        goal: 'Скласти конвеєр filter -> reduce -> sort -> slice для обробки банківських транзакцій.',
        requirements: [
          'Враховувати лише успішні транзакції.',
          'Згрупувати сумарні витрати та кількість оплат за користувачем.',
          'Відсортувати за спаданням витрат та повернути топ N клієнтів.'
        ],
        examples: 'getTopSpendersAnalytics(transactions, 3) => [...]',
        theoryHint: '💡 <b>Ланцюжок трансформацій:</b> Спочатку відфільтруйте транзакції, потім зведіть їх у словник через reduce, візьміть Object.values, відсортуйте та візьміть зріз.',
        starterCode: `export function getTopSpendersAnalytics(transactions, topCount = 3) {\n  // TODO: Напиши свій розв'язок\n  return [];\n}`
      },
      {
        id: '8.2',
        name: 'generateMusicPlaylist',
        title: 'Розумний генератор плейлиста під настрій',
        level: 'Важкий рівень',
        goal: 'Сформувати музичний плейлист під настрій користувача з максимальним рейтингом у межах часового ліміту.',
        requirements: [
          'Фільтр за настроєм та цензурою (isExplicit).',
          'Сортування за спаданням рейтингу.',
          'Набір треків у межах ліміту maxDurationSec, форматування часу у формат "MM:SS".'
        ],
        examples: 'generateMusicPlaylist(library, { mood: "chill", maxDurationSec: 300 })',
        theoryHint: '💡 <b>Форматування часу:</b> Використовуйте .padStart(2, "0") для форматування хвилин і секунд з нулем попереду.',
        starterCode: `export function generateMusicPlaylist(library, config) {\n  // TODO: Напиши свій розв'язок\n  return {\n    playlist: [],\n    totalDurationSec: 0,\n    tracksCount: 0\n  };\n}`
      },
      {
        id: '8.3',
        name: 'optimizeInventoryLoot',
        title: 'Оптимізація інвентаря у рольовій грі (RPG Loot)',
        level: 'Важкий рівень (Бос)',
        goal: 'Упакувати рюкзак героя з обмеженою місткістю найціннішим лутом за питомою цінністю (цінність / вага).',
        requirements: [
          'Відсіяти предмети, вищі за рівень героя.',
          'Розрахувати ефективність (value / weight) та відсортувати за спаданням.',
          'Наповнити рюкзак, поки поточна вага не перевищує ліміт hero.maxWeight.'
        ],
        examples: 'optimizeInventoryLoot(chestItems, { level: 5, maxWeight: 10 })',
        theoryHint: '💡 <b>Жадібний алгоритм:</b> Сортування за коефіцієнтом корисності (value / weight) забезпечує максимальну цінність зібраного спорядження.',
        starterCode: `export function optimizeInventoryLoot(items, hero) {\n  // TODO: Напиши свій розв'язок\n  return {\n    backpackItems: [],\n    totalGold: 0,\n    totalWeight: 0,\n    freeCapacity: hero ? hero.maxWeight : 0\n  };\n}`
      }
    ]
  }
];
