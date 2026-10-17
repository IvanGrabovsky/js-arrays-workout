// Каталог завдань та метаданих курсу
// УВАГА: Еталонні рішення зашифровані AES-256-GCM та доступні виключно в режимі викладача.
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
    "hint": "Порада: уважно ознайомтеся з вимогами до завдання «Створення масиву через квадратні дужки []». Оберіть відповідний метод масиву або цикл для обробки елементів та перевірте граничні випадки (порожній масив, відсутні поля).",
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
    "hint": "Порада: уважно ознайомтеся з вимогами до завдання «Створення масиву через конструктор new Array()». Оберіть відповідний метод масиву або цикл для обробки елементів та перевірте граничні випадки (порожній масив, відсутні поля).",
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
    "hint": "Порада: уважно ознайомтеся з вимогами до завдання «Створення послідовності чисел через Array.from()». Оберіть відповідний метод масиву або цикл для обробки елементів та перевірте граничні випадки (порожній масив, відсутні поля).",
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
    "hint": "Порада: уважно ознайомтеся з вимогами до завдання «Надійна перевірка на масив: Array.isArray vs typeof». Оберіть відповідний метод масиву або цикл для обробки елементів та перевірте граничні випадки (порожній масив, відсутні поля).",
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
    "hint": "Порада: уважно ознайомтеся з вимогами до завдання «Масиви в памʼяті: передача за посиланням». Оберіть відповідний метод масиву або цикл для обробки елементів та перевірте граничні випадки (порожній масив, відсутні поля).",
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
    "hint": "Порада: уважно ознайомтеся з вимогами до завдання «Створення незалежної неглибокої копії (Shallow Copy)». Оберіть відповідний метод масиву або цикл для обробки елементів та перевірте граничні випадки (порожній масив, відсутні поля).",
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
    "hint": "Порада: уважно ознайомтеся з вимогами до завдання «Швидке очищення масиву через length = 0». Оберіть відповідний метод масиву або цикл для обробки елементів та перевірте граничні випадки (порожній масив, відсутні поля).",
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
    "hint": "Порада: уважно ознайомтеся з вимогами до завдання «Масив зі змішаними типами даних». Оберіть відповідний метод масиву або цикл для обробки елементів та перевірте граничні випадки (порожній масив, відсутні поля).",
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
    "hint": "Порада: уважно ознайомтеся з вимогами до завдання «Моделювання обчислення фізичної адреси елемента». Оберіть відповідний метод масиву або цикл для обробки елементів та перевірте граничні випадки (порожній масив, відсутні поля).",
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
    "hint": "Порада: уважно ознайомтеся з вимогами до завдання «Виявлення розрідженого масиву (Sparse Array)». Оберіть відповідний метод масиву або цикл для обробки елементів та перевірте граничні випадки (порожній масив, відсутні поля).",
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
    "hint": "Порада: уважно ознайомтеся з вимогами до завдання «Отримання першого та останнього елемента». Оберіть відповідний метод масиву або цикл для обробки елементів та перевірте граничні випадки (порожній масив, відсутні поля).",
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
    "hint": "Порада: уважно ознайомтеся з вимогами до завдання «Доступ до елементів з кінця через arr.at()». Оберіть відповідний метод масиву або цикл для обробки елементів та перевірте граничні випадки (порожній масив, відсутні поля).",
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
    "hint": "Порада: уважно ознайомтеся з вимогами до завдання «Зміна значення елемента за індексом». Оберіть відповідний метод масиву або цикл для обробки елементів та перевірте граничні випадки (порожній масив, відсутні поля).",
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
    "hint": "Порада: уважно ознайомтеся з вимогами до завдання «Обмін двох елементів місцями за індексами». Оберіть відповідний метод масиву або цикл для обробки елементів та перевірте граничні випадки (порожній масив, відсутні поля).",
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
    "hint": "Порада: уважно ознайомтеся з вимогами до завдання «Обрізання довжини масиву через .length». Оберіть відповідний метод масиву або цикл для обробки елементів та перевірте граничні випадки (порожній масив, відсутні поля).",
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
    "hint": "Порада: уважно ознайомтеся з вимогами до завдання «Безпечне зчитування з дефолтним значенням». Оберіть відповідний метод масиву або цикл для обробки елементів та перевірте граничні випадки (порожній масив, відсутні поля).",
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
    "hint": "Порада: уважно ознайомтеся з вимогами до завдання «Отримання центрального елемента масиву». Оберіть відповідний метод масиву або цикл для обробки елементів та перевірте граничні випадки (порожній масив, відсутні поля).",
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
    "hint": "Порада: уважно ознайомтеся з вимогами до завдання «Оновлення значення останнього елемента». Оберіть відповідний метод масиву або цикл для обробки елементів та перевірте граничні випадки (порожній масив, відсутні поля).",
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
    "hint": "Порада: уважно ознайомтеся з вимогами до завдання «Циклічний доступ до елементів за модулем». Оберіть відповідний метод масиву або цикл для обробки елементів та перевірте граничні випадки (порожній масив, відсутні поля).",
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
    "hint": "Порада: уважно ознайомтеся з вимогами до завдання «Порівняння довжини двох масивів». Оберіть відповідний метод масиву або цикл для обробки елементів та перевірте граничні випадки (порожній масив, відсутні поля).",
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
    "hint": "Порада: уважно ознайомтеся з вимогами до завдання «Сума чисел через for (let i = 0; i < length; i++)». Оберіть відповідний метод масиву або цикл для обробки елементів та перевірте граничні випадки (порожній масив, відсутні поля).",
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
    "hint": "Порада: уважно ознайомтеся з вимогами до завдання «Реверсування масиву через цикл while». Оберіть відповідний метод масиву або цикл для обробки елементів та перевірте граничні випадки (порожній масив, відсутні поля).",
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
    "hint": "Порада: уважно ознайомтеся з вимогами до завдання «Фільтрація рядків за довжиною через for...of». Оберіть відповідний метод масиву або цикл для обробки елементів та перевірте граничні випадки (порожній масив, відсутні поля).",
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
    "hint": "Порада: уважно ознайомтеся з вимогами до завдання «Пошук мінімуму та максимуму без Math.min/max». Оберіть відповідний метод масиву або цикл для обробки елементів та перевірте граничні випадки (порожній масив, відсутні поля).",
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
    "hint": "Порада: уважно ознайомтеся з вимогами до завдання «Середнє арифметичне значення масиву». Оберіть відповідний метод масиву або цикл для обробки елементів та перевірте граничні випадки (порожній масив, відсутні поля).",
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
    "hint": "Порада: уважно ознайомтеся з вимогами до завдання «Підрахунок входжень елемента». Оберіть відповідний метод масиву або цикл для обробки елементів та перевірте граничні випадки (порожній масив, відсутні поля).",
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
    "hint": "Порада: уважно ознайомтеся з вимогами до завдання «Формування індексованого списку». Оберіть відповідний метод масиву або цикл для обробки елементів та перевірте граничні випадки (порожній масив, відсутні поля).",
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
    "hint": "Порада: уважно ознайомтеся з вимогами до завдання «Перебір масиву з довільним кроком». Оберіть відповідний метод масиву або цикл для обробки елементів та перевірте граничні випадки (порожній масив, відсутні поля).",
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
    "hint": "Порада: уважно ознайомтеся з вимогами до завдання «Побудова масиву накопичувальних сум». Оберіть відповідний метод масиву або цикл для обробки елементів та перевірте граничні випадки (порожній масив, відсутні поля).",
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
    "hint": "Порада: уважно ознайомтеся з вимогами до завдання «Дострокове переривання перебору (break)». Оберіть відповідний метод масиву або цикл для обробки елементів та перевірте граничні випадки (порожній масив, відсутні поля).",
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
    "hint": "Порада: уважно ознайомтеся з вимогами до завдання «Моделювання стека (LIFO) через push та pop». Оберіть відповідний метод масиву або цикл для обробки елементів та перевірте граничні випадки (порожній масив, відсутні поля).",
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
    "hint": "Порада: уважно ознайомтеся з вимогами до завдання «Моделювання черги (FIFO) через push та shift». Оберіть відповідний метод масиву або цикл для обробки елементів та перевірте граничні випадки (порожній масив, відсутні поля).",
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
    "hint": "Порада: уважно ознайомтеся з вимогами до завдання «Пріоритетне додавання на початок черги через unshift». Оберіть відповідний метод масиву або цикл для обробки елементів та перевірте граничні випадки (порожній масив, відсутні поля).",
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
    "hint": "Порада: уважно ознайомтеся з вимогами до завдання «Видалення N останніх елементів через pop()». Оберіть відповідний метод масиву або цикл для обробки елементів та перевірте граничні випадки (порожній масив, відсутні поля).",
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
    "hint": "Порада: уважно ознайомтеся з вимогами до завдання «Перевірка наявності елемента через includes()». Оберіть відповідний метод масиву або цикл для обробки елементів та перевірте граничні випадки (порожній масив, відсутні поля).",
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
    "hint": "Порада: уважно ознайомтеся з вимогами до завдання «Пошук першого індексу через indexOf()». Оберіть відповідний метод масиву або цикл для обробки елементів та перевірте граничні випадки (порожній масив, відсутні поля).",
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
    "hint": "Порада: уважно ознайомтеся з вимогами до завдання «Пошук останнього входження через lastIndexOf()». Оберіть відповідний метод масиву або цикл для обробки елементів та перевірте граничні випадки (порожній масив, відсутні поля).",
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
    "hint": "Порада: уважно ознайомтеся з вимогами до завдання «Видалення всіх екземплярів через indexOf та splice». Оберіть відповідний метод масиву або цикл для обробки елементів та перевірте граничні випадки (порожній масив, відсутні поля).",
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
    "hint": "Порада: уважно ознайомтеся з вимогами до завдання «Симуляція історії браузера (Undo / Redo)». Оберіть відповідний метод масиву або цикл для обробки елементів та перевірте граничні випадки (порожній масив, відсутні поля).",
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
    "hint": "Порада: уважно ознайомтеся з вимогами до завдання «Пакетне додавання елементів через push(...items)». Оберіть відповідний метод масиву або цикл для обробки елементів та перевірте граничні випадки (порожній масив, відсутні поля).",
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
    "hint": "Порада: уважно ознайомтеся з вимогами до завдання «Циклічний зсув масиву вправо на k позицій». Оберіть відповідний метод масиву або цикл для обробки елементів та перевірте граничні випадки (порожній масив, відсутні поля).",
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
    "hint": "Порада: уважно ознайомтеся з вимогами до завдання «Циклічний зсув масиву вліво на k позицій». Оберіть відповідний метод масиву або цикл для обробки елементів та перевірте граничні випадки (порожній масив, відсутні поля).",
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
    "hint": "Порада: уважно ознайомтеся з вимогами до завдання «Пагінація за допомогою slice(start, end)». Оберіть відповідний метод масиву або цикл для обробки елементів та перевірте граничні випадки (порожній масив, відсутні поля).",
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
    "hint": "Порада: уважно ознайомтеся з вимогами до завдання «Вилучення центральної частини без зміни оригіналу». Оберіть відповідний метод масиву або цикл для обробки елементів та перевірте граничні випадки (порожній масив, відсутні поля).",
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
    "hint": "Порада: уважно ознайомтеся з вимогами до завдання «Видалення елементів за індексом через splice()». Оберіть відповідний метод масиву або цикл для обробки елементів та перевірте граничні випадки (порожній масив, відсутні поля).",
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
    "hint": "Порада: уважно ознайомтеся з вимогами до завдання «Вставка елементів у довільну позицію без видалення». Оберіть відповідний метод масиву або цикл для обробки елементів та перевірте граничні випадки (порожній масив, відсутні поля).",
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
    "hint": "Порада: уважно ознайомтеся з вимогами до завдання «Заміна діапазону елементів через splice()». Оберіть відповідний метод масиву або цикл для обробки елементів та перевірте граничні випадки (порожній масив, відсутні поля).",
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
    "hint": "Порада: уважно ознайомтеся з вимогами до завдання «Обʼєднання кількох масивів через concat()». Оберіть відповідний метод масиву або цикл для обробки елементів та перевірте граничні випадки (порожній масив, відсутні поля).",
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
    "hint": "Порада: уважно ознайомтеся з вимогами до завдання «Отримання N останніх елементів через slice(-n)». Оберіть відповідний метод масиву або цикл для обробки елементів та перевірте граничні випадки (порожній масив, відсутні поля).",
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
    "hint": "Порада: уважно ознайомтеся з вимогами до завдання «Розбиття масиву на чанки фіксованого розміру». Оберіть відповідний метод масиву або цикл для обробки елементів та перевірте граничні випадки (порожній масив, відсутні поля).",
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
    "hint": "Порада: уважно ознайомтеся з вимогами до завдання «Вставка числа у відсортований масив на потрібне місце». Оберіть відповідний метод масиву або цикл для обробки елементів та перевірте граничні випадки (порожній масив, відсутні поля).",
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
    "hint": "Порада: уважно ознайомтеся з вимогами до завдання «Обʼєднання списків інвентаря з усуненням дублікатів». Оберіть відповідний метод масиву або цикл для обробки елементів та перевірте граничні випадки (порожній масив, відсутні поля).",
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
    "hint": "Порада: уважно ознайомтеся з вимогами до завдання «Вилучення діапазону із поверненням залишку та вилучених». Оберіть відповідний метод масиву або цикл для обробки елементів та перевірте граничні випадки (порожній масив, відсутні поля).",
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
    "hint": "Порада: уважно ознайомтеся з вимогами до завдання «Клонування масиву за допомогою slice(0)». Оберіть відповідний метод масиву або цикл для обробки елементів та перевірте граничні випадки (порожній масив, відсутні поля).",
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
    "hint": "Порада: уважно ознайомтеся з вимогами до завдання «Створення матриці rows x cols із дефолтним значенням». Оберіть відповідний метод масиву або цикл для обробки елементів та перевірте граничні випадки (порожній масив, відсутні поля).",
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
    "hint": "Порада: уважно ознайомтеся з вимогами до завдання «Безпечне зчитування комірки matrix[r][c]». Оберіть відповідний метод масиву або цикл для обробки елементів та перевірте граничні випадки (порожній масив, відсутні поля).",
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
    "hint": "Порада: уважно ознайомтеся з вимогами до завдання «Безпечний запис у комірку матриці». Оберіть відповідний метод масиву або цикл для обробки елементів та перевірте граничні випадки (порожній масив, відсутні поля).",
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
    "hint": "Порада: уважно ознайомтеся з вимогами до завдання «Сума всіх чисел у 2D масиві». Оберіть відповідний метод масиву або цикл для обробки елементів та перевірте граничні випадки (порожній масив, відсутні поля).",
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
    "hint": "Порада: уважно ознайомтеся з вимогами до завдання «Сума елементів кожного рядка матриці». Оберіть відповідний метод масиву або цикл для обробки елементів та перевірте граничні випадки (порожній масив, відсутні поля).",
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
    "hint": "Порада: уважно ознайомтеся з вимогами до завдання «Сума елементів кожного стовпчика матриці». Оберіть відповідний метод масиву або цикл для обробки елементів та перевірте граничні випадки (порожній масив, відсутні поля).",
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
    "hint": "Порада: уважно ознайомтеся з вимогами до завдання «Елементи головної діагоналі квадратної матриці». Оберіть відповідний метод масиву або цикл для обробки елементів та перевірте граничні випадки (порожній масив, відсутні поля).",
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
    "hint": "Порада: уважно ознайомтеся з вимогами до завдання «Транспонування прямокутної матриці». Оберіть відповідний метод масиву або цикл для обробки елементів та перевірте граничні випадки (порожній масив, відсутні поля).",
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
    "hint": "Порада: уважно ознайомтеся з вимогами до завдання «Пошук координат елемента в матриці». Оберіть відповідний метод масиву або цикл для обробки елементів та перевірте граничні випадки (порожній масив, відсутні поля).",
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
    "hint": "Порада: уважно ознайомтеся з вимогами до завдання «Сплющення 2D матриці в 1D масив через перебір». Оберіть відповідний метод масиву або цикл для обробки елементів та перевірте граничні випадки (порожній масив, відсутні поля).",
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
    "hint": "Порада: уважно ознайомтеся з вимогами до завдання «Перевірка переможця на полі Хрестики-Нулики 3x3». Оберіть відповідний метод масиву або цикл для обробки елементів та перевірте граничні випадки (порожній масив, відсутні поля).",
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
    "hint": "Порада: уважно ознайомтеся з вимогами до завдання «Генерація таблиці множення N x N». Оберіть відповідний метод масиву або цикл для обробки елементів та перевірте граничні випадки (порожній масив, відсутні поля).",
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
    "hint": "Порада: уважно ознайомтеся з вимогами до завдання «Власна реалізація forEach (Кастомний поліфіл)». Оберіть відповідний метод масиву або цикл для обробки елементів та перевірте граничні випадки (порожній масив, відсутні поля).",
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
    "hint": "Порада: уважно ознайомтеся з вимогами до завдання «Практична розсилка сповіщень підписникам». Оберіть відповідний метод масиву або цикл для обробки елементів та перевірте граничні випадки (порожній масив, відсутні поля).",
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
    "hint": "Порада: уважно ознайомтеся з вимогами до завдання «Підрахунок голосів на виборах за допомогою forEach». Оберіть відповідний метод масиву або цикл для обробки елементів та перевірте граничні випадки (порожній масив, відсутні поля).",
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
    "hint": "Порада: уважно ознайомтеся з вимогами до завдання «Власна реалізація map (Кастомний поліфіл)». Оберіть відповідний метод масиву або цикл для обробки елементів та перевірте граничні випадки (порожній масив, відсутні поля).",
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
    "hint": "Порада: уважно ознайомтеся з вимогами до завдання «E-commerce DTO картки товарів з перерахунком цін». Оберіть відповідний метод масиву або цикл для обробки елементів та перевірте граничні випадки (порожній масив, відсутні поля).",
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
    "hint": "Порада: уважно ознайомтеся з вимогами до завдання «Маскування персональних даних за GDPR». Оберіть відповідний метод масиву або цикл для обробки елементів та перевірте граничні випадки (порожній масив, відсутні поля).",
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
    "hint": "Порада: уважно ознайомтеся з вимогами до завдання «Нормалізація гео-координат». Оберіть відповідний метод масиву або цикл для обробки елементів та перевірте граничні випадки (порожній масив, відсутні поля).",
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
    "hint": "Порада: уважно ознайомтеся з вимогами до завдання «Власна реалізація filter (Кастомний поліфіл)». Оберіть відповідний метод масиву або цикл для обробки елементів та перевірте граничні випадки (порожній масив, відсутні поля).",
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
    "hint": "Порада: уважно ознайомтеся з вимогами до завдання «Фільтр валідних промокодів акції». Оберіть відповідний метод масиву або цикл для обробки елементів та перевірте граничні випадки (порожній масив, відсутні поля).",
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
    "hint": "Порада: уважно ознайомтеся з вимогами до завдання «Модерація коментарів та фільтрація спаму». Оберіть відповідний метод масиву або цикл для обробки елементів та перевірте граничні випадки (порожній масив, відсутні поля).",
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
    "hint": "Порада: уважно ознайомтеся з вимогами до завдання «Пошук вільних номерів готелю». Оберіть відповідний метод масиву або цикл для обробки елементів та перевірте граничні випадки (порожній масив, відсутні поля).",
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
    "hint": "Порада: уважно ознайомтеся з вимогами до завдання «Кастомні поліфіли myFind та myFindIndex». Оберіть відповідний метод масиву або цикл для обробки елементів та перевірте граничні випадки (порожній масив, відсутні поля).",
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
    "hint": "Порада: уважно ознайомтеся з вимогами до завдання «Виявлення першої критичної аномалії в логах». Оберіть відповідний метод масиву або цикл для обробки елементів та перевірте граничні випадки (порожній масив, відсутні поля).",
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
    "hint": "Порада: уважно ознайомтеся з вимогами до завдання «Вибір першого підходящого місця в літаку». Оберіть відповідний метод масиву або цикл для обробки елементів та перевірте граничні випадки (порожній масив, відсутні поля).",
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
    "hint": "Порада: уважно ознайомтеся з вимогами до завдання «Власні поліфіли mySome та myEvery». Оберіть відповідний метод масиву або цикл для обробки елементів та перевірте граничні випадки (порожній масив, відсутні поля).",
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
    "hint": "Порада: уважно ознайомтеся з вимогами до завдання «Валідація обовʼязкових полів форми». Оберіть відповідний метод масиву або цикл для обробки елементів та перевірте граничні випадки (порожній масив, відсутні поля).",
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
    "hint": "Порада: уважно ознайомтеся з вимогами до завдання «Перевірка платоспроможності кошика покупок». Оберіть відповідний метод масиву або цикл для обробки елементів та перевірте граничні випадки (порожній масив, відсутні поля).",
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
    "hint": "Порада: уважно ознайомтеся з вимогами до завдання «Перевірка статусу VIP у команді». Оберіть відповідний метод масиву або цикл для обробки елементів та перевірте граничні випадки (порожній масив, відсутні поля).",
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
    "hint": "Порада: уважно ознайомтеся з вимогами до завдання «Власна реалізація reduce (Кастомний поліфіл)». Оберіть відповідний метод масиву або цикл для обробки елементів та перевірте граничні випадки (порожній масив, відсутні поля).",
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
    "hint": "Порада: уважно ознайомтеся з вимогами до завдання «Групування покупок за категоріями через reduce». Оберіть відповідний метод масиву або цикл для обробки елементів та перевірте граничні випадки (порожній масив, відсутні поля).",
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
    "hint": "Порада: уважно ознайомтеся з вимогами до завдання «Генератор рядка URL query-параметрів». Оберіть відповідний метод масиву або цикл для обробки елементів та перевірте граничні випадки (порожній масив, відсутні поля).",
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
    "hint": "Порада: уважно ознайомтеся з вимогами до завдання «Обчислення фінансових метрик замовлень». Оберіть відповідний метод масиву або цикл для обробки елементів та перевірте граничні випадки (порожній масив, відсутні поля).",
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
    "hint": "Порада: уважно ознайомтеся з вимогами до завдання «Власні поліфіли flat та flatMap». Оберіть відповідний метод масиву або цикл для обробки елементів та перевірте граничні випадки (порожній масив, відсутні поля).",
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
    "hint": "Порада: уважно ознайомтеся з вимогами до завдання «Витягування унікальних хештегів із постів». Оберіть відповідний метод масиву або цикл для обробки елементів та перевірте граничні випадки (порожній масив, відсутні поля).",
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
    "hint": "Порада: уважно ознайомтеся з вимогами до завдання «Розкриття дерева категорій до 1 рівня». Оберіть відповідний метод масиву або цикл для обробки елементів та перевірте граничні випадки (порожній масив, відсутні поля).",
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
    "hint": "Порада: уважно ознайомтеся з вимогами до завдання «Пайплайн: Топ покупців інтернет-магазину». Оберіть відповідний метод масиву або цикл для обробки елементів та перевірте граничні випадки (порожній масив, відсутні поля).",
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
    "hint": "Порада: уважно ознайомтеся з вимогами до завдання «Генератор розумного плейлиста». Оберіть відповідний метод масиву або цикл для обробки елементів та перевірте граничні випадки (порожній масив, відсутні поля).",
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
    "hint": "Порада: уважно ознайомтеся з вимогами до завдання «Оптимізація інвентаря RPG персонажа». Оберіть відповідний метод масиву або цикл для обробки елементів та перевірте граничні випадки (порожній масив, відсутні поля).",
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
  }
];

export const ENCRYPTED_SOLUTIONS = {
  "1.1": "f72581106d27f41ed54ce2be:cfaf770f3dc3a945938b1803cd6b0ae6:40335d809e8db928b00a0dc658e7314e98",
  "1.2": "fa8744995d3cc615628c03d2:673896a94f86e84e08ee7c1d09456e7a:29326d1a1cf630b9f690c4b54dd2718f3f9f8f0bf95d6c8280ab576c0c8071d5e4858a90427e654145fd5eb790ccfe096157d3b27c063deb732ec97723174e9f9b2f5835e9",
  "1.3": "75e9ddae0165c2cb24c432b8:e0f62b4607b509178682b0e07e288eb3:3cb9bd5657e302d4cc641d936e15fafc796e7539e0207dc5941a254b6a7b73225dbb003447c9ed8bcf82d91075cc8140b03c820c5f2369a6bfbc402c7b1c889a70d825c8c2611225cae57d5a5bfe5992ec0b72d9f63510900799b730b9820c37",
  "1.4": "25882220d08015fa33793d6e:9840a1d93c657e90ea6aa70f0c819a1c:77137d6cb1b9c48bcda67d3199c3600fe9824e59086811b7b539127615e985470eb2a0d8598befe200c08901baf9580046b6a7d6",
  "1.5": "4eada4959ae0665d9721d97d:fbfc809f889a00be56135cf6e993175e:cf9aeaf06163a40e1352dfd590bdcd7f928f82cf8d6a6a81a519b0feb62c8aac45fdea3bdc3587fa2f6f8068030cb555826b",
  "1.6": "e93ac17d28e6bc1a369fcd77:a539ebb637abc2f38c9347875f068cc3:5188e6d70922bad4667fcc2b912fbc5dd1e82005fcde869b08cbef9749a361a5102ec7b61290c9d339ca6b0cb633155f4db7fa33d9889c9071b178c0bda7b8960e338c74c42902bd8a767360dba917a9f367eebbe9dc309b0132330aec9d49f5362868ce5966c0531002b4964de0f448a4bfb75054e7500516d76ebe35242303a7be98fe65301abc18292b8b0b1cbb445b7ce6aab86f1a2f25dd025f8dc22c23de5b099221f4f7",
  "1.7": "127d68f83df8ab046f4c5bdb:7293f25b84bd30513ee187d2ac57197e:aa2d90435e5172aab66e0920c2693bf9a96bc7b9b92da7c851dda0",
  "1.8": "9223b763174ff8c76aa3f785:20a0322f008ee3153e08028933f5a3bc:1d36bee9c8d451280491d3d81465617ba3b574758b5a893e7533e842f95042082a00",
  "1.9": "ef2ac91eb64d97c81b06dfeb:7d737bb28b58f097bc0a88bc4412bd76:12fbe975676e45a374480f3b96275f53582fb0296bd1b0ade0ccbe23aa62ac70d27ff6422c499af2a50f90c61cb2b1d5ff485b192672598951c34007677dcb6e4268ddb11d",
  "1.10": "bf0c05d64e99e24f3d1465b6:a8084effc29fa58a175f6118bb3a09cc:350bedd52a70801394392133415dffa55dc46a3f3fc011d3926ebad3135878b18bb772ba8f1e5783b9b62629",
  "2.1": "d569677b57642d80226035ef:5de187f461666d12a25d7a35fceb219d:8f9a74853e9e7f29c7ee7ba657de2117e56ef73ff7b4aa16939adc7df9054c07b5acac632c0cf6041bbac5193005e950008d6c694148e34760d5e6d5eb7591abca250ac7c6ff62578a898efeee75243764f03d6b9ca52b4e912ea7cfc17cd896306f52a20ea4f1944a9832f3d9e7e51bacf8064eedafb97e5d5ff77df916f0c69b007b58f20197d4c85ed40fc5f2594548a7d54b45",
  "2.2": "fa32d4a33c15498ca8153b0b:094e4b95477f95b1630fc76d15559a67:e2f66c8e21d8eb3126586709b9424c5d879db166950d2e1fa23ddbe122f8f3db6adf479c72d5fd10c813b6650fe1f32eb424980cdfe30962f6096403c11c1edeafb7da173d98bd1919fcb7df06c1e541e842221c59e10b",
  "2.3": "8a87ee46296f62cd3dce707a:a58c609715ef54f15edf2e9ba563a742:56e039ba519a85b4fb4129122f4e38295c95ded1c80d138da483cbe301474ed9ba502649b95584392dfec9b78e498ef13fcf3746eae2b3636cff262752d335ef566af4ea2ef8eaf0c7206a841da2147d37e7f076df5231640011f6ddd61d5a8cc6bd",
  "2.4": "6807e18f1bd3932e6c3b0f5e:be58580878252ae3cba520142ef17897:ee6d5be99d60fddf278e390c4d3c9a107ae8a6cfdaabfe57503d08e7a9c807e24d91ebe4f34ae8cd8f07ab727f4eb12653386e7eb22eb1bd97177df4ec80871eb300f505f9bae44951432137d6f8bead71d84164d9d2aa65b714a41b94279004bff26d52aa77f849dadabf989f480145e65779986cf516334c9e7e27542be54faeb746b0158780a294c35ff3cc50b6072497da565674462969982e06",
  "2.5": "6483b60e0861aac0962eab87:f4e1d83b20232d05155a1c2f93f13cfa:636466c31a842700f19de88c95d3879faf7f74c4639a1a3f362b703274c297d5a0015c14a958cbdc1083a0e35f26b2f8603a5e742a3eb22ec1576b93708f5609dfd52972550ddbe92c09469916b48488",
  "2.6": "bca419604cd39f10b323264a:e7e41235ca1245bb7b059bcd255fe4d8:2cb7d7147b0862deab60d2f4e84b88309d40294acf43de5945c8c156aa6bf04521a63bf70aa1d4d382e8ec2b5deed01409725c37f3996156df71d8949c55a9207f4cf780c2",
  "2.7": "d96d42fde50ea9b67f5cacc7:3c7545e747a93e83d9721350a3561355:180defe98e3bd229e1569f3415861be57ade72fd1b5312451e135ebf380dc3a3a6d9a1595f9bcf23daf5d8fc71fca021e26134d29c6c7f77b6ae8d2a8801b36ad667d65d98f2bfd158b77cbf9618f9d257339fbfcd5bf2c34bc630e32d257abc467282ca09c2251280e2791898f30f",
  "2.8": "3e7be658666a227ef7a805a9:8f8537441815dd6df9892fd29007bf89:9f7e7ca6abd5ebf0a81863ebb62ad3691c451ca5190659aee82bb95dab0da488cc8b39445eee958a08a813ef773899365f766d89fae39954372f593d31f6c8e8cd8ceeb12a8462948cc3f394c522fa3b53baecad86a8e8851da19b10767acdcf85ed59c4f57e7d3d32698a98ebd228ace45bc569",
  "2.9": "98d4c6d481fbc83a973ca74a:088a515eaf6638f66daa540156009685:b50a856adc07ea634e52207e5d03c7909a989b89e2e051ee663b2c0e40e10696cd2a346b7a930d9444c43a58003b32de8abd3748b5cc0da45718cf7117a792c6435078f4f9ae40e93e60dfea4d9ade28f00926736e6a1a0dc3c28a6108cf0aecdea91a7f04e43decbcfd6ff99bb29773f962b606b1ec2e2f449f61369b",
  "2.10": "8914f191e1dcfb4081447004:bb1d3362c38ed9aba692487f07b07b14:8e758ac75272eb3bd9d04e61d1d59b121a195cf932eb288929eb44be0d8990059b774175fe0a4559bdb50fa704dc15411a7bc6b06ec7e5a9b44f698179c699ee983e3873427aae222f4c00b7a7748fddd7799a65eeb4bb74b670df7462866a40bc7fa7c50aebd02dd5b11eaaff44019fd4b5050a53d59460467dcbc8",
  "3.1": "b56e3656285261c8b14d0493:674c113fdff998b32efdcc7b92f9121a:21d5f25e4974ea81f46b6876b051b307c39470a398b70fa060a89b32a1dceb68885d01947e47a130cb51a669b69fef47848eb74680a2fc2cea8f31b0b0af519c15862bedb6cdb3173b4ce19d0dd90eb50262ba6b",
  "3.2": "0bf62c6a971d241908eaa7f0:5e577f808c11f30ddb6b9e5650ec3cf4:76e036e4513ae238456e85fe65d90dce8e8a4a2ea431806df90c3bced1082c4f92fd57b5211ca96a781ab958037a6964c486b55fd3d37fac1fe723aca1c2d6241a6ecb05c9e471c794e39018d637f1c7b9d9fd7a6264929437d27a4c69",
  "3.3": "fb0c9e643a6be65aa27a3d00:c1f7d888457dca942b8d7ae409ed4261:e1cce53c38517f55586526cd1230bd4790b58548be679a2e92b6fea915d8c6b01509d19ab3f223068a73cc8db18fbef30859dfdc8316ce0fdc6394f1b4268fe25d7b40d274ae71bda8e123d15f21b3a90a722bad3ca39cad375e8e0c4f08f1cb0006f2bd38cc9f1df7d50f895a4648c711a4a26146dd8ce2a4289cbad4ba70ba9115cd",
  "3.4": "0be28e5e9b776e9fe19eee19:7fe5b43c66008e3acfd2ff11dc9961bc:7dee8a5ba53774ab2ba81e82b0c42fdf1b873a1da3db067b192c75aa6a52ea09c2c6749f2ece55128a365c1b43eb372731e434ef83ee9cd4d715d9ea82ec2518a41a945b024247fa452da96c67de2e860224517d30005b3761f689d57ce3fe7eea0d433bb40d3cc4cc334bf65bcf20b46ca8f87af3cc23f6b54fd8e83c80701267c70e89a9a20d7aaf87268a58affd7940e03497110e9842d75cf7c5b0fd87e0d278409241fdf93b9b2277fa9d1780985a7b80f64b7e04df74d4a419c4954577ea6b9cee6cc9154bedc0ba5044be9fe765bb8d9db2ad54f3d9898105e701f63b720de18c5d0efc776cab699532de9210eda8e1591e7b3d63d3d0e631110886b3",
  "3.5": "d656211abb8db0d3fc01e6ad:da71efde6f62c970e893f9acae71520e:fdd37c334324be92150d4558233c1c12aea878b303f8ad0cc52e880f003e211b8f7fabec46cdf8f34aae9dcc4632b3c6944f2e3756aa35678dc5fcc86f3c1de24b50ca6f9c69ed01251b07b32598b20a4e92ca6dead43bc0bb6253923ba38903478290d9d75a47ae34fe9185bb0e3dcb0be1ebfc8e27371cd2c2bf376af7ce2461",
  "3.6": "6b0e17bfefeb19d7549959fb:de74c81c11761c223ee7951d2bf49d8c:7ac5f07005ac499ba2a20b9bdbd1f3d6f8c9ee679fb8e1ccc7ae68e40030ec06f9a10e6e5bf9c75cc7bb17b7ef66bf84747387ec9f8ad1c19a44988811367e6fe7b1e85d02caef9ac17f983504676936cedb8ec0db16710fa0bfbf3c6de6d230ee877aa993",
  "3.7": "5bbd8c39f6c7ef251cea7957:074752e0a07b513ee54c7b69f6c76b8d:a96ddc94c3807c29bbc427eb15fbd1093a64ecfccf41a6b64aa34542a9192999ec5d606d49eb0c7d90d84acdeef9f5ac78722324b3b6e461dc8621efd1bdbf277c4446dd3fba75907380d717369b7abbb7b3ddce1b7bcad2473d835663",
  "3.8": "2b4573900fc8670389629c4e:4b5f167a121badf4f1a71e2a2d710309:2cef1ff45efb961fb4fd686e68a119cd8584cba6817151da552a24874791100c697228288915c99181d2ca2941e72ccbb4c59ea20b07f47c16d9c3606d426b902ba95b53263a03c9511510f2b163a5d2092fcdc4de30a73e660158f6d1f781ff3889826b90b555812ec2b710d9ff2ada94a2",
  "3.9": "de9de56298b638124a2f3da2:c891fdb389b7b655ec2cdf14b47bde53:47688b15dd369db35f34a3929820dc2e436c288eda79714a651a5bdc4aa91e4dbca10ca17100a98c4215036c6e0fd0f2a0a66094404e0523fb897f9ed23c24446b9b7eca1c10f9e03196aa36053da6050d21640b0d575cef77fc4e6f8fc617db492e5d6b1f4fd88bd7ed4c3a929717a9f16c59c996e6d1",
  "3.10": "e25ebfe1387f3db062e2d88d:64dbb94579a8c77e4199a823b132ebaa:c226bfb5078325c8c47dc44ca9eebe3c278569dc293a2b99e188370afa9dce1fa12eaf88e6a34a8f91eb0230b7b48adabffc289ea05e2da95fe4ef3b61f08560f84a4baecef3fab20fab695e2ccb1c518742cada463e96ea19a7207513018202abd4589d6da71a61e5108b5cacde1bdf63025850633e7a4ebaa47127a35c8798c52666bcc234b62234c7d177cd29b21a07ef27aefe47cb430c17b449ab5bbe9e09b91aa88df24221729dcf58bba1ed4633",
  "4.1": "50289321cf819a72c458a895:be0a4114535c17cea055f1d3cbc4cf00:e1cbdedcd24f7a1c015a4beff4327a74a99359e728134ddaa3b23f9674c26a1ef6392053bf59eec9a87f3a79afabf28775ce2c4618101acd61bb5cd6d1d7598345199ad57ae7fd97c135aafce93a8311211665c306b1cb09335944d16dd2cb4cfee0996f6c59ba22c85b58dfa2101ae02c186ed3b6d4ad3b4321be3b3135084bfc28cd413fc3fa1bdf9767b53cdc91e51a1b142f0e0c318f1e2df871a6b2c0fe7e4fbb1b067a492521ea4b9e30b7d64e92453bc22944af151e09d0190c0afab9f144daf798d09653d127a28d4e8e741a782c5d7a9bdea3b2cf67789c0c7f29aaaa8d8286a69a78",
  "4.2": "6542e69bc8287148dcd7c6ab:5fc5eef7f6de2783df79dfc999fde2df:e68fa9b342c507e47e9019b8fb5400eefc382eb11d731f5def080187e447a12c76bee0f4628f8c7bfa8092e41263ae267138335add61a1ab01cd39dcce332db78914be8ffb1931d05d5d999e70b7d43ac90d2538fc5c81f2f40291dc5611784f4273671520282b3e0389eb7d78840cf2c617c3fe92ed0aff1a5f2c158de1ccd327fb8082543a31ed94ab54899066bf72ada8bbced088fa9dc9be12a94aa1d803e280a7",
  "4.3": "8c149c68ceaff80ba5a54270:3e6b2107731dad3e2e66363ae99d075f:0bd1b236e88f55312acd89c3a5172b1288e6b0345408293b31d2c8c2c24577247c7790e4babb02418748f32a7a2bcb61d7b0f72ee1eca56481cd7a78",
  "4.4": "58df008b238a974562315f4d:3be73c0ade99dbd278ab38237bd03dd2:b8228bef1665dcaab32f0d0edd61ccfc6c50d7067bc7b6117695af0dc9a4b2319d88e9fc59e2daf777666321a5a685f9008fab20c987bffa3762394aed97244127051d3a1463727edb3af8ad7e8367dd2a392544066785363ad9c6d919c3e7594389da009e4fa1e8a5b944e99487e91b2f",
  "4.5": "f7f11f2f4cb9bc333f5b8d92:05384afff7dc17dad42c2fb9274213ca:9474ba465ac2e09546fe2094bf81c4d8e8d0627efc198fdf072867a7e05c3703e1abd2c2",
  "4.6": "6e3f60f3a7a409518e09350b:ca687b8412bbfc65d94cca6ee1fb1c30:826aeada32a74608e0267b41424b23eb74501c55dd6e1622e99ce3db894fc5",
  "4.7": "00925a1c96f6f2b28d587c76:3198ea3d310163f703622c383419a7a7:47e2330d14aa65713ab7c89e13d7c93496ecb48cc6d4508e4684cdbc5ff47cf553ddcd",
  "4.8": "90b6c72be867a2f1dc12f4d7:d8753adbcc3884abf93ecf5da78a281f:329ef0abdac99833b79f4923ff4ad9f8fc2675ae0b1cf532999596c611e4b7b6f037a4b95cd482d9dca0fe911bde954c77e11c4853fb275ff13ada537398157065076541e7fce6eceb6afc75b6bba62f9a18b4847c3c5f476a7fffc37a0e0e168df90a9b52be55c523f802b231f37e8eb9d6b75cbcdd2e23a3027c3b9c9f8e2fecc467824bbedfff9ae2cb079e46d670",
  "4.9": "193017881afcb7bbec6a7ee0:e8686bd1b1ed02f4de84f8217beed751:f5b78fd1a1d0373a33e42670e8430123a6e914e87c92b8720b53650d26ee2b85832658e7548f108c7b4cf273c34a903bb805afb4ca234504e904e88edd8baecd6b6d250044df5654ba609a8acf3505693ef55b84c7976f97c4600e384d3a973768c8970b084613eac22bbc037dd3f3340f03cd136e78cc9d1ac15da924b2436a6d5e23f7ea50faf152bcc241ba0405529674f5505a3305d99a95a2b8595d98596ddc8e74d85518765ecb9a1703b4e0f95cc2e8bbba4fec451e75a6e518cdaf8c75055c3ce80fea36c006184fd6be1153b059ae81a4d85d8412286b9910290725e269de8192991927ed19bd8960dbc3a965be6b86c27697a762b0becadd29594bd48fae812595bedc36b45fcd67211e4d5e39864850e3f420a11aefd52b3932d9ee1b205b6f962b9c17e86cca82ac1702cab7b3a7fab15babe9f0ee1d352e4a8ce3ece1cac7d71fd480018837fe75f9b7190372ace536a2e7d54adc608868a3f5946e4935527964c5098cc547fc6359db972d0ce7920a387fe7780a841ef4c30af4835d163fc8b05ac7488ce085958df8701a5f8f78f13ed9b25ebca44960b34518214c89a6502e69c6cb8ec41a33150451b9bdff327b1a8308fe7c7d6ff912e1dedac600815f00553674aa313a91ef969d09a7cdf9f35d5944b71266532e2331d5a97a117bb3923af25454d69eb3618ef4ca14a051750fc8e5bec5e516f84c6ae8a16ce89bc62e",
  "4.10": "11bd1cb3a5e170e4b133fe9a:23f20a4fcf92fcc38a5cbf47d276056c:e40f04e44d354ac43450428fb2e072cc127bf775ce063fa1a809ed24d47d7590fbe03fa4029e1ba89e6588acfdf7ff17c2be",
  "4.11": "33ae4e1a225898c2d6a3802b:c8b8c6e30811c501d1fbc08117a2c170:8f6fa143a406bbf1e53878bcf7823e18d185c62bba78979ca9e807a365f68c1843ef10e956c7836cb53a9a03a46eddd9ac754b5197bc829872d99bfc233b2a1a2bf0ea3e0d67b49cbd9784c894fd42304ad2e0acfabdf63a98b9969927d81d5449c50b9ac41c9dfc54e2126b420aad21645174e26ea6fdb1a64f337a6317c8e7d1c7e71eb3651fd31cc092b21ee8a9a8e218622f08648bfac675170eece8ee604657008f89fef0f784bcbcf3f0c408c94a84",
  "4.12": "fd30457389f12db810f92e90:5fc0ce8f56eb216f7d0e948d2cafde1d:958480c20452728db568c4a1c29b25e92c337f47b1de96ee4847359b54a78b6902e2a843790fc78d26f58388969fcd075a27676ad22a110c0304b8964f77b9a49af14656a8d33978b958b4b7ca9d5883787fe8f8f6b5dd566aea1cd7627d3292abcfef17d0ba3905124ef92d3f1e08d4e341e0c47aad5ff58f5560657dba07e5a3edead4f1e9faff601e1f62e1788a4d15b6f468fc0d1abfefea4677fae9c09480b607cfb8bd51a2611fb509566c08b0eb",
  "5.1": "9b83c5b8349a4fd79e7c01bc:a8b4b6556a723e2f65f0cda334c3d78e:d1b530693b91829d2320a1c2ed8f9afbc2917e951da5eda2791888bad633bb3a644c51217f245419c5528ce1fe4fe7e320220af228c11b1d30aab74ca7dd6e5d3eae7bc42c08375de72c346fbd45c8cc17b4856f7c2f03",
  "5.2": "2388cee9f660cf48e2da790e:a91a4a60b7b04d1b646c738e8d56839b:2ed3d3ff8df5daacb9e15fe514e8cedb765ca0435ec12dec67ebecb2068e9c2323ff8b84780b507999465807356af47d6cb2693b77735894ac4fbd0de73dc29e",
  "5.3": "32f11a3426ae82af1499129f:77fa6bddf5757c1959f96c037afb296f:13090ad60931d31efb691bd2e56712df03b2af352209d9fbe96db26a04b0d7aed53edebdf7ccbb6fd0454e30ceef7edabd6b1ad6fe5357c26aeb05bb422c8e115ce713060d218209520f4e8e6c4c652e6bf30a0539e8d6e2a4a9b08ebf07a467d55e414b38625e87c81388618330e64902836fb3dfe492e5f4b2043e6604",
  "5.4": "dbc0c8f2d50474dd00a5b49e:178c71251435d2239ecd8f81f094e406:cd9119fc6e1e5f1e21016e8db54f48d23e8d85bb0408150afb6b00c2c0517fdd2671096b9b296ff316a97d52d7f4a444c8af5ebe2e6744dabce1d2466ca42fbde08e251260d169ac3bbb636395",
  "5.5": "73d4c7778a556cc0a9708434:d53f6783658f851715c4e23e97150f2e:f46ba3f07a207da494df56ead69c6d4d43730841c5501c1ceacac79fc6cefa3d6f6c82579421f36fdf7cd6a76ae772764bdeebee4bae27d323a3dffc1760401f7d5a50505ea88b148be9264b1d0d0727de3f10de944df3af",
  "5.6": "90ddba9fadd10cd7ba885411:09b81572707b4bad9a891bbcc1d367ff:2106e9e938733a23a80891dbf6c92693bdb00a41c818",
  "5.7": "056da4df44f22040b8a6807c:66c19370e2e21c52e6a3fac84e5c53b8:1b741b34010206fb0b0ab2ea25020a606a39764bbffa3dcb60c6870a88d723b39badde5f384484f7078b2673",
  "5.8": "208027cc4238a3ef257b8468:793612fe594455a9792a9ca8572b61f8:7d65bdc770109c2baaeb739f13464acd66bf142147b7ef5a2689d4f3ec94665cd9041aa2bdded2ea3868d389bdd165e3e1812db2610be7b96d378c861a7ffa21c9ccc247d8106170a2a763058ef1ac07acfa2a7983a745ca9398e0329189bffc52c13892794430f9a3c16cb62a5ae6f238cee62a21b5fd011fff6354ab43dbe7b9708b2ce7c38e3558d151b662000c1b3c",
  "5.9": "cc71883d2a4f16669e8a34d1:8143c354d027f92e4c556319ef6d2887:dc8b0ea17f67c0c4c179e85f9820dab817de71175900dbd1493297211f191d47f2cb5787ef13b768d2ec1e00b440a5a6a8bf2f113440e140fac897f75719c3f4bbae5f5cb522133e5f9540a65212f15142a27bb8c33b1d651d79fc1f457ec499be94da5172bff96623c39e85388bf73ef438cd31577089e875d07d6b968fe1111ca4c279",
  "5.10": "95cdb923daa55e7e60f894b0:f152a54bd5173d51ab46514e970324c9:de1dad84bd0f48ca46173f51e7368d70e9e29c77566bfecdd0edd52cf831f4ad40d43898f8e69a5582ea32c4a09214d081d7c78172e13702b917175d30c8b266ac161831d550d7fdf42576a792aea569cc3cac9a7a47b6aefa6df8af423d8cfbb6bfb15d7e7cf62fea3c560963299992936a864bfda003bd48377309d4909d59e1b8356b7863cb51f3de1dd741",
  "5.11": "3c87841be37ee2ed8ebedcd8:f402ef4b7810a66924dda7931244d639:4b1004db90c690e18b62ffa119b4f82d8f3cb8f476252b9246d28421591c6e3400606b7b705f43ef3c893474c150289ffa32d387b5d6ca38029cd832f6cfd34684d2cafe3ff3a16c50c061354adb65189aaa2c59aaf12c16c24f397a73386568510e4bccfcef6fe0972086563c172b5e7afc0e2677d7ade18b894f618162f75a917b6f1ce4d6d76826d84d42510935d39927",
  "5.12": "36334e858eb16c353aad192f:01da1783f7c42967ae32b28fddb0dfa2:21d8bfcbe62f8a2eeae2f8c046df5c84a3485f9650b3c2bdfcd42f123fbf5a1c6bdf25972979e50d8f0dff1cfac6a2f46dd4d293f01032cf87e3fd6591e81018e829327a4e5357c4f98b4a7786b1bce94e",
  "6.1": "f6ceaa15fea867cf7deab311:84f27a708b08295228e569c0c1cfb123:f1a5459376d5db4fba7bae772cba85c3798c2755e8ebfe40702e2ba47f29554ba2618b10b35ede9622c7f7fbcc558e524e60066971882b1fdbcd8d780981009fd83a3190b43a7a9b0fa216210b18730b2392c288acf7ba34a76d7ba0ffca3c558c70d1b332551fd00b75c75942f5374c2dc61c5df781c0443bef4ac682fd5292acd9004b6a4a799a5e02174b9557fe327e9301e06334655f68a1c5506ec2fd0a4857603a61f21a6a2e63334457abd4f42e2f2d5625d93e5bd967528397d8f759af6e8721",
  "6.2": "4c85ff6eecb35dea9dcf5475:b9c96c1bce34abdc2b96d1f72e9eccc5:1b36ef5c98ef066e4476e68edf002edfefd79bffb62c1fe19e8698cd7e28222991d5245bf8e325453b5841d293a713ccd76a2fa215cc0ab311e8c33104e12c0a18e8010587e517c3dad5279fb8e7e07c72c1cda6638e12abacc0f5b166dbc937ec2da4a920391ac9227f149694e1251d6a4ef1cbcbc24ff20785b17a2521948332ff52d6be849c931206fb45a047a1cb9309b0b297ce",
  "6.3": "ed14b62ae06a7dfee0356b6a:6620f00f853be3c46dfcb04d0fc095f5:b641b5163420d0f75701c4e8b55e0119c706965823623253e278a43869038172975eb175a0c5909afe8d6e1b6be82a4a848c70f68e5a15ac10ab82aedff1466ade988da74e20d5892cd38e600124dc8f123ad25b0ed134b1b76c1570f5af7fa7c45734bbac5f117f00cb36bc702bcecafbb4e082df03683ef10587e724eeaebf8f00710f3adf289628",
  "6.4": "011ec9cad8a9b28aaf76ee10:707336c2bcc94eda4588a2c5f7eac9aa:98de8acac52467679c44801787127921fa78bc8ecee5c9a0e9fe58a458c6f33f0d058155ce4605f6f910c898615851ce226eaf96a256215793624d809ac4599a90c93b60b95f8206e7bf6d22812710686dde4fec0401890a45fb762be3e681231b0064ddc52b98ed2098e45273c4f172dfc8712ba6b7213ac9e4fa807079a4e46d839c02",
  "6.5": "6f95fad518dc967426e6d49f:83706bfa65d43b0ea9253c0b7fd3af35:c03174c3ffeb199be4e4d945d3dbba590dcc7b8cfc024c7899cdc47683948d8738dcbccf258c668e2367190fd5ffee30c41f05613ba313aacee9853982a9312a4004afd0ccbbd394fc7259286034cb22868eac6642ea5aa7080ee8e43f6f135a907c5707d410c9eb7287aa32446e0f7945dd2533264d0fa1078f6c06a39e4773e3a285bf35226c03720da7b047274ebe58789df7093828af292003080ddeebe1023847c0939995580e69b090",
  "6.6": "65fee390075bc505d9bddc91:1235ee57dc8b7b8a72dfd97bd8e41cf9:2adad070763b1df33187545f4f00b3d2973ddb52c0009bb495537fbb045a76f516775e4b5ffdb4ae03e9186ea29bd922637581f2d7a22dae7f3a9cee68f870b5827502728141bcbf4a49d3d66eb38393c3d5b6b1df8723d81fc14a167fd5ef899839adf292586362d8977e5f184190e36fad385ab4e2134c8ce86aa6ba60aa3c89a8ca3ce180868d3644f2f03152b87dec1b07819e9455e7e7e0fe91c895369804941100e68cb9c5144440d917d0099928d6ff9fdab7541f9cd21d279e63e11cc053cc54f47e9c53f612dd1b511616602e398cd0e3cf248bff7f0dc15d02d6031a24f330748e209f98d55afbd0f0c721fd3ea0e8aaaf50484f32f505b174ffb04de6618112b13418",
  "6.7": "797b10037ffe4ddb1583eafe:08423084255a9363efad388df88ab58b:ffbd7cfe3112566f612f83aafe30210321b2980002ec0d63543e7b82b52f4d47218621a288807ec74a2c702eac4baa45ee6f1f3c795ee0047d34c37a614ee1a9749ce51786250ae4a7e8b7498273e0fb40e0aa8798eeb7f9c1547020c5228da8b76b2c1920338b433119371ad7d3c37e800ac42b9f50b1e2719d19591c40e6e5057e1bedbef2d9e9cf18d659",
  "6.8": "56a624aa0b6fde613ce27c3f:4286f987eb428f6223c79321cc9362c6:4c31b565a08e29d50cfa3232cd3be958abbb361007f0414bc894cdbab0c295df17a981186f44668b778f5bbc209b8d207335cdb4e69229ea6ad510514ab0c61a410e8f8f913ac11184fc4c51fc193543d8228dc563b33fd455427303b616773162e9d4428c7cc4c9898cb1951f6d8170f0570c41c4738e8e4bcbf54621620b0d9a540b39f531e9ac3f2804ecbcf6472501d0d68e4a6876ac2ea4584d411f9be2cacc088e56405fbc4e98c91f39275e150e1cdc97bfddfff0da6d0e4644b8b74fe91b2244bae3df190353aaa81d98f41bec83d3ef2cb76f94a4a20cd6012b957d318eb5375d9c98caeb4bd7db604577a959e9",
  "6.9": "c48097c03844ee7f98d9aac8:b3bac8e5e57622abcfefa112cd28eb2c:199aa46065e44252c663dfcf2bf17ffa861d890072aaa5805ccc7349cf19bd02763d075610e7f24894c2f10e56dac84e9a4db6fe72e79d24ad15b409330de308c27ce6e2ce3338ce0fc74de11f877f2be9965ba486d35ddf9d9612a128f7abcbeb467c38532cd3810247c9f27dbea17c0b676fe40d9191f683b45ee0a24bbeef8245725d09d2409822ccf128eff7457c3cf01b278e396d39507c8ede6341ed071797ae02",
  "6.10": "cb9807274c6d07ab7bbaad73:a947e95a65c5b98d0b3f7e52cf5d6b06:48cfbe625dc1e57e0e7a743dedffa94ccc2adc63cf4178d0fda0c4f5bec25bddcfad03b7b5bf8cbf3cdf4f5a440db3ab90f0bfc2fbbeee16a023e1209e01e2a6b3c390c10afbe14e19acf898902c16070487fbcc633062f51b884994325b6c89a645648465c771458fcde24c7bb369e844ef3927fd053b48c0f0c14e5fbbdcb42d6b31fb92f4128cb9badbc3b0",
  "6.11": "016fc9c6f9b45ee01fd3d495:33cbc709366112cf3b6bb8ae4ac68b9c:f47c0e92ffc57e6fea17180383290ef21597009fd4c26327edc81244bd23bbecab71c3c4e5d64b0b5c2b143eaad76eee6ae98b2679c08245dd6afd3597aa66a5d86074cbb095bb79136ea10597ae38f946e4882a77ddc1d479f2b73780b3ac31cfc5666a60ca6082bb6b6eb054d5eed88025045ca6e78b57175be64f6570a6874cb9e131058a31c8a104d514dc5ceef65c632f01f1b0230543dce23de4ca86240b174417e79d690a86b564a87c17b14e85742aff34340d8c8b2c843e64d8e581ece77edd7d93895c9775853f44827a7f75a8446e0c64a344cc2a588313c209d78d6afe858dee136e6b26a839bae29e783dd87e990cafb1b947f0930aef236c3e0ddbbc85bdff3ca091553a3188ca5f01da16133363b97b7800f5737c00820b861e6ac46b5dfd68241d677b3ce36d05c9c95247118f4c8b10ea8bd60015e690d5e59264c4e69a639f9df7d394a0ccbf2c0e533dd45c589101b7310ab0e568d0574c27376c8ed1444706b6626da6459e3e9c69b8685eeac9b5dd09c03735476dab341df2261065e94168a85f98613a9472fb69ae89dedbe772c7d5a8bd78fba689a76be3c6d24903d0f12344a6a0b4082045274196e4e0ed42213f1c61d4919929b65dc7b15174961dca2971168b1c30c8ce5bd25379d93a0d",
  "6.12": "cea632d5e6757a3f91ac3f5d:7e93e218f04a24c5965ec859f8ee84cd:1a98a3b69728c9b0fd2205ad66d4be4c2604642ce29910f684f5df9b45b2d80d71f447addadfedd1884b6325eb7f871616f7f8fcc17d1716fddc94b0424fa0f84e5970f9027c52ec161a589910da4cd9977fe38a2ada56555f23b548a2691d1fecfe3fcdb4eda51e5eeb2ef2937f45edc15e14e07eb7f95e796a595f00fabae0c4271e30a799b248b624129f635d8045895c29dd1d36fb4f423d48ecdc75f1ae",
  "7.1": "2cb6b994294a64bab15c8a7c:79de86351255536547216e77d4842d41:07122c9e8b2fbb5900b38456601f8b7b7386f9d03c34090ea1265583b030e7e3f9e1bbcc42a30737f2dad3a9407af0676421c284fee66fc79f80218aa80fd0255c8a937ab642a8ec3926b7a1e255b2d36d7bb2170063",
  "7.2": "8f14f6a01c96e505b6915414:b9e34c5c114445f1e03543168a1358b0:d8d8a84bc27456f40aa8096fb0d15851786e55447928f587271a18e14578e47b4de2bacf345a2b63ef015c19d56e3675c27e6440493f5215677285251b1e6f7ad3b6161ca274bb9ff5beb958d07f07035cb35fcb7364ed27395c58b76abf2e35da94d00d3cdadf1965479a2c4fbd03c1f4c4000fe48d43f17e57d2a095b68365154b7442bc28bd546732948fe6923b2b",
  "7.3": "13dda4eab05314ab8ba8ce4c:f5e4e2f3a00c0b3ff247803a23cc4042:c9505de13b028baba2af30cdf5bad8751af40b35cb8dcb31b783e144b71a45fb67d3150ea24cc5c6eed96f8fb23fa012a04538525e43ed109282fe398b912d2bc4615d2cf770767f65caa4e5dbe942199273cdd77c33f7cb3561248c2ebc0065fa58ecf5693ee935422e9cd15de4e261a3c8754b6221de91d80958bbe3b892ab07d8712115013fee9bde284a55b667ae1fe22610b4578bee2bd5e42fd63a603579069d55f785285ed72cbfe863e7076a6a72738edb20b7e5829da66bde41901063cc2d9d505e8ab67f22b6eca1eb8a2090c2c6f206b02012c345b1657c4dfcd10ce440f5865bd4f02139aaff5c7d66cdf60d6aa6",
  "8.1": "ac6902931a78dc6f966f9212:91ad1909505931ea6b1bffeff9fbfd88:6196011947aef326b1036ab671b0b52030b0a595d6c0d2019afed72fc300e74865867786b615b4949e2c94b516e06e175acac2c8f593790bcf2019ff548fc05ca4f5e34cc03846fbb254ed1b4e43b66a82014b127985e3f3b146ceb90f12a70f624ea35987b55f9f3270",
  "8.2": "6d4f6f3e89a790e50ce1852c:1a8d5e481b070a596c3d84b8443983be:6555d03733ae81e28a513afb5c3c83f7af572077bf68310819b81d949f448e000752b8b9a11c0873cf2dd448c69edce8fd2d068d1fd0d9b2924bd2f72fcb97b3f5007db8a6a5c2f3ac328c7dd51adb27602b7050b57a18cd373b66bf7cbe9278f70696a2b9c59d65d6632e86582e7ba355aeccce262d8b78c98a9cace680d77cd1889bf39ea2fbbbe91eda40ac4ae74773bf64aeb06d05323d3d240eb0fb7b5a6e20d7c23d3ff7428f6e08e90cdc0a2a18243316bfd2ef85d403e15afc96feb3582dfe51099bb5fe160e843f4615821e0bb76ac24d3fc648e0116d745640c59ed1c2297c6f661bf18e7001490cef81f5086564be48c1f9062b3794a2d405596c9475b93faeb0fd68f9a52e88",
  "8.3": "48b359d0155a2a2279ac109b:f92fea107d84166766ef88e85a82784f:7cf26c81c1c1e67250d21be4e84655ce7ce18dbc7eaf42d615be2aabd02660f9637523c6809dcfbcb51e0262c7b209ed3107c383dec2fc72316e7eb54df80adc4d58042d8c1aa9e789aaa057974a4fa701565973a0beb323251e2c29391d0144d7b075c8b41ced613fc6e3a103b941d64e6267f32fabc3a402267a80ccc8cba1d916788adc1cc40c6c5cd32e56ac36c7b60dba9cbb16d7c0dcf125303ccad96c46c235406ad837c328e51286ef4674551f98b59beb7bfedef55b32d110225b99e8e0c925d7bd6614d0a9321880a3931ee6833d2b070ade0b0593bc05c6756b80230b9afbdabc4847f65d95da1c2244bd9aa1dac435d491836363f6ebef5fbb4c85abbc0ae1a69ab8a324f8e424fd84e5eaa52e5788815546f56cedcb7479af139043f5d4eb5941f23f92b71d950d6399a3f154249656a99ed571d615f53ad09c24416f66410fa0105924b914548dc74db21233a209a3723e16d0670a6a5e977c4b86fb5c19aa5e426a5482d6d9f4e05f0ae530371178a2c4e1351ed833673664609d",
  "8.4": "d85a17354e393d472000ec6f:ae72ed9267993c631b5512fd162f0e3d:d137f2a20719e79f745f5d8565ba3c8ef269fc9f55a4126635ceb5a8d9a72f63651e1f27ea3b9abd0717e25a8b79ccc77f2418d8711c5dbb8fe1f0427f769ca0dbe24a6009a88b3d91754748764955bf83e44f48603a6ac374da44c9d71e23894c5293e9bb6ceea1",
  "9.1": "f6fd24b116aad70aea6ce90a:351627bb65a0c72e13607691cb0cc429:d242d54a4d3ff9e04e16f03a0552e37076202e292f93eeaf49406bf4db55f489209125dd8b7b26e95255c27e82aacf9e8d1176a9fca7615cf4aad1476376ac733d588944b3073aa6dbf4a5b7f4bf72f6c2cab0821e9796a98daa27aed9256f4c530919572fe82ac0b2862ce8615c8da635b1f47c0dad94b2ff2e1abc",
  "9.2": "0d5940b6148f4b6abb57a0b4:99eb4bcb29da447081f3d80e77e9fba6:f3d9dabd79c7fb374e03e56615331f27c04048e702adaf1898c21f8f5aedfd28ec9fb3672b52b352d08520ac47beec875fc533fd6e5b21f0944fa8befa558459ffff4683e99399331d8008eacf5f57704fb5e924a3f564c5135505affbda455fa03c736850f8ee253ef36c5e",
  "9.3": "c35ec926fe089c32f66a6fb2:a0674e29c2b206564b98ecac86d27b89:b3d3fd6c5ab4d122cbeec72e79f91664c7c88041789a97d867b02c951602abcf3da9452c32bf77162b2385ab5a9ed8e3a8badb59b521bdd36bd738861ac75d38252eddd000b978607f302e7e9a5318233429aadee60319f0c89b387679631aefc171d08b724397b1227605215edb83fdf2c156137f0a7eb99fe1dbbb5e85dc10",
  "9.4": "d5e92170fb35884a60be8cb5:976f1dc19b5754bf3309bd4f113cf010:d84b5e4cfadf3799d96289b3edec989c8d751253b5e612c3772ab0c6a6fc25fd460fbc744e7faaa6028ab5ac9d20d47f4b105700602faf3968a39d2662d6582eaea21445878ae9c4758e07dd67eb58b7bb2cefcbb993e6cb90e54afdcc18b17c60e2bf74",
  "10.1": "df9295160a4829f117b65c5a:e527aaf32524954ce959f90ff9db5701:e9c28a5b16324c2c22a81faf3dca421e840d8638eab44f571c007c8ae90038e233158aa9719f7a6c0000f73e8da6c9dd35bee5cc58f69cba7c094147f92655ba328ed9f03015e233d0ee30943e38466a306572e2e9a79e8470ba3fd270bbf72d5582080d12b2e906c4e701a8ffe26a84d792f132fbf4d3df2a0adcae87ce7b876a8c356745ee62623a26e365828d108517b0e0b1307bc21e1d23571fbb1dc405745687aa853f42ff9b",
  "10.2": "24ea0644c7e4a80cc5fcf87f:166414cd061edeabc3010111ba825527:0b81872b30988c9a0ad287c3ee3179b98ceee2467db1606c737fcc596085ad02c7fbdc21dee024447fa4efc3c21d75ce08002398f182c19ad7d86f741d5a5ad6f4d2e97c7ec0b32f719175632102f0fd108f58be3fe9b619c5f662488f505a686aafad6cfefb0c4fa255d2e63b3b21b10d7fcc7f436278c18c9a173e8bfd14d7e7c36fd610d14f8be0e8f1d3e84ef00b94f99555ad570f8ba09a31",
  "10.3": "c8760cb64a32cb5f38e07661:7b024febbf17e2d0ac19a44c0eef4d47:547d5477b4d2000d9ab781d2f5019c2c355ff69ffa8e8902705c2299e1717b64eaf6f5166daf7f463c8282113e31b791479363cae7cb69a32542fd7f7aa3640628e78a96d59cd1a2a43886f8ef9941c31109e8a75a1daef6dd2a4750a3384332dad62b4215c8f9ec33d19a635fedd3997405a02f68",
  "11.1": "6193e9155c4d6c22d31543fe:8549e62e8057a94579276a8cc98f7629:e7360a39969d7b01eb142d4f32e5fbb938dd0986eeb590ea5ec78a99f6d10b18c3906e4dd74ad044906c22d8ebbe8bac4fe3a9cd1a07bbd41c3f830363ea1fee1adef6a353367553e53c59fbb75a981ab3af7a12bcde8ff82ed165c4f7b7f39d5ed7b6f289caca17f7e789b5e9ad18382a934383549f1acef5ae0dfd20fc1e87eb65ea5797fe504d7553763f71d3853a1ed2bff9712302b4d344f23a5c037bf26cc3d5936d771ddf79aabec4c586ce64d24b693cad19d269ce79dac46992dc5603dea5faedca2deef146f6556e07f457ab48cabb5808dbbf90049ecb8a2c8dd6bf36a562ba69b2c8be70cdb13de41f2cd8553a5a4f738960e9a5675eb8c4381ec6a1cabee76c7ea24d5baeb4c6b214c0ee78",
  "11.2": "f74697a32dec4046599a0ef8:d57fc99498a7b8c33037638c5a1b96ae:3fcde33014708a1b6f1b936b1d593c74a94d9e3faedbdb84df5463fc21a3282b5279c458fd0a24c67e3bfcef7bcd9d8912569b033a7f16203c997b0ad4bfbfa5c18dbfcbd5474185353c3f64194d46dee82237824625494fa9b8442b34fe08162b8806e820b3e1b9317055cd87b58d1b66eebde4bfc50eb9dd3d5895eae4ad454719bc42234553bb514af0421b9e9526f84bba507b4f",
  "11.3": "64e58c0b7e392dccc9447fb3:a7c4c2c60978716850cb184669c52288:ecdfae6abaf5e8b54c193122da23af1fcbf401affe9fc419fc56f584d26f14595c32df416def62a5c27962c1f7a7cb57aeb4ab72af06a42770410aae82759dfff68ec56992a4219ed7c3e1578d97c9601e751fab53259443f665636e924e1b762de41141d6b99877884fc0ad958ee5fc4299299425867eb94c752157e42f4a8325576ee74301ccc82422fdf6e42c4b07fe8306d354024553733ef8c20fa4e995cf8f35f3",
  "11.4": "a230fb7859a5803193fc48b2:2c9dea365a6fcb6e68c51e68eee418f5:cd32a16f3d3b8641069c9793a60e28d5bd1bd26d420bb3283b3f1ec00c59048f6117437a59b5047e4acb3cefd2132341ede7dc3965f7ce45b6cb5a6c6c04f4c9de12386573808b12505791af990e74a569661957ec83ec57922b27e17e618434049935f081831e654bbd6e0ce839c460ebff61e6da5414d5ad39a82ced3b52ab",
  "12.1": "46e92bc2c3fe2f265d2c9dd9:3e5a9c52bd28bbd7492152651e7c0fb9:ebd3c334092071add0f76e7fa62d11c293fbbba0686ccbc61373459d9f91f093c593adc3ce44efe185c67680a63edda28adbc7546137ed9e7788598dc3bb0b8f645680d58b49dc79846d00aab6489915baa50966fc83577dff8085e0d4c1f1b0ebdcc6602e271690337f390ae048fe8d47141031a414a86ac421749aef05983a6ab36de3d70d52a6f820e637b4bf86a4af2fb396e9d00fef99faa811ef029c3330f50ed033efc6818e369426c8a09bc3331bd9f504f4223a7355277e2e4c558c269ba300ee31cab2269b630c72b11a18148d7f1dedd3f7ff49fddd51d7458faec4c0602721e4e11d96dc59954cc7e62a62fd3c57d21799358b1591ad536a89c9cd0a2c643d478a5d1f1790a271d19a18aa383ca596e390071ace9a6dcf195caff58b4e5e1756be631be6fda13f7f062cae91a413ae01d4eb9a99b1b1394f40895fc8ccf2edd600f74b10615a802dce2214e6ceb2d5",
  "12.2": "6cc05d3c9008711a616ab781:943908bb9e68f2af4b5ef202af3bfc3f:228a51730b60a89564bd728a95d3b19ee01bc1c2d2900f1e18489da474561da4117aef93566312be81cdef0856295a1d86da385a8fe0257fa050c69305a011128ace65d919afae48287d044f98fdd5e4a2c0d99b503510a558a4a949ba4b799be99e4ba2ae8ab7217f274cd28bb13b05fc",
  "12.3": "1f59fc6041dd3e97d35f77bf:86b0e7f6689dc2dfa2e8c7361bf236c3:349b9f4d291a70ddd673bbd37bc6f57a0b7c2c263e3fec6fbd25327d0e04dcfbb3161f68a67a38c90361aa44ee4020a19a811e647d2c31777a5c1f30abdeb8cdaa293e926c882619ea2c0bf826c5d334d979be6aa303891f015f73abb3014d3dc85e689f6d478a91b2ada4b5d74a44b4eeb084bd2c8f10a9fce4fda0373ee9d5015b6db36e5a73b2f0f8b0c548a21590ff6dc5229adba9010e1db3256febe18d5fd7671d0b7609970ce4ba3cf71937d3cc03812198",
  "12.4": "f6a772a3ed60773a148b192b:c5b91a5810fdee8d9f41bc6905992e34:d3a15b9c2760c20cc1af623049c6413bf2b328c9ec0f93755e33c3058ede381c4e20d1342d03aec1f31eb520f4a8a1c1dad21b510508824bab0fd122bc7a2122f8279583a14da09055207471e5be2a70256760d6d0a0b4ef1006b409add636a2b8b832f4e89eaae13c2ed2ede6898f5025f7d848c452c96ce6106abea3817a304601eb22fab96544e970e0a3ff38b624d22581365cf08964c8499618d5890a21953250dd04bc1442c4314257be4fe310bcbeb41b8533d78b0be02cf066bc1a98d2b3672ed6d6994c0d29f406a5db2b9c6f06a9f88c449a1b3dfa196a680896c61d20849c5b0908f4acbdc5ccae13ad75f380492da7dd4e0734b41d796786c57c59308aae3c522a0674960c2fc3a4095f06235d258a958b84738e178f68a4365166a4da81c1cb653d0eee001d65556fc4d6901c7667adcd9df0439aae641c1fe8fe027ee19de9ff9e51d27f1b46fb5230d129b788e1391052b3f21b145f0f6a6d135ccb025edeabf3606e9b741f396f6a95d98ab8e589ccd110771cc7105973586b3911039de40681bea0f6",
  "13.1": "91c696f8e887f73559dde269:33e8c94d960220e9b5e70bd9d37ed3d7:b31eb379ff0b3634e79d7e5485f3112d97380efa96d94fb28cf8b62e92c318a2d72dedd8d39de1269bd25c921768e3d527c244ef910baa1bf1048e76b8cc7aea90edb592c6d5aecc09cdc1ba5d762a71ec8209a13b7689a02df2e569609f17e4874817e61bfb355fac3b34a1177cfd148cbfdadd8a7bac36d1efc56e58354b82a648a83e7b57b3525a3c8802afcc1e7dc7c8d808abc73287cfedc3872ba46dccd5b4ce4553d5c4374ca98aeb3044b20c3ebb2178a898dd85b700c21a9139faffe09c67e9edb87c1bc9f725c80d7510d94b9570bed736c54d3a11253888706f13c35db7bbca6c7aba54dbd72028a2b092957f2d327a7881a914a36ab7ddffc50ad0617c2adf1205700332d5181e3114cfba6d5978c6d2e70b72fa1615acd77005c3967ef30dc8e122efeeccff2b14ce90d54df3cbf1b3adfa5f62a654c20b362cbf19c4b1662168403cb25add10538d8b11c3733fbda2e6e86b2595ffc37ffb797209b16c4aa83a6d2061509908facf866713417d",
  "13.2": "bcf5f08b0ebc3256e8cd6c83:024fd3f0e16d4d57a22de7db41b0ec4e:e4135c933dc9fa1bcb9dcd2d6c5d5f881abcf6a83bdc41a0defa44472baa3ece9b0ade5496eb8f5f975f177bf6550e3ea91e7c768efc998f11ebb293e7bc8a8f39dc60c002ccf571f8205cfc32f8dbe371055c96bc1d4e0dde702aed1817aa05cd080f98755a70a073c108b69e76087759cb8afefb0fa3b27d1dbccf2d7d56bf5d5361d333637e01454499bfb1ec48492bb85d07eb6dfa542a",
  "13.3": "8b8582c1ff279690e7a58d9b:d2cb9bb5ad9b5f2d791a047ceade8441:b54b3624cc28f228255eda7b5ff089f0d5051c1f804a5eb813464f5562085a367e3ee4be63efa5f9d052037204a7fbc1e1538621730e76a51cfb7acc4342f87bccee32b40b",
  "14.1": "e6df9d2941e30d8851aad6b3:06bb51292dac9e9aa4ff57bd3065aced:8f56034a29472136495e008a545754185c2c6e8f4c7d053591807386a071e659bc7d22e36c8e9b6808b4a984a263f1e07edad400dc64e3a6ff52fbf99dc389b497bab9b9ca25aa490d9e406e3534cce55d0b87052bf2adfb42fd5440bd453f1867564a43246cdd664212a0f46c23e7f5144baa6a5a66d7ea5606d16240ca6f0fa86a2c1e77176481f9208f23bc520d811f6c3cb4a91c4f23224138c93f78826b8e274b22017251c34905bc2b3f918a4206931c25111b1c360d572b3fc69134395169759645d6a612f6d2e1751dbea8ae2565245a30b0395905a1ed7d80939fe9aae16fb5833fc8df70517c49dc651212fa8dc3996eb00b531230c2f45bf8039c628c0f9ba62e99f7c9cc37f9814de824470f037ad24e304201938a04cc6ba2f6c78a718ff9a4f36d01a6f314b52ae029c11688bdd467471b7df55d184855e7d1bcde4b2b07ee689d47d73ddaf89c5b1f1ff25a9df57a5f57c69d",
  "14.2": "a6c193acadecb8ca524d7b27:d85fae824c1bba6d89390ddfb469dbad:2154df685e2c1927b75f90686368cb3bb97077ddd45fe6a82f1e16cb50b6ede23a03d0149c26990c3b58cdc1c1bfab27a4d883d612825d5668b45926a60db277cc92e0a652d2ab7344371faaa7e1e58b913d191cfa9c44750ba9f1d0fb223ea1e12a9658b6c462b72e9b4170bab1a298e102885066b6a81a2d450d487582aaa21b2ffe70b71e5bf25f94bde10cd186f6a3abdf925eb03392e13975ed0ea0c4791e73f9ab7e7ca85fafd8f50022ffa550bfd5310f268a07b8a97977760053471dcff1680c64b957d30cc2a26f48e656b162013cb4fc37d26c60c9b15910cfe9291d0a2ae1a4c6a6f9463f3cfdb768f3203fb9741a6a3fb1dae116f9f0e0cf545e17c5323519e78cf0e6a8fae763b2947872376a80fc03190106c0aa861bd6e2a5a31259846b7daea323c67abd1d44e8",
  "14.3": "5c31bd5684a091b0eab8fa7d:dd4653cf4146e9c935186a85c2d8995c:831dc19779687916d89c74e5c0ee257cfc5300b66afba68e9d6517994a8585009829662b7a653857f9f69c55ca4d7b553ec05179b7819b063150fd08227befc6a96b8c3be07df87d6866db8f9a035f8341f72c8774bdb837bc3bc881b0edfb18cb42ed4450a597e9dcbe8234b9c6f6e6fe6285eaf9616fdb2a3412bd18ba79cc366966e9dcd1fe1c6d54d71c756aa4e8deeb506d3644ed9b3511eb14bdd6d71c0b6276f59b5bce33e32a0ea6a676f67813c0dfd76147c486287f21df1a6a062403a33c4342be70bc4ec20c3e52b09cc027919d99bd31df24fca468a2a6e785c876967062a7b185e5fb3d67b43fac754eab2fd8ff1c9092243c37a8687fbfd3836d98894d7e08467661a600f3c809717159188b37c69e99fd378ae06ee90abe92d916bae22470ac4054337d4c8a42b2cc13fd5afc016d1a587d0c9083cc79450274beba111d53d12f5861a59e917a69e0d2097946ddc8b99454ea1dba4dad2bfd5a3199124f5237c4cf5e69f21cd194caacc26c538e1a59ffad0188f147f035c6ae46c70d0cb056110b37246407dc8bfd661c1448e7562b976d5f23df5090c33b10b834037a9e70bfcc6403c001a920958ff3bb9544e2203e2e71e9e924f3fa08a96f3f73ce6431fb785caf1ba9968bb95318026eeba40cfeee384db87445e1124742ec46da3f52060bb9c3eec72fe705ba"
};
