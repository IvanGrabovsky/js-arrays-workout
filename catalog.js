// catalog.js — Повний каталог 165 завдань тренажера JS Arrays Mastery Workout
export const MODULES = [
  {
    "idx": 1,
    "id": "01-create-memory",
    "title": "Модуль 1: Створення масивів, індексація з 0 та пам'ять",
    "shortTitle": "1. Створення та пам'ять",
    "filename": "01-create-memory.js",
    "testFilename": "01-create-memory.test.js",
    "desc": "Що таке масив, цілі та завдання, відмінність від звичайних змінних, організація в оперативній памʼяті, індекси з 0, [], new Array()."
  },
  {
    "idx": 2,
    "id": "02-access-length",
    "title": "Модуль 2: Доступ до елементів, зміна значень та .length",
    "shortTitle": "2. Доступ та .length",
    "filename": "02-access-length.js",
    "testFilename": "02-access-length.test.js",
    "desc": "Звернення за індексом, останні елементи at(-1), зміна значень arr[i] = val, властивість length (обрізання та очищення)."
  },
  {
    "idx": 3,
    "id": "03-traversal",
    "title": "Модуль 3: Перебір масивів (for, while, for...of)",
    "shortTitle": "3. Перебір масивів",
    "filename": "03-traversal.js",
    "testFilename": "03-traversal.test.js",
    "desc": "Класичний for (let i = 0), зворотний перебір while, сучасний for...of, накопичення сум, пошук екстремумів."
  },
  {
    "idx": 4,
    "id": "04-stack-queue",
    "title": "Модуль 4: Операції стек та черга (push, pop, shift, unshift, includes, indexOf)",
    "shortTitle": "4. Стек, черга, пошук",
    "filename": "04-stack-queue.js",
    "testFilename": "04-stack-queue.test.js",
    "desc": "Додавання в кінець (push) та на початок (unshift), вилучення (pop, shift), перевірка наявності (includes, indexOf, lastIndexOf)."
  },
  {
    "idx": 5,
    "id": "05-subarrays",
    "title": "Модуль 5: Робота з підмасивами (slice, splice, concat)",
    "shortTitle": "5. Підмасиви (slice, splice, concat)",
    "filename": "05-subarrays.js",
    "testFilename": "05-subarrays.test.js",
    "desc": "Немутуюче копіювання slice, мутуюча вставка/заміна/видалення splice, обʼєднання кількох масивів через concat."
  },
  {
    "idx": 6,
    "id": "06-multidimensional",
    "title": "Модуль 6: Багатовимірні масиви (2D матриці, сітки, таблиці)",
    "shortTitle": "6. Багатовимірні масиви",
    "filename": "06-multidimensional.js",
    "testFilename": "06-multidimensional.test.js",
    "desc": "Створення матриць rows x cols, доступ matrix[r][c], перебір вкладеними циклами, суми рядків і колонок, транспонування, хрестики-нулики."
  },
  {
    "idx": 7,
    "id": "07-forEach",
    "title": "Модуль 7: forEach — Перебір та побічні ефекти",
    "shortTitle": "7. forEach",
    "filename": "07-forEach.js",
    "testFilename": "07-forEach.test.js",
    "desc": "Кастомний поліфіл myForEach, розсилка повідомлень підписникам, підрахунок голосів."
  },
  {
    "idx": 8,
    "id": "08-map",
    "title": "Модуль 8: map — Трансформація та проекції даних",
    "shortTitle": "8. map",
    "filename": "08-map.js",
    "testFilename": "08-map.test.js",
    "desc": "Кастомний поліфіл myMap, генератор E-commerce DTO карток, GDPR анонімізація, нормалізація координат."
  },
  {
    "idx": 9,
    "id": "09-filter",
    "title": "Модуль 9: filter — Фільтрація та селекція",
    "shortTitle": "9. filter",
    "filename": "09-filter.js",
    "testFilename": "09-filter.test.js",
    "desc": "Кастомний поліфіл myFilter, валідація промокодів, модерація коментарів від спаму, вільні номери готелю."
  },
  {
    "idx": 10,
    "id": "10-find-findIndex",
    "title": "Модуль 10: find та findIndex — Точковий пошук сутності",
    "shortTitle": "10. find / findIndex",
    "filename": "10-find-findIndex.js",
    "testFilename": "10-find-findIndex.test.js",
    "desc": "Кастомні поліфіли myFind / myFindIndex, детекція аномалій безпеки в логах, вибір місця в літаку."
  },
  {
    "idx": 11,
    "id": "11-some-every",
    "title": "Модуль 11: some та every — Предикатна валідація",
    "shortTitle": "11. some / every",
    "filename": "11-some-every.js",
    "testFilename": "11-some-every.test.js",
    "desc": "Кастомні поліфіли mySome / myEvery, валідація полів форми, перевірка бюджету кошика, VIP статус."
  },
  {
    "idx": 12,
    "id": "12-reduce",
    "title": "Модуль 12: reduce — Агрегація та згортання даних",
    "shortTitle": "12. reduce",
    "filename": "12-reduce.js",
    "testFilename": "12-reduce.test.js",
    "desc": "Кастомний поліфіл myReduce, групування покупок за категоріями, генератор рядків URL query, фінансові метрики."
  },
  {
    "idx": 13,
    "id": "13-flat-flatMap",
    "title": "Модуль 13: flat та flatMap — Згладжування структур",
    "shortTitle": "13. flat / flatMap",
    "filename": "13-flat-flatMap.js",
    "testFilename": "13-flat-flatMap.test.js",
    "desc": "Кастомні поліфіли myFlat / myFlatMap, витягування унікальних хештегів із постів, розкриття дерева категорій."
  },
  {
    "idx": 14,
    "id": "14-boss-pipelines",
    "title": "Модуль 14: Boss Challenges — Пайплайни методів масивів",
    "shortTitle": "14. Boss Challenges",
    "filename": "14-boss-pipelines.js",
    "testFilename": "14-boss-pipelines.test.js",
    "desc": "Комплексні комбіновані пайплайни: топ-покупці магазину, розумний плейлист, оптимізація RPG інвентаря."
  },
  {
    "idx": 15,
    "id": "15-dom-lists-chips-carts",
    "title": "Модуль 15: DOM & UI Компоненти (1D Списки, Фільтри, Кошики та Степпери)",
    "shortTitle": "15. DOM Списки та Кошики",
    "desc": "Практичні UI-компоненти на базі одновимірних масивів: динамічні списки ul/li, теги-чіпси, кошики покупок, хлібні крихти, черги тостів, степпери."
  },
  {
    "idx": 16,
    "id": "16-dom-tables-matrices-grids",
    "title": "Модуль 16: DOM & UI Компоненти (2D Матриці, Таблиці, Пагінація та Сітки)",
    "shortTitle": "16. DOM Таблиці та Матриці",
    "desc": "Інтерактивні інтерфейси на базі 2D масивів: динамічні таблиці <table>, сортування колонок, пагінація сторінок, теплові карти, шахівниці, крісла залу, канбан-дошки."
  }
];

export const ALL_TASKS = [
  {
    "moduleIdx": 1,
    "id": "1.1",
    "name": "createArrayLiteral",
    "title": "Створення масиву через квадратні дужки []",
    "level": "Початковий рівень",
    "goal": "Створити та повернути новий масив, що містить передані три елементи a, b та c за допомогою синтаксису квадратних дужок [].",
    "reqs": [
      "Використати синтаксис квадратних дужок [].",
      "Повернути масив [a, b, c]."
    ],
    "hint": "<b>Підказка до алгоритму:</b> Проаналізуйте вхідні структури. Зверніть увагу на перевірку граничних випадків (порожній масив, відсутні або нульові значення). Використайте найбільш підходящий метод масиву замість надмірно складних ручних циклів.<div class=\"hint-methods-wrap\" style=\"margin-top:12px; display:flex; flex-direction:column; gap:8px;\"><div class=\"hint-method-card\">💡 <b>Синтаксис <code>[a, b, c]</code>:</b> Літерал масиву — найпростіший та найшвидший спосіб створення списку елементів через кому всередині квадратних дужок.</div></div>",
    "starterParams": "a, b, c",
    "starterBody": "return [];",
    "tests": [
      {
        "expr": "createArrayLiteral(1, 2, 3)",
        "expected": [
          1,
          2,
          3
        ]
      },
      {
        "expr": "createArrayLiteral(\"яблуко\", \"груша\", \"слива\")",
        "expected": [
          "яблуко",
          "груша",
          "слива"
        ]
      },
      {
        "expr": "createArrayLiteral(true, null, 42)",
        "expected": [
          true,
          null,
          42
        ]
      }
    ]
  },
  {
    "moduleIdx": 1,
    "id": "1.2",
    "name": "createWithNewArray",
    "title": "Створення масиву через конструктор new Array()",
    "level": "Початковий рівень",
    "goal": "Створити масив заданого розміру length за допомогою конструктора new Array() та заповнити його початковим значенням fillValue.",
    "reqs": [
      "Використати new Array(length).fill(fillValue).",
      "Якщо length <= 0, повернути []."
    ],
    "hint": "<b>Підказка до алгоритму:</b> Проаналізуйте вхідні структури. Зверніть увагу на перевірку граничних випадків (порожній масив, відсутні або нульові значення). Використайте найбільш підходящий метод масиву замість надмірно складних ручних циклів.<div class=\"hint-methods-wrap\" style=\"margin-top:12px; display:flex; flex-direction:column; gap:8px;\"><div class=\"hint-method-card\">💡 <b>Конструктор <code>new Array(len)</code>:</b> Створює порожній каркас масиву заданої довжини <code>len</code>. Щоб заповнити його значеннями за замовчуванням, використовуйте ланцюжок <code>new Array(len).fill(value)</code>.</div></div>",
    "starterParams": "length, fillValue",
    "starterBody": "return [];",
    "tests": [
      {
        "expr": "createWithNewArray(3, 0)",
        "expected": [
          0,
          0,
          0
        ]
      },
      {
        "expr": "createWithNewArray(2, \"test\")",
        "expected": [
          "test",
          "test"
        ]
      },
      {
        "expr": "createWithNewArray(0, \"x\")",
        "expected": []
      }
    ]
  },
  {
    "moduleIdx": 1,
    "id": "1.3",
    "name": "createFromRange",
    "title": "Створення послідовності чисел через Array.from()",
    "level": "Базовий рівень",
    "goal": "Створити масив послідовних цілих чисел від start до end включно за допомогою статичного методу Array.from.",
    "reqs": [
      "Якщо start > end, повернути [].",
      "Використати Array.from({ length }, (_, i) => start + i)."
    ],
    "hint": "<b>Підказка до алгоритму:</b> Проаналізуйте вхідні структури. Зверніть увагу на перевірку граничних випадків (порожній масив, відсутні або нульові значення). Використайте найбільш підходящий метод масиву замість надмірно складних ручних циклів.<div class=\"hint-methods-wrap\" style=\"margin-top:12px; display:flex; flex-direction:column; gap:8px;\"><div class=\"hint-method-card\">💡 <b>Синтаксис <code>Array.from(obj, mapFn)</code>:</b> Статичний метод для генерації справжнього масиву. Зручно для створення діапазонів чисел: <code>Array.from({ length: count }, (_, i) => start + i)</code>.</div></div>",
    "starterParams": "start, end",
    "starterBody": "return [];",
    "tests": [
      {
        "expr": "createFromRange(1, 5)",
        "expected": [
          1,
          2,
          3,
          4,
          5
        ]
      },
      {
        "expr": "createFromRange(3, 3)",
        "expected": [
          3
        ]
      },
      {
        "expr": "createFromRange(5, 2)",
        "expected": []
      }
    ]
  },
  {
    "moduleIdx": 1,
    "id": "1.4",
    "name": "checkIsArray",
    "title": "Надійна перевірка на масив: Array.isArray vs typeof",
    "level": "Початковий рівень",
    "goal": "Перевірити, чи є передане значення справжнім масивом за допомогою Array.isArray(). Повернути рядок \"array\" або \"not_array\".",
    "reqs": [
      "typeof [] у JS повертає \"object\", тому завжди використовують Array.isArray().",
      "Повернути \"array\" якщо масив, інакше \"not_array\"."
    ],
    "hint": "<b>Підказка до алгоритму:</b> Проаналізуйте вхідні структури. Зверніть увагу на перевірку граничних випадків (порожній масив, відсутні або нульові значення). Використайте найбільш підходящий метод масиву замість надмірно складних ручних циклів.<div class=\"hint-methods-wrap\" style=\"margin-top:12px; display:flex; flex-direction:column; gap:8px;\"><div class=\"hint-method-card\">💡 <b>Синтаксис <code>Array.isArray(value)</code>:</b> Надійна перевірка на масив. Звичайний оператор <code>typeof []</code> повертає <code>\"object\"</code>, тому для масивів використовують лише <code>Array.isArray(x)</code>.</div></div>",
    "starterParams": "value",
    "starterBody": "return \"not_array\";",
    "tests": [
      {
        "expr": "checkIsArray([1, 2])",
        "expected": "array"
      },
      {
        "expr": "checkIsArray({ a: 1 })",
        "expected": "not_array"
      },
      {
        "expr": "checkIsArray(\"рядок\")",
        "expected": "not_array"
      },
      {
        "expr": "checkIsArray(null)",
        "expected": "not_array"
      }
    ]
  },
  {
    "moduleIdx": 1,
    "id": "1.5",
    "name": "arrayPassByReference",
    "title": "Масиви в памʼяті: передача за посиланням",
    "level": "Базовий рівень",
    "goal": "Продемонструвати передачу масиву за посиланням (by reference): функція змінює перший елемент переданого масиву arr[0] = newValue та повертає його ж.",
    "reqs": [
      "Змінити перший елемент переданого масиву arr.",
      "Повернути той самий мутований масив."
    ],
    "hint": "<b>Підказка до алгоритму:</b> Проаналізуйте вхідні структури. Зверніть увагу на перевірку граничних випадків (порожній масив, відсутні або нульові значення). Використайте найбільш підходящий метод масиву замість надмірно складних ручних циклів.<div class=\"hint-methods-wrap\" style=\"margin-top:12px; display:flex; flex-direction:column; gap:8px;\"><div class=\"hint-method-card\">💡 <b>Властивість <code>arr.length</code>:</b> Відображає поточну кількість елементів у масиві. Останній допустимий індекс завжди дорівнює <code>arr.length - 1</code>. Примусове присвоєння <code>arr.length = 0</code> повністю очищує масив.</div><div class=\"hint-method-card\">💡 <b>Доступ за індексом <code>arr[i]</code>:</b> Індексація починається з <b>0</b>. Перший елемент — <code>arr[0]</code>, другий — <code>arr[1]</code>. Зміна значення: <code>arr[i] = newValue;</code>. Якщо елемента не існує — повертається <code>undefined</code>.</div></div>",
    "starterParams": "arr, newValue",
    "starterBody": "return arr;",
    "tests": [
      {
        "expr": "arrayPassByReference([10, 20], 99)",
        "expected": [
          99,
          20
        ]
      },
      {
        "expr": "arrayPassByReference([\"a\", \"b\"], \"z\")",
        "expected": [
          "z",
          "b"
        ]
      },
      {
        "expr": "arrayPassByReference([], 5)",
        "expected": []
      }
    ]
  },
  {
    "moduleIdx": 1,
    "id": "1.6",
    "name": "shallowCopyArray",
    "title": "Створення незалежної неглибокої копії (Shallow Copy)",
    "level": "Базовий рівень",
    "goal": "Створити незалежну копію масиву arr через спред-оператор [...arr] і змінити в ній останній елемент на newValue, не мутуючи оригінал.",
    "reqs": [
      "Оригінальний масив не повинен змінитися.",
      "Повернути обʼєкт { copy, originalUnchanged: boolean }."
    ],
    "hint": "<b>Підказка до алгоритму:</b> Проаналізуйте вхідні структури. Зверніть увагу на перевірку граничних випадків (порожній масив, відсутні або нульові значення). Використайте найбільш підходящий метод масиву замість надмірно складних ручних циклів.<div class=\"hint-methods-wrap\" style=\"margin-top:12px; display:flex; flex-direction:column; gap:8px;\"><div class=\"hint-method-card\">💡 <b>Властивість <code>arr.length</code>:</b> Відображає поточну кількість елементів у масиві. Останній допустимий індекс завжди дорівнює <code>arr.length - 1</code>. Примусове присвоєння <code>arr.length = 0</code> повністю очищує масив.</div><div class=\"hint-method-card\">💡 <b>Синтаксис <code>arr.at(index)</code>:</b> Сучасний метод доступу до елементів. Дозволяє передавати від'ємні індекси: <code>arr.at(-1)</code> повертає останній елемент, а <code>arr.at(-2)</code> — передостанній.</div></div>",
    "starterParams": "arr, newValue",
    "starterBody": "return { copy: [], originalUnchanged: false };",
    "tests": [
      {
        "expr": "shallowCopyArray([1, 2, 3], 99)",
        "expected": {
          "copy": [
            1,
            2,
            99
          ],
          "originalUnchanged": true
        }
      },
      {
        "expr": "shallowCopyArray([\"cat\", \"dog\"], \"lion\")",
        "expected": {
          "copy": [
            "cat",
            "lion"
          ],
          "originalUnchanged": true
        }
      }
    ]
  },
  {
    "moduleIdx": 1,
    "id": "1.7",
    "name": "emptyArrayTechniques",
    "title": "Швидке очищення масиву через length = 0",
    "level": "Початковий рівень",
    "goal": "Очистити всі елементи масиву на місці, встановивши arr.length = 0, та повернути його.",
    "reqs": [
      "Мутувати переданий масив через arr.length = 0.",
      "Повернути очищений масив."
    ],
    "hint": "<b>Підказка до алгоритму:</b> Проаналізуйте вхідні структури. Зверніть увагу на перевірку граничних випадків (порожній масив, відсутні або нульові значення). Використайте найбільш підходящий метод масиву замість надмірно складних ручних циклів.<div class=\"hint-methods-wrap\" style=\"margin-top:12px; display:flex; flex-direction:column; gap:8px;\"><div class=\"hint-method-card\">💡 <b>Властивість <code>arr.length</code>:</b> Відображає поточну кількість елементів у масиві. Останній допустимий індекс завжди дорівнює <code>arr.length - 1</code>. Примусове присвоєння <code>arr.length = 0</code> повністю очищує масив.</div></div>",
    "starterParams": "arr",
    "starterBody": "return [];",
    "tests": [
      {
        "expr": "emptyArrayTechniques([1, 2, 3, 4])",
        "expected": []
      },
      {
        "expr": "emptyArrayTechniques([\"hello\"])",
        "expected": []
      }
    ]
  },
  {
    "moduleIdx": 1,
    "id": "1.8",
    "name": "arrayWithMixedTypes",
    "title": "Масив зі змішаними типами даних",
    "level": "Початковий рівень",
    "goal": "У JavaScript масив може зберігати елементи будь-яких типів. Створити масив, що містить: число id, рядок name, boolean isActive та вкладений масив tags.",
    "reqs": [
      "Повернути [id, name, isActive, tags]."
    ],
    "hint": "<b>Підказка до алгоритму:</b> Проаналізуйте вхідні структури. Зверніть увагу на перевірку граничних випадків (порожній масив, відсутні або нульові значення). Використайте найбільш підходящий метод масиву замість надмірно складних ручних циклів.<div class=\"hint-methods-wrap\" style=\"margin-top:12px; display:flex; flex-direction:column; gap:8px;\"><div class=\"hint-method-card\">💡 <b>Синтаксис <code>[a, b, c]</code>:</b> Літерал масиву — найпростіший та найшвидший спосіб створення списку елементів через кому всередині квадратних дужок.</div></div>",
    "starterParams": "id, name, isActive, tags",
    "starterBody": "return [];",
    "tests": [
      {
        "expr": "arrayWithMixedTypes(101, \"Іван\", true, [\"admin\", \"dev\"])",
        "expected": [
          101,
          "Іван",
          true,
          [
            "admin",
            "dev"
          ]
        ]
      },
      {
        "expr": "arrayWithMixedTypes(202, \"Анна\", false, [])",
        "expected": [
          202,
          "Анна",
          false,
          []
        ]
      }
    ]
  },
  {
    "moduleIdx": 1,
    "id": "1.9",
    "name": "arrayMemorySimulation",
    "title": "Моделювання обчислення фізичної адреси елемента",
    "level": "Середній рівень",
    "goal": "У памʼяті неперервний масив має базову адресу baseAddress та фіксований розмір кожного елемента elementSize (наприклад 8 байтів). Обчислити адресу i-го елемента за формулою: address = baseAddress + index * elementSize.",
    "reqs": [
      "Для індексу < 0 повернути null.",
      "Повернути числову адресу памʼяті."
    ],
    "hint": "<b>Підказка до алгоритму:</b> Проаналізуйте вхідні структури. Зверніть увагу на перевірку граничних випадків (порожній масив, відсутні або нульові значення). Використайте найбільш підходящий метод масиву замість надмірно складних ручних циклів.<div class=\"hint-methods-wrap\" style=\"margin-top:12px; display:flex; flex-direction:column; gap:8px;\"><div class=\"hint-method-card\">💡 <b>Доступ за індексом <code>arr[i]</code>:</b> Індексація починається з <b>0</b>. Перший елемент — <code>arr[0]</code>, другий — <code>arr[1]</code>. Зміна значення: <code>arr[i] = newValue;</code>. Якщо елемента не існує — повертається <code>undefined</code>.</div></div>",
    "starterParams": "baseAddress, index, elementSize",
    "starterBody": "return null;",
    "tests": [
      {
        "expr": "arrayMemorySimulation(1000, 0, 8)",
        "expected": 1000
      },
      {
        "expr": "arrayMemorySimulation(1000, 3, 8)",
        "expected": 1024
      },
      {
        "expr": "arrayMemorySimulation(2048, -1, 4)",
        "expected": null
      }
    ]
  },
  {
    "moduleIdx": 1,
    "id": "1.10",
    "name": "sparseArrayDetection",
    "title": "Виявлення розрідженого масиву (Sparse Array)",
    "level": "Середній рівень",
    "goal": "Розріджений масив містить пропущені індекси (дірки), де реальна кількість ключів менша за length (наприклад [1, , 3]). Визначити, чи є масив розрідженим.",
    "reqs": [
      "Порівняти Object.keys(arr).length із arr.length.",
      "Повернути true, якщо є порожні дірки, інакше false."
    ],
    "hint": "<b>Підказка до алгоритму:</b> Проаналізуйте вхідні структури. Зверніть увагу на перевірку граничних випадків (порожній масив, відсутні або нульові значення). Використайте найбільш підходящий метод масиву замість надмірно складних ручних циклів.<div class=\"hint-methods-wrap\" style=\"margin-top:12px; display:flex; flex-direction:column; gap:8px;\"><div class=\"hint-method-card\">💡 <b>Властивість <code>arr.length</code>:</b> Відображає поточну кількість елементів у масиві. Останній допустимий індекс завжди дорівнює <code>arr.length - 1</code>. Примусове присвоєння <code>arr.length = 0</code> повністю очищує масив.</div><div class=\"hint-method-card\">💡 <b>Доступ за індексом <code>arr[i]</code>:</b> Індексація починається з <b>0</b>. Перший елемент — <code>arr[0]</code>, другий — <code>arr[1]</code>. Зміна значення: <code>arr[i] = newValue;</code>. Якщо елемента не існує — повертається <code>undefined</code>.</div></div>",
    "starterParams": "arr",
    "starterBody": "return false;",
    "tests": [
      {
        "expr": "sparseArrayDetection([1, 2, 3])",
        "expected": false
      },
      {
        "expr": "sparseArrayDetection(new Array(3))",
        "expected": true
      },
      {
        "expr": "sparseArrayDetection([1, , 3])",
        "expected": true
      }
    ]
  },
  {
    "moduleIdx": 2,
    "id": "2.1",
    "name": "getFirstAndLast",
    "title": "Отримання першого та останнього елемента",
    "level": "Початковий рівень",
    "goal": "Отримати перший елемент arr[0], останній елемент arr[arr.length - 1] та довжину arr.length у вигляді обʼєкта.",
    "reqs": [
      "Якщо масив порожній, first і last мають бути undefined, а length = 0.",
      "Повернути { first, last, length }."
    ],
    "hint": "<b>Підказка до алгоритму:</b> Проаналізуйте вхідні структури. Зверніть увагу на перевірку граничних випадків (порожній масив, відсутні або нульові значення). Використайте найбільш підходящий метод масиву замість надмірно складних ручних циклів.<div class=\"hint-methods-wrap\" style=\"margin-top:12px; display:flex; flex-direction:column; gap:8px;\"><div class=\"hint-method-card\">💡 <b>Властивість <code>arr.length</code>:</b> Відображає поточну кількість елементів у масиві. Останній допустимий індекс завжди дорівнює <code>arr.length - 1</code>. Примусове присвоєння <code>arr.length = 0</code> повністю очищує масив.</div><div class=\"hint-method-card\">💡 <b>Синтаксис <code>arr.at(index)</code>:</b> Сучасний метод доступу до елементів. Дозволяє передавати від'ємні індекси: <code>arr.at(-1)</code> повертає останній елемент, а <code>arr.at(-2)</code> — передостанній.</div><div class=\"hint-method-card\">💡 <b>Доступ за індексом <code>arr[i]</code>:</b> Індексація починається з <b>0</b>. Перший елемент — <code>arr[0]</code>, другий — <code>arr[1]</code>. Зміна значення: <code>arr[i] = newValue;</code>. Якщо елемента не існує — повертається <code>undefined</code>.</div></div>",
    "starterParams": "arr",
    "starterBody": "return { first: undefined, last: undefined, length: 0 };",
    "tests": [
      {
        "expr": "getFirstAndLast([10, 20, 30, 40])",
        "expected": {
          "first": 10,
          "last": 40,
          "length": 4
        }
      },
      {
        "expr": "getFirstAndLast([\"єдиний\"])",
        "expected": {
          "first": "єдиний",
          "last": "єдиний",
          "length": 1
        }
      },
      {
        "expr": "getFirstAndLast([])",
        "expected": {
          "first": null,
          "last": null,
          "length": 0
        }
      }
    ]
  },
  {
    "moduleIdx": 2,
    "id": "2.2",
    "name": "getAtNegativeOffset",
    "title": "Доступ до елементів з кінця через arr.at()",
    "level": "Початковий рівень",
    "goal": "Отримати елемент за негативним індексом за допомогою сучасного методу arr.at(offset) або формули arr[arr.length + offset].",
    "reqs": [
      "Для offset = -1 повертається останній елемент, для -2 — передостанній.",
      "Якщо елемента немає, повернути undefined."
    ],
    "hint": "<b>Підказка до алгоритму:</b> Проаналізуйте вхідні структури. Зверніть увагу на перевірку граничних випадків (порожній масив, відсутні або нульові значення). Використайте найбільш підходящий метод масиву замість надмірно складних ручних циклів.<div class=\"hint-methods-wrap\" style=\"margin-top:12px; display:flex; flex-direction:column; gap:8px;\"><div class=\"hint-method-card\">💡 <b>Властивість <code>arr.length</code>:</b> Відображає поточну кількість елементів у масиві. Останній допустимий індекс завжди дорівнює <code>arr.length - 1</code>. Примусове присвоєння <code>arr.length = 0</code> повністю очищує масив.</div><div class=\"hint-method-card\">💡 <b>Синтаксис <code>arr.at(index)</code>:</b> Сучасний метод доступу до елементів. Дозволяє передавати від'ємні індекси: <code>arr.at(-1)</code> повертає останній елемент, а <code>arr.at(-2)</code> — передостанній.</div><div class=\"hint-method-card\">💡 <b>Доступ за індексом <code>arr[i]</code>:</b> Індексація починається з <b>0</b>. Перший елемент — <code>arr[0]</code>, другий — <code>arr[1]</code>. Зміна значення: <code>arr[i] = newValue;</code>. Якщо елемента не існує — повертається <code>undefined</code>.</div></div>",
    "starterParams": "arr, offset",
    "starterBody": "return undefined;",
    "tests": [
      {
        "expr": "getAtNegativeOffset([\"a\", \"b\", \"c\", \"d\"], -1)",
        "expected": "d"
      },
      {
        "expr": "getAtNegativeOffset([\"a\", \"b\", \"c\", \"d\"], -2)",
        "expected": "c"
      },
      {
        "expr": "getAtNegativeOffset([\"a\", \"b\"], -5)"
      }
    ]
  },
  {
    "moduleIdx": 2,
    "id": "2.3",
    "name": "updateElementAtIndex",
    "title": "Зміна значення елемента за індексом",
    "level": "Початковий рівень",
    "goal": "Створити копію масиву arr, замінити в ній елемент за індексом index на newValue та повернути оновлений масив (не мутуючи оригінал).",
    "reqs": [
      "Якщо index виходить за межі 0..length-1, повернути копію без змін."
    ],
    "hint": "<b>Підказка до алгоритму:</b> Проаналізуйте вхідні структури. Зверніть увагу на перевірку граничних випадків (порожній масив, відсутні або нульові значення). Використайте найбільш підходящий метод масиву замість надмірно складних ручних циклів.<div class=\"hint-methods-wrap\" style=\"margin-top:12px; display:flex; flex-direction:column; gap:8px;\"><div class=\"hint-method-card\">💡 <b>Властивість <code>arr.length</code>:</b> Відображає поточну кількість елементів у масиві. Останній допустимий індекс завжди дорівнює <code>arr.length - 1</code>. Примусове присвоєння <code>arr.length = 0</code> повністю очищує масив.</div><div class=\"hint-method-card\">💡 <b>Доступ за індексом <code>arr[i]</code>:</b> Індексація починається з <b>0</b>. Перший елемент — <code>arr[0]</code>, другий — <code>arr[1]</code>. Зміна значення: <code>arr[i] = newValue;</code>. Якщо елемента не існує — повертається <code>undefined</code>.</div></div>",
    "starterParams": "arr, index, newValue",
    "starterBody": "return [...arr];",
    "tests": [
      {
        "expr": "updateElementAtIndex([1, 2, 3], 1, 99)",
        "expected": [
          1,
          99,
          3
        ]
      },
      {
        "expr": "updateElementAtIndex([\"x\", \"y\"], 0, \"z\")",
        "expected": [
          "z",
          "y"
        ]
      },
      {
        "expr": "updateElementAtIndex([1, 2], 5, 100)",
        "expected": [
          1,
          2
        ]
      }
    ]
  },
  {
    "moduleIdx": 2,
    "id": "2.4",
    "name": "swapElements",
    "title": "Обмін двох елементів місцями за індексами",
    "level": "Базовий рівень",
    "goal": "Поміняти місцями елементи за індексами i та j у масиві (створивши новий масив).",
    "reqs": [
      "Якщо будь-який індекс некоректний, повернути копію масиву без змін."
    ],
    "hint": "<b>Підказка до алгоритму:</b> Проаналізуйте вхідні структури. Зверніть увагу на перевірку граничних випадків (порожній масив, відсутні або нульові значення). Використайте найбільш підходящий метод масиву замість надмірно складних ручних циклів.<div class=\"hint-methods-wrap\" style=\"margin-top:12px; display:flex; flex-direction:column; gap:8px;\"><div class=\"hint-method-card\">💡 <b>Властивість <code>arr.length</code>:</b> Відображає поточну кількість елементів у масиві. Останній допустимий індекс завжди дорівнює <code>arr.length - 1</code>. Примусове присвоєння <code>arr.length = 0</code> повністю очищує масив.</div><div class=\"hint-method-card\">💡 <b>Доступ за індексом <code>arr[i]</code>:</b> Індексація починається з <b>0</b>. Перший елемент — <code>arr[0]</code>, другий — <code>arr[1]</code>. Зміна значення: <code>arr[i] = newValue;</code>. Якщо елемента не існує — повертається <code>undefined</code>.</div></div>",
    "starterParams": "arr, i, j",
    "starterBody": "return [...arr];",
    "tests": [
      {
        "expr": "swapElements([\"перший\", \"другий\", \"третій\"], 0, 2)",
        "expected": [
          "третій",
          "другий",
          "перший"
        ]
      },
      {
        "expr": "swapElements([1, 2, 3], 0, 1)",
        "expected": [
          2,
          1,
          3
        ]
      },
      {
        "expr": "swapElements([1, 2], 0, 9)",
        "expected": [
          1,
          2
        ]
      }
    ]
  },
  {
    "moduleIdx": 2,
    "id": "2.5",
    "name": "truncateArray",
    "title": "Обрізання довжини масиву через .length",
    "level": "Початковий рівень",
    "goal": "Зменшити довжину масиву до newLength елементів шляхом прямого присвоєння властивості length.",
    "reqs": [
      "Створити копію масиву, встановити copy.length = newLength і повернути її."
    ],
    "hint": "<b>Підказка до алгоритму:</b> Проаналізуйте вхідні структури. Зверніть увагу на перевірку граничних випадків (порожній масив, відсутні або нульові значення). Використайте найбільш підходящий метод масиву замість надмірно складних ручних циклів.<div class=\"hint-methods-wrap\" style=\"margin-top:12px; display:flex; flex-direction:column; gap:8px;\"><div class=\"hint-method-card\">💡 <b>Властивість <code>arr.length</code>:</b> Відображає поточну кількість елементів у масиві. Останній допустимий індекс завжди дорівнює <code>arr.length - 1</code>. Примусове присвоєння <code>arr.length = 0</code> повністю очищує масив.</div></div>",
    "starterParams": "arr, newLength",
    "starterBody": "return [];",
    "tests": [
      {
        "expr": "truncateArray([1, 2, 3, 4, 5], 3)",
        "expected": [
          1,
          2,
          3
        ]
      },
      {
        "expr": "truncateArray([\"a\", \"b\", \"c\"], 1)",
        "expected": [
          "a"
        ]
      },
      {
        "expr": "truncateArray([10, 20], 0)",
        "expected": []
      }
    ]
  },
  {
    "moduleIdx": 2,
    "id": "2.6",
    "name": "safeGetWithDefault",
    "title": "Безпечне зчитування з дефолтним значенням",
    "level": "Початковий рівень",
    "goal": "Зчитати елемент масиву arr[index]. Якщо елемент дорівнює undefined або індекс поза межами, повернути defaultValue.",
    "reqs": [
      "Повернути arr[index] ?? defaultValue."
    ],
    "hint": "<b>Підказка до алгоритму:</b> Проаналізуйте вхідні структури. Зверніть увагу на перевірку граничних випадків (порожній масив, відсутні або нульові значення). Використайте найбільш підходящий метод масиву замість надмірно складних ручних циклів.<div class=\"hint-methods-wrap\" style=\"margin-top:12px; display:flex; flex-direction:column; gap:8px;\"><div class=\"hint-method-card\">💡 <b>Доступ за індексом <code>arr[i]</code>:</b> Індексація починається з <b>0</b>. Перший елемент — <code>arr[0]</code>, другий — <code>arr[1]</code>. Зміна значення: <code>arr[i] = newValue;</code>. Якщо елемента не існує — повертається <code>undefined</code>.</div></div>",
    "starterParams": "arr, index, defaultValue",
    "starterBody": "return defaultValue;",
    "tests": [
      {
        "expr": "safeGetWithDefault([\"admin\", \"editor\"], 1, \"guest\")",
        "expected": "editor"
      },
      {
        "expr": "safeGetWithDefault([\"admin\", \"editor\"], 5, \"guest\")",
        "expected": "guest"
      },
      {
        "expr": "safeGetWithDefault([], 0, \"empty\")",
        "expected": "empty"
      }
    ]
  },
  {
    "moduleIdx": 2,
    "id": "2.7",
    "name": "getMiddleElement",
    "title": "Отримання центрального елемента масиву",
    "level": "Базовий рівень",
    "goal": "Знайти центральний елемент масиву з непарною довжиною або лівий із двох центральних для парної довжини: index = Math.floor((arr.length - 1) / 2).",
    "reqs": [
      "Якщо масив порожній, повернути null."
    ],
    "hint": "<b>Підказка до алгоритму:</b> Проаналізуйте вхідні структури. Зверніть увагу на перевірку граничних випадків (порожній масив, відсутні або нульові значення). Використайте найбільш підходящий метод масиву замість надмірно складних ручних циклів.<div class=\"hint-methods-wrap\" style=\"margin-top:12px; display:flex; flex-direction:column; gap:8px;\"><div class=\"hint-method-card\">💡 <b>Властивість <code>arr.length</code>:</b> Відображає поточну кількість елементів у масиві. Останній допустимий індекс завжди дорівнює <code>arr.length - 1</code>. Примусове присвоєння <code>arr.length = 0</code> повністю очищує масив.</div></div>",
    "starterParams": "arr",
    "starterBody": "return null;",
    "tests": [
      {
        "expr": "getMiddleElement([10, 20, 30, 40, 50])",
        "expected": 30
      },
      {
        "expr": "getMiddleElement([10, 20, 30, 40])",
        "expected": 20
      },
      {
        "expr": "getMiddleElement([])",
        "expected": null
      }
    ]
  },
  {
    "moduleIdx": 2,
    "id": "2.8",
    "name": "setLastElement",
    "title": "Оновлення значення останнього елемента",
    "level": "Початковий рівень",
    "goal": "Замінити значення останнього елемента масиву на newLast. Якщо масив порожній, додати його першим.",
    "reqs": [
      "Повернути новий масив без мутації вхідного."
    ],
    "hint": "<b>Підказка до алгоритму:</b> Проаналізуйте вхідні структури. Зверніть увагу на перевірку граничних випадків (порожній масив, відсутні або нульові значення). Використайте найбільш підходящий метод масиву замість надмірно складних ручних циклів.<div class=\"hint-methods-wrap\" style=\"margin-top:12px; display:flex; flex-direction:column; gap:8px;\"><div class=\"hint-method-card\">💡 <b>Властивість <code>arr.length</code>:</b> Відображає поточну кількість елементів у масиві. Останній допустимий індекс завжди дорівнює <code>arr.length - 1</code>. Примусове присвоєння <code>arr.length = 0</code> повністю очищує масив.</div><div class=\"hint-method-card\">💡 <b>Синтаксис <code>arr.push(el)</code>:</b> Додає новий елемент у самий <i>кінець</i> масиву та повертає нову довжину. Змінює (мутує) оригінальний масив. Швидка операція зі складністю <b>O(1)</b>.</div></div>",
    "starterParams": "arr, newLast",
    "starterBody": "return [];",
    "tests": [
      {
        "expr": "setLastElement([1, 2, 3], 99)",
        "expected": [
          1,
          2,
          99
        ]
      },
      {
        "expr": "setLastElement([], \"перший\")",
        "expected": [
          "перший"
        ]
      }
    ]
  },
  {
    "moduleIdx": 2,
    "id": "2.9",
    "name": "cyclicIndexAccess",
    "title": "Циклічний доступ до елементів за модулем",
    "level": "Базовий рівень",
    "goal": "Отримати елемент масиву за довільним індексом step, навіть якщо step перевищує довжину масиву, використовуючи оператор остачі %: index = ((step % length) + length) % length.",
    "reqs": [
      "Підтримувати також негативні значення step.",
      "Для порожнього масиву повернути undefined."
    ],
    "hint": "<b>Підказка до алгоритму:</b> Проаналізуйте вхідні структури. Зверніть увагу на перевірку граничних випадків (порожній масив, відсутні або нульові значення). Використайте найбільш підходящий метод масиву замість надмірно складних ручних циклів.<div class=\"hint-methods-wrap\" style=\"margin-top:12px; display:flex; flex-direction:column; gap:8px;\"><div class=\"hint-method-card\">💡 <b>Властивість <code>arr.length</code>:</b> Відображає поточну кількість елементів у масиві. Останній допустимий індекс завжди дорівнює <code>arr.length - 1</code>. Примусове присвоєння <code>arr.length = 0</code> повністю очищує масив.</div><div class=\"hint-method-card\">💡 <b>Доступ за індексом <code>arr[i]</code>:</b> Індексація починається з <b>0</b>. Перший елемент — <code>arr[0]</code>, другий — <code>arr[1]</code>. Зміна значення: <code>arr[i] = newValue;</code>. Якщо елемента не існує — повертається <code>undefined</code>.</div></div>",
    "starterParams": "arr, step",
    "starterBody": "return undefined;",
    "tests": [
      {
        "expr": "cyclicIndexAccess([\"Пн\", \"Вт\", \"Ср\"], 4)",
        "expected": "Вт"
      },
      {
        "expr": "cyclicIndexAccess([\"Пн\", \"Вт\", \"Ср\"], 0)",
        "expected": "Пн"
      },
      {
        "expr": "cyclicIndexAccess([\"Пн\", \"Вт\", \"Ср\"], -1)",
        "expected": "Ср"
      }
    ]
  },
  {
    "moduleIdx": 2,
    "id": "2.10",
    "name": "compareArrayLengths",
    "title": "Порівняння довжини двох масивів",
    "level": "Початковий рівень",
    "goal": "Порівняти розміри двох масивів arr1 та arr2. Повернути рядок \"first_longer\", \"second_longer\" або \"equal\".",
    "reqs": [
      "Повернути відповідний рядок."
    ],
    "hint": "<b>Підказка до алгоритму:</b> Проаналізуйте вхідні структури. Зверніть увагу на перевірку граничних випадків (порожній масив, відсутні або нульові значення). Використайте найбільш підходящий метод масиву замість надмірно складних ручних циклів.<div class=\"hint-methods-wrap\" style=\"margin-top:12px; display:flex; flex-direction:column; gap:8px;\"><div class=\"hint-method-card\">💡 <b>Властивість <code>arr.length</code>:</b> Відображає поточну кількість елементів у масиві. Останній допустимий індекс завжди дорівнює <code>arr.length - 1</code>. Примусове присвоєння <code>arr.length = 0</code> повністю очищує масив.</div></div>",
    "starterParams": "arr1, arr2",
    "starterBody": "return \"equal\";",
    "tests": [
      {
        "expr": "compareArrayLengths([1, 2, 3], [1, 2])",
        "expected": "first_longer"
      },
      {
        "expr": "compareArrayLengths([\"a\"], [\"x\", \"y\"])",
        "expected": "second_longer"
      },
      {
        "expr": "compareArrayLengths([], [])",
        "expected": "equal"
      }
    ]
  },
  {
    "moduleIdx": 3,
    "id": "3.1",
    "name": "sumWithClassicFor",
    "title": "Сума чисел через for (let i = 0; i < length; i++)",
    "level": "Початковий рівень",
    "goal": "Обчислити суму всіх чисел у масиві numbers за допомогою класичного циклу for.",
    "reqs": [
      "Для порожнього масиву повернути 0."
    ],
    "hint": "<b>Підказка до алгоритму:</b> Проаналізуйте вхідні структури. Зверніть увагу на перевірку граничних випадків (порожній масив, відсутні або нульові значення). Використайте найбільш підходящий метод масиву замість надмірно складних ручних циклів.<div class=\"hint-methods-wrap\" style=\"margin-top:12px; display:flex; flex-direction:column; gap:8px;\"><div class=\"hint-method-card\">💡 <b>Властивість <code>arr.length</code>:</b> Відображає поточну кількість елементів у масиві. Останній допустимий індекс завжди дорівнює <code>arr.length - 1</code>. Примусове присвоєння <code>arr.length = 0</code> повністю очищує масив.</div><div class=\"hint-method-card\">💡 <b>Цикл <code>for (let i = 0; i < arr.length; i++)</code>:</b> Класичний перебір з лічильником <code>i</code>. Дає повний контроль над зміною елементів за індексом, кроком перебору або зворотним рухом.</div></div>",
    "starterParams": "numbers",
    "starterBody": "return 0;",
    "tests": [
      {
        "expr": "sumWithClassicFor([1, 2, 3, 4, 5])",
        "expected": 15
      },
      {
        "expr": "sumWithClassicFor([-10, 10, 5])",
        "expected": 5
      },
      {
        "expr": "sumWithClassicFor([])",
        "expected": 0
      }
    ]
  },
  {
    "moduleIdx": 3,
    "id": "3.2",
    "name": "reverseWithWhile",
    "title": "Реверсування масиву через цикл while",
    "level": "Базовий рівень",
    "goal": "Створити новий масив із елементами у зворотному порядку, перебираючи вхідний масив arr з кінця за допомогою while (i >= 0).",
    "reqs": [
      "Не використовувати вбудований метод reverse().",
      "Повернути новий масив."
    ],
    "hint": "<b>Підказка до алгоритму:</b> Проаналізуйте вхідні структури. Зверніть увагу на перевірку граничних випадків (порожній масив, відсутні або нульові значення). Використайте найбільш підходящий метод масиву замість надмірно складних ручних циклів.<div class=\"hint-methods-wrap\" style=\"margin-top:12px; display:flex; flex-direction:column; gap:8px;\"><div class=\"hint-method-card\">💡 <b>Властивість <code>arr.length</code>:</b> Відображає поточну кількість елементів у масиві. Останній допустимий індекс завжди дорівнює <code>arr.length - 1</code>. Примусове присвоєння <code>arr.length = 0</code> повністю очищує масив.</div><div class=\"hint-method-card\">💡 <b>Доступ за індексом <code>arr[i]</code>:</b> Індексація починається з <b>0</b>. Перший елемент — <code>arr[0]</code>, другий — <code>arr[1]</code>. Зміна значення: <code>arr[i] = newValue;</code>. Якщо елемента не існує — повертається <code>undefined</code>.</div><div class=\"hint-method-card\">💡 <b>Синтаксис <code>arr.push(el)</code>:</b> Додає новий елемент у самий <i>кінець</i> масиву та повертає нову довжину. Змінює (мутує) оригінальний масив. Швидка операція зі складністю <b>O(1)</b>.</div></div>",
    "starterParams": "arr",
    "starterBody": "return [];",
    "tests": [
      {
        "expr": "reverseWithWhile([\"a\", \"b\", \"c\"])",
        "expected": [
          "c",
          "b",
          "a"
        ]
      },
      {
        "expr": "reverseWithWhile([1, 2])",
        "expected": [
          2,
          1
        ]
      },
      {
        "expr": "reverseWithWhile([])",
        "expected": []
      }
    ]
  },
  {
    "moduleIdx": 3,
    "id": "3.3",
    "name": "filterWithForOf",
    "title": "Фільтрація рядків за довжиною через for...of",
    "level": "Базовий рівень",
    "goal": "Пройти масив слів words циклом for (const word of words) і повернути масив слів, довжина яких більша або дорівнює minLength.",
    "reqs": [
      "Не використовувати Array.prototype.filter."
    ],
    "hint": "<b>Підказка до алгоритму:</b> Проаналізуйте вхідні структури. Зверніть увагу на перевірку граничних випадків (порожній масив, відсутні або нульові значення). Використайте найбільш підходящий метод масиву замість надмірно складних ручних циклів.<div class=\"hint-methods-wrap\" style=\"margin-top:12px; display:flex; flex-direction:column; gap:8px;\"><div class=\"hint-method-card\">💡 <b>Властивість <code>arr.length</code>:</b> Відображає поточну кількість елементів у масиві. Останній допустимий індекс завжди дорівнює <code>arr.length - 1</code>. Примусове присвоєння <code>arr.length = 0</code> повністю очищує масив.</div><div class=\"hint-method-card\">💡 <b>Цикл <code>for (const item of arr)</code>:</b> Сучасний лаконічний цикл для перебору всіх значень масиву від першого до останнього без необхідності вручну керувати числовим індексом.</div><div class=\"hint-method-card\">💡 <b>Синтаксис <code>arr.push(el)</code>:</b> Додає новий елемент у самий <i>кінець</i> масиву та повертає нову довжину. Змінює (мутує) оригінальний масив. Швидка операція зі складністю <b>O(1)</b>.</div></div>",
    "starterParams": "words, minLength",
    "starterBody": "return [];",
    "tests": [
      {
        "expr": "filterWithForOf([\"кіт\", \"носоріг\", \"пес\", \"бегемот\"], 5)",
        "expected": [
          "носоріг",
          "бегемот"
        ]
      },
      {
        "expr": "filterWithForOf([\"js\", \"html\", \"css\"], 3)",
        "expected": [
          "html",
          "css"
        ]
      },
      {
        "expr": "filterWithForOf([], 2)",
        "expected": []
      }
    ]
  },
  {
    "moduleIdx": 3,
    "id": "3.4",
    "name": "findMinAndMax",
    "title": "Пошук мінімуму та максимуму без Math.min/max",
    "level": "Базовий рівень",
    "goal": "Знайти мінімальне та максимальне число в масиві за один прохід циклу for.",
    "reqs": [
      "Якщо масив порожній, повернути { min: null, max: null }."
    ],
    "hint": "<b>Підказка до алгоритму:</b> Проаналізуйте вхідні структури. Зверніть увагу на перевірку граничних випадків (порожній масив, відсутні або нульові значення). Використайте найбільш підходящий метод масиву замість надмірно складних ручних циклів.<div class=\"hint-methods-wrap\" style=\"margin-top:12px; display:flex; flex-direction:column; gap:8px;\"><div class=\"hint-method-card\">💡 <b>Властивість <code>arr.length</code>:</b> Відображає поточну кількість елементів у масиві. Останній допустимий індекс завжди дорівнює <code>arr.length - 1</code>. Примусове присвоєння <code>arr.length = 0</code> повністю очищує масив.</div><div class=\"hint-method-card\">💡 <b>Цикл <code>for (let i = 0; i < arr.length; i++)</code>:</b> Класичний перебір з лічильником <code>i</code>. Дає повний контроль над зміною елементів за індексом, кроком перебору або зворотним рухом.</div></div>",
    "starterParams": "numbers",
    "starterBody": "return { min: null, max: null };",
    "tests": [
      {
        "expr": "findMinAndMax([12, 5, 88, -3, 20])",
        "expected": {
          "min": -3,
          "max": 88
        }
      },
      {
        "expr": "findMinAndMax([7])",
        "expected": {
          "min": 7,
          "max": 7
        }
      },
      {
        "expr": "findMinAndMax([])",
        "expected": {
          "min": null,
          "max": null
        }
      }
    ]
  },
  {
    "moduleIdx": 3,
    "id": "3.5",
    "name": "calculateAverage",
    "title": "Середнє арифметичне значення масиву",
    "level": "Базовий рівень",
    "goal": "Обчислити середнє арифметичне чисел масиву через перебір циклом. Округлити результат до 2 знаків після коми.",
    "reqs": [
      "Для порожнього масиву повернути 0."
    ],
    "hint": "<b>Підказка до алгоритму:</b> Проаналізуйте вхідні структури. Зверніть увагу на перевірку граничних випадків (порожній масив, відсутні або нульові значення). Використайте найбільш підходящий метод масиву замість надмірно складних ручних циклів.<div class=\"hint-methods-wrap\" style=\"margin-top:12px; display:flex; flex-direction:column; gap:8px;\"><div class=\"hint-method-card\">💡 <b>Властивість <code>arr.length</code>:</b> Відображає поточну кількість елементів у масиві. Останній допустимий індекс завжди дорівнює <code>arr.length - 1</code>. Примусове присвоєння <code>arr.length = 0</code> повністю очищує масив.</div><div class=\"hint-method-card\">💡 <b>Цикл <code>for (const item of arr)</code>:</b> Сучасний лаконічний цикл для перебору всіх значень масиву від першого до останнього без необхідності вручну керувати числовим індексом.</div></div>",
    "starterParams": "arr",
    "starterBody": "return 0;",
    "tests": [
      {
        "expr": "calculateAverage([10, 20, 30])",
        "expected": 20
      },
      {
        "expr": "calculateAverage([1, 2])",
        "expected": 1.5
      },
      {
        "expr": "calculateAverage([])",
        "expected": 0
      }
    ]
  },
  {
    "moduleIdx": 3,
    "id": "3.6",
    "name": "countOccurrences",
    "title": "Підрахунок входжень елемента",
    "level": "Початковий рівень",
    "goal": "Підрахувати скільки разів значення target зустрічається в масиві arr за допомогою перебору.",
    "reqs": [
      "Повернути ціле число лічильника."
    ],
    "hint": "<b>Підказка до алгоритму:</b> Проаналізуйте вхідні структури. Зверніть увагу на перевірку граничних випадків (порожній масив, відсутні або нульові значення). Використайте найбільш підходящий метод масиву замість надмірно складних ручних циклів.<div class=\"hint-methods-wrap\" style=\"margin-top:12px; display:flex; flex-direction:column; gap:8px;\"><div class=\"hint-method-card\">💡 <b>Властивість <code>arr.length</code>:</b> Відображає поточну кількість елементів у масиві. Останній допустимий індекс завжди дорівнює <code>arr.length - 1</code>. Примусове присвоєння <code>arr.length = 0</code> повністю очищує масив.</div><div class=\"hint-method-card\">💡 <b>Доступ за індексом <code>arr[i]</code>:</b> Індексація починається з <b>0</b>. Перший елемент — <code>arr[0]</code>, другий — <code>arr[1]</code>. Зміна значення: <code>arr[i] = newValue;</code>. Якщо елемента не існує — повертається <code>undefined</code>.</div><div class=\"hint-method-card\">💡 <b>Цикл <code>for (let i = 0; i < arr.length; i++)</code>:</b> Класичний перебір з лічильником <code>i</code>. Дає повний контроль над зміною елементів за індексом, кроком перебору або зворотним рухом.</div></div>",
    "starterParams": "arr, target",
    "starterBody": "return 0;",
    "tests": [
      {
        "expr": "countOccurrences([\"apple\", \"banana\", \"apple\", \"kiwi\", \"apple\"], \"apple\")",
        "expected": 3
      },
      {
        "expr": "countOccurrences([1, 2, 3], 99)",
        "expected": 0
      },
      {
        "expr": "countOccurrences([], \"x\")",
        "expected": 0
      }
    ]
  },
  {
    "moduleIdx": 3,
    "id": "3.7",
    "name": "printWithIndices",
    "title": "Формування індексованого списку",
    "level": "Початковий рівень",
    "goal": "Перетворити масив елементів у масив рядків виду `\"[index]: [item]\"` за допомогою циклу for.",
    "reqs": [
      "Для [\"a\", \"b\"] повернути [\"0: a\", \"1: b\"]."
    ],
    "hint": "<b>Підказка до алгоритму:</b> Проаналізуйте вхідні структури. Зверніть увагу на перевірку граничних випадків (порожній масив, відсутні або нульові значення). Використайте найбільш підходящий метод масиву замість надмірно складних ручних циклів.<div class=\"hint-methods-wrap\" style=\"margin-top:12px; display:flex; flex-direction:column; gap:8px;\"><div class=\"hint-method-card\">💡 <b>Властивість <code>arr.length</code>:</b> Відображає поточну кількість елементів у масиві. Останній допустимий індекс завжди дорівнює <code>arr.length - 1</code>. Примусове присвоєння <code>arr.length = 0</code> повністю очищує масив.</div><div class=\"hint-method-card\">💡 <b>Доступ за індексом <code>arr[i]</code>:</b> Індексація починається з <b>0</b>. Перший елемент — <code>arr[0]</code>, другий — <code>arr[1]</code>. Зміна значення: <code>arr[i] = newValue;</code>. Якщо елемента не існує — повертається <code>undefined</code>.</div><div class=\"hint-method-card\">💡 <b>Цикл <code>for (let i = 0; i < arr.length; i++)</code>:</b> Класичний перебір з лічильником <code>i</code>. Дає повний контроль над зміною елементів за індексом, кроком перебору або зворотним рухом.</div><div class=\"hint-method-card\">💡 <b>Синтаксис <code>arr.push(el)</code>:</b> Додає новий елемент у самий <i>кінець</i> масиву та повертає нову довжину. Змінює (мутує) оригінальний масив. Швидка операція зі складністю <b>O(1)</b>.</div></div>",
    "starterParams": "arr",
    "starterBody": "return [];",
    "tests": [
      {
        "expr": "printWithIndices([\"HTML\", \"CSS\", \"JS\"])",
        "expected": [
          "0: HTML",
          "1: CSS",
          "2: JS"
        ]
      },
      {
        "expr": "printWithIndices([])",
        "expected": []
      }
    ]
  },
  {
    "moduleIdx": 3,
    "id": "3.8",
    "name": "stepIteration",
    "title": "Перебір масиву з довільним кроком",
    "level": "Базовий рівень",
    "goal": "Повернути новий масив, який містить елементи вхідного масиву з кроком step (i += step, починаючи з 0).",
    "reqs": [
      "Якщо step <= 0, повернути []."
    ],
    "hint": "<b>Підказка до алгоритму:</b> Проаналізуйте вхідні структури. Зверніть увагу на перевірку граничних випадків (порожній масив, відсутні або нульові значення). Використайте найбільш підходящий метод масиву замість надмірно складних ручних циклів.<div class=\"hint-methods-wrap\" style=\"margin-top:12px; display:flex; flex-direction:column; gap:8px;\"><div class=\"hint-method-card\">💡 <b>Властивість <code>arr.length</code>:</b> Відображає поточну кількість елементів у масиві. Останній допустимий індекс завжди дорівнює <code>arr.length - 1</code>. Примусове присвоєння <code>arr.length = 0</code> повністю очищує масив.</div><div class=\"hint-method-card\">💡 <b>Доступ за індексом <code>arr[i]</code>:</b> Індексація починається з <b>0</b>. Перший елемент — <code>arr[0]</code>, другий — <code>arr[1]</code>. Зміна значення: <code>arr[i] = newValue;</code>. Якщо елемента не існує — повертається <code>undefined</code>.</div><div class=\"hint-method-card\">💡 <b>Цикл <code>for (let i = 0; i < arr.length; i++)</code>:</b> Класичний перебір з лічильником <code>i</code>. Дає повний контроль над зміною елементів за індексом, кроком перебору або зворотним рухом.</div><div class=\"hint-method-card\">💡 <b>Синтаксис <code>arr.push(el)</code>:</b> Додає новий елемент у самий <i>кінець</i> масиву та повертає нову довжину. Змінює (мутує) оригінальний масив. Швидка операція зі складністю <b>O(1)</b>.</div></div>",
    "starterParams": "arr, step",
    "starterBody": "return [];",
    "tests": [
      {
        "expr": "stepIteration([10, 20, 30, 40, 50, 60], 2)",
        "expected": [
          10,
          30,
          50
        ]
      },
      {
        "expr": "stepIteration([\"a\", \"b\", \"c\", \"d\"], 3)",
        "expected": [
          "a",
          "d"
        ]
      },
      {
        "expr": "stepIteration([1, 2], 0)",
        "expected": []
      }
    ]
  },
  {
    "moduleIdx": 3,
    "id": "3.9",
    "name": "runningSumArray",
    "title": "Побудова масиву накопичувальних сум",
    "level": "Середній рівень",
    "goal": "Створити масив, де кожен елемент є сумою всіх попередніх елементів плюс поточний: res[i] = res[i-1] + arr[i].",
    "reqs": [
      "Для [1, 2, 3, 4] повернути [1, 3, 6, 10]."
    ],
    "hint": "<b>Підказка до алгоритму:</b> Проаналізуйте вхідні структури. Зверніть увагу на перевірку граничних випадків (порожній масив, відсутні або нульові значення). Використайте найбільш підходящий метод масиву замість надмірно складних ручних циклів.<div class=\"hint-methods-wrap\" style=\"margin-top:12px; display:flex; flex-direction:column; gap:8px;\"><div class=\"hint-method-card\">💡 <b>Властивість <code>arr.length</code>:</b> Відображає поточну кількість елементів у масиві. Останній допустимий індекс завжди дорівнює <code>arr.length - 1</code>. Примусове присвоєння <code>arr.length = 0</code> повністю очищує масив.</div><div class=\"hint-method-card\">💡 <b>Доступ за індексом <code>arr[i]</code>:</b> Індексація починається з <b>0</b>. Перший елемент — <code>arr[0]</code>, другий — <code>arr[1]</code>. Зміна значення: <code>arr[i] = newValue;</code>. Якщо елемента не існує — повертається <code>undefined</code>.</div><div class=\"hint-method-card\">💡 <b>Цикл <code>for (let i = 0; i < arr.length; i++)</code>:</b> Класичний перебір з лічильником <code>i</code>. Дає повний контроль над зміною елементів за індексом, кроком перебору або зворотним рухом.</div><div class=\"hint-method-card\">💡 <b>Синтаксис <code>arr.push(el)</code>:</b> Додає новий елемент у самий <i>кінець</i> масиву та повертає нову довжину. Змінює (мутує) оригінальний масив. Швидка операція зі складністю <b>O(1)</b>.</div></div>",
    "starterParams": "numbers",
    "starterBody": "return [];",
    "tests": [
      {
        "expr": "runningSumArray([1, 2, 3, 4])",
        "expected": [
          1,
          3,
          6,
          10
        ]
      },
      {
        "expr": "runningSumArray([3, 1, 2, 10, 1])",
        "expected": [
          3,
          4,
          6,
          16,
          17
        ]
      },
      {
        "expr": "runningSumArray([])",
        "expected": []
      }
    ]
  },
  {
    "moduleIdx": 3,
    "id": "3.10",
    "name": "breakEarlySearch",
    "title": "Дострокове переривання перебору (break)",
    "level": "Базовий рівень",
    "goal": "Знайти перше парне число в масиві arr та повернути його разом із кількістю перевірених елементів { value, checkedSteps }. Перервати цикл оператором break.",
    "reqs": [
      "Якщо парних немає, повернути { value: null, checkedSteps: arr.length }."
    ],
    "hint": "<b>Підказка до алгоритму:</b> Проаналізуйте вхідні структури. Зверніть увагу на перевірку граничних випадків (порожній масив, відсутні або нульові значення). Використайте найбільш підходящий метод масиву замість надмірно складних ручних циклів.<div class=\"hint-methods-wrap\" style=\"margin-top:12px; display:flex; flex-direction:column; gap:8px;\"><div class=\"hint-method-card\">💡 <b>Властивість <code>arr.length</code>:</b> Відображає поточну кількість елементів у масиві. Останній допустимий індекс завжди дорівнює <code>arr.length - 1</code>. Примусове присвоєння <code>arr.length = 0</code> повністю очищує масив.</div><div class=\"hint-method-card\">💡 <b>Доступ за індексом <code>arr[i]</code>:</b> Індексація починається з <b>0</b>. Перший елемент — <code>arr[0]</code>, другий — <code>arr[1]</code>. Зміна значення: <code>arr[i] = newValue;</code>. Якщо елемента не існує — повертається <code>undefined</code>.</div><div class=\"hint-method-card\">💡 <b>Цикл <code>for (let i = 0; i < arr.length; i++)</code>:</b> Класичний перебір з лічильником <code>i</code>. Дає повний контроль над зміною елементів за індексом, кроком перебору або зворотним рухом.</div></div>",
    "starterParams": "arr",
    "starterBody": "return { value: null, checkedSteps: 0 };",
    "tests": [
      {
        "expr": "breakEarlySearch([1, 3, 5, 8, 9, 10])",
        "expected": {
          "value": 8,
          "checkedSteps": 4
        }
      },
      {
        "expr": "breakEarlySearch([1, 3, 5])",
        "expected": {
          "value": null,
          "checkedSteps": 3
        }
      },
      {
        "expr": "breakEarlySearch([])",
        "expected": {
          "value": null,
          "checkedSteps": 0
        }
      }
    ]
  },
  {
    "moduleIdx": 4,
    "id": "4.1",
    "name": "stackPushPop",
    "title": "Моделювання стека (LIFO) через push та pop",
    "level": "Базовий рівень",
    "goal": "Обробити масив команд стеку: { action: \"push\", item } додає елемент у кінець, { action: \"pop\" } вилучає останній елемент у масив вилучених history.",
    "reqs": [
      "Повернути обʼєкт { currentStack, history }."
    ],
    "hint": "<b>Підказка до алгоритму:</b> Проаналізуйте вхідні структури. Зверніть увагу на перевірку граничних випадків (порожній масив, відсутні або нульові значення). Використайте найбільш підходящий метод масиву замість надмірно складних ручних циклів.<div class=\"hint-methods-wrap\" style=\"margin-top:12px; display:flex; flex-direction:column; gap:8px;\"><div class=\"hint-method-card\">💡 <b>Синтаксис <code>arr.at(index)</code>:</b> Сучасний метод доступу до елементів. Дозволяє передавати від'ємні індекси: <code>arr.at(-1)</code> повертає останній елемент, а <code>arr.at(-2)</code> — передостанній.</div><div class=\"hint-method-card\">💡 <b>Цикл <code>for (const item of arr)</code>:</b> Сучасний лаконічний цикл для перебору всіх значень масиву від першого до останнього без необхідності вручну керувати числовим індексом.</div><div class=\"hint-method-card\">💡 <b>Синтаксис <code>arr.push(el)</code>:</b> Додає новий елемент у самий <i>кінець</i> масиву та повертає нову довжину. Змінює (мутує) оригінальний масив. Швидка операція зі складністю <b>O(1)</b>.</div><div class=\"hint-method-card\">💡 <b>Синтаксис <code>arr.pop()</code>:</b> Видаляє <i>останній</i> елемент з кінця масиву та повертає його значення. Зменшує довжину на 1. Працює за <b>O(1)</b>.</div></div>",
    "starterParams": "commands",
    "starterBody": "return { currentStack: [], history: [] };",
    "tests": [
      {
        "expr": "stackPushPop([{ action: \"push\", item: \"file1\" }, { action: \"push\", item: \"file2\" }, { action: \"pop\" }, { action: \"push\", item: \"file3\" }])",
        "expected": {
          "currentStack": [
            "file1",
            "file3"
          ],
          "history": [
            "file2"
          ]
        }
      },
      {
        "expr": "stackPushPop([])",
        "expected": {
          "currentStack": [],
          "history": []
        }
      }
    ]
  },
  {
    "moduleIdx": 4,
    "id": "4.2",
    "name": "queuePushShift",
    "title": "Моделювання черги (FIFO) через push та shift",
    "level": "Базовий рівень",
    "goal": "Обслужити чергу клієнтів: додати всіх клієнтів із масиву incoming у чергу через push, а потім вилучати по одному з початку через shift у масив servedOrders.",
    "reqs": [
      "Повернути масив обслугованих клієнтів у порядку черги."
    ],
    "hint": "<b>Підказка до алгоритму:</b> Проаналізуйте вхідні структури. Зверніть увагу на перевірку граничних випадків (порожній масив, відсутні або нульові значення). Використайте найбільш підходящий метод масиву замість надмірно складних ручних циклів.<div class=\"hint-methods-wrap\" style=\"margin-top:12px; display:flex; flex-direction:column; gap:8px;\"><div class=\"hint-method-card\">💡 <b>Властивість <code>arr.length</code>:</b> Відображає поточну кількість елементів у масиві. Останній допустимий індекс завжди дорівнює <code>arr.length - 1</code>. Примусове присвоєння <code>arr.length = 0</code> повністю очищує масив.</div><div class=\"hint-method-card\">💡 <b>Цикл <code>for (const item of arr)</code>:</b> Сучасний лаконічний цикл для перебору всіх значень масиву від першого до останнього без необхідності вручну керувати числовим індексом.</div><div class=\"hint-method-card\">💡 <b>Синтаксис <code>arr.push(el)</code>:</b> Додає новий елемент у самий <i>кінець</i> масиву та повертає нову довжину. Змінює (мутує) оригінальний масив. Швидка операція зі складністю <b>O(1)</b>.</div><div class=\"hint-method-card\">💡 <b>Синтаксис <code>arr.shift()</code>:</b> Видаляє <i>перший</i> елемент з початку масиву та повертає його. Решта елементів зсуваються вліво (<b>O(n)</b>).</div></div>",
    "starterParams": "incoming",
    "starterBody": "return [];",
    "tests": [
      {
        "expr": "queuePushShift([\"Клієнт_1\", \"Клієнт_2\", \"Клієнт_3\"])",
        "expected": [
          "Клієнт_1",
          "Клієнт_2",
          "Клієнт_3"
        ]
      },
      {
        "expr": "queuePushShift([])",
        "expected": []
      }
    ]
  },
  {
    "moduleIdx": 4,
    "id": "4.3",
    "name": "priorityUnshift",
    "title": "Пріоритетне додавання на початок черги через unshift",
    "level": "Базовий рівень",
    "goal": "Додати масив VIP-клієнтів на початок існуючої черги queue так, щоб перший у списку VIP став першим у загальній черзі.",
    "reqs": [
      "Використати unshift(...vipList).",
      "Повернути новий масив."
    ],
    "hint": "<b>Підказка до алгоритму:</b> Проаналізуйте вхідні структури. Зверніть увагу на перевірку граничних випадків (порожній масив, відсутні або нульові значення). Використайте найбільш підходящий метод масиву замість надмірно складних ручних циклів.<div class=\"hint-methods-wrap\" style=\"margin-top:12px; display:flex; flex-direction:column; gap:8px;\"><div class=\"hint-method-card\">💡 <b>Синтаксис <code>arr.unshift(el)</code>:</b> Додає елемент на <i>початок</i> масиву (індекс 0). Всі наступні елементи зміщуються вправо у пам'яті, тому часова складність становить <b>O(n)</b>.</div></div>",
    "starterParams": "queue, vipList",
    "starterBody": "return [];",
    "tests": [
      {
        "expr": "priorityUnshift([\"User1\", \"User2\"], [\"VIP_A\", \"VIP_B\"])",
        "expected": [
          "VIP_A",
          "VIP_B",
          "User1",
          "User2"
        ]
      },
      {
        "expr": "priorityUnshift([\"User1\"], [])",
        "expected": [
          "User1"
        ]
      }
    ]
  },
  {
    "moduleIdx": 4,
    "id": "4.4",
    "name": "removeLastNElements",
    "title": "Видалення N останніх елементів через pop()",
    "level": "Початковий рівень",
    "goal": "Видалити рівно count останніх елементів із копії масиву arr за допомогою методу pop() у циклі.",
    "reqs": [
      "Якщо count >= arr.length, масив стає порожнім.",
      "Повернути залишок масиву."
    ],
    "hint": "<b>Підказка до алгоритму:</b> Проаналізуйте вхідні структури. Зверніть увагу на перевірку граничних випадків (порожній масив, відсутні або нульові значення). Використайте найбільш підходящий метод масиву замість надмірно складних ручних циклів.<div class=\"hint-methods-wrap\" style=\"margin-top:12px; display:flex; flex-direction:column; gap:8px;\"><div class=\"hint-method-card\">💡 <b>Властивість <code>arr.length</code>:</b> Відображає поточну кількість елементів у масиві. Останній допустимий індекс завжди дорівнює <code>arr.length - 1</code>. Примусове присвоєння <code>arr.length = 0</code> повністю очищує масив.</div><div class=\"hint-method-card\">💡 <b>Цикл <code>for (let i = 0; i < arr.length; i++)</code>:</b> Класичний перебір з лічильником <code>i</code>. Дає повний контроль над зміною елементів за індексом, кроком перебору або зворотним рухом.</div><div class=\"hint-method-card\">💡 <b>Синтаксис <code>arr.pop()</code>:</b> Видаляє <i>останній</i> елемент з кінця масиву та повертає його значення. Зменшує довжину на 1. Працює за <b>O(1)</b>.</div></div>",
    "starterParams": "arr, count",
    "starterBody": "return [];",
    "tests": [
      {
        "expr": "removeLastNElements([1, 2, 3, 4, 5], 2)",
        "expected": [
          1,
          2,
          3
        ]
      },
      {
        "expr": "removeLastNElements([\"a\", \"b\"], 5)",
        "expected": []
      }
    ]
  },
  {
    "moduleIdx": 4,
    "id": "4.5",
    "name": "checkExistence",
    "title": "Перевірка наявності елемента через includes()",
    "level": "Початковий рівень",
    "goal": "Перевірити, чи є заданий елемент value у списку дозволених allowedItems за допомогою методу includes. Повернути boolean.",
    "reqs": [
      "return allowedItems.includes(value);"
    ],
    "hint": "<b>Підказка до алгоритму:</b> Проаналізуйте вхідні структури. Зверніть увагу на перевірку граничних випадків (порожній масив, відсутні або нульові значення). Використайте найбільш підходящий метод масиву замість надмірно складних ручних циклів.<div class=\"hint-methods-wrap\" style=\"margin-top:12px; display:flex; flex-direction:column; gap:8px;\"><div class=\"hint-method-card\">💡 <b>Синтаксис <code>arr.includes(value)</code>:</b> Перевіряє, чи присутнє значення в масиві. Повертає <code>true</code> або <code>false</code>. Коректно обробляє <code>NaN</code>.</div></div>",
    "starterParams": "allowedItems, value",
    "starterBody": "return false;",
    "tests": [
      {
        "expr": "checkExistence([\"admin\", \"manager\", \"support\"], \"admin\")",
        "expected": true
      },
      {
        "expr": "checkExistence([\"admin\", \"manager\"], \"guest\")",
        "expected": false
      },
      {
        "expr": "checkExistence([], \"x\")",
        "expected": false
      }
    ]
  },
  {
    "moduleIdx": 4,
    "id": "4.6",
    "name": "findFirstIndex",
    "title": "Пошук першого індексу через indexOf()",
    "level": "Початковий рівень",
    "goal": "Знайти індекс першого знаходження searchItem у масиві arr за допомогою indexOf. Якщо елемент не знайдено, повернути -1.",
    "reqs": [
      "Повернути числовий індекс."
    ],
    "hint": "<b>Підказка до алгоритму:</b> Проаналізуйте вхідні структури. Зверніть увагу на перевірку граничних випадків (порожній масив, відсутні або нульові значення). Використайте найбільш підходящий метод масиву замість надмірно складних ручних циклів.<div class=\"hint-methods-wrap\" style=\"margin-top:12px; display:flex; flex-direction:column; gap:8px;\"><div class=\"hint-method-card\">💡 <b>Доступ за індексом <code>arr[i]</code>:</b> Індексація починається з <b>0</b>. Перший елемент — <code>arr[0]</code>, другий — <code>arr[1]</code>. Зміна значення: <code>arr[i] = newValue;</code>. Якщо елемента не існує — повертається <code>undefined</code>.</div><div class=\"hint-method-card\">💡 <b>Синтаксис <code>arr.indexOf(value)</code>:</b> Шукає перше входження елемента за суворим порівнянням <code>===</code>. Повертає індекс елемента або <code>-1</code>, якщо нічого не знайдено.</div></div>",
    "starterParams": "arr, searchItem",
    "starterBody": "return -1;",
    "tests": [
      {
        "expr": "findFirstIndex([\"apple\", \"banana\", \"kiwi\", \"banana\"], \"banana\")",
        "expected": 1
      },
      {
        "expr": "findFirstIndex([10, 20, 30], 99)",
        "expected": -1
      }
    ]
  },
  {
    "moduleIdx": 4,
    "id": "4.7",
    "name": "findLastIndex",
    "title": "Пошук останнього входження через lastIndexOf()",
    "level": "Початковий рівень",
    "goal": "Знайти індекс останнього входження searchItem у масиві arr за допомогою методу lastIndexOf.",
    "reqs": [
      "Повернути індекс або -1."
    ],
    "hint": "<b>Підказка до алгоритму:</b> Проаналізуйте вхідні структури. Зверніть увагу на перевірку граничних випадків (порожній масив, відсутні або нульові значення). Використайте найбільш підходящий метод масиву замість надмірно складних ручних циклів.<div class=\"hint-methods-wrap\" style=\"margin-top:12px; display:flex; flex-direction:column; gap:8px;\"><div class=\"hint-method-card\">💡 <b>Доступ за індексом <code>arr[i]</code>:</b> Індексація починається з <b>0</b>. Перший елемент — <code>arr[0]</code>, другий — <code>arr[1]</code>. Зміна значення: <code>arr[i] = newValue;</code>. Якщо елемента не існує — повертається <code>undefined</code>.</div><div class=\"hint-method-card\">💡 <b>Синтаксис <code>arr.indexOf(value)</code>:</b> Шукає перше входження елемента за суворим порівнянням <code>===</code>. Повертає індекс елемента або <code>-1</code>, якщо нічого не знайдено.</div><div class=\"hint-method-card\">💡 <b>Синтаксис <code>arr.lastIndexOf(value)</code>:</b> Шукає останнє (найправіше) входження елемента в масиві. Повертає числовий індекс або <code>-1</code>.</div></div>",
    "starterParams": "arr, searchItem",
    "starterBody": "return -1;",
    "tests": [
      {
        "expr": "findLastIndex([\"a\", \"b\", \"c\", \"b\", \"d\"], \"b\")",
        "expected": 3
      },
      {
        "expr": "findLastIndex([1, 2, 3], 1)",
        "expected": 0
      },
      {
        "expr": "findLastIndex([1, 2, 3], 99)",
        "expected": -1
      }
    ]
  },
  {
    "moduleIdx": 4,
    "id": "4.8",
    "name": "removeAllOccurrences",
    "title": "Видалення всіх екземплярів через indexOf та splice",
    "level": "Середній рівень",
    "goal": "Видалити всі елементи, рівні targetValue, з масиву arr, знаходячи їхній індекс через indexOf і вирізаючи через splice.",
    "reqs": [
      "Повернути оновлений масив без цільового значення."
    ],
    "hint": "<b>Підказка до алгоритму:</b> Проаналізуйте вхідні структури. Зверніть увагу на перевірку граничних випадків (порожній масив, відсутні або нульові значення). Використайте найбільш підходящий метод масиву замість надмірно складних ручних циклів.<div class=\"hint-methods-wrap\" style=\"margin-top:12px; display:flex; flex-direction:column; gap:8px;\"><div class=\"hint-method-card\">💡 <b>Доступ за індексом <code>arr[i]</code>:</b> Індексація починається з <b>0</b>. Перший елемент — <code>arr[0]</code>, другий — <code>arr[1]</code>. Зміна значення: <code>arr[i] = newValue;</code>. Якщо елемента не існує — повертається <code>undefined</code>.</div><div class=\"hint-method-card\">💡 <b>Синтаксис <code>arr.splice(start, count, ...items)</code>:</b> <u>Мутуючий метод</u>. Починаючи з індексу <code>start</code>, видаляє <code>count</code> елементів і за бажанням вставляє на їх місце нові елементи <code>items</code>.</div><div class=\"hint-method-card\">💡 <b>Синтаксис <code>arr.indexOf(value)</code>:</b> Шукає перше входження елемента за суворим порівнянням <code>===</code>. Повертає індекс елемента або <code>-1</code>, якщо нічого не знайдено.</div></div>",
    "starterParams": "arr, targetValue",
    "starterBody": "return [];",
    "tests": [
      {
        "expr": "removeAllOccurrences([1, 2, 3, 2, 4, 2, 5], 2)",
        "expected": [
          1,
          3,
          4,
          5
        ]
      },
      {
        "expr": "removeAllOccurrences([\"a\", \"b\", \"a\"], \"a\")",
        "expected": [
          "b"
        ]
      },
      {
        "expr": "removeAllOccurrences([1, 2], 99)",
        "expected": [
          1,
          2
        ]
      }
    ]
  },
  {
    "moduleIdx": 4,
    "id": "4.9",
    "name": "browserHistoryNavigation",
    "title": "Симуляція історії браузера (Undo / Redo)",
    "level": "Високий рівень",
    "goal": "Змоделювати навігацію браузера через два стеки: backStack і forwardStack з поточною сторінкою current. Команди: \"visit\" (додає current у backStack, очищує forwardStack, встановлює новий current), \"back\" (якщо є сторінка в backStack, поточну в forwardStack, дістає з backStack), \"forward\" (дістає з forwardStack, поточну в backStack).",
    "reqs": [
      "Повернути фінальний стан { current, backCount: backStack.length, forwardCount: forwardStack.length }."
    ],
    "hint": "<b>Підказка до алгоритму:</b> Проаналізуйте вхідні структури. Зверніть увагу на перевірку граничних випадків (порожній масив, відсутні або нульові значення). Використайте найбільш підходящий метод масиву замість надмірно складних ручних циклів.<div class=\"hint-methods-wrap\" style=\"margin-top:12px; display:flex; flex-direction:column; gap:8px;\"><div class=\"hint-method-card\">💡 <b>Властивість <code>arr.length</code>:</b> Відображає поточну кількість елементів у масиві. Останній допустимий індекс завжди дорівнює <code>arr.length - 1</code>. Примусове присвоєння <code>arr.length = 0</code> повністю очищує масив.</div><div class=\"hint-method-card\">💡 <b>Цикл <code>for (const item of arr)</code>:</b> Сучасний лаконічний цикл для перебору всіх значень масиву від першого до останнього без необхідності вручну керувати числовим індексом.</div><div class=\"hint-method-card\">💡 <b>Синтаксис <code>arr.push(el)</code>:</b> Додає новий елемент у самий <i>кінець</i> масиву та повертає нову довжину. Змінює (мутує) оригінальний масив. Швидка операція зі складністю <b>O(1)</b>.</div><div class=\"hint-method-card\">💡 <b>Синтаксис <code>arr.pop()</code>:</b> Видаляє <i>останній</i> елемент з кінця масиву та повертає його значення. Зменшує довжину на 1. Працює за <b>O(1)</b>.</div></div>",
    "starterParams": "initialPage, actions",
    "starterBody": "return { current: initialPage, backCount: 0, forwardCount: 0 };",
    "tests": [
      {
        "expr": "browserHistoryNavigation(\"home.com\", [{ type: \"visit\", url: \"blog.com\" }, { type: \"visit\", url: \"post1.com\" }, { type: \"back\" }])",
        "expected": {
          "current": "blog.com",
          "backCount": 1,
          "forwardCount": 1
        }
      },
      {
        "expr": "browserHistoryNavigation(\"home.com\", [{ type: \"back\" }])",
        "expected": {
          "current": "home.com",
          "backCount": 0,
          "forwardCount": 0
        }
      }
    ]
  },
  {
    "moduleIdx": 4,
    "id": "4.10",
    "name": "batchPushItems",
    "title": "Пакетне додавання елементів через push(...items)",
    "level": "Початковий рівень",
    "goal": "Додати всі елементи з масиву newItems у кінець існуючого масиву targetArray за один виклик за допомогою спред-синтаксису targetArray.push(...newItems).",
    "reqs": [
      "Повернути оновлений масив targetArray."
    ],
    "hint": "<b>Підказка до алгоритму:</b> Проаналізуйте вхідні структури. Зверніть увагу на перевірку граничних випадків (порожній масив, відсутні або нульові значення). Використайте найбільш підходящий метод масиву замість надмірно складних ручних циклів.<div class=\"hint-methods-wrap\" style=\"margin-top:12px; display:flex; flex-direction:column; gap:8px;\"><div class=\"hint-method-card\">💡 <b>Синтаксис <code>arr.push(el)</code>:</b> Додає новий елемент у самий <i>кінець</i> масиву та повертає нову довжину. Змінює (мутує) оригінальний масив. Швидка операція зі складністю <b>O(1)</b>.</div></div>",
    "starterParams": "targetArray, newItems",
    "starterBody": "return targetArray;",
    "tests": [
      {
        "expr": "batchPushItems([1, 2], [3, 4, 5])",
        "expected": [
          1,
          2,
          3,
          4,
          5
        ]
      },
      {
        "expr": "batchPushItems([\"a\"], [])",
        "expected": [
          "a"
        ]
      }
    ]
  },
  {
    "moduleIdx": 4,
    "id": "4.11",
    "name": "rotateArrayRight",
    "title": "Циклічний зсув масиву вправо на k позицій",
    "level": "Середній рівень",
    "goal": "Зсунути елементи масиву вправо на k позицій: останній елемент стає першим через pop() та unshift().",
    "reqs": [
      "Якщо масив порожній або k <= 0, повернути копію без змін."
    ],
    "hint": "<b>Підказка до алгоритму:</b> Проаналізуйте вхідні структури. Зверніть увагу на перевірку граничних випадків (порожній масив, відсутні або нульові значення). Використайте найбільш підходящий метод масиву замість надмірно складних ручних циклів.<div class=\"hint-methods-wrap\" style=\"margin-top:12px; display:flex; flex-direction:column; gap:8px;\"><div class=\"hint-method-card\">💡 <b>Властивість <code>arr.length</code>:</b> Відображає поточну кількість елементів у масиві. Останній допустимий індекс завжди дорівнює <code>arr.length - 1</code>. Примусове присвоєння <code>arr.length = 0</code> повністю очищує масив.</div><div class=\"hint-method-card\">💡 <b>Синтаксис <code>arr.at(index)</code>:</b> Сучасний метод доступу до елементів. Дозволяє передавати від'ємні індекси: <code>arr.at(-1)</code> повертає останній елемент, а <code>arr.at(-2)</code> — передостанній.</div><div class=\"hint-method-card\">💡 <b>Цикл <code>for (let i = 0; i < arr.length; i++)</code>:</b> Класичний перебір з лічильником <code>i</code>. Дає повний контроль над зміною елементів за індексом, кроком перебору або зворотним рухом.</div><div class=\"hint-method-card\">💡 <b>Синтаксис <code>arr.pop()</code>:</b> Видаляє <i>останній</i> елемент з кінця масиву та повертає його значення. Зменшує довжину на 1. Працює за <b>O(1)</b>.</div><div class=\"hint-method-card\">💡 <b>Синтаксис <code>arr.unshift(el)</code>:</b> Додає елемент на <i>початок</i> масиву (індекс 0). Всі наступні елементи зміщуються вправо у пам'яті, тому часова складність становить <b>O(n)</b>.</div></div>",
    "starterParams": "arr, k",
    "starterBody": "return [...arr];",
    "tests": [
      {
        "expr": "rotateArrayRight([1, 2, 3, 4, 5], 2)",
        "expected": [
          4,
          5,
          1,
          2,
          3
        ]
      },
      {
        "expr": "rotateArrayRight([\"a\", \"b\", \"c\"], 1)",
        "expected": [
          "c",
          "a",
          "b"
        ]
      },
      {
        "expr": "rotateArrayRight([1, 2], 0)",
        "expected": [
          1,
          2
        ]
      }
    ]
  },
  {
    "moduleIdx": 4,
    "id": "4.12",
    "name": "rotateArrayLeft",
    "title": "Циклічний зсув масиву вліво на k позицій",
    "level": "Середній рівень",
    "goal": "Зсунути елементи масиву вліво на k позицій: перший елемент стає останнім через shift() та push().",
    "reqs": [
      "Повернути новий зміщений масив."
    ],
    "hint": "<b>Підказка до алгоритму:</b> Проаналізуйте вхідні структури. Зверніть увагу на перевірку граничних випадків (порожній масив, відсутні або нульові значення). Використайте найбільш підходящий метод масиву замість надмірно складних ручних циклів.<div class=\"hint-methods-wrap\" style=\"margin-top:12px; display:flex; flex-direction:column; gap:8px;\"><div class=\"hint-method-card\">💡 <b>Властивість <code>arr.length</code>:</b> Відображає поточну кількість елементів у масиві. Останній допустимий індекс завжди дорівнює <code>arr.length - 1</code>. Примусове присвоєння <code>arr.length = 0</code> повністю очищує масив.</div><div class=\"hint-method-card\">💡 <b>Цикл <code>for (let i = 0; i < arr.length; i++)</code>:</b> Класичний перебір з лічильником <code>i</code>. Дає повний контроль над зміною елементів за індексом, кроком перебору або зворотним рухом.</div><div class=\"hint-method-card\">💡 <b>Синтаксис <code>arr.push(el)</code>:</b> Додає новий елемент у самий <i>кінець</i> масиву та повертає нову довжину. Змінює (мутує) оригінальний масив. Швидка операція зі складністю <b>O(1)</b>.</div><div class=\"hint-method-card\">💡 <b>Синтаксис <code>arr.shift()</code>:</b> Видаляє <i>перший</i> елемент з початку масиву та повертає його. Решта елементів зсуваються вліво (<b>O(n)</b>).</div></div>",
    "starterParams": "arr, k",
    "starterBody": "return [...arr];",
    "tests": [
      {
        "expr": "rotateArrayLeft([1, 2, 3, 4, 5], 2)",
        "expected": [
          3,
          4,
          5,
          1,
          2
        ]
      },
      {
        "expr": "rotateArrayLeft([\"a\", \"b\", \"c\"], 1)",
        "expected": [
          "b",
          "c",
          "a"
        ]
      }
    ]
  },
  {
    "moduleIdx": 5,
    "id": "5.1",
    "name": "paginateDataSlice",
    "title": "Пагінація за допомогою slice(start, end)",
    "level": "Базовий рівень",
    "goal": "Отримати елементи сторінки pageNumber при розмірі pageSize за допомогою методу slice(). Індексація сторінок з 1.",
    "reqs": [
      "start = (pageNumber - 1) * pageSize, end = start + pageSize.",
      "Повернути новий підмасив."
    ],
    "hint": "<b>Підказка до алгоритму:</b> Проаналізуйте вхідні структури. Зверніть увагу на перевірку граничних випадків (порожній масив, відсутні або нульові значення). Використайте найбільш підходящий метод масиву замість надмірно складних ручних циклів.<div class=\"hint-methods-wrap\" style=\"margin-top:12px; display:flex; flex-direction:column; gap:8px;\"><div class=\"hint-method-card\">💡 <b>Доступ за індексом <code>arr[i]</code>:</b> Індексація починається з <b>0</b>. Перший елемент — <code>arr[0]</code>, другий — <code>arr[1]</code>. Зміна значення: <code>arr[i] = newValue;</code>. Якщо елемента не існує — повертається <code>undefined</code>.</div><div class=\"hint-method-card\">💡 <b>Синтаксис <code>arr.slice(start, end)</code>:</b> Копіює частину масиву від індексу <code>start</code> до <code>end</code> (сам <code>end</code> не включається). <u>НЕ змінює</u> вихідний масив, а повертає новий підмасив.</div></div>",
    "starterParams": "items, pageNumber, pageSize",
    "starterBody": "return [];",
    "tests": [
      {
        "expr": "paginateDataSlice([1, 2, 3, 4, 5, 6, 7], 1, 3)",
        "expected": [
          1,
          2,
          3
        ]
      },
      {
        "expr": "paginateDataSlice([1, 2, 3, 4, 5, 6, 7], 2, 3)",
        "expected": [
          4,
          5,
          6
        ]
      },
      {
        "expr": "paginateDataSlice([1, 2, 3, 4, 5, 6, 7], 3, 3)",
        "expected": [
          7
        ]
      }
    ]
  },
  {
    "moduleIdx": 5,
    "id": "5.2",
    "name": "extractMiddleSubarray",
    "title": "Вилучення центральної частини без зміни оригіналу",
    "level": "Базовий рівень",
    "goal": "Вирізати підмасив без першого та останнього елементів за допомогою slice(1, -1).",
    "reqs": [
      "Для масивів довжиною <= 2 повернути []."
    ],
    "hint": "<b>Підказка до алгоритму:</b> Проаналізуйте вхідні структури. Зверніть увагу на перевірку граничних випадків (порожній масив, відсутні або нульові значення). Використайте найбільш підходящий метод масиву замість надмірно складних ручних циклів.<div class=\"hint-methods-wrap\" style=\"margin-top:12px; display:flex; flex-direction:column; gap:8px;\"><div class=\"hint-method-card\">💡 <b>Властивість <code>arr.length</code>:</b> Відображає поточну кількість елементів у масиві. Останній допустимий індекс завжди дорівнює <code>arr.length - 1</code>. Примусове присвоєння <code>arr.length = 0</code> повністю очищує масив.</div><div class=\"hint-method-card\">💡 <b>Синтаксис <code>arr.slice(start, end)</code>:</b> Копіює частину масиву від індексу <code>start</code> до <code>end</code> (сам <code>end</code> не включається). <u>НЕ змінює</u> вихідний масив, а повертає новий підмасив.</div><div class=\"hint-method-card\">💡 <b>Синтаксис <code>arr.splice(start, count, ...items)</code>:</b> <u>Мутуючий метод</u>. Починаючи з індексу <code>start</code>, видаляє <code>count</code> елементів і за бажанням вставляє на їх місце нові елементи <code>items</code>.</div></div>",
    "starterParams": "arr",
    "starterBody": "return [];",
    "tests": [
      {
        "expr": "extractMiddleSubarray([10, 20, 30, 40, 50])",
        "expected": [
          20,
          30,
          40
        ]
      },
      {
        "expr": "extractMiddleSubarray([\"start\", \"content\", \"end\"])",
        "expected": [
          "content"
        ]
      },
      {
        "expr": "extractMiddleSubarray([1, 2])",
        "expected": []
      }
    ]
  },
  {
    "moduleIdx": 5,
    "id": "5.3",
    "name": "spliceRemoveAt",
    "title": "Видалення елементів за індексом через splice()",
    "level": "Початковий рівень",
    "goal": "Видалити deleteCount елементів, починаючи з індексу startIndex, з копії масиву arr за допомогою splice.",
    "reqs": [
      "Повернути обʼєкт { updatedArray, removedItems }."
    ],
    "hint": "<b>Підказка до алгоритму:</b> Проаналізуйте вхідні структури. Зверніть увагу на перевірку граничних випадків (порожній масив, відсутні або нульові значення). Використайте найбільш підходящий метод масиву замість надмірно складних ручних циклів.<div class=\"hint-methods-wrap\" style=\"margin-top:12px; display:flex; flex-direction:column; gap:8px;\"><div class=\"hint-method-card\">💡 <b>Доступ за індексом <code>arr[i]</code>:</b> Індексація починається з <b>0</b>. Перший елемент — <code>arr[0]</code>, другий — <code>arr[1]</code>. Зміна значення: <code>arr[i] = newValue;</code>. Якщо елемента не існує — повертається <code>undefined</code>.</div><div class=\"hint-method-card\">💡 <b>Синтаксис <code>arr.splice(start, count, ...items)</code>:</b> <u>Мутуючий метод</u>. Починаючи з індексу <code>start</code>, видаляє <code>count</code> елементів і за бажанням вставляє на їх місце нові елементи <code>items</code>.</div></div>",
    "starterParams": "arr, startIndex, deleteCount",
    "starterBody": "return { updatedArray: [], removedItems: [] };",
    "tests": [
      {
        "expr": "spliceRemoveAt([\"a\", \"b\", \"c\", \"d\"], 1, 2)",
        "expected": {
          "updatedArray": [
            "a",
            "d"
          ],
          "removedItems": [
            "b",
            "c"
          ]
        }
      },
      {
        "expr": "spliceRemoveAt([1, 2, 3], 0, 1)",
        "expected": {
          "updatedArray": [
            2,
            3
          ],
          "removedItems": [
            1
          ]
        }
      }
    ]
  },
  {
    "moduleIdx": 5,
    "id": "5.4",
    "name": "spliceInsertAt",
    "title": "Вставка елементів у довільну позицію без видалення",
    "level": "Базовий рівень",
    "goal": "Вставити нові елементи newItems у масив arr на позицію insertIndex за допомогою splice(insertIndex, 0, ...newItems).",
    "reqs": [
      "Повернути новий модифікований масив."
    ],
    "hint": "<b>Підказка до алгоритму:</b> Проаналізуйте вхідні структури. Зверніть увагу на перевірку граничних випадків (порожній масив, відсутні або нульові значення). Використайте найбільш підходящий метод масиву замість надмірно складних ручних циклів.<div class=\"hint-methods-wrap\" style=\"margin-top:12px; display:flex; flex-direction:column; gap:8px;\"><div class=\"hint-method-card\">💡 <b>Синтаксис <code>arr.splice(start, count, ...items)</code>:</b> <u>Мутуючий метод</u>. Починаючи з індексу <code>start</code>, видаляє <code>count</code> елементів і за бажанням вставляє на їх місце нові елементи <code>items</code>.</div></div>",
    "starterParams": "arr, insertIndex, newItems",
    "starterBody": "return [];",
    "tests": [
      {
        "expr": "spliceInsertAt([\"Mon\", \"Thu\"], 1, [\"Tue\", \"Wed\"])",
        "expected": [
          "Mon",
          "Tue",
          "Wed",
          "Thu"
        ]
      },
      {
        "expr": "spliceInsertAt([1, 4], 1, [2, 3])",
        "expected": [
          1,
          2,
          3,
          4
        ]
      }
    ]
  },
  {
    "moduleIdx": 5,
    "id": "5.5",
    "name": "spliceReplaceRange",
    "title": "Заміна діапазону елементів через splice()",
    "level": "Базовий рівень",
    "goal": "Замінити count елементів, починаючи з startIndex, на нові replacementItems.",
    "reqs": [
      "Повернути оновлений масив."
    ],
    "hint": "<b>Підказка до алгоритму:</b> Проаналізуйте вхідні структури. Зверніть увагу на перевірку граничних випадків (порожній масив, відсутні або нульові значення). Використайте найбільш підходящий метод масиву замість надмірно складних ручних циклів.<div class=\"hint-methods-wrap\" style=\"margin-top:12px; display:flex; flex-direction:column; gap:8px;\"><div class=\"hint-method-card\">💡 <b>Синтаксис <code>arr.splice(start, count, ...items)</code>:</b> <u>Мутуючий метод</u>. Починаючи з індексу <code>start</code>, видаляє <code>count</code> елементів і за бажанням вставляє на їх місце нові елементи <code>items</code>.</div></div>",
    "starterParams": "arr, startIndex, count, replacementItems",
    "starterBody": "return [];",
    "tests": [
      {
        "expr": "spliceReplaceRange([\"червоний\", \"ПОМИЛКА\", \"синій\"], 1, 1, [\"зелений\"])",
        "expected": [
          "червоний",
          "зелений",
          "синій"
        ]
      },
      {
        "expr": "spliceReplaceRange([1, 2, 3, 4], 1, 2, [20, 30])",
        "expected": [
          1,
          20,
          30,
          4
        ]
      }
    ]
  },
  {
    "moduleIdx": 5,
    "id": "5.6",
    "name": "concatMultipleArrays",
    "title": "Обʼєднання кількох масивів через concat()",
    "level": "Початковий рівень",
    "goal": "Обʼєднати три масиви a, b та c в один результуючий масив за допомогою методу a.concat(b, c).",
    "reqs": [
      "Повернути єдиний плаский масив."
    ],
    "hint": "<b>Підказка до алгоритму:</b> Проаналізуйте вхідні структури. Зверніть увагу на перевірку граничних випадків (порожній масив, відсутні або нульові значення). Використайте найбільш підходящий метод масиву замість надмірно складних ручних циклів.<div class=\"hint-methods-wrap\" style=\"margin-top:12px; display:flex; flex-direction:column; gap:8px;\"><div class=\"hint-method-card\">💡 <b>Синтаксис <code>arr1.concat(arr2)</code>:</b> Об'єднує масиви в один новий масив, не мутуючи оригінали. Альтернатива — спред-синтаксис <code>[...arr1, ...arr2]</code>.</div></div>",
    "starterParams": "a, b, c",
    "starterBody": "return [];",
    "tests": [
      {
        "expr": "concatMultipleArrays([1, 2], [3, 4], [5])",
        "expected": [
          1,
          2,
          3,
          4,
          5
        ]
      },
      {
        "expr": "concatMultipleArrays([\"a\"], [], [\"b\"])",
        "expected": [
          "a",
          "b"
        ]
      }
    ]
  },
  {
    "moduleIdx": 5,
    "id": "5.7",
    "name": "tailSlice",
    "title": "Отримання N останніх елементів через slice(-n)",
    "level": "Початковий рівень",
    "goal": "Отримати рівно n останніх елементів масиву arr без зміни оригіналу за допомогою slice(-n).",
    "reqs": [
      "Для n <= 0 повернути []."
    ],
    "hint": "<b>Підказка до алгоритму:</b> Проаналізуйте вхідні структури. Зверніть увагу на перевірку граничних випадків (порожній масив, відсутні або нульові значення). Використайте найбільш підходящий метод масиву замість надмірно складних ручних циклів.<div class=\"hint-methods-wrap\" style=\"margin-top:12px; display:flex; flex-direction:column; gap:8px;\"><div class=\"hint-method-card\">💡 <b>Синтаксис <code>arr.slice(start, end)</code>:</b> Копіює частину масиву від індексу <code>start</code> до <code>end</code> (сам <code>end</code> не включається). <u>НЕ змінює</u> вихідний масив, а повертає новий підмасив.</div></div>",
    "starterParams": "arr, n",
    "starterBody": "return [];",
    "tests": [
      {
        "expr": "tailSlice([10, 20, 30, 40, 50], 3)",
        "expected": [
          30,
          40,
          50
        ]
      },
      {
        "expr": "tailSlice([\"x\", \"y\"], 1)",
        "expected": [
          "y"
        ]
      },
      {
        "expr": "tailSlice([1, 2], 0)",
        "expected": []
      }
    ]
  },
  {
    "moduleIdx": 5,
    "id": "5.8",
    "name": "splitArrayIntoChunks",
    "title": "Розбиття масиву на чанки фіксованого розміру",
    "level": "Середній рівень",
    "goal": "Розбити вхідний масив arr на двовимірний масив чанків фіксованого розміру chunkSize за допомогою slice у циклі.",
    "reqs": [
      "Останній чанк може мати меншу довжину."
    ],
    "hint": "<b>Підказка до алгоритму:</b> Проаналізуйте вхідні структури. Зверніть увагу на перевірку граничних випадків (порожній масив, відсутні або нульові значення). Використайте найбільш підходящий метод масиву замість надмірно складних ручних циклів.<div class=\"hint-methods-wrap\" style=\"margin-top:12px; display:flex; flex-direction:column; gap:8px;\"><div class=\"hint-method-card\">💡 <b>Властивість <code>arr.length</code>:</b> Відображає поточну кількість елементів у масиві. Останній допустимий індекс завжди дорівнює <code>arr.length - 1</code>. Примусове присвоєння <code>arr.length = 0</code> повністю очищує масив.</div><div class=\"hint-method-card\">💡 <b>Цикл <code>for (let i = 0; i < arr.length; i++)</code>:</b> Класичний перебір з лічильником <code>i</code>. Дає повний контроль над зміною елементів за індексом, кроком перебору або зворотним рухом.</div><div class=\"hint-method-card\">💡 <b>Синтаксис <code>arr.push(el)</code>:</b> Додає новий елемент у самий <i>кінець</i> масиву та повертає нову довжину. Змінює (мутує) оригінальний масив. Швидка операція зі складністю <b>O(1)</b>.</div><div class=\"hint-method-card\">💡 <b>Синтаксис <code>arr.slice(start, end)</code>:</b> Копіює частину масиву від індексу <code>start</code> до <code>end</code> (сам <code>end</code> не включається). <u>НЕ змінює</u> вихідний масив, а повертає новий підмасив.</div><div class=\"hint-method-card\">💡 <b>Двовимірні масиви (Матриці <code>matrix[r][c]</code>):</b> Масив, елементами якого є інші масиви. Перший індекс <code>r</code> — це рядок, другий <code>c</code> — стовпець. Для перебору використовують два вкладені цикли <code>for</code>.</div></div>",
    "starterParams": "arr, chunkSize",
    "starterBody": "return [];",
    "tests": [
      {
        "expr": "splitArrayIntoChunks([1, 2, 3, 4, 5], 2)",
        "expected": [
          [
            1,
            2
          ],
          [
            3,
            4
          ],
          [
            5
          ]
        ]
      },
      {
        "expr": "splitArrayIntoChunks([\"a\", \"b\", \"c\", \"d\"], 2)",
        "expected": [
          [
            "a",
            "b"
          ],
          [
            "c",
            "d"
          ]
        ]
      },
      {
        "expr": "splitArrayIntoChunks([], 3)",
        "expected": []
      }
    ]
  },
  {
    "moduleIdx": 5,
    "id": "5.9",
    "name": "insertSorted",
    "title": "Вставка числа у відсортований масив на потрібне місце",
    "level": "Середній рівень",
    "goal": "Знайти індекс, де значення num має знаходитись у відсортованому за зростанням масиві sortedArr, і вставити його за допомогою splice.",
    "reqs": [
      "Повернути новий відсортований масив."
    ],
    "hint": "<b>Підказка до алгоритму:</b> Проаналізуйте вхідні структури. Зверніть увагу на перевірку граничних випадків (порожній масив, відсутні або нульові значення). Використайте найбільш підходящий метод масиву замість надмірно складних ручних циклів.<div class=\"hint-methods-wrap\" style=\"margin-top:12px; display:flex; flex-direction:column; gap:8px;\"><div class=\"hint-method-card\">💡 <b>Властивість <code>arr.length</code>:</b> Відображає поточну кількість елементів у масиві. Останній допустимий індекс завжди дорівнює <code>arr.length - 1</code>. Примусове присвоєння <code>arr.length = 0</code> повністю очищує масив.</div><div class=\"hint-method-card\">💡 <b>Доступ за індексом <code>arr[i]</code>:</b> Індексація починається з <b>0</b>. Перший елемент — <code>arr[0]</code>, другий — <code>arr[1]</code>. Зміна значення: <code>arr[i] = newValue;</code>. Якщо елемента не існує — повертається <code>undefined</code>.</div><div class=\"hint-method-card\">💡 <b>Синтаксис <code>arr.splice(start, count, ...items)</code>:</b> <u>Мутуючий метод</u>. Починаючи з індексу <code>start</code>, видаляє <code>count</code> елементів і за бажанням вставляє на їх місце нові елементи <code>items</code>.</div><div class=\"hint-method-card\">💡 <b>Синтаксис <code>arr.indexOf(value)</code>:</b> Шукає перше входження елемента за суворим порівнянням <code>===</code>. Повертає індекс елемента або <code>-1</code>, якщо нічого не знайдено.</div></div>",
    "starterParams": "sortedArr, num",
    "starterBody": "return [];",
    "tests": [
      {
        "expr": "insertSorted([10, 20, 30, 40], 25)",
        "expected": [
          10,
          20,
          25,
          30,
          40
        ]
      },
      {
        "expr": "insertSorted([1, 5], 0)",
        "expected": [
          0,
          1,
          5
        ]
      },
      {
        "expr": "insertSorted([1, 5], 10)",
        "expected": [
          1,
          5,
          10
        ]
      }
    ]
  },
  {
    "moduleIdx": 5,
    "id": "5.10",
    "name": "mergeInventoriesWithBonus",
    "title": "Обʼєднання списків інвентаря з усуненням дублікатів",
    "level": "Середній рівень",
    "goal": "Обʼєднати основний інвентар base, додатковий extra та бонусний bonus через concat, а потім повернути масив унікальних назв предметів (без повторів).",
    "reqs": [
      "Порядок появи першого екземпляра кожного предмета."
    ],
    "hint": "<b>Підказка до алгоритму:</b> Проаналізуйте вхідні структури. Зверніть увагу на перевірку граничних випадків (порожній масив, відсутні або нульові значення). Використайте найбільш підходящий метод масиву замість надмірно складних ручних циклів.<div class=\"hint-methods-wrap\" style=\"margin-top:12px; display:flex; flex-direction:column; gap:8px;\"><div class=\"hint-method-card\">💡 <b>Цикл <code>for (const item of arr)</code>:</b> Сучасний лаконічний цикл для перебору всіх значень масиву від першого до останнього без необхідності вручну керувати числовим індексом.</div><div class=\"hint-method-card\">💡 <b>Синтаксис <code>arr.push(el)</code>:</b> Додає новий елемент у самий <i>кінець</i> масиву та повертає нову довжину. Змінює (мутує) оригінальний масив. Швидка операція зі складністю <b>O(1)</b>.</div><div class=\"hint-method-card\">💡 <b>Синтаксис <code>arr1.concat(arr2)</code>:</b> Об'єднує масиви в один новий масив, не мутуючи оригінали. Альтернатива — спред-синтаксис <code>[...arr1, ...arr2]</code>.</div><div class=\"hint-method-card\">💡 <b>Синтаксис <code>arr.includes(value)</code>:</b> Перевіряє, чи присутнє значення в масиві. Повертає <code>true</code> або <code>false</code>. Коректно обробляє <code>NaN</code>.</div></div>",
    "starterParams": "base, extra, bonus",
    "starterBody": "return [];",
    "tests": [
      {
        "expr": "mergeInventoriesWithBonus([\"меч\", \"щит\"], [\"зілля\", \"меч\"], [\"лук\", \"щит\"])",
        "expected": [
          "меч",
          "щит",
          "зілля",
          "лук"
        ]
      },
      {
        "expr": "mergeInventoriesWithBonus([\"ключ\"], [], [\"ключ\"])",
        "expected": [
          "ключ"
        ]
      }
    ]
  },
  {
    "moduleIdx": 5,
    "id": "5.11",
    "name": "removeRangeAndReturnBoth",
    "title": "Вилучення діапазону із поверненням залишку та вилучених",
    "level": "Базовий рівень",
    "goal": "Вилучити з масиву елементи від start до end індексів (не включно end) і повернути обʼєкт `{ remaining, extracted }`.",
    "reqs": [
      "Оригінальний масив не повинен зазнавати побічних ефектів."
    ],
    "hint": "<b>Підказка до алгоритму:</b> Проаналізуйте вхідні структури. Зверніть увагу на перевірку граничних випадків (порожній масив, відсутні або нульові значення). Використайте найбільш підходящий метод масиву замість надмірно складних ручних циклів.<div class=\"hint-methods-wrap\" style=\"margin-top:12px; display:flex; flex-direction:column; gap:8px;\"><div class=\"hint-method-card\">💡 <b>Доступ за індексом <code>arr[i]</code>:</b> Індексація починається з <b>0</b>. Перший елемент — <code>arr[0]</code>, другий — <code>arr[1]</code>. Зміна значення: <code>arr[i] = newValue;</code>. Якщо елемента не існує — повертається <code>undefined</code>.</div><div class=\"hint-method-card\">💡 <b>Синтаксис <code>arr.splice(start, count, ...items)</code>:</b> <u>Мутуючий метод</u>. Починаючи з індексу <code>start</code>, видаляє <code>count</code> елементів і за бажанням вставляє на їх місце нові елементи <code>items</code>.</div></div>",
    "starterParams": "arr, start, end",
    "starterBody": "return { remaining: [], extracted: [] };",
    "tests": [
      {
        "expr": "removeRangeAndReturnBoth([\"a\", \"b\", \"c\", \"d\", \"e\"], 1, 4)",
        "expected": {
          "remaining": [
            "a",
            "e"
          ],
          "extracted": [
            "b",
            "c",
            "d"
          ]
        }
      },
      {
        "expr": "removeRangeAndReturnBoth([1, 2, 3], 0, 1)",
        "expected": {
          "remaining": [
            2,
            3
          ],
          "extracted": [
            1
          ]
        }
      }
    ]
  },
  {
    "moduleIdx": 5,
    "id": "5.12",
    "name": "cloneViaSlice",
    "title": "Клонування масиву за допомогою slice(0)",
    "level": "Початковий рівень",
    "goal": "Створити повну неглибоку копію масиву arr за допомогою виклику arr.slice(0) та перевірити, що зміна копії не впливає на arr.",
    "reqs": [
      "Повернути обʼєкт { clone, isDistinctReference: clone !== arr }."
    ],
    "hint": "<b>Підказка до алгоритму:</b> Проаналізуйте вхідні структури. Зверніть увагу на перевірку граничних випадків (порожній масив, відсутні або нульові значення). Використайте найбільш підходящий метод масиву замість надмірно складних ручних циклів.<div class=\"hint-methods-wrap\" style=\"margin-top:12px; display:flex; flex-direction:column; gap:8px;\"><div class=\"hint-method-card\">💡 <b>Синтаксис <code>arr.slice(start, end)</code>:</b> Копіює частину масиву від індексу <code>start</code> до <code>end</code> (сам <code>end</code> не включається). <u>НЕ змінює</u> вихідний масив, а повертає новий підмасив.</div></div>",
    "starterParams": "arr",
    "starterBody": "return { clone: [], isDistinctReference: false };",
    "tests": [
      {
        "expr": "cloneViaSlice([1, 2, 3])",
        "expected": {
          "clone": [
            1,
            2,
            3
          ],
          "isDistinctReference": true
        }
      },
      {
        "expr": "cloneViaSlice([])",
        "expected": {
          "clone": [],
          "isDistinctReference": true
        }
      }
    ]
  },
  {
    "moduleIdx": 6,
    "id": "6.1",
    "name": "create2DMatrix",
    "title": "Створення матриці rows x cols із дефолтним значенням",
    "level": "Початковий рівень",
    "goal": "Створити прямокутний двовимірний масив розміром rows на cols, заповнений значенням defaultValue.",
    "reqs": [
      "Для rows <= 0 або cols <= 0 повернути []."
    ],
    "hint": "<b>Підказка до алгоритму:</b> Проаналізуйте вхідні структури. Зверніть увагу на перевірку граничних випадків (порожній масив, відсутні або нульові значення). Використайте найбільш підходящий метод масиву замість надмірно складних ручних циклів.<div class=\"hint-methods-wrap\" style=\"margin-top:12px; display:flex; flex-direction:column; gap:8px;\"><div class=\"hint-method-card\">💡 <b>Синтаксис <code>arr.push(el)</code>:</b> Додає новий елемент у самий <i>кінець</i> масиву та повертає нову довжину. Змінює (мутує) оригінальний масив. Швидка операція зі складністю <b>O(1)</b>.</div><div class=\"hint-method-card\">💡 <b>Двовимірні масиви (Матриці <code>matrix[r][c]</code>):</b> Масив, елементами якого є інші масиви. Перший індекс <code>r</code> — це рядок, другий <code>c</code> — стовпець. Для перебору використовують два вкладені цикли <code>for</code>.</div></div>",
    "starterParams": "rows, cols, defaultValue",
    "starterBody": "return [];",
    "tests": [
      {
        "expr": "create2DMatrix(2, 3, 0)",
        "expected": [
          [
            0,
            0,
            0
          ],
          [
            0,
            0,
            0
          ]
        ]
      },
      {
        "expr": "create2DMatrix(1, 2, \"x\")",
        "expected": [
          [
            "x",
            "x"
          ]
        ]
      },
      {
        "expr": "create2DMatrix(0, 5, 1)",
        "expected": []
      }
    ]
  },
  {
    "moduleIdx": 6,
    "id": "6.2",
    "name": "getMatrixElement",
    "title": "Безпечне зчитування комірки matrix[r][c]",
    "level": "Початковий рівень",
    "goal": "Отримати значення комірки matrix[r][c]. Якщо r або c виходять за межі матриці, повернути undefined.",
    "reqs": [
      "Повернути matrix[r][c] або undefined."
    ],
    "hint": "<b>Підказка до алгоритму:</b> Проаналізуйте вхідні структури. Зверніть увагу на перевірку граничних випадків (порожній масив, відсутні або нульові значення). Використайте найбільш підходящий метод масиву замість надмірно складних ручних циклів.<div class=\"hint-methods-wrap\" style=\"margin-top:12px; display:flex; flex-direction:column; gap:8px;\"><div class=\"hint-method-card\">💡 <b>Властивість <code>arr.length</code>:</b> Відображає поточну кількість елементів у масиві. Останній допустимий індекс завжди дорівнює <code>arr.length - 1</code>. Примусове присвоєння <code>arr.length = 0</code> повністю очищує масив.</div><div class=\"hint-method-card\">💡 <b>Двовимірні масиви (Матриці <code>matrix[r][c]</code>):</b> Масив, елементами якого є інші масиви. Перший індекс <code>r</code> — це рядок, другий <code>c</code> — стовпець. Для перебору використовують два вкладені цикли <code>for</code>.</div></div>",
    "starterParams": "matrix, r, c",
    "starterBody": "return undefined;",
    "tests": [
      {
        "expr": "getMatrixElement([[\"A\", \"B\"], [\"C\", \"D\"]], 1, 0)",
        "expected": "C"
      },
      {
        "expr": "getMatrixElement([[1, 2], [3, 4]], 5, 1)"
      },
      {
        "expr": "getMatrixElement([], 0, 0)"
      }
    ]
  },
  {
    "moduleIdx": 6,
    "id": "6.3",
    "name": "setMatrixElement",
    "title": "Безпечний запис у комірку матриці",
    "level": "Базовий рівень",
    "goal": "Записати нове значення value у комірку matrix[r][c] (повернувши оновлену копію матриці).",
    "reqs": [
      "Не мутувати вхідну матрицю.",
      "Якщо координати поза межами, повернути копію без змін."
    ],
    "hint": "<b>Підказка до алгоритму:</b> Проаналізуйте вхідні структури. Зверніть увагу на перевірку граничних випадків (порожній масив, відсутні або нульові значення). Використайте найбільш підходящий метод масиву замість надмірно складних ручних циклів.<div class=\"hint-methods-wrap\" style=\"margin-top:12px; display:flex; flex-direction:column; gap:8px;\"><div class=\"hint-method-card\">💡 <b>Властивість <code>arr.length</code>:</b> Відображає поточну кількість елементів у масиві. Останній допустимий індекс завжди дорівнює <code>arr.length - 1</code>. Примусове присвоєння <code>arr.length = 0</code> повністю очищує масив.</div><div class=\"hint-method-card\">💡 <b>Двовимірні масиви (Матриці <code>matrix[r][c]</code>):</b> Масив, елементами якого є інші масиви. Перший індекс <code>r</code> — це рядок, другий <code>c</code> — стовпець. Для перебору використовують два вкладені цикли <code>for</code>.</div><div class=\"hint-method-card\">💡 <b>Синтаксис <code>arr.map(transform)</code>:</b> Створює новий масив такої ж довжини, трансформуючи кожен елемент переданою функцією.</div></div>",
    "starterParams": "matrix, r, c, value",
    "starterBody": "return [];",
    "tests": [
      {
        "expr": "setMatrixElement([[1, 2], [3, 4]], 0, 1, 99)",
        "expected": [
          [
            1,
            99
          ],
          [
            3,
            4
          ]
        ]
      },
      {
        "expr": "setMatrixElement([[\"a\", \"b\"]], 0, 0, \"z\")",
        "expected": [
          [
            "z",
            "b"
          ]
        ]
      }
    ]
  },
  {
    "moduleIdx": 6,
    "id": "6.4",
    "name": "matrixTotalSum",
    "title": "Сума всіх чисел у 2D масиві",
    "level": "Базовий рівень",
    "goal": "Обчислити загальну суму всіх чисел у двовимірній матриці matrix за допомогою вкладених циклів.",
    "reqs": [
      "Якщо матриця порожня, повернути 0."
    ],
    "hint": "<b>Підказка до алгоритму:</b> Проаналізуйте вхідні структури. Зверніть увагу на перевірку граничних випадків (порожній масив, відсутні або нульові значення). Використайте найбільш підходящий метод масиву замість надмірно складних ручних циклів.<div class=\"hint-methods-wrap\" style=\"margin-top:12px; display:flex; flex-direction:column; gap:8px;\"><div class=\"hint-method-card\">💡 <b>Властивість <code>arr.length</code>:</b> Відображає поточну кількість елементів у масиві. Останній допустимий індекс завжди дорівнює <code>arr.length - 1</code>. Примусове присвоєння <code>arr.length = 0</code> повністю очищує масив.</div><div class=\"hint-method-card\">💡 <b>Двовимірні масиви (Матриці <code>matrix[r][c]</code>):</b> Масив, елементами якого є інші масиви. Перший індекс <code>r</code> — це рядок, другий <code>c</code> — стовпець. Для перебору використовують два вкладені цикли <code>for</code>.</div></div>",
    "starterParams": "matrix",
    "starterBody": "return 0;",
    "tests": [
      {
        "expr": "matrixTotalSum([[1, 2], [3, 4]])",
        "expected": 10
      },
      {
        "expr": "matrixTotalSum([[5, 5], [10, -5]])",
        "expected": 15
      },
      {
        "expr": "matrixTotalSum([])",
        "expected": 0
      }
    ]
  },
  {
    "moduleIdx": 6,
    "id": "6.5",
    "name": "matrixRowSums",
    "title": "Сума елементів кожного рядка матриці",
    "level": "Базовий рівень",
    "goal": "Для кожного рядка матриці обчислити суму його елементів та повернути одновимірний масив сум.",
    "reqs": [
      "Для [[1, 2], [3, 4]] повернути [3, 7]."
    ],
    "hint": "<b>Підказка до алгоритму:</b> Проаналізуйте вхідні структури. Зверніть увагу на перевірку граничних випадків (порожній масив, відсутні або нульові значення). Використайте найбільш підходящий метод масиву замість надмірно складних ручних циклів.<div class=\"hint-methods-wrap\" style=\"margin-top:12px; display:flex; flex-direction:column; gap:8px;\"><div class=\"hint-method-card\">💡 <b>Властивість <code>arr.length</code>:</b> Відображає поточну кількість елементів у масиві. Останній допустимий індекс завжди дорівнює <code>arr.length - 1</code>. Примусове присвоєння <code>arr.length = 0</code> повністю очищує масив.</div><div class=\"hint-method-card\">💡 <b>Синтаксис <code>arr.push(el)</code>:</b> Додає новий елемент у самий <i>кінець</i> масиву та повертає нову довжину. Змінює (мутує) оригінальний масив. Швидка операція зі складністю <b>O(1)</b>.</div><div class=\"hint-method-card\">💡 <b>Двовимірні масиви (Матриці <code>matrix[r][c]</code>):</b> Масив, елементами якого є інші масиви. Перший індекс <code>r</code> — це рядок, другий <code>c</code> — стовпець. Для перебору використовують два вкладені цикли <code>for</code>.</div></div>",
    "starterParams": "matrix",
    "starterBody": "return [];",
    "tests": [
      {
        "expr": "matrixRowSums([[1, 2, 3], [10, 20, 30]])",
        "expected": [
          6,
          60
        ]
      },
      {
        "expr": "matrixRowSums([[5]])",
        "expected": [
          5
        ]
      },
      {
        "expr": "matrixRowSums([])",
        "expected": []
      }
    ]
  },
  {
    "moduleIdx": 6,
    "id": "6.6",
    "name": "matrixColSums",
    "title": "Сума елементів кожного стовпчика матриці",
    "level": "Базовий рівень",
    "goal": "Обчислити суму чисел для кожного стовпчика прямокутної матриці matrix.",
    "reqs": [
      "Для матриці R x C повернути масив довжиною C."
    ],
    "hint": "<b>Підказка до алгоритму:</b> Проаналізуйте вхідні структури. Зверніть увагу на перевірку граничних випадків (порожній масив, відсутні або нульові значення). Використайте найбільш підходящий метод масиву замість надмірно складних ручних циклів.<div class=\"hint-methods-wrap\" style=\"margin-top:12px; display:flex; flex-direction:column; gap:8px;\"><div class=\"hint-method-card\">💡 <b>Властивість <code>arr.length</code>:</b> Відображає поточну кількість елементів у масиві. Останній допустимий індекс завжди дорівнює <code>arr.length - 1</code>. Примусове присвоєння <code>arr.length = 0</code> повністю очищує масив.</div><div class=\"hint-method-card\">💡 <b>Синтаксис <code>arr.push(el)</code>:</b> Додає новий елемент у самий <i>кінець</i> масиву та повертає нову довжину. Змінює (мутує) оригінальний масив. Швидка операція зі складністю <b>O(1)</b>.</div><div class=\"hint-method-card\">💡 <b>Двовимірні масиви (Матриці <code>matrix[r][c]</code>):</b> Масив, елементами якого є інші масиви. Перший індекс <code>r</code> — це рядок, другий <code>c</code> — стовпець. Для перебору використовують два вкладені цикли <code>for</code>.</div></div>",
    "starterParams": "matrix",
    "starterBody": "return [];",
    "tests": [
      {
        "expr": "matrixColSums([[1, 2], [3, 4]])",
        "expected": [
          4,
          6
        ]
      },
      {
        "expr": "matrixColSums([[1, 10, 100], [2, 20, 200]])",
        "expected": [
          3,
          30,
          300
        ]
      },
      {
        "expr": "matrixColSums([])",
        "expected": []
      }
    ]
  },
  {
    "moduleIdx": 6,
    "id": "6.7",
    "name": "matrixMainDiagonal",
    "title": "Елементи головної діагоналі квадратної матриці",
    "level": "Базовий рівень",
    "goal": "Повернути масив елементів, розташованих на головній діагоналі квадратної матриці: matrix[i][i].",
    "reqs": [
      "Для порожньої матриці повернути []."
    ],
    "hint": "<b>Підказка до алгоритму:</b> Проаналізуйте вхідні структури. Зверніть увагу на перевірку граничних випадків (порожній масив, відсутні або нульові значення). Використайте найбільш підходящий метод масиву замість надмірно складних ручних циклів.<div class=\"hint-methods-wrap\" style=\"margin-top:12px; display:flex; flex-direction:column; gap:8px;\"><div class=\"hint-method-card\">💡 <b>Властивість <code>arr.length</code>:</b> Відображає поточну кількість елементів у масиві. Останній допустимий індекс завжди дорівнює <code>arr.length - 1</code>. Примусове присвоєння <code>arr.length = 0</code> повністю очищує масив.</div><div class=\"hint-method-card\">💡 <b>Цикл <code>for (let i = 0; i < arr.length; i++)</code>:</b> Класичний перебір з лічильником <code>i</code>. Дає повний контроль над зміною елементів за індексом, кроком перебору або зворотним рухом.</div><div class=\"hint-method-card\">💡 <b>Синтаксис <code>arr.push(el)</code>:</b> Додає новий елемент у самий <i>кінець</i> масиву та повертає нову довжину. Змінює (мутує) оригінальний масив. Швидка операція зі складністю <b>O(1)</b>.</div><div class=\"hint-method-card\">💡 <b>Двовимірні масиви (Матриці <code>matrix[r][c]</code>):</b> Масив, елементами якого є інші масиви. Перший індекс <code>r</code> — це рядок, другий <code>c</code> — стовпець. Для перебору використовують два вкладені цикли <code>for</code>.</div></div>",
    "starterParams": "matrix",
    "starterBody": "return [];",
    "tests": [
      {
        "expr": "matrixMainDiagonal([[1, 2, 3], [4, 5, 6], [7, 8, 9]])",
        "expected": [
          1,
          5,
          9
        ]
      },
      {
        "expr": "matrixMainDiagonal([[\"a\", \"b\"], [\"c\", \"d\"]])",
        "expected": [
          "a",
          "d"
        ]
      },
      {
        "expr": "matrixMainDiagonal([])",
        "expected": []
      }
    ]
  },
  {
    "moduleIdx": 6,
    "id": "6.8",
    "name": "matrixTranspose",
    "title": "Транспонування прямокутної матриці",
    "level": "Середній рівень",
    "goal": "Транспонувати матрицю розміром R x C у матрицю C x R (перетворити рядки на стовпчики).",
    "reqs": [
      "Повернути новий двовимірний масив."
    ],
    "hint": "<b>Підказка до алгоритму:</b> Проаналізуйте вхідні структури. Зверніть увагу на перевірку граничних випадків (порожній масив, відсутні або нульові значення). Використайте найбільш підходящий метод масиву замість надмірно складних ручних циклів.<div class=\"hint-methods-wrap\" style=\"margin-top:12px; display:flex; flex-direction:column; gap:8px;\"><div class=\"hint-method-card\">💡 <b>Властивість <code>arr.length</code>:</b> Відображає поточну кількість елементів у масиві. Останній допустимий індекс завжди дорівнює <code>arr.length - 1</code>. Примусове присвоєння <code>arr.length = 0</code> повністю очищує масив.</div><div class=\"hint-method-card\">💡 <b>Синтаксис <code>arr.push(el)</code>:</b> Додає новий елемент у самий <i>кінець</i> масиву та повертає нову довжину. Змінює (мутує) оригінальний масив. Швидка операція зі складністю <b>O(1)</b>.</div><div class=\"hint-method-card\">💡 <b>Двовимірні масиви (Матриці <code>matrix[r][c]</code>):</b> Масив, елементами якого є інші масиви. Перший індекс <code>r</code> — це рядок, другий <code>c</code> — стовпець. Для перебору використовують два вкладені цикли <code>for</code>.</div></div>",
    "starterParams": "matrix",
    "starterBody": "return [];",
    "tests": [
      {
        "expr": "matrixTranspose([[1, 2, 3], [4, 5, 6]])",
        "expected": [
          [
            1,
            4
          ],
          [
            2,
            5
          ],
          [
            3,
            6
          ]
        ]
      },
      {
        "expr": "matrixTranspose([[1, 2], [3, 4]])",
        "expected": [
          [
            1,
            3
          ],
          [
            2,
            4
          ]
        ]
      },
      {
        "expr": "matrixTranspose([])",
        "expected": []
      }
    ]
  },
  {
    "moduleIdx": 6,
    "id": "6.9",
    "name": "findInMatrix",
    "title": "Пошук координат елемента в матриці",
    "level": "Базовий рівень",
    "goal": "Знайти перші координати { row, col } елемента targetValue у матриці matrix. Якщо елемент не знайдено, повернути null.",
    "reqs": [
      "Повернути { row, col } або null."
    ],
    "hint": "<b>Підказка до алгоритму:</b> Проаналізуйте вхідні структури. Зверніть увагу на перевірку граничних випадків (порожній масив, відсутні або нульові значення). Використайте найбільш підходящий метод масиву замість надмірно складних ручних циклів.<div class=\"hint-methods-wrap\" style=\"margin-top:12px; display:flex; flex-direction:column; gap:8px;\"><div class=\"hint-method-card\">💡 <b>Властивість <code>arr.length</code>:</b> Відображає поточну кількість елементів у масиві. Останній допустимий індекс завжди дорівнює <code>arr.length - 1</code>. Примусове присвоєння <code>arr.length = 0</code> повністю очищує масив.</div><div class=\"hint-method-card\">💡 <b>Двовимірні масиви (Матриці <code>matrix[r][c]</code>):</b> Масив, елементами якого є інші масиви. Перший індекс <code>r</code> — це рядок, другий <code>c</code> — стовпець. Для перебору використовують два вкладені цикли <code>for</code>.</div></div>",
    "starterParams": "matrix, targetValue",
    "starterBody": "return null;",
    "tests": [
      {
        "expr": "findInMatrix([[\"a\", \"b\"], [\"c\", \"d\"]], \"c\")",
        "expected": {
          "row": 1,
          "col": 0
        }
      },
      {
        "expr": "findInMatrix([[1, 2], [3, 4]], 99)",
        "expected": null
      },
      {
        "expr": "findInMatrix([], 5)",
        "expected": null
      }
    ]
  },
  {
    "moduleIdx": 6,
    "id": "6.10",
    "name": "flatten2D",
    "title": "Сплющення 2D матриці в 1D масив через перебір",
    "level": "Початковий рівень",
    "goal": "Перетворити матрицю (масив рядків) на плаский одновимірний масив за допомогою вкладених циклів без Array.prototype.flat.",
    "reqs": [
      "Повернути одновимірний масив."
    ],
    "hint": "<b>Підказка до алгоритму:</b> Проаналізуйте вхідні структури. Зверніть увагу на перевірку граничних випадків (порожній масив, відсутні або нульові значення). Використайте найбільш підходящий метод масиву замість надмірно складних ручних циклів.<div class=\"hint-methods-wrap\" style=\"margin-top:12px; display:flex; flex-direction:column; gap:8px;\"><div class=\"hint-method-card\">💡 <b>Властивість <code>arr.length</code>:</b> Відображає поточну кількість елементів у масиві. Останній допустимий індекс завжди дорівнює <code>arr.length - 1</code>. Примусове присвоєння <code>arr.length = 0</code> повністю очищує масив.</div><div class=\"hint-method-card\">💡 <b>Синтаксис <code>arr.push(el)</code>:</b> Додає новий елемент у самий <i>кінець</i> масиву та повертає нову довжину. Змінює (мутує) оригінальний масив. Швидка операція зі складністю <b>O(1)</b>.</div><div class=\"hint-method-card\">💡 <b>Двовимірні масиви (Матриці <code>matrix[r][c]</code>):</b> Масив, елементами якого є інші масиви. Перший індекс <code>r</code> — це рядок, другий <code>c</code> — стовпець. Для перебору використовують два вкладені цикли <code>for</code>.</div></div>",
    "starterParams": "matrix",
    "starterBody": "return [];",
    "tests": [
      {
        "expr": "flatten2D([[1, 2], [3, 4], [5]])",
        "expected": [
          1,
          2,
          3,
          4,
          5
        ]
      },
      {
        "expr": "flatten2D([[\"x\"], [\"y\", \"z\"]])",
        "expected": [
          "x",
          "y",
          "z"
        ]
      },
      {
        "expr": "flatten2D([])",
        "expected": []
      }
    ]
  },
  {
    "moduleIdx": 6,
    "id": "6.11",
    "name": "ticTacToeCheck",
    "title": "Перевірка переможця на полі Хрестики-Нулики 3x3",
    "level": "Середній рівень",
    "goal": "Визначити, чи є переможець на квадратному полі board 3x3 (\"X\" або \"O\"). Перевірити всі 3 рядки, 3 стовпчики та 2 діагоналі. Якщо переможця немає, повернути null.",
    "reqs": [
      "Повернути \"X\", \"O\" або null."
    ],
    "hint": "<b>Підказка до алгоритму:</b> Проаналізуйте вхідні структури. Зверніть увагу на перевірку граничних випадків (порожній масив, відсутні або нульові значення). Використайте найбільш підходящий метод масиву замість надмірно складних ручних циклів.<div class=\"hint-methods-wrap\" style=\"margin-top:12px; display:flex; flex-direction:column; gap:8px;\"><div class=\"hint-method-card\">💡 <b>Синтаксис <code>[a, b, c]</code>:</b> Літерал масиву — найпростіший та найшвидший спосіб створення списку елементів через кому всередині квадратних дужок.</div></div>",
    "starterParams": "board",
    "starterBody": "return null;",
    "tests": [
      {
        "expr": "ticTacToeCheck([[\"X\", \"X\", \"X\"], [\"O\", \" \", \"O\"], [\" \", \" \", \" \"]])",
        "expected": "X"
      },
      {
        "expr": "ticTacToeCheck([[\"O\", \"X\", \" \"], [\" \", \"O\", \"X\"], [\" \", \" \", \"O\"]])",
        "expected": "O"
      },
      {
        "expr": "ticTacToeCheck([[\"X\", \"O\", \"X\"], [\"O\", \"X\", \"O\"], [\"O\", \"X\", \"O\"]])",
        "expected": null
      }
    ]
  },
  {
    "moduleIdx": 6,
    "id": "6.12",
    "name": "createMultiplicationMatrix",
    "title": "Генерація таблиці множення N x N",
    "level": "Базовий рівень",
    "goal": "Створити квадратну матрицю розміром n x n, де кожен елемент [r][c] = (r + 1) * (c + 1).",
    "reqs": [
      "Для n <= 0 повернути []."
    ],
    "hint": "<b>Підказка до алгоритму:</b> Проаналізуйте вхідні структури. Зверніть увагу на перевірку граничних випадків (порожній масив, відсутні або нульові значення). Використайте найбільш підходящий метод масиву замість надмірно складних ручних циклів.<div class=\"hint-methods-wrap\" style=\"margin-top:12px; display:flex; flex-direction:column; gap:8px;\"><div class=\"hint-method-card\">💡 <b>Синтаксис <code>arr.push(el)</code>:</b> Додає новий елемент у самий <i>кінець</i> масиву та повертає нову довжину. Змінює (мутує) оригінальний масив. Швидка операція зі складністю <b>O(1)</b>.</div><div class=\"hint-method-card\">💡 <b>Двовимірні масиви (Матриці <code>matrix[r][c]</code>):</b> Масив, елементами якого є інші масиви. Перший індекс <code>r</code> — це рядок, другий <code>c</code> — стовпець. Для перебору використовують два вкладені цикли <code>for</code>.</div></div>",
    "starterParams": "n",
    "starterBody": "return [];",
    "tests": [
      {
        "expr": "createMultiplicationMatrix(3)",
        "expected": [
          [
            1,
            2,
            3
          ],
          [
            2,
            4,
            6
          ],
          [
            3,
            6,
            9
          ]
        ]
      },
      {
        "expr": "createMultiplicationMatrix(1)",
        "expected": [
          [
            1
          ]
        ]
      },
      {
        "expr": "createMultiplicationMatrix(0)",
        "expected": []
      }
    ]
  },
  {
    "moduleIdx": 7,
    "id": "7.1",
    "name": "myForEach",
    "title": "Власна реалізація forEach (Кастомний поліфіл)",
    "level": "Легкий рівень",
    "goal": "Реалізувати перебір масиву через класичний цикл for без використання вбудованого array.forEach.",
    "reqs": [
      "Викликати callback(item, index, array) для кожного елемента.",
      "Функція повертає undefined.",
      "Якщо масив порожній — callback не викликається."
    ],
    "hint": "<b>Підказка до алгоритму:</b> Проаналізуйте вхідні структури. Зверніть увагу на перевірку граничних випадків (порожній масив, відсутні або нульові значення). Використайте найбільш підходящий метод масиву замість надмірно складних ручних циклів.<div class=\"hint-methods-wrap\" style=\"margin-top:12px; display:flex; flex-direction:column; gap:8px;\"><div class=\"hint-method-card\">💡 <b>Властивість <code>arr.length</code>:</b> Відображає поточну кількість елементів у масиві. Останній допустимий індекс завжди дорівнює <code>arr.length - 1</code>. Примусове присвоєння <code>arr.length = 0</code> повністю очищує масив.</div><div class=\"hint-method-card\">💡 <b>Цикл <code>for (let i = 0; i < arr.length; i++)</code>:</b> Класичний перебір з лічильником <code>i</code>. Дає повний контроль над зміною елементів за індексом, кроком перебору або зворотним рухом.</div></div>",
    "starterParams": "array, callback",
    "starterBody": "return undefined;",
    "tests": [
      {
        "expr": "(() => { const log = []; myForEach([10, 20], (x, i) => log.push(`${i}:${x}`)); return log; })()",
        "expected": [
          "0:10",
          "1:20"
        ]
      },
      {
        "expr": "myForEach([], () => {})"
      }
    ]
  },
  {
    "moduleIdx": 7,
    "id": "7.2",
    "name": "notifySubscribers",
    "title": "Практична розсилка сповіщень підписникам",
    "level": "Легкий рівень",
    "goal": "За допомогою forEach відфільтрувати активних підписників та зібрати масив надісланих повідомлень.",
    "reqs": [
      "Опрацьовувати лише користувачів із isSubscribed === true.",
      "Формат тексту: \"Привіт, [name]! [message]\".",
      "Повернути масив обʼєктів { to: email, text }."
    ],
    "hint": "<b>Підказка до алгоритму:</b> Проаналізуйте вхідні структури. Зверніть увагу на перевірку граничних випадків (порожній масив, відсутні або нульові значення). Використайте найбільш підходящий метод масиву замість надмірно складних ручних циклів.<div class=\"hint-methods-wrap\" style=\"margin-top:12px; display:flex; flex-direction:column; gap:8px;\"><div class=\"hint-method-card\">💡 <b>Синтаксис <code>arr.push(el)</code>:</b> Додає новий елемент у самий <i>кінець</i> масиву та повертає нову довжину. Змінює (мутує) оригінальний масив. Швидка операція зі складністю <b>O(1)</b>.</div></div>",
    "starterParams": "users, message",
    "starterBody": "return [];",
    "tests": [
      {
        "expr": "notifySubscribers([{ name: \"Олена\", isSubscribed: true, email: \"o@test.com\" }, { name: \"Макс\", isSubscribed: false, email: \"m@test.com\" }], \"Хакатон!\")",
        "expected": [
          {
            "to": "o@test.com",
            "text": "Привіт, Олена! Хакатон!"
          }
        ]
      },
      {
        "expr": "notifySubscribers([], \"тест\")",
        "expected": []
      }
    ]
  },
  {
    "moduleIdx": 7,
    "id": "7.3",
    "name": "tallyVotes",
    "title": "Підрахунок голосів на виборах за допомогою forEach",
    "level": "Базовий рівень",
    "goal": "Підрахувати кількість голосів за кожного кандидата, ігноруючи порожні або недійсні бюлетені.",
    "reqs": [
      "Повернути обʼєкт { candidateVotes: { ... }, totalValidVotes }."
    ],
    "hint": "<b>Підказка до алгоритму:</b> Проаналізуйте вхідні структури. Зверніть увагу на перевірку граничних випадків (порожній масив, відсутні або нульові значення). Використайте найбільш підходящий метод масиву замість надмірно складних ручних циклів.<div class=\"hint-methods-wrap\" style=\"margin-top:12px; display:flex; flex-direction:column; gap:8px;\"><div class=\"hint-method-card\">💡 <b>Синтаксис <code>[a, b, c]</code>:</b> Літерал масиву — найпростіший та найшвидший спосіб створення списку елементів через кому всередині квадратних дужок.</div></div>",
    "starterParams": "votes",
    "starterBody": "return { candidateVotes: {}, totalValidVotes: 0 };",
    "tests": [
      {
        "expr": "tallyVotes([\"Олена\", \"Ігор\", \"Олена\", \"\"])",
        "expected": {
          "candidateVotes": {
            "Олена": 2,
            "Ігор": 1
          },
          "totalValidVotes": 3
        }
      },
      {
        "expr": "tallyVotes([])",
        "expected": {
          "candidateVotes": {},
          "totalValidVotes": 0
        }
      }
    ]
  },
  {
    "moduleIdx": 8,
    "id": "8.1",
    "name": "myMap",
    "title": "Власна реалізація map (Кастомний поліфіл)",
    "level": "Легкий рівень",
    "goal": "Створити новий масив, кожен елемент якого є результатом виклику callback(item, index, array), без використання вбудованого array.map.",
    "reqs": [
      "Не мутувати вхідний масив.",
      "Повернути новий масив такої ж довжини."
    ],
    "hint": "<b>Підказка до алгоритму:</b> Проаналізуйте вхідні структури. Зверніть увагу на перевірку граничних випадків (порожній масив, відсутні або нульові значення). Використайте найбільш підходящий метод масиву замість надмірно складних ручних циклів.<div class=\"hint-methods-wrap\" style=\"margin-top:12px; display:flex; flex-direction:column; gap:8px;\"><div class=\"hint-method-card\">💡 <b>Властивість <code>arr.length</code>:</b> Відображає поточну кількість елементів у масиві. Останній допустимий індекс завжди дорівнює <code>arr.length - 1</code>. Примусове присвоєння <code>arr.length = 0</code> повністю очищує масив.</div><div class=\"hint-method-card\">💡 <b>Цикл <code>for (let i = 0; i < arr.length; i++)</code>:</b> Класичний перебір з лічильником <code>i</code>. Дає повний контроль над зміною елементів за індексом, кроком перебору або зворотним рухом.</div><div class=\"hint-method-card\">💡 <b>Синтаксис <code>arr.push(el)</code>:</b> Додає новий елемент у самий <i>кінець</i> масиву та повертає нову довжину. Змінює (мутує) оригінальний масив. Швидка операція зі складністю <b>O(1)</b>.</div></div>",
    "starterParams": "array, callback",
    "starterBody": "return [];",
    "tests": [
      {
        "expr": "myMap([1, 2, 3], x => x * 2)",
        "expected": [
          2,
          4,
          6
        ]
      },
      {
        "expr": "myMap([\"a\", \"b\"], (x, i) => `${i}:${x}`)",
        "expected": [
          "0:a",
          "1:b"
        ]
      }
    ]
  },
  {
    "moduleIdx": 8,
    "id": "8.2",
    "name": "formatProductCards",
    "title": "E-commerce DTO картки товарів з перерахунком цін",
    "level": "Базовий рівень",
    "goal": "Трансформувати масив сирих товарів: перевести ціну з USD у гривні за курсом exchangeRate, додати ПДВ vatPercent та сформувати поля priceFormatted і badge.",
    "reqs": [
      "Розрахунок: priceUah = Math.round(priceUsd * exchangeRate * (1 + vatPercent / 100)).",
      "badge: inStock ? \"В наявності\" : \"Під замовлення\"."
    ],
    "hint": "<b>Підказка до алгоритму:</b> Проаналізуйте вхідні структури. Зверніть увагу на перевірку граничних випадків (порожній масив, відсутні або нульові значення). Використайте найбільш підходящий метод масиву замість надмірно складних ручних циклів.<div class=\"hint-methods-wrap\" style=\"margin-top:12px; display:flex; flex-direction:column; gap:8px;\"><div class=\"hint-method-card\">💡 <b>Синтаксис <code>arr.map(transform)</code>:</b> Створює новий масив такої ж довжини, трансформуючи кожен елемент переданою функцією.</div></div>",
    "starterParams": "products, exchangeRate, vatPercent",
    "starterBody": "return [];",
    "tests": [
      {
        "expr": "formatProductCards([{ id: 1, name: \"Ноутбук\", priceUsd: 1000, inStock: true }], 40, 20)",
        "expected": [
          {
            "id": 1,
            "title": "Ноутбук",
            "priceUah": 48000,
            "priceFormatted": "48000 ₴",
            "badge": "В наявності"
          }
        ]
      }
    ]
  },
  {
    "moduleIdx": 8,
    "id": "8.3",
    "name": "anonymizeUserData",
    "title": "Маскування персональних даних за GDPR",
    "level": "Базовий рівень",
    "goal": "Анонімізувати користувачів: maskedName (імʼя та перша літера прізвища з крапкою), email (перша літера + ***@домен), phone (перші 4 та останні 2 цифри з зірочками посередині).",
    "reqs": [
      "Приклад: \"Тарас Шевченко\" -> \"Тарас Ш.\", \"taras@ukr.net\" -> \"t***@ukr.net\", \"+380501234567\" -> \"+380******67\"."
    ],
    "hint": "<b>Підказка до алгоритму:</b> Проаналізуйте вхідні структури. Зверніть увагу на перевірку граничних випадків (порожній масив, відсутні або нульові значення). Використайте найбільш підходящий метод масиву замість надмірно складних ручних циклів.<div class=\"hint-methods-wrap\" style=\"margin-top:12px; display:flex; flex-direction:column; gap:8px;\"><div class=\"hint-method-card\">💡 <b>Синтаксис <code>arr.slice(start, end)</code>:</b> Копіює частину масиву від індексу <code>start</code> до <code>end</code> (сам <code>end</code> не включається). <u>НЕ змінює</u> вихідний масив, а повертає новий підмасив.</div><div class=\"hint-method-card\">💡 <b>Синтаксис <code>arr.indexOf(value)</code>:</b> Шукає перше входження елемента за суворим порівнянням <code>===</code>. Повертає індекс елемента або <code>-1</code>, якщо нічого не знайдено.</div><div class=\"hint-method-card\">💡 <b>Синтаксис <code>arr.map(transform)</code>:</b> Створює новий масив такої ж довжини, трансформуючи кожен елемент переданою функцією.</div></div>",
    "starterParams": "users",
    "starterBody": "return [];",
    "tests": [
      {
        "expr": "anonymizeUserData([{ id: 1, fullName: \"Тарас Шевченко\", email: \"taras@ukr.net\", phone: \"+380501234567\" }])",
        "expected": [
          {
            "id": 1,
            "maskedName": "Тарас Ш.",
            "email": "t***@ukr.net",
            "phone": "+380******67"
          }
        ]
      }
    ]
  },
  {
    "moduleIdx": 8,
    "id": "8.4",
    "name": "normalizeCoordinates",
    "title": "Нормалізація гео-координат",
    "level": "Середній рівень",
    "goal": "Перетворити вхідні координати { lat, lng } на рядок гео-хешу `\"[lat.toFixed(4)},${lng.toFixed(4)}]\"` та додати поле isEquator (lat === 0).",
    "reqs": [
      "Округлити кожну координату до 4 знаків після коми."
    ],
    "hint": "<b>Підказка до алгоритму:</b> Проаналізуйте вхідні структури. Зверніть увагу на перевірку граничних випадків (порожній масив, відсутні або нульові значення). Використайте найбільш підходящий метод масиву замість надмірно складних ручних циклів.<div class=\"hint-methods-wrap\" style=\"margin-top:12px; display:flex; flex-direction:column; gap:8px;\"><div class=\"hint-method-card\">💡 <b>Синтаксис <code>arr.map(transform)</code>:</b> Створює новий масив такої ж довжини, трансформуючи кожен елемент переданою функцією.</div></div>",
    "starterParams": "coords",
    "starterBody": "return [];",
    "tests": [
      {
        "expr": "normalizeCoordinates([{ lat: 50.4501, lng: 30.5234 }, { lat: 0, lng: 20.12 }])",
        "expected": [
          {
            "hash": "[50.4501,30.5234]",
            "isEquator": false
          },
          {
            "hash": "[0.0000,20.1200]",
            "isEquator": true
          }
        ]
      }
    ]
  },
  {
    "moduleIdx": 9,
    "id": "9.1",
    "name": "myFilter",
    "title": "Власна реалізація filter (Кастомний поліфіл)",
    "level": "Легкий рівень",
    "goal": "Реалізувати фільтрацію масиву без використання Array.prototype.filter.",
    "reqs": [
      "Повернути новий масив, що містить тільки ті елементи, для яких callback повернув truthy значення."
    ],
    "hint": "<b>Підказка до алгоритму:</b> Проаналізуйте вхідні структури. Зверніть увагу на перевірку граничних випадків (порожній масив, відсутні або нульові значення). Використайте найбільш підходящий метод масиву замість надмірно складних ручних циклів.<div class=\"hint-methods-wrap\" style=\"margin-top:12px; display:flex; flex-direction:column; gap:8px;\"><div class=\"hint-method-card\">💡 <b>Властивість <code>arr.length</code>:</b> Відображає поточну кількість елементів у масиві. Останній допустимий індекс завжди дорівнює <code>arr.length - 1</code>. Примусове присвоєння <code>arr.length = 0</code> повністю очищує масив.</div><div class=\"hint-method-card\">💡 <b>Цикл <code>for (let i = 0; i < arr.length; i++)</code>:</b> Класичний перебір з лічильником <code>i</code>. Дає повний контроль над зміною елементів за індексом, кроком перебору або зворотним рухом.</div><div class=\"hint-method-card\">💡 <b>Синтаксис <code>arr.push(el)</code>:</b> Додає новий елемент у самий <i>кінець</i> масиву та повертає нову довжину. Змінює (мутує) оригінальний масив. Швидка операція зі складністю <b>O(1)</b>.</div></div>",
    "starterParams": "array, callback",
    "starterBody": "return [];",
    "tests": [
      {
        "expr": "myFilter([1, 2, 3, 4, 5], x => x % 2 === 0)",
        "expected": [
          2,
          4
        ]
      },
      {
        "expr": "myFilter([\"apple\", \"banana\"], s => s.startsWith(\"a\"))",
        "expected": [
          "apple"
        ]
      }
    ]
  },
  {
    "moduleIdx": 9,
    "id": "9.2",
    "name": "filterValidPromoCodes",
    "title": "Фільтр валідних промокодів акції",
    "level": "Базовий рівень",
    "goal": "Відфільтрувати промокоди, які дійсні на дату currentIsoDate (currentIsoDate <= expiryDate), активні (isActive === true) та знижка discountPercent >= minDiscount.",
    "reqs": [
      "Повернути масив валідних обʼєктів промокодів."
    ],
    "hint": "<b>Підказка до алгоритму:</b> Проаналізуйте вхідні структури. Зверніть увагу на перевірку граничних випадків (порожній масив, відсутні або нульові значення). Використайте найбільш підходящий метод масиву замість надмірно складних ручних циклів.<div class=\"hint-methods-wrap\" style=\"margin-top:12px; display:flex; flex-direction:column; gap:8px;\"><div class=\"hint-method-card\">💡 <b>Синтаксис <code>arr.filter(predicate)</code>:</b> Створює новий масив, відбираючи тільки ті елементи, для яких колбек-функція повернула <code>true</code>.</div></div>",
    "starterParams": "promos, currentIsoDate, minDiscount",
    "starterBody": "return [];",
    "tests": [
      {
        "expr": "filterValidPromoCodes([{ code: \"SALE20\", isActive: true, expiryDate: \"2026-12-31\", discountPercent: 20 }, { code: \"OLD\", isActive: true, expiryDate: \"2025-01-01\", discountPercent: 30 }], \"2026-10-17\", 15)",
        "expected": [
          {
            "code": "SALE20",
            "isActive": true,
            "expiryDate": "2026-12-31",
            "discountPercent": 20
          }
        ]
      }
    ]
  },
  {
    "moduleIdx": 9,
    "id": "9.3",
    "name": "moderateComments",
    "title": "Модерація коментарів та фільтрація спаму",
    "level": "Базовий рівень",
    "goal": "Відфільтрувати коментарі: виключити ті, які позначені як isSpam, мають рейтинг rating < 1 або містять заборонені слова зі списку stopWords.",
    "reqs": [
      "Повернути масив схвалених коментарів."
    ],
    "hint": "<b>Підказка до алгоритму:</b> Проаналізуйте вхідні структури. Зверніть увагу на перевірку граничних випадків (порожній масив, відсутні або нульові значення). Використайте найбільш підходящий метод масиву замість надмірно складних ручних циклів.<div class=\"hint-methods-wrap\" style=\"margin-top:12px; display:flex; flex-direction:column; gap:8px;\"><div class=\"hint-method-card\">💡 <b>Синтаксис <code>arr.includes(value)</code>:</b> Перевіряє, чи присутнє значення в масиві. Повертає <code>true</code> або <code>false</code>. Коректно обробляє <code>NaN</code>.</div><div class=\"hint-method-card\">💡 <b>Синтаксис <code>arr.filter(predicate)</code>:</b> Створює новий масив, відбираючи тільки ті елементи, для яких колбек-функція повернула <code>true</code>.</div><div class=\"hint-method-card\">💡 <b>Синтаксис <code>arr.some(predicate)</code>:</b> Повертає <code>true</code>, якщо хоча б один елемент задовольняє умову, інакше <code>false</code>.</div></div>",
    "starterParams": "comments, stopWords",
    "starterBody": "return [];",
    "tests": [
      {
        "expr": "moderateComments([{ text: \"Чудовий курс!\", isSpam: false, rating: 5 }, { text: \"Купи крипту\", isSpam: true, rating: 1 }], [\"крипту\"])",
        "expected": [
          {
            "text": "Чудовий курс!",
            "isSpam": false,
            "rating": 5
          }
        ]
      }
    ]
  },
  {
    "moduleIdx": 9,
    "id": "9.4",
    "name": "findAvailableHotelRooms",
    "title": "Пошук вільних номерів готелю",
    "level": "Середній рівень",
    "goal": "Відфільтрувати номери, які вміщують щонайменше guestsCount гостей, мають ціну за ніч <= maxPrice та мають статус isAvailable === true.",
    "reqs": [
      "Повернути масив доступних номерів."
    ],
    "hint": "<b>Підказка до алгоритму:</b> Проаналізуйте вхідні структури. Зверніть увагу на перевірку граничних випадків (порожній масив, відсутні або нульові значення). Використайте найбільш підходящий метод масиву замість надмірно складних ручних циклів.<div class=\"hint-methods-wrap\" style=\"margin-top:12px; display:flex; flex-direction:column; gap:8px;\"><div class=\"hint-method-card\">💡 <b>Синтаксис <code>arr.filter(predicate)</code>:</b> Створює новий масив, відбираючи тільки ті елементи, для яких колбек-функція повернула <code>true</code>.</div></div>",
    "starterParams": "rooms, guestsCount, maxPrice",
    "starterBody": "return [];",
    "tests": [
      {
        "expr": "findAvailableHotelRooms([{ id: 101, capacity: 2, pricePerNight: 1200, isAvailable: true }, { id: 102, capacity: 4, pricePerNight: 3500, isAvailable: true }], 2, 2000)",
        "expected": [
          {
            "id": 101,
            "capacity": 2,
            "pricePerNight": 1200,
            "isAvailable": true
          }
        ]
      }
    ]
  },
  {
    "moduleIdx": 10,
    "id": "10.1",
    "name": "myFindAndFindIndex",
    "title": "Кастомні поліфіли myFind та myFindIndex",
    "level": "Базовий рівень",
    "goal": "Реалізувати дві функції пошуку: myFind повертає перший знайдений елемент (або undefined), myFindIndex повертає його індекс (або -1).",
    "reqs": [
      "Повернути обʼєкт { item, index }."
    ],
    "hint": "<b>Підказка до алгоритму:</b> Проаналізуйте вхідні структури. Зверніть увагу на перевірку граничних випадків (порожній масив, відсутні або нульові значення). Використайте найбільш підходящий метод масиву замість надмірно складних ручних циклів.<div class=\"hint-methods-wrap\" style=\"margin-top:12px; display:flex; flex-direction:column; gap:8px;\"><div class=\"hint-method-card\">💡 <b>Властивість <code>arr.length</code>:</b> Відображає поточну кількість елементів у масиві. Останній допустимий індекс завжди дорівнює <code>arr.length - 1</code>. Примусове присвоєння <code>arr.length = 0</code> повністю очищує масив.</div><div class=\"hint-method-card\">💡 <b>Доступ за індексом <code>arr[i]</code>:</b> Індексація починається з <b>0</b>. Перший елемент — <code>arr[0]</code>, другий — <code>arr[1]</code>. Зміна значення: <code>arr[i] = newValue;</code>. Якщо елемента не існує — повертається <code>undefined</code>.</div><div class=\"hint-method-card\">💡 <b>Цикл <code>for (let i = 0; i < arr.length; i++)</code>:</b> Класичний перебір з лічильником <code>i</code>. Дає повний контроль над зміною елементів за індексом, кроком перебору або зворотним рухом.</div></div>",
    "starterParams": "array, predicate",
    "starterBody": "return { item: undefined, index: -1 };",
    "tests": [
      {
        "expr": "myFindAndFindIndex([10, 25, 30, 45], x => x > 20)",
        "expected": {
          "item": 25,
          "index": 1
        }
      },
      {
        "expr": "myFindAndFindIndex([1, 2, 3], x => x > 99)",
        "expected": {
          "item": null,
          "index": -1
        }
      }
    ]
  },
  {
    "moduleIdx": 10,
    "id": "10.2",
    "name": "detectSecurityAnomaly",
    "title": "Виявлення першої критичної аномалії в логах",
    "level": "Середній рівень",
    "goal": "Знайти в масиві логів сервера перший запис із рівнем level === \"CRITICAL\" або кодом помилки statusCode >= 500. Повернути { foundLog, logIndex } або null.",
    "reqs": [
      "Якщо аномалій немає, повернути null."
    ],
    "hint": "<b>Підказка до алгоритму:</b> Проаналізуйте вхідні структури. Зверніть увагу на перевірку граничних випадків (порожній масив, відсутні або нульові значення). Використайте найбільш підходящий метод масиву замість надмірно складних ручних циклів.<div class=\"hint-methods-wrap\" style=\"margin-top:12px; display:flex; flex-direction:column; gap:8px;\"><div class=\"hint-method-card\">💡 <b>Синтаксис <code>arr.findIndex(predicate)</code>:</b> Повертає індекс першого елемента, що відповідає умові, або <code>-1</code>.</div></div>",
    "starterParams": "logs",
    "starterBody": "return null;",
    "tests": [
      {
        "expr": "detectSecurityAnomaly([{ id: 1, level: \"INFO\", statusCode: 200 }, { id: 2, level: \"ERROR\", statusCode: 502 }])",
        "expected": {
          "foundLog": {
            "id": 2,
            "level": "ERROR",
            "statusCode": 502
          },
          "logIndex": 1
        }
      },
      {
        "expr": "detectSecurityAnomaly([{ id: 1, level: \"INFO\", statusCode: 200 }])",
        "expected": null
      }
    ]
  },
  {
    "moduleIdx": 10,
    "id": "10.3",
    "name": "selectFirstAvailableSeat",
    "title": "Вибір першого підходящого місця в літаку",
    "level": "Базовий рівень",
    "goal": "Знайти перше вільне місце (isOccupied === false), яке відповідає вподобанню preferWindow (isWindow === preferWindow) та не знаходиться в аварійному ряду (isEmergencyRow === false).",
    "reqs": [
      "Повернути знайдений обʼєкт місця або null."
    ],
    "hint": "<b>Підказка до алгоритму:</b> Проаналізуйте вхідні структури. Зверніть увагу на перевірку граничних випадків (порожній масив, відсутні або нульові значення). Використайте найбільш підходящий метод масиву замість надмірно складних ручних циклів.<div class=\"hint-methods-wrap\" style=\"margin-top:12px; display:flex; flex-direction:column; gap:8px;\"><div class=\"hint-method-card\">💡 <b>Синтаксис <code>arr.find(predicate)</code>:</b> Знаходить і повертає перший елемент, що відповідає умові, або <code>undefined</code>.</div></div>",
    "starterParams": "seats, preferWindow",
    "starterBody": "return null;",
    "tests": [
      {
        "expr": "selectFirstAvailableSeat([{ seat: \"1A\", isOccupied: false, isWindow: true, isEmergencyRow: false }], true)",
        "expected": {
          "seat": "1A",
          "isOccupied": false,
          "isWindow": true,
          "isEmergencyRow": false
        }
      },
      {
        "expr": "selectFirstAvailableSeat([{ seat: \"12A\", isOccupied: false, isWindow: true, isEmergencyRow: true }], true)",
        "expected": null
      }
    ]
  },
  {
    "moduleIdx": 11,
    "id": "11.1",
    "name": "mySomeAndEvery",
    "title": "Власні поліфіли mySome та myEvery",
    "level": "Базовий рівень",
    "goal": "Реалізувати кастомні версії методів some (хоча б один задовольняє) та every (усі задовольняють) без використання вбудованих методів.",
    "reqs": [
      "Повернути { someResult, everyResult }."
    ],
    "hint": "<b>Підказка до алгоритму:</b> Проаналізуйте вхідні структури. Зверніть увагу на перевірку граничних випадків (порожній масив, відсутні або нульові значення). Використайте найбільш підходящий метод масиву замість надмірно складних ручних циклів.<div class=\"hint-methods-wrap\" style=\"margin-top:12px; display:flex; flex-direction:column; gap:8px;\"><div class=\"hint-method-card\">💡 <b>Властивість <code>arr.length</code>:</b> Відображає поточну кількість елементів у масиві. Останній допустимий індекс завжди дорівнює <code>arr.length - 1</code>. Примусове присвоєння <code>arr.length = 0</code> повністю очищує масив.</div><div class=\"hint-method-card\">💡 <b>Цикл <code>for (let i = 0; i < arr.length; i++)</code>:</b> Класичний перебір з лічильником <code>i</code>. Дає повний контроль над зміною елементів за індексом, кроком перебору або зворотним рухом.</div></div>",
    "starterParams": "array, predicate",
    "starterBody": "return { someResult: false, everyResult: false };",
    "tests": [
      {
        "expr": "mySomeAndEvery([2, 4, 6], x => x % 2 === 0)",
        "expected": {
          "someResult": true,
          "everyResult": true
        }
      },
      {
        "expr": "mySomeAndEvery([2, 3, 6], x => x % 2 === 0)",
        "expected": {
          "someResult": true,
          "everyResult": false
        }
      },
      {
        "expr": "mySomeAndEvery([1, 3, 5], x => x % 2 === 0)",
        "expected": {
          "someResult": false,
          "everyResult": false
        }
      }
    ]
  },
  {
    "moduleIdx": 11,
    "id": "11.2",
    "name": "validateFormFields",
    "title": "Валідація обовʼязкових полів форми",
    "level": "Базовий рівень",
    "goal": "Перевірити масив полів форми: isValidForm = every(поле валідне), hasErrors = some(поле містить помилку).",
    "reqs": [
      "Повернути { isValidForm, hasErrors }."
    ],
    "hint": "<b>Підказка до алгоритму:</b> Проаналізуйте вхідні структури. Зверніть увагу на перевірку граничних випадків (порожній масив, відсутні або нульові значення). Використайте найбільш підходящий метод масиву замість надмірно складних ручних циклів.<div class=\"hint-methods-wrap\" style=\"margin-top:12px; display:flex; flex-direction:column; gap:8px;\"><div class=\"hint-method-card\">💡 <b>Синтаксис <code>arr.some(predicate)</code>:</b> Повертає <code>true</code>, якщо хоча б один елемент задовольняє умову, інакше <code>false</code>.</div><div class=\"hint-method-card\">💡 <b>Синтаксис <code>arr.every(predicate)</code>:</b> Повертає <code>true</code> тільки якщо ВСІ елементи масиву задовольняють умову.</div></div>",
    "starterParams": "fields",
    "starterBody": "return { isValidForm: false, hasErrors: true };",
    "tests": [
      {
        "expr": "validateFormFields([{ field: \"email\", isValid: true }, { field: \"password\", isValid: true }])",
        "expected": {
          "isValidForm": true,
          "hasErrors": false
        }
      },
      {
        "expr": "validateFormFields([{ field: \"email\", isValid: true }, { field: \"password\", isValid: false }])",
        "expected": {
          "isValidForm": false,
          "hasErrors": true
        }
      }
    ]
  },
  {
    "moduleIdx": 11,
    "id": "11.3",
    "name": "checkCartAffordability",
    "title": "Перевірка платоспроможності кошика покупок",
    "level": "Середній рівень",
    "goal": "Визначити: canAffordAll (чи вистачає budget на кожен товар окремо) та hasLuxuryItem (чи є хоча б один товар дорожчий за luxuryThreshold).",
    "reqs": [
      "canAffordAll = items.every(i => i.price <= budget); hasLuxuryItem = items.some(i => i.price >= luxuryThreshold);"
    ],
    "hint": "<b>Підказка до алгоритму:</b> Проаналізуйте вхідні структури. Зверніть увагу на перевірку граничних випадків (порожній масив, відсутні або нульові значення). Використайте найбільш підходящий метод масиву замість надмірно складних ручних циклів.<div class=\"hint-methods-wrap\" style=\"margin-top:12px; display:flex; flex-direction:column; gap:8px;\"><div class=\"hint-method-card\">💡 <b>Синтаксис <code>arr.some(predicate)</code>:</b> Повертає <code>true</code>, якщо хоча б один елемент задовольняє умову, інакше <code>false</code>.</div><div class=\"hint-method-card\">💡 <b>Синтаксис <code>arr.every(predicate)</code>:</b> Повертає <code>true</code> тільки якщо ВСІ елементи масиву задовольняють умову.</div></div>",
    "starterParams": "items, budget, luxuryThreshold",
    "starterBody": "return { canAffordAll: false, hasLuxuryItem: false };",
    "tests": [
      {
        "expr": "checkCartAffordability([{ name: \"Книга\", price: 300 }, { name: \"Годинник\", price: 5000 }], 6000, 4000)",
        "expected": {
          "canAffordAll": true,
          "hasLuxuryItem": true
        }
      },
      {
        "expr": "checkCartAffordability([{ name: \"Хліб\", price: 30 }], 20, 1000)",
        "expected": {
          "canAffordAll": false,
          "hasLuxuryItem": false
        }
      }
    ]
  },
  {
    "moduleIdx": 11,
    "id": "11.4",
    "name": "verifyTeamVipStatus",
    "title": "Перевірка статусу VIP у команді",
    "level": "Початковий рівень",
    "goal": "Повернути true, якщо всі члени команди мають статус isVip === true або хоча б капітан команди isCaptain має VIP-статус.",
    "reqs": [
      "Використати every та find/some."
    ],
    "hint": "<b>Підказка до алгоритму:</b> Проаналізуйте вхідні структури. Зверніть увагу на перевірку граничних випадків (порожній масив, відсутні або нульові значення). Використайте найбільш підходящий метод масиву замість надмірно складних ручних циклів.<div class=\"hint-methods-wrap\" style=\"margin-top:12px; display:flex; flex-direction:column; gap:8px;\"><div class=\"hint-method-card\">💡 <b>Синтаксис <code>arr.some(predicate)</code>:</b> Повертає <code>true</code>, якщо хоча б один елемент задовольняє умову, інакше <code>false</code>.</div><div class=\"hint-method-card\">💡 <b>Синтаксис <code>arr.every(predicate)</code>:</b> Повертає <code>true</code> тільки якщо ВСІ елементи масиву задовольняють умову.</div></div>",
    "starterParams": "team",
    "starterBody": "return false;",
    "tests": [
      {
        "expr": "verifyTeamVipStatus([{ name: \"A\", isCaptain: true, isVip: true }, { name: \"B\", isCaptain: false, isVip: false }])",
        "expected": true
      },
      {
        "expr": "verifyTeamVipStatus([{ name: \"A\", isCaptain: true, isVip: false }, { name: \"B\", isCaptain: false, isVip: false }])",
        "expected": false
      }
    ]
  },
  {
    "moduleIdx": 12,
    "id": "12.1",
    "name": "myReduce",
    "title": "Власна реалізація reduce (Кастомний поліфіл)",
    "level": "Базовий рівень",
    "goal": "Згорнути масив в акумулятор за допомогою callback(acc, item, index, array) без Array.prototype.reduce.",
    "reqs": [
      "Підтримувати передане initialValue. Якщо initialValue не задано, першим акумулятором стає array[0], а ітерація починається з індексу 1."
    ],
    "hint": "<b>Підказка до алгоритму:</b> Проаналізуйте вхідні структури. Зверніть увагу на перевірку граничних випадків (порожній масив, відсутні або нульові значення). Використайте найбільш підходящий метод масиву замість надмірно складних ручних циклів.<div class=\"hint-methods-wrap\" style=\"margin-top:12px; display:flex; flex-direction:column; gap:8px;\"><div class=\"hint-method-card\">💡 <b>Властивість <code>arr.length</code>:</b> Відображає поточну кількість елементів у масиві. Останній допустимий індекс завжди дорівнює <code>arr.length - 1</code>. Примусове присвоєння <code>arr.length = 0</code> повністю очищує масив.</div><div class=\"hint-method-card\">💡 <b>Доступ за індексом <code>arr[i]</code>:</b> Індексація починається з <b>0</b>. Перший елемент — <code>arr[0]</code>, другий — <code>arr[1]</code>. Зміна значення: <code>arr[i] = newValue;</code>. Якщо елемента не існує — повертається <code>undefined</code>.</div><div class=\"hint-method-card\">💡 <b>Цикл <code>for (let i = 0; i < arr.length; i++)</code>:</b> Класичний перебір з лічильником <code>i</code>. Дає повний контроль над зміною елементів за індексом, кроком перебору або зворотним рухом.</div></div>",
    "starterParams": "array, callback, initialValue",
    "starterBody": "return initialValue;",
    "tests": [
      {
        "expr": "myReduce([1, 2, 3, 4], (sum, x) => sum + x, 0)",
        "expected": 10
      },
      {
        "expr": "myReduce([10, 20, 30], (sum, x) => sum + x)",
        "expected": 60
      }
    ]
  },
  {
    "moduleIdx": 12,
    "id": "12.2",
    "name": "groupPurchasesByCategory",
    "title": "Групування покупок за категоріями через reduce",
    "level": "Середній рівень",
    "goal": "Згрупувати масив транзакцій за назвою категорії: { [category]: totalSpent } та повернути обʼєкт агрегації.",
    "reqs": [
      "Підсумувати суми amount для кожної категорії."
    ],
    "hint": "<b>Підказка до алгоритму:</b> Проаналізуйте вхідні структури. Зверніть увагу на перевірку граничних випадків (порожній масив, відсутні або нульові значення). Використайте найбільш підходящий метод масиву замість надмірно складних ручних циклів.<div class=\"hint-methods-wrap\" style=\"margin-top:12px; display:flex; flex-direction:column; gap:8px;\"><div class=\"hint-method-card\">💡 <b>Синтаксис <code>arr.reduce((acc, cur) => ..., initial)</code>:</b> Згортає (акумулює) масив у єдине результуюче значення (число, об'єкт, підсумковий масив).</div></div>",
    "starterParams": "transactions",
    "starterBody": "return {};",
    "tests": [
      {
        "expr": "groupPurchasesByCategory([{ category: \"їжа\", amount: 150 }, { category: \"транспорт\", amount: 50 }, { category: \"їжа\", amount: 200 }])",
        "expected": {
          "їжа": 350,
          "транспорт": 50
        }
      }
    ]
  },
  {
    "moduleIdx": 12,
    "id": "12.3",
    "name": "generateQueryString",
    "title": "Генератор рядка URL query-параметрів",
    "level": "Середній рівень",
    "goal": "Перетворити масив параметрів [{ key, value }] на рядок запиту URL виду \"key1=val1&key2=val2\" за допомогою reduce.",
    "reqs": [
      "Для порожнього масиву повернути \"\"."
    ],
    "hint": "<b>Підказка до алгоритму:</b> Проаналізуйте вхідні структури. Зверніть увагу на перевірку граничних випадків (порожній масив, відсутні або нульові значення). Використайте найбільш підходящий метод масиву замість надмірно складних ручних циклів.<div class=\"hint-methods-wrap\" style=\"margin-top:12px; display:flex; flex-direction:column; gap:8px;\"><div class=\"hint-method-card\">💡 <b>Властивість <code>arr.length</code>:</b> Відображає поточну кількість елементів у масиві. Останній допустимий індекс завжди дорівнює <code>arr.length - 1</code>. Примусове присвоєння <code>arr.length = 0</code> повністю очищує масив.</div><div class=\"hint-method-card\">💡 <b>Синтаксис <code>arr.reduce((acc, cur) => ..., initial)</code>:</b> Згортає (акумулює) масив у єдине результуюче значення (число, об'єкт, підсумковий масив).</div></div>",
    "starterParams": "params",
    "starterBody": "return \"\";",
    "tests": [
      {
        "expr": "generateQueryString([{ key: \"page\", value: 1 }, { key: \"sort\", value: \"desc\" }])",
        "expected": "page=1&sort=desc"
      },
      {
        "expr": "generateQueryString([])",
        "expected": ""
      }
    ]
  },
  {
    "moduleIdx": 12,
    "id": "12.4",
    "name": "computeOrderMetrics",
    "title": "Обчислення фінансових метрик замовлень",
    "level": "Високий рівень",
    "goal": "Обчислити за один прохід reduce: загальну суму виручки totalRevenue, кількість успішних замовлень completedCount та середній чек averageCheck.",
    "reqs": [
      "Враховувати лише замовлення зі статусом status === \"COMPLETED\"."
    ],
    "hint": "<b>Підказка до алгоритму:</b> Проаналізуйте вхідні структури. Зверніть увагу на перевірку граничних випадків (порожній масив, відсутні або нульові значення). Використайте найбільш підходящий метод масиву замість надмірно складних ручних циклів.<div class=\"hint-methods-wrap\" style=\"margin-top:12px; display:flex; flex-direction:column; gap:8px;\"><div class=\"hint-method-card\">💡 <b>Синтаксис <code>arr.reduce((acc, cur) => ..., initial)</code>:</b> Згортає (акумулює) масив у єдине результуюче значення (число, об'єкт, підсумковий масив).</div></div>",
    "starterParams": "orders",
    "starterBody": "return { totalRevenue: 0, completedCount: 0, averageCheck: 0 };",
    "tests": [
      {
        "expr": "computeOrderMetrics([{ total: 100, status: \"COMPLETED\" }, { total: 200, status: \"COMPLETED\" }, { total: 50, status: \"CANCELLED\" }])",
        "expected": {
          "totalRevenue": 300,
          "completedCount": 2,
          "averageCheck": 150
        }
      },
      {
        "expr": "computeOrderMetrics([])",
        "expected": {
          "totalRevenue": 0,
          "completedCount": 0,
          "averageCheck": 0
        }
      }
    ]
  },
  {
    "moduleIdx": 13,
    "id": "13.1",
    "name": "myFlatAndFlatMap",
    "title": "Власні поліфіли flat та flatMap",
    "level": "Середній рівень",
    "goal": "Реалізувати кастомний myFlat (розкриття на 1 рівень) та myFlatMap (map з наступним сплющенням результату на 1 рівень).",
    "reqs": [
      "Повернути { flatResult, flatMapResult }."
    ],
    "hint": "<b>Підказка до алгоритму:</b> Проаналізуйте вхідні структури. Зверніть увагу на перевірку граничних випадків (порожній масив, відсутні або нульові значення). Використайте найбільш підходящий метод масиву замість надмірно складних ручних циклів.<div class=\"hint-methods-wrap\" style=\"margin-top:12px; display:flex; flex-direction:column; gap:8px;\"><div class=\"hint-method-card\">💡 <b>Синтаксис <code>Array.isArray(value)</code>:</b> Надійна перевірка на масив. Звичайний оператор <code>typeof []</code> повертає <code>\"object\"</code>, тому для масивів використовують лише <code>Array.isArray(x)</code>.</div><div class=\"hint-method-card\">💡 <b>Властивість <code>arr.length</code>:</b> Відображає поточну кількість елементів у масиві. Останній допустимий індекс завжди дорівнює <code>arr.length - 1</code>. Примусове присвоєння <code>arr.length = 0</code> повністю очищує масив.</div><div class=\"hint-method-card\">💡 <b>Цикл <code>for (const item of arr)</code>:</b> Сучасний лаконічний цикл для перебору всіх значень масиву від першого до останнього без необхідності вручну керувати числовим індексом.</div><div class=\"hint-method-card\">💡 <b>Цикл <code>for (let i = 0; i < arr.length; i++)</code>:</b> Класичний перебір з лічильником <code>i</code>. Дає повний контроль над зміною елементів за індексом, кроком перебору або зворотним рухом.</div><div class=\"hint-method-card\">💡 <b>Синтаксис <code>arr.push(el)</code>:</b> Додає новий елемент у самий <i>кінець</i> масиву та повертає нову довжину. Змінює (мутує) оригінальний масив. Швидка операція зі складністю <b>O(1)</b>.</div></div>",
    "starterParams": "array, mapper",
    "starterBody": "return { flatResult: [], flatMapResult: [] };",
    "tests": [
      {
        "expr": "myFlatAndFlatMap([[1, 2], [3], 4], x => Array.isArray(x) ? x.map(n => n * 2) : [x * 2])",
        "expected": {
          "flatResult": [
            1,
            2,
            3,
            4
          ],
          "flatMapResult": [
            2,
            4,
            6,
            8
          ]
        }
      }
    ]
  },
  {
    "moduleIdx": 13,
    "id": "13.2",
    "name": "extractUniqueHashtags",
    "title": "Витягування унікальних хештегів із постів",
    "level": "Базовий рівень",
    "goal": "Використати flatMap для отримання всіх тегів із масиву постів [{ tags: [\"#js\", \"#web\"] }] та повернути масив унікальних тегів без дублікатів.",
    "reqs": [
      "Використати flatMap та видалити дублікати."
    ],
    "hint": "<b>Підказка до алгоритму:</b> Проаналізуйте вхідні структури. Зверніть увагу на перевірку граничних випадків (порожній масив, відсутні або нульові значення). Використайте найбільш підходящий метод масиву замість надмірно складних ручних циклів.<div class=\"hint-methods-wrap\" style=\"margin-top:12px; display:flex; flex-direction:column; gap:8px;\"><div class=\"hint-method-card\">💡 <b>Цикл <code>for (const item of arr)</code>:</b> Сучасний лаконічний цикл для перебору всіх значень масиву від першого до останнього без необхідності вручну керувати числовим індексом.</div><div class=\"hint-method-card\">💡 <b>Синтаксис <code>arr.push(el)</code>:</b> Додає новий елемент у самий <i>кінець</i> масиву та повертає нову довжину. Змінює (мутує) оригінальний масив. Швидка операція зі складністю <b>O(1)</b>.</div><div class=\"hint-method-card\">💡 <b>Синтаксис <code>arr.includes(value)</code>:</b> Перевіряє, чи присутнє значення в масиві. Повертає <code>true</code> або <code>false</code>. Коректно обробляє <code>NaN</code>.</div></div>",
    "starterParams": "posts",
    "starterBody": "return [];",
    "tests": [
      {
        "expr": "extractUniqueHashtags([{ tags: [\"#js\", \"#code\"] }, { tags: [\"#web\", \"#js\"] }])",
        "expected": [
          "#js",
          "#code",
          "#web"
        ]
      },
      {
        "expr": "extractUniqueHashtags([])",
        "expected": []
      }
    ]
  },
  {
    "moduleIdx": 13,
    "id": "13.3",
    "name": "flattenCategoryTree",
    "title": "Розкриття дерева категорій до 1 рівня",
    "level": "Середній рівень",
    "goal": "Перетворити дерево категорій з вкладеними підкатегоріями `subcategories: [...]` на плаский список категорій верхнього та першого вкладеного рівня.",
    "reqs": [
      "Повернути плаский масив імен усіх категорій."
    ],
    "hint": "<b>Підказка до алгоритму:</b> Проаналізуйте вхідні структури. Зверніть увагу на перевірку граничних випадків (порожній масив, відсутні або нульові значення). Використайте найбільш підходящий метод масиву замість надмірно складних ручних циклів.<div class=\"hint-methods-wrap\" style=\"margin-top:12px; display:flex; flex-direction:column; gap:8px;\"><div class=\"hint-method-card\">💡 <b>Синтаксис <code>[a, b, c]</code>:</b> Літерал масиву — найпростіший та найшвидший спосіб створення списку елементів через кому всередині квадратних дужок.</div></div>",
    "starterParams": "categories",
    "starterBody": "return [];",
    "tests": [
      {
        "expr": "flattenCategoryTree([{ name: \"Електроніка\", subcategories: [\"Телефони\", \"Ноутбуки\"] }, { name: \"Одяг\", subcategories: [\"Взуття\"] }])",
        "expected": [
          "Електроніка",
          "Телефони",
          "Ноутбуки",
          "Одяг",
          "Взуття"
        ]
      }
    ]
  },
  {
    "moduleIdx": 14,
    "id": "14.1",
    "name": "topSpendingCustomersPipeline",
    "title": "Пайплайн: Топ покупців інтернет-магазину",
    "level": "Boss-рівень",
    "goal": "Обробити замовлення: відфільтрувати статус \"DELIVERED\", згрупувати суми за клієнтами (customerId), відсортувати покупців за спаданням витрат та повернути топ-N покупців у форматі `{ customerId, totalSpent }`.",
    "reqs": [
      "Пайплайн: filter -> reduce -> Object.entries -> sort -> slice."
    ],
    "hint": "<b>Підказка до алгоритму:</b> Проаналізуйте вхідні структури. Зверніть увагу на перевірку граничних випадків (порожній масив, відсутні або нульові значення). Використайте найбільш підходящий метод масиву замість надмірно складних ручних циклів.<div class=\"hint-methods-wrap\" style=\"margin-top:12px; display:flex; flex-direction:column; gap:8px;\"><div class=\"hint-method-card\">💡 <b>Синтаксис <code>arr.slice(start, end)</code>:</b> Копіює частину масиву від індексу <code>start</code> до <code>end</code> (сам <code>end</code> не включається). <u>НЕ змінює</u> вихідний масив, а повертає новий підмасив.</div><div class=\"hint-method-card\">💡 <b>Синтаксис <code>arr.filter(predicate)</code>:</b> Створює новий масив, відбираючи тільки ті елементи, для яких колбек-функція повернула <code>true</code>.</div><div class=\"hint-method-card\">💡 <b>Синтаксис <code>arr.map(transform)</code>:</b> Створює новий масив такої ж довжини, трансформуючи кожен елемент переданою функцією.</div><div class=\"hint-method-card\">💡 <b>Синтаксис <code>arr.reduce((acc, cur) => ..., initial)</code>:</b> Згортає (акумулює) масив у єдине результуюче значення (число, об'єкт, підсумковий масив).</div><div class=\"hint-method-card\">💡 <b>Синтаксис <code>arr.sort((a, b) => a - b)</code>:</b> Сортує елементи на місці. Для чисел завжди передавайте функцію компаратора (<code>(a, b) => a - b</code> за зростанням або <code>(a, b) => b - a</code> за спаданням).</div></div>",
    "starterParams": "orders, topLimit",
    "starterBody": "return [];",
    "tests": [
      {
        "expr": "topSpendingCustomersPipeline([{ customerId: \"u1\", amount: 500, status: \"DELIVERED\" }, { customerId: \"u2\", amount: 1200, status: \"DELIVERED\" }, { customerId: \"u1\", amount: 300, status: \"DELIVERED\" }, { customerId: \"u3\", amount: 4000, status: \"CANCELLED\" }], 2)",
        "expected": [
          {
            "customerId": "u2",
            "totalSpent": 1200
          },
          {
            "customerId": "u1",
            "totalSpent": 800
          }
        ]
      }
    ]
  },
  {
    "moduleIdx": 14,
    "id": "14.2",
    "name": "smartPlaylistGenerator",
    "title": "Генератор розумного плейлиста",
    "level": "Boss-рівень",
    "goal": "Скласти плейлист: відібрати треки жанру targetGenre з рейтингом rating >= minRating, відсортувати за спаданням тривалості durationSec та взяти стільки треків, щоб їхня сумарна тривалість не перевищувала maxTotalSec.",
    "reqs": [
      "Повернути сформований масив треків."
    ],
    "hint": "<b>Підказка до алгоритму:</b> Проаналізуйте вхідні структури. Зверніть увагу на перевірку граничних випадків (порожній масив, відсутні або нульові значення). Використайте найбільш підходящий метод масиву замість надмірно складних ручних циклів.<div class=\"hint-methods-wrap\" style=\"margin-top:12px; display:flex; flex-direction:column; gap:8px;\"><div class=\"hint-method-card\">💡 <b>Цикл <code>for (const item of arr)</code>:</b> Сучасний лаконічний цикл для перебору всіх значень масиву від першого до останнього без необхідності вручну керувати числовим індексом.</div><div class=\"hint-method-card\">💡 <b>Синтаксис <code>arr.push(el)</code>:</b> Додає новий елемент у самий <i>кінець</i> масиву та повертає нову довжину. Змінює (мутує) оригінальний масив. Швидка операція зі складністю <b>O(1)</b>.</div><div class=\"hint-method-card\">💡 <b>Синтаксис <code>arr.filter(predicate)</code>:</b> Створює новий масив, відбираючи тільки ті елементи, для яких колбек-функція повернула <code>true</code>.</div><div class=\"hint-method-card\">💡 <b>Синтаксис <code>arr.sort((a, b) => a - b)</code>:</b> Сортує елементи на місці. Для чисел завжди передавайте функцію компаратора (<code>(a, b) => a - b</code> за зростанням або <code>(a, b) => b - a</code> за спаданням).</div></div>",
    "starterParams": "tracks, targetGenre, minRating, maxTotalSec",
    "starterBody": "return [];",
    "tests": [
      {
        "expr": "smartPlaylistGenerator([{ title: \"Track A\", genre: \"rock\", rating: 5, durationSec: 180 }, { title: \"Track B\", genre: \"rock\", rating: 4, durationSec: 240 }, { title: \"Track C\", genre: \"pop\", rating: 5, durationSec: 200 }], \"rock\", 4, 300)",
        "expected": [
          {
            "title": "Track B",
            "genre": "rock",
            "rating": 4,
            "durationSec": 240
          }
        ]
      }
    ]
  },
  {
    "moduleIdx": 14,
    "id": "14.3",
    "name": "rpgInventoryOptimizer",
    "title": "Оптимізація інвентаря RPG персонажа",
    "level": "Boss-рівень",
    "goal": "Рюкзак вміщує максимум maxWeight ваги. Відібрати предмети з міцністю durability > 0, відсортувати за питомою цінністю (value / weight) за спаданням і зібрати найцінніший набір предметів, який вміщується у рюкзак.",
    "reqs": [
      "Повернути обʼєкт { packedItems, totalValue, totalWeight }."
    ],
    "hint": "<b>Підказка до алгоритму:</b> Проаналізуйте вхідні структури. Зверніть увагу на перевірку граничних випадків (порожній масив, відсутні або нульові значення). Використайте найбільш підходящий метод масиву замість надмірно складних ручних циклів.<div class=\"hint-methods-wrap\" style=\"margin-top:12px; display:flex; flex-direction:column; gap:8px;\"><div class=\"hint-method-card\">💡 <b>Цикл <code>for (const item of arr)</code>:</b> Сучасний лаконічний цикл для перебору всіх значень масиву від першого до останнього без необхідності вручну керувати числовим індексом.</div><div class=\"hint-method-card\">💡 <b>Синтаксис <code>arr.push(el)</code>:</b> Додає новий елемент у самий <i>кінець</i> масиву та повертає нову довжину. Змінює (мутує) оригінальний масив. Швидка операція зі складністю <b>O(1)</b>.</div><div class=\"hint-method-card\">💡 <b>Синтаксис <code>arr.filter(predicate)</code>:</b> Створює новий масив, відбираючи тільки ті елементи, для яких колбек-функція повернула <code>true</code>.</div><div class=\"hint-method-card\">💡 <b>Синтаксис <code>arr.map(transform)</code>:</b> Створює новий масив такої ж довжини, трансформуючи кожен елемент переданою функцією.</div><div class=\"hint-method-card\">💡 <b>Синтаксис <code>arr.sort((a, b) => a - b)</code>:</b> Сортує елементи на місці. Для чисел завжди передавайте функцію компаратора (<code>(a, b) => a - b</code> за зростанням або <code>(a, b) => b - a</code> за спаданням).</div></div>",
    "starterParams": "items, maxWeight",
    "starterBody": "return { packedItems: [], totalValue: 0, totalWeight: 0 };",
    "tests": [
      {
        "expr": "rpgInventoryOptimizer([{ id: 1, name: \"Золотий кубок\", value: 100, weight: 2, durability: 100 }, { id: 2, name: \"Важкий камінь\", value: 10, weight: 10, durability: 50 }, { id: 3, name: \"Зламаний меч\", value: 50, weight: 3, durability: 0 }], 5)",
        "expected": {
          "packedItems": [
            {
              "id": 1,
              "name": "Золотий кубок",
              "value": 100,
              "weight": 2
            }
          ],
          "totalValue": 100,
          "totalWeight": 2
        }
      }
    ]
  },
  {
    "id": "15.1",
    "moduleIdx": 15,
    "name": "renderSimpleList",
    "title": "DOM Списки: Рендеринг списку <ul> з масиву рядків",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію renderSimpleList(items), яка приймає масив рядків items і повертає елемент <ul>, заповнений елементами <li> для кожного рядка. Якщо масив порожній — повертає порожній <ul>.",
    "reqs": [
      "Створіть елемент <ul> через document.createElement('ul').",
      "Пройдіться по масиву items за допомогою forEach або for..of.",
      "Для кожного елемента створіть <li>, встановіть textContent та додайте в <ul>.",
      "Поверніть створений <ul>."
    ],
    "starterParams": "items",
    "starterBody": "// Створіть та поверніть <ul> зі списком елементів items",
    "solutionBody": "const ul = document.createElement('ul');\n  (items || []).forEach(item => {\n    const li = document.createElement('li');\n    li.textContent = item;\n    ul.appendChild(li);\n  });\n  return ul;",
    "tests": [
      {
        "expr": "(() => { const ul = renderSimpleList(['Яблуко', 'Банан']); return [ul.children.length, ul.children[0].textContent, ul.children[1].textContent]; })()",
        "expected": [
          2,
          "Яблуко",
          "Банан"
        ]
      },
      {
        "expr": "renderSimpleList([]).children.length",
        "expected": 0
      }
    ]
  },
  {
    "id": "15.2",
    "moduleIdx": 15,
    "name": "createTagCloud",
    "title": "DOM Чіпси: Генератор хмари тегів (Tag Cloud)",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію createTagCloud(tags), яка приймає масив рядків tags і повертає <div> з класом 'tag-cloud', всередині якого для кожного тегу створено <span class='tag-chip'>#тег</span>.",
    "reqs": [
      "Створіть контейнер <div class='tag-cloud'>.",
      "Для кожного тегу створіть <span> з класом 'tag-chip'.",
      "Встановіть textContent у форматі '#' + tag.",
      "Поверніть контейнер."
    ],
    "starterParams": "tags",
    "starterBody": "// Створіть контейнер з тегами",
    "solutionBody": "const div = document.createElement('div');\n  div.className = 'tag-cloud';\n  (tags || []).forEach(t => {\n    const span = document.createElement('span');\n    span.className = 'tag-chip';\n    span.textContent = '#' + t;\n    div.appendChild(span);\n  });\n  return div;",
    "tests": [
      {
        "expr": "(() => { const tc = createTagCloud(['javascript', 'react']); return [tc.className, tc.children[0].textContent, tc.children[1].textContent]; })()",
        "expected": [
          "tag-cloud",
          "#javascript",
          "#react"
        ]
      }
    ]
  },
  {
    "id": "15.3",
    "moduleIdx": 15,
    "name": "createRemovableTags",
    "title": "DOM Чіпси: Видалення елементів з масиву по кліку на хрестик",
    "level": "Середній рівень",
    "goal": "Напишіть функцію createRemovableTags(initialTags), яка створює контейнер з бейджами. Кожен бейдж містить текст тегу та кнопку <button class='remove-btn'>&times;</button>. При кліку на кнопку видалення відповідний <span> видаляється з DOM.",
    "reqs": [
      "Для кожного тегу створити <div class='tag-item'>.",
      "Всередині створити <span> з назвою тегу та <button class='remove-btn'>.",
      "По кліку на кнопку видаляти батьківський tag-item з DOM через item.remove().",
      "Повернути контейнер."
    ],
    "starterParams": "initialTags",
    "starterBody": "// Реалізуйте чіпси з можливістю видалення",
    "solutionBody": "const container = document.createElement('div');\n  container.className = 'tags-wrapper';\n  (initialTags || []).forEach(tag => {\n    const item = document.createElement('div');\n    item.className = 'tag-item';\n    const label = document.createElement('span');\n    label.textContent = tag;\n    const btn = document.createElement('button');\n    btn.className = 'remove-btn';\n    btn.textContent = '×';\n    btn.addEventListener('click', () => item.remove());\n    item.appendChild(label);\n    item.appendChild(btn);\n    container.appendChild(item);\n  });\n  return container;",
    "tests": [
      {
        "expr": "(() => { const c = createRemovableTags(['html', 'css']); const btn = c.querySelector('.remove-btn'); btn.click(); return c.children.length; })()",
        "expected": 1
      }
    ]
  },
  {
    "id": "15.4",
    "moduleIdx": 15,
    "name": "createTodoListManager",
    "title": "DOM Списки: Інтерактивний Todo-список (Додавання з масиву)",
    "level": "Середній рівень",
    "goal": "Напишіть функцію createTodoListManager(initialTasks), яка повертає об'єкт { container, addTask(text), getTasksCount() }. Створює <ul> з задачами, метод addTask додає нову задачу в кінець списку.",
    "reqs": [
      "Створіть <ul> для задач.",
      "Метод addTask(text) додає новий <li> з класом 'task-item' та повертає поточну кількість.",
      "Метод getTasksCount() повертає кількість задач у списку."
    ],
    "starterParams": "initialTasks = []",
    "starterBody": "// Реалізуйте Todo менеджер",
    "solutionBody": "const ul = document.createElement('ul');\n  ul.className = 'todo-list';\n  (initialTasks || []).forEach(t => {\n    const li = document.createElement('li');\n    li.className = 'task-item';\n    li.textContent = t;\n    ul.appendChild(li);\n  });\n  return {\n    container: ul,\n    addTask(text) {\n      const li = document.createElement('li');\n      li.className = 'task-item';\n      li.textContent = text;\n      ul.appendChild(li);\n      return ul.children.length;\n    },\n    getTasksCount() { return ul.children.length; }\n  };",
    "tests": [
      {
        "expr": "(() => { const mgr = createTodoListManager(['Завдання 1']); mgr.addTask('Завдання 2'); return mgr.getTasksCount(); })()",
        "expected": 2
      }
    ]
  },
  {
    "id": "15.5",
    "moduleIdx": 15,
    "name": "createFilterablePills",
    "title": "DOM Фільтри: Набір кнопок-фільтрів з активним станом",
    "level": "Середній рівень",
    "goal": "Напишіть функцію createFilterablePills(categories, onSelect), яка створює горизонтальний бар кнопок <button class='pill-btn'>. При кліку на кнопку знімається клас 'active' з усіх і додається на обрану, та викликається колбек onSelect(category). Початково перша кнопка активна.",
    "reqs": [
      "Створити <nav class='pill-bar'>.",
      "Для кожної категорії створити кнопку. Додати першій клас 'active'.",
      "При кліку перемикати активний клас та викликати onSelect(cat).",
      "Повернути панель."
    ],
    "starterParams": "categories, onSelect",
    "starterBody": "// Створіть панель кнопок-фільтрів",
    "solutionBody": "const bar = document.createElement('nav');\n  bar.className = 'pill-bar';\n  const buttons = [];\n  (categories || []).forEach((cat, idx) => {\n    const btn = document.createElement('button');\n    btn.className = 'pill-btn' + (idx === 0 ? ' active' : '');\n    btn.textContent = cat;\n    btn.addEventListener('click', () => {\n      buttons.forEach(b => b.classList.remove('active'));\n      btn.classList.add('active');\n      if (typeof onSelect === 'function') onSelect(cat);\n    });\n    buttons.push(btn);\n    bar.appendChild(btn);\n  });\n  return bar;",
    "tests": [
      {
        "expr": "(() => { let sel = ''; const bar = createFilterablePills(['Всі', 'Активні'], cat => sel = cat); bar.children[1].click(); return { activeIdx: bar.children[1].classList.contains('active'), sel }; })()",
        "expected": {
          "activeIdx": true,
          "sel": "Активні"
        }
      }
    ]
  },
  {
    "id": "15.6",
    "moduleIdx": 15,
    "name": "createShoppingCartSummary",
    "title": "DOM Кошик: Підсумок кошика покупок через reduce",
    "level": "Середній рівень",
    "goal": "Напишіть функцію createShoppingCartSummary(cartItems), яка приймає масив товарів [{ name, price, qty }] і створює картку <div class='cart-summary'>. Всередині: список товарів 'назва x к-сть = ціна грн' та підсумковий блок <div class='cart-total'>Загалом: {total} грн</div>.",
    "reqs": [
      "Розрахувати загальну суму через cartItems.reduce((acc, item) => acc + item.price * item.qty, 0).",
      "Відобразити кожен товар списком <li>.",
      "Додати підсумковий блок з класом 'cart-total'.",
      "Повернути картку."
    ],
    "starterParams": "cartItems",
    "starterBody": "// Створіть віджет підсумку кошика",
    "solutionBody": "const card = document.createElement('div');\n  card.className = 'cart-summary';\n  const ul = document.createElement('ul');\n  const total = (cartItems || []).reduce((acc, cur) => acc + (cur.price * cur.qty), 0);\n  (cartItems || []).forEach(it => {\n    const li = document.createElement('li');\n    li.textContent = `${it.name} x ${it.qty} = ${it.price * it.qty} грн`;\n    ul.appendChild(li);\n  });\n  const totalDiv = document.createElement('div');\n  totalDiv.className = 'cart-total';\n  totalDiv.textContent = `Загалом: ${total} грн`;\n  card.appendChild(ul);\n  card.appendChild(totalDiv);\n  return card;",
    "tests": [
      {
        "expr": "(() => { const c = createShoppingCartSummary([{ name: 'Кава', price: 60, qty: 2 }, { name: 'Круасан', price: 40, qty: 1 }]); return c.querySelector('.cart-total').textContent; })()",
        "expected": "Загалом: 160 грн"
      }
    ]
  },
  {
    "id": "15.7",
    "moduleIdx": 15,
    "name": "createColorPaletteBar",
    "title": "DOM Кольори: Генератор палітри кольорів (Color Swatches)",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію createColorPaletteBar(hexColors, onColorClick), яка створює горизонтальний контейнер <div class='palette-bar'>. Для кожного hex-коду створюється блок <div class='color-swatch' style='background-color: hex'>. При кліку на свотч викликається onColorClick(hex).",
    "reqs": [
      "Створити контейнер <div class='palette-bar'>.",
      "Для кожного кольору створити свотч із відповідним background-color.",
      "Додати слухач кліку, що передає колір у колбек.",
      "Повернути контейнер."
    ],
    "starterParams": "hexColors, onColorClick",
    "starterBody": "// Створіть палітру кольорів",
    "solutionBody": "const bar = document.createElement('div');\n  bar.className = 'palette-bar';\n  (hexColors || []).forEach(hex => {\n    const swatch = document.createElement('div');\n    swatch.className = 'color-swatch';\n    swatch.style.backgroundColor = hex;\n    swatch.title = hex;\n    swatch.addEventListener('click', () => {\n      if (typeof onColorClick === 'function') onColorClick(hex);\n    });\n    bar.appendChild(swatch);\n  });\n  return bar;",
    "tests": [
      {
        "expr": "(() => { let picked = ''; const p = createColorPaletteBar(['#ff0000', '#00ff00'], c => picked = c); p.children[0].click(); return picked; })()",
        "expected": "#ff0000"
      }
    ]
  },
  {
    "id": "15.8",
    "moduleIdx": 15,
    "name": "createBreadcrumbNav",
    "title": "DOM Навігація: Хлібні крихти (Breadcrumb Navigator)",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію createBreadcrumbNav(crumbs), яка приймає масив об'єктів [{ label, url }]. Повертає <nav class='breadcrumbs'><ol>...</ol></nav>. Останній елемент є активним (без посилання, <span>), попередні — з тегами <a>.",
    "reqs": [
      "Створити <nav class='breadcrumbs'><ol class='breadcrumb-list'></ol></nav>.",
      "Для кожного елемента створити <li>.",
      "Якщо це останній елемент масиву — створити <span class='current'>label</span>, якщо ні — <a href='url'>label</a>.",
      "Повернути nav."
    ],
    "starterParams": "crumbs",
    "starterBody": "// Створіть компонент хлібних крихт",
    "solutionBody": "const nav = document.createElement('nav');\n  nav.className = 'breadcrumbs';\n  const ol = document.createElement('ol');\n  ol.className = 'breadcrumb-list';\n  (crumbs || []).forEach((c, idx) => {\n    const li = document.createElement('li');\n    if (idx === crumbs.length - 1) {\n      const span = document.createElement('span');\n      span.className = 'current';\n      span.textContent = c.label;\n      li.appendChild(span);\n    } else {\n      const a = document.createElement('a');\n      a.href = c.url;\n      a.textContent = c.label;\n      li.appendChild(a);\n    }\n    ol.appendChild(li);\n  });\n  nav.appendChild(ol);\n  return nav;",
    "tests": [
      {
        "expr": "(() => { const b = createBreadcrumbNav([{ label: 'Головна', url: '/' }, { label: 'Каталог', url: '/shop' }, { label: 'Ноутбук', url: '/shop/1' }]); return [b.querySelectorAll('a').length, b.querySelector('.current').textContent]; })()",
        "expected": [
          2,
          "Ноутбук"
        ]
      }
    ]
  },
  {
    "id": "15.9",
    "moduleIdx": 15,
    "name": "createRatingDistributionBar",
    "title": "DOM Статистика: Розподіл оцінок (Rating Bars)",
    "level": "Середній рівень",
    "goal": "Напишіть функцію createRatingDistributionBar(counts), яка приймає масив з 5 чисел (кількість відгуків від 1 до 5 зірок). Розраховує загальну кількість та повертає контейнер <div class='rating-bars'> з прогрес-барами для кожної зірки із відсотковою шириною.",
    "reqs": [
      "Розрахувати total = counts.reduce((a, b) => a + b, 0).",
      "Для кожної зірки створити рядок з підписом та смужкою <div class='bar-fill' style='width: pct%'>.",
      "Якщо total === 0, ширина 0%."
    ],
    "starterParams": "counts",
    "starterBody": "// Побудуйте гістограму розподілу відгуків",
    "solutionBody": "const container = document.createElement('div');\n  container.className = 'rating-bars';\n  const total = (counts || []).reduce((a, b) => a + b, 0);\n  (counts || []).forEach((count, i) => {\n    const row = document.createElement('div');\n    row.className = 'rating-row';\n    const pct = total > 0 ? Math.round((count / total) * 100) : 0;\n    row.innerHTML = `<span class='star-label'>${i + 1}★</span><div class='bar-track'><div class='bar-fill' style='width:${pct}%'></div></div><span class='pct-label'>${pct}%</span>`;\n    container.appendChild(row);\n  });\n  return container;",
    "tests": [
      {
        "expr": "(() => { const r = createRatingDistributionBar([0, 0, 0, 20, 80]); return r.children[4].querySelector('.pct-label').textContent; })()",
        "expected": "80%"
      }
    ]
  },
  {
    "id": "15.10",
    "moduleIdx": 15,
    "name": "createNotificationQueue",
    "title": "DOM Стек/Черга: Менеджер черги сповіщень (Toast Queue)",
    "level": "Середній рівень",
    "goal": "Напишіть функцію createNotificationQueue(maxVisible = 3), яка керує чергою тостів. Повертає { container, enqueue(message), dequeue() }. Метод enqueue додає тост, якщо більше maxVisible — старі автоматично вилучаються (FIFO).",
    "reqs": [
      "Створити <div class='toast-queue'>.",
      "enqueue(msg): додати <div class='toast'>msg</div>. Якщо дітей більше maxVisible — видалити першу дитину.",
      "dequeue(): вилучити найстаріше сповіщення."
    ],
    "starterParams": "maxVisible = 3",
    "starterBody": "// Реалізуйте чергу сповіщень",
    "solutionBody": "const container = document.createElement('div');\n  container.className = 'toast-queue';\n  return {\n    container,\n    enqueue(message) {\n      const t = document.createElement('div');\n      t.className = 'toast';\n      t.textContent = message;\n      container.appendChild(t);\n      while (container.children.length > maxVisible) {\n        container.removeChild(container.firstChild);\n      }\n      return container.children.length;\n    },\n    dequeue() {\n      if (container.firstChild) {\n        container.removeChild(container.firstChild);\n      }\n      return container.children.length;\n    }\n  };",
    "tests": [
      {
        "expr": "(() => { const q = createNotificationQueue(2); q.enqueue('1'); q.enqueue('2'); q.enqueue('3'); return [q.container.children.length, q.container.firstChild.textContent]; })()",
        "expected": [
          2,
          "2"
        ]
      }
    ]
  },
  {
    "id": "15.11",
    "moduleIdx": 15,
    "name": "createMultiSelectCheckboxes",
    "title": "DOM Форми: Група чекбоксів із масиву опцій",
    "level": "Середній рівень",
    "goal": "Напишіть функцію createMultiSelectCheckboxes(options, onChange), яка створює форму з чекбоксами. Метод getSelected() повертає масив обраних значень.",
    "reqs": [
      "Створити контейнер",
      "Для кожної опції додати checkbox та label",
      "При зміні викликати onChange(getSelected())",
      "Повернути об'єкт { container, getSelected }"
    ],
    "starterParams": "options, onChange",
    "starterBody": "// Реалізуйте групу чекбоксів",
    "solutionBody": "const container = document.createElement('div');\n  container.className = 'checkbox-group';\n  const getSelected = () => Array.from(container.querySelectorAll('input:checked')).map(i => i.value);\n  (options || []).forEach(opt => {\n    const label = document.createElement('label');\n    const cb = document.createElement('input');\n    cb.type = 'checkbox';\n    cb.value = opt.value || opt;\n    cb.addEventListener('change', () => { if (typeof onChange === 'function') onChange(getSelected()); });\n    label.appendChild(cb);\n    label.appendChild(document.createTextNode(' ' + (opt.label || opt)));\n    container.appendChild(label);\n  });\n  return { container, getSelected };",
    "tests": [
      {
        "expr": "(() => { const g = createMultiSelectCheckboxes(['js', 'ts']); g.container.querySelectorAll('input')[0].checked = true; return g.getSelected(); })()",
        "expected": [
          "js"
        ]
      }
    ]
  },
  {
    "id": "15.12",
    "moduleIdx": 15,
    "name": "createCarouselIndicators",
    "title": "DOM Слайдер: Індикатори слайдера (Dots Pagination)",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію createCarouselIndicators(totalSlides, activeIndex, onDotClick), яка створює ряд точок <div class='carousel-dots'><span class='dot'></span>...</div>.",
    "reqs": [
      "Створити контейнер з класом 'carousel-dots'",
      "Для кожного слайду створити точку",
      "Точці з activeIndex надати клас 'active'",
      "По кліку викликати onDotClick(index)"
    ],
    "starterParams": "totalSlides, activeIndex = 0, onDotClick",
    "starterBody": "// Створіть індикатори слайдера",
    "solutionBody": "const div = document.createElement('div');\n  div.className = 'carousel-dots';\n  for (let i = 0; i < totalSlides; i++) {\n    const dot = document.createElement('span');\n    dot.className = 'dot' + (i === activeIndex ? ' active' : '');\n    dot.addEventListener('click', () => { if (typeof onDotClick === 'function') onDotClick(i); });\n    div.appendChild(dot);\n  }\n  return div;",
    "tests": [
      {
        "expr": "(() => { const d = createCarouselIndicators(4, 2); return [d.children.length, d.children[2].classList.contains('active'), d.children[0].classList.contains('active')]; })()",
        "expected": [
          4,
          true,
          false
        ]
      }
    ]
  },
  {
    "id": "15.13",
    "moduleIdx": 15,
    "name": "createAccordionSections",
    "title": "DOM Акордеон: Багатосекційний акордеон з масиву об'єктів",
    "level": "Середній рівень",
    "goal": "Напишіть функцію createAccordionSections(sections), яка приймає [{ title, content }] і повертає акордеон. При кліку на заголовок секція розгортається/згортається (перемикання класу 'open').",
    "reqs": [
      "Для кожної секції створити header та body",
      "По кліку перемикати клас 'open' на секції",
      "Повернути акордеон"
    ],
    "starterParams": "sections",
    "starterBody": "// Створіть акордеон з масиву",
    "solutionBody": "const acc = document.createElement('div');\n  acc.className = 'accordion';\n  (sections || []).forEach(s => {\n    const sec = document.createElement('div');\n    sec.className = 'accordion-item';\n    const h = document.createElement('div');\n    h.className = 'accordion-header';\n    h.textContent = s.title;\n    const b = document.createElement('div');\n    b.className = 'accordion-body';\n    b.textContent = s.content;\n    h.addEventListener('click', () => sec.classList.toggle('open'));\n    sec.appendChild(h);\n    sec.appendChild(b);\n    acc.appendChild(sec);\n  });\n  return acc;",
    "tests": [
      {
        "expr": "(() => { const a = createAccordionSections([{ title: 'Питання 1', content: 'Відповідь 1' }]); a.querySelector('.accordion-header').click(); return a.children[0].classList.contains('open'); })()",
        "expected": true
      }
    ]
  },
  {
    "id": "15.14",
    "moduleIdx": 15,
    "name": "createBadgeAvatarGroup",
    "title": "DOM Аватари: Група аватарів учасників з лімітом (Avatar Stack)",
    "level": "Середній рівень",
    "goal": "Напишіть функцію createBadgeAvatarGroup(users, maxDisplay = 3), яка відображає до maxDisplay аватарів, а для решти створює бейдж '+N ще'.",
    "reqs": [
      "Відобразити перші maxDisplay аватарів",
      "Якщо users.length > maxDisplay, додати <span class='avatar-more'>+{users.length - maxDisplay}</span>",
      "Повернути контейнер <div class='avatar-group'>"
    ],
    "starterParams": "users, maxDisplay = 3",
    "starterBody": "// Створіть аватарний стек",
    "solutionBody": "const group = document.createElement('div');\n  group.className = 'avatar-group';\n  const visible = (users || []).slice(0, maxDisplay);\n  visible.forEach(u => {\n    const img = document.createElement('img');\n    img.className = 'avatar-img';\n    img.src = u.avatarUrl || `https://github.com/${u.username}.png`;\n    img.title = u.name || u.username;\n    group.appendChild(img);\n  });\n  if ((users || []).length > maxDisplay) {\n    const more = document.createElement('span');\n    more.className = 'avatar-more';\n    more.textContent = `+${users.length - maxDisplay}`;\n    group.appendChild(more);\n  }\n  return group;",
    "tests": [
      {
        "expr": "(() => { const g = createBadgeAvatarGroup([{ username: 'a' }, { username: 'b' }, { username: 'c' }, { username: 'd' }], 2); return [g.querySelectorAll('img').length, g.querySelector('.avatar-more').textContent]; })()",
        "expected": [
          2,
          "+2"
        ]
      }
    ]
  },
  {
    "id": "15.15",
    "moduleIdx": 15,
    "name": "createPriceRangeFilter",
    "title": "DOM Фільтри: Фільтрація карток товарів за діапазоном цін",
    "level": "Середній рівень",
    "goal": "Напишіть функцію createPriceRangeFilter(products), яка повертає { container, filterByMaxPrice(maxPrice) }. Метод filterByMaxPrice приховує картки (display: none) з ціною, вищою за maxPrice.",
    "reqs": [
      "Створити контейнер з картками товарів",
      "Кожна картка містить data-price='{price}'",
      "filterByMaxPrice(maxPrice) показує тільки товари з price <= maxPrice",
      "Повертає кількість видимих товарів"
    ],
    "starterParams": "products",
    "starterBody": "// Реалізуйте фільтр за ціною",
    "solutionBody": "const container = document.createElement('div');\n  container.className = 'products-grid';\n  (products || []).forEach(p => {\n    const card = document.createElement('div');\n    card.className = 'product-card';\n    card.dataset.price = p.price;\n    card.textContent = `${p.name} - ${p.price} грн`;\n    container.appendChild(card);\n  });\n  return {\n    container,\n    filterByMaxPrice(maxPrice) {\n      let visibleCount = 0;\n      container.querySelectorAll('.product-card').forEach(card => {\n        const price = Number(card.dataset.price);\n        if (price <= maxPrice) {\n          card.style.display = '';\n          visibleCount++;\n        } else {\n          card.style.display = 'none';\n        }\n      });\n      return visibleCount;\n    }\n  };",
    "tests": [
      {
        "expr": "(() => { const f = createPriceRangeFilter([{ name: 'A', price: 100 }, { name: 'B', price: 500 }]); const count = f.filterByMaxPrice(200); return count; })()",
        "expected": 1
      }
    ]
  },
  {
    "id": "15.16",
    "moduleIdx": 15,
    "name": "createNumberedSteps",
    "title": "DOM Степпер: Покроковий майстер (Wizard Stepper)",
    "level": "Середній рівень",
    "goal": "Напишіть функцію createNumberedSteps(steps, activeStepIndex), яка створює горизонтальний степпер <div class='stepper-nav'>. Кроки до activeStepIndex мають клас 'completed', поточний — 'active', наступні — 'pending'.",
    "reqs": [
      "Створити контейнер з класом 'stepper-nav'",
      "Для кожного кроку додати номер та назву",
      "Розставити класи 'completed', 'active', 'pending'",
      "Повернути степпер"
    ],
    "starterParams": "steps, activeStepIndex = 0",
    "starterBody": "// Створіть компонент покрокового прогресу",
    "solutionBody": "const nav = document.createElement('div');\n  nav.className = 'stepper-nav';\n  (steps || []).forEach((st, i) => {\n    const item = document.createElement('div');\n    let status = 'pending';\n    if (i < activeStepIndex) status = 'completed';\n    else if (i === activeStepIndex) status = 'active';\n    item.className = `step-item ${status}`;\n    item.innerHTML = `<span class='step-num'>${i + 1}</span><span class='step-title'>${st}</span>`;\n    nav.appendChild(item);\n  });\n  return nav;",
    "tests": [
      {
        "expr": "(() => { const s = createNumberedSteps(['Авторизація', 'Оплата', 'Готово'], 1); return [s.children[0].className, s.children[1].className, s.children[2].className]; })()",
        "expected": [
          "step-item completed",
          "step-item active",
          "step-item pending"
        ]
      }
    ]
  },
  {
    "id": "15.17",
    "moduleIdx": 15,
    "name": "createSegmentedControl",
    "title": "DOM Контроли: Сегментований перемикач (Segmented Control)",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію createSegmentedControl(options, defaultIndex, onChange), яка створює перемикач <div class='segmented-control'>. При кліку на сегмент він стає активним та викликає onChange(value, index).",
    "reqs": [
      "Створити контейнер 'segmented-control'",
      "Додати кнопки-сегменти",
      "Підтримувати активний стан одного сегмента",
      "Повернути перемикач"
    ],
    "starterParams": "options, defaultIndex = 0, onChange",
    "starterBody": "// Створіть сегментований контрол",
    "solutionBody": "const ctrl = document.createElement('div');\n  ctrl.className = 'segmented-control';\n  const btns = [];\n  (options || []).forEach((opt, idx) => {\n    const btn = document.createElement('button');\n    btn.className = 'segment-btn' + (idx === defaultIndex ? ' active' : '');\n    btn.textContent = opt;\n    btn.addEventListener('click', () => {\n      btns.forEach(b => b.classList.remove('active'));\n      btn.classList.add('active');\n      if (typeof onChange === 'function') onChange(opt, idx);\n    });\n    btns.push(btn);\n    ctrl.appendChild(btn);\n  });\n  return ctrl;",
    "tests": [
      {
        "expr": "(() => { let val = ''; const c = createSegmentedControl(['День', 'Тиждень', 'Місяць'], 0, v => val = v); c.children[1].click(); return { activeText: c.children[1].textContent, val }; })()",
        "expected": {
          "activeText": "Тиждень",
          "val": "Тиждень"
        }
      }
    ]
  },
  {
    "id": "15.18",
    "moduleIdx": 15,
    "name": "createLiveSearchList",
    "title": "DOM Пошук: Живий пошук у масиві з миттєвою фільтрацією",
    "level": "Середній рівень",
    "goal": "Напишіть функцію createLiveSearchList(items), яка повертає { container, input, filter(query) }. Всі елементи відображаються у списку <ul>, filter(query) залишає лише ті, що містять рядок query (case-insensitive).",
    "reqs": [
      "Створити <input placeholder='Пошук...'> та <ul>",
      "filter(query) приховує невідповідні <li>",
      "Повертає кількість знайдених збігів"
    ],
    "starterParams": "items",
    "starterBody": "// Створіть живий пошук у списку",
    "solutionBody": "const container = document.createElement('div');\n  container.className = 'live-search-wrapper';\n  const input = document.createElement('input');\n  input.className = 'search-input';\n  input.placeholder = 'Пошук...';\n  const ul = document.createElement('ul');\n  (items || []).forEach(it => {\n    const li = document.createElement('li');\n    li.textContent = it;\n    ul.appendChild(li);\n  });\n  container.appendChild(input);\n  container.appendChild(ul);\n  const filter = (query) => {\n    const q = (query || '').toLowerCase().trim();\n    let matches = 0;\n    ul.querySelectorAll('li').forEach(li => {\n      const match = li.textContent.toLowerCase().includes(q);\n      li.style.display = match ? '' : 'none';\n      if (match) matches++;\n    });\n    return matches;\n  };\n  input.addEventListener('input', e => filter(e.target.value));\n  return { container, input, filter };",
    "tests": [
      {
        "expr": "(() => { const s = createLiveSearchList(['Київ', 'Харків', 'Одеса']); const res = s.filter('хар'); return res; })()",
        "expected": 1
      }
    ]
  },
  {
    "id": "15.19",
    "moduleIdx": 15,
    "name": "createAudioPlaylistWidget",
    "title": "DOM Медіа: Віджет списку аудіотреків (Playlist Widget)",
    "level": "Середній рівень",
    "goal": "Напишіть функцію createAudioPlaylistWidget(tracks, onTrackChange), яка приймає масив треків [{ id, title, duration }] і повертає { container, next(), prev(), getCurrent() }. Трек підсвічується класом 'playing'.",
    "reqs": [
      "Створити плейлист",
      "next() перемикає на наступний трек циклічно",
      "prev() перемикає на попередній",
      "Повертає поточний активний трек"
    ],
    "starterParams": "tracks, onTrackChange",
    "starterBody": "// Реалізуйте плейлист аудіо",
    "solutionBody": "const container = document.createElement('div');\n  container.className = 'playlist-widget';\n  let currentIdx = 0;\n  const ul = document.createElement('ul');\n  const updateUI = () => {\n    ul.querySelectorAll('li').forEach((li, i) => {\n      li.className = 'track-item' + (i === currentIdx ? ' playing' : '');\n    });\n    if (typeof onTrackChange === 'function') onTrackChange(tracks[currentIdx]);\n  };\n  (tracks || []).forEach((t, i) => {\n    const li = document.createElement('li');\n    li.className = 'track-item' + (i === 0 ? ' playing' : '');\n    li.textContent = `${t.title} (${t.duration})`;\n    li.addEventListener('click', () => { currentIdx = i; updateUI(); });\n    ul.appendChild(li);\n  });\n  container.appendChild(ul);\n  return {\n    container,\n    getCurrent() { return tracks[currentIdx]; },\n    next() { currentIdx = (currentIdx + 1) % tracks.length; updateUI(); return tracks[currentIdx]; },\n    prev() { currentIdx = (currentIdx - 1 + tracks.length) % tracks.length; updateUI(); return tracks[currentIdx]; }\n  };",
    "tests": [
      {
        "expr": "(() => { const pl = createAudioPlaylistWidget([{ id: 1, title: 'T1', duration: '3:00' }, { id: 2, title: 'T2', duration: '2:30' }]); const nextTrack = pl.next(); return nextTrack.id; })()",
        "expected": 2
      }
    ]
  },
  {
    "id": "15.20",
    "moduleIdx": 15,
    "name": "createStockTickerTape",
    "title": "DOM Фінанси: Стрічка котирувань біржових акцій (Ticker Tape)",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію createStockTickerTape(stocks), яка приймає [{ symbol, price, changePct }]. Повертає <div class='ticker-tape'>. Позитивні зміни мають клас 'gain' (зелений), негативні — 'loss' (червоний).",
    "reqs": [
      "Створити стрічку котирувань",
      "Для кожної акції відобразити 'SYMBOL price (change%)'",
      "Додати клас gain при changePct >= 0, loss при changePct < 0",
      "Повернути стрічку"
    ],
    "starterParams": "stocks",
    "starterBody": "// Створіть біржову стрічку",
    "solutionBody": "const tape = document.createElement('div');\n  tape.className = 'ticker-tape';\n  (stocks || []).forEach(st => {\n    const item = document.createElement('span');\n    const isGain = st.changePct >= 0;\n    item.className = 'ticker-item ' + (isGain ? 'gain' : 'loss');\n    item.textContent = `${st.symbol} $${st.price} (${isGain ? '+' : ''}${st.changePct}%)`;\n    tape.appendChild(item);\n  });\n  return tape;",
    "tests": [
      {
        "expr": "(() => { const t = createStockTickerTape([{ symbol: 'AAPL', price: 150, changePct: 2.5 }, { symbol: 'TSLA', price: 200, changePct: -1.2 }]); return [t.children[0].className, t.children[1].className]; })()",
        "expected": [
          "ticker-item gain",
          "ticker-item loss"
        ]
      }
    ]
  },
  {
    "id": "15.21",
    "moduleIdx": 15,
    "name": "createRankedLeaderboard",
    "title": "DOM Таблиця лідерів: Список лідерів з призовими медалями",
    "level": "Середній рівень",
    "goal": "Напишіть функцію createRankedLeaderboard(players), яка приймає [{ name, score }], сортує їх за спаданням балів і створює <ol class='leaderboard'>. Першим трьом призначаються іконки 🥇, 🥈, 🥉.",
    "reqs": [
      "Відсортувати копію масиву за спаданням score",
      "Для перших 3 додати відповідні емодзі",
      "Повернути <ol class='leaderboard'>"
    ],
    "starterParams": "players",
    "starterBody": "// Створіть табло лідерів",
    "solutionBody": "const ol = document.createElement('ol');\n  ol.className = 'leaderboard';\n  const medals = ['🥇', '🥈', '🥉'];\n  const sorted = [...(players || [])].sort((a, b) => b.score - a.score);\n  sorted.forEach((p, idx) => {\n    const li = document.createElement('li');\n    const icon = idx < 3 ? medals[idx] + ' ' : `${idx + 1}. `;\n    li.innerHTML = `<span class='rank'>${icon}</span><span class='player-name'>${p.name}</span><span class='score'>${p.score} б</span>`;\n    ol.appendChild(li);\n  });\n  return ol;",
    "tests": [
      {
        "expr": "(() => { const lb = createRankedLeaderboard([{ name: 'Богдан', score: 90 }, { name: 'Анна', score: 100 }, { name: 'Ігор', score: 80 }]); return lb.children[0].querySelector('.player-name').textContent; })()",
        "expected": "Анна"
      }
    ]
  },
  {
    "id": "15.22",
    "moduleIdx": 15,
    "name": "createTimelineFeed",
    "title": "DOM Таймлайн: Стрічка хронологічних подій (Timeline Feed)",
    "level": "Середній рівень",
    "goal": "Напишіть функцію createTimelineFeed(events), яка приймає масив подій [{ time, title, desc }] і створює вертикальний таймлайн <div class='timeline'>. Кожна подія — <div class='timeline-item'><div class='timeline-marker'></div><div class='timeline-content'>...</div></div>.",
    "reqs": [
      "Створити контейнер 'timeline'",
      "Для кожної події сформувати маркер і контент",
      "Повернути таймлайн"
    ],
    "starterParams": "events",
    "starterBody": "// Створіть вертикальний таймлайн",
    "solutionBody": "const tl = document.createElement('div');\n  tl.className = 'timeline';\n  (events || []).forEach(e => {\n    const item = document.createElement('div');\n    item.className = 'timeline-item';\n    item.innerHTML = `<div class='timeline-marker'></div><div class='timeline-content'><time>${e.time}</time><h4>${e.title}</h4><p>${e.desc || ''}</p></div>`;\n    tl.appendChild(item);\n  });\n  return tl;",
    "tests": [
      {
        "expr": "(() => { const t = createTimelineFeed([{ time: '10:00', title: 'Реєстрація' }]); return t.children[0].querySelector('h4').textContent; })()",
        "expected": "Реєстрація"
      }
    ]
  },
  {
    "id": "15.23",
    "moduleIdx": 15,
    "name": "createChipsAutocomplete",
    "title": "DOM Пошук: Вибір кількох тегів із випадаючого списку",
    "level": "Складний рівень",
    "goal": "Напишіть функцію createChipsAutocomplete(availableOptions), яка повертає { container, select(option), getSelected() }. Додає тег у вибрані, якщо його ще немає.",
    "reqs": [
      "Зберігати вибрані в масиві без дублікатів",
      "Рендерити вибрані як чіпси",
      "Повернути методи"
    ],
    "starterParams": "availableOptions",
    "starterBody": "// Реалізуйте автокомпліт тегів",
    "solutionBody": "const container = document.createElement('div');\n  container.className = 'chips-autocomplete';\n  const chipsBox = document.createElement('div');\n  chipsBox.className = 'chips-box';\n  container.appendChild(chipsBox);\n  const selected = [];\n  const render = () => {\n    chipsBox.innerHTML = '';\n    selected.forEach(s => {\n      const c = document.createElement('span');\n      c.className = 'chip';\n      c.textContent = s;\n      chipsBox.appendChild(c);\n    });\n  };\n  return {\n    container,\n    select(opt) {\n      if (!selected.includes(opt) && availableOptions.includes(opt)) {\n        selected.push(opt);\n        render();\n      }\n      return [...selected];\n    },\n    getSelected() { return [...selected]; }\n  };",
    "tests": [
      {
        "expr": "(() => { const ac = createChipsAutocomplete(['HTML', 'CSS', 'JS']); ac.select('JS'); ac.select('JS'); ac.select('CSS'); return ac.getSelected(); })()",
        "expected": [
          "JS",
          "CSS"
        ]
      }
    ]
  },
  {
    "id": "15.24",
    "moduleIdx": 15,
    "name": "createBatchActionTable",
    "title": "DOM Таблиці: Вибір рядків чекбоксом 'Вибрати всі' (Select All)",
    "level": "Середній рівень",
    "goal": "Напишіть функцію createBatchActionTable(rows), яка створює таблицю з головним чекбоксом у <thead>. Клік на головний чекбокс вибирає/знімає вибір з усіх рядків. Метод getSelectedIds() повертає ID вибраних рядків.",
    "reqs": [
      "Створити таблицю з чекбоксами",
      "Чекбокс 'select all' керує всіма іншими",
      "Повернути { table, getSelectedIds }"
    ],
    "starterParams": "rows",
    "starterBody": "// Реалізуйте груповий вибір у таблиці",
    "solutionBody": "const table = document.createElement('table');\n  table.innerHTML = `<thead><tr><th><input type='checkbox' id='selectAll'></th><th>Назва</th></tr></thead><tbody></tbody>`;\n  const tbody = table.querySelector('tbody');\n  (rows || []).forEach(r => {\n    const tr = document.createElement('tr');\n    tr.innerHTML = `<td><input type='checkbox' class='row-cb' value='${r.id}'></td><td>${r.name}</td>`;\n    tbody.appendChild(tr);\n  });\n  const selectAll = table.querySelector('#selectAll');\n  selectAll.addEventListener('change', e => {\n    tbody.querySelectorAll('.row-cb').forEach(cb => cb.checked = e.target.checked);\n  });\n  return {\n    table,\n    getSelectedIds() {\n      return Array.from(tbody.querySelectorAll('.row-cb:checked')).map(cb => cb.value);\n    }\n  };",
    "tests": [
      {
        "expr": "(() => { const t = createBatchActionTable([{ id: '1', name: 'A' }, { id: '2', name: 'B' }]); t.table.querySelector('#selectAll').click(); return t.getSelectedIds(); })()",
        "expected": [
          "1",
          "2"
        ]
      }
    ]
  },
  {
    "id": "15.25",
    "moduleIdx": 15,
    "name": "createNotificationBadgeCounter",
    "title": "DOM Сповіщення: Лічильник непрочитаних сповіщень",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію createNotificationBadgeCounter(notifications), яка приймає [{ id, text, isRead }] і створює кнопку з дзвіночком 🔔 та бейджем кількості непрочитаних. Якщо непрочитаних 0 — бейдж приховується.",
    "reqs": [
      "Порахувати unread через notifications.filter(n => !n.isRead).length",
      "Якщо unread > 0, показати <span class='badge'>unread</span>",
      "Повернути кнопку"
    ],
    "starterParams": "notifications",
    "starterBody": "// Створіть іконку сповіщень з бейджем",
    "solutionBody": "const btn = document.createElement('button');\n  btn.className = 'notif-btn';\n  const unread = (notifications || []).filter(n => !n.isRead).length;\n  btn.innerHTML = `🔔 ${unread > 0 ? `<span class='badge'>${unread}</span>` : ''}`;\n  return btn;",
    "tests": [
      {
        "expr": "(() => { const b = createNotificationBadgeCounter([{ id: 1, isRead: false }, { id: 2, isRead: true }, { id: 3, isRead: false }]); return b.querySelector('.badge').textContent; })()",
        "expected": "2"
      }
    ]
  },
  {
    "id": "15.26",
    "moduleIdx": 15,
    "name": "createStepProgressBar",
    "title": "DOM Прогрес: Багаторівневий прогрес-бар проходження модулів",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію createStepProgressBar(totalSteps, completedSteps), яка створює прогрес-бар <div class='progress-track'><div class='progress-bar' style='width: pct%'></div></div> та текст 'N з M завершено'.",
    "reqs": [
      "Розрахувати відсоток completionPct = Math.round((completed / total) * 100)",
      "Встановити ширину смуги",
      "Повернути контейнер"
    ],
    "starterParams": "totalSteps, completedSteps",
    "starterBody": "// Створіть шкалу прогресу",
    "solutionBody": "const wrapper = document.createElement('div');\n  wrapper.className = 'progress-container';\n  const pct = totalSteps > 0 ? Math.round((completedSteps / totalSteps) * 100) : 0;\n  wrapper.innerHTML = `<div class='progress-track'><div class='progress-bar' style='width:${pct}%'></div></div><span class='progress-label'>${completedSteps} з ${totalSteps} завершено (${pct}%)</span>`;\n  return wrapper;",
    "tests": [
      {
        "expr": "(() => { const p = createStepProgressBar(10, 7); return p.querySelector('.progress-label').textContent; })()",
        "expected": "7 з 10 завершено (70%)"
      }
    ]
  },
  {
    "id": "15.27",
    "moduleIdx": 15,
    "name": "createFeatureMatrixChecklist",
    "title": "DOM Порівняння: Чеклист тарифних планів (Feature Checklist)",
    "level": "Середній рівень",
    "goal": "Напишіть функцію createFeatureMatrixChecklist(features), яка приймає [{ name, included: boolean }] і створює список, де включені фічі мають іконку ✅, а вимкнені — ❌ з класом 'disabled'.",
    "reqs": [
      "Для кожної фічі створити рядок",
      "Встановлювати відповідну іконку та клас",
      "Повернути <ul>"
    ],
    "starterParams": "features",
    "starterBody": "// Створіть чеклист фіч",
    "solutionBody": "const ul = document.createElement('ul');\n  ul.className = 'feature-checklist';\n  (features || []).forEach(f => {\n    const li = document.createElement('li');\n    li.className = f.included ? 'feature-enabled' : 'feature-disabled';\n    li.innerHTML = `<span>${f.included ? '✅' : '❌'}</span> <span>${f.name}</span>`;\n    ul.appendChild(li);\n  });\n  return ul;",
    "tests": [
      {
        "expr": "(() => { const c = createFeatureMatrixChecklist([{ name: 'SSL', included: true }, { name: 'Support', included: false }]); return [c.children[0].className, c.children[1].className]; })()",
        "expected": [
          "feature-enabled",
          "feature-disabled"
        ]
      }
    ]
  },
  {
    "id": "15.28",
    "moduleIdx": 15,
    "name": "createDynamicTabsPanel",
    "title": "DOM Вкладки: Перемикач табів з масиву об'єктів",
    "level": "Середній рівень",
    "goal": "Напишіть функцію createDynamicTabsPanel(tabsData), яка приймає [{ id, label, content }] і повертає таб-панель. Клік на вкладку показує її контент і приховує інші.",
    "reqs": [
      "Створити кнопки вкладок та контейнери контенту",
      "Керувати класом 'active'",
      "Повернути компонент"
    ],
    "starterParams": "tabsData",
    "starterBody": "// Створіть таб-панель",
    "solutionBody": "const wrapper = document.createElement('div');\n  wrapper.className = 'tabs-panel';\n  const nav = document.createElement('div');\n  nav.className = 'tabs-header';\n  const contentBox = document.createElement('div');\n  contentBox.className = 'tabs-body';\n  (tabsData || []).forEach((t, i) => {\n    const btn = document.createElement('button');\n    btn.className = 'tab-btn' + (i === 0 ? ' active' : '');\n    btn.textContent = t.label;\n    const pane = document.createElement('div');\n    pane.className = 'tab-pane' + (i === 0 ? ' active' : '');\n    pane.textContent = t.content;\n    pane.style.display = i === 0 ? 'block' : 'none';\n    btn.addEventListener('click', () => {\n      nav.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));\n      contentBox.querySelectorAll('.tab-pane').forEach(p => { p.classList.remove('active'); p.style.display = 'none'; });\n      btn.classList.add('active');\n      pane.classList.add('active');\n      pane.style.display = 'block';\n    });\n    nav.appendChild(btn);\n    contentBox.appendChild(pane);\n  });\n  wrapper.appendChild(nav);\n  wrapper.appendChild(contentBox);\n  return wrapper;",
    "tests": [
      {
        "expr": "(() => { const t = createDynamicTabsPanel([{ id: 'a', label: 'Таб A', content: 'Контент A' }, { id: 'b', label: 'Таб B', content: 'Контент B' }]); t.querySelectorAll('.tab-btn')[1].click(); return t.querySelectorAll('.tab-pane')[1].style.display; })()",
        "expected": "block"
      }
    ]
  },
  {
    "id": "15.29",
    "moduleIdx": 15,
    "name": "createProductVariantSelector",
    "title": "DOM E-commerce: Вибір розміру товару (Size Pills)",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію createProductVariantSelector(sizes, onSizeSelect), яка створює кнопки розмірів ['XS', 'S', 'M', 'L', 'XL']. Вибір підсвічується класом 'selected'.",
    "reqs": [
      "Створити кнопки розмірів",
      "Перемикати клас 'selected'",
      "Викликати onSizeSelect(size)",
      "Повернути контейнер"
    ],
    "starterParams": "sizes, onSizeSelect",
    "starterBody": "// Створіть селектор розмірів",
    "solutionBody": "const div = document.createElement('div');\n  div.className = 'size-selector';\n  const btns = [];\n  (sizes || []).forEach(sz => {\n    const b = document.createElement('button');\n    b.className = 'size-pill';\n    b.textContent = sz;\n    b.addEventListener('click', () => {\n      btns.forEach(x => x.classList.remove('selected'));\n      b.classList.add('selected');\n      if (typeof onSizeSelect === 'function') onSizeSelect(sz);\n    });\n    btns.push(b);\n    div.appendChild(b);\n  });\n  return div;",
    "tests": [
      {
        "expr": "(() => { let chosen = ''; const s = createProductVariantSelector(['S', 'M', 'L'], sz => chosen = sz); s.children[1].click(); return chosen; })()",
        "expected": "M"
      }
    ]
  },
  {
    "id": "15.30",
    "moduleIdx": 15,
    "name": "createUndoRedoList",
    "title": "DOM Стек операцій: Список з історією Undo/Redo",
    "level": "Складний рівень",
    "goal": "Напишіть функцію createUndoRedoList(), яка повертає { container, push(item), undo(), redo(), getList() }. Використовує два масиви (історію дій та стек скасувань).",
    "reqs": [
      "push додає елемент в історію",
      "undo переміщує останній елемент у redo-стек",
      "redo повертає останній скасований елемент",
      "Повернути методи"
    ],
    "starterParams": "",
    "starterBody": "// Реалізуйте список зі стеками Undo/Redo",
    "solutionBody": "const container = document.createElement('div');\n  let items = [];\n  let redoStack = [];\n  const render = () => { container.innerHTML = items.map(x => `<div class='item'>${x}</div>`).join(''); };\n  return {\n    container,\n    push(item) { items.push(item); redoStack = []; render(); return [...items]; },\n    undo() { if (items.length) { redoStack.push(items.pop()); render(); } return [...items]; },\n    redo() { if (redoStack.length) { items.push(redoStack.pop()); render(); } return [...items]; },\n    getList() { return [...items]; }\n  };",
    "tests": [
      {
        "expr": "(() => { const l = createUndoRedoList(); l.push('A'); l.push('B'); l.undo(); const afterUndo = l.getList(); l.redo(); const afterRedo = l.getList(); return { afterUndo, afterRedo }; })()",
        "expected": {
          "afterUndo": [
            "A"
          ],
          "afterRedo": [
            "A",
            "B"
          ]
        }
      }
    ]
  },
  {
    "id": "15.31",
    "moduleIdx": 15,
    "name": "createStatusSummaryBadges",
    "title": "DOM Агрегація: Зведені бейджі статусів замовлень",
    "level": "Середній рівень",
    "goal": "Напишіть функцію createStatusSummaryBadges(orders), яка приймає [{ status: 'PENDING' | 'DONE' | 'CANCELED' }] і створює три бейджі з підрахунком замовлень кожного статусу.",
    "reqs": [
      "Підрахувати кількість для кожного статусу через reduce або filter",
      "Створити 3 бейджі з класами статусу",
      "Повернути контейнер"
    ],
    "starterParams": "orders",
    "starterBody": "// Створіть зведені бейджі статусів",
    "solutionBody": "const container = document.createElement('div');\n  container.className = 'status-summary';\n  const counts = (orders || []).reduce((acc, o) => {\n    acc[o.status] = (acc[o.status] || 0) + 1;\n    return acc;\n  }, { PENDING: 0, DONE: 0, CANCELED: 0 });\n  container.innerHTML = `<span class='badge-pending'>Очікує: ${counts.PENDING}</span><span class='badge-done'>Виконано: ${counts.DONE}</span><span class='badge-canceled'>Скасовано: ${counts.CANCELED}</span>`;\n  return container;",
    "tests": [
      {
        "expr": "(() => { const b = createStatusSummaryBadges([{ status: 'PENDING' }, { status: 'DONE' }, { status: 'DONE' }]); return b.querySelector('.badge-done').textContent; })()",
        "expected": "Виконано: 2"
      }
    ]
  },
  {
    "id": "15.32",
    "moduleIdx": 15,
    "name": "createRankedStarPills",
    "title": "DOM Фільтри: Фільтр за рейтингом зірок (5★, 4★, 3★, 2★, 1★)",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію createRankedStarPills(onStarSelect), яка створює кнопки від 5★ до 1★. При кліку викликається onStarSelect(starsCount).",
    "reqs": [
      "Створити 5 кнопок у порядку спадання",
      "Додати слухачі кліку",
      "Повернути контейнер"
    ],
    "starterParams": "onStarSelect",
    "starterBody": "// Створіть фільтр рейтингу зірок",
    "solutionBody": "const container = document.createElement('div');\n  container.className = 'star-filter-bar';\n  for (let s = 5; s >= 1; s--) {\n    const btn = document.createElement('button');\n    btn.className = 'star-pill';\n    btn.textContent = `${s} ★`;\n    btn.addEventListener('click', () => { if (typeof onStarSelect === 'function') onStarSelect(s); });\n    container.appendChild(btn);\n  }\n  return container;",
    "tests": [
      {
        "expr": "(() => { let picked = 0; const b = createRankedStarPills(s => picked = s); b.children[0].click(); return picked; })()",
        "expected": 5
      }
    ]
  },
  {
    "id": "15.33",
    "moduleIdx": 15,
    "name": "createSimpleCartCounter",
    "title": "DOM Лічильник: Інтерактивний лічильник кількості товару [ - 1 + ]",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію createSimpleCartCounter(initialQty = 1, min = 1, max = 10, onChange), яка створює компонент з двома кнопками '-' та '+' та інпутом кількості.",
    "reqs": [
      "Кнопка '-' зменшує кількість (не нижче min)",
      "Кнопка '+' збільшує (не вище max)",
      "Викликати onChange(currentQty)",
      "Повернути контейнер"
    ],
    "starterParams": "initialQty = 1, min = 1, max = 10, onChange",
    "starterBody": "// Реалізуйте лічильник кількості товару",
    "solutionBody": "const wrap = document.createElement('div');\n  wrap.className = 'cart-counter';\n  let qty = initialQty;\n  const btnMinus = document.createElement('button');\n  btnMinus.textContent = '-';\n  const valSpan = document.createElement('span');\n  valSpan.className = 'qty-val';\n  valSpan.textContent = qty;\n  const btnPlus = document.createElement('button');\n  btnPlus.textContent = '+';\n  const update = () => {\n    valSpan.textContent = qty;\n    if (typeof onChange === 'function') onChange(qty);\n  };\n  btnMinus.addEventListener('click', () => { if (qty > min) { qty--; update(); } });\n  btnPlus.addEventListener('click', () => { if (qty < max) { qty++; update(); } });\n  wrap.appendChild(btnMinus);\n  wrap.appendChild(valSpan);\n  wrap.appendChild(btnPlus);\n  return wrap;",
    "tests": [
      {
        "expr": "(() => { const c = createSimpleCartCounter(1, 1, 5); c.querySelectorAll('button')[1].click(); return c.querySelector('.qty-val').textContent; })()",
        "expected": "2"
      }
    ]
  },
  {
    "id": "15.34",
    "moduleIdx": 15,
    "name": "createLanguageSwitcher",
    "title": "DOM Селектори: Перемикач мови інтерфейсу з прапорцями",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію createLanguageSwitcher(languages, currentLang, onLangChange), яка створює кнопки для вибору мови [{ code: 'ua', label: '🇺🇦 UA' }].",
    "reqs": [
      "Створити кнопки для кожної мови",
      "Позначити поточну мову класом 'active'",
      "Викликати onLangChange(code)",
      "Повернути селектор"
    ],
    "starterParams": "languages, currentLang, onLangChange",
    "starterBody": "// Створіть перемикач мов",
    "solutionBody": "const div = document.createElement('div');\n  div.className = 'lang-switcher';\n  const btns = [];\n  (languages || []).forEach(l => {\n    const b = document.createElement('button');\n    b.className = 'lang-btn' + (l.code === currentLang ? ' active' : '');\n    b.textContent = l.label;\n    b.addEventListener('click', () => {\n      btns.forEach(x => x.classList.remove('active'));\n      b.classList.add('active');\n      if (typeof onLangChange === 'function') onLangChange(l.code);\n    });\n    btns.push(b);\n    div.appendChild(b);\n  });\n  return div;",
    "tests": [
      {
        "expr": "(() => { let sel = ''; const sw = createLanguageSwitcher([{ code: 'ua', label: '🇺🇦' }, { code: 'en', label: '🇬🇧' }], 'ua', c => sel = c); sw.children[1].click(); return sel; })()",
        "expected": "en"
      }
    ]
  },
  {
    "id": "15.35",
    "moduleIdx": 15,
    "name": "createSelectableCardGrid",
    "title": "DOM Сітки: Вибір однієї картки з сітки опцій (Radio Card Grid)",
    "level": "Середній рівень",
    "goal": "Напишіть функцію createSelectableCardGrid(cards, onCardSelect), яка створює сітку карток [{ id, title, desc }]. Клік виділяє одну картку (single select, клас 'selected').",
    "reqs": [
      "Створити сітку <div class='card-grid'>",
      "Клік виділяє обрану картку",
      "Знімати виділення з інших",
      "Викликати onCardSelect(card)",
      "Повернути сітку"
    ],
    "starterParams": "cards, onCardSelect",
    "starterBody": "// Створіть сітку карток з вибором",
    "solutionBody": "const grid = document.createElement('div');\n  grid.className = 'card-grid';\n  const domCards = [];\n  (cards || []).forEach(c => {\n    const el = document.createElement('div');\n    el.className = 'selectable-card';\n    el.innerHTML = `<h4>${c.title}</h4><p>${c.desc}</p>`;\n    el.addEventListener('click', () => {\n      domCards.forEach(x => x.classList.remove('selected'));\n      el.classList.add('selected');\n      if (typeof onCardSelect === 'function') onCardSelect(c);\n    });\n    domCards.push(el);\n    grid.appendChild(el);\n  });\n  return grid;",
    "tests": [
      {
        "expr": "(() => { let chosen = null; const g = createSelectableCardGrid([{ id: 1, title: 'Тариф 1', desc: 'Базовий' }, { id: 2, title: 'Тариф 2', desc: 'Про' }], c => chosen = c); g.children[1].click(); return { isSel: g.children[1].classList.contains('selected'), id: chosen.id }; })()",
        "expected": {
          "isSel": true,
          "id": 2
        }
      }
    ]
  },
  {
    "id": "16.1",
    "moduleIdx": 16,
    "name": "renderSimpleTable",
    "title": "DOM Таблиці: Рендеринг таблиці <table> з масиву заголовків та 2D масиву рядків",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію renderSimpleTable(headers, rows), яка створює <table> з <thead><tr><th>...</th></tr></thead> та <tbody> із рядками <tr><td>...</td></tr>.",
    "reqs": [
      "Створити <table>, <thead> та <tbody>",
      "Заповнити <th> з масиву headers",
      "Для кожного рядка з rows створити <tr> та заповнити <td>",
      "Повернути елемент <table>"
    ],
    "starterParams": "headers, rows",
    "starterBody": "// Створіть <table> з headers та rows",
    "solutionBody": "const table = document.createElement('table');\n  const thead = document.createElement('thead');\n  const trHead = document.createElement('tr');\n  (headers || []).forEach(h => {\n    const th = document.createElement('th');\n    th.textContent = h;\n    trHead.appendChild(th);\n  });\n  thead.appendChild(trHead);\n  table.appendChild(thead);\n  const tbody = document.createElement('tbody');\n  (rows || []).forEach(row => {\n    const tr = document.createElement('tr');\n    row.forEach(cell => {\n      const td = document.createElement('td');\n      td.textContent = cell;\n      tr.appendChild(td);\n    });\n    tbody.appendChild(tr);\n  });\n  table.appendChild(tbody);\n  return table;",
    "tests": [
      {
        "expr": "(() => { const t = renderSimpleTable(['Імʼя', 'Вік'], [['Тарас', 25], ['Олена', 22]]); return [t.querySelectorAll('th').length, t.querySelectorAll('tbody tr').length, t.querySelector('tbody td').textContent]; })()",
        "expected": [
          2,
          2,
          "Тарас"
        ]
      }
    ]
  },
  {
    "id": "16.2",
    "moduleIdx": 16,
    "name": "createSortableTableHeader",
    "title": "DOM Таблиці: Заголовки з індикатором сортування (▲ / ▼)",
    "level": "Середній рівень",
    "goal": "Напишіть функцію createSortableTableHeader(headers, onSort), яка створює <thead>. Клік на <th> перемикає сортування (asc -> desc -> asc) і викликає onSort(columnIndex, direction).",
    "reqs": [
      "Створити <thead><tr> з <th> для кожного заголовка",
      "Клік додає до заголовка стрілку ▲ (asc) або ▼ (desc)",
      "Викликати onSort(colIdx, 'asc' | 'desc')",
      "Повернути thead"
    ],
    "starterParams": "headers, onSort",
    "starterBody": "// Реалізуйте сортований заголовок",
    "solutionBody": "const thead = document.createElement('thead');\n  const tr = document.createElement('tr');\n  const dirs = {};\n  (headers || []).forEach((h, idx) => {\n    const th = document.createElement('th');\n    th.textContent = h + ' ↕';\n    th.style.cursor = 'pointer';\n    th.addEventListener('click', () => {\n      dirs[idx] = dirs[idx] === 'asc' ? 'desc' : 'asc';\n      tr.querySelectorAll('th').forEach((item, i) => item.textContent = headers[i] + ' ↕');\n      th.textContent = h + (dirs[idx] === 'asc' ? ' ▲' : ' ▼');\n      if (typeof onSort === 'function') onSort(idx, dirs[idx]);\n    });\n    tr.appendChild(th);\n  });\n  thead.appendChild(tr);\n  return thead;",
    "tests": [
      {
        "expr": "(() => { let sortDir = null; let col = null; const th = createSortableTableHeader(['Ціна', 'Рейтинг'], (c, d) => { col = c; sortDir = d; }); th.querySelector('tr').children[0].click(); return { col, sortDir }; })()",
        "expected": {
          "col": 0,
          "sortDir": "asc"
        }
      }
    ]
  },
  {
    "id": "16.3",
    "moduleIdx": 16,
    "name": "createPaginatedTable",
    "title": "DOM Пагінація: Панель перемикання сторінок для масиву даних",
    "level": "Середній рівень",
    "goal": "Напишіть функцію createPaginatedTable(totalItems, pageSize, onPageChange), яка розраховує totalPages і створює кнопки [1], [2], [3]... Поточна сторінка має клас 'active'.",
    "reqs": [
      "Розрахувати totalPages = Math.ceil(totalItems / pageSize)",
      "Створити кнопки для кожної сторінки 1..totalPages",
      "Перша кнопка має клас 'active'",
      "По кліку викликати onPageChange(pageNumber) і оновити клас 'active'",
      "Повернути контейнер <div class='pagination'>"
    ],
    "starterParams": "totalItems, pageSize, onPageChange",
    "starterBody": "// Створіть панель пагінації",
    "solutionBody": "const div = document.createElement('div');\n  div.className = 'pagination';\n  const pages = Math.ceil(totalItems / pageSize) || 1;\n  const btns = [];\n  for (let i = 1; i <= pages; i++) {\n    const btn = document.createElement('button');\n    btn.className = 'page-btn' + (i === 1 ? ' active' : '');\n    btn.textContent = String(i);\n    btn.addEventListener('click', () => {\n      btns.forEach(b => b.classList.remove('active'));\n      btn.classList.add('active');\n      if (typeof onPageChange === 'function') onPageChange(i);\n    });\n    btns.push(btn);\n    div.appendChild(btn);\n  }\n  return div;",
    "tests": [
      {
        "expr": "(() => { let p = 1; const bar = createPaginatedTable(25, 10, newP => p = newP); bar.children[1].click(); return [bar.children.length, p, bar.children[1].classList.contains('active')]; })()",
        "expected": [
          3,
          2,
          true
        ]
      }
    ]
  },
  {
    "id": "16.4",
    "moduleIdx": 16,
    "name": "createMatrixGrid",
    "title": "DOM Матриці: Візуалізація 2D масиву у вигляді CSS Grid сітки",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію createMatrixGrid(matrix), яка приймає двовимірний масив NxM і повертає <div class='matrix-grid'> з клітинками <div class='matrix-cell'> зі значеннями.",
    "reqs": [
      "Встановити контейнеру display: grid та grid-template-columns відповідно до кількості стовпців",
      "Пройтися по рядках і клітинках",
      "Створити <div class='matrix-cell'> для кожного елемента",
      "Повернути контейнер"
    ],
    "starterParams": "matrix",
    "starterBody": "// Створіть сітку з 2D матриці",
    "solutionBody": "const grid = document.createElement('div');\n  grid.className = 'matrix-grid';\n  const cols = matrix && matrix[0] ? matrix[0].length : 1;\n  grid.style.display = 'grid';\n  grid.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;\n  (matrix || []).forEach(row => {\n    row.forEach(val => {\n      const cell = document.createElement('div');\n      cell.className = 'matrix-cell';\n      cell.textContent = String(val);\n      grid.appendChild(cell);\n    });\n  });\n  return grid;",
    "tests": [
      {
        "expr": "(() => { const g = createMatrixGrid([[1, 2], [3, 4]]); return [g.children.length, g.children[2].textContent]; })()",
        "expected": [
          4,
          "3"
        ]
      }
    ]
  },
  {
    "id": "16.5",
    "moduleIdx": 16,
    "name": "highlightMatrixDiagonal",
    "title": "DOM Матриці: Підсвічування головної діагоналі квадратної матриці",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію highlightMatrixDiagonal(gridElement, size), яка знаходить у сітці клітинки на головній діагоналі (i === j) та додає їм клас 'diagonal'.",
    "reqs": [
      "Отримати всі клітинки сітки gridElement.children",
      "Для кожного рядка i від 0 до size-1 клітинка з індексом i * size + i є діагональною",
      "Додати їй клас 'diagonal'",
      "Повернути кількість підсвічених клітинок"
    ],
    "starterParams": "gridElement, size",
    "starterBody": "// Підсвітіть головну діагональ",
    "solutionBody": "const cells = gridElement.children;\n  let count = 0;\n  for (let i = 0; i < size; i++) {\n    const idx = i * size + i;\n    if (cells[idx]) {\n      cells[idx].classList.add('diagonal');\n      count++;\n    }\n  }\n  return count;",
    "tests": [
      {
        "expr": "(() => { const wrap = document.createElement('div'); for (let i = 0; i < 9; i++) wrap.appendChild(document.createElement('div')); const count = highlightMatrixDiagonal(wrap, 3); return [count, wrap.children[0].classList.contains('diagonal'), wrap.children[4].classList.contains('diagonal')]; })()",
        "expected": [
          3,
          true,
          true
        ]
      }
    ]
  },
  {
    "id": "16.6",
    "moduleIdx": 16,
    "name": "createSeatBookingGrid",
    "title": "DOM Інтерактив: Схема вибору місць у кінозалі (Seat Picker)",
    "level": "Середній рівень",
    "goal": "Напишіть функцію createSeatBookingGrid(rows, cols, occupiedSeats, onSeatClick), яка створює сітку місць. Зайняті місця мають клас 'occupied' і не клікабельні. Вільні місця при кліку перемикають клас 'selected' та викликають onSeatClick(r, c).",
    "reqs": [
      "Створити сітку розміром rows x cols",
      "Якщо пара [r, c] є в occupiedSeats — додати клас 'occupied'",
      "Інакше по кліку перемикати клас 'selected' та викликати onSeatClick(r, c)",
      "Повернути контейнер"
    ],
    "starterParams": "rows, cols, occupiedSeats, onSeatClick",
    "starterBody": "// Створіть схему вибору місць у залі",
    "solutionBody": "const grid = document.createElement('div');\n  grid.className = 'seat-grid';\n  const occSet = new Set((occupiedSeats || []).map(s => `${s[0]}-${s[1]}`));\n  for (let r = 0; r < rows; r++) {\n    const rowDiv = document.createElement('div');\n    rowDiv.className = 'seat-row';\n    for (let c = 0; c < cols; c++) {\n      const seat = document.createElement('button');\n      seat.className = 'seat';\n      if (occSet.has(`${r}-${c}`)) {\n        seat.classList.add('occupied');\n        seat.disabled = true;\n      } else {\n        seat.addEventListener('click', () => {\n          seat.classList.toggle('selected');\n          if (typeof onSeatClick === 'function') onSeatClick(r, c);\n        });\n      }\n      rowDiv.appendChild(seat);\n    }\n    grid.appendChild(rowDiv);\n  }\n  return grid;",
    "tests": [
      {
        "expr": "(() => { let clicked = null; const g = createSeatBookingGrid(2, 2, [[0, 0]], (r, c) => clicked = [r, c]); const seats = g.querySelectorAll('.seat'); seats[1].click(); return [seats[0].classList.contains('occupied'), seats[1].classList.contains('selected'), clicked]; })()",
        "expected": [
          true,
          true,
          [
            0,
            1
          ]
        ]
      }
    ]
  },
  {
    "id": "16.7",
    "moduleIdx": 16,
    "name": "createTicTacToeBoard",
    "title": "DOM Ігри: Поле хрестики-нулики 3х3 з обробником ходу",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію createTicTacToeBoard(gridState, onCellClick), яка приймає масив 3х3 (значення 'X', 'O' або '') і повертає поле 3x3. Клік на порожню клітинку викликає onCellClick(row, col).",
    "reqs": [
      "Створити <div class='tic-tac-toe-board'>",
      "Відобразити 9 клітинок із поточними значеннями",
      "Клік на зайняту клітинку ігнорується",
      "Клік на порожню викликає onCellClick(r, c)",
      "Повернути поле"
    ],
    "starterParams": "gridState, onCellClick",
    "starterBody": "// Створіть ігрове поле 3х3",
    "solutionBody": "const board = document.createElement('div');\n  board.className = 'tic-tac-toe-board';\n  (gridState || []).forEach((row, r) => {\n    row.forEach((val, c) => {\n      const cell = document.createElement('div');\n      cell.className = 'ttt-cell';\n      cell.textContent = val || '';\n      cell.addEventListener('click', () => {\n        if (!val && typeof onCellClick === 'function') {\n          onCellClick(r, c);\n        }\n      });\n      board.appendChild(cell);\n    });\n  });\n  return board;",
    "tests": [
      {
        "expr": "(() => { let moved = null; const b = createTicTacToeBoard([['X', '', ''], ['', 'O', ''], ['', '', '']], (r, c) => moved = [r, c]); b.children[1].click(); return [b.children[0].textContent, moved]; })()",
        "expected": [
          "X",
          [
            0,
            1
          ]
        ]
      }
    ]
  },
  {
    "id": "16.8",
    "moduleIdx": 16,
    "name": "createFilterableCardsGrid",
    "title": "DOM Каталог: Фільтрація карток товарів за категорією",
    "level": "Середній рівень",
    "goal": "Напишіть функцію createFilterableCardsGrid(items, activeCategory), яка створює сітку карток. Картки з категорією activeCategory (або всі, якщо activeCategory === 'all') мають display: 'block', інші — display: 'none'.",
    "reqs": [
      "Створити контейнер <div class='product-grid'>",
      "Для кожного товару { id, name, category, price } створити картку",
      "Якщо activeCategory !== 'all' && item.category !== activeCategory, приховати картку",
      "Повернути контейнер"
    ],
    "starterParams": "items, activeCategory",
    "starterBody": "// Створіть фільтровану сітку товарів",
    "solutionBody": "const grid = document.createElement('div');\n  grid.className = 'product-grid';\n  (items || []).forEach(item => {\n    const card = document.createElement('div');\n    card.className = 'product-card';\n    card.innerHTML = `<h4>${item.name}</h4><span>${item.price} грн</span>`;\n    if (activeCategory !== 'all' && item.category !== activeCategory) {\n      card.style.display = 'none';\n    }\n    grid.appendChild(card);\n  });\n  return grid;",
    "tests": [
      {
        "expr": "(() => { const items = [{ id: 1, name: 'Чайник', category: 'appliances', price: 800 }, { id: 2, name: 'Книга', category: 'books', price: 300 }]; const g = createFilterableCardsGrid(items, 'books'); return [g.children[0].style.display, g.children[1].style.display]; })()",
        "expected": [
          "none",
          ""
        ]
      }
    ]
  },
  {
    "id": "16.9",
    "moduleIdx": 16,
    "name": "createKanbanColumns",
    "title": "DOM Kanban: Дошка завдань із колонками та картками",
    "level": "Середній рівень",
    "goal": "Напишіть функцію createKanbanColumns(columns), яка приймає масив колонок [{ title: 'To Do', tasks: ['Task 1', 'Task 2'] }] і створює дошку <div class='kanban-board'>.",
    "reqs": [
      "Для кожної колонки створити <div class='kanban-col'>",
      "Додати заголовок <h3 class='kanban-title'> та лічильник кількості завдань",
      "Створити список <div class='kanban-task'> для кожної картки",
      "Повернути контейнер дошки"
    ],
    "starterParams": "columns",
    "starterBody": "// Створіть Kanban дошку",
    "solutionBody": "const board = document.createElement('div');\n  board.className = 'kanban-board';\n  (columns || []).forEach(col => {\n    const colEl = document.createElement('div');\n    colEl.className = 'kanban-col';\n    const header = document.createElement('div');\n    header.className = 'kanban-header';\n    header.innerHTML = `<h3>${col.title}</h3><span class='badge'>${col.tasks ? col.tasks.length : 0}</span>`;\n    colEl.appendChild(header);\n    const list = document.createElement('div');\n    list.className = 'kanban-tasks';\n    (col.tasks || []).forEach(t => {\n      const card = document.createElement('div');\n      card.className = 'kanban-task';\n      card.textContent = t;\n      list.appendChild(card);\n    });\n    colEl.appendChild(list);\n    board.appendChild(colEl);\n  });\n  return board;",
    "tests": [
      {
        "expr": "(() => { const b = createKanbanColumns([{ title: 'В роботі', tasks: ['Тести', 'Фікс'] }]); return [b.children.length, b.querySelector('.badge').textContent, b.querySelectorAll('.kanban-task').length]; })()",
        "expected": [
          1,
          "2",
          2
        ]
      }
    ]
  },
  {
    "id": "16.10",
    "moduleIdx": 16,
    "name": "createMatrixHeatmap",
    "title": "DOM Матриці: Теплова карта (Heatmap) з динамічною прозорістю фону",
    "level": "Середній рівень",
    "goal": "Напишіть функцію createMatrixHeatmap(matrix, maxVal), яка генерує таблицю теплової карти. Кожна клітинка має фон `rgba(62, 207, 142, ratio)`, де ratio = value / maxVal.",
    "reqs": [
      "Створити <table> з рядками та клітинками <td>",
      "Розрахувати ratio для кожного значення (від 0 до 1)",
      "Встановити td.style.backgroundColor",
      "Повернути <table>"
    ],
    "starterParams": "matrix, maxVal",
    "starterBody": "// Створіть теплову карту",
    "solutionBody": "const table = document.createElement('table');\n  table.className = 'heatmap-table';\n  (matrix || []).forEach(row => {\n    const tr = document.createElement('tr');\n    row.forEach(val => {\n      const td = document.createElement('td');\n      td.textContent = String(val);\n      const ratio = maxVal > 0 ? Math.min(Math.max(val / maxVal, 0), 1) : 0;\n      td.style.backgroundColor = `rgba(62, 207, 142, ${ratio.toFixed(2)})`;\n      tr.appendChild(td);\n    });\n    table.appendChild(tr);\n  });\n  return table;",
    "tests": [
      {
        "expr": "(() => { const hm = createMatrixHeatmap([[10, 50], [100, 0]], 100); return [hm.querySelectorAll('td').length, hm.querySelectorAll('td')[2].textContent]; })()",
        "expected": [
          4,
          "100"
        ]
      }
    ]
  },
  {
    "id": "16.11",
    "moduleIdx": 16,
    "name": "createMultiSelectTableRows",
    "title": "DOM Таблиці: Чекбокси вибору рядків та загальний чекбокс 'Обрати всі'",
    "level": "Просунутий рівень",
    "goal": "Напишіть функцію createMultiSelectTableRows(items, onSelectionChange), яка створює таблицю з колонкою чекбоксів у кожному рядку та 'Select All' у заголовку.",
    "reqs": [
      "Створити заголовок з чекбоксом #selectAll",
      "Створити рядки з окремими чекбоксами для кожного item",
      "Клік на #selectAll відмічає або знімає всі чекбокси",
      "Клік на будь-який чекбокс викликає onSelectionChange(selectedItems)",
      "Повернути <table>"
    ],
    "starterParams": "items, onSelectionChange",
    "starterBody": "// Реалізуйте таблицю з вибором рядків",
    "solutionBody": "const table = document.createElement('table');\n  const thead = document.createElement('thead');\n  const trHead = document.createElement('tr');\n  const thCheck = document.createElement('th');\n  const selectAll = document.createElement('input');\n  selectAll.type = 'checkbox';\n  thCheck.appendChild(selectAll);\n  trHead.appendChild(thCheck);\n  const thName = document.createElement('th');\n  thName.textContent = 'Елемент';\n  trHead.appendChild(thName);\n  thead.appendChild(trHead);\n  table.appendChild(thead);\n  const tbody = document.createElement('tbody');\n  const rowCheckboxes = [];\n  const notify = () => {\n    const sel = (items || []).filter((_, i) => rowCheckboxes[i].checked);\n    if (typeof onSelectionChange === 'function') onSelectionChange(sel);\n  };\n  (items || []).forEach(item => {\n    const tr = document.createElement('tr');\n    const tdCheck = document.createElement('td');\n    const cb = document.createElement('input');\n    cb.type = 'checkbox';\n    cb.addEventListener('change', () => {\n      selectAll.checked = rowCheckboxes.every(c => c.checked);\n      notify();\n    });\n    rowCheckboxes.push(cb);\n    tdCheck.appendChild(cb);\n    const tdName = document.createElement('td');\n    tdName.textContent = item.name;\n    tr.appendChild(tdCheck);\n    tr.appendChild(tdName);\n    tbody.appendChild(tr);\n  });\n  selectAll.addEventListener('change', () => {\n    rowCheckboxes.forEach(c => c.checked = selectAll.checked);\n    notify();\n  });\n  table.appendChild(tbody);\n  return table;",
    "tests": [
      {
        "expr": "(() => { let sel = []; const t = createMultiSelectTableRows([{ id: 1, name: 'A' }, { id: 2, name: 'B' }], s => sel = s); const selectAll = t.querySelector('thead input'); selectAll.click(); return sel.length; })()",
        "expected": 2
      }
    ]
  },
  {
    "id": "16.12",
    "moduleIdx": 16,
    "name": "createEditableTableCell",
    "title": "DOM Редактор: Клітинка таблиці, що стає інпутом при подвійному кліку",
    "level": "Середній рівень",
    "goal": "Напишіть функцію createEditableTableCell(initialValue, onSave), яка повертає <td> з початковим текстом. Подвійний клік (dblclick) замінює текст на <input>. Натискання Enter або втрата фокусу (blur) зберігають нове значення та викликають onSave(newValue).",
    "reqs": [
      "Створити елемент <td> з initialValue",
      "По події 'dblclick' замінити вміст на <input value='...'>",
      "По події blur або клавіші Enter зберегти текст та викликати onSave",
      "Повернути <td>"
    ],
    "starterParams": "initialValue, onSave",
    "starterBody": "// Створіть редаговану клітинку",
    "solutionBody": "const td = document.createElement('td');\n  let val = initialValue;\n  td.textContent = val;\n  td.addEventListener('dblclick', () => {\n    if (td.querySelector('input')) return;\n    const input = document.createElement('input');\n    input.type = 'text';\n    input.value = val;\n    td.innerHTML = '';\n    td.appendChild(input);\n    input.focus();\n    const save = () => {\n      val = input.value.trim();\n      td.textContent = val;\n      if (typeof onSave === 'function') onSave(val);\n    };\n    input.addEventListener('blur', save, { once: true });\n    input.addEventListener('keydown', e => {\n      if (e.key === 'Enter') input.blur();\n    });\n  });\n  return td;",
    "tests": [
      {
        "expr": "(() => { let saved = null; const td = createEditableTableCell('Початковий', v => saved = v); td.dispatchEvent(new Event('dblclick')); const inp = td.querySelector('input'); inp.value = 'Оновлений'; inp.dispatchEvent(new Event('blur')); return [td.textContent, saved]; })()",
        "expected": [
          "Оновлений",
          "Оновлений"
        ]
      }
    ]
  },
  {
    "id": "16.13",
    "moduleIdx": 16,
    "name": "createCsvToTableViewer",
    "title": "DOM Парсери: Генератор HTML таблиці з CSV рядка",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію createCsvToTableViewer(csvText), яка розбиває CSV текст на рядки (по \n) та комірки (по коми), і будує з них <table>.",
    "reqs": [
      "Розбити csvText на непорожні рядки",
      "Перший рядок використати для <th>",
      "Інші рядки перетворити на <tr><td>",
      "Повернути <table>"
    ],
    "starterParams": "csvText",
    "starterBody": "// Перетворіть CSV на <table>",
    "solutionBody": "const lines = (csvText || '').trim().split('\\n').filter(Boolean);\n  const table = document.createElement('table');\n  if (!lines.length) return table;\n  const headTr = document.createElement('tr');\n  lines[0].split(',').forEach(h => {\n    const th = document.createElement('th');\n    th.textContent = h.trim();\n    headTr.appendChild(th);\n  });\n  const thead = document.createElement('thead');\n  thead.appendChild(headTr);\n  table.appendChild(thead);\n  const tbody = document.createElement('tbody');\n  for (let i = 1; i < lines.length; i++) {\n    const tr = document.createElement('tr');\n    lines[i].split(',').forEach(c => {\n      const td = document.createElement('td');\n      td.textContent = c.trim();\n      tr.appendChild(td);\n    });\n    tbody.appendChild(tr);\n  }\n  table.appendChild(tbody);\n  return table;",
    "tests": [
      {
        "expr": "(() => { const t = createCsvToTableViewer('name,age\\nІван,20\\nМарія,22'); return [t.querySelectorAll('th').length, t.querySelectorAll('tbody tr').length]; })()",
        "expected": [
          2,
          2
        ]
      }
    ]
  },
  {
    "id": "16.14",
    "moduleIdx": 16,
    "name": "createMatrixTransposeView",
    "title": "DOM Матриці: Дві таблиці (вихідна та транспонована матриця)",
    "level": "Середній рівень",
    "goal": "Напишіть функцію createMatrixTransposeView(matrix), яка створює контейнер із двома таблицями поруч: оригінальна матриця та транспонована (де рядки стали стовпцями).",
    "reqs": [
      "Створити оригінальну таблицю з matrix",
      "Обчислити транспоновану матрицю: transposed[c][r] = matrix[r][c]",
      "Створити другу таблицю",
      "Повернути контейнер <div class='matrix-comparison'> з обома таблицями"
    ],
    "starterParams": "matrix",
    "starterBody": "// Побудуйте порівняння оригінальної та транспонованої матриці",
    "solutionBody": "const wrap = document.createElement('div');\n  wrap.className = 'matrix-comparison';\n  const makeTable = m => {\n    const tbl = document.createElement('table');\n    m.forEach(row => {\n      const tr = document.createElement('tr');\n      row.forEach(val => {\n        const td = document.createElement('td');\n        td.textContent = String(val);\n        tr.appendChild(td);\n      });\n      tbl.appendChild(tr);\n    });\n    return tbl;\n  };\n  wrap.appendChild(makeTable(matrix));\n  const transposed = matrix[0].map((_, c) => matrix.map(r => r[c]));\n  wrap.appendChild(makeTable(transposed));\n  return wrap;",
    "tests": [
      {
        "expr": "(() => { const v = createMatrixTransposeView([[1, 2, 3], [4, 5, 6]]); const t2 = v.querySelectorAll('table')[1]; return [t2.querySelectorAll('tr').length, t2.querySelectorAll('td').length]; })()",
        "expected": [
          3,
          6
        ]
      }
    ]
  },
  {
    "id": "16.15",
    "moduleIdx": 16,
    "name": "createTableColumnToggler",
    "title": "DOM Таблиці: Панель перемикання видимості стовпців таблиці",
    "level": "Середній рівень",
    "goal": "Напишіть функцію createTableColumnToggler(tableElement, columnNames), яка генерує блок чекбоксів для кожного стовпця. Зняття позначки ховає відповідні <th> та <td> у таблиці.",
    "reqs": [
      "Створити <div class='column-toggler'> з чекбоксом для кожного стовпця",
      "По зміні чекбокса знайти всі клітинки цього стовпця у таблиці",
      "Встановити cell.style.display = 'none' (або '' якщо увімкнено)",
      "Повернути блок перемикачів"
    ],
    "starterParams": "tableElement, columnNames",
    "starterBody": "// Створіть панель приховування стовпців",
    "solutionBody": "const div = document.createElement('div');\n  div.className = 'column-toggler';\n  (columnNames || []).forEach((colName, idx) => {\n    const label = document.createElement('label');\n    const cb = document.createElement('input');\n    cb.type = 'checkbox';\n    cb.checked = true;\n    cb.addEventListener('change', () => {\n      const rows = tableElement.querySelectorAll('tr');\n      rows.forEach(r => {\n        const cell = r.children[idx];\n        if (cell) cell.style.display = cb.checked ? '' : 'none';\n      });\n    });\n    label.appendChild(cb);\n    label.appendChild(document.createTextNode(' ' + colName));\n    div.appendChild(label);\n  });\n  return div;",
    "tests": [
      {
        "expr": "(() => { const tbl = document.createElement('table'); tbl.innerHTML = '<tr><th>A</th><th>B</th></tr><tr><td>1</td><td>2</td></tr>'; const toggler = createTableColumnToggler(tbl, ['A', 'B']); toggler.querySelector('input').click(); return [tbl.querySelector('th').style.display, tbl.querySelector('td').style.display]; })()",
        "expected": [
          "none",
          "none"
        ]
      }
    ]
  },
  {
    "id": "16.16",
    "moduleIdx": 16,
    "name": "createPixelArtCanvas",
    "title": "DOM Ігри: Pixel Art полотно для малювання пікселями",
    "level": "Середній рівень",
    "goal": "Напишіть функцію createPixelArtCanvas(size, activeColor), яка створює сітку size x size пікселів. Клік або затиснута миша по пікселю фарбує його у колір activeColor.",
    "reqs": [
      "Створити сітку <div class='pixel-grid'> розміром size x size",
      "Кожен піксель — <div class='pixel'>",
      "Клік на піксель встановлює pixel.style.backgroundColor = activeColor",
      "Повернути полотно"
    ],
    "starterParams": "size, activeColor",
    "starterBody": "// Створіть полотно для піксель-арту",
    "solutionBody": "const grid = document.createElement('div');\n  grid.className = 'pixel-grid';\n  grid.style.display = 'grid';\n  grid.style.gridTemplateColumns = `repeat(${size}, 20px)`;\n  for (let i = 0; i < size * size; i++) {\n    const px = document.createElement('div');\n    px.className = 'pixel';\n    px.style.width = '20px';\n    px.style.height = '20px';\n    px.style.border = '1px solid #ccc';\n    px.addEventListener('click', () => {\n      px.style.backgroundColor = activeColor;\n    });\n    grid.appendChild(px);\n  }\n  return grid;",
    "tests": [
      {
        "expr": "(() => { const c = createPixelArtCanvas(4, '#ff0000'); c.children[0].click(); return [c.children.length, c.children[0].style.backgroundColor]; })()",
        "expected": [
          16,
          "rgb(255, 0, 0)"
        ]
      }
    ]
  },
  {
    "id": "16.17",
    "moduleIdx": 16,
    "name": "createCalendarMonthGrid",
    "title": "DOM Календарі: Сітка днів місяця (7 колонок Пн-Нд)",
    "level": "Просунутий рівень",
    "goal": "Напишіть функцію createCalendarMonthGrid(year, month, activeDay), яка створює сітку місяця (0-11) з 7 колонками днів тижня. Дні позначаються числами 1..N, activeDay має клас 'active', порожні слоти перед 1-м числом заповнюються пустими блоками.",
    "reqs": [
      "Визначити день тижня першого дня місяця (0-6 де 0 - Пн або Нд)",
      "Визначити кількість днів у місяці",
      "Створити контейнер <div class='calendar-grid'>",
      "Додати порожні клітинки та дні місяця",
      "Повернути сітку"
    ],
    "starterParams": "year, month, activeDay",
    "starterBody": "// Створіть сітку днів місяця",
    "solutionBody": "const grid = document.createElement('div');\n  grid.className = 'calendar-grid';\n  grid.style.display = 'grid';\n  grid.style.gridTemplateColumns = 'repeat(7, 1fr)';\n  const firstDay = new Date(year, month, 1).getDay(); // 0 is Sun\n  const offset = (firstDay + 6) % 7; // Monday as 0\n  const daysInMonth = new Date(year, month + 1, 0).getDate();\n  for (let i = 0; i < offset; i++) {\n    const empty = document.createElement('div');\n    empty.className = 'cal-day empty';\n    grid.appendChild(empty);\n  }\n  for (let d = 1; d <= daysInMonth; d++) {\n    const dayEl = document.createElement('div');\n    dayEl.className = 'cal-day' + (d === activeDay ? ' active' : '');\n    dayEl.textContent = String(d);\n    grid.appendChild(dayEl);\n  }\n  return grid;",
    "tests": [
      {
        "expr": "(() => { const cal = createCalendarMonthGrid(2026, 0, 15); return [cal.querySelector('.cal-day.active').textContent, cal.querySelectorAll('.cal-day:not(.empty)').length]; })()",
        "expected": [
          "15",
          31
        ]
      }
    ]
  },
  {
    "id": "16.18",
    "moduleIdx": 16,
    "name": "createScoreboardTable",
    "title": "DOM Турніри: Таблиця лідерів (Leaderboard) із медалями #1, #2, #3",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію createScoreboardTable(players), яка приймає масив [{ name, points }] і генерує турнірну таблицю, відсортовану за спаданням балів, з номерами місць (перші три місця отримують емодзі 🥇, 🥈, 🥉).",
    "reqs": [
      "Відсортувати гравців за points спадно",
      "Створити <table>",
      "Додати стовпці: Місце, Гравець, Очки",
      "Перші три місця позначати 🥇, 🥈, 🥉",
      "Повернути <table>"
    ],
    "starterParams": "players",
    "starterBody": "// Створіть турнірну таблицю",
    "solutionBody": "const table = document.createElement('table');\n  table.className = 'scoreboard';\n  const sorted = [...(players || [])].sort((a, b) => b.points - a.points);\n  const medals = ['🥇', '🥈', '🥉'];\n  sorted.forEach((p, idx) => {\n    const tr = document.createElement('tr');\n    const rank = medals[idx] || String(idx + 1);\n    tr.innerHTML = `<td class='rank'>${rank}</td><td class='name'>${p.name}</td><td class='pts'>${p.points}</td>`;\n    table.appendChild(tr);\n  });\n  return table;",
    "tests": [
      {
        "expr": "(() => { const t = createScoreboardTable([{ name: 'Богдан', points: 50 }, { name: 'Анна', points: 120 }, { name: 'Сергій', points: 90 }]); return [t.querySelectorAll('tr')[0].querySelector('.rank').textContent, t.querySelectorAll('tr')[0].querySelector('.name').textContent]; })()",
        "expected": [
          "🥇",
          "Анна"
        ]
      }
    ]
  },
  {
    "id": "16.19",
    "moduleIdx": 16,
    "name": "createChessboardView",
    "title": "DOM Шахи: Шахова дошка 8х8 із чергуванням кольорів та фігурами",
    "level": "Середній рівень",
    "goal": "Напишіть функцію createChessboardView(pieces), яка створює шахівницю 8х8. Клітинки чергуються світлими і темними (класи 'light-square' та 'dark-square'). Фігури з об'єкта pieces (наприклад, { 'e4': '♙', 'e8': '♚' }) розміщуються у відповідні клітинки.",
    "reqs": [
      "Створити 64 клітинки (8 рядків 8..1, 8 стовпців a..h)",
      "Чергувати класи 'light-square' та 'dark-square'",
      "Якщо координата є в pieces, встановити textContent символу фігури",
      "Повернути <div class='chessboard'>"
    ],
    "starterParams": "pieces",
    "starterBody": "// Створіть шахову дошку 8х8",
    "solutionBody": "const board = document.createElement('div');\n  board.className = 'chessboard';\n  board.style.display = 'grid';\n  board.style.gridTemplateColumns = 'repeat(8, 40px)';\n  const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];\n  for (let r = 8; r >= 1; r--) {\n    for (let f = 0; f < 8; f++) {\n      const coord = files[f] + r;\n      const sq = document.createElement('div');\n      const isLight = (r + f) % 2 !== 0;\n      sq.className = 'square ' + (isLight ? 'light-square' : 'dark-square');\n      sq.dataset.coord = coord;\n      if (pieces && pieces[coord]) sq.textContent = pieces[coord];\n      board.appendChild(sq);\n    }\n  }\n  return board;",
    "tests": [
      {
        "expr": "(() => { const b = createChessboardView({ 'e4': '♙' }); const e4 = b.querySelector('[data-coord=\"e4\"]'); return [b.children.length, e4.textContent]; })()",
        "expected": [
          64,
          "♙"
        ]
      }
    ]
  },
  {
    "id": "16.20",
    "moduleIdx": 16,
    "name": "createComparisonTable",
    "title": "DOM Таблиці: Матриця порівняння тарифів або характеристик",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію createComparisonTable(plans, features), яка приймає плани ['Basic', 'Pro'] та фічі [{ name: 'SSL', basic: true, pro: true }] і повертає таблицю з галочками ✔ та хрестиками ✖.",
    "reqs": [
      "Створити заголовок з назвами планів",
      "Для кожної фічі створити рядок",
      "Логічні значення замінювати на '✔' (true) або '✖' (false)",
      "Повернути <table>"
    ],
    "starterParams": "plans, features",
    "starterBody": "// Створіть таблицю порівняння",
    "solutionBody": "const table = document.createElement('table');\n  table.className = 'comparison-table';\n  const thead = document.createElement('thead');\n  const trHead = document.createElement('tr');\n  trHead.appendChild(document.createElement('th'));\n  (plans || []).forEach(p => {\n    const th = document.createElement('th');\n    th.textContent = p;\n    trHead.appendChild(th);\n  });\n  thead.appendChild(trHead);\n  table.appendChild(thead);\n  const tbody = document.createElement('tbody');\n  (features || []).forEach(f => {\n    const tr = document.createElement('tr');\n    const tdName = document.createElement('td');\n    tdName.textContent = f.name;\n    tr.appendChild(tdName);\n    (plans || []).forEach(p => {\n      const tdVal = document.createElement('td');\n      const val = f[p.toLowerCase()];\n      tdVal.textContent = typeof val === 'boolean' ? (val ? '✔' : '✖') : String(val ?? '');\n      tr.appendChild(tdVal);\n    });\n    tbody.appendChild(tr);\n  });\n  table.appendChild(tbody);\n  return table;",
    "tests": [
      {
        "expr": "(() => { const t = createComparisonTable(['Basic', 'Pro'], [{ name: 'Швидкість', basic: '100 Mbps', pro: '1 Gbps' }]); return [t.querySelectorAll('th').length, t.querySelectorAll('tbody td')[1].textContent]; })()",
        "expected": [
          3,
          "100 Mbps"
        ]
      }
    ]
  },
  {
    "id": "16.21",
    "moduleIdx": 16,
    "name": "createDataFilterPills",
    "title": "DOM Фільтри: Чіпси фільтрів із підрахунком кількості елементів",
    "level": "Середній рівень",
    "goal": "Напишіть функцію createDataFilterPills(data, propertyName, onFilter), яка групує елементи data за значенням властивості propertyName і створює чіпси 'All (N)', 'Val1 (X)', 'Val2 (Y)'.",
    "reqs": [
      "Підрахувати частоту кожного унікального значення властивості",
      "Створити чіпс 'Всі (N)' та чіпси для кожного значення",
      "Клік активує чіпс і викликає onFilter(selectedValue)",
      "Повернути контейнер чіпсів"
    ],
    "starterParams": "data, propertyName, onFilter",
    "starterBody": "// Створіть чіпси фільтрації за значенням",
    "solutionBody": "const div = document.createElement('div');\n  div.className = 'filter-pills';\n  const counts = {};\n  (data || []).forEach(d => {\n    const v = d[propertyName];\n    if (v) counts[v] = (counts[v] || 0) + 1;\n  });\n  const pills = [{ val: 'all', label: `Всі (${(data || []).length})` }];\n  Object.keys(counts).forEach(k => pills.push({ val: k, label: `${k} (${counts[k]})` }));\n  const btnElements = [];\n  pills.forEach((p, idx) => {\n    const b = document.createElement('button');\n    b.className = 'filter-pill' + (idx === 0 ? ' active' : '');\n    b.textContent = p.label;\n    b.addEventListener('click', () => {\n      btnElements.forEach(x => x.classList.remove('active'));\n      b.classList.add('active');\n      if (typeof onFilter === 'function') onFilter(p.val);\n    });\n    btnElements.push(b);\n    div.appendChild(b);\n  });\n  return div;",
    "tests": [
      {
        "expr": "(() => { let sel = null; const f = createDataFilterPills([{ cat: 'A' }, { cat: 'A' }, { cat: 'B' }], 'cat', v => sel = v); f.children[1].click(); return [f.children[0].textContent, sel]; })()",
        "expected": [
          "Всі (3)",
          "A"
        ]
      }
    ]
  },
  {
    "id": "16.22",
    "moduleIdx": 16,
    "name": "createTableSearchFilter",
    "title": "DOM Пошук: Живий пошук рядків таблиці за текстом інпута",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію createTableSearchFilter(tableElement, searchInput), яка підписується на подію 'input' поля searchInput і приховує ті рядки tbody, текст яких не містить шуканий підрядок.",
    "reqs": [
      "Отримати всі рядки tbody таблиці",
      "По події 'input' перевіряти row.textContent.toLowerCase()",
      "Встановлювати row.style.display = '' якщо є збіг, інакше 'none'",
      "Повернути кількість знайдених рядків"
    ],
    "starterParams": "tableElement, searchInput",
    "starterBody": "// Реалізуйте пошук рядків таблиці",
    "solutionBody": "searchInput.addEventListener('input', () => {\n    const q = searchInput.value.toLowerCase().trim();\n    const rows = tableElement.querySelectorAll('tbody tr');\n    rows.forEach(r => {\n      const match = !q || r.textContent.toLowerCase().includes(q);\n      r.style.display = match ? '' : 'none';\n    });\n  });\n  return true;",
    "tests": [
      {
        "expr": "(() => { const tbl = document.createElement('table'); tbl.innerHTML = '<tbody><tr><td>Київ</td></tr><tr><td>Львів</td></tr></tbody>'; const inp = document.createElement('input'); createTableSearchFilter(tbl, inp); inp.value = 'льв'; inp.dispatchEvent(new Event('input')); return [tbl.querySelectorAll('tbody tr')[0].style.display, tbl.querySelectorAll('tbody tr')[1].style.display]; })()",
        "expected": [
          "none",
          ""
        ]
      }
    ]
  },
  {
    "id": "16.23",
    "moduleIdx": 16,
    "name": "createAccordionTable",
    "title": "DOM Акордеон: Рядки таблиці, що розгортають піддеталі по кліку",
    "level": "Середній рівень",
    "goal": "Напишіть функцію createAccordionTable(rowsData), яка приймає [{ summary: 'Замовлення #101', details: 'Товари: Ноутбук, Миша' }] і створює таблицю, де клік на рядок розгортає/згортає рядок деталей.",
    "reqs": [
      "Створити основний рядок <tr class='main-row'>",
      "Створити рядок деталей <tr class='detail-row'> з colspan",
      "Рядок деталей за замовчуванням має display: none",
      "Клік на main-row перемикає видимість деталей",
      "Повернути <table>"
    ],
    "starterParams": "rowsData",
    "starterBody": "// Створіть акордеон-таблицю",
    "solutionBody": "const table = document.createElement('table');\n  table.className = 'accordion-table';\n  (rowsData || []).forEach(item => {\n    const trMain = document.createElement('tr');\n    trMain.className = 'main-row';\n    trMain.innerHTML = `<td>▶</td><td>${item.summary}</td>`;\n    const trDetail = document.createElement('tr');\n    trDetail.className = 'detail-row';\n    trDetail.style.display = 'none';\n    trDetail.innerHTML = `<td colspan='2'>${item.details}</td>`;\n    trMain.addEventListener('click', () => {\n      const isHidden = trDetail.style.display === 'none';\n      trDetail.style.display = isHidden ? '' : 'none';\n      trMain.children[0].textContent = isHidden ? '▼' : '▶';\n    });\n    table.appendChild(trMain);\n    table.appendChild(trDetail);\n  });\n  return table;",
    "tests": [
      {
        "expr": "(() => { const t = createAccordionTable([{ summary: 'Замовлення 1', details: 'Деталі замовлення' }]); const mainRow = t.querySelector('.main-row'); mainRow.click(); return t.querySelector('.detail-row').style.display; })()",
        "expected": ""
      }
    ]
  },
  {
    "id": "16.24",
    "moduleIdx": 16,
    "name": "createMatrixRowColumnSums",
    "title": "DOM Матриці: Таблиця з розрахунком суми кожного рядка та стовпця",
    "level": "Середній рівень",
    "goal": "Напишіть функцію createMatrixRowColumnSums(numericMatrix), яка будує таблицю з матриці і додає праворуч стовпець 'Сума рядка', а знизу — рядок 'Сума стовпця'.",
    "reqs": [
      "Для кожного рядка порахувати суму елементів і вивести в останню комірку",
      "Порахувати суму кожного стовпця і додати підсумковий рядок <tfoot>",
      "У крайній правій нижній клітинці вивести загальну суму всіх чисел",
      "Повернути <table>"
    ],
    "starterParams": "numericMatrix",
    "starterBody": "// Створіть таблицю матриці з сумами",
    "solutionBody": "const table = document.createElement('table');\n  const tbody = document.createElement('tbody');\n  const colSums = new Array((numericMatrix[0] || []).length).fill(0);\n  let grandTotal = 0;\n  (numericMatrix || []).forEach(row => {\n    const tr = document.createElement('tr');\n    let rowSum = 0;\n    row.forEach((val, c) => {\n      const td = document.createElement('td');\n      td.textContent = String(val);\n      tr.appendChild(td);\n      rowSum += val;\n      colSums[c] += val;\n      grandTotal += val;\n    });\n    const tdRowSum = document.createElement('td');\n    tdRowSum.className = 'sum-cell';\n    tdRowSum.textContent = String(rowSum);\n    tr.appendChild(tdRowSum);\n    tbody.appendChild(tr);\n  });\n  table.appendChild(tbody);\n  const tfoot = document.createElement('tfoot');\n  const trFoot = document.createElement('tr');\n  colSums.forEach(sum => {\n    const td = document.createElement('td');\n    td.className = 'sum-cell';\n    td.textContent = String(sum);\n    trFoot.appendChild(td);\n  });\n  const tdTotal = document.createElement('td');\n  tdTotal.className = 'grand-total';\n  tdTotal.textContent = String(grandTotal);\n  trFoot.appendChild(tdTotal);\n  tfoot.appendChild(trFoot);\n  table.appendChild(tfoot);\n  return table;",
    "tests": [
      {
        "expr": "(() => { const t = createMatrixRowColumnSums([[1, 2], [3, 4]]); return [t.querySelector('.grand-total').textContent, t.querySelectorAll('.sum-cell')[0].textContent]; })()",
        "expected": [
          "10",
          "3"
        ]
      }
    ]
  },
  {
    "id": "16.25",
    "moduleIdx": 16,
    "name": "createTimelineMilestones",
    "title": "DOM Таймлайн: Інтерактивний горизонтальний графік етапів проекту",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію createTimelineMilestones(milestones), яка приймає [{ date: '2026-01', title: 'Старт', done: true }] і повертає елемент таймлайну з точками та лініями.",
    "reqs": [
      "Створити контейнер <div class='timeline'>",
      "Для кожного етапу створити точку <div class='milestone'>",
      "Якщо done === true, додати клас 'completed'",
      "Повернути контейнер"
    ],
    "starterParams": "milestones",
    "starterBody": "// Створіть таймлайн етапів",
    "solutionBody": "const div = document.createElement('div');\n  div.className = 'timeline';\n  (milestones || []).forEach(m => {\n    const item = document.createElement('div');\n    item.className = 'milestone' + (m.done ? ' completed' : '');\n    item.innerHTML = `<span class='date'>${m.date}</span><h4 class='title'>${m.title}</h4>`;\n    div.appendChild(item);\n  });\n  return div;",
    "tests": [
      {
        "expr": "(() => { const tl = createTimelineMilestones([{ date: '2026-05', title: 'Реліз', done: true }]); return [tl.children.length, tl.children[0].classList.contains('completed')]; })()",
        "expected": [
          1,
          true
        ]
      }
    ]
  },
  {
    "id": "16.26",
    "moduleIdx": 16,
    "name": "createColorMatrixPalette",
    "title": "DOM Кольори: Палітра кольорів із копіюванням HEX коду по кліку",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію createColorMatrixPalette(colors2D, onCopyColor), яка створює сітку зразків кольорів. Клік на зразок викликає onCopyColor(hexCode).",
    "reqs": [
      "Створити сітку з клітинками для кожного HEX коду",
      "Встановити cell.style.backgroundColor = hexCode",
      "Клік викликає onCopyColor(hexCode)",
      "Повернути контейнер"
    ],
    "starterParams": "colors2D, onCopyColor",
    "starterBody": "// Створіть палітру зразків кольорів",
    "solutionBody": "const grid = document.createElement('div');\n  grid.className = 'palette-grid';\n  (colors2D || []).forEach(row => {\n    row.forEach(color => {\n      const swatch = document.createElement('div');\n      swatch.className = 'color-swatch';\n      swatch.style.backgroundColor = color;\n      swatch.title = color;\n      swatch.addEventListener('click', () => {\n        if (typeof onCopyColor === 'function') onCopyColor(color);\n      });\n      grid.appendChild(swatch);\n    });\n  });\n  return grid;",
    "tests": [
      {
        "expr": "(() => { let copied = null; const p = createColorMatrixPalette([['#ff0000', '#00ff00']], c => copied = c); p.children[0].click(); return copied; })()",
        "expected": "#ff0000"
      }
    ]
  },
  {
    "id": "16.27",
    "moduleIdx": 16,
    "name": "createVirtualScrollList",
    "title": "DOM Оптимізація: Віртуальний список видимих елементів",
    "level": "Просунутий рівень",
    "goal": "Напишіть функцію createVirtualScrollList(items, startIndex, count), яка вибирає зріз items.slice(startIndex, startIndex + count) і рендерить елементи з їх абсолютними номерами індексів.",
    "reqs": [
      "Створити <div class='virtual-list'>",
      "Отримати slice масиву за startIndex та count",
      "Для кожного елемента вивести його глобальний індекс та назву",
      "Повернути контейнер"
    ],
    "starterParams": "items, startIndex, count",
    "starterBody": "// Відрендерити вікно видимих елементів",
    "solutionBody": "const list = document.createElement('div');\n  list.className = 'virtual-list';\n  const slice = (items || []).slice(startIndex, startIndex + count);\n  slice.forEach((it, idx) => {\n    const row = document.createElement('div');\n    row.className = 'virtual-row';\n    row.textContent = `#${startIndex + idx}: ${it}`;\n    list.appendChild(row);\n  });\n  return list;",
    "tests": [
      {
        "expr": "(() => { const v = createVirtualScrollList(['A', 'B', 'C', 'D', 'E'], 2, 2); return [v.children.length, v.children[0].textContent]; })()",
        "expected": [
          2,
          "#2: C"
        ]
      }
    ]
  },
  {
    "id": "16.28",
    "moduleIdx": 16,
    "name": "createPricingMatrix",
    "title": "DOM Тарифи: Картки цін із перемикачем щомісяця/щороку (Monthly / Yearly)",
    "level": "Середній рівень",
    "goal": "Напишіть функцію createPricingMatrix(plans, isYearly, onSelectPlan), яка створює сітку карток тарифів. При isYearly === true відображається plan.yearlyPrice, інакше plan.monthlyPrice.",
    "reqs": [
      "Створити <div class='pricing-grid'>",
      "Для кожного плану відобразити назву, ціну (відповідно до isYearly) та список можливостей",
      "Кнопка 'Обрати' викликає onSelectPlan(plan)",
      "Повернути контейнер"
    ],
    "starterParams": "plans, isYearly, onSelectPlan",
    "starterBody": "// Створіть картки тарифних планів",
    "solutionBody": "const grid = document.createElement('div');\n  grid.className = 'pricing-grid';\n  (plans || []).forEach(plan => {\n    const card = document.createElement('div');\n    card.className = 'pricing-card';\n    const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;\n    card.innerHTML = `<h3>${plan.title}</h3><div class='price'>${price} грн</div>`;\n    const btn = document.createElement('button');\n    btn.textContent = 'Обрати тариф';\n    btn.addEventListener('click', () => {\n      if (typeof onSelectPlan === 'function') onSelectPlan(plan);\n    });\n    card.appendChild(btn);\n    grid.appendChild(card);\n  });\n  return grid;",
    "tests": [
      {
        "expr": "(() => { let sel = null; const p = createPricingMatrix([{ title: 'Pro', monthlyPrice: 200, yearlyPrice: 1800 }], true, x => sel = x); p.querySelector('button').click(); return [p.querySelector('.price').textContent, sel.title]; })()",
        "expected": [
          "1800 грн",
          "Pro"
        ]
      }
    ]
  },
  {
    "id": "16.29",
    "moduleIdx": 16,
    "name": "createSurveyMatrixQuestion",
    "title": "DOM Опитування: Матриця оцінок шкали Лайкерта (Likert Scale)",
    "level": "Середній рівень",
    "goal": "Напишіть функцію createSurveyMatrixQuestion(questions, scaleOptions, onAnswer), яка створює таблицю опитування, де кожен рядок — питання, а стовпці — радіокнопки вибору оцінки.",
    "reqs": [
      "Створити заголовок з варіантами оцінок scaleOptions",
      "Для кожного питання створити рядок із radio input з однаковим name для рядка",
      "Зміна оцінки викликає onAnswer(questionIdx, optionValue)",
      "Повернути <table>"
    ],
    "starterParams": "questions, scaleOptions, onAnswer",
    "starterBody": "// Створіть опитування за шкалою Лайкерта",
    "solutionBody": "const table = document.createElement('table');\n  const thead = document.createElement('thead');\n  const trHead = document.createElement('tr');\n  trHead.appendChild(document.createElement('th'));\n  (scaleOptions || []).forEach(opt => {\n    const th = document.createElement('th');\n    th.textContent = opt;\n    trHead.appendChild(th);\n  });\n  thead.appendChild(trHead);\n  table.appendChild(thead);\n  const tbody = document.createElement('tbody');\n  (questions || []).forEach((q, qIdx) => {\n    const tr = document.createElement('tr');\n    const tdQ = document.createElement('td');\n    tdQ.textContent = q;\n    tr.appendChild(tdQ);\n    (scaleOptions || []).forEach(opt => {\n      const tdOpt = document.createElement('td');\n      const radio = document.createElement('input');\n      radio.type = 'radio';\n      radio.name = `survey_q_${qIdx}`;\n      radio.value = opt;\n      radio.addEventListener('change', () => {\n        if (typeof onAnswer === 'function') onAnswer(qIdx, opt);\n      });\n      tdOpt.appendChild(radio);\n      tr.appendChild(tdOpt);\n    });\n    tbody.appendChild(tr);\n  });\n  table.appendChild(tbody);\n  return table;",
    "tests": [
      {
        "expr": "(() => { let ans = null; const s = createSurveyMatrixQuestion(['Зручність'], ['1', '2', '3'], (q, o) => ans = { q, o }); s.querySelector('input').click(); return ans; })()",
        "expected": {
          "q": 0,
          "o": "1"
        }
      }
    ]
  },
  {
    "id": "16.30",
    "moduleIdx": 16,
    "name": "createBarChartFromTable",
    "title": "DOM Графіки: Стовпчикова діаграма з масиву числових значень",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію createBarChartFromTable(dataPoints, maxVal), яка створює горизонтальну або вертикальну діаграму стовпчиків, де ширина або висота відповідає відсотку від maxVal.",
    "reqs": [
      "Створити <div class='bar-chart'>",
      "Для кожної точки { label, value } створити стовпчик <div class='bar'>",
      "Встановити висоту bar.style.height = `${(value / maxVal) * 100}%`",
      "Повернути діаграму"
    ],
    "starterParams": "dataPoints, maxVal",
    "starterBody": "// Створіть стовпчикову діаграму",
    "solutionBody": "const chart = document.createElement('div');\n  chart.className = 'bar-chart';\n  chart.style.display = 'flex';\n  chart.style.alignItems = 'flex-end';\n  chart.style.height = '150px';\n  (dataPoints || []).forEach(dp => {\n    const barWrap = document.createElement('div');\n    barWrap.className = 'bar-wrap';\n    const bar = document.createElement('div');\n    bar.className = 'bar';\n    const pct = maxVal > 0 ? (dp.value / maxVal) * 100 : 0;\n    bar.style.height = `${pct}%`;\n    bar.title = `${dp.label}: ${dp.value}`;\n    barWrap.appendChild(bar);\n    chart.appendChild(barWrap);\n  });\n  return chart;",
    "tests": [
      {
        "expr": "(() => { const c = createBarChartFromTable([{ label: 'A', value: 50 }, { label: 'B', value: 100 }], 100); return [c.children.length, c.querySelectorAll('.bar')[0].style.height, c.querySelectorAll('.bar')[1].style.height]; })()",
        "expected": [
          2,
          "50%",
          "100%"
        ]
      }
    ]
  },
  {
    "id": "16.31",
    "moduleIdx": 16,
    "name": "createInteractiveSeatingChart",
    "title": "DOM Схеми: Зал із VIP та стандартними зонами крісел",
    "level": "Середній рівень",
    "goal": "Напишіть функцію createInteractiveSeatingChart(seatsConfig, onSelectSeat), яка створює схему залу. Крісла мають атрибут data-tier ('vip' або 'standard') та інший колір. Клік викликає onSelectSeat(seat).",
    "reqs": [
      "Створити сітку місць з конфігурації [{ id: 'A1', tier: 'vip', price: 500 }]",
      "Додати класи 'seat' та 'seat-vip' або 'seat-standard'",
      "Клік вибирає місце та викликає callback",
      "Повернути контейнер"
    ],
    "starterParams": "seatsConfig, onSelectSeat",
    "starterBody": "// Створіть схему зон залу",
    "solutionBody": "const wrap = document.createElement('div');\n  wrap.className = 'hall-seating';\n  (seatsConfig || []).forEach(seat => {\n    const btn = document.createElement('button');\n    btn.className = `seat seat-${seat.tier}`;\n    btn.textContent = seat.id;\n    btn.addEventListener('click', () => {\n      wrap.querySelectorAll('.seat').forEach(s => s.classList.remove('selected'));\n      btn.classList.add('selected');\n      if (typeof onSelectSeat === 'function') onSelectSeat(seat);\n    });\n    wrap.appendChild(btn);\n  });\n  return wrap;",
    "tests": [
      {
        "expr": "(() => { let sel = null; const h = createInteractiveSeatingChart([{ id: 'V1', tier: 'vip', price: 400 }], s => sel = s); h.children[0].click(); return [sel.id, h.children[0].classList.contains('seat-vip')]; })()",
        "expected": [
          "V1",
          true
        ]
      }
    ]
  },
  {
    "id": "16.32",
    "moduleIdx": 16,
    "name": "createWeeklyScheduleGrid",
    "title": "DOM Розклад: Тижневий графік подій (7 днів х години)",
    "level": "Середній рівень",
    "goal": "Напишіть функцію createWeeklyScheduleGrid(days, events), яка генерує сітку розкладу. Події з масиву [{ day: 'Mon', time: '10:00', title: 'Стендап' }] розміщуються у відповідну комірку.",
    "reqs": [
      "Створити <table> або CSS grid з колонками днів тижня",
      "Додати картки подій у відповідні блоки за часом і днем",
      "Повернути елемент розкладу"
    ],
    "starterParams": "days, events",
    "starterBody": "// Створіть сітку тижневого розкладу",
    "solutionBody": "const grid = document.createElement('div');\n  grid.className = 'schedule-grid';\n  grid.style.display = 'grid';\n  grid.style.gridTemplateColumns = `repeat(${(days || []).length}, 1fr)`;\n  (days || []).forEach(day => {\n    const col = document.createElement('div');\n    col.className = 'day-col';\n    const h = document.createElement('h4');\n    h.textContent = day;\n    col.appendChild(h);\n    const dayEvents = (events || []).filter(e => e.day === day);\n    dayEvents.forEach(ev => {\n      const card = document.createElement('div');\n      card.className = 'event-card';\n      card.textContent = `${ev.time} ${ev.title}`;\n      col.appendChild(card);\n    });\n    grid.appendChild(col);\n  });\n  return grid;",
    "tests": [
      {
        "expr": "(() => { const s = createWeeklyScheduleGrid(['Пн', 'Вт'], [{ day: 'Пн', time: '12:00', title: 'Обід' }]); return [s.children.length, s.querySelector('.event-card').textContent]; })()",
        "expected": [
          2,
          "12:00 Обід"
        ]
      }
    ]
  },
  {
    "id": "16.33",
    "moduleIdx": 16,
    "name": "createTreeTableViewer",
    "title": "DOM Дерева: Ієрархічний список файлів/папок з відступами",
    "level": "Просунутий рівень",
    "goal": "Напишіть функцію createTreeTableViewer(treeNodes), яка приймає ієрархію [{ name: 'src', children: [{ name: 'index.js' }] }] та рендерить відступи (depth * 20px) для дочірніх вузлів.",
    "reqs": [
      "Рекурсивно або ітеративно обійти дерево",
      "Для кожного елемента створити рядок із paddingLeft = `${depth * 20}px`",
      "Позначити папки іконкою 📁, файли 📄",
      "Повернути контейнер <div class='tree-view'>"
    ],
    "starterParams": "treeNodes",
    "starterBody": "// Створіть деревоподібний список",
    "solutionBody": "const wrap = document.createElement('div');\n  wrap.className = 'tree-view';\n  const render = (nodes, depth = 0) => {\n    (nodes || []).forEach(n => {\n      const row = document.createElement('div');\n      row.className = 'tree-row';\n      row.style.paddingLeft = `${depth * 20}px`;\n      const isFolder = Array.isArray(n.children);\n      row.textContent = `${isFolder ? '📁' : '📄'} ${n.name}`;\n      wrap.appendChild(row);\n      if (isFolder) render(n.children, depth + 1);\n    });\n  };\n  render(treeNodes, 0);\n  return wrap;",
    "tests": [
      {
        "expr": "(() => { const t = createTreeTableViewer([{ name: 'app', children: [{ name: 'main.js' }] }]); return [t.children.length, t.children[1].style.paddingLeft]; })()",
        "expected": [
          2,
          "20px"
        ]
      }
    ]
  },
  {
    "id": "16.34",
    "moduleIdx": 16,
    "name": "createBatchActionToolbar",
    "title": "DOM Тулбар: Плаваюча панель групових дій (Batch Actions)",
    "level": "Базовий рівень",
    "goal": "Напишіть функцію createBatchActionToolbar(selectedCount, onAction), яка створює панель дій. Якщо selectedCount === 0, панель має клас 'hidden', якщо > 0 — показує 'Обрано: N' та кнопки дій.",
    "reqs": [
      "Створити <div class='batch-toolbar'>",
      "Якщо selectedCount === 0 — додати клас 'hidden'",
      "Відобразити текст `Обрано: ${selectedCount}`",
      "Клік на кнопку 'Видалити' викликає onAction('delete')",
      "Повернути панель"
    ],
    "starterParams": "selectedCount, onAction",
    "starterBody": "// Створіть панель групових дій",
    "solutionBody": "const bar = document.createElement('div');\n  bar.className = 'batch-toolbar' + (selectedCount === 0 ? ' hidden' : '');\n  const info = document.createElement('span');\n  info.className = 'batch-count';\n  info.textContent = `Обрано: ${selectedCount}`;\n  bar.appendChild(info);\n  const btnDel = document.createElement('button');\n  btnDel.textContent = 'Видалити';\n  btnDel.addEventListener('click', () => {\n    if (typeof onAction === 'function') onAction('delete');\n  });\n  bar.appendChild(btnDel);\n  return bar;",
    "tests": [
      {
        "expr": "(() => { let act = null; const b = createBatchActionToolbar(3, a => act = a); b.querySelector('button').click(); return [b.classList.contains('hidden'), act]; })()",
        "expected": [
          false,
          "delete"
        ]
      }
    ]
  },
  {
    "id": "16.35",
    "moduleIdx": 16,
    "name": "createMatrixPathFinderVisualizer",
    "title": "DOM Алгоритми: Візуалізація шляху на 2D сітці (Path Highlighting)",
    "level": "Середній рівень",
    "goal": "Напишіть функцію createMatrixPathFinderVisualizer(rows, cols, pathCoords), яка створює сітку rows x cols і додає клас 'path-step' до клітинок, координати [r, c] яких є у масиві pathCoords.",
    "reqs": [
      "Створити сітку розміром rows x cols",
      "Для кожної точки з pathCoords знайти клітинку і додати клас 'path-step'",
      "Повернути сітку"
    ],
    "starterParams": "rows, cols, pathCoords",
    "starterBody": "// Візуалізуйте шлях на координатній сітці",
    "solutionBody": "const grid = document.createElement('div');\n  grid.className = 'path-grid';\n  grid.style.display = 'grid';\n  grid.style.gridTemplateColumns = `repeat(${cols}, 20px)`;\n  const pathSet = new Set((pathCoords || []).map(p => `${p[0]}-${p[1]}`));\n  for (let r = 0; r < rows; r++) {\n    for (let c = 0; c < cols; c++) {\n      const cell = document.createElement('div');\n      cell.className = 'grid-cell';\n      if (pathSet.has(`${r}-${c}`)) cell.classList.add('path-step');\n      grid.appendChild(cell);\n    }\n  }\n  return grid;",
    "tests": [
      {
        "expr": "(() => { const g = createMatrixPathFinderVisualizer(3, 3, [[0, 0], [1, 1], [2, 2]]); return g.querySelectorAll('.path-step').length; })()",
        "expected": 3
      }
    ]
  },
  {
    "id": "16.36",
    "moduleIdx": 16,
    "name": "createSpreadsheetFormulaSum",
    "title": "DOM Електронні таблиці: Міні-таблиця з живою формулою суми =SUM(A1..)",
    "level": "Просунутий рівень",
    "goal": "Напишіть функцію createSpreadsheetFormulaSum(initialRows, initialCols), яка створює сітку з інпутами. Внизу розміщено рядок 'SUM', який автоматично перераховує і виводить суму всіх числових значень у клітинках при зміні (input event).",
    "reqs": [
      "Створити сітку інпутів розміром initialRows x initialCols",
      "Створити елемент підсумку <div class='sum-result'>",
      "Підписатися на подію 'input' усіх комірок та рахувати суму parseFloat(cell.value) || 0",
      "Повернути контейнер таблиці"
    ],
    "starterParams": "initialRows, initialCols",
    "starterBody": "// Створіть електронну міні-таблицю з формулою SUM",
    "solutionBody": "const wrap = document.createElement('div');\n  wrap.className = 'spreadsheet-wrap';\n  const grid = document.createElement('div');\n  grid.className = 'sheet-grid';\n  grid.style.display = 'grid';\n  grid.style.gridTemplateColumns = `repeat(${initialCols}, 60px)`;\n  const inputs = [];\n  const sumEl = document.createElement('div');\n  sumEl.className = 'sum-result';\n  sumEl.textContent = 'SUM: 0';\n  const recalc = () => {\n    const total = inputs.reduce((acc, inp) => acc + (parseFloat(inp.value) || 0), 0);\n    sumEl.textContent = `SUM: ${total}`;\n  };\n  for (let r = 0; r < initialRows; r++) {\n    for (let c = 0; c < initialCols; c++) {\n      const inp = document.createElement('input');\n      inp.type = 'number';\n      inp.className = 'sheet-cell';\n      inp.addEventListener('input', recalc);\n      inputs.push(inp);\n      grid.appendChild(inp);\n    }\n  }\n  wrap.appendChild(grid);\n  wrap.appendChild(sumEl);\n  return wrap;",
    "tests": [
      {
        "expr": "(() => { const s = createSpreadsheetFormulaSum(2, 2); const inputs = s.querySelectorAll('input'); inputs[0].value = '10'; inputs[1].value = '25'; inputs[0].dispatchEvent(new Event('input')); return s.querySelector('.sum-result').textContent; })()",
        "expected": "SUM: 35"
      }
    ]
  }
];

export const ENCRYPTED_SOLUTIONS = {
  "1.1": "07d5fe0afc83444363efc01d:4f9347223e0060c053d51d45319a3bed:d6db6cdf6098c9e3871bd3ecd994b449cb9c7cd514010445c76a88ef9f1fd51098a0b1d6b5e9fe13d71a72e4f9bb247b77288670d18c68eecb0919",
  "1.2": "1c0a586e9ca14f180ffd2ada:22514d08da313df9c7b51958a25739ee:6bee917d656783c4cc8f273b9129ea3fe38e24ea580eba1e8e593bcc0a644936822512caf4c435685b1caed41086f17bbd2b099a676f4846c4f7734d8d377462dd33679db5",
  "1.3": "155692ce6544ee3b80c7078a:73d7234975063286529600a76cc888fe:a9727bb7ec28b25a0fcd1ce38e90d148dfcbd48478860c6837860608d76aa61dd94bcc8e48b4561d2aa449a2593fd78cbcf790ad6e6a3cf030efcd",
  "1.4": "9156a88e7f97573a9da49f16:ebae12c015e9ac3a7853ca2580679468:2d85b4330d16c67591a620d6f5dd7dd125f2b129b9c2d9e11eadd067b433f5d6da929ffd1a3bc815df984fdcf57cf2eb22950b",
  "1.5": "ab7f35cae921f05c2236fc00:09ccf92138c2d3a2455715a8a87a7e17:53c04f5e1686af360786e3a6cb53a469e46ba5fff2848c32edd55933cfc90b52319c85605c670781972396b5b04a2d38d8ac1ed7e3551f196bc7b19be9b50738841c8a",
  "1.6": "0b1a3dccebfb602017656394:21709cc63ad1f240bba90a64f7130635:0f6b72854761616e25dbf2e2d9dc5bfa2d4f43b27d19c43a2a3c3769b8ac151ff6f956011dd72cee35251806aa3a312d32c849e877918c5ba9adf8419c112c",
  "1.7": "f120cb8b950be68e9823954a:245cff2083a352c4c06b0501cb1496b5:649543f6b041fcec74536bcf80c6140e36891831a114cd9674a69af63b75f792d4dfbe89b7ca92f02a2a21b7ab9d353587d89886d5d425a3dc",
  "1.8": "732a63257d7269009d4fa45d:11827703aa0105356dd28dc5a7d746e4:ff5892fea10c8d81f10f56bbe4da5654b8f927ad3231e6f631c288e9989aa7efe93e2639f39fb001c722716e5f44ea94f358d4ca8b86acb0dd4ad0fc9ee4e97d8f8ca6c8ae00636e03dc759fe3",
  "1.9": "1e836d65b00b2d307600a718:eafcd300694f5d11d6cc1a304be7ed45:7c092360cf890d9dc7285595c575e9f31838b1567e996db3da6e02efa7e8824841cf5b53c4e5df6d2d36f81a630b7c9f5203febd64e1c98b0796ec4f7c6611b66ecd303bb2453f339d943fa36525449876f23f93945c",
  "1.10": "f3e0c3e76e5107523e89e86a:e78068741007ba7176b81a1b9a6ddb42:15153c0ebe577248202929775afd012bb362ef8005f24146ba939ce578429838ea7ee586b70a1f0a2aa18d8a7a2a1045e20e7b74ecbd39d02e",
  "2.1": "349f577668d0686b586f6a14:65303ff82b23fe78776407718cef542b:06df0e2a38ca2b06fff59c5b1ef59071339486470c0fb96511c7fe57945d14c895acc2a822afafdc49974eb9f72447e033f1956a",
  "2.2": "1de06bad936c0bba1b592276:fb3de19cdc3c5fd74be439619edd82ec:aa40a71c167a31d7a060b7073f5d692dfbba9aa2d4cc10aaaa08b70a10f6cadb4fc9d38e24056012c3e21f97206d217675b43fda67de0d105f0b5485fcf957b6",
  "2.3": "e52fb708bed80ed94ae07f2d:29ce7430e20fcd2183a8483bf2cbf939:051500e67e269ee730ca3e165eb50f78f49c34a1646b2331fe257f0ccd018419fb93fd2ebbf0514bc860041fd6eba33b7904c39d9454397d12499a443e499d1343d84d68537980452253",
  "2.4": "9e4c383644f7015aaf6218c9:7c9e9633d059868fba4d86852c9a27f4:87f8824a2bbed2ce9911e40eb4e16e010dddb4c5fb39e9532e5e1790e3af45b6a5e1c694bc144c8c2d74426aab5e5e86e920bce1a4563b",
  "2.5": "e7947edb01a92cd928ac7f99:88734c5ac15bf944a261e019f35ec2f0:efd278235891e00d6115725407c48a915f289bd022804719a3f7d7fcf5edf359f39bbe82505223711ea116c7de0b3230a8ccea292333304b03b519c4a9",
  "2.6": "19ebc851b5fa54879e2aace2:4088ddfd4dc77657c09e8ef2f5da9bb6:2921c17e11ce6c1c723939c03e8d06ff139d76c61b385b3c8dbb18c377167ff468e24b1e3f6111c6a46a0161ea90b203106a6beed8b88435eaa76f2da275b4953ac2ac47ebbef368d8a90349",
  "2.7": "1020469f14ff402cd76f6930:868a79c1bf8c3b3e1ba5995f7752232e:97d272a5cbd860952b87c47762cb3e33aa09118259967ee24bfb4d0749f34692bb83ca57f25c43a8e4456615ca5eec13afa92dfb92",
  "2.8": "114d2697bd8bc078795b0732:5d5532c8b36ec97f770acef5bc2eea4a:dfcbb62ff69442ce93a6855a58e7731af66ec9256bcd7f04f006fb8a6739766d48bf87ced3149afc3f1126d5f3c12a68ec49721242829c0f83903e2e",
  "2.9": "8261365f7fb75ba4067fff15:cc8dfe41ca7060ddee60a4386a25d6ae:cb01f662b195e4adfc32f1e1750797cdaca6176f2f4e68bf8d31009d960c1e420bafe420d96c7b3ed8eaa4540a82fce1bfc4b2896cd473ca4c4bd6e7",
  "2.10": "0bf30edff5d4cc4c160e9536:ab0e21e6ebafcec07b2eed5fac5e06a4:5c3655c17a618d480bf5d0760255ce18fbb98a47a2019ab42265994e278527f513c443ecdc3f6c18122b4aa6dcf879217d2ab0ed748480a2cf9a21cf069a66",
  "3.1": "5e95a58b041b17394fe7daea:d4ce10174fa7ce87f6ca2e385e21df7f:1ac1e314d1617381e38c902a8429127e08826d3c3e343888e5ddf7d7c9c61abd2ac0e3e9ad31182b6a25c38b8466d403173ee3eac28722e3e404",
  "3.2": "33a94f646772018018526e9d:6f5ead18b747a4a69cf80de8e42c91d6:5fe5ac953950ee69539d9a8d7e3757e78b8b6d73ed6369b33e439ac238dadb6fb4c293006e3fb1820939dbf39a2ca6598cb3801294",
  "3.3": "48089242f198e4de70335e09:5f30dea634e00386205775e32c6a8b2e:56f974b94dfa85d9025ff334930284d0088b9ddf63d24d04cfb57774c445034f72cdd7ee05e1b0a546651a854a5d4846d198b881146cf5fd44a300f99711fe0ea8",
  "3.4": "fef5cf380d39bc3d3d238ff0:f58ab4ada8132d3cf50dee79739204e8:33c242f53a99e7d93d017c03ef69ffe1f66259dbbedc19ac3d246740d79bcda67a6c2b3b438456d137586602f32d0b668630c4a91be9",
  "3.5": "3057bbdcc81c7d1c42ea4312:a89cec4e72d83b51c6cec4958d3c46e8:73d087e1c32c0dee7673880f81061685563ebe22a7f49e4805a183eebb1f375f7212e38e8a8c0f647bcca35e0b024bd13dc521477d",
  "3.6": "1e22b74e4e67dde466a2fc88:856d82b6035f0c208bb080d27fce5bcd:e6f25ded7ae458c8d64dd4faf3dc4c7bcfa2b671f565f42e30ff780a1d7d683fd7436e3015914e214bbf73c8b0065d6a371f28b307c119a7d0ea79f96b",
  "3.7": "e20c8271ec1f8d47431517c5:39a7d6be778bd1c63efe8b2a75a4cfe8:e1e84f058c82febca756ec25c7fcd2c2aab9df60f2c1371220d52c1d907c0ef89368a5f4c6d64a6f7607a07e3347413221a2885ee3",
  "3.8": "201a807bdca37826652aa2ce:c11c79c3dc436a37abd235622b681640:b5ee1ca55dc1b0a635dd01f2a1255cac93c69ebd9056ef93273b7c395aa2a0b27fccee9aa830cc96c6b0942d07e0d736118d2f470226bb0a",
  "3.9": "0087891261ff17f3002b6270:6d0394f297798cfba40235b41cbebec7:0d572e59240767a1adf266f3fb2775ed2b4a4bcd58977338197923f97e6533205288cef049f47db83682cf23cc1a427978b3b1060387b014",
  "3.10": "94c45e1097799d68d85834f3:b6888590a3dd67af685cf48feb717b00:d78c3e4518adbce1b3bb651ef25133c93aa45405f3d1c0ed02accb4b4bdf96b43dfc3ff918bc24cdda3af9fbfa34cba931ece7c676",
  "4.1": "51a89cab31542d432f6c4f7d:250da6512f9d12af4c11e02bc028174c:05fd5442e798eb57baee20f4149878c76ed575e02f521ee9a872decb18e0c47b206da4e778d50b6f50b5b4cb9f8e45b0559b414abdba",
  "4.2": "99cd7224582ede4367059fb7:d8a549f728024327226dc60c5c1f7931:f4542d81cb0ea8084daacef211f2a2af55fce0dc34021a016d5d386297924d849dad3a94fe3172a87ffd1610e4025d7bc164320208b9ad71",
  "4.3": "80e8df837531327faa4998f7:5e2ca0789aafc7c519abd06883ae9c4d:d3a188a6db28720453bd5b87e552c3f71c798a80de405a448042e4a49f5125d6a866821df6e50323a758a89218fb15b057c60a2d0a879634560658dc90b2af",
  "4.4": "73999553a63247c20e5e732d:228f423672cb934394c9d88f632b9a2e:4f75e4565952f2638ef173cd2ea4c3f725dbc4c5629ece7a487db9138ad78662378ddac6a26eec26f05cbb8ff179afcfedafe8caee9b338f39456774e9f1ac",
  "4.5": "bd704704d3ad1e270f6251cc:371655fca1794309d7e3c470f565db60:e4cf5cad3376a3a858557be36b75e83e79cca0d608098497b6aeadd7a87ac06c7fb58540faf3e5e89abf6ccc67235d7b6184f7af900d01e8eec3c67387c9be7618da42",
  "4.6": "00d499f14bf7b38e131b25c3:546529bb75331e0289cfce1cc5bbcb9f:d7f4061a657005ac781848d0630301381b088db89da1b7bc36dc6795c70218dd26eb37fce13e258b4d06c32d99a948639e3f75d6f0a049a2998eb7a7323f43",
  "4.7": "fb5c6e548b0a0d861f539e76:a659578c9ed1b81ddcdfff62e5be465a:2d4d980f7628bedc5950be1e160424e515f43a4705c13d6929b20ad040c10704ef89277904fba479a26c30e8833073a282762a7cc5b3ed66e08db96df3e6",
  "4.8": "cdc5840243713756f7f296e6:a49daf91ab2dae35f7771f588e4f909a:127d58d7a5bc66589767dfc6df3e75892d47fded85d1c45bc71fb5f3bc4b6a62cbcf27a8f94103589951f3bfd995e95d17fd7b09c8f26bea343947bdef15ed29ae7394db6696",
  "4.9": "bb31d46ebeb8346774decd0b:6399a5ec80177c4cc65ea7661b1a8cb8:8874ea972fb9b73be45782605e2a878364e30164d04296297b6422bcfd95aa2aa2163d0852234a0b303147643ee25d26228f6dd8b7f6d87db56707caf7888ad5bc76cbc88eb3ddda373028864a9c",
  "4.10": "2b1ba4f0f0dc4ba6ed704d0e:f95542554d76ddad17e1b8e2de71c588:7501de518b3605951a0968de5fae53da51d45921652383b5cc40c59c365f749175fde08c4d82817b24cf23fc10084882e4158fe68886e05206fa932ef8693b017d25d0d746",
  "4.11": "6ff078122b5c673d896d16de:2d7c301741e88924bd2c8faad948acb2:7d9f9044f0581f01d42be9ac62cbdc55de1afffb8e7ee097f9979a50ac558630cbbe7cc2df6f33f84c09a1585298a7d41cd9376ec3650d66",
  "4.12": "33455c310154862b65fc2a6d:c9bd52644a2b98541a712389d58a842f:fb522fe9072e2cb053cf8a40e3fb76699e9e95c0e0ffb159b6bff63b08c1d0fb18db0ee63f90830fab85975212e0a8df744d4c0827c60f",
  "5.1": "7bf3c6b7bb53249bd11bfbc8:dba4e5b770bd05d5c461c4c934ea7081:1d18f683a3ee4a96eae3ff8c473117e7982e832b07c560b5deb479c9cf0f32c7e43d48eb057b8e844ad18f9b6bff188b94fe301a7b50ad3b6e69c9ea516b4e17e37da23c352ddf0b7a497962fa34",
  "5.2": "4b1ab9e078242487ffe743bb:90b0f455ca50fba9125b6054b0f3e311:717c583522194a741188b865621058d38ce68b34292f7206f132fcf1e220fe0140b36bca24b31457ee2ee6eb0341bd803af68503322671e05a65",
  "5.3": "5ddbd482733f5ab1e55e63bc:7135232a430ec3c0886d76dafa2bed47:9df2c88296a651ed1de3d7832ae94d83c92304f715466b41cec5668d5aba7b7de420034f248449340bb9180678953870445c91b62554aaf37dc79583636367c44f18d9103264cebf0cbca740",
  "5.4": "245cf98d95d9f2d88ec313e3:8fcf04d5bb5eee9409176e4c1a93d2ab:4f9377134be24aeea303bcbff4556c8cb78f948e1ad05033ff3690935b17515e6313731dfe3689e4353a8ada98c945e138ff266f4d001d9fb58624b0a45dc62787db1b321e42815ee236",
  "5.5": "c2a85bec24c8deccfa44b8f7:070052a41c2fe5a2cb5b9e278618c788:073f05806f62cd7909303c0825b8ef4d796970a32286accf14d6a17dbffd1a631581710d2fc867d5cb006823e5e5c50139b7e31fc306e078c4128729b4e1baf6b90664cfc69687f0301a3a5eb7cb9202f0c70325265ad1f673609578",
  "5.6": "9ccb66874bb1020f6d2f20d1:a0a3a7d200d4f19afde152fee8f13108:d45614d0c75309c5eff63fd11217996a5842aa76398b7d0ec67c0b26f6494000c5a8c52f26f23c70a79afca94879d62acc046a9bd130031610467a0425",
  "5.7": "92ab3e1ae1546edc5e86d10a:70848119f5eb6a1f83519f47218c09e8:c9960e0dc0a56e3d4962a5cc209790ee55803608a84b12b67e4f056c2a0dbab0c648be0fae202931f7d7b9dc0b7f02b620",
  "5.8": "de0b82420e4fdeb0697e4fda:e6576e76e9952d9ac7e4d49554275b9b:27335088e19ee6e6cead47a2105eeab7f79a09ac4492db9aee219df27d395575e565164405310d7f4452e0d2eeadf50753bf6a2c8cdcba8e3d32d848bb3ac5398396c0c3",
  "5.9": "6109ac813110f6d44420c133:0017e995a339cc4ca8c159e78d34f690:c5a73162f8889b3e2999c79affb3918ff7b295ad08cdbf1f0fbce9a5a3499c6b06ccd6e524b930116229d631f986ff3ab3c160bd3f708fd24187daff",
  "5.10": "228ba0ef2d7504591e2140fb:7fd913eb6cfb1d63efcf75de52e03e54:4ba08a5d5ce4f75d57bee118fe843a42597c9080df0d98f42ecf477128b50c990013db3987708ee1f97dd383594bfe7ea0daf1215577e72b82507dfac9d8dcd4baea211cf75bc32f2417313c08",
  "5.11": "750cd1882baa0984f523388a:903ff169656eebadc57f2dd86979817a:ece04345c70010d7a0440a2ed07e61f222c19cdec3d26bc0b1591613ceaf5b45066d983d5b4449ff1d969eeef72f682f34b8ddeef4536ed169faebf439e7bc7be732bb2cd9f6fb122d",
  "5.12": "89ec7ec4f84a310ef60da741:e9f6c0b9845fe0f6fe60d5f3c76897db:c5dd29d3ea4988c938dfb6b1ec7fb1e43c4c68bd39aa41f09a5049447cd7bd6ba788526d0f4c3f267d053a3f34eda63eb813",
  "6.1": "f7b5810a35d6ebec982265fe:5af984550e7b9c0d2ebbe3020ec1acc0:075557e29d7f61ac14f2ab5915275727c1af96432c1c5bbbcbe235c493f29cf1d27be293227e14d52c3852b0fd9b4c56e130988a8db700dde1ac23b094794a9caf9dda53695d3bba",
  "6.2": "96affa8acb70188dfeb5378e:6ec0c8b1a4b9035c0caf2f9bce0e2199:417ea91ee63637d094420ca4b9f9796dc07d6e85a7aec718787de28f323535b15fd51614c9b20d94beba94d525ba933239e19f3542d4bcd2c914a6d05148",
  "6.3": "3e34ea0615bbbae470b93371:3cbd8dd427e3e2d9f623aea2b2ec9d2b:05d53410b4b0ed4182af84e157ad71b6d9eda885430d788a9818e85d2a771f713dfe7706614672d10baa65534d3ae1a1e6dda256bd67c12e5a97d89531b257b5fc6308268a",
  "6.4": "1e14731eab7db07570d79d61:84c97e71104ba1934fd9b529edfe40c6:15cf6d27d23734616e22660928e99451c9069044e2d027049bd20ad52cbcd557a740d87a801842e5d715bc1ba75cd1173147ee29df7e",
  "6.5": "8d450c451e89975de45b0889:68ccbe29f3fe969091a942a18b1c7aeb:0fdc3be68236882624a899dceb8bf48c5725d507a588e970585dafba3afd768c35a3726323db46d3284221c152cf72b0cbd1edb777",
  "6.6": "836be5fd4b4c05e3b3ffd383:22a12ae6c7b05ca6b8273b68506b59f4:5918d8c23971ed6a9b938fb76c94ad7b48cfa4b468103d242e209ec67208f247b3b625bc6ec8cbffd85df026983d4a9819a7b5cf58",
  "6.7": "1cd513d852a632d7effce401:1830af5efadcfb6ccd0a93c9bc351f6e:0f8dc8a14c5325352231423c5fa77c05e752c79d430cc165d1e4d6825f0f5ac2c2da0978c78bdf96daa2466182cd213098bd1c1bc3df2f4a5f6e",
  "6.8": "229f554b18c2445941d1537d:3e8bb0f6bbcac71078baa3b9c4068170:810d75124a0f1b29c3a58614d65186f1023354f31e353b9438aaddc1b7897088f786976e5035014a8c4adc91b8a533bde7ff3a680deea2",
  "6.9": "b7f8751dcee9cde032ff4676:17295914685b8a3115065eb0c5acbce5:7f9123a8c86d2734d4994e97447b938d91d0ab1e99f6cf91b86efeef293fc4251f99129ed94e14005762ba724d570331fa18f5aede41c7c1fd8acf3b7ebd425997",
  "6.10": "2eb3b98b7a5feaf114e60ecd:442eb34e159154bd5adc55f48635a277:39aaab16803c325af1e4879fdd5f06371dda98dd4d1bc02b014adbbd4e0ab54cd8c08d8f57bcaa93e0ffc7250248513682",
  "6.11": "22e9b57ce1167ca1be2a8cd6:d512e17dbce447e2405dfd84cdcf42bb:7fa468e798a086983571da85fb23a252f2857a4838631be7155ad3190845ed3d15d28e9fdcdc2d31368e7b457e86f358ba9f05125f",
  "6.12": "1908f457c959827839540319:1ca2ee1c93a122cc3b1525d2a7aad0ba:7e77c3703f35d60270aa49b60240ad3a992a43b6783419e0f75a03bbe3a21126ab7b700b32f1702be8dfaf44296f57acaabcd3cfcb04a41d864d6f8b05",
  "7.1": "cba8b92f164078ae8eec88a1:7774340db88c5fb569141dc5cc367400:70b2e8215bd94a5a6b0336f09d0fa9cbf12fb06947357fd1028f0485a62c43ac47d9ac203180b1a76e8fb0918c4500cf37c574f7f27b248d2fef",
  "7.2": "2baa8349650221ccb4b4f4b2:8b1d069e8bc6ae6b28453f9b7d5a2a1d:9456e07ab68134abe28fe82540b825a7c19642b29150876412429b5df79ca0d119fa81b2ce4b48cd5da1cead659d12011a14b6a779abf1b76d15a7f752caa7fb45",
  "7.3": "caf65ea301aaace5c648ef44:e18c3aeb71137a7df2a57f266e957f64:02af2497769556116a59c1942082583e7bdd15da1d49ad819aef1312d072b93902b1338b579e1df46c276abf76c5131d45",
  "8.1": "de81e5b15e72c31d35cd8072:d1fa0a8a5ea573bfb91a95df0c6bf668:452d4d906b659aebb2652562a7d1c642b2d02086e8d52a72575507ff15c9a6234cf317a38b3c4547a0d10679403267a4a8051559b6f8",
  "8.2": "3385b937292686ca8c8ae675:34bed11b1d5b46717d91d26659a87f6b:020b9d7c54c18428e12aeee09fa18b581c853fc498f9861bf629fea74263d93aa2398e74b92721071d31d93543eed44b19e2679ff5c76496f3a1cb203c61f76b36affebb0c5ce35c5e02faeb2d99044e07ab1ecffd89",
  "8.3": "5b92e641dc01a77b279ed28f:05a0fbf6f9ac3901b7660bdf3bc25dbd:9609e2295d25eb20988d48a9a30a18aad1e582b1e1117ca2bbfb73ae5d5fc1ef268bdc68765e081f901671005ae96f5cfe764452002d3e4e",
  "8.4": "e99e1f607f98d9be77a55df4:f2caf19336130bde50ad02b4d3860ef6:7644535afc42344b96f1d17dcc5c9ad0ef9ea43e8253b834697975ab6deda6c1a59042784bf4d2ac3ab6d4f0864f0f3e3162870a3e7040b3c732fb3f",
  "9.1": "ae115ad934e25b4eca37f4f0:b6d856e58498e64562bb14e8ce6b9da5:08656a94ffea5265e50082785b66e1e90730e233378954c08f9e48b746305683ff6dc75d0e48f453df8b7d4df57522d4be0a9efe953f63da76",
  "9.2": "0b0a7f60e1de3cdf80c519b3:a602b5de673ae42d1dfcdb0977be8163:4d910edb3fd347c7eed6a7a1a4fe3a54a4758f89cbe328defc34689511efe2c9800b8010c5806bed17670aa7d6ed4e933a70c2eacf9736d5fde49428f3f5ead2566d6da30f36a1aa363725cb2e685ed23aa079b9834c77546d06",
  "9.3": "9d7418f9aa1d49b0918f66f7:b5f41493e048613b0241aa54c67fc9cd:86f794f021c87680eddb07629b11efba583093db9886ce90fd67d665bcc9fcede11fcd37f7b5dc89cfd94e9782f6fdbf04d91a4e290c10303cbc7a60d9d685564cb6ce90c9",
  "9.4": "e78626e43f9c9bda1852be0e:9b8ae41a8b1350aa946cd49e22bc3c4f:2643075a358aa4f0544929caebdb26dfafefa08190840104d52e982c7f2b5494d2b46fe89b9d6cd64d4bfffc81ba353d9bf75cb90e65bca7b26a204a20bdd70f3c2cfc236d6e41b48d9a09c42d9c1a304b756747f3",
  "10.1": "9cfa8266c555fee6f5c73848:e7a91621bc86dc59f5589b328d183400:0f9870c5715ffd558c2c282970bc38230fb7513daf79c747aa89fba0354448ac88621ddac46947f6e53508a7ab2df4c28c7a6a74d26242b9aa7377b25e462486bbaaf90b",
  "10.2": "00b24bd5c725f9afa5c3a1cb:26dcd179cb0c18e1dccd7f3cffe1e6c0:04c7f17774a15bd5a22fcf1815d45170b025b6594d65aeb2e2690c97b969ead4681e8d107993a9749e33f6d6d8cb0a6aef0816723194c67f8518c0",
  "10.3": "e2d012638bbdceb47d1359b0:039163503983eb7d3081d958a0e4f57e:72a8573a467405327bd8befcbd3f4cc143be9115333f898202e6f6a4e60db39fa4ab20af73395ce9299076b94d7611ef068e1d7f89ba777d1c3608c73e5e92e674c3a55a1dfdfed3c24982c122",
  "11.1": "54f2f8070b95a285f5df9ec2:68eaef803855debd792cae932671b807:4c7980e0330d46705938237b8451351e3980ee280a8bf94ae7d94d51ab08e08f5bc28bca3706803a8c75d25fae46ab86805c1e2d1e443ea9b4480c5de40897f9",
  "11.2": "578e16913a43555bad2b2f7e:9655d559f4bd1e69d4707a1842cfa34c:4b9e2890ab02e4a35c3dd2d67ad3d0f6aed0732342cd9044f40b6cc72d87357742e3985caefa983f85a141e69181485935a51b680ef162311932",
  "11.3": "d2cf4be0482e1896a60e353c:2b20dc3ad539290c9eff9e8452c22b75:8b8013362561635615c71de9613516d831b6cd1c3d5c8e6e41577e9764e692f3d05ba429d517f1d1926959dc4912458272663d5c60dc222be203cb38d7273c4d6cd9e3ba1c4c5a04ac215d530765847c291d9b8a6ad7",
  "11.4": "1bcdb61a682617e50bfb8df4:65e429694e382f11ce5553794ad0c296:72393dccb6d217a130b56bfea4958be22c09ee25b64090eb5a6ba69d01f5e37033ca92389ce65c1bc74a7036286039e24e83e7e199c533dcf6",
  "12.1": "227c429845a8b0225755ff0e:c4c328e71a4bdc5ac01f01163f852411:bb2362080ef55e81b330e72b88cccf0a94a9746a90757dc680513c9cedc99187b58dca09e9563ddb44f6b1a17b9a0c48321aeb7cef5a61bc201a4b18bc9d560ab97528ec3b1fd1",
  "12.2": "fe3d865111c774805ea1a24b:f448f6509958f84c0b65b6b6032cef02:39349dbda44e154d771e8039a428bffd3d33761b28e1b7fd5b32eb9c208f2996f9d339eec72572a598382a5c1941a2f547521709537743033538ab4d68e90fe9fe2db73dc16c",
  "12.3": "8d4bed23d92746d9b39a76ca:69ae2701858249accc7a5629615ead43:3f77e99cc7e9b81e8f121500e0071e4099d3efbef4c46ee2e4c3a2f65f76928a33f9667b1de93fa1caaab83370612a6945100195e76d8a1b242359",
  "12.4": "6fc28053e85b539fb78fde67:c3c49cd7c59e27b6ba12340c0f6241b6:5fd4981726fe8ba749e9fc6bcf41f07fcfb452f9475f75b0b9b0df773e827f17fc68e8da34b85d4be32c882bbb915c0bd76f0b6f55638c15f576cf",
  "13.1": "00261b686d4f7b3928f63f8d:752aeb808c10cfa4af4c078f27030447:5e3ee8db8360ca4680c9182db9f4466d4756f3c946995ddbbe37aecf7d368e1443eac8d8253203f6b251b9df77f00d81040eadf35ffa0aa5621d4df96799ae",
  "13.2": "d934949e75d312dbbbf8a07b:484a164300405e3369781ff1ac4a7bda:0798a08ce84059be7aa1b004a62878735c3ccd2dd5339dd49fc26e40a7d4dea48b60f01a52d6de6f8fb0c7c4060e3c2285085aee578e87ab1239c42e",
  "13.3": "79c9ad6bfa8076802cc067f9:85c2a84aad5a49c353366c97b56f9c67:df5353e85cc18b0c6f39804392645a5da2b7d9f93605ca95ca424e43220ba8e6c36255b7fb7cc7846b81913563852f08acd25ff13f6e07b81f23809be24be4",
  "14.1": "ee638773bcbfde9bf8d496b0:e611258a9eda7c2aab3d40a30f504fc4:141656a23e311306c2e99faca599eb1f5782bdab9b0c164e881686cdc0f86a27c77b83cb917a859f6d64872caf2837daa081e5d1065d544405e848fbdf3e282481877cf61ce9a44a873bf03f012d",
  "14.2": "787ebcbda8f1c05d43f2259d:e09c05167d9202abcef8925b03363fbd:4c803e54df326bfeb473521e9d59dae9c56bb89f4c4a20ea9cc7705f0faa5910636d1315f0ed53e957040a2e49c048933efb95b6de3c540ccc556fa55f5de17e06afcbeb07d533a6bc97b6b44957515f7964ad4ce9e1ba3c880ecc65c66bb01366ee5e",
  "14.3": "1f1070f874a969121563937a:5350758b0952f4505cb02bffdb661511:1eb0b2fb22415fc09c9af0e5dd34dcac8b4c9f57024804e178c7fdcbb37fb1eff6f105bd6657cd609c8f1e3633f37b579387499c556e3addb4829787226210f1d047c9b98866be",
  "15.1": "a9814f4ab2519689de140c23:fbecbfd4ade80594b1b4340223a2ed7e:0bf9bed46d7174fb0ef3fd4760d21d8c78871e5b36d9fd44db7bd4b7aef72dd320d2de0c83937dc71349439c0ab20aba927a7ba1081a3e863b4946db2b9619870bea1647dc95d54971a3781b784a14e08422ee9711f2c96088adb926db1cd652955f81f51f7c6aa5c609376da3f6a696a55d743ba09c9efb54709476cf5a29c31e79101f3c4629b71a9c168d0a1f1bb6791409759bc8b1cedcbd177c334762b634fb832ecade2691abaf428d8b74cab6bc34b2a085f3756092ee37027d968543ee5c9e03d239ac64cb433f7f48ba9c532f1b1a5ce9c4a98337ac21fb8aaaf05da8470f61516ee04879f41f",
  "15.2": "350cff0cacb7c8794d8e100f:3131dbc735ef6ef41fc7c5f651cc994b:62619d42c6c6d8985d62adfb1d6700ac1c138ddabd732f7d46b8f34108ed99c1d5e2a053ed12b4cee08576b459495200fa8f3b13c342191f9cd7b95ecaa89fbd163955fd5442402cf07b7fbf7d500f4d62c659ef2e4b2edc6b741b529be05d2ff6f7b82cc700edf614bfeef125ee2a612ce87bfcf4983b7db262cee7947b6a0ae19edff9a578844a88bde3e491dfd9804e470b19712ff7c370dc50c9badbef4ae46416b6fb78030faacecf0b8436ca6b05c5e944f39a05d79b492f11d720494f69db47fbc0c8b87503c209669de1d4a594205f249791bf7499d709ef53d52995b38a66c47841753ce5edba4d5fbd1c949755be3a98bf674f00f038669e395707d6adf728c0a1b8053fba3d30af9c3318c0098d1065c5596f36a656bbf79c4b36e2ed78abe067d9287e2903fd6b1d3960b7711f",
  "15.3": "956d9036a4d5a8d7098b1906:2839ea002ceb35d81fd945ef0f0554b2:444187f2377cd49d986a49498949764ce2eca98a629524f89fcdbb5b653a367362ebe16edfc4fc510671b0fa6b7bb38fd8b6c399ec2ac5d7890a17b8314f1344bf1217d2cff522922a6a850a3f4858325eb27ea63beed12a003a69c58675994ee845e34b28f2f8143f7fe517b8bdca656dae7f38888e18e21d593c8efa48c4967b79b31d4a8b73a1b37b418bf86cf86d290e89611b83b274ba06df73f66b9d16f8f5aa1ef21e2d807d11b46ca6893e34a0492060c123f529cd970f1565e1bc9830d2758076a2cd7aa40f1ad8bc97d21e9592c2d0ba36341fd13034a27c6544b592bb9b59eaf7a55a79df4778394dc1c0d2d79480bc1be744e0c04ea8357df434e10a65b1bcf3c6dd728ac3467993216bb6098826b889acc23e70c5eb7ca03d9d497f226a01cb2fce57e9acfc7eb8135c81ab195c5ac53505e152a3e03698426d003958a1c90ea745347a2dd3f636f7baefac8497f375fddc1979ec826a9212293698d405c8b70a67305f7c8e75a190a2f50ad5168d4fd881dec3e6672c685ff793ae291356bfba8283bbe0a059293e70be9c420f2bedd6c7d50e81926ad7ef09477bcca53f312e530856ac75620403b788740dfcc9965c3f55344fc144db989a4c1bc0e2e65dc9b200aac6adeb5720e7f89f076d70b3535f2ab0211acae79b74e25813327c99ebe2fb59bfdf9accd70ed7eaf6d1f2caa2fada6eaeaa5c948e7a4efc9d40b4a98133eae47c40d82e9e3e85fa1c58ffa401e88846b7d002e87b439efaa9e57ffbf3123da879f11dea700e0bc14931bb0e41c54777a9057faa11ad9e1a6498c79edb9e565e5a425a77d44d2505b2f1747fc9c5af77db4968989e308b1189ce54ea623781159044a35004319f",
  "15.4": "9e85f7e76deb9b3a5ba65d5b:d233d9f467b7a91bf1916227d57190c4:9e1ba8e06b5ea81e02380f1b06b46b6aa88f2395fb430bfde085c92db268eac010e4e658d28f1e3c758e920f032099f2a5a03eea201c4db97fcfb77ca31122fc3e06f7933c5619ce5aa19ced78d38cd75bec5bbf0ffa7fce6c7199c9b296bb0dd140ee212f5ac57425a502410c2903f36dd34e6cda0a5c068583a8913afbab26a386f21f1b7386a556352de702910ecd72bfb354b8c8a2045eafbafa8c0dc4bfef564b0c828436579d901f4bd878ce45f4649e8f6b174e47239717bb1e95288d100d70f9b939d2f2ac3a79e8f114482b0820627650383a16d48bd4b31426476f0980acfe09c2f204d4d407555a0f1b102357f02e99dff9d66338b894adf3e7ac7feb0fb86bf2dd6f356b3fbbcd904998df7bd23cb90029a3cda65043f053667499c11bc8c261d3f40ff8c5273d30a11f5e4a438b0cb848cf1a9a16d3d8ee80d27fb91a4209bf33aae0fa247a0438e0af9364e30cdefaa9f616c9eac86caabac0b56fdeba862dfdb53d166f15768bedaadcc5addcb19113ff46457a541980095281eea43a5f6adb6af077e0ddd2d7f9de20675fa2248f935744dbba08f41cdbcbb65da191027d2f00bf05536dc64c018ea34408a918efa352b4d6a245c3dbe69a1ec4101c0fb54fa39aaa770dda70b40a7fa3ce62363be3ed709ad02f104193a1a27f8a158e4a0df1afcacca3e0b9c23239c26f4b70eb94272298df2e022e7ecc03161a6cd8622ab0d78ebcc5197eef36b4ec8719a7a9d793e8b7f978a68e5075b7ff47de63f85e4557900709efab21a6a97cfe11ae86638b554f0b858afa8b574bf19b493734e045",
  "15.5": "4e7218a5da676808e16e650b:acebd512f27e9782f7b186190fe64841:a6dfe750dc3f3050617c7864d172294f71aaefc52153190aaf7015eb9ecc8b7d7712f1c112880d530fc7280abce0e5b3122d7fcc529821a913d896477bd238dddcf8cc4c4d4e2d877a4059552b8d2c3256faab159ec78e0b7da0ef9cd470701bbb14c3b33d79f176b03f3b8b537789c10f9a6e0ea2161cd9b849b8a25bc421c2abe352b6717aff544bb14255505c5a164779d2b2690c713eccbfed4768d8c84ef7b4cb676fc954808a8922cbcf6ee7f42e5d158d12d71b667289d6300184d30845c4b0b8761b0a73941837f9b8a8730c00323e2b6f1b8e166d8cc754fc343600715c6659c83fd4e2c5ad8d86da6a57cf415b0f309d4fd53b0c87cd371faf7a19b6a5e6956f06492d43294f6334efcedb4a50f8f998b311d691625618c014be11a00005f64f5f609cd343488017bd45f719de33207128ec592e908bbd5ca21a7a13f10b31894269d9b33e5853c48f1c2cdecb27c360174108a98899bef0730b4d9baa2c4ae95a9a75dc3be8100da5a127e050e7322943898360996f2e9934678595bf7bb32aedcee62515fa9d0107d56784890500a14e7ae2737a6b8b9d8a1bc4d47d4ab78439833320027fc4d8390a45519b355235e8f95d50722212c74dd56e55f176b71b128e2a81b5846ef06a46e42cbf9d4c50922be00de7c1d038280d3245d2e1a429c95bd7985639225eb985ee994188125ef73af6d601cae6c4447ade8d080d14ef462363d35776c5a008ef16863fe129824c563d8430874653211d481c63490848337d8d92f21b13ddc7317689db867e55d4a9920dfc69904fd5721d145c71c748794edfea61fa890bf252f7df4268fc664ea899fb72d29df83b7e3afcd1f37d6090",
  "15.6": "b00d9dc56e2a386fbe1b36cc:c897ea3c2d565e754b2f87b3c3108e7b:b1d88211e341946d861dec06790d64750a4cc0a6ae57cab3d29b73f1a09122a877fb2cf66c0b62faf6d4e820a88526b9ae85db54c156e0c2eee04f0c1b15da70b2c54469f3c85aecd892085ace628202a717be9e20d41b7319016a462e7fccf4eb2f1706597b380de13b17e5fa49707734de062d29f1dcd514642a3a1a7fd577bd2e302b01ccc4dfdf4dc0176a0bac5d7468b8d4efd25db7b8cf9e91754c6d3a12b79273c046f40a1a5c622742bb90db84da61e31c567f7657cf50a05a86a740ebdab999235fec94f06cf6952d988855b515188bd52d3786084e643a25b2f6884ae284dcadbcaa5d5c00fee0957898a85a66a66e3a4ab272a53340797192e438bfbae01d040b0bf1cfa15984677196fd080fd7f0299a6b665abff57898cbe1a782f850d1ed24f74f5d0d6329b196a97910b12e94ecc557bb6d36a8b4875828a61a46588c52bf6a6220c24093e3f0f371070fa5faa0ba63f1f52f2dfb6f3a1a65ca00cae54597ac28f92fc9e780d185cf350cb5b5f61f639eedce0351c429f09373fbe06e10f5d07c898c811faf4a6fde9d0d5a8ff9c23608c2169fd1efe5ca9154e8d4e15331fd6918935c4295cae65c2f5a3b80e249f4a6a63d5fba96529de8b167c1a126cce645015367b0248cc4df51a0ea42907af4557f18abe45d7e52f43cce2eaaa127063d512832c651eb13149d8c151d069613a994ba15cf67bec4ea9f210523651a8c1a8d9496aae8be45c6b94f634a64060ec84294792649449155c76886f5d83ce268b31c6daea9dc0f08fe17ab4ea961669d6d17bffa99d290f377969d6dfdad0b215418389a03f513d431af2182e440d2734adc78eea1863c9fd032da286d8e3992320a4e1075afad0b6ee155d631b5f2076233f45b62ea36d132b2bbbf00f35ed66f57ded59e76e30a2e685e50dbbc779152cab422f94a4cd1",
  "15.7": "2d914060008a7b03a85ca004:53e3ba152948ea051d9480752353fc51:30e9b0cd87b1855d89229e03c1f29567781096cb2ab2ea75b5114077380feaa54eb20e1e8697680fb9bc0ee21fe7053e02ae16f7965a3364f142c720d8b70275a0a07e8ead9e93967d2abb0e05b73fe16b24a3fd43df250a8f7b020c61b4653bb0ad23c548a7a3ca9659ab94b9d2b9cf5deec184b0269517c9959f4f7055788cafa6ab720f980005f02958838ed343162cb4a796cb465e3f87ec1ed23368fadc95f07633f984150b33c6b9d76d47512dbf1a1cff87ab994f9acb9c57bb2bad7833473d884be64dc2ea624024c3fef7d56c848961e2a1425fff2e0bdd010eac596455018115695a08f121cf46ed6cea768442324ca75a779ebcbd0bc048b692e04d11cd31cdc1697f18dbfb8c2f6d86bc265bacc237ff29b734a9bf3ba348961a8a9b5eeba155bc512711ad301daec83c2f0716e2355ee500bc2e3971ed90af6edc288f682ae51f081baa6780c2508c72605873e0c5e629b19e20c6062d6b0fe75d4cb144672b9b3f413724a81e85d42aa6c8af5524d61bea926dc334f6c4d6cd4552e6ac237f245f19728ab4494a485ed63f36b20758fbb9c8344d0b4ca4c24ff809a3f1da8b981226035480d41eb906e07f459965e5c30275189933410b83d7bf3bb886d9838cbfb2bcbd10a89afbd3928701b2614d47623beb16eaa3475a80fb01e2220d12fa2687b17f9a78e3985daa043c97cf",
  "15.8": "d6f812e7d3a39636fe43ab95:255f360877ea48019f0c2be4d8e48ac4:632f651be8682aad06d05c6ed4e49da644bf49b581885c5618fcc42316e972516f297edbaf489d0813401ec5928eb40c40220db53741b107b21f73ec0c6f59c0e42266eca04746081a8d361eb890027d853ae1efb6d70447e384f1db012f163897ac6ead8f9282a481f59a76517fa479e40eabd56ff69fa427d5ab081069a489a0a0212ad3c14bc45763a1deb9af75109e945c892d6fd756d14193aaae1b80fa73d973fac707b5a92c0ce9e03d76bf494cac1a8a5f47faf26e36106eac5a92098acec73ffa810d1ff7ade723975a9629d5f7ea07d80d7678bdd3c13c6ad2f42b6d3a0ae2e41dc448ac095df416c466f294f1f7b4c306acd17147dc9edead6d424a5c9977f08ded9add1032285b4d33a38af07523cc83b1b1bb97b0c8e2df8b3c0fd3c6e5507e8e469fd674b4cbdb094fea667a5ca6ea165f02ff591733bc9dcca0a581eb9ae8814c116eda819f10d9a2d80d9f9976626ca97e664906648f1a2ba24ccc1e72dbd9343277c0ef67d2a0db4f3334ae213ea10beacceb142de82483db7e09d3cff42b9da5b58aa388c7fffb96949887a7260b6a4d0d05102a25073f14c225e5ee4a225fbe3ff2ac2bbf8be9a78f076d751366d6b76be86b303dc1039c37cfdf3c642f5f43d2f06e93d007e29dcca9fce7c12a6dc38e858cdb9a73872d0595823c96e584619799bddd3e88aa3726d7ffbbd842f5d90bddef9058cbcc9e3a5f3fcb02db148e06558ea526abe7d86060d7a214dec296b06675d625b9eab8177f3e0ab5f051508205e7f0e946626c2a65bd132bc0bf051faddf7c3a2ee7a8896cf025400a948adf7f7936fa63ceeac55b74c68acb5fe4d207453dc6aacda26edd4632b957a046083ce1cd82f2d983230d0f218b9b6183c219bc119b4c4129265c419a1963f6d783891ef54634f1e8e46160e6ccffdf42f3a2cbcbde42024fe5d9f92b7e48bd56",
  "15.9": "6f419559317d30e24d4a8767:97533e788aee776b5dd875eae3048bb9:8e91678d677879029c5eb03fb47d3f7ce9383f812cc349d1076743c22c3a18142a98df073dfe8d72f0f94b8b6219073a7aa441b51141eecdb5a7c2a1fa7399b0e96d7b85827dd6687ab5f09abae9def1557cf26d0b48f7a8df29f0ea60cf370401d0753a96a4f26ad0cda24cc5e0479d26c510e1a7385b94181dab3e86f1e560717cf290ecda83d12f3ded5187638f1fa41f135c9c77fde39516c49cd9e8bffdaa6584ef45368179db856d54645034657cbfcf24dae212a059f51d7f021fcf91dd197f0d9ca89a8c464cb745d9246953d4c42b8a006cb3dbc5de681d0d2291623909fa5f9f313f57d355eab8fdbabf593dc33b6ea92005bc104bd282bccbd549845df1570c95436da31984797f36ebb03ae80e39faa5db8c409c1d01008fc83da85bea41bfaeaa2332b8392ad9f33572c800d7ff35032b2f6d6785cd516275416fabe1c54a941cd056ff5ccaf53f00559e4175224f6f7ed5b452c723ca2417fb380ccfba24aadbe8675d465be21009ab938b47d838d6169228e921c406f48f39fac6f7267a512bdad3a786bdbbd439346e2e62beffb1c1d5d937ec751f2f672ce4b688d60dd758e6818b7dcc85b7cd402e0223c0f666585d41e72f02d7ce2d619e59421e04aa3a0004761d1f16ab645e91f3c993e80a2e98793c43ea8633df71ec41f4371ed4541ebc687c0d27f1d314f89e248556710afbbfcfaaae214bd8a075ca18985c490de2dee2ec3c2af49b041334248dc94fb9c3852071a42fe76ef61946d0452dfdd1190357ff039ee014ed6e146c7b0fabb337c11261fd2dffe7196f1505d48dfaf6ac87d44c07e17cabf4ff530e6cce912fa7f5cc0095fb410002fd93d87a064c372969273c544cf5a099a74b4a44d9cf78ce6181d7",
  "15.10": "56e12e9e9174d466c9a6c013:f8a88424581ceeb96ef3ee2559f8a7f4:b5f29adbf3612a7501aa5b0bda32c8954415bfaea7d1c26a0e2308b7e4e67b8eecb8841efb7fa627b505ca4332ea7d5b7c451f714bc3b673a5d683a2152822485c2b364890a17a4fe10bff09e419f9816690849d5b1ef622b8b12c6bfa6b7b7db665640c5bf13915cec27feb5b2befaa3752a794c3ca179be3f812ceec6ef7c5fc40e9381104c01a87f5f1e6385056f325098561a83f9ca4c8141758d9301e73ba257975f2682eb91191376060badb0aecdc17c9ea3ed763634731f2b0a98d48314ccf19d1567308fd0e7a4dd12685a8bf193a66153c345d7d8a6434fe6b63c5cba2d2444e47baf23781f0a0787d45021b316ba8e464e034288e27fabaa4f08d65947d1d8285304263ef9992b55485ab7df0edcd91c11bf56233ad45940ddcd18e5678eb515ab078bffbce0d8d6d6ce66e1afb232e74e72d827335a9b2fb55d3515ca7b6518c8b01d33e20007748940bd6d08839e21c9fbe640dc3ca38bb2e96fa65c7bf3e457b591a8836b82fdeabc4f5b4be5de330cb58c3ac7f565cd4febaea7a4db9573f4ff04d8d4299a2ff1f2d3bb545830b8c3a6d77587a85a3e5e6fa0bf8bcc6aef714577e57b8fc3ec8f236b1a4b1924011dede15f2c3a0bc3492aa6f6000a11da45ede0e9023c769ba626009074b0a5db0b47009127accc120ecf2927534fdf421800167321815a0dd4f401e66f2e55d4c5ec49a5b9cec4d169545b9095532a4b4e6d7d1a59e275442d4a065c980855ec09e7faad120c918c7cd26ef02bab56b9f118c419f5ab19ca6cdaf9bb84dee618871c471bdd0ae77b36cae4a40c8cfc48ed6445752b05c146ca9bf0c0c6b18911626db24e746bbed2efd8eb1f110e7400876c60d0536e4f6d673c3e1b6f73941c11a23afd1f931c90863ffb6db60e4bab22aeee0b50e21ed7c5e0debf0f3fb3ec9",
  "15.11": "afa71059a54522ed2565e442:d9d03936c6926b4a371cd1b18b3dedf2:5f64d4b32c71c9ddd402edd660c31624d00847c3fe18d4c1a60c68dfd2008871477ead64ec249f22ebc59121389309193fb4d96631a2437e610f235ea7e34d0503a1e5ba28941ee54fc3234fb5a81408911bc35a225c3712d336da8736c71a87ecf7e01620499cb7e759990c7035d173ec3fb5efd00d024d129cfbb5f404200db2cadef572cf97934d5f9aecadd5bb5328ff888b0446ed4c6a9a8073df725fd2ed841288e5219410e944878f217675e6dacbce31ce88bee943f42c9e36e7311ff2bd1ebc5cb2bdda62ed0ea1bc23ed455874f5f8884908e4219a0770165af3270b8a89a39b77ee0a91cf4dcb993a9dbd14b097b03dac450453ee8dcca384341966beda83a7f11c18ccfe53481ba0e02eb73bd41a373f6717b04eafc7d60a92ecd51f09e82f210e552d8bdba7e96308caa729135af33095ac791f8a62793de9786271e9b5c35f569bd3ddbc42d73db55269d388adcf87f282c10633fdaea2a683b48a046eef917a9ee75b762d1f15788d25b80a134c445b160e41af9c55f666a5d5af677d22557df8edc2aa550425299b179252917c7ee37f8b39c20833539aeebe1f9fd07d1a8eb15716dda8a157ceae6eca8c885e1eb13429e64593ac9f56ab9ac0d0654604f0c750ee44cda9ae4abb03aedbefe1b48445c8ed0d204798ed242539c89d9e0f8c6e4bbc3625de18e8f2d02a17c38eac118847d592db1e2eabac6504ba96a75de53dfe9ec6bbfdd797d1e53845deb05cb65e8a1bad0d4edf983d6e439e2b798894404b348f28dfdcb551bec20d1dcbe3ab767ddbc345feee32ef281cbff96c1643a3ef770c02ae6c6038a13d15817f086f947e26866a618eaf11276b2c0d18bb210dff34657d057e4bdbfc38d14864dc32697a5862ee3656d1da95c1d30cd52a45c720c91ab789dee52582087a002e3d15e573399a08e324da1228ba0af1db73721f02175a0456334ec1ecd7f94b9b81a35dbc09b839068c86f6e5145ea310ec9e5daf1629149af17fdb214dfe591ac5da4a8e90ea0adcf754c902e6d660",
  "15.12": "65c651a0b9609c844554b407:e2f45392046f4d9aca0d7b1e6d08c643:82b849c947bdfa401e50fa7a05f7ea4c3882b6192aed13c781e836ba8d5e0182fc0288d281aae379e831552ca82542dbc3efe0c03e4e69df5fc28dd96173d563e2ea2d9b1f5bdf1e942446c4ec3cd9537b00d9b9a67bec928455aba326b98097333646e86c4df49172add9dfd305e40f4e5b6b783549edb59a81731d4384d56e82d37e90837d7628bbfc8eadd76c16d20253a47eb4d38fd43d49c9d2d003411646330b9a6e198a59b079e328a6b247f5aa3414d4c48008fdfabb1a556fc41aeb3ff2368810f1fafdb0339e28321a527b2dced7cdc34f67e64005dd160c03f38eeb8ab0ebf1af5409d86f277989e8cdf2db6d3251784906c42dc99bff117f63d1fd3ea731a0005b4ca24221b9582936678389fd477249998d6b0c7130c5b5ecb8e1a26d7ebdc396066590071fc0ddc156a3668e6cbf5520e57c30dfd8065e9757191f9ff2585647af5b815c329165db42acb3cea2926f9ca040c91d33baf8bc970674b36c3356a46ea44a23bb76c8a940d720e9599bc79fba45dc309f59fe9e3019a5ba92e6e39440fcd68094766ea9d5f402b946deb4f1e81f5fade69c7fde1c806dcb40adf5a31d57bf0d0421818162ec48ce05c5f230698c5de4808e825750b98841584faf2a5840fbcbb471cb82a563",
  "15.13": "99a92459844c758aa47492b0:953d8b2a5a378daaf2a2489bfa64e817:a65466fbb49d21472258430e6c16f6ae3984160123f3bfb0610c5f7e2785a8b6b110653a7ae2b7c050ea8d002f774733e20ca05cc3c376ae4fd7bb5cb9e7de79597d9e702a6a83716234a2c8b39b5095f5ce4fa065ff05f8cbc2e85061c54bbc020618d4833c587ca368e52bab00c9e9a6fd8e0a94da774f9562830bb13765ed34587ed3e00b9e5c395c8ca30c2a650055c3507f2be27ebf26f844d7f176237044ddabafa1cb12303fcdea9585291bd2e51e94227c8da33cdc4ca57904288f246b4350c3f6fa788545edccaa24d68030672eb52deae4dc8a54caa0eacd39a9dd19b237050123340ec50a3d75cb5a129252387b6dec0761c8a9c6c85e0688d4d26026d27d149b53ad5abcce46a37a27eb0fde4eaa9451c289eafb07ba8c2bc994ca1a076a0e050ac9c3d1d27fc4a0f2b88cdce538816f3b7c6f8f390f368025211e89d2cbddc1a3bb39f7d87daa0964e0af244d1f98ff2e2c081db79167d7e8e0c6bb814cd2aed634d597bc7377ab75d5f04fc0c42242c6454e1cfda1980aad9d7951666959accd13a08b859e9f75f12c73d15db3aa4dd98b9f087b4347c519a75d4d978f3ab790f1b95bf17efd5b1de4c38920e469f8e41b5e8e3fee698bb8a8076175252cd36bc256ca76c61266a921ca754ecd446cfa0c80975c1386b800b22c08a0e4b3d235912da7a6e93cac3a5e119cb1aa98fc95ac5794dabcf94f2cca6ecd8d5c993b0b789b6f5217d23e4064fe933cd04bb18a5bf517667ce155702c7edd124384d4676e3b5faaab7f560926ef8cc304e718817ddf229cf860e0aad1b2496635c60f3fdae6f2385c74921abf4eea9472c27f2b75adf15615e8c17bfb1c19a2b2e61e2a4a03b1053f295ef6479d90896cc9b131b4284080",
  "15.14": "97b8976e0f16a8c3ccd5127f:1b7d4804cac1f4fd586783d4f4d1ede3:b7df9e410d658c90e86115695b95dea0432988f1422b08492723d9fafdd76e6d5f56cb36ac14e5ae5961b8cbdf5e37c8e20ee1ee9582f640857e180bb1ec136165708debaa35e5976a3ef3b86303901375fbacbe63e8f62e6e079f026c039e538fdefc75732ce6e50af8d0c7e5dfc7bb22c5aeeaba7466303a329349ca9c13b67cdff9a78bed56d1f61e3040a09b1d47cdcb89f751da1a2b95b489e301c527d0b500d654b90188ad602ad29776ac8c4c9f111f9c42225acb55a7bd586c650035ac038d8fbe554ec1d8ffe2b284ce63af7663ddb93ea6e58398e953f7c3e790f7183b08342ba251e4360b120faa641301d427760728c68b5bacdaf261872468e04f7955b5ba42769ebc7d16b22892f0cdb1650140af89708d454ce5ab4c121011e05422b8739ffef0f1d35dbf54110e6e92b633ac0db5a38380d0645315de05e833399a292b6aac4e12d60b444dbdc46d0636e5c6244b39859983e188914e75e559024a7be00ed46fb8d1305b6fae72cf4b12ab981a191dfe250b99b3e8940cc3744299a83b99277e7a7fac90f154a4060ee89dc03026896eaa6515399da3f6962741b163936556b3dc8b7f9e3f03492650dbe0d0f27eb885c89a999599ff9789592a44814fb926d1a531763e09ea8c981782ac0b02f3ad9c5d530c97eaf2c3d207941ea85899301329c0d2011ce2308f0cd76c3b7c71f167bc430795de3a968ab65255de1c8ce30c2daf85e0f9c31eef6aaddb8aad8d8382d774acf589d38b9f049d47694143323a3f0f914693d3d18420743884a20de377796223530d7cb4e60a630d2c48f110dcbf439b1c4d7226622b960af5da71cc5fbf5893372e3f37e6010722ea72402c851a7d1b91e8dc28c73faf6e425a6048cba6da6b22276b75c32ce4af9313ea2cccb407799371da5206b38ad9e1e8156e166088eff954f222ca616900d90125145b6d90",
  "15.15": "ce6bcf44cce31b841cede4bb:6496775d1390d1b936218dadd4b92e8b:84c011101746744fa63c7044041fe5f02dca6f6c47cc9aa9b2adb697071079aee50806938fc8091fbcae2dac4d0d0c071036c18dd4aef3da9d840c806cac4040ce00c189ccc4af3deed846e84665b9f41c5981a44797e8d5ea27854a616e8af684ee0644e6e522c0bbc4296a6ca35fbe9acb73f92d2acfa4dd6e3f0bf55c87dbbcbdd14908f477dc3f26b87e920667cf21029e571437bbdd5ba48f1a81bf8da13c95e7a65f1499e603f86a9bf5f27dcbb387d869f386f1c182844f7d02b6ac74c3c6a47203277d7fc058e811cb2b7d4212da2aa8af265af648a9af130ff8acd0f5a27f5ff90d97ab097622564664d2502ca505313655cbbb99eff81e38fea114c82f419edec30f3d46156cb0e16a4c992e86be4f970515d011aec7a66d990cc3454dd4150ad09b1132f89c1eb220d6eb33482303a05d075656a5e9508ad081d39e0244549cece26b9d483622feb7511b113a833f965b4c2f8f8d0e5969df32b03204237dc8c6ca895a6bd341b5e4bbd192c27c947cbb3ca7d076aec0e197dbe76772513a039670de76089220ab446a1383088fb290438704e3fa22b7f359e187008ea40c2b4a56c18e967f3cc2e766b4f3147f980a2fd5e98cf1d3966364b58fa75c92b83b42f938e19963d8066e742b7bf3293714857088134e15c46951f33055cd07967574ed7eb1e0ab8838be74dd84b16189c88c6ac1061d9227403e1e409bfa13facfc23a33fef6042451002139223a0c2cf91a388d9aa2c283d3bf583d934608cbf9bbad9a40405a61fdb4c26c237e85ddfeb89280fb2e050caa62004c2ba64652055849bf67ac43d63e73807bae7df6f022b30ae395b34b71165fc6feecafa4fab5b8e7fa6f48cf0a3c7b4d7443588a38e08b276ac350e479f78406e3d79f153cf5d337ddd537fd7c18d260c1caddd880c0324947765f2c2adb147065bc3c979721021c151a4efe81f7c8ca06660fde98028000a61c76350b96233e855763a8430c758202b2868e2744f95f34d4d29ff6ba90112307f665a248783273456d4d4de9558fa71fef44ba71ccf1d6b30fff419e5c8efabe9c5f35f4cd489222c62583db9bcbb897399f75796f0822d9176aecea408013e43b6bbf6ded78ec2065d9b1ba",
  "15.16": "98666ca44577f20c207922c8:1281fd87dc723480979f6613c7876448:9712c15ba762f0a00da7400dfcdbf3c94d6e74f361635e5f2f27594dcd9ed6b61f936cc78c7b6962b65c43d38b1bc9156e13fe664b528da1805a400f8d3ea4fd94b8d8b4f316d9be5708742706f516d0b5e7f14a60dad8e117f8e3a6fdc081e42c5cae72288594884ec98091a063cefbc289ce1b67ee0f37223d54da2050dfc87ae36d21e81d9887df9b7156470703e65fd8d0d6ff523cc6c32032f2e92a41a0ca84e29fcd549996af02cc9f2ae57b9c44252acf76d6edea2ba1b79de745a8567db8a0ff458acae271aef410b6349d309e9ed2f7ecf8397d7b7192ef47982e79a30ca990a6fde2d9139556813ce24e9b384856c171a28ef13d5a7e8d079a1bb419f845741ad989d537ea7e6b80c2834bcdae410026d1c2c909b8692fa2e9c82f9279d0bd30b3bb237c9ccb0ac73394a977b4511505db6259f957391650eee15987b5dceb61930a37277c0fc699dde2eaf1efae16b591e1fe86176aa5660f62b39f776458fdf4889240b4b008fd19b70e7a72afd6f0fd8123e7d22f78b81d33e4ef4a3e5b99c86f2a12c88d577fe290c230e01485a7a3992561881aaa6b806f76682a5ff00df13482ed874af25fa562f4168e5ac5259b11289bc5028e781b8da095c0b11dca6e7a8a80e189cb64004a533a189272804d935202f0b0003aff96218ed439d5305601c3226ab5eb8478ef891503bc9aaa705a5ab2c2a502dd0d11b0d8726502406ffd10d0055b6c03da70df24f79047357460450e7b0687d018d52f1cf6b4d48626b1a390fa81",
  "15.17": "032927f2de28f25126dfddaf:b38398fc544a12f874c780553e96edbc:c9639fded18c1d7f97d41ec3e9b8713442d4c5dfe6920c3b19277bf262561f53b1f751da6f74190c4bb010779bb3c2fc73810ce951590cdf84064c852679994e51e97208d91378cc224bd24e6a0877f92d051ad5387044a216582d7f15e9772ba9d72c16d7ed58d596ca5b575099f2f3dcee7099815002e11ed3bd7045ee521f55f33158a45544c2c3a2280965e6fcf2029109776723f9ffea51ca22c1702d95fd21c74cf2fdaac4af2b27f899773f2345435b2b3fc1817179f33fe3eaeb95e97f297d5281fba3ff46865298854c52d57922aad2bff4f90cf01f047a14f89d9bc5c7dda3c828c1a25eec635b0fc956eccd6cba2b96d62f362cbff2b8750eb2781e02ba4e0a348d4beec0623bac76b83779a0cc20ea09e36d529ecec6b4c4e78820786b7ecae5dfbd86f005ec6a6af0ae993c44b87a0650d9cfe191aac55302c3839afc2835eb4b9ccf2795320dd74728bcb51cf5d2e7d7a7aaaec10c530dc7423c2b538ddf968e3ccf75795a664e5f3157aee0620d39f8d353c1bead7117318a49d00331b75e3787172cb6df7f7c2c7a9e44ae07c4c333c6716c6d082af3bfe53d005571a2a0b2c3c96f3c5f6525850b25da6a0645a8ea5f9da1bbb03148b45314a79b18e7256bd5ce83f169dfa6c93c9d6c0c112fefc97042c6c584f161ca21b7f63278d58b6cae8d1f81b57d16a07098d0b66d6836ad131c9b482f21c6cc45276feeba9afb0ef97eea8004364f9b1393ac857f20be4c76701172cece18d7b01f99384147884cf2afbf114122f6d8e8933c17a6e64172aba12c76e700e9c438641962361e1f66ad2caed3d1bbfbe4843dc67a9f24c6a8d248c75e1f512f816ec7250792efdaaf0f710588bacd0343a320af744feced493288d017776424a9fb13521c105d22f616681d",
  "15.18": "fc5396dae05f3745a858c1e5:d0b08fb9e5035b6ed20bf5a491b89931:0c1a33b395e790e206e64a2ec805d66b077f2b6d9a7b3a7f0e80929bb6ed082731dfea886f3e963a38c0fcfbd259a19b1c3981918630e58f7e1aca0388094ad339ac6fa211ab1bf9fb413e86b954501ef1753ac185b07d93f89b9714e10e14ee10534fc9058fa785a4262c60723fd55c640cd21c24d6652ee8837de4a674d9857459f7119098c1df6a0fdf96d4fded185a7b7a32057058e79d96ed224a6c30558850e5474d4a58c0de21c124d5be28e6be30aae3a832eb68c7e304b91352d99257f35ddd5f784642e4eb5aac89d3cc381bf852ef2f293ead24819f76b078d7270ffb5dae2e1fc5063448305d416a3c3cd93d593772a38911cca6fe236abf3495e159205a795b2b82a2b28b600c345cb84f88ef0c968c6f4ec445bd5bda4a6b2bad58cdab2f9a25c595c7300f2b7dcc66d7900774b5c286ab9274a305e6082a7ab9fb7d2f33324eb2bd2f1c351b008e453fbfbb53b870c556c52f4a39126916725cc027ffcb2ac2fd4e9d90899c8b1c41eb16fdec26fcb736e6ebd9fb234ef7e868b47cebece1db476c9bda06ac36d79ee7a1268457702dde80b3eff24a823b42146f3f6eb68504e3cdc12ef1d47f9aabffd6233bee9ff5f22e46b8325163962f23cc432b2cf8e019e4d7fbc82d99d7f278c5194c59fd9b8c305c347653f7dbe446d680ba8bce6164ab4bff55a35797c71c375a0887a561a87a1d568efdddb507f7d45cd1884582f3c80e7b883e63bdba585a3b78506136ffab3001cfe8bb4529633a558c4260eb99129a274fb37dfdd2fa1097537b3e57c7449139abff67ac3322153eac055d592f0f598045b490253e2adb2504f492aced1fa881432032364472f36fa51c8334ff153704f92fc80be981f4a9e44e54c89cb8ccf5cd7efd1d13eae02c3e349431fdacb295ae3e8b25877204c7102850f5bac56ae5bb613109536924abf42748a46f7e6ac18af76b963001f1019f12e130d53ca648976ec3c89bca9e5fad6eca226095aa702231cd4d87f95672cf48f5bb676fe0de4dcb83a15861b2c42ed2eacd611a5dc30d51b2394dec2169c6acbfb4634c91aad7f335c45e5572abffadec9d239e18ade5466b875529bf3dd8fd7ca8c882cfd57963f379988fbf13a70f7e7f3490c99ce7c8b69c037a03ebb4cfc0a54e593cf75b69bdca322f492b198b2085fa3e1a5d71d358a128ff45c31e56eeb8f035c7bb31a80c96fb66399bd5924898e16cbfcfa04edfcf924d53357aff96a972d1b410fd1ad30139faca9638c2d285ef51b6b7125c258f8804509f1d62dd03c2024e69ea",
  "15.19": "2095c4e2014a0b4384bc3bb1:08ee14647cce1fc2f9843f2aaabd839e:55c9b8e70d15418c163552ccbe11723562ef04370403c099cd4bb31e885de425ceeb326de5278b893644d6e7a0be4dc46b04481a19dd19ed1edbbda6bb9c43e68cb0cac5311d125753b57c2c3aaa23335d7dd9a35c06c810cbbd2e3320007e2a46a27b7762c4174cc140fceab735e0cdb7ecfe0ddb68909bea09b5ab5e7cfe60443b5098752a8984b1c474b782f9a0c46881c1e216a2796e587605d90b3797baf1555dac6932da862d8c70676bc3eaf0dc15003a615f0152d972f958bd30fc97a9fb8fbc9c300ab6c310f0a0048738eae436a82ac6df6c018eade76a16ab78ed73cd67054ac1c141d2178f1ca3da984a0e400ddb677958eb1a956d75cb88f9e82df0cb0ca2624501fe8fc848842ae0fbf5b230b7bf4ff7aae131ea2c2c5c6a50a3e79ca30b00dfc60838e3ce0ad92070df1573b5a2e2877b44c10b0f975160874cae69a4005b33da707083495334c7af98ed0ac735823ae59afc198c439173b33161645f830aff456fd781a400829a09a9bfb685f034e9e73e29a493aeda48cbdf81e0176531ddbb74a178678705fa655a794c80ff83d31711c3286bd69040ef1c0915ace9e1f27bbf554cf534a633a4399cb6e52f66b9a99e31752711c56c293d1cba78a9d2175c1960f5b7bec99758d15817b3376982ef1638efaffff1a321dd07882b2b1ce68120bfc2741ad6fcf09aa4371259b8a411ff3ea8708cceb743f2b0810e1b643dc5777c0357246fa9cc960f291de80f1f02fac4dbedb2bafb0a34972e90703aa8a76f12c1e0c32f979b71a6e5708d24fed238419a30960e41c88a159c8a958e721279819fd4ac566e8523c7e02d1207847c876dbe9b0a95c3e9021ad7764561561ce9a727c02a30efeefe823dfd36f3dd38482d8534ce4affdbbcd1b0116340c14cd131d57ab2aff4f890254a8f5fb65d5010eb39dffb6abe55e8b87d9997b6123f2a85b05bfd33bf779a2c3a23f31b57e999253e4f26dfa33ca3b5f71ef26af06869a54fdc8dddb58c66f464043feb79b02ecfe6dda3c1fa87c7ccfa3db7bf7405c4ba03db4665719a3cfd600083deb326b3d02c5046d8f062351c20ee4cdf464c7bb7b2c77996748ebd24f39bae5df3fa0a99d0823171386883407c16bbcab43055503960e6ee7c267d32e0be0563604c799c27272d62aafba407c20b1bf35870fcec374a4dd9cbeb8a0fe7bf6705f243125e0bff1d5b19e0ec2496f99220cdde874a041b0845449040eadf78871701bebb49a435e82dff0b594d78769c62ed2f00c02bdd04a50ff6d39da0e2bb49189b605dc109be5bd249ea0125ecb541ddc0fc79a160e86ada3dc9d9f4477b2da31e015e46de5d99e21ccb4a10a722b207026fe6c3232e51c5a371af84f0292991c71528df983585216c34167b5999b78aea09a0498c0befa1e269eec92f4cf0261d324811316d5ec748143ac1f8bb7afd0ce17cd98a38b94e7330981e7a5d31e5be0a699112f3d9f746d151a42bcda0875a970697348d5aa858fd6afc0e7a7ff3e3b67e4b290633cd38c4206db10d394c5df8da93",
  "15.20": "bb742be2c2e0dbfe90075260:07082619604f55570d484a99d955058f:678945f8cc3b07f142bd01181abdba30985adf8d173a956cb1dec612f132762ba4444a0995ae18daf7cdcc43f191c2b43b180309fa9dbff8c9d1a7b468e33c909708e552bd94c1e898d72cb86319fbd8d107e0fb553a1bdb64d7c30ce1199efc681949595ce22a97e03aaa537ded786a78c782d69edc9453de163443c3fe4272a41fe71fb23ea153551f257bcce9fd75930d193a4a5411d7996056912dfd68d90198f6d33523949889c79815ece7914b7832f38a4fd04c2ad132d6386daf33124ac3c0c7f26fe2d645b13144b47b0dba4ae565119e68b77c46000549dc5ee8f8e0911a39ea62f178a431c907bb77f7e92d141bd2bc7e0d6c689ae8aac1aab79e2ece3f628265611ec664b527bcd2efb1df9c02e4e149f352b9b47b0765451c2047fc52d81a40188d056a8f5d18491774553d589a391691843b0bcf4e8b267838f8e24d7be6a9f824d094d60c1c3f1e16f0c586ffb8128b9a2f4d5b7169efe2c1a516d21facbaae13cfdc3aeba7cac3e8596c3cf7c6400794b99222294ddd69efe1cba776684c6b284d77f68c331840dcf29be9e29d01d91d4f435cd7fdd355e8c8add2031859d00a97fb75875f8da53f8480704536781285a5de3a5694846b3c1485bb91036352",
  "15.21": "a4d229723df73dce93d302e2:08e5880bb5a5b1636056adce65294364:e1df4c417c4d84877a364b9eae0e5bdfc8302d3c1d9ccae0f345dbc89364a1a2d09d9b96542fbbc10db864f4a67af132cc1260e41c9dcfbcc49f12c5ce265c2fc8a23c8f4da30706643bc389200b96b060b14ab62603f791865b72065ada60121b16f547c96a8412f72b523f1177f19eeaeed6e22b649ca59a546443e1a0d975ff71ac3292b26dbbd66e314f6251aa6f2fbebe50aed05248f22b676181451c85aec8c51956e4f62cbe8f039f1e6abed76b97e8be044dc84eb1d5197c6d27b6ae1d7837ce96428917f640b67be6f3e33a8ee50f0eb4407589ff0858a9e8ea6a0a8520ac9a8cae4d7e8e42c3f328b3f5ce2c21596857ad7cc18549b027dda12ba5151101cd4fd3170ed42eb27be76e13d4d5e01292e1ce1b109431e735cd0a81e739522a36cecdd9ad695c22ba27b53f73a97c346de4ce575c7d5109785a7b69c181dbfcdac90901b89c8def48511f877b1e2bd2bca8199b8bed931febe7cd92f0364da157fa50f7f10e170a5198afacb1660fe05c3103cd208b7c64d9b2a50133f249db195d2cfa8954b58d61565ba3032d6e5621078af98cd79aa72200a45d61c8d13419768ce14aa8b6fd572901c5a36b7323c0c41eb12974d01118d44b296fd7e1a4b6ca1ce56839b7fb5a505d318e21aa89ec38660d66a2cb908926d6cb5158fab9e4aec9a34163ce76f5ad46e2b808f1d27c27193137fdcc564ee06c2aa1aa3dd567317dc66275798d8c19ac9dbf540160a33f8549a94c81ce10e8163a1df4c9e731816db0c18b7c4585712edf0f6ee920",
  "15.22": "6fdf0efed68d97dad2b6d134:c119ad347e2947181b3fc5b0dce95f79:5437534f37382151156383025baf84f6e2c831cc36093d9035f1875508aab9a0c07433f7896f47b6612f5f3bc3d3cff281885590e0a48f2d5febfb8cdff2c86fa8919a13361db58a33aa347d03a0a9fbd7ba6f46c4ec3342f243d376f586e083a09165222b17ceca43b7443e9e3880ab4de5b4cbb3ad83edbe3b238020b483d769f2a70553ec0bfb7c59b50607b48aec92ad43a05dda304a557b91a73da52a5d9cdf52208a5d00bb266eaf73fd7888174eb2677bdc8752bece2b324691f3d271a6a994ad827fa995356a4671bef90406157b30eab21a8351638c951f02d68b15cb8ffb62706bd63fe8c4fe0cc674cabcdef5f5a6dd86452293d4a29b9a9ff6b15574da5fa5ee120c34cacbf17e8c7fdf9a70c45c0a57d323472264094ed9b0c4410d61576860303a101e82ace0f8f3b747f6489802a358e6fd45fbb9b09a5dc008e335277f35b8b3b498cd09a56f488d12b619aee5c6ce97a12a559aa8cef889214f0ee88cef50d75d86e3c21dd0239afbce2d7b86672bed35c02805d3ab4598ddcdd81f4a5b32eb148d073e9c51e26bd8c2fa6ba4f6d9ee95cd5f636f6a8c689b243501c2c4adabaccfe5df71995a82d8f6db597beb5cb89c",
  "15.23": "b0c6984a6230742200a7ca7f:a55e047170f0ff41bf76a1c3635be2fb:264980aca153756369ed90db10b9965f4716a58ffef387ddfc189cac89f4f8b8d99312d07def74557656fd742cd207a192980358d96d1c1fcf4f078da197182cd586bb53abeb7e49f3ba3ca5a4062f55d220eb01250bdfd8b859d99ad88a6a40adb48f6b88bcf896dc0d4981d029b3906cebd40ad5466d7d3b68eb41904435d0340e07f0487f2189594aeff8879c45908b8eb836fa7b1eddb63bf8661bfc0ae9522163a6848ab05fba39843bf649565343882feebc41fd6d0d25c5537acaace40b40517c3df48a3bf7d243ad971b9f864f5933e1a57c206c0192baefcf7dc5645214f32c38b60e24063f5c725a8849fdc466cda694899c0fd008f4eee1e4d88244c1636565a25982125a45cdb474c3ecb4252b8f23383fbf971d969548e34c4f1d94be839e0bf84b35a585fa2b20373bed07fbd283cd8f7d380306a788cd1fbcdcb9e0afa1ae57c10d8e2397d9aef0d6245024ecdf84458b71c41d806d50617a0627bfc71682e86c699d54d348a2520ce2f16febf99e55095b8812e85d97afd9d0d4595fc774d6aa006b11237ce8dad70002b2176d509876e65afc525fb428eae8e8fbe77f4f2e00f5b44510d3b3254211be9e4fa7db9f7d3d4e2a7ed4a2d543adf92e61e10b09a1938c313710dd07e4af0188197a08bc983cdf56cc54bf18fd2a10a7f61d2a808f530e0a0115d50bf834ddadd60ec9f64b9c302a9908324f47ed2a3733bdccdd28276b6a03c04cab9668bdaaedbab1d1784a16d12b6235fe2b5645b87f427462e170feb2d474d58e72a380d9569c2163e02f2d02892bdb9ce678ddf742cede6eeef78afde17f0eef5d90608f4ed35fa775c44c2d1215e49289b366c66dba63bfda554d0cfd1761c6070487e0a6c775a65add88dd37a494483425e3432a505a21704613b07293611135e84bedf0b0b9b2c961cbb194912851574cd15e0c0fa6680e1239e1754136aaf6d03f75a02022f18f360782e4b10d5ac8237a7eee6f10b5c40eba8790c537afb5f07b4682814b477897431c6c3e6059516e6e320a86d4250ee80b85c3044eb041498051b259a2799cb41d21e851276fdbd5241c0db944f2320f73ac382611",
  "15.24": "c8618b8e1319918571f21410:2d53fdd130a2eeaab74028391b7a72ca:1302caf7aedb2ffd1b8ed97e6450e5fb9f275bc2ff784152153549a9f79f72ac56e4708d676dfa8d8336229a81c0f2105fe383af8f1b14444082c89ec3e9ff71179345888b68366b1434fed987ca9e21bae41bf9f130ddaa5e87bfdeed878dad11a78f1989242adaa13b2ec26d150abeedf08b5739b17f90d2774d8dfe36523d989a0ba7410eb9d2d22f16b76cb979d2df7eeacaae82f1121da5bddf8f7a4c3bb4a8991581f5a0ee3cc752695b159ec02c1a481379e050b5e88e9200df0105704ed505e09c5e1a9fd1e6ccebcce4c0fb368aff634c0c0a8aea8028db5628fa9e583c2c0ec38f2890ae0c363377e62e5773dee5213126a8f828b9ae43355faa721e92bb8ba443f2dca72ab0cdc6be7e7cfe163ef9e40b72c9bfd1eda78562e44ea48daf0ba0b7365b6bda8c3f0774b783b78ef2973d66bbe8e19fd64b06901c473c4f7b977b5a81e8c71a28cc3e7d00aa23ad6af9369d5210431c49d388f0c436f5ae29cbdba2c622385a670cf5a85596e0e611152dc2e93c983df07c8a15a4f6baf27bf7b58028e95854c7034d13a9017f42db16d951c2e01f6f661145b8d357b93a80f2b0558dd69ea5e6578cc3180179ca2e86ba9570c11a686a76f8b4e574f40d45b5411637c2bf49ed895bce2c2a61cc1394e22d4739f8a327e5736f0a9bfd4e117f55cdc02d5eb940d1c541cd55e1b647a7a0ec82107b738c737abfcb620cb436bb2c2b4ad789fc921215a87176742e7f936c605904e0f1d05d5a813888d4400ade3f2957a5cc32f4d009423603e36731198a6f98fa765dd1ec5a7ab3b4e3f274852e3b26d77b91a8e02ccfe497c34c7bb9ebcd0fc1be6dd1f981d8fac0e246993bf354e346e03199c5b42473d78de37808140e600c458229b7b817466aac0cd0d2e06f4d74fe7b5999cd62fc12a145d1506918fcbd64a4f3313b190edfd7bf1a88bd678ea48fac8d7240fc00b88b85bf749732b05bc533c90e8fd0d8e404026e1608122420e54b11d854255d75fbc6d013e55413faa1142e88a175bdcb22d311d4c3a4023ab206b41797c9992b139f6288d7bb9d1ce83a4682b4339a14b5b4dd34939d4b639e3d2cef5b66712cfb416f9e80c5e98f14dc1d8b19c158dc3037ba0597a8e615cefd77d7f3d58b87b55c2e",
  "15.25": "9ffedd52d8f336e016dd65d8:c883fabde8cad80574640b18747ce23f:2372dfbb68d9b7f93d011e8aa155e14bda3c258189211bf4b0ad1c467654a7cc5a8750c06a8845ca1d024f0abcaea57bd664f18fcf727570e545b1ef1fcad9fea03c666e78f89ba0cd09c2688866fc379f3cfdb230a6241d7b282d212fa9cc52756930dd4560a3d8583bfbda9f8c3bc3f82c92f1102381423fac60b1586c6e3ae33db4f26effb75d6d5160eb5e8d2e844e82fbf5b4c527d0ca94143ce0c1298f5dc87f7daccf554885cdacff5627a13007dabf580d8a47787bae5423da05c7f02916fe64564b3174be336f2f67f96749aca5adeb524aa0d5383140928916b298cf8ede6b1e6beba569cee3cad5e67ba99f582cfe6d9b7a40775a1bcab2d68dca43e1129c9872f7db20f925c3c78969523cbf5db6e7580e42f190d3776ad0b178d6ae9f22e107c9b167e16262087a7eca4dac7fd275b043f44209",
  "15.26": "d6ad5aa69282e959ea672fb4:3e04054c3952b237879ab9a9c5df0426:4d3fdaf588f82f9eab15836b13f73d1e2d2419cff18f9cf42e36fa4763df8ea66e134439d55fdbc591b54b78bf77f6f95194a7cfeaf18b4e32922b55c688204d8de4081f3283dbc70b53403ad56920870ea320660b11a7fd1cb2911db06e28feac7defe5fd8913bcaf4393cfa5c51eed2dea61a682d40bb10da15cb492c77dad537225e845fc666a18f659510df96007ea0c74e8fdea23541d08b69e4524564ac31c97ebcd4dcf9e5925caa2e67f77fea75dc014d8f92cf2ff71d9a13a94cbcb79234e7b2441a3ebdf90216ffd391e3acf7b96f4e66346a2981a588d7904c8e8e74350d5abdcaed6d8217d281c7f0c8b576590dd6eb196556977158385e89e66e539aca199338d4871e9061f1bec161a8b467e176ffa4a6578910487ed0ac27bab5e698099fb38a3ffcd23c3b8b7e7e949534c04334f2db2e0089146ba663e8375a5ea72a0626ca231523b6e326f139c53c1f1f900f1bb6a8a5d190eac9b3200cdf2cdb0f0590e59b8cfc34304c6c310eb3ec34764f46251fb283097706c5b3286bd2c48a3a4f91dd89012c5e5ec3a442b2be10fc1661c414371332d4b4f21879657a73947321865f4d8b2ce57d53e821b38f46f745c0f1a409c7d6ae8d0bea2c417dc863bf0d6de9842c2031944bd42e332d242c1bbc7169353062b57",
  "15.27": "058b07a18789f7522329dc38:fa9627e229bd550fb8ca19381133069f:ee3a5b360a3e33c051797b6b1ec0f5ee40f95994a2ddb6624c20b9b64be50aa97c4534f6e58ecc302f124c3541fd41dc862090799558e88c7dc3109f9ed290dcd5a586bd74ade039ff7a7ef2164156a1e39dfcb6b5e6ad906d0cbbf8c5eb715cfb67abb903575c057d8337ffd01a34fd95bbe2ecd9f82983be711e784b36d343c3dfcc21919969d4601a02d72e0d279ec57ca08600430cd2473086d1f82a192bb50f4607c645528031a826d79c444138cf1c02866c7a53da6f58db3a6c767bbc34d4f76269b47fa4f32a409badf1e9a95ec1eb35a1378b31e90ab188ccb98f1fe9e38034e0b84a690d8acfa554cf5102a6fb07e4ed1356799e2bfc266198789ac58b2ea076b8b32cd4bc0d1062429f91c07f254ed0fc92cd71b47d1dc8988501b16799b61bdc806aaad0dd961161933b768c6974a729519fcdc9d0f69678b655718611f67779fbac0e7113986db893770961c46a152ac48b99e8d0fad1e143d66eee166d4f51369384f70fdbec69a9f201999ce564587b7a5a0b7960aaf5255f1129a76a5d7389e6e80913207717de25e41b619292a9b561b6c5d0a67aa6a0c4bbb35eeaeb",
  "15.28": "2225470e2dec8b7b83ed3b3a:fe53bddfbe475c3974c751f63d195d5e:ff2f1cee05a71e539d84bfea2e6b9c9c3bc50a46f42e9ce9b0118d1b42c1d0648daf6964abd4a406fd9053053406b0d23540d0b8efd547f093f441bbdee0589c7f8eb58af359a84ec6c1a5477011e1da10f70f34ff94e8d7e1f6f9cb0ce6e94b3d39b3d3b93e62d6d89edff6ed9be80c0057f2d9dccebe05632320a8206065ed2c51fd965ffb2bbbe416c134678eb03c138ace49afd684b36e7febe3bc4a12f74de6b124b7b2ed5cbd580a16c3898999c3286dc2774fbc723c9387ac2d749b76f296c6d624f2b86888f477613acfad589f37c3ec63ad188065b3ac46b0be8b990e2cdd89f686a071261e7240c5183a8a5b336e87e7375b4427ca525d7cd42e5006217904eb939a33513f38160362f3f82b3f63d6fa923e5f7b2ab907eae86d047be02cccfb23ef671496b11b7508277e07b4739b3d25848718332f447d9d61aef0faa3c71d4ff09449a2453cdc59d4e9089c2c848557081dc53578e60e6afbbba2757c34848ca480897ff7c3cb70912ac65821c00daf53c3f59b31d8c0730f3e43d61c92075eaa01f0048c56414a4ff2bdec61baa5b803313fb4df45767cb0f1229fafb5494bca8e138a2a7f8294083f7abac1518b4cd46801cf320f8e80f5653bdc0aa1ed1b9b0b3890c6587382cc96d7d260f10e720b1d2f0c1959776684e1df251dd8f6f77e323095fcc59dc6f59ff6213f9e2322fe0f9f14f1a691ae0e4824d008196b98f6985703b695fa33ee86293abff43fca510ffd1a529dde52508646806bd5e90049c0800d065389ed4e87c92bfd0a20e2c37753b5fc6920bc6fb90f0f9e83613731021a98e089940a34278340c24985b8f3a63c68844ab219b7a8201361f4452a2388c610b251d55b9810a6a8f4a43a92ade5395c327556ae0475a4127ddd664a06fd5ade66c7b031ff8089c43d9885879fe316c6355752c14bcaed4fc5a2dcbd34893cb973f1cadb096c55f32626914eb1eabf1d8eb7479a7a7a707d1c594eb88c70739001da857f88dcfcac696b6d742cbeb6a3ba656c370ca8e1dd4bb51a7e051f125669ddbfac99c8e9e179b126a59cafe38bbce9bcb34510bf70307b760e26928ab7c35801641ebc4cefa4ba0e7a977f93e47eddf6ea2865a84c588fee1196a569c23d7c35f03b0797f9c7da46602707e7a5874c79ebd35de32ae22cab3e74c652d68ee121b04fdd361d59aa513224f24e1d8d304f46784eb20b4658dd755df8c69dfaaedb19246480ebac9ee1085ccb097611e484a28c78ea795b1581bff14559c5472a6e3121e39bd9d670799a4b3bbe97a08645a4d6fe37e15bdccd4c89cc26371f852534b0cc7cbd7f339d3d3ae3aaa0615522050f9ab04b4121b520eb82768a1d72f4bb732ffd76126d3b484a111cb4bfef36f978b93b99603b93f974642c2f136e516cda9a9de53f9bd139063741dfb6018b94eda24d528cc70a7df5a0b6946662b317a956bd8e5bb90047e16620c4920d0c0976ac18fafe9faf2ea5fc4ad7e03b5497b6c2070dcfb29e6a93dbf1eb75d2e861228ba9f8867d8c3e0bc3b129b02634ccb0b41f3741c7d89362a2f5b18b601dfef90098614396698a6f6b29757746c3e046d0166a96804e1e783c3fe4bda79ac22818c60fe98a9b5cbd0b9754fca41036c13b071309e733a8a9610389ed438f7af753f496cd746d0253",
  "15.29": "a962e75395bdcbcba11b2dd8:4fea52da89f7a022cfae74053d47f043:e5c4a3043d340cd61f747d0efa73f80e141c2635e73920754cae1577575d5c61d3403f2fb0949ad12ecd739b574ba2e7cd63b3b6d6f3e4f4a96c60ef0acac0526376232bfa52987d599b6ab8292ecc5af953fd0a61070753e11cc2f662766e94663f8f57b5c188f905b9c9ae1656e1f176103a30ce7ea63db2b42a6ffd6632eb68b0d3a4451adc799e456a2effc19a8939affdb1b00a5ba278d76e4ff46598cde233c6568c0fe691e3a0cb01b90b2125ace2fb747e2d30e37e9e80bede9ba141b74af0ebeec4151a68680b18d59288ad8889b48118ac054790aabfc0701856544ca0da6e112cb7744db61bd7325c95297b52b4fd72d81c29f4f1318a9c72507851d5390a762de3efe9df0a4686229d22267d70ee6c8e22216e0baef77c362973dc223e8a94de36680c619f08af944ef617fcc7a4058b05c85ea470b11369f4024cc507a579c3a913eff9dec9380f0ca967182f57e09db435a8ef34dc0fc4491cd8de9de48ce577ea1a40cbb82ee042c51fff6877cf9a2dd53e2b4ccaabae1eee7a02b4b999ab7f9d71e29e2633c835c30dd07580755489e8bbd79a7fd46a507c312188126ee590c37f04750387088513bb056f4e49a7033fd60d6f7d6b13f983c386a5c6f724a829f560b73c8883a5a851c7bac1c5a1a7e75b9feacc4b8787f0522962c8818d31a1684f78acd458c53a29fb1484ad2680a71e4f0369fb1655bce5ccb2788285adf8370dce12cc8e649fdc692331bfece3cd674d709e4bf31e74e54988fd06705bcebd46cd46722b7c2d1a34c1b2d5097c5211",
  "15.30": "06df3b1e1eb7924efd3d2e51:515ea1cdbb9eff6ba2b08d4eb754a1cc:596d737864ac76e5036f5c1968ae17cc137da6dc02151879694c01ac3f89325979c96e18b50d98083b10c636b49f371960a3afcba1bb36d188759a71d285c21c9d44ca4b163b31d15db242d106a9693f16839fc7d72f4abfe6964876d10ecaf4c3d38fd4f1ac13763b5e68301bc4c5812a946b311f8cc6eb14396339ee299490977e03eb9e336c8930b24bd177b45da6106ee6f4ef3475612d92f43d01ef93caa8244d26aad237a158ddf2d207b3bd4ed1a33595b6c74f32fdb47f6cf1fdd5aefe865aba638853d99ba4b9718cbf19e56685578b7cdc0ad8726019627fd90e7fd57a2592f76a8d5f8ba03c7b5f931aa691beb26a53e7da844ebb9b0efa4ac77222100a2a3ae538c8f7b77c9470cfdf8fc22bb4eb623258e57969691cab9a811240c8130199fe33144e142332517ea6187e78743286367abc02e911bde5723df7840385ad32c51d432e34c01499521708b0c0db7d9594b31dfe3151411ffe4ef9af9093e6738b85efeaeb8d36de01fd4517af9da55f9df9ebb1b1f07019d5af6ae8740b7b2df64125853aaa5d1dadf2c7c6739ac41f17fc94117c9f652d95cf10201143962145bb6c82b0c248cd4250866aaed407cdd69751a7617193819aedfcfd87add0b2be9f756cf97fe1bdfeaf7be013168b6b8c4c1d293c84546cda5f70b5d45a9fd985bff8c278ad0d8217f365a7a3244f925559ac629ccc2cf86b94481f5048f87df9da854b24f48cb32f0d1ad8322f228b8c2c896c89e5d46b85a4f3c34d07cfdd2894b8a8872893930fb28c9c152ca2e1b489329bf63f2b1f159c6544fa02e7b91c572f2f",
  "15.31": "f1b338864805625828960b22:3c6757188154ff1c366384661fea398c:4455b606a3de52230d5ce8da036d5a6380aef6abaa70fb41193d5e44a3aba031c7dd153512f2449b4cfc5890573eec58a8e55c0867e5584fbf227bc7d46ed1e12e1bb2c8c1e1d8656d76f34f2a637930259000459fca6db636f07e3eae9b398184225d275afa915b1f51354c83575e05228a71b801756019103eeba9bcecd3d27895bcf9b4fdee719bbe4b9015e3550313f513bcf37942b909d136d9a8219b81122cf813ab31f8d16b07c0fbb9f44f55002578de27527a21f3c24ec31a7f123eaaddba4a1ec0812a63f3ed35cae432583102660cb573d2bfc3ef7bc065017ad00bba741657ac5b1b012f678c313087c301e285b65eb9088f259ab4fcf202b9662572c4f25b0645495b0742fc49f9ca1a4b94c65b7b496f060dd823baf1094c1a86f53d458f6ef1e027ef718bcfef81cfa853424e9536039313be3f388b9e9950ff8df7d80cfbb5576b29e35b0a4f1dc8244e13bc1c28107f5d14d606a7bf5373b920305b348bc9b1db5c41a7e9ca5b48946e27376e10e9c8f1214625ef43e3e3df2d554e09898a6fac204e2d629a6e0f2f011baecfe321c2fadba0180b9cd50cb04dc0ab0520486663421ea8c0ca9814514b15d27133d21761e6df39de8d518941b004f56573cbe01d67a0733fe2a59f098fda5c497d2873fca14094de2027dae7d42f3d6ac4c7b5a6cc947fdb4893f5788bfae9c4c4971b65e8e62dc4b4a9d046837af3844722f7c37312ceb125cf5f88b6a1bba0a1bcf45b2ce1714598fb112478a3b4e2d03011e604126b5e",
  "15.32": "ee157eb4bb044237f992d0ef:d80f3f59835859f54965d8f8200f638b:906268476b86a8db08f1aff6ce6f446dc2558de14e4d0d78c4c14bece07b0e0a6cc413f9d1f8bccfdef05667dad6f0df2d1e74d4d4d0519ada777b02ba3863f79893cce43e5f8923b8faa132552b7e929203ae22439629ae11c6d4df1bec1a50672eb4a2adecf33fff63d95249100e04a164bb8460c9e7b2c232d017aac3edaa3c36a7aa56b9f6b7289a8290ae4a575b01d74c6a6e171d97912045c8a6c22951f6a8a6b17f3c9db1242d0366b2e4d9f22be81de3615da79421d5d9dfa60643b7777316d4c8a2567e907808ef39b90ad7f578e5de0a966f26b85590696660481079c2de3f1d623ecef82545753f1c27d5e4155e9c0331260b0b8f9b6fe09fdc1f3868bd3311778c01a255980bc527cc7d180b484adb4fc1167077c807819a8c935be16601fa98b1fe018f0d729eaeb678f53fa0c5bb32dbc4685f4e9bcd2f83ba3b96025449a33eabe54d9ecd88775ea124512599d1a6d07949875673cca8be789ee3eb59e5c3e8eeef96fa9db86e13811ebca291ca94a2efe056ba033da7bdf2410d0fcb72f0da03f17e0772ad3e43a622cd11b2b5bf2612e579edf4af85d01e1074453bb0482920532cca2fd01092fd17ae2e8e34dcf84b90b712da61155f083f41af1b0fbb1462baaf",
  "15.33": "3f7731b0d441282c4f714ea9:2c0ac087b2f7769d74cb317e8d0a8fdb:6f1b48275b8e075809c2d987b1380fb87461829a4e144c0c2972de984b3cc19317f66dacc594a761ac6fdaee6940696c6e3417b4006924f02b019d66a63ae66d990aaee6e2abd8c0ace176667490d4feb0a7715f134673a6d0c1d50061c4afe7728f0abfe9c74c80fefea54b7811c5feee04089f0c62199452b6387542fa6793aae90ce57e98a85d14d6615080f4723dd39d32bc4311f9ad1b5af367428c1300e36b9413f984f20363d034655e413a9c9ff257788aa3afee2a4160834dade318b4a24d7c6240a51e340bf1272cc05c7629687b614b8f3da08c243af43580f6a957e1bba70900bfcddc4b9e9b7244e85f8e1f54bbbbbc3751e804f187fcea89b150eafe30a25b81b530d1de942237625f036ee48f64b53879533192ad7e674dbbdbc981eff80e39b25a7c3e7a5b1e39f4e1cf0038789f0a1c05c31fbfdac1e5c6aaabdc5b2ef7ea978263dd9aa2a0012bba242cec16ca0c615e522730739ae327c0da297caed0d6f0ff8092463b38b8c2fba2cc4f2164056752cec6775e3f261eafa08ca3347e6238d409e1998e966daddf49bb99bf001bf045c36f990b656709aff738a3dd53144caac06faa2bf0b030cf8c645d55dc5d50ea6cd61917a68c9986a7258dcf12b63956647f5487f0422a08723b36cd18ed064f671881347ca324c99e30ce391665d79796a818fd10ee4f46dab73d2758fa366699fb88a4489129e561db12ddeeea338da090cafd23e484c403ca30fb1c7878617e80835787b07ff8b4a68b8ef8ab7b4deae642ae703abc861ad791045abe0cddaa8d5a97ceb3ab5dacc1054e2d922e63b6e9abc8146403b0157b57850c534fa282b9baa163cd889b1df447e405966fd1872bb190d9b7e7f97107069b207cd4957f4502c34b2f216b0b2acf813aca1d4964ee3983517f157260f576c0dafac266f7286e2527ad28a82b5eb42aa82f949230f42ab227faa793665578a9682cce59f758a0ffbe28c1cbe0a4fbbc554ae2ad2e7cb1090151c7bc7640ca6c0031ded684da5c9b472710aa5cfe8f02c90b1e0a9e0994b56fa9c6df540f732014e2f016459e6a9daadd9679bf71340f8823f04fd7482e4947e7203541ffeda7e3c6f72b6c13355213cb43f3524fe07735b14d8bad69fb8d0ca5ef5e1fcd6e2c1cb56fcab92b4f1d8193f5516f3c332a7c603cb310ee74ed496ec0682b15f1e7d3af4099",
  "15.34": "dad571d451dad3a1ee99df5b:e8979605e7ea3164ac647715469ae070:98a17bf140805a37138c9d3398895def240586196942df4fdfd2b0f5b73a6a34c05f698eb26711bff052dbc5b3eeefcfcc39acfba3273d0af14c287b5f4553d534651ce9180d8ff0a5802d7f0ec9d00a9aebdaefc9f6a6b8e2be68b464d1cfb86d23e493bcbfdb1e0324c8e0a3ba6d4bc09a1070fa14e7d011610bde113259376c977f04df9c75b1c5a2138f16b7211cdf5c6c264e000f23778558d95dbd11a0f322d378ec330a18d77957ecd98a3dca9cd4145ec16834998f48fdb6667af85edb67593734cf58591e3f2a041650bad29d325fbd5232b14124b4b3fc0f7bd14cd9190cd450f0e59001b954be8f4415448534c08e64c04e29ba531e82713e3566cc78941aec9e0d2cc3607088dfdd569969b446adf1faa053f4cf1e5c39fa25c67998d246bb99130a35487e5832767cc6d9b0e7108cef38214f2c3b981991958c8890c90fec0d95c6dfda1613858b29bccfb59a00abc84d8196254059bc0411eb4487cc21d3291c46e73c87d8e20fc1f4a861319997f512925fc0a1e86e9224692a17bcfc5022056a6945dd3f0db5f732a2631c76cca3fd95eac6e214f608df96465f5d14afbb7aba6a2d03cdbc3632b7c5aaf91c5627b992b6bda24c2a98e889220ceac31908e88e5ab49fc55dfb4481edbc3a690842c1d5f872ce1b3deb9163fd0ad4aaee3c4c4907b638fb0544dd20be66da1a655b715071220130c639d2b53c8b7aa464c72dfe5a1f0abbf60ccf8bfb515cf7acdedef9e5281dd6f576c00f7a2a7069d77df812a66b14156898f84ee687c7ee09cd2c46ade5a05fb3710a8c269f4658d5470187c6d8823f6768dfc2cae1bb8907648986fe66c5b2abefef14678c89030976f3523ffd1e1f5ae1eb7a6af708d5d30ade",
  "15.35": "72a622d58393de452ca15227:ba79ff276764a620942e1a26e46c0633:69ac6291d76e811f1d9f6b7c4275556d48248708bb734df96a41c1224ed3a965bbac621614a270017e28ce9ac49aa07ca9d4be03ddaeac8355e1ab6dcf1409b1abc2c659bc040b84c76c5d53be634608eac595584170100624379e425dba07cceee12c97171d48683e9a9355359e6a6283ab26fea0c31befbc7c66ed644223456a06ba39dbb7684aae47b869f6308eb2c95e975504d5aed182fb2043fb86442ab9c00c5919164f87894633db5ef8f2a93a2d994a12309f984319d57a0f0e10dda9ed7cca31265d4f2d0559cd41dbe0fd659d228e8a4a26f051b322764376546b8840819408d41837e33b2138bd82085246d22ea9e5095e5c94e8a13275af2378b101638577316f84439df33b9e386de508522dec7a5f7cef03dc19e29dda2f25bd67b9614c7cf1afdfd0b092481f259e1bdc5880911719c57906503f17095d57c20a46f68131c52aacdcd75266109542645f4067075d83d20d2423c6095e5fa4325b50a561827fba609c040179b76d2d6d80109400a3cfc5120213ac305e7cc50876b47dc7f233c3226dd7808b07df364cf451eab13ec406004fd458fce5de010be1e7debe3c84a398416db54bfe26448b60ff0e2d1980b822930d3aa942bc106205dd17c16a4f40f68a284053cc3e9dcaac50abcc7a888dde4c06e9f783f66d16ba032dde039330d27b863afec53d75bf28c22182e9205372ed71842f82f4b9964a808cf38a57030052dfccd078a257f394fa3d4ad11f52301b098d38c2bbdc72b5824cb89be77ec58fa40fd4b7c491dc47071299292c0ecc5cd24d17facd5e7b55497c04abba1dc964cb051acd5ba7a64a4fb2999e84a2a64f15c0f732ae018a78e26a581bceeb506e",
  "16.1": "b07913e6b7c336eb115982fd:36904b3066991577ec836b48c5840e8f:724748f2a8564a040c9c32cfb94e682fad09f93ebc8ef7c9ea7b1bf4a615599ff5030786b71484ad38e161a8d83aab383764bd912204403d3e05137988eec27d51c97eb525cb69b99eddf3199f1dbfbdad46594658e8691ed1679994ee61d0d84fd11e619f7f2880ec6d3050506fdceb31c8ab849440102714c9e76a6f8e18617f04c702eaa3e628f5567be1ebe1c46f798e3e5d89e5f09bfa08b356654b150d513f5aa38f02fc550e6d81cc8370fc2613f1fc3b65a3ba05c9a4c20c4e9e5d2819d32097150a19ec9232ffc3412c02c1764b668ecd14893869efe7777e1086d655919239ac97ad82ea12081a52cbcd59314a9a2b71d02c4b8a63474bed1eeb04fc689283048b7be80dbcff95b598b7df74dff313ae0bc661dea4228a9b33edd86da5e9f1e85d7a77f177435e44158adf89d2463eee6f165cccfd248f21d82585bdadad8e98126825facb0a0e7d42e894a8299ebe4998c65fabb6fdb04c66996f8dd7a1ffb883e352a85bd733ff230d3576211e2fd35394be90b2ebe6077f31755a96b61fa7cb54bda1c5c492228aaec11e1efd78ac1cb7884f881acafd1182597882faf00227850e20c3a0030facd0032b35d45baa748c2152150240d79c5b96b1d6c066d00da984e2cf1ac53afe5ec79f576e829cab6188543612be982025f9c1cdf6cd5381883432dc13f2abae83c58995514e2b92345d9b129cebe2e910d4dd4ad0200dc8cfd6c1adce9ecf9e7ea92c08ac86b74976038aca3a59d97abcb691251e8ac2f6e2f7f23b5b48b2b088f7f6ce83a2e9ebaae2d0d044163fd78ba64b3769ebb58b574b6c693d46f8415c45a0f3119bd3f1286e016c0e88026197b6d7528cedbc0264744ccb30c4efde3d5ed7906c636ac31b946740ecb4dfb7ad5f35b64bcb20c2b4015c6ce1e1fee3608e3b30bf529e71c581424f717365bbe13944374a22256bb7a53f72655ee165da53ac55348e7eb6bd80c673415729f9494097a344fcafd701f080a767339a160d6569b913acc93d7f331f",
  "16.2": "ff4ec1e976a1f6d5f408d661:26f6e50c3d15ec8c71147413f1cce2ba:a8e3bdd2325882f5d0a81c818adf7bec44e82536d4e5a1a8e9ab972546fe0f5b0537607b385780c571c192aa2b6d4bc49d8c813b3b0a35bdea256b12cc50a5766f0ed601929a0ac79f8995aad4df91cff994d668017d45bb3b4db92804923589ae66e9ac13817d2da603b392faebebd081e75fb201b8c33f6ead63775426c989250531bfe2efae1ec8dfca94fdb9ed464a9bb8a487dde3be976c823176260997952c7a633dc6e9801e25f490242b3771a2c62b75f4c46c22b02262619d666484d2a41079f3e76c491bb3448f7cb3d57b28add0ed1a1fec3919e34680a93db6d8ebe670f475d9d0984d0e1f04c9ad89daf0d04a7735347d36d2a488e22bb6034d0677c8fed72aa9e2d93147d74b08df1d7c416584f7de0e6245e40cbe3327bc91e84e9067c48947a162aef27b9acd7b4b2117cf617d2b0e0b01537d7d2a1da42b7c132b2bc579da24fb1b9299f4a0c20f9b15f7fe0c373329cd451971249ec6ae65632beb32589397d289ba130d055b4beb71f43faf6ffb2ee1d5dead3e8983aa2457605025968428f67018273165a50051e66d5c395e44a6cb5588a6c837f18cc7ff56fe25ab58511c996ef7b8d330e7270080cad5aa7474bad16349dd416ef496aa7d5215608eb6ba483862b5baf926f8fdc9f189158fc97565551ed3bb57d98b1f6ea79edb97d7b79a11bb27043a66233d6f3ee9f00e492ce71d6dee8e2a2535eafdd3d64067ad77206f556460dbd224ae1ff60db252361c199a55a20b12fea16c0908f8ca42857bbc133315b6366f046bd764630a35abfb37565a57c15f2716ee2e6a0543fa43a61a4b781ed9d1a110150df5106599b58457bdb7f56f374692a6e7ca9624cdc5de9355526e040583a9e2a34604865a34b5a9dcf08967ae4c5d7c6fbbcba3f13a3f1efdadb35f698c39c9c34e2066e361df6f8f36ac4348992dbdd18b1acaf75e4cb82a6f6115dd1f290812b83fbf69ee454bc23ac6dede62e10ffb67d0a786224fda94bf6a2f24260467bcce2369",
  "16.3": "ef42cb77ad408878511323dd:bf1a854290dce777c212ae05efb901cb:b040271e944e51afb9c3affc6461c6b68c2bf40aed1b08ed74ac0272881f296a235f6045068590a56c2ff9eda00c2ed7a2f5dca6bfc0da4d34e35183d59cb6a1d34f437af3c3d95720367d71dd0bec5339e9d521beec6fd9f50579364fd4e9447c878ffdecea57cafc16bf674c484328b0ff0bdaaba7dcadeb3729f9e68f64fdbbd68cb951dbd5a285a38be287ff33a1033e094af531946c2d71eaa6c8fef84884efc50c096cf77a68fcaa737e570a941fc9f7f674f5cfde64cf1bfd6e28320895babebf80348f6603003e9ac455056e1fb00b1ff3e345cc88383485da630dcb29b03d400aa5697177dd3d08b76ef3599404271069eb3cfc949d145879b7f1d2f3fc3a718dd4c6cdbfca723bc506f63afe8c51e6ae9f66df121e15a81bf5c08e3d1cc3650f70b648bb3ae5c6de8da8801adedfb1b27f83e7fd31262a6d13b14bb5ae22dea5d2fd5b8ef34eae983d17af4c39bdfa9d0d0c0aea0f4a353595cb788d72d9cf5cca74c09125c9cabdb12ac84c41b7cc4f46b49b358f861a7afe234c19d02411ec8967325b20f15637d969b4dde1a4b6e6d3da05562425306c15eb33867bf89ff404af0ce15ee540349a303255366ee473f14161d4271e9c961fc349dedcaca9290388fd110bb6d69639cddd27abb8d0c99ebef36e505111f7e9052232498cc917dda6229b5d73d39e151f61e37d444e16d3f413725f0b54d150dfff3e6fb4ebec6b80ac3708fb4494e78385c9002ed5b62cf4d7d5931cc088454e4b957dfdc0d598fb1363a154e350d32714c4a007fd7afb080381833621bb866e98ad967f9e768e08bf9f73d18223ead57916de7c4bb109dc14a01ac6c4d7f10135657e18eff484ea0fff8b36d1c7caf2b32f42e3e197f0f3afb3e4b2693b8eafec56ec6b0fc4d5cfe6c68384047c99848e3733aa1e46b2eb81c539e051cce97729bda0d4",
  "16.4": "2464015aef40190363f256ef:06da876bb3a2dfc7229069c25b018b90:f2f6581e649c7bb98861f168856c72d5e4d0a3e57429a9a1ca4dba1089385cabb19c6ce4e8f55131f7d9298e0be2576be087d69a8607492548bce385ec54d5cdd385e67937cee64f069fe89e9c73d9b32946725bf79e7aa9fe475b11fe97dd7a59585dcdfd1d5aa79d1129b0be6da6c70d123799b4226b429761ee2c0e2e7deecf582834e40ce108b205b658e5756b764677e8fe33ffa0aab157b98dd7857aa1a01dacbdfb2a19ed0f3f27ce758add97d4f935de4dbfde436ff67d40ee9ab40c314dd9421ac6ca52b1ffb44a4317e864173b3e1fcf1bc206735a7d371b7dc28dbc0f40e96612d933659f617d22a39ba8982286392db7ba6376670497f9820c59a1ae90b8421e2ae3e05ecc50a2701ff828059e62440f4e42ee0431686e7f64d5e7bf243cd8923af27374510ad6303b1b9cab9f6cd7c5b4f03c94a7d18003213eab7073dec6ef6d02966b35a38296bf6a4a9091a9ec75b16c6e4bef01df4b8aa0686cbc41b06cf4a5c71cb2b3b263295c331e8cb1077b734055dd4c9bb5f94bdf1e1b738a7f51fa52850b05f905e0384f71237eb811f5c3b9d48b47d824da915d2403bc392d9d7d0cb956151d12fad8458baec9ee1e095888d698739ea1eee9dc7d8e6924d6cf262bd45f87e3a90bcd75169367d3260c8b5262845eb29546a5002fc8d8a5cbde05f05ae0d5b01b6b256344f5605097ef6b2f25869ebadf55a5fe7cca8ede74",
  "16.5": "ffd6419a4bf211f2db5df603:29590d4b9941cbcea5eee612b76582f8:7c22e06279d41477bb22c6fe5eace227de8b695d3e4c973b9b31a3795c6900b191754f4268f88234e1b300a67d7eef521fc41ebf768707e9888e29df783802a2726bbeaefd5611c2bc361be5558ea7fd1d9de8c382f77d45380ed20094bcc5c94fe392b30f7e3a226b0b89fceb475b445c1609cfe91d9959db2983be2d87ab0321cecac17938305ba908a1dcc9983dff6addf45c158be802333f53a6e6b303eb866c62e14c6b93d9bc3d91908cf59c80fab59783b7f7a6734996731a63e140ed8255abffdcb085a26c24b5f2a5a20557f51dadd4365d6de9b73e0225dc7db2eb7e9f12333d6e0e22d1da1572f2f63c28ecde2fb0e8082c2e515ea63b8de4fe800efda08193a40c99d07a1663253af7f0e58d6f16e477126ce5295f3e7d646def5d",
  "16.6": "2ad0d59fa150bfc042d3a5fc:18bb3598fc765782585dddbd15d46fad:e1ccf45db4df5dfb2f378ee4d6e10247879bd3259db6206843fc1074fe4e8f1ed66d98a67a3eeb3dbc7b989b268ea56172588cd45ca3edf5062df0cefc50f264d928e4451aa1520a442949b2b500a461f6397acfe358469cec62e5e1207f4dd6f825984aef3791b3f108b4b9f923275b9722531c93a168993f571704bb61071ff64cb17c9cd93a192297c8134b7c3239da14d71ab6f2a9ba366ff275d344b9800095180c4dc9a219b9a3605ecde5dd0487e0f867275baf313bf54fb4f8b99b2214cb38ddae836286201dba508208fbce58f6adf0289fcc2470a86406489d97f5c6e96d18452a7686354ae7b014b2d5bebf141cdd4e27ea034a040da89d631a1d539174dc7ea598e0a51f651cfa53d9e2761ed854f7884c681b3a0c85a509929ceb1da193f8f446e2b820c541fff39d322d0d8312bd1ec0d47d7af54856a723f93ec83431e394c0256b9af1af3590a7d2d98ffa789fd3ef3481a97d12892bd815d6f9264330ea5c7195ae6ea48fd88e2fc2824e040d90d6abcfecdeeaef948d1ce92c22ffc8fe19338899b202e13f15e38bb9e2f13b7c8b1e77c93f85ad7f8713daf956f9953490e8dc1dd327ba8c55f64eede1583eab54284e949a662f324fdcffb5143d9cbe27da23798e9a0d1017675682d2c0f004858ad222847d0a10a3c03b5fda5f2a0f66cdfd5d0f19e06de0457f3b42b3980713e1d7897a0f5a1e353352f07c256894d6404597b70921da681c17b10569900b0dc00eab77936f5a4482bfa0dd6fcf8f24080ae7824ee372ddc83957e9d023cd3f4344d2e09c4e22fb6e9db28327eab44a5e5db60cce0de18b42c3f00325f9ebfeb08bec4f823607822a6ad48c15041e4c77e9c9aed9fce62a54930c163ce2c83a6e72dbaecf1de1c78071944d07628f734b197cbebbd7bec4471baa44305014528b7d54d6f9929577d24d7a95d0631c846ff0a87d2b08ed6b1f172925b70dace74999c8ee99975f703b833ae8d92fa4fdd595395ca9de51acd554bbcf9a4bb6aab7df571c934be346d275a988ef65d059c43f1793e15d592f1b159c02cea77d4579bd2c42a575235e9a9c50d2ace6e87151a28180a0a20815ebd67d2494863c42c7dc638028562fba05cefb80b72c26dcbbf7c19037324c0fdcde3d741800ec9ebbffa29c3bf5e24ea906c863a37183116be7019a6ffe1ffff5f8968f1bf48cf3e06aab38f9b3a942e06f70",
  "16.7": "a359189a1b51f47a77973dd8:ffa8d33cd7f6fb141a37dbdd5b9baf2a:373be6d413e6d37145e1b7db595d44cbd61d600ea94490aede2e78818f27a5d27474f5365a18cd2e74dea541a20ed0f33ebfa02a320601bd33a1d7410b2ab68666bd22fb327276921aa17b9edc39b584fb69930ecce13f99252653b430448a799ea79fccc5ec434cd0a131b12d07a33ca5ec94e5bd58774ac878ad0d7bc2d600840b8a54b5192606a012fe680e95170b115b69e579fcb9ac931d7b62fb8af54fed9193ef847c116eeb2f8cddb33262600023fa52b03a660c71335d26931937b6a59d89ce76c96857cf154fc02fc22497864f9fbdaf44217d16cac159fa7a7e405e091c56943e9b81d72366f4c042afff07cfeae23b1fc59bdc71abc4b584cfd8b07692d25ab004d9a2b613efdee341d8f66a7c3ac1edc4b7c430363c7fa357d15054610a7b2e11fae97fe558df736f25f802947738000ce0d11ff21a40a10cb592226750ec8ab13ad25d8b6f426add7eb7de98348b16bb7de08925b2a98a72e03a5ed066421c6e1181503624c5eb89e890bb0fa224effbaa9ab9ad1cccea52f93a6636ed9adcda8e62802b4669594c2726c7799704e897dd91aec90fb47d10b98d99bcb9a052ea93c0051c439e8a6a8e14ee98593024ea96557a92723e71dbfe722883db375a59d61b9b52485000bc898cc9e06e5702a1ae80179ae20e530082db8d606aff99ee2407ec82bf5a2d6a97dcae5786ed7240a9de0618c6891a6fe909a42afd29012d2ab65b05a7c11e49fb0428b01345aba803d87fe50eaf36f92e17dd1f12607d73332bdd582f31",
  "16.8": "2f1631d49b46ea36f2d6593b:57eed0270288a0d368c29ccee52136ec:a01a2e2cee53a031f52ac4ff17f0313d8649497f8dd1be69b3d5b90beb454c23ffd1146dea29fd01495c2ca04d70a0bbc0fa863dc7dca06ba9ff8cb6999dad0d769ba39fff4822d83f5f6d7e5c67df854ebb3034b0e615cb54b5c1e429524c877c56f60962df963b7bd7587960bd74e25de9b0a7c9f149b78d50264965797e0d3fe8f3dcb36c2f2bbf1cbde379b12048e915038a697b1852bd983b040736bf35b650216af43d2bb8bbf52dac27835d4812be015db7dde11d6cbce634b577c8dded6d3f6643221d917e002279de5966c8c4783edf22b15b61d0958a667df18a6ef201194a32988bf7b108cfb879a6ac0e898550014235af0b3ec6f5763fa3cdd1ee51770fadcc641cd6dd61ef0ce46f9ad6e1c42c1732e3e2586b09d87641bfeda2189263a2c39d7cc0ec245b8e81a9e6f4654ba916a25f82cb8482fb7d51ed33b4766b7ed57828edc88fe24bd95f6b87723ab77193d32e52bf3ae88762345cd9c1fd068f2d57fe9a7d72e1cd773b7f409eb12120c715fcb24cf30a8303c19e9a84c1d9a0e87e311358a65056cf676694f1d7ba86eb06349a7e9c7be4ac0e443aa779941d0e7dfec39343df2ed9965ef88e39c6f3c2b62bee2e9b2401acd562fc1e56b0fe78c0927ee4e422e2f0700d69abfc5d96b6139e0c194d73cde87f8c896a56f2cba205b9c0a0d0ab067d30f110a9b6d7efc61ebec52a22d7b9e0",
  "16.9": "7efea156f56201ae5319cc57:b620d7b20e8416a27b18e7dca3ab3797:4e6c32205957709fd438e38281b6e249249bde31296f6d7a2ae31c30b4053b96499efde33872d5690cc22bb572f91f74dd26581129af59ac24c54359da9b19f6feaaf2ccb8f85bb93d79b9b0161f17b49d8a14b2f98b565d22ba0651d7bc4494dfe82373a769541307513e7e6e793a642cc959550bb9d9900216a2ae69d5c4fd1891a907df08b64cbc9041438f4912985b76e8cb5a48a39883feaec46d2d033b24588669c74b6f73ee273716526a6f76a6782f1267f6e3411fc04a79b84764fffd86cc448aae7a5610d889d0da7c3e1163293868dd55b957389bf3a9a343b452dee6a8e08dacc5095bac1a2babf0c24813a89c6c7b9f5e3f6985c126d95239c2b6a0a6ae8796fa6a7e56576275a934b2c4cc05632d9f8b9984565b1515fef903769aad23b1d785d2cf0edf74fb2087874c60e3ef38b9a6d4713967948ca2f413e735c684f3a22027dc11ca5d2099f4df9ada46a217f591b94e94820661333f4e0a37e6e63e4e120b0a4a01fe30aca532c0c094bdcdedc270b0730e2ba79f4df0464c56b2c4d010c6f619e1412317e2d79802d3e8941422d0ff1e3367479ef9b6468593e04e5d743422f54e13c6bf72abc0fa1d651fee95248132089880ec9deedba8dc63f3c268232c84bc8977479b1ff402b0fa8a77f39608ebdfcd1d7ecab619eb368d6620481ea2aaf7ad5fab31ae8e5a84555120a03be1f124a01536a9398c51ac6692904dad93504c95d1fea1384705bcdbc17bbea803dbc57a103ab400ac60a306b8588d099dff77f0e08658a9debfafd38979edaee2dc2f1e0386f2be76aacab047f33b9c5424de24fb283d3fe4d64018369f093fe2b83011142772fea07745c32e0e549477e5b24e83bed158abd644e72c9146040b1740b17819d5d96250f1fba00e5859c54ece29f6aafbb762f0563e2b3ef2886ebfdd956dbbf8693a20ecfbe67df37dce084353a677144b4e245c0ff78cceb0ff9cd0fbb5fccd66efd91b6fde3c055a25b21d43355e3a46f2788d354e5cd3b4d7b8bfba73bbb5d65a3b13301c8cbf931ed0414847a9b6c71c7977e66733c6ce23ebc4e434ab4eb45468d9130b1d4b2bd99305155c3af5e77d1509fc490b5c23b8284824d89b5de229feec6a19fc9f0ceaf74034682c362eac572e1317c5f36b2da1cb1c9a5ec06f82cb0a4cda64bc",
  "16.10": "1208917366f5ef456565791c:1b50a157d41c80b0bc7929cce23c68dd:ed6a71e912cf5e780b834c91e971dc7e46bfb3381ffa3ccedec91ba4d4f5e316fb0bde3a4cfd0bf46909d99f0c8b91313e32da8a8266a39cdfffe5405887197a6e0d7949fe88717a106f6562cee9f0e3fe2670966afc3365bb85b888bee8da2d005e82a69801993c3ae65da6fe00a633b99892aeff9b530a4259f881fa0b8b37d587887de875c5b2f029bc0fb5df16ee96668f0b91dbd3c2c25916be7f94b1cbdc20a271b1ae4c84b82e4e627990c4c7dcba95c493e3c21825b494bc00e556739f6228108ce0533703ebd8a57600fd77b23db6137df3de6a541056a9054805437882ef87a5afb6ab166f23dc43c6eb9797d0a4e7527ca9ad0101519d95b3a809ac91dbc424379875532bd2aba9b2bdbf032883b23e5a8025a35dd4781e34473469bf97b6d34f88e27b9a754aef8ba0846bc2b4e6fa8ddf9d01f8b3886b632cb40e190cef6957ffe2872ef9dd7c8db22d2f1bad0782e4f2ef9545a1e7a10d6635fd1a33fec8de8dfda9f03322106113f646b06e608c37641c10a870db26239ef3657f13b14168a86c995a771fc0b85b5c7185bc3f3007238f6c92f67347eb225c04bf38c17ab69c704d8569912855cfd6d5ac156e8dca88bd941092f11dc26943b64eeb68aaaf1c4862d29e17dd0271f137f6f9448a6c8a42b7a0d051cacc90bf7798d696da94708b5fd8204ca1cf0e76970e2ead37df17c0c233ccc0d4ee8c561db66ad4b5e68cc40f46a61559c6c3642cde3bc223fd9e0a83c07e95680cd8856780585fcf6bf20b2cc47e0420c693788c4b736b",
  "16.11": "433826d83bdcf89b7a5b3ed2:688e6b7e56bb450cbd31b9930194c2d4:8c2219933cfef789ec18b91a15ec669cd602f529a8931e8206368979bd438b279ec1c3cbf513937e53d7a26efeaccebb4baa140626d0ef81776319a72b2e78966a437948e28c5b5cb7ddfd5a3477c52c5476a95ab1ca67bba2bda15850200394f6e7b3dd76215a50667d22829e76c360136239d2bdf65b45fed2eec3f6b0f5cc87e3ce98dfd38b2908fdaca2b0d49bbb40f9428054f14b1fc4bcf1d045fba3dc0b8e1dc09b83a4b1740cda381fc36f4c0fbe163c07623a822b3fbc4d79802e4108a9b051d9de5f1fd3f353aa6db2202727aefdda358d38c11310d14c319d0656e6e9847cd92682a1cf661c3de9e1ad0233d083282b3ba69f15ec1847d6c4cccef970edc6180e709c0f73b06d3f51bdaa215e56ba4a0f4572a43fd1c7f6098cd5ed83768f563e526792c1023721fec9b51596e3b32c22b3ca14f27af496f885b4d6fdacfc4f8800be7aa3e6ccadbf64a40ec4089675b9fe30f0a245277f1a9807bf758368b729e1e5f8ec0a188c445e58008fc50511d47e045c77991143c92cc0352c9f76930bfbf22b9a4ccfcff6f7d1723b648e136e5fa3c45f9ad8a27f83c7ab2bdf837bacdc3c27275d83092ef2c43822fa1918f7cbf5b7b140dd6bd2362312fa0c4588b11032ce3ed5f8637cd5ec86a53352ff7bde9b44b7da3121f27543ec7e702be5f7fedae7e89be165abf3e709b58070710f1156cb226bbc4b9080e1e032f628424571068ed57627497e47e51f97fd88ce4585bd6878ecb90fad8d86812baa821ae41d650e505ff16c87a933bebef3e3a2694d9706a9c9d6b0a47266d00365cb4e4b62c52a179b30bdf8bb71c212b9ba4da5957c3315999b464087b2676db6ea70f92265f149b4876a3e412d686306646a81ac7dc95c315d2ad6b65ef432d4ebb4834804164e8c0910e5ec675db03bb1bd8bd439b435519ef87ed3f42e604134e620afa41a06783a7d3693edd269ac7da1abe83c4ad0ce3427b0ba28d7a19cdf5f99b5ebe242c021b0a18618773c34adf401b8859bbdad298c15f2eb41c52ab0d8fcec9c69b5a1cf3a8cf6749a04348a8a1e955a87f7e9f71cda4f1e02c2896664fe5aa2025bd2c2811faef54fddd45b355d85a5e94ec9fe8773cecdd2f933dc9c5b4c0b6a476ed3248077d407b9c2884e8b687a81e560310b990fa04bfa67203143a447d44909b1d3930f369efd92219f8c02e65f94864f27ebc6c31beeb1cda5f0afad15e2dd18f82c8b609907a5888e61453c44f5dab9094a3c0c2dffa048cb2812442bcf8aef787002c59b4bc6bcf9d5980e5ff0efbe17c7bf6c486ae6d3b86ff7b3d55e6f45bb3f3c375d87bdfc812c13f76f209aab54dfcfb413d188ab3ac53da6f823c87071b59e15ae945d376920750edc58c7586d8a77e65f463906bdb689fd9507c320d8fb0153fab67e9373cf4d9c77f47eaa1328bfe2ab7660deaab5e3b2e33f2a89a17dfaf6e13d1c5e1294afc4172b389d135e87e9b220b4611cd922ed7a92d989916593c0a8585103202b27af46b6ff2bf09d597a37af4f1d0a8a17115c1fbadfe7918fd1465bb1a823caf9c48f254ddc06563009277e10717ff0c3e4becab95771903b5195433cd89497a8e9cc7f8bee5f1d4097938eb2499dd858203aba5c07baab4b08c95110bc9d32dbbdfd72a56aea57d441de3825f644db269194d6b390ba9ceb29ef8ffbd3fc06f83fb71db945a99611114e1cfa73baccc41354cf095c305e67936cd7612212e6413edf1b0ef3ebbb846b8e5ba99bb39ee76e188650e0659bb26d869aa7b3a4abcbcea1f694a267e7f397626f67d083e3c00db52f0ad7b97a8fc14dc3561130657dc5a1b6682f72d0c82c5290094e35d74617433ea178891d4126d16c8ff059a73531188c2afac21f52eb11465979275117165667f328dc72d1714f3048c5c19e9484b95ee3eb85259be9fbacac0adff6c2082ec6cb7cce7d4ab4a8c414291b06da0cc7f4c68bc88ae12ca6ac665826576a949383c5517b66d440240f696b4819057f4ac9aa2822ef9c0b9d417d061862f991d327d70874aeb20570ca272cf65e4b6a90890b94eda252f4bcf450850e21679e2495676eae13cfd9c393a73bc5d95248725a33c1cb6b18ad020de59ef37b5e75fbc6b1065b5a12f6d2011f3e34303c8e7de4a658bf669c60b14f707b6c1bc6cc098654d1f3581a85c1411c3372cff5cd9ef30c92e0cc07ac735b350206816b2b9419649a68",
  "16.12": "34acdcb204008a3aac45e255:abd7031f16536e2c8bb5e786a067b343:5718eee7301e818fbedfce98e2fc5cedce7eeb6b63ea2d2a1fac0d61fae743cb084396b652ecd13919f22e46fc0902e5e6d906bb09235593646f8974eddefef0c5138450c00f06abdd008634c6bb738ccc37e41b237a8e8380c43eafd26d60d5237d7dfbb3f6e10910d5368336f8ab6bf6afbce504f786d3ce0133fa2e33e3fbea1b19c33196a8111d215826d34ed7eed0d6a278de7d1d2224e15f9356caefb1a3abf326127557a50dfe5efb400e2d2cebf19c08eacad339c3b7fd0d53cd1f67fa96fa31835048821304bb0a2066ddc8e730c4aac62066420764d1ef58b22ceb49543eb2f42afed1a73822bcef9aa64bad7cdfe5574ebd7b72aa320d134c01a2293ba62654b760983133e5e1af40ef0c4e89069030b0956dd0e80b000768113be156fde64fcd10d6c512c16c6ea6c52f71bd347d60ad1e26253d63eb640dc05b6d3f4dcc841e7b010fa0d8c0aff7dd3e91defe554b680aabb5285e4b0bccb4d4dde7ccf469a9d8c062a670e3b5c1ad2134916ccfeae3f23b6cbc1c9946dd261f208c4d5dd4d8c54b48d292ec224d27e433dbecf129380d9f7ce98989b3bb3f5ef3b5532ebc06ef75ca09ac582ac12495380e56bb2f8754429467707d14a90129cb2c352a0e5feba18a656bc0747145bf065a9dd9883d731239ae5b923f0bf0a18f9434445ef988f68075e00665dc3d44be18d6dc6758c178694df597b8ad4a5498d0c5282f685786307718af650de192b6ef06ff5746a040bba4b1f5d99cbe78dde6b2ff733673851e69413c3e7bcfb354cb4367aa92966425e6a47ea1c6ec4d7ce0bcb61ffaed13a178dad32a53e8df6dfcf7f1c53bc2cdfeebe2b71c3b5b5ffb6d04d38a542bff794cee4ce8e2fcbd03b6434e9dbb8c864aa244741d20f0b668efee42f68128e0a5b1d49524ae10fa14e358efc0fcb7c50739d7f815d2730d01d6ca1568103eb93677b1fb5731c580cb097edcf997652a340882163ac9137e3225e50177fabf624d2f51bea97b56862f6ba82897e9bb4357",
  "16.13": "a8acfd45c00d0292f7b7d27a:8f90fa114124b6e9a500bd9ef49cedd6:94f09dd557856530412ab5a61d267fa81b332773c2e172877012dfb9b126137f7a5542cfb0ddc543f2be62b291ffcc9289a4f75faa96afcf2131228419f9a7542509de8485ea1da06605f51c878ae16c0fbf8df5ee3f6e0eeb3ae185142231fd3f7f26805c7e6f45eae58a1305afc93eb0dcbeb425c1a077dfe1a9d5a1dc277a2005ef490caaa44b753f31846e9b6676db8c503104122c223912db9ce7e5137509409dffcaa5f390db926d3c35c9c467868271343de26d4f91d74fa5d5bfdcbf2af07fd2b08c0be3bf1b65e32647b798c99b2437b2be92ee372b7a04e314648c9075e5ea0e5faba21d6d096f9114869dd69e34c57ddd5c2e8b8cf7187cf889e88749ce920bdd25d5127f17eb53b95f063f9604cf81f60c460bc25a1617f0248a3a5fddfd7cbd117c08408f9e76ad6056d5e2e5fdd19d3ff96bd480354301c0a423572baf31352db3dd80095696b7f095276111d2a257a8087e6e1f6cd9ef5e6c03bbef4dec75beaf3ea5a147296ed0c6d8a7e6a2f63568713314c4455d8dfab99fbc17791ebe453ef8ec36c5630f641e4f2236c703da679ad32d4de06f95c1a67f507e2df217b3e4911d588764af537397216253ea516712850f5d45b00a65a8419fe391f6c56ce850fd8cc1eaaf7f20dfa52af198a11b328c3f9692d24f6b871c0edeaf5e59319e73db67aaebad5f9602303a1852cd111117924476b0914af5311ba1d6de5bc7a4482703022ceec7445d374b1bbd88011e2d1263e69da4f21f3f957110a1b9fb868e3f2ea56bb452c64b5b34abbf062fb9cbb679152b226ba91fbd2255712c70ebd337e8a0b09dced9d855fef9e86344aa3981b96af7c64b383ca07ecefbf4921c4d932801fdc1c7dc1d98fbbba6ecf2a7e99983750ad097e09b134430e7b60a8d84d76657f91dcc8292dc7461b219a2281c853dae17b15d2c2020c21f0739130507431c2e639a6dde414420aa00cd2f2825019ecdb2dc140bb2bfaaf276083de7530d19238f5a7b4eeb335004a1de81eaf744e8861715ad0ad00f63d2d0c8c1dcbbcd7fe050a4197dca2ed52a85d55973a62a9b491522ab78aeb90cfc09533845df9c3d455094745d08da88a4f07334b624c483165f2a1f11075011a80b32afecfd3f757a149cd54f74a2eef23ff651d3d13b4f06ac012ac83dfeef2653780889cfe48cd2e5279f1b103597c9431f6360843a927dba0fb49cc0260c74",
  "16.14": "d4f6159086283f7ca572438d:fb4fa2c12b39e5a36d13fe9182c574bc:f096f03faf303f8e2687cf78c46bd53bc93080b3182b2ef6e159142d66f9d684cbdf48a45622f8f5b863e3f3c41347d3de01e1d75a7c5ebeea43e66fd28610d526937d500f849dfa3bb0de36d69d5247cc1b0673f087b794e6e9f4eca23dc5487e86a08b629731b1750269422af86cde19fd90f265ac4a1f7d79e3a7fe30d370ca328b0f64201ea8132c918cf112b432c28ee490d612ab308cdc2b87973a5fe82b56416bb146fbaaf6a8ff8e18be35fb4bca5213a6bf1b516b21d057bd338083418de10685a3ae4fd4e8eb4b751ff3b2ac80532bb394992780d3f2ebe4db2a2c9a6d23168952f83008807491b31d951464121c9d2bdb7a417d874756ac477c5a1ee5fad56897620cc6f366fbf2900445f43e5c5ef863ffe7c60bad3ec3be2f924deccb73b8bfb2aed8dbd301e2d3ee375e33006242b419d2051ae311df9fa42c28fa41511111b66e8d7d4c354533fd3c9c2a55391565707fac44f8123fc64a06502cbe5e1d8adbfd305b7a1613d17c72cc23bf96125e126a55bad068a3d5bde95b0e4989888bf247c59ca368c64651bca3243f00021365733578e829d016a3c1f764491f3030521f29ed9cc959a7026b47c99aecd75f486fed51eb95a70942f379b2cf2c6cdd08ef910ceb028efc90223188abf981e5aa6209cb11b2095ae9f79ebc394b5ba6c1ae7cd56510929665c9c7e638008b6af8ae89ee59aa99e773af276f383af1349c17ae537d3c5d6b8baed51a3792f1edf37b91cf45aafcefd750f0ddd6fdb87e9d24e5a35f25536181fabad6cb2794f819b2bf13021969e12268b5c5b4cd84068bb5b6feea8d6ecb7895fea2b341b01e8bd76016345887f434bf160e896f244e18826699df1439c981ec066f60c37bd950679d668c59c33b6c2159511f8086f41c73c63b7e95aad739a26acd81",
  "16.15": "a23bc886b4057d9737b70f8c:5e982911bd3d36a12a350e40315ed578:708eea7e40e878f2c1d212865afe9a145fb07c366f9b82034d6b81ad92a88c39d52bbdd5634a0f519021fe818bc77190ed8d514613f8a428db1651e902562ebc698498f79bf7e4bacb4849b00ddc33a735f8148de08541503e612d1158784c918bf8ebf4eb645ecbc59803c94fb567096ff0f0f6c5b83cb86c1106cc2fade09ddf07aaa6325520d8237089ea64206aeccede961b78c46f1a128af0ac701910ea4c3997e2d27d1f7e435214b81d6033ebd0a5bd151bd3556dc838fb214d6231d44ffecb0fa0cabd83163ac2476b35b8a35968a4338edcb0a9c5355c6ba1856e9045d3e01f2a23c69e7dc944acb629b5418b481f0a750f54e514dd5a0d3c8db6f3a73afb0104682bb2e575a5b723ab9a10052a45c863786a38421e4d403cea18e4cd501d963896f4de4434e75bd8108452b8071522ed5b3ea9cf19bd00a653880fdf77bdc9c8526b155cb2ea11a337978affcc32e80a8f9f7c60130dc4374e491ce80d1b34575d66733d668c3686bbd101b5c992fc178b382eb42ea1dc08912068a70984680d28261faf7c66628f6d030d639b6c37ddfe30850021b217b277ed16d20088b5eeeff70d82561280207dbfc6ed705ae72c3385b586d7cefaad6b464a8e30f78ca7b935f5eed52d37650393a2468b8e660600e9fe26594c1bb02da8dfca3721a265df467693283331a4a7aeb7bcc75f33e039c89ddf968d39be87b57ea134715728ce249eb673781480c4dff29b968b4202a79525546312f24b7fd3ea00169f15aa922f6841a22e77959830a9a3b11188986404ad5ef694b3baf1f665ada4d800065afcae480e0b0dab9c2f9d53b44056704e2ca37edced35063541f804c8915183b40dc87e174a9cc49c629683eb13e41643244acc4d9fdc438808447810139b01440e8e02e875199e7a69fc2fcdcec250472de1ee34edbc9d2a7bd5f13ebfb750380684ed7ef27fc38cbe8426d8106bce0cf27936f2489ab701955ee9ba87484026bc06ffe73757f1a34fa8c9921296aba6fb1eca53dfaccb",
  "16.16": "bc980f65fd03051ff1ffb8ad:f61994ba655932762da3dba6d30effb4:9508c8fede2e6f5e070803e92100a746ee46c0a19694f9ce20f5d03bd4629b4ae06b9ac10b6435ea41b8dc30220af9fbaef812d17a9d6de25ad83c8b6f33bcbec9783c32e43daa92b965e52c17239468398015a6ccbe773c80821792cb0e488b7db27c6296fb9f69335f992b649e62345af4b57e1cabb60c01d5cff7c80e06216bb1ec47d6531633c655f8db707ffc66e0c70c15935d5c1f8216478fe80732419dee46b49e6553fc39dab68c4e070bd83b42b925695ce6935ed6d8f2248822807cdfa9df5614302570ef113a47f9c98e067617f81fd638e40c6ed895fcf9ddf758c360b5d34f9d965c8524bf63dfe373ed825cccc6f1b29a94c928fc867d728c86cf52ec9dafb921cb208e502af7cdd921ab6361e4c43f07f3ac595a4d024f159acb390fbe45ba2f3f61e8e8b3985fb429851ac5abf1fc33886be74778b60251415806cee6bfc477bf226927bb41ef9cfc8ce896ee388fa40fe402dc6e2fb910821ca75542a64dfbdbabe7963350c06fee6e1232ac7ddf2e47ce5b0f0c5d9d783978c9d34e81796a5f3c445f12d6b433e92dec4fd75c75c6affca1eac0749ad40c56a9e2e10a32aeb26acbd3d884ec0bd61f61c1ce3fc6aaf01a4d5905bdcc384ad51db6c1cd7aad89d2aeaf50a5a84ec6a5e928c81d837c228d65d7a288bb86cfe0e4a32251e5cfc7e0c1ebb9d752a980bcc90872dfeaa5d6318823491160fc3025d4906946af10169671fdc3d67c124faceb5ff9d618b113d82a32968c36676b858d510c469bf9b7744ff8e4afada9289d379b1827fe2f4ff78d0a979d2377dd65fcf2ef87aa10",
  "16.17": "0583d37f54e89dbc00e5dfed:642f2537ddb1e15fb0f8084a4b4c5aff:6362b99f63b3a3944a0a6f8a4c43d5c6af8ec12a9411696565bf6a91b84db558fc6663b3f8e93e6124e1e563f94f52eb50787e5f322a53d3c8be2db0dfc0933f6fab02145df78f2adb6414aeab768a886f107f0507c040c5bd64eb58360cbdcf6d3b3e52f8a7f3da240edaca4d80abd499801fd471b357026f368ef8db4ff673a1917a74541655d349ffc5e1a3ad62e0e8481c4390bf9152075dd1106a55ded2099389545f96d657c0794bb39ff41b95687ce5e95c1d50a8a1955853dc36cb68a422ad8ffcdc6a7450f2d2abb1a5f1f5b2e7c869700ca8e78a89365ab5931d72cb9ee2a96e511a7084ff5c4b07b9975994e031b888bdf4ae09a0c9fc2380150af7ea8ca61d7eb64bd78fa0bc822ff87037842bbbea90d4887386d2f9b7a0e40df0152f74c07f851109a9126dabd4539c7fb2a722f6d85066f243a481d499246b2e894935bf2b45e1c8d8a4bfb0d15a1ef7532c0f06a65af14321038fd8ce5026327c662d1a41f343906bdeeeabab5449e64bf507bdc9e1a589f74ea10544af238d6fb8e26243313d0be446d3c7a29b560bbf306676295256f074002de2499ec8ec5d23a97ecdfd1847f9f51457061eb704214f538c1e90b99f0d62b86cd77f0bab79d13f7450e21501fd7c905b5ec3ad26f7112d9f9af8a2f8f70187e7933fdf1ca4fd44c9aa2ae896352b0258201e70e3a376728f2c094ac9b8ec3c9956cafaebc29030d9b976b375ed6197aac09431056656b8033e6c3e9d0f48050d822401b5d7f32e6c2a089cf61fc931cf10d7ee085a3add89e320bd7aa502c4095ad6f0a6abc68320b535105c7d5b71fb0ed6be4074b4822a25ccfe99b1b58a0b350c291930a001d155bf218d22db54fbded525885e283e18170f719c6681e8d81b7c263eac80503289617d586580a5fa57334da47d58c53fd2c23860638598ecb53add3457c083ae894d9c6c3209b2fa765c14161766e156756024d44bacded8695c155912e31f5988cf23fc6c2ecd9d27e6e46685cc38eca4ba9c990b51e204e4632336cce77a550185f67dccd594e465d845e65161eae86e984641a5f37b7f4481da3bfe9d4af480f28c5988dde42d3b99bb74a030571319e2398fa130b3613df9d51ec068f080911292a98c1ed77a47367e",
  "16.18": "72bd00ce5be25d6563209ac8:8717d2539e6886f30cb774cc6a6e9764:5f9b06a03d2f3a29390a8d37a407aa8c95251eef8d35af9be4b8d287c56d1c56f5c7955172687c1e2a12d1c990dacffb312edc5608daa537940cc85bddc60f81092aa4cb9534ef55c01b4ea69afe7b7270fb939ce6f5ac101ac40b160be87ae6f17eb79d5a868df758c847cc2c290747d4d3fb9017f92c73a82e6a59dadc4a06203d5c4c0bd4f6aa96d2582721d51b8a15fa71b318d99a8d5c9375e65d671c20a1a118cabec3804f3ec292c3dbabaf8cedc15b12bfa200a6b903b6d588950af8a639d31147bf3aa5fc00ecab0acd1ea968abe959e1b66f6ba32823dec3633d96a46141975ef08cdff9afd5d4e5d2b87f5d745c00cb57780d87d9a4e6ebb7be8ead823cf127a9c888a9ec6a9ffc91d19c464597da4fc2c753703c40038414a8fec3ce6b05ee61883c1e95497daee8fb7df7f02809e6aaad5771367699f673d166fe13ed839d16d3572bdcbfa922b5044473032ee6cefc5c7d96ef84c9c0ccd05a1d99eef5d86a3634b0712a597cc429cd5902a63627c30c700671a54362f4fb0d65816dc3ddc20d5f6cad629623f945c5b638708b74b2f974913a5c89103dd8d4d89cf0c520d16f505bbe3905578548af5b237f404569d63ede7cfe1658f4264c227fa17c20efc8215c3603785e4d728f454e47e1aacb73dd8afa2fa68013715e1a41c77ec1f869664280a655df0c41c571602acecf841a24c3af1d535a030a505336f2f23f3b34011ea910c1ebbe0e7f8a3a9ef506b6670ecd48c480",
  "16.19": "50a09a866a47147f178a8e24:5190a8bf2af0f2a92bda69b69f5cd240:67ecf741bbe42ed600371b1d999d664369ca419785e09bef0a6b2fdf630fd35e615559d8e96b95e30f44480a03b6b5ec9177dbd10b8260f0e2f4065cf8017bd66dde9a06e57b456eed78a6c0eb619bc87cfcec49a8fa3f096ec9238ea3d80a18f6eea3a51b206221f5646139a74849d9d382f2e1b34dc02f2c528f2377cac316b4d56de88cf7d05fec5c76bb2158ec2021777787b16b2efb7c88141bcc55dcfc9019f13723f0c6964368d86be449fa4bef10e8d060ba7e3a2efbdbd331498e37a48179918e009c3b6a439a99fde163e4581f5ea03cdd06d41632b85ad5e21caa5ee2f3adad85d9a014b654099d6ee871b55fd884a1872f82adf9487a7cd48d39a4b405382559b9ef45c2b8fd85a55c1eb987a34f39eb21635965722c7c3034f48c24e64e48e3b586e72a8a2d0b6ba1e4360f6a4ec407557457cd4bdaf727e26706c9c9947d61766885b11ec1af3ce2db4f1820ffacad9155f9dc1cfea68219798d2424853354234b005607b8bc2bd8145bf65ed014df2c6c438fa936cea894569f5e9827c0b368bfbbee2f083ddfd1908acc3b3be4ea153a6733937e85440eb5dfb8fec7c18add2b38fbd7e3b55b7ea6ffd272d265e290e9fa8d77d194dc55d50e9f9eef1ea00a159ab108d654dac6e1cfdbd7eef7bbf58eba1c570df9a6de4fe006d0b0becb562ad8ac146dceaafc72299f0a7238a5b1ec3a3f95378399f16029dd8b2c54365fefc2116bbdee4584330cb3504b6f4a994699e37523bcbb4d809a98adc44690f46326037d1937fd36b400608cdc5ec96a1af2ca1420207ee3f65bf88b34a963d447dded1aa766d3ce25367a902787d0fe05fdbcc2b146bf2ad6ae5950388dd0c8a1789b773781b8874e5e7164bb69c517cccd82d567612da316235b6b159b87ca2874ff8a0b1568ef4fda1d445c1c7b157d0b2c6fcc88385dda70c8d03aab5355bd13fd7b5af4ab9ed5acc71f322ec1e5",
  "16.20": "a0c8e7bd317e59b157b98d2d:3ec542955accf464fba899b90fae75ef:c2b2d4274eec4fbf10e84d935c38426bc5cba7b4eb7fd463179279efd0fd5b37b6ba839e98078b9119bd371fbf8d63eb490f00475275124d0e7e0443b7835f6733c8058278c4693b6d4e32802abc8829b6706f816310e465cbb51c04dffba6ea4cf4517fd7f4fc65e28f211aaba7cf97054a836e0ce2a16599d786354274b2c4e51fcd1cb0c642010fa51bd7ef04b34cd3338fdad8f3f0e6e759ee70f42bc72f1edb40ecc3d98381975717b7d434db40f0944a7f2ea9e38327c7bb6c66a427c93eeb42427ac988fb277c2eba456a51116469e1af37da8a4cab8ec55e8f687b72c36b19d204b3150f03eba84c65b1c449891dface07abbc1ff20f80abe50ce5ec50feff2c5be67b824286998ba3c36ad70e581203506a87c67094419336b3b25e0c28b5616499e398df60d5c5bef16cb377d2e92cd2c41e986d2f343b62a3f0fef5a8d8e09e74aabf2ad3f28419ae74e94131de42e2f211c0d499fcd5552f929483872dd42573f7c8a1ba7d9f881513d8a9fd7f0a5db35e19891ba9bff90c229e5feed8bb760600ff6785f7e82ff31df2d8e1f1147e5811bb1ea36adbc0bffa74a00ad616d1b0809f960d8edf3273bd82fd39f0d5c786a8ead332834dcac790d0ff81ddf8380160afc3982a208a61cc684f3f9316fdc214e6e3a0f76c7346ccfe2202ae8fa78937bee2db2e008ee6010302d5387fa203ad6728cf7f6acb9d1a8e6caf162a3559687d859bac1abd025970e27ef29f55053507979a3519b81ab51ca79699cbf9233f16ba0b1c5aa67475352a31687faba309f79211ea43abb83c5befbd793cb101eb2491e8a1440007fffbc3a318a653f84b93edf67dda4326dd0506de02ea1020bc30ecc93a84094d1d49020da95a905266fe0e9608fc85c1812996c316a3c9b1d58d45ce6f4301afa38286dc033d25f0d851f1c62e490195a284c2e06e1b4a3eefbd033a342b290e602d87a4c30a03fadd8be7aae19d02d46bbd0b8f17bbd3d51406e06a9caef89c5dbe3af72aa63ea1512ee7cdaea2da805a9ea2d78f3695e010d51ff3c39aaf22bb34465ab0c8c6694a729d49142cc0532ef43d057a248a6ee8379de35dd7b93d014979f8053d74ec112e5ecdedb808b697bd576b7b341dea734c7d267ed0d12cc92eca82bde2e51b29f49defcbcc39ec2825fd11958346d8dfb6b493a67baa7c3b2e5e46b5bdc691322cca3972fe97264d29158ae9a5f3cdf382c9d4256a240b58c6e581630a400475ff6456fd4e47c2c5313b0ac021c8bc4af76e5660d0b1de0fcfdb20b5929d6864d34f3fa6fa0c43079fa6afd17533003bfdea876f892d5d592fae26d9472c6aff0ccb41aa1b791fab4748a3d32fc841fc3a4b5c1a4f7b67b31410d2f722b99899c05a2230b0e44b0ba7754254fea7a04e89747cfba8c7f7d5cb26044cedcd431ac981ab1483e24aa670634afe0d274bbf9600d743e0478f25185aff5cdf164e1598ed6ccec24808b6",
  "16.21": "2fd024c0733482ee22881b03:0c4b16ab7c0d4e7118273442f94d431a:c66adc3e106d2d8c1387596e8ce095ca08a285ed7d09973ea95b341354229b98d12fe2ae3143b3e4ac79e30e86de27356e46d05acc53d9e31e5565f6f0119c7caf448d3f359bfc2c316c16a4ad6c0c2a10a252c370693bb726e8bbafa80f1ad12d4268a198817e7672971019f02e9e4a3f8acb4d72d61348d229d0bd94e119121dbb1a8f968de6a3e01a3f625bb791e8d691c265bb191f5ea3f2edc3e8d595b529e875eb4dc66394ca31ec89d50439704100420b00352459bafc113aa420bdb845a32d17b2324ad7eca4be298ff2b189134f0f864dfd45e574b3e88cbb4744db9e7613d6b827ee43006141448ddd7a7cd21de127f4b1f3129c4ccf694e5e4150a020ce2abbcd6bb8fe54d91872cc266c5019a4f720630d607e831776e671abda08828bf82a2e369c4e18c2885a7499fab1dd98b2bd84c3c8f001f7ea50489a1a45eed2f4e1c621b443bbb380e1215ff361e751a82cafa27472d116c982c0dd24ef62e7c4358b6ba22c5b4376d84b3b9926d0d9ff83602f79d6b94614b7ec20b87dfe67c074bb391491281758a1b8d73dd517e11b1ae8d41e59629fffb12006e9b3a52fad4ea70a77d212098e32fc8e64918939da7a46964a4ee0d8690325df6d3d079f04099b39d7d3f705df92977e71b0ed5368effa26e28437c61beeea57b51848033174b787c13b0ef4b0ae6387b14f9fb915a194a5f82ce15978a11d5770dd5ae861577c6e59f973bc30baeba3790d8f7e8b991c2bac7725ce9681ca485d7faae85f38eacf8294633a2cef880b83cb52c73ffe5c96ea7f49f4a9c58097f0a8ce941cd50e56cf7afc08fe04f7e62eb65f068bca2597281e946156e1498c90aab24b0f7336f6f8790e869fced918c054bb2265a2637cb5a09a5fdc0e73cc0e3c7da7d7edc501228aa4b16952a926ccb2224dd6bef8b6ab20e86043cec402ea34b8232d2f1ebf5456340d7ae15e161bc04e53631d7983aabd4c4d3293c8ea63afe49d21e3fb79f3c715c998747d5d76a122a007a59fc7fc250d4e62586204c55f4f064bce1d923be9015d53c0f04fccd2fc3bd471b1d55d2054b57db7b28af7c62a12ec6f33edeb51e99d0222918bf5a273d6509c358639bb9f3797ece32046165ec83b14b7ed57ccd79e0b900166340f4f8bcc9bd77dca7496c881068873298cdbc5bced49dbaf1a269ea8fd1a8c6657810b709ee281abff93441059d600d718950ad066b47f71cc768e0baec19283f649f61e5e3b764795e3b571901e170d6d3504bd4b3c1375adc1b555063b6091f51667d028",
  "16.22": "bc7914651c57999910f57023:24b8228f03064feaa51f95970a6986d4:bbac8079a2e0f6d76ed7ad3f369614b5f9ff7cf47ef3cf35499ca1673e9b4b200afed09ba56f54b9308222affe59025ec2f2c10b68d23260af55119ae3bfd1beb4b84f58ff1e72a9226eb7af2ed9c721c2c230412c193b2f303379c823fe286ea7c33e0934d8af9eb1af463d884419592a7b45624c927324c1ab0270b6069b714ec51636262f4a3999fb0d158e78a8189f4ff708a3cb95ec69b1b17fb5d99f2a76f5355d83759bbe438ad2513add4f5af73ff4946c452d506460657cd8dc0307f30975b84e23bdbc5937ca8570a5e14bf093184bccb422f16b27397e74f4fd5c51fade1d6d4e26e0ce982c7ca3d3bb30d9ca119dc1da02169abfc45c922ef570d65db6aa81640f07d94f172bdfb0acdb5b28228edeab2bf06be2227d43e2b0a7fb11845199e1369bdcee68963862b9ec4b1122df033596db111febfb278d9e799d400151a997b27c6fab554d3455f9c5f4638de77d3d2d1e4fc22a96d145871209b2f5354d8c4f9de174068c400aa78e38dba0fb532d4d954b3cd8db5ce092233f5cce620e8e5222ffd6924266",
  "16.23": "601f8c29cfbbf6fb2a02bca7:bfe75a7a529b56a937d94ae7322bdec4:658bee2ce6db02a2ed56b201a017b8ee91d7af7b97f17689dbb2cb4bebe2755e28e39ed110aa4b45d1397d1eb35761d400bc904cec9deed25232fdbdeaf50d493d9bcfa760d1893f92f8eca8de7305b2677300c2684b8806fe9093786999fa6f1ebcf3ec5a53431d6005c7f80f69f7a53d69b03bef6caf1486827b3cf4fa4b29738b976841a58ba7e57d1bd439e73aa3f34ab2cd94c0f1848ab58021a99f020d9313f749b2ad48e488847bed2a710373b7612aa9b670d24812e1b2d0b3079d6170e33b9ab605a075ecb392023d01f232fcdf44579616d199c0a63b2e1b4532c093a4113ad034947eaf5f862805d390ae6feb28415689ad1653f3e0e365932b7ba1f6a0a8339b9f0f4bd5c91f64d75ee145fe01c5cdd310e84801fa6a4066ff6ac051149671fce13f763b26f03150251ea19b78ad1fd7d42990c92c295b72f1e93ea30ac29230dbad5af5d4cd3aeaa421f7a3a52611cc13f3c6a3e4116db2e20be8a4f682572b1e189ecf793a82ffe1240b077eee8f0a36a18087b4e50dbd485b3fcb4eb0fc7f4d04108e37af2ec782b49fe82b66b579ae8ed857a282a67c81479860cd56c10bd66270f35711483b4fbbc262f151a7a599d560edeb185116e8a81203211b202dc4b9122eca33f16dd4f52869f566a3a4e1586e8e3fdc376792444861e8a3fc6cccd8af0748c9985b0b34a023380006f6101a6aa5453c7ea00b1c16168abacac949ec292ab52ce64cd6804bad7ccbbfdd648d1f816a8d17b7195058b72e6bda977d38de325423183d9724e4e74743fb6f63fcb2fc72287e44a505083b599e6e31ed2d61325494423a076931e5cfd0f60384823f49429aa4ec00172cb14528df580cd9c284e8afd1a228d0c03030c486e405269dd7e55c49e9281451ca1f9bf093704d755d8a7f80520f4c6df6c13cf8fc4eeba9c342de635708e066c554baf0adb2896170972712952b659f76664ee0a7f02690c78e004542926138ecd84f46027464c6d83e2cbd132234466c2e1b9b632648c15f4526d05318b3f27b5b34e42784c2f391e03fc359a89579aae4aab578b4aa170b4245795a9b6751c8219c0e99765967a8434544dd4c3e0ab1c52042a4a037daf25d1902f3b710765889f2487e1bcef2efdc678d3f20d4921dac5dd231c5929785b627cdad1f",
  "16.24": "a50bed6bd2a31a4a9e08e514:d31863aafdbfe6695c335cdff51495ae:618adaa34f21a4a0ba16cf680e93cd294021bf79908586e320745732bf62e91877b742c84d913eb2d613b9196585594601fcb21c6f3842d9b24743550c3dd90c9aa82e966c49df708451f1d7c8a0408f84f0dc8809b23869f3174851410ee98d95432a52425bcea8ecfde8545b47a957ff5048cf5950c7dfc04527cafd60b65a86f2783eaa3cbf5d7fb10e772e621e5f0a0c694a01f4227cc0fd229ddb12f2f7050a2064bfc23c0ff2acca6d37e7208c9eca413b1d01ce49bc62eacf63a5a5f8f56d8d7406ecf30b56ee6abc018b0b9d4642db270732a84b6d6b4481ab9034043d491609ba1a3584f959e18085207982d7ea2d0fbe051bc27ed80a4818552f0bda47cb0cc42d3b898548d2b5d30e700e5a1363bea39e140fb31d071cb7de0ea2eccccabecc87ada8c8304d1bc548c822f1cc2bff8ccd673e5735ef350a5c779a96b2b345d5db8ec024f5678312ebdc945beb43c574043b025ac167d49e43694749ae95f147ff40cbcfe84f164b6f27759515f25bf160ee6a36a3c93e1bb73feab95c7e40552f43335ed379c6cf179be437ee2674e2c928b485016f1e3a6fd646bd83458aa7cd7220e7a5acf183dcbfc9b6d0bdd950caa18e0fe622459a6aa4f8302097a5422d59417c5a925813a0729d46fbd512b75757585c80bdbd13420eac50017574f18efc05dd490bb0d73ebe70bcf3fb1c2e7bc9f589e2c528dfc27e975020b176202afc1e18f9c980552c4bae34fd1f955c26d7ecc658c01ed04132fdc8bfdb3a2cc070545842084382a85f1886efaf21cfbc874e3ee5ae8c5e467db5bd425bc2d004feaba217e46d6f5e19a7edb7aed35d8427008cb0d4dec342ab0e3bc47b4a14c9662af681487e3ba7fb9d49f9e4c56603f7a32ea8ac7227c454e8fb54c06b24ca23f07bcaf7253dc5b4b32e65656f64248cc4fadb1eb17df60cff6d046dd5018ce485bf1db9cea52455f9b9a26b3d305b6a078ab91bc5f8a2e6ae2bbb16c263cbc67f8da23ebb218ab6a15d0e6593066a9fc08ee779e0665f6f13f2eb8441e243066d220e012c538eac567896dde3bac80d44c2d6d2c9114729d7e5d425b1a3f0149f21655c4cb176358570954362e8cc83b40b33447b312e36be34b83d942485b6fbc1c0370a78c62193b5dfe6d1ea952695e281094db1ce9cfd7063d031ca6c8d981f44aa299cf3ec1d390bab163e6a7dcb42d9549496ec2aba88916217527241c6e2d8e16b224ba09dbdaa1f44adb438910afea0f92733e3221f268fff2f54a401e0965a675153f1e66ddc8b98679303218568d0e8db9a93875c198b5403b09f4c554159125f726ddc2cc7684b6396e728b4322bb2ae43649fd5097405425861f60821629ae05d8d2f61272a7b17c7c1d03d2458dc2f9fc7837338a48f75710c8673aa88e9b4aa88d32b856553c437f7165c7640c23bb808eb098147d73e5a90c6fe9800805c9aa67503b61321361b55c42b45a04400ecddb467976d6831f61fb2240552797c9614054c314147c89e962d2047926803ca65b9a59f4a61adb1998d61e163ac6061eb4d7e2fcff2cf296ba3f78520cf5b8a123e118c09dbc483f58fade142bc688cd50a932d97b58f940cd6101302c6a68a16a83ad6242ef724ae61aeaa1168cacefd5df5588202561c2a24c1498f08e9d49deecc17ff7e354a1f427352cdce61c0dcfe2e333e092887cf62bc3f09ae3a7e6acdb8f4718354795fe09228c5be5f3465dffd6b52809af6434a73d97e571e55781512dde4c6bc6206444f1745e086b6614cb38399dc7ad8aa7afc9127f085e4cb4494412d183554b8f844bca34742028ce0",
  "16.25": "493532c31e8117d14d247edd:deceb76c457809f26a343decff0709f3:051df1e1e6666f8b4bd8233cd70884872036268569026581fffd7caef9e7d273e49a78875b922908d8b4e4990bdf583c76537635a92be3116f6f493ea69c40328c9e3d52a1324d714d1943b68e773befcc70a3f23c9f9dab6c5e9d37999eeaf6e96055762af2cd8ad63112defd2d67904f8e9252a7f6c1095acf23127e0d967430a1712c21c7f5fd989aea8a13fc4ec4d0f0e0c3a8a729e6188a46d72c97194e4acada170a5f91908d7094eaf3a8f0ae77cf389b152d4c16d2fb65c55891e8225d6d9e7642483fc8cb8dfd8a68c37a0aa42c729cbcceb2e1d2776907edbd027750121fbc355f98e0ea0b9b937e1f6513c8f4daeb3dd70da3965ce1a4ed3890eae451d6fe1698bd345df0aa3b0a816c84d21e117b3ab0aaac3f4fb27bef185aedd789ff681d8b86a2949c82bc6472d506265baffc0f0fe6b5e0e3050392eef788b0016464f01687efbc90288ed9650c0b9175073bb0db03e18ae2d165b80998f6b8929d22ddb349016049cc765809126aba938616aa8c04b80a65b51e56bcc5707ddfe5bc78b6fa572895b909839423a7741725b4ad909f9209009e616ff67905a94e51db",
  "16.26": "a1167272d129bb9f2649237c:44fffb60c00795dc42f36505f798b896:106c7d139ccb6e6dbbe0076d1495a8c6134eb42049fea85475509fb70eca07aa8bcf369e75b015ab2f85c0a4ec791f30c5c08bf2eb273ebff66e7b29f92c75233e6a794eeea09d7f9eb24f263b1d8712e330f1de3ca42ddd387e0169e148ddbbeda2a74ded7b9eb2a574a1f37e6f5436bb6670ba0373eb7690f75dca04c1e832291b34f309dd24580e392f81a2fa1ba3fb5790255bec8d259b301bf5d87955372203b5839a8549f7725c43e8b06b24f5f429636a8a4a0760d677853f4bf3d226c076bab5347ac3372d1319ede4e9f8d37772823e944963a4968c9599055d7002c98ecdba83ddb96cf107825cdc2880c735acc31420505125c3dcb9d3a963c33eb70d7d618be9a5bdb774f9938e9b23c1f25fedb5b2e0b26e9aec511b0c4e8c7673b6acb4319d38d681652cd0f93b4cd9fa9e61b754844d385ae217845adfe11d04c06c5d1e2bd34dc45d3807c138b577c186c4f3a5bbb9c84d036dbab03d4dc7df277f5e4e277ebd27c289c120ca901c698fde6e7a7c4c5ad5dacd186d474325e5d5cc65301dc67d0c571db8760f2d423a46c16707eaed061e27ee9c29382d9f40f8fdbca7296baa0a88dc4639f006e09465730e91670aa339b1c7e97018a1477367e7a4fd1f10a20a730439b57006b2ea5cbd82fec94fa520df56f01569361f2d36d9734ac83065d61307cc7b38cbdd7fba6f7cea2e5f5df1eee8e188f7661bb195560324c26423a6f8bde669c0979452a978f08984a69872faffbd6c2d4f9323febc452c50f47bee2cdf36abacbbed6d",
  "16.27": "cc7c6df5c6e516b6eb174746:d0fc0e3cae275e8b4b0674451d9e85de:b53e519c425f25e9e85c6ab08cd3909dce26fac17f1174cbc305cf5053b2fb7424cbec50b3c72521b16883230915c1464f8056cac98d69360784e92ac07556a91b415105b9012c5c28cb7d89822a910d2e5b00ae82eb0db69f6ebf05e93c5f8669fb145337bfe6dc4e513261e51ae6bdb832d4dd8d7b23ba75a78554d5a0ee4a0803a73ee090baf6dc1c2462ea96d2b112ae1a7e923d58db51d69ea231cabc4977eb3ed19a382682a59f51bc506698a881889f446a40b522c0186c2247d33e97ae664dc06abbefe724e276198bfcc873288f2a5b954a4850a8fd664e0d186005c270b8890705eae51f3d37191429d424350667bd1e119dc23b99c1650e9860619a318587aae9b3c5485f5e90584ce949cf5306e288285f72b220e4a410716f34aacc267a73a86565ff1b3f0dcea0c591ffee2fcc4410ec53a68e131e93c7a51e84befd40bf2f68e58a8a304496f886eaa6032279b84827d60f02748867689b90b138fd0dd99296c9ed9960b0d45f4cb87074df19a4c06ee8fe1295ccea1ac5ae524cef9168312614d9d0ed95f6414bcc68c966a1fb22d3bf0df0151d230df2d5d35bc5c27fd537b236db9c4ab3b5c1812f",
  "16.28": "999879453514cb5ea59dfe6b:5bf67bde98a13e509686f1cecf28296f:90bafd2d043a97a877dd8f1442fcb5e6d68592d6177d8f45f0357ce51309d510e9bf4aa17bc2d9783c29b6367c403ac411887828c90df7d303285ad4274362491a96ea2cb76ed8fe9551d2c59750409db8c2e994efa754caa9eb9ee858c3780cc1556e9e7bb0b9f653a88bf866b7c28e08580e9235e207a20cb9d7d347e6b23844e095deee96ecd7f86b459221c824a4c0b4af2582d6e25874f156376d43a57585b8a8aa60fab015fd026aab9bed8cce91017af1238b87855c76a37bde2e0bbbd0bca44dbfb7c780f31359aead151be14c1fb00b612248af17171602ceca4c7cfb4a7304d2eb7a629d94f30b9d3bf80278a81d5359214a42edb0ae77d3d159adcbcdf349bb4eee241af980b721c97bb2e0e2f247e218346f6304352ff48c1077b3f88d425cc927a3c11d8cc0a4818cc6f088c466a0456eaf6aff5f9ceddfb3f555e68d53a69c6c08cf0d1f4869b608ac6e4571a9e160b705ce46d672558bbe0908069781f5cc1f20d39457ace1a2c9ad9cfbdd8b52deb6d3535a63256346d6a9dae2edbeeafa1b7f49b78869e006d3479aee911bf60ae3f6580c0696ea68472579b6f97186bd04f3d54aba2afd620247d8b3d9f895c26fe1b619664de3e9541eb8b34afd7486908fc1840457b9b6843e88b4362b8f70e822c420fb542e8aa94389fa16d127ea532130e71f0fc02ceff7e418bc3f6aca4df166719f352fb3e5dd8812762a4b8a947b1f5c6ac6b43fcef0399516449a358af1ad5ef22c47b947617d87391c0ed8a9f3960e50ce8e3b2163c292afa2a4eace3be494d757fcb967249bdffcfabfab4230702026a7b9f87de5de56131236780ece7e30601cba0a3a1e99d623ba01116ffa40991026d7b88cd19c96a8cd6416cd2714cee36a04c73add587d46499e7be45dd0a3b808f212ccaeceb75f66cbce005f8847147953f9eed41d51dff4351cd4cdacf3faf6f906f27835157d8e02bd112d0ffca3405f2d74a95f131d87868c9c903fe5a9",
  "16.29": "ed0e88eaec8930f9fe623e14:284ea7a8b4f9a1c93fdcef7d9d1f54f5:b8778b7e9ee886c81c37eba1142e0c163016ec6b4afe3f5a51bcc07dac56d6bf265e887033bb6fdde7c15233400b69fd587932829b6d8001bfc35921699fb1a54c0593893178d6ce99921cd3ff0cdb292714404d81ae333dea4aec51323287676dcd0fc1d00ee6bbe2dae9906c0253613f789f208998666f2046d1e339ace08098ed9a538a9d240aeec363c3c5cbdd38984fabf4c64b193743540d9e066ecdabf97b23e373ad1d9e2e05103d8f72070b8bcd7b643779ef0dac6e8dce3abbce028ad45b49cdbfb489c6fed0d5641967d3024ab69516128703b9e99343065d3b33e4a2897293dd55ce9e31963fcf8a79c7e557daa6ee44302296d9884b2f904a1fbf564d72c1b1be71dabc962383b328e58599b8e518c318aff9fa733445367503b191ff92a36289472d62090f2ae6472b7bb5a529f685b833ca2eb40aabe8f2c384e8300449df8c946778ae79cee5137016aa9c294a6f73dc295a7e3f812038f206dc9e59a217b7b08574c54d31934a88944f868d5b394136cfd47afc723d5557971f652d82d4c00f7335aecf73e065a70a4669f96e82e9db618c0069258de2c4bcc5ddb94d21cfd418aebcf717f22041e5c7fe5e46c3ecdcdbc02650f061323fcc7580b5a2bb5b387e67271b01f901576037f553534393cdc40efface2bcc3866481d705e1959a45b05d877361ab994265116300eca7fa152e8cbbf54f8ee2b8b6e54e5cc7df7f68b668d23f7bc641785eb858159b744b8672d89b96cb1f0e0206276e7a301d70c4a2ce7cf1626097e362f8572aa9baa6d10c4e1ac4d2070e4faf48a399097c6f9b481cd355fbcdd72430de006eca039b31923532aabb08a54787f1437ebb23e6a35f872f0433a62bdffe5a64428786550d106a9fac6308624dee0f0d93f7eca82000ec59319bb1ce33a3075129a164961a4e4739cd0bc2646eb41ef8a2aa50c871765605226b0b3bef4d781bab7e62acc9a17fac2c80e7ca5b17e3ad0710cc9462323e90e18f7ab4096d155a71f0c31dca82c56cb656d054abadc598a3ca2d0497fc26ed730bb4108a4a9dc6f6f953038fc2b07640e9d8e08a8ee2068eab679a017b212c64363192bf183e96a54e6bd973a4c21a7b8f8515d7b10978263ba5db7e2bb439eb8a2a7ca8c81ec7709ec6bc7b24ea7b5f8efb6159c305de4e3685b29e5d0218da93cdb5cf1ce686304bddb9c3be5629d3a3bab15758eea0f64a8cf0de3afd8f8720f063b47f804edc150c20e275fe7844f686768218f511883db6571bb7ea0f3a4c6005afdb584cd1690070cbec71a949e99a45183d0cb6dc53cbf7943ca8dcb72eef083912ac08be0a11621167128c048b5a87f857d65398fcdfe8ed2f5aa331fe727227a782a45e0f288c0f38d145bf71b69196c75d7196f4ccfda9a466cc6077d14bc4990e1c237642df41928198f5d2be8cbb01952df610a58a36e1a1d2179a3097f6341589ea10774c14b814131bd04090effb695d454c3c5f2704fd9b3db2ef0e0888368132478f1de6975e8fb9f400a6a9dd4842bea2587d9bb0a231fe18f308aae717a3fe0a4d95e5c08accbbb49f2b9ca6d50c22c2e455baa8860fceeab65e6518f7d51f11c9fb2e43671392546c2a2202a1810ed7a87e0facf040fb354b50b09fb8737dd584933b9ac4803a218adf180226606edf37552b032bd02ae89548b2a72d89fac5c2fd5eea54afbe6200f6fbd104",
  "16.30": "85bfd0afe57587173f3b2d56:c67807e07f0497654e7a42acd478adcc:22c486003461cddec88cc328c6d95e697696e023030b7a96ce3ca78f01ba886a215e1fab75aa6e309d984042bfec42b995ac8be8a8e48306d3f43a84bc728d4da432b286c8c2a25c378e2dddcd5ace6d51c3af3960fc09823f89261a8162dde1f9b696e86763bbc8e0a5c74506a2078469ef0fc8873d462199ffecf2b8cb62dd58a2b46afe421a74a1b0ef1b31b7b69a7be60140d0cb5496271cca93681a44068f6f7df1979014751722861cc57ff40683a55d41cd8f9b461d7ba782ac9e444357a5ba3bb38780fd88d768f2fd70895ebec1b1d8a9f773da7f5282c9005c626890cae4a30a515f4c2460f4e51032c980d4bf6192353526efc00be0ed98f3c0fc8b6dea51955e349fa339318cabd435651eaa5272f599924362de54362d224f5c08d14cf7ea56ae99a3a29f387ad1b8b245aa6e833f228e8e866a7798354eba756d87cb0922966577ba54f2b362735dd6cc7850261a57ccb7e610da54f559878cd79bc967e9dd90057e93b9eefe784f47991f5ac56ef840c443683e4a190b7c6465bcefc1be724246f0b241eb01a54a4c937caa07575f5f5f47a34095fd177e62a7618cc6f5f7699f777e39d2aa932d5bd3d4a8f3f888304b447617b66a0633ecd3cc827333e658ceba24018fadef269b6047797517f50d2dc0100df4d77b46343b0ac9aba92a367cd98ea6d89c71d12a9819276006511d88723aaad09b39d7bce3db57501031721df013372a3e3def8a87c172e217a878153508ce724dd0382e891edac2c781ecbd77439a5d35aa8cc6985d0b0fed8d083fdace53f9a1afdc3a8350a5515a7d19314cbd1f9ce10c1fdda97fd702fac0069e511b2381ccd6d2174cb913ed5a303d3acd11ac7e9882d9bc252431773b606f92280c132419c892f74eb023ddbc98b6139ea32ffe972a30b425a69ef0d7d07b0d0016",
  "16.31": "6adfa66db60d5a0a933aadd7:d0624d01a1a67968a2ab3f55ee80b68d:7116f55871ebf76c0ddd4bddd36ade6febd8b0f69df377c7428470dce6af560ab9d82557478c0cd0742707a16dc664606e6251cc3166e936f4f32495114f97bc5296e6a2d44287badd12ca5e35dc8a93dcf7302efaf6a1f8c589da7621da63a963ddda6d9006e3a7a267fbb651fe7a005c04b8ffeec8ab72b2ddd62683a5c608dabc7a228dc4fe5f380a8c23cc895ef225ea072a7d69bb29ffff7bda9cd258b2b66e0ae21834e59734c5f52389beb06984e0e0fc5b50c02b4f4a27f42eb71301cb74778bb82954d9ae1e61f8c5a15de66c7049cace612b9188bf044f106b1fee04bd9482a42694f89e6ed338d1de88582588e1e905a38ed3229628358ea326d74d310f35358c0ef9f1063be3cba216ef962c3c6fed2bd62ed411768bf984e3add93e7bcf16ed13c03cb7db8c9bf6dcf6038f0eed84ed3018f5776c337feb8468f158fb2ea4bd3e85fbda58b18d722d0495f6fbfda362c1b5ff5cc5e3550198d93057c878a602feefa884d711c01fe1e500f53ae3de688d9308b6a347c54a340ea99cf9a3626c7b235c1285965e42cf3a8e25994c8f3d0dc207a723a1d75b7b59040af68c7fadd3aa8c12b67c79947a81aec8a630ce2cdcab9b1c74c6cc42f5f3a143190addc303b841f275e8b4ee28d091ce9bce58607e14f581c670ede62d943dcd9a3aaebc2898f285f72d9e0b3851e888131c09a63e150d2e4db26a87f3d33c4eb7ace62aef97289ba09625c198de0756d76f1634bdcfa559da7a5faf07e93087371269b7a08b6cb9241286d34f27c03577fcf563d6f196226513215fe9023d02609896c9c8d0c22f451fcb737196edca6cde919da3b611a197444a0a61a6",
  "16.32": "5e88b694a132212635763dd1:139a16453c8faa13fb47e179f55d24f8:7e3d7d72cb6c228c4accd286ad698a7df6af95bf5b383f3974a191f92e968a999e1062ad0298fabfb864d185713273ae776762591444a65813d0372472ec078b7c7665dc98c9dadc5f4b67ff158a4bbc6f621491ae9ee79b3e0a491038b6b876a3bd1d7f8505f2e3afd6c93f8d2f05388520e48046ecbeacd3c88be02ace3330bfcd82dfa06dfe61466e263d2f135431d3e6c0dcfb3d50e4ae8bfa02e83d290b4ddf293990ce46e258139ca7d0875db15092d5b87eaccaec847c89484946f5c88e3e6f67d22e9decea57000c7277bc5a0d575c7378a28f334073c490669eadad03472786d74ca3624c79c21b1dee20f46cafe8c5a49d29adfc33de4e96847cb308713ab50ec2e913f3b53007eda78472593f87392598f5b4875361412f108facbf2eb0173d4d15216001a579195f9ec5209154be463be6e56bbb625feee7522effd5cb8457959feeabfb9f33a7990f8e8899e22474b90de7dc8edc1eca87bd5b270c615bfaeee246ba37d3fa82556692d8646e4a54acafbf57722bbd37fc35671ba2cafeb5323fd902a07f9e1c32723b48ba0d1a7ad7b2718dfe3f7d6550992e6635a58ce95e174040890a234764953fc65854a372a8dead6d1fedcae40ec3e29bf85c0967ecdf8da042af27567096e23e69dcea835efb2f570c733181170808636977b79a245b8ffef9488354a1347d2864757c6f0b3f702f09d88f1dbf2187bf2e87919c0adf76d64857c16a2ef5d0c9f290598b395c19902b48c1dfd1434d6483281e9e6be3157d018967552fd6c17b23b1e56334bae6151e4663acae9353c72b2d2e3fb1833cc24e1cd3378a020eb2926b863de2236580ea658139637ac787d93700159dd99a55da41aae0c3548f138c1ae31d69b6bc62c8c122053ac61d3d2e769343770e24931def33d3e340f4cc1231d93cf8c83322d1c00d85d52ba4c80add2917b88f169d8908eb4ba8a39813ca027b47013952dadebbec8a197fb7ae47ac8e22b4fad32042c0e608e37563e112cbe9f9591ef192180c4e5ea4bae677a12540a458e5762100435026835985c9a51e90a6be28c86055f4e23a6f",
  "16.33": "fb8c33d33e22213f3597698d:d4c190627714c93e8423554ddec516f9:1e9adaeae5bc84567c060e9697bff11334eac012532baaffd7f07174e27c59871944cfce7068b93c637a03150afacd180bfee96a55e3b5d997a344b4f363d9fc2a2f0ae0a67e12517d2e646f9d144eb56197262e48ad6c8d51ea3c573afd91c44ab6b2a2560682925061cf4cb31af2dd6eda17f1110a57f29218dc6c90cb0c02a57b926040870c125bad3d52dbbf5aeeb77fd1e8a266b2333fef6f7842c956464d87d3cebfb8e5aa9643c9c4c7287afa91d4cb18a721864d783eb52a87567035d1b0b71ff68bd894a255efcb30e2c07809dfbf66662ba75e6f031cf4ef1b1ddf935c35976951246221dab0a530f85a2a56c5a2b00a154ae97a215b3926d318770e1dfc5c624c02194dbfad2d1ce7371a42507fa7172d857a6ad1d264441411504a2eb058bbfae80bb082773de24c350d71a51090fb9a51afaba3634706ba3a49264a90e7f5cee05093095d9bc722abe4321abe7b26c55abc99ced0edd40b6bbb742d25fff807be4bea1ca1267b1f2a9391618af0c06e9e490829e2ab10f81f203ba1ac7c09bf1be69a4f7ecfe052ee22cca7a15a6fe9a389d5597253bc55dcef4c195dd3c35c80e8b2be80d7ff0f6a4d0fa18bd3e51cab09df24311988f8ec10011ad0039ab2d9281222223c062a4fdf997785bb6054b13236e0eb3e57c0855aede17c905e8460cd9ae5e03369bb9b102efb0f6e505ac537471375386263bc30bbc01925a5e652dd997485759721cb7fb71fb1c368d637b13f6f28df7a45476fe1aac5b12a4a4408c9f931b805b3ebd57d1e21bb8213e83b8e0f424f6de40ba925721cb8e26ea7c253",
  "16.34": "87cdc4937425155930ed32bd:befef8219e839e7c85764e142c7cbc32:ae5e89ad3a2decfcdecd4de51683bdb4287c0bb92e2aa2d6b2d26f671e158aa2f5c0740c8ceb64e4a1213ab6fadc33fc4dc481f1aac5e9d97188dfc9ef4711d41c3be2af779f6082f1070d4db97bd26a8bd922f0998c546b3cf9c6b67647f87040ffee0eabfbb49de3d8548f25cb5c5019432cadca6fbbb2689b6e70774398bf4379b1d487becbf9755381bea8c23fea137023c150f003a53cbf33393d385fe8391770194e37e5dd74d7f3c69dde48277a8c94a09476d29b42d04b79ad8fc3eedceab2250fc4a0eb4aec63b246188d0894ee9aa3a8a866bec0013205832ddcb74fd252b613869b93c5f48ca197beabd711da421c98a290195917503a3da6cc91771b18dfd75e281b5be3b8187c84aa78951a903d2ca80c69355bf1bd9970539eb7d9964bd989d585c2981ba7e2e2deed093a60e00eccf2d95365705582a42de6800107a36cc039a08c0d76d7fe52c74bc6f40176c3e22029b4d0194a278a4c8c2d6d3e80e97c1360614767406a95ac3ca83e868fb0a90c84c23215343e0d642ee045ac4f51b593b91d2c0987fd051d794b9142f2dd8b741e34b595e4921be676ac841d4ac89b2c733dd82122213c2507d6e09da9096133affcf9f4e39514f4d5d2d36c31967f741c14e061256162cf7d8ed2b17328000763f32700faf696f1c08fd13389f4db603bfba9799531db6bfb78154407dae337af88edc5bca89bf9f16abc72e33fc211650b31a672a3594df687b0589a3660b08fd739bdcd68c750f1e54d48b275fe2fa89e1b0cb2f0898910db449e86d1ea08623e7920e3e5d60c891dc910633f23c9fa64c1c47089b64b1c94492b",
  "16.35": "3363fd082732a740f6712f15:91b2424c2dab8c29b605054d8b593036:808411992453877849f45ca35acea093469eec0ace9f881d598b1aa6a9e3f41c71e3d21a255f2b95491ccca8edc411a5e67be97dff99b6022134d79782c444ecbf92048308d2e29f73f4712743f756854d322f5eeb4a19309b13b08b3f98fd8cb3576ff6799f3a8c17c563d49f456bab98c081c6386c234fb4b02a552526a3e2046e5359793cfbea8d49101457300fd697c8a050c6273edf0141be3bb617ae1d88ee7c7f392eb988b89da5ab32e829f1c8ebde2ce60c302cfb7007f02a407191f19f9c22f9f36f990377dd88215a8888396cb0093bca4250ac3042c736703b4585dfee6e9c0e060e32d835da031f3db03c1d88d7e4dadc5f1adf19d96fc93d42ca1f2a99d04161eee22e8d63cdbc5eded7c556675a8bdf03d818ee9b607808dca7c942ecd8ce969ed768f30bac51821cb60ebbee658a162b250624ad0e8e57490c30befd667a71953a124d9a8f291121b3ca8550da8dff69f171bf85a13fd56fd14922e27eebb50251e6ccd27b10ede9c3ecf72d23bab9c62a4de08680e0f46d62315672e0134d456e77aeea8091709086d8da756428bf056dc8a2348b60e242889b30c4e359e6791788bb1ed589e23808a359112bd9b9d90e03c7cc8f45733544bf6c02b4b2224eec77019602bd3ec991592d73a0133ef818fce8a1326a2d7a5279b7018787ee219d774198fba1f4d4ec6aec71f6683f1f3448bf14e8f8960d82fe7a95f6870973fb5fa1c2c1c5879b415c28cf731d16f4ae990dfd65daa4cf3d6de49ae93ce0ca8ab19cc5a461978e68c9ca8292e274cd83dd2f57bb8215dbd704bb43a92aa9afb65fed7020c76c5d40e4e53105af0e568ba2",
  "16.36": "770b3bdf73cb2c7ac1f4ae5f:a04d7f23cd5921066a36cc6fdd710100:90c99e99f1a9364c0f6361398a6db3862a95dce7729574b24ea6447342124afa23754a58d0918707818ff3b5eafdca0624a7fa7d7731b17aa35eeeebeb6728f5622e637bb1ae36c90ea27e2d432457406d9f9c4aece9b9ba24a707383dc8a63ea147a099c207ac91ef17cd7f21b5295c36ec902a9cbd7ed68e90f22f5ebdcb3e87a7801c8e200cc9bae7ea5dee8204b6a055d1646280db3c3fffabbb2cabd06ff157729802dd797a396897c61426e08b6ede05203ab8b51b8bcc095e6c70a45721776a9d9bd3c94e76dabdd5736f5537712fbaf5b2e06f5cc4147648d8faa96486807e653ec967ac381ad51a9ae0097f792c3adb4b2e671ed4c5a2e011f9ec8ccfaf31736c73ccfd707b95808585650f55f8a1dbeb78d705f1dfeaadae4e6b2ff1cd751c1991ad6950acb213f21abfad22434dd17ce57e030c4863648a35eeec4afaff1d2eee8848f4921dc5a0d6322be3f2c4842c4208051344cfef3861f5321c7f75d224c6816f3e96aa9ffbdab113f0c87d957d8be4a4566c1c653c5ab46e410bab7032c9198dac796e4c09e9a0b69ea2413cef3bc7490876584eaf68ad29e44d8df86d3f4b9c1b990f3387d5c2beedaabdc134952c66f606b7ebeae1c8e021f70e2741dd879cafccbc9cec210643d0cac7e2df4d43be6c7ffc0c35230814934c2bb0707ca2f8ca839259b48db3c8712e34bbaf95ab5f02f4941384f84619552ab7a19b98f065194e59a9137e687745127a14c7a90e8f0842646cb9d869d3e80a4f57d4fed47da1020424a588eeec682087e84fa6a868c05f8abc749c33f09eb2ee7e951f573a83fd8b948894a24450dd92afe583ac0d440f0f12baab18d5967b938d41b38138cc26bd84fc25f4b78f91eb118fdc8eedae8d2570a3404aaa92d70608131f10d39fba7bf2f649b251a50b57336967421b6f8a89b7bccd7ab15eeb467fcfaf6a66e3104066d7ea4c6f8b2787a669302a91b4c6967a957fc146f08321a5a2fcf2260070801c336f99dcf6a46717e7ee20338d2d92714dac828ffefed179d7445e7ba241e0e68bb154f1b6a510f2dd5438c1fea3cd1b9b08ddd568d0f3f99de1d27af3fc0340dd57fd53ac439ac539c9bf5b7648bac63e08780f230c347d13a45f400ec69477aa6a2beb0495c1c1bc1b648123e59df62fb223169f4465b49f5f2ce850fee4b752d78b7a739079772ca784284f21545a66ffd9bfcc3272f05678fa9054f05545a4a192574881174107dbcdfcf74db82fb78d9e6fcc8d377b34703d4c3229af0e30fe98cdbcb6e80a2321509bf5a481dd173aacb565411c522b40d6e7dc9bf13b248f3bfc9b4ed00385c31402c8b5f831fc2b24a868449dadac801669e91178f8105feb93d74936caef9aca786f38dfe64b86ac85a22b62fb3041f2e8642c"
};
