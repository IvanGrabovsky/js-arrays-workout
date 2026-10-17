// Каталог завдань та метаданих курсу "JS Arrays Mastery Workout"
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
    "hint": "return [a, b, c];",
    "starterParams": "a, b, c",
    "starterBody": "return [];",
    "solutionBody": "return [a, b, c];",
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
    "hint": "if (length <= 0) return []; return new Array(length).fill(fillValue);",
    "starterParams": "length, fillValue",
    "starterBody": "return [];",
    "solutionBody": "if (length <= 0) return []; return new Array(length).fill(fillValue);",
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
    "hint": "if (start > end) return []; return Array.from({ length: end - start + 1 }, (_, i) => start + i);",
    "starterParams": "start, end",
    "starterBody": "return [];",
    "solutionBody": "if (start > end) return []; return Array.from({ length: end - start + 1 }, (_, i) => start + i);",
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
    "hint": "return Array.isArray(value) ? \"array\" : \"not_array\";",
    "starterParams": "value",
    "starterBody": "return \"not_array\";",
    "solutionBody": "return Array.isArray(value) ? \"array\" : \"not_array\";",
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
    "hint": "if (arr.length > 0) arr[0] = newValue; return arr;",
    "starterParams": "arr, newValue",
    "starterBody": "return arr;",
    "solutionBody": "if (arr.length > 0) arr[0] = newValue; return arr;",
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
    "hint": "const copy = [...arr]; if (copy.length > 0) copy[copy.length - 1] = newValue; return { copy, originalUnchanged: arr[arr.length - 1] !== newValue || arr.length === 0 };",
    "starterParams": "arr, newValue",
    "starterBody": "return { copy: [], originalUnchanged: false };",
    "solutionBody": "const copy = [...arr]; if (copy.length > 0) copy[copy.length - 1] = newValue; return { copy, originalUnchanged: arr[arr.length - 1] !== newValue || arr.length === 0 };",
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
    "hint": "arr.length = 0; return arr;",
    "starterParams": "arr",
    "starterBody": "return [];",
    "solutionBody": "arr.length = 0; return arr;",
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
    "hint": "return [id, name, isActive, tags];",
    "starterParams": "id, name, isActive, tags",
    "starterBody": "return [];",
    "solutionBody": "return [id, name, isActive, tags];",
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
    "hint": "if (index < 0) return null; return baseAddress + index * elementSize;",
    "starterParams": "baseAddress, index, elementSize",
    "starterBody": "return null;",
    "solutionBody": "if (index < 0) return null; return baseAddress + index * elementSize;",
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
    "hint": "return Object.keys(arr).length < arr.length;",
    "starterParams": "arr",
    "starterBody": "return false;",
    "solutionBody": "return Object.keys(arr).length < arr.length;",
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
    "hint": "if (!arr || arr.length === 0) return { first: undefined, last: undefined, length: 0 }; return { first: arr[0], last: arr[arr.length - 1], length: arr.length };",
    "starterParams": "arr",
    "starterBody": "return { first: undefined, last: undefined, length: 0 };",
    "solutionBody": "if (!arr || arr.length === 0) return { first: null, last: null, length: 0 }; return { first: arr[0], last: arr[arr.length - 1], length: arr.length };",
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
    "hint": "return arr.at ? arr.at(offset) : (offset < 0 ? arr[arr.length + offset] : arr[offset]);",
    "starterParams": "arr, offset",
    "starterBody": "return undefined;",
    "solutionBody": "return arr.at ? arr.at(offset) : (offset < 0 ? arr[arr.length + offset] : arr[offset]);",
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
    "hint": "const copy = [...arr]; if (index >= 0 && index < copy.length) copy[index] = newValue; return copy;",
    "starterParams": "arr, index, newValue",
    "starterBody": "return [...arr];",
    "solutionBody": "const copy = [...arr]; if (index >= 0 && index < copy.length) copy[index] = newValue; return copy;",
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
    "hint": "const copy = [...arr]; if (i >= 0 && i < copy.length && j >= 0 && j < copy.length) { const temp = copy[i]; copy[i] = copy[j]; copy[j] = temp; } return copy;",
    "starterParams": "arr, i, j",
    "starterBody": "return [...arr];",
    "solutionBody": "const copy = [...arr]; if (i >= 0 && i < copy.length && j >= 0 && j < copy.length) { const temp = copy[i]; copy[i] = copy[j]; copy[j] = temp; } return copy;",
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
    "hint": "const copy = [...arr]; if (newLength >= 0) copy.length = newLength; return copy;",
    "starterParams": "arr, newLength",
    "starterBody": "return [];",
    "solutionBody": "const copy = [...arr]; if (newLength >= 0) copy.length = newLength; return copy;",
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
    "hint": "return (arr && arr[index] !== undefined) ? arr[index] : defaultValue;",
    "starterParams": "arr, index, defaultValue",
    "starterBody": "return defaultValue;",
    "solutionBody": "return (arr && arr[index] !== undefined) ? arr[index] : defaultValue;",
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
    "hint": "if (!arr || arr.length === 0) return null; const midIdx = Math.floor((arr.length - 1) / 2); return arr[midIdx];",
    "starterParams": "arr",
    "starterBody": "return null;",
    "solutionBody": "if (!arr || arr.length === 0) return null; const midIdx = Math.floor((arr.length - 1) / 2); return arr[midIdx];",
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
    "hint": "const copy = [...arr]; if (copy.length === 0) copy.push(newLast); else copy[copy.length - 1] = newLast; return copy;",
    "starterParams": "arr, newLast",
    "starterBody": "return [];",
    "solutionBody": "const copy = [...arr]; if (copy.length === 0) copy.push(newLast); else copy[copy.length - 1] = newLast; return copy;",
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
    "hint": "if (!arr || arr.length === 0) return undefined; const idx = ((step % arr.length) + arr.length) % arr.length; return arr[idx];",
    "starterParams": "arr, step",
    "starterBody": "return undefined;",
    "solutionBody": "if (!arr || arr.length === 0) return undefined; const idx = ((step % arr.length) + arr.length) % arr.length; return arr[idx];",
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
    "hint": "if (arr1.length > arr2.length) return \"first_longer\"; if (arr2.length > arr1.length) return \"second_longer\"; return \"equal\";",
    "starterParams": "arr1, arr2",
    "starterBody": "return \"equal\";",
    "solutionBody": "if (arr1.length > arr2.length) return \"first_longer\"; if (arr2.length > arr1.length) return \"second_longer\"; return \"equal\";",
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
    "hint": "let sum = 0; for (let i = 0; i < numbers.length; i++) sum += numbers[i]; return sum;",
    "starterParams": "numbers",
    "starterBody": "return 0;",
    "solutionBody": "let sum = 0; for (let i = 0; i < numbers.length; i++) sum += numbers[i]; return sum;",
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
    "hint": "const res = []; let i = arr.length - 1; while (i >= 0) { res.push(arr[i]); i--; } return res;",
    "starterParams": "arr",
    "starterBody": "return [];",
    "solutionBody": "const res = []; let i = arr.length - 1; while (i >= 0) { res.push(arr[i]); i--; } return res;",
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
    "hint": "const res = []; for (const word of words) { if (typeof word === \"string\" && word.length >= minLength) res.push(word); } return res;",
    "starterParams": "words, minLength",
    "starterBody": "return [];",
    "solutionBody": "const res = []; for (const word of words) { if (typeof word === \"string\" && word.length >= minLength) res.push(word); } return res;",
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
    "hint": "if (!numbers || numbers.length === 0) return { min: null, max: null }; let min = numbers[0], max = numbers[0]; for (let i = 1; i < numbers.length; i++) { if (numbers[i] < min) min = numbers[i]; if (numbers[i] > max) max = numbers[i]; } return { min, max };",
    "starterParams": "numbers",
    "starterBody": "return { min: null, max: null };",
    "solutionBody": "if (!numbers || numbers.length === 0) return { min: null, max: null }; let min = numbers[0], max = numbers[0]; for (let i = 1; i < numbers.length; i++) { if (numbers[i] < min) min = numbers[i]; if (numbers[i] > max) max = numbers[i]; } return { min, max };",
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
    "hint": "if (!arr || arr.length === 0) return 0; let sum = 0; for (const x of arr) sum += x; return Number((sum / arr.length).toFixed(2));",
    "starterParams": "arr",
    "starterBody": "return 0;",
    "solutionBody": "if (!arr || arr.length === 0) return 0; let sum = 0; for (const x of arr) sum += x; return Number((sum / arr.length).toFixed(2));",
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
    "hint": "let count = 0; for (let i = 0; i < arr.length; i++) { if (arr[i] === target) count++; } return count;",
    "starterParams": "arr, target",
    "starterBody": "return 0;",
    "solutionBody": "let count = 0; for (let i = 0; i < arr.length; i++) { if (arr[i] === target) count++; } return count;",
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
    "hint": "const res = []; for (let i = 0; i < arr.length; i++) res.push(`${i}: ${arr[i]}`); return res;",
    "starterParams": "arr",
    "starterBody": "return [];",
    "solutionBody": "const res = []; for (let i = 0; i < arr.length; i++) res.push(`${i}: ${arr[i]}`); return res;",
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
    "hint": "if (step <= 0) return []; const res = []; for (let i = 0; i < arr.length; i += step) res.push(arr[i]); return res;",
    "starterParams": "arr, step",
    "starterBody": "return [];",
    "solutionBody": "if (step <= 0) return []; const res = []; for (let i = 0; i < arr.length; i += step) res.push(arr[i]); return res;",
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
    "hint": "const res = []; let acc = 0; for (let i = 0; i < numbers.length; i++) { acc += numbers[i]; res.push(acc); } return res;",
    "starterParams": "numbers",
    "starterBody": "return [];",
    "solutionBody": "const res = []; let acc = 0; for (let i = 0; i < numbers.length; i++) { acc += numbers[i]; res.push(acc); } return res;",
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
    "hint": "let value = null; let checkedSteps = 0; for (let i = 0; i < arr.length; i++) { checkedSteps++; if (arr[i] % 2 === 0) { value = arr[i]; break; } } return { value, checkedSteps };",
    "starterParams": "arr",
    "starterBody": "return { value: null, checkedSteps: 0 };",
    "solutionBody": "let value = null; let checkedSteps = 0; for (let i = 0; i < arr.length; i++) { checkedSteps++; if (arr[i] % 2 === 0) { value = arr[i]; break; } } return { value, checkedSteps };",
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
    "hint": "const currentStack = []; const history = []; for (const cmd of commands) { if (cmd.action === \"push\") currentStack.push(cmd.item); else if (cmd.action === \"pop\") history.push(currentStack.pop()); } return { currentStack, history };",
    "starterParams": "commands",
    "starterBody": "return { currentStack: [], history: [] };",
    "solutionBody": "const currentStack = []; const history = []; for (const cmd of commands) { if (cmd.action === \"push\") currentStack.push(cmd.item); else if (cmd.action === \"pop\") history.push(currentStack.pop()); } return { currentStack, history };",
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
    "hint": "const queue = []; const servedOrders = []; for (const c of incoming) queue.push(c); while (queue.length > 0) servedOrders.push(queue.shift()); return servedOrders;",
    "starterParams": "incoming",
    "starterBody": "return [];",
    "solutionBody": "const queue = []; const servedOrders = []; for (const c of incoming) queue.push(c); while (queue.length > 0) servedOrders.push(queue.shift()); return servedOrders;",
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
    "hint": "const res = [...queue]; res.unshift(...vipList); return res;",
    "starterParams": "queue, vipList",
    "starterBody": "return [];",
    "solutionBody": "const res = [...queue]; res.unshift(...vipList); return res;",
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
    "hint": "const copy = [...arr]; for (let i = 0; i < count; i++) { if (copy.length === 0) break; copy.pop(); } return copy;",
    "starterParams": "arr, count",
    "starterBody": "return [];",
    "solutionBody": "const copy = [...arr]; for (let i = 0; i < count; i++) { if (copy.length === 0) break; copy.pop(); } return copy;",
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
    "hint": "return allowedItems.includes(value);",
    "starterParams": "allowedItems, value",
    "starterBody": "return false;",
    "solutionBody": "return allowedItems.includes(value);",
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
    "hint": "return arr.indexOf(searchItem);",
    "starterParams": "arr, searchItem",
    "starterBody": "return -1;",
    "solutionBody": "return arr.indexOf(searchItem);",
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
    "hint": "return arr.lastIndexOf(searchItem);",
    "starterParams": "arr, searchItem",
    "starterBody": "return -1;",
    "solutionBody": "return arr.lastIndexOf(searchItem);",
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
    "hint": "const res = [...arr]; let idx = res.indexOf(targetValue); while (idx !== -1) { res.splice(idx, 1); idx = res.indexOf(targetValue); } return res;",
    "starterParams": "arr, targetValue",
    "starterBody": "return [];",
    "solutionBody": "const res = [...arr]; let idx = res.indexOf(targetValue); while (idx !== -1) { res.splice(idx, 1); idx = res.indexOf(targetValue); } return res;",
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
    "hint": "let current = initialPage; const backStack = []; const forwardStack = []; for (const cmd of actions) { if (cmd.type === \"visit\") { backStack.push(current); forwardStack.length = 0; current = cmd.url; } else if (cmd.type === \"back\" && backStack.length > 0) { forwardStack.push(current); current = backStack.pop(); } else if (cmd.type === \"forward\" && forwardStack.length > 0) { backStack.push(current); current = forwardStack.pop(); } } return { current, backCount: backStack.length, forwardCount: forwardStack.length };",
    "starterParams": "initialPage, actions",
    "starterBody": "return { current: initialPage, backCount: 0, forwardCount: 0 };",
    "solutionBody": "let current = initialPage; const backStack = []; const forwardStack = []; for (const cmd of actions) { if (cmd.type === \"visit\") { backStack.push(current); forwardStack.length = 0; current = cmd.url; } else if (cmd.type === \"back\" && backStack.length > 0) { forwardStack.push(current); current = backStack.pop(); } else if (cmd.type === \"forward\" && forwardStack.length > 0) { backStack.push(current); current = forwardStack.pop(); } } return { current, backCount: backStack.length, forwardCount: forwardStack.length };",
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
    "hint": "targetArray.push(...newItems); return targetArray;",
    "starterParams": "targetArray, newItems",
    "starterBody": "return targetArray;",
    "solutionBody": "targetArray.push(...newItems); return targetArray;",
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
    "hint": "if (!arr || arr.length <= 1) return [...(arr || [])]; const copy = [...arr]; const steps = k % copy.length; for (let i = 0; i < steps; i++) copy.unshift(copy.pop()); return copy;",
    "starterParams": "arr, k",
    "starterBody": "return [...arr];",
    "solutionBody": "if (!arr || arr.length <= 1) return [...(arr || [])]; const copy = [...arr]; const steps = k % copy.length; for (let i = 0; i < steps; i++) copy.unshift(copy.pop()); return copy;",
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
    "hint": "if (!arr || arr.length <= 1) return [...(arr || [])]; const copy = [...arr]; const steps = k % copy.length; for (let i = 0; i < steps; i++) copy.push(copy.shift()); return copy;",
    "starterParams": "arr, k",
    "starterBody": "return [...arr];",
    "solutionBody": "if (!arr || arr.length <= 1) return [...(arr || [])]; const copy = [...arr]; const steps = k % copy.length; for (let i = 0; i < steps; i++) copy.push(copy.shift()); return copy;",
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
    "hint": "const start = (pageNumber - 1) * pageSize; return items.slice(start, start + pageSize);",
    "starterParams": "items, pageNumber, pageSize",
    "starterBody": "return [];",
    "solutionBody": "const start = (pageNumber - 1) * pageSize; return items.slice(start, start + pageSize);",
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
    "hint": "if (!arr || arr.length <= 2) return []; return arr.slice(1, -1);",
    "starterParams": "arr",
    "starterBody": "return [];",
    "solutionBody": "if (!arr || arr.length <= 2) return []; return arr.slice(1, -1);",
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
    "hint": "const copy = [...arr]; const removedItems = copy.splice(startIndex, deleteCount); return { updatedArray: copy, removedItems };",
    "starterParams": "arr, startIndex, deleteCount",
    "starterBody": "return { updatedArray: [], removedItems: [] };",
    "solutionBody": "const copy = [...arr]; const removedItems = copy.splice(startIndex, deleteCount); return { updatedArray: copy, removedItems };",
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
    "hint": "const copy = [...arr]; copy.splice(insertIndex, 0, ...newItems); return copy;",
    "starterParams": "arr, insertIndex, newItems",
    "starterBody": "return [];",
    "solutionBody": "const copy = [...arr]; copy.splice(insertIndex, 0, ...newItems); return copy;",
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
    "hint": "const copy = [...arr]; copy.splice(startIndex, count, ...replacementItems); return copy;",
    "starterParams": "arr, startIndex, count, replacementItems",
    "starterBody": "return [];",
    "solutionBody": "const copy = [...arr]; copy.splice(startIndex, count, ...replacementItems); return copy;",
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
    "hint": "return a.concat(b, c);",
    "starterParams": "a, b, c",
    "starterBody": "return [];",
    "solutionBody": "return a.concat(b, c);",
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
    "hint": "if (n <= 0) return []; return arr.slice(-n);",
    "starterParams": "arr, n",
    "starterBody": "return [];",
    "solutionBody": "if (n <= 0) return []; return arr.slice(-n);",
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
    "hint": "if (chunkSize <= 0) return []; const res = []; for (let i = 0; i < arr.length; i += chunkSize) res.push(arr.slice(i, i + chunkSize)); return res;",
    "starterParams": "arr, chunkSize",
    "starterBody": "return [];",
    "solutionBody": "if (chunkSize <= 0) return []; const res = []; for (let i = 0; i < arr.length; i += chunkSize) res.push(arr.slice(i, i + chunkSize)); return res;",
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
    "hint": "const copy = [...sortedArr]; let idx = 0; while (idx < copy.length && copy[idx] < num) idx++; copy.splice(idx, 0, num); return copy;",
    "starterParams": "sortedArr, num",
    "starterBody": "return [];",
    "solutionBody": "const copy = [...sortedArr]; let idx = 0; while (idx < copy.length && copy[idx] < num) idx++; copy.splice(idx, 0, num); return copy;",
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
    "hint": "const merged = base.concat(extra, bonus); const res = []; for (const item of merged) { if (!res.includes(item)) res.push(item); } return res;",
    "starterParams": "base, extra, bonus",
    "starterBody": "return [];",
    "solutionBody": "const merged = base.concat(extra, bonus); const res = []; for (const item of merged) { if (!res.includes(item)) res.push(item); } return res;",
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
    "hint": "const copy = [...arr]; const count = Math.max(0, end - start); const extracted = copy.splice(start, count); return { remaining: copy, extracted };",
    "starterParams": "arr, start, end",
    "starterBody": "return { remaining: [], extracted: [] };",
    "solutionBody": "const copy = [...arr]; const count = Math.max(0, end - start); const extracted = copy.splice(start, count); return { remaining: copy, extracted };",
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
    "hint": "const clone = arr.slice(0); return { clone, isDistinctReference: clone !== arr };",
    "starterParams": "arr",
    "starterBody": "return { clone: [], isDistinctReference: false };",
    "solutionBody": "const clone = arr.slice(0); return { clone, isDistinctReference: clone !== arr };",
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
    "hint": "if (rows <= 0 || cols <= 0) return []; const matrix = []; for (let r = 0; r < rows; r++) { const row = []; for (let c = 0; c < cols; c++) row.push(defaultValue); matrix.push(row); } return matrix;",
    "starterParams": "rows, cols, defaultValue",
    "starterBody": "return [];",
    "solutionBody": "if (rows <= 0 || cols <= 0) return []; const matrix = []; for (let r = 0; r < rows; r++) { const row = []; for (let c = 0; c < cols; c++) row.push(defaultValue); matrix.push(row); } return matrix;",
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
    "hint": "if (!matrix || r < 0 || r >= matrix.length) return undefined; if (!matrix[r] || c < 0 || c >= matrix[r].length) return undefined; return matrix[r][c];",
    "starterParams": "matrix, r, c",
    "starterBody": "return undefined;",
    "solutionBody": "if (!matrix || r < 0 || r >= matrix.length) return undefined; if (!matrix[r] || c < 0 || c >= matrix[r].length) return undefined; return matrix[r][c];",
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
    "hint": "const copy = matrix.map(row => [...row]); if (r >= 0 && r < copy.length && c >= 0 && c < copy[r].length) copy[r][c] = value; return copy;",
    "starterParams": "matrix, r, c, value",
    "starterBody": "return [];",
    "solutionBody": "const copy = matrix.map(row => [...row]); if (r >= 0 && r < copy.length && c >= 0 && c < copy[r].length) copy[r][c] = value; return copy;",
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
    "hint": "let sum = 0; for (let r = 0; r < matrix.length; r++) { for (let c = 0; c < matrix[r].length; c++) sum += matrix[r][c]; } return sum;",
    "starterParams": "matrix",
    "starterBody": "return 0;",
    "solutionBody": "let sum = 0; for (let r = 0; r < matrix.length; r++) { for (let c = 0; c < matrix[r].length; c++) sum += matrix[r][c]; } return sum;",
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
    "hint": "const res = []; for (let r = 0; r < matrix.length; r++) { let rowSum = 0; for (let c = 0; c < matrix[r].length; c++) rowSum += matrix[r][c]; res.push(rowSum); } return res;",
    "starterParams": "matrix",
    "starterBody": "return [];",
    "solutionBody": "const res = []; for (let r = 0; r < matrix.length; r++) { let rowSum = 0; for (let c = 0; c < matrix[r].length; c++) rowSum += matrix[r][c]; res.push(rowSum); } return res;",
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
    "hint": "if (!matrix || matrix.length === 0 || matrix[0].length === 0) return []; const cols = matrix[0].length; const res = []; for (let c = 0; c < cols; c++) { let colSum = 0; for (let r = 0; r < matrix.length; r++) colSum += matrix[r][c]; res.push(colSum); } return res;",
    "starterParams": "matrix",
    "starterBody": "return [];",
    "solutionBody": "if (!matrix || matrix.length === 0 || matrix[0].length === 0) return []; const cols = matrix[0].length; const res = []; for (let c = 0; c < cols; c++) { let colSum = 0; for (let r = 0; r < matrix.length; r++) colSum += matrix[r][c]; res.push(colSum); } return res;",
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
    "hint": "const res = []; for (let i = 0; i < matrix.length; i++) { if (matrix[i] && matrix[i][i] !== undefined) res.push(matrix[i][i]); } return res;",
    "starterParams": "matrix",
    "starterBody": "return [];",
    "solutionBody": "const res = []; for (let i = 0; i < matrix.length; i++) { if (matrix[i] && matrix[i][i] !== undefined) res.push(matrix[i][i]); } return res;",
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
    "hint": "if (!matrix || matrix.length === 0 || matrix[0].length === 0) return []; const res = []; for (let c = 0; c < matrix[0].length; c++) { const col = []; for (let r = 0; r < matrix.length; r++) col.push(matrix[r][c]); res.push(col); } return res;",
    "starterParams": "matrix",
    "starterBody": "return [];",
    "solutionBody": "if (!matrix || matrix.length === 0 || matrix[0].length === 0) return []; const res = []; for (let c = 0; c < matrix[0].length; c++) { const col = []; for (let r = 0; r < matrix.length; r++) col.push(matrix[r][c]); res.push(col); } return res;",
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
    "hint": "for (let r = 0; r < matrix.length; r++) { for (let c = 0; c < matrix[r].length; c++) { if (matrix[r][c] === targetValue) return { row: r, col: c }; } } return null;",
    "starterParams": "matrix, targetValue",
    "starterBody": "return null;",
    "solutionBody": "for (let r = 0; r < matrix.length; r++) { for (let c = 0; c < matrix[r].length; c++) { if (matrix[r][c] === targetValue) return { row: r, col: c }; } } return null;",
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
    "hint": "const flat = []; for (let r = 0; r < matrix.length; r++) { for (let c = 0; c < matrix[r].length; c++) flat.push(matrix[r][c]); } return flat;",
    "starterParams": "matrix",
    "starterBody": "return [];",
    "solutionBody": "const flat = []; for (let r = 0; r < matrix.length; r++) { for (let c = 0; c < matrix[r].length; c++) flat.push(matrix[r][c]); } return flat;",
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
    "hint": "for (let r = 0; r < 3; r++) { if (board[r][0] && board[r][0] === board[r][1] && board[r][1] === board[r][2]) return board[r][0]; } for (let c = 0; c < 3; c++) { if (board[0][c] && board[0][c] === board[1][c] && board[1][c] === board[2][c]) return board[0][c]; } if (board[0][0] && board[0][0] === board[1][1] && board[1][1] === board[2][2]) return board[0][0]; if (board[0][2] && board[0][2] === board[1][1] && board[1][1] === board[2][0]) return board[0][2]; return null;",
    "starterParams": "board",
    "starterBody": "return null;",
    "solutionBody": "for (let r = 0; r < 3; r++) { if (board[r][0] && board[r][0] === board[r][1] && board[r][1] === board[r][2]) return board[r][0]; } for (let c = 0; c < 3; c++) { if (board[0][c] && board[0][c] === board[1][c] && board[1][c] === board[2][c]) return board[0][c]; } if (board[0][0] && board[0][0] === board[1][1] && board[1][1] === board[2][2]) return board[0][0]; if (board[0][2] && board[0][2] === board[1][1] && board[1][1] === board[2][0]) return board[0][2]; return null;",
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
    "hint": "if (n <= 0) return []; const res = []; for (let r = 1; r <= n; r++) { const row = []; for (let c = 1; c <= n; c++) row.push(r * c); res.push(row); } return res;",
    "starterParams": "n",
    "starterBody": "return [];",
    "solutionBody": "if (n <= 0) return []; const res = []; for (let r = 1; r <= n; r++) { const row = []; for (let c = 1; c <= n; c++) row.push(r * c); res.push(row); } return res;",
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
    "hint": "for (let i = 0; i < array.length; i++) callback(array[i], i, array);",
    "starterParams": "array, callback",
    "starterBody": "return undefined;",
    "solutionBody": "for (let i = 0; i < array.length; i++) callback(array[i], i, array); return undefined;",
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
    "hint": "const res = []; users.forEach(u => { if (u.isSubscribed) res.push({ to: u.email, text: `Привіт, ${u.name}! ${message}` }); }); return res;",
    "starterParams": "users, message",
    "starterBody": "return [];",
    "solutionBody": "const res = []; users.forEach(u => { if (u.isSubscribed) res.push({ to: u.email, text: `Привіт, ${u.name}! ${message}` }); }); return res;",
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
    "hint": "const candidateVotes = {}; let totalValidVotes = 0; votes.forEach(v => { if (v && typeof v === \"string\" && v.trim() !== \"\") { candidateVotes[v] = (candidateVotes[v] || 0) + 1; totalValidVotes++; } }); return { candidateVotes, totalValidVotes };",
    "starterParams": "votes",
    "starterBody": "return { candidateVotes: {}, totalValidVotes: 0 };",
    "solutionBody": "const candidateVotes = {}; let totalValidVotes = 0; votes.forEach(v => { if (v && typeof v === \"string\" && v.trim() !== \"\") { candidateVotes[v] = (candidateVotes[v] || 0) + 1; totalValidVotes++; } }); return { candidateVotes, totalValidVotes };",
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
    "hint": "const res = []; for (let i = 0; i < array.length; i++) res.push(callback(array[i], i, array)); return res;",
    "starterParams": "array, callback",
    "starterBody": "return [];",
    "solutionBody": "const res = []; for (let i = 0; i < array.length; i++) res.push(callback(array[i], i, array)); return res;",
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
    "hint": "return products.map(p => { const priceUah = Math.round(p.priceUsd * exchangeRate * (1 + vatPercent / 100)); return { id: p.id, title: p.name, priceUah, priceFormatted: `${priceUah} ₴`, badge: p.inStock ? \"В наявності\" : \"Під замовлення\" }; });",
    "starterParams": "products, exchangeRate, vatPercent",
    "starterBody": "return [];",
    "solutionBody": "return products.map(p => { const priceUah = Math.round(p.priceUsd * exchangeRate * (1 + vatPercent / 100)); return { id: p.id, title: p.name, priceUah, priceFormatted: `${priceUah} ₴`, badge: p.inStock ? \"В наявності\" : \"Під замовлення\" }; });",
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
    "hint": "return users.map(u => { const parts = u.fullName.split(\" \"); const maskedName = `${parts[0]} ${parts[1] ? parts[1][0] + \".\" : \"\"}`.trim(); const atIdx = u.email.indexOf(\"@\"); const maskedEmail = u.email[0] + \"***\" + u.email.slice(atIdx); const maskedPhone = u.phone.slice(0, 4) + \"******\" + u.phone.slice(-2); return { id: u.id, maskedName, email: maskedEmail, phone: maskedPhone }; });",
    "starterParams": "users",
    "starterBody": "return [];",
    "solutionBody": "return users.map(u => { const parts = u.fullName.split(\" \"); const maskedName = `${parts[0]} ${parts[1] ? parts[1][0] + \".\" : \"\"}`.trim(); const atIdx = u.email.indexOf(\"@\"); const maskedEmail = u.email[0] + \"***\" + u.email.slice(atIdx); const maskedPhone = u.phone.slice(0, 4) + \"******\" + u.phone.slice(-2); return { id: u.id, maskedName, email: maskedEmail, phone: maskedPhone }; });",
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
    "hint": "return coords.map(c => ({ hash: `[${c.lat.toFixed(4)},${c.lng.toFixed(4)}]`, isEquator: c.lat === 0 }));",
    "starterParams": "coords",
    "starterBody": "return [];",
    "solutionBody": "return coords.map(c => ({ hash: `[${c.lat.toFixed(4)},${c.lng.toFixed(4)}]`, isEquator: c.lat === 0 }));",
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
    "hint": "const res = []; for (let i = 0; i < array.length; i++) { if (callback(array[i], i, array)) res.push(array[i]); } return res;",
    "starterParams": "array, callback",
    "starterBody": "return [];",
    "solutionBody": "const res = []; for (let i = 0; i < array.length; i++) { if (callback(array[i], i, array)) res.push(array[i]); } return res;",
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
    "hint": "return promos.filter(p => p.isActive && p.discountPercent >= minDiscount && currentIsoDate <= p.expiryDate);",
    "starterParams": "promos, currentIsoDate, minDiscount",
    "starterBody": "return [];",
    "solutionBody": "return promos.filter(p => p.isActive && p.discountPercent >= minDiscount && currentIsoDate <= p.expiryDate);",
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
    "hint": "return comments.filter(c => !c.isSpam && c.rating >= 1 && !stopWords.some(w => c.text.toLowerCase().includes(w.toLowerCase())));",
    "starterParams": "comments, stopWords",
    "starterBody": "return [];",
    "solutionBody": "return comments.filter(c => !c.isSpam && c.rating >= 1 && !stopWords.some(w => c.text.toLowerCase().includes(w.toLowerCase())));",
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
    "hint": "return rooms.filter(r => r.isAvailable && r.capacity >= guestsCount && r.pricePerNight <= maxPrice);",
    "starterParams": "rooms, guestsCount, maxPrice",
    "starterBody": "return [];",
    "solutionBody": "return rooms.filter(r => r.isAvailable && r.capacity >= guestsCount && r.pricePerNight <= maxPrice);",
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
    "hint": "let item = undefined, index = -1; for (let i = 0; i < array.length; i++) { if (predicate(array[i], i, array)) { item = array[i]; index = i; break; } } return { item, index };",
    "starterParams": "array, predicate",
    "starterBody": "return { item: undefined, index: -1 };",
    "solutionBody": "let item = null, index = -1; for (let i = 0; i < array.length; i++) { if (predicate(array[i], i, array)) { item = array[i]; index = i; break; } } return { item, index };",
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
    "hint": "const idx = logs.findIndex(l => l.level === \"CRITICAL\" || l.statusCode >= 500); if (idx === -1) return null; return { foundLog: logs[idx], logIndex: idx };",
    "starterParams": "logs",
    "starterBody": "return null;",
    "solutionBody": "const idx = logs.findIndex(l => l.level === \"CRITICAL\" || l.statusCode >= 500); if (idx === -1) return null; return { foundLog: logs[idx], logIndex: idx };",
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
    "hint": "const seat = seats.find(s => !s.isOccupied && !s.isEmergencyRow && s.isWindow === preferWindow); return seat || null;",
    "starterParams": "seats, preferWindow",
    "starterBody": "return null;",
    "solutionBody": "const seat = seats.find(s => !s.isOccupied && !s.isEmergencyRow && s.isWindow === preferWindow); return seat || null;",
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
    "hint": "let someResult = false; let everyResult = true; for (let i = 0; i < array.length; i++) { if (predicate(array[i], i, array)) someResult = true; else everyResult = false; } if (array.length === 0) { someResult = false; everyResult = true; } return { someResult, everyResult };",
    "starterParams": "array, predicate",
    "starterBody": "return { someResult: false, everyResult: false };",
    "solutionBody": "let someResult = false; let everyResult = true; for (let i = 0; i < array.length; i++) { if (predicate(array[i], i, array)) someResult = true; else everyResult = false; } if (array.length === 0) { someResult = false; everyResult = true; } return { someResult, everyResult };",
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
    "hint": "const isValidForm = fields.every(f => f.isValid === true); const hasErrors = fields.some(f => f.isValid === false); return { isValidForm, hasErrors };",
    "starterParams": "fields",
    "starterBody": "return { isValidForm: false, hasErrors: true };",
    "solutionBody": "const isValidForm = fields.every(f => f.isValid === true); const hasErrors = fields.some(f => f.isValid === false); return { isValidForm, hasErrors };",
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
    "hint": "const canAffordAll = items.every(i => i.price <= budget); const hasLuxuryItem = items.some(i => i.price >= luxuryThreshold); return { canAffordAll, hasLuxuryItem };",
    "starterParams": "items, budget, luxuryThreshold",
    "starterBody": "return { canAffordAll: false, hasLuxuryItem: false };",
    "solutionBody": "const canAffordAll = items.every(i => i.price <= budget); const hasLuxuryItem = items.some(i => i.price >= luxuryThreshold); return { canAffordAll, hasLuxuryItem };",
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
    "hint": "const allVip = team.every(m => m.isVip); const captainVip = team.some(m => m.isCaptain && m.isVip); return allVip || captainVip;",
    "starterParams": "team",
    "starterBody": "return false;",
    "solutionBody": "const allVip = team.every(m => m.isVip); const captainVip = team.some(m => m.isCaptain && m.isVip); return allVip || captainVip;",
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
    "hint": "if (array.length === 0 && initialValue === undefined) throw new TypeError(\"Reduce of empty array with no initial value\"); let acc = initialValue !== undefined ? initialValue : array[0]; const startIdx = initialValue !== undefined ? 0 : 1; for (let i = startIdx; i < array.length; i++) { acc = callback(acc, array[i], i, array); } return acc;",
    "starterParams": "array, callback, initialValue",
    "starterBody": "return initialValue;",
    "solutionBody": "if (array.length === 0 && initialValue === undefined) throw new TypeError(\"Reduce of empty array with no initial value\"); let acc = initialValue !== undefined ? initialValue : array[0]; const startIdx = initialValue !== undefined ? 0 : 1; for (let i = startIdx; i < array.length; i++) { acc = callback(acc, array[i], i, array); } return acc;",
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
    "hint": "return transactions.reduce((acc, t) => { acc[t.category] = (acc[t.category] || 0) + t.amount; return acc; }, {});",
    "starterParams": "transactions",
    "starterBody": "return {};",
    "solutionBody": "return transactions.reduce((acc, t) => { acc[t.category] = (acc[t.category] || 0) + t.amount; return acc; }, {});",
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
    "hint": "if (!params || params.length === 0) return \"\"; return params.reduce((acc, p, idx) => acc + (idx > 0 ? \"&\" : \"\") + `${encodeURIComponent(p.key)}=${encodeURIComponent(p.value)}`, \"\");",
    "starterParams": "params",
    "starterBody": "return \"\";",
    "solutionBody": "if (!params || params.length === 0) return \"\"; return params.reduce((acc, p, idx) => acc + (idx > 0 ? \"&\" : \"\") + `${encodeURIComponent(p.key)}=${encodeURIComponent(p.value)}`, \"\");",
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
    "hint": "const stats = orders.reduce((acc, o) => { if (o.status === \"COMPLETED\") { acc.totalRevenue += o.total; acc.completedCount++; } return acc; }, { totalRevenue: 0, completedCount: 0 }); const averageCheck = stats.completedCount > 0 ? Number((stats.totalRevenue / stats.completedCount).toFixed(2)) : 0; return { totalRevenue: stats.totalRevenue, completedCount: stats.completedCount, averageCheck };",
    "starterParams": "orders",
    "starterBody": "return { totalRevenue: 0, completedCount: 0, averageCheck: 0 };",
    "solutionBody": "const stats = orders.reduce((acc, o) => { if (o.status === \"COMPLETED\") { acc.totalRevenue += o.total; acc.completedCount++; } return acc; }, { totalRevenue: 0, completedCount: 0 }); const averageCheck = stats.completedCount > 0 ? Number((stats.totalRevenue / stats.completedCount).toFixed(2)) : 0; return { totalRevenue: stats.totalRevenue, completedCount: stats.completedCount, averageCheck };",
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
    "hint": "const flatResult = []; for (const item of array) { if (Array.isArray(item)) flatResult.push(...item); else flatResult.push(item); } const flatMapResult = []; for (let i = 0; i < array.length; i++) { const mapped = mapper(array[i], i, array); if (Array.isArray(mapped)) flatMapResult.push(...mapped); else flatMapResult.push(mapped); } return { flatResult, flatMapResult };",
    "starterParams": "array, mapper",
    "starterBody": "return { flatResult: [], flatMapResult: [] };",
    "solutionBody": "const flatResult = []; for (const item of array) { if (Array.isArray(item)) flatResult.push(...item); else flatResult.push(item); } const flatMapResult = []; for (let i = 0; i < array.length; i++) { const mapped = mapper(array[i], i, array); if (Array.isArray(mapped)) flatMapResult.push(...mapped); else flatMapResult.push(mapped); } return { flatResult, flatMapResult };",
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
    "hint": "const allTags = posts.flatMap(p => p.tags || []); const unique = []; for (const t of allTags) { if (!unique.includes(t)) unique.push(t); } return unique;",
    "starterParams": "posts",
    "starterBody": "return [];",
    "solutionBody": "const allTags = posts.flatMap(p => p.tags || []); const unique = []; for (const t of allTags) { if (!unique.includes(t)) unique.push(t); } return unique;",
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
    "hint": "return categories.flatMap(c => [c.name, ...(c.subcategories || [])]);",
    "starterParams": "categories",
    "starterBody": "return [];",
    "solutionBody": "return categories.flatMap(c => [c.name, ...(c.subcategories || [])]);",
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
    "hint": "const delivered = orders.filter(o => o.status === \"DELIVERED\"); const grouped = delivered.reduce((acc, o) => { acc[o.customerId] = (acc[o.customerId] || 0) + o.amount; return acc; }, {}); return Object.entries(grouped).map(([customerId, totalSpent]) => ({ customerId, totalSpent })).sort((a, b) => b.totalSpent - a.totalSpent).slice(0, topLimit);",
    "starterParams": "orders, topLimit",
    "starterBody": "return [];",
    "solutionBody": "const delivered = orders.filter(o => o.status === \"DELIVERED\"); const grouped = delivered.reduce((acc, o) => { acc[o.customerId] = (acc[o.customerId] || 0) + o.amount; return acc; }, {}); return Object.entries(grouped).map(([customerId, totalSpent]) => ({ customerId, totalSpent })).sort((a, b) => b.totalSpent - a.totalSpent).slice(0, topLimit);",
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
    "hint": "const filtered = tracks.filter(t => t.genre === targetGenre && t.rating >= minRating).sort((a, b) => b.durationSec - a.durationSec); const playlist = []; let total = 0; for (const t of filtered) { if (total + t.durationSec <= maxTotalSec) { playlist.push(t); total += t.durationSec; } } return playlist;",
    "starterParams": "tracks, targetGenre, minRating, maxTotalSec",
    "starterBody": "return [];",
    "solutionBody": "const filtered = tracks.filter(t => t.genre === targetGenre && t.rating >= minRating).sort((a, b) => b.durationSec - a.durationSec); const playlist = []; let total = 0; for (const t of filtered) { if (total + t.durationSec <= maxTotalSec) { playlist.push(t); total += t.durationSec; } } return playlist;",
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
    "hint": "const valid = items.filter(i => i.durability > 0 && i.weight <= maxWeight).map(i => ({ ...i, density: i.value / i.weight })).sort((a, b) => b.density - a.density); const packedItems = []; let totalValue = 0, totalWeight = 0; for (const item of valid) { if (totalWeight + item.weight <= maxWeight) { packedItems.push({ id: item.id, name: item.name, value: item.value, weight: item.weight }); totalValue += item.value; totalWeight += item.weight; } } return { packedItems, totalValue, totalWeight };",
    "starterParams": "items, maxWeight",
    "starterBody": "return { packedItems: [], totalValue: 0, totalWeight: 0 };",
    "solutionBody": "const valid = items.filter(i => i.durability > 0 && i.weight <= maxWeight).map(i => ({ ...i, density: i.value / i.weight })).sort((a, b) => b.density - a.density); const packedItems = []; let totalValue = 0, totalWeight = 0; for (const item of valid) { if (totalWeight + item.weight <= maxWeight) { packedItems.push({ id: item.id, name: item.name, value: item.value, weight: item.weight }); totalValue += item.value; totalWeight += item.weight; } } return { packedItems, totalValue, totalWeight };",
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
