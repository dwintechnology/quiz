let questions = []
export default questions = [
    {
        title: 'medical',
        question: [
            {
                questionsText: 'Что является активным компонентом перцового аэрозоля?',
                answerOption: [
                    { answerText: 'аммиак', isCorrect: false },
                    { answerText: 'муравьиная кислота', isCorrect: false },
                    { answerText: 'пиперин', isCorrect: false },
                    { answerText: 'капсаицин', isCorrect: true },
                ]
            },
            {
                questionsText: 'Кто чаще всего страдает дальтонизмом?',
                answerOption: [
                    { answerText: 'Мужчины', isCorrect: true },
                    { answerText: 'Женщины', isCorrect: false },
                    { answerText: 'Моряки', isCorrect: false },
                    { answerText: 'Все с одинаковой вероятностью', isCorrect: false },
                ]
            },
            {
                questionsText: 'Какое из следующего является самым маленьким?',
                answerOption: [
                    { answerText: 'бактерии', isCorrect: false },
                    { answerText: 'простейшие одноклеточные организмы', isCorrect: false },
                    { answerText: 'лейкоциты', isCorrect: false },
                    { answerText: 'вирусы', isCorrect: true },
                ]
            },
            {
                questionsText: 'Европейцы привезли в Америку много болезней. А какую болезнь привезли из Америки в Европу?',
                answerOption: [
                    { answerText: 'туберкулез', isCorrect: false },
                    { answerText: 'сифилис', isCorrect: true },
                    { answerText: 'оспу', isCorrect: false },
                    { answerText: 'тиф', isCorrect: false },

                ]
            }, {
                questionsText: 'Какова нормальная температура тела человека в градусах Цельсия?',
                answerOption: [
                    { answerText: '35.6', isCorrect: false },
                    { answerText: '38.0', isCorrect: false },
                    { answerText: '36.6', isCorrect: true },
                    { answerText: '37.1', isCorrect: false },
                ]
            },
        ]
    },
    {
        title: 'geography',
        question: [
            {
                questionsText: 'В России находится самое глубокое озеро мира. Как оно называется?',
                answerOption: [
                    { answerText: 'озеро Ильмень', isCorrect: false },
                    { answerText: 'Ладожское озеро', isCorrect: false },
                    { answerText: 'Онежское озеро', isCorrect: false },
                    { answerText: 'озеро Байкал', isCorrect: true },
                ]
            },
            {
                questionsText: 'Какие горы принято считать границей между Европой и Азией?',
                answerOption: [
                    { answerText: 'Алтайские горы', isCorrect: false },
                    { answerText: 'Кавказские горы', isCorrect: false },
                    { answerText: 'Уральские горы', isCorrect: true },
                    { answerText: 'Воробьевы горы', isCorrect: false },
                ]
            },
            {
                questionsText: 'В какой стране находится город Цинциннати?',
                answerOption: [
                    { answerText: 'Италия', isCorrect: false },
                    { answerText: 'Испания', isCorrect: false },
                    { answerText: 'США', isCorrect: true },
                    { answerText: 'Канада', isCorrect: false },
                ]
            },
            {
                questionsText: 'Какой остров самый большой в мире?',
                answerOption: [
                    { answerText: 'Мадагаскар', isCorrect: false },
                    { answerText: 'Новая Гвинея', isCorrect: false },
                    { answerText: 'Бали', isCorrect: false },
                    { answerText: 'Гренландия', isCorrect: true },

                ]
            }, {
                questionsText: 'Какая из этих стран имеет выход к Каспийскому морю?',
                answerOption: [
                    { answerText: 'Таджикистан', isCorrect: false },
                    { answerText: 'Армения', isCorrect: false },
                    { answerText: 'Туркменистан', isCorrect: true },
                    { answerText: 'Афганистан', isCorrect: false },
                ]
            },
        ]
    },
    {
        title: 'agriculture',
        question: [
            {
                questionsText: 'Какое важнейшее значение сельского хозяйства?',
                answerOption: [
                    { answerText: 'Обогащение природных ресурсов', isCorrect: false },
                    { answerText: 'Обеспечение продовольствием населения Земли', isCorrect: true },
                    { answerText: 'Развитие кормовой базы для домашних животных', isCorrect: false },
                    { answerText: 'Выведение новых сортов', isCorrect: false },

                ]
            },
            {
                questionsText: 'Каково главное отличие сельского хозяйства?',
                answerOption: [
                    { answerText: 'Многообразие форм', isCorrect: true },
                    { answerText: 'Высокая продуктивность', isCorrect: false },
                    { answerText: 'Трудоемкость', isCorrect: false },
                    { answerText: 'Высокие затраты', isCorrect: false },
                ]
            },
            {
                questionsText: 'В какой природной зоне невозможно сельское хозяйство?',
                answerOption: [
                    { answerText: 'Полупустыня', isCorrect: false },
                    { answerText: 'Степь', isCorrect: false },
                    { answerText: 'Арктические пустыни', isCorrect: true },
                    { answerText: 'Тропики', isCorrect: false },
                ]
            },
            {
                questionsText: 'Какая характеристика относится к потребительскому типу сельского хозяйства?',
                answerOption: [
                    { answerText: 'Высокий уровень механизации', isCorrect: false },
                    { answerText: 'Высокая продуктивность', isCorrect: false },
                    { answerText: 'Внедрение научных достижений', isCorrect: false },
                    { answerText: 'Низкая продуктивность', isCorrect: true },

                ]
            }, {
                questionsText: 'От какого фактора не зависит размещение сельского хозяйства?',
                answerOption: [
                    { answerText: 'Климат', isCorrect: false },
                    { answerText: 'Рельеф', isCorrect: false },
                    { answerText: 'Уровень развития стран', isCorrect: true },
                    { answerText: 'Уровень плодородия', isCorrect: false },
                ]
            },
        ]
    },
    {
        title: 'history',
        question: [
            {
                questionsText: 'Как датируется Синьхайская революция?',
                answerOption: [
                    { answerText: '1909', isCorrect: false },
                    { answerText: '1911', isCorrect: true },
                    { answerText: '1917', isCorrect: false },
                    { answerText: '1920', isCorrect: false },

                ]
            },
            {
                questionsText: 'Когда родился Алоис Гитлер?',
                answerOption: [
                    { answerText: '3 апреля 1835 ', isCorrect: false },
                    { answerText: '5 марта 1836 ', isCorrect: false },
                    { answerText: '7 июня 1837 ', isCorrect: true },
                    { answerText: '9 августа 1840', isCorrect: false },
                ]
            },
            {
                questionsText: 'Какой византийский император провозгласил идею " воссоединения Римской державы"?',
                answerOption: [
                    { answerText: 'император Лев III', isCorrect: false },
                    { answerText: 'император Михаил VIII Палеолог', isCorrect: false },
                    { answerText: 'Юстиниан I', isCorrect: true },
                    { answerText: 'Карл Великий', isCorrect: false },
                ]
            },
            {
                questionsText: 'Какое название имела первая столица Золотой Орды?',
                answerOption: [
                    { answerText: 'Сарай аль-Джедид', isCorrect: false },
                    { answerText: 'Сарай Бату', isCorrect: true },
                    { answerText: 'Чимги-Тура', isCorrect: false },
                    { answerText: 'Ханбалык', isCorrect: false},

                ]
            }, {
                questionsText: 'Какой король возглавил Седьмой крестовый поход?',
                answerOption: [
                    { answerText: 'Генрих III', isCorrect: false },
                    { answerText: 'Фридрих II', isCorrect: false },
                    { answerText: 'Людовик IX', isCorrect: true },
                    { answerText: 'Уровень плодородия', isCorrect: false },
                ]
            },
        ]
    },
    {
        title: 'technology',
        question: [
            {
                questionsText: 'Сколько параметров можно передать функции ?',
                answerOption: [
                    { answerText: 'Pовно столько, сколько указано в определении функции.', isCorrect: false },
                    { answerText: 'Сколько указано в определении функции или меньше.', isCorrect: false },
                    { answerText: 'Сколько указано в определении функции или больше.', isCorrect: false },
                    { answerText: 'Любое количество.', isCorrect: true },
                ]
            },
            {
                questionsText: 'Есть ли разница между вызовами i++ и ++i?',
                answerOption: [
                    { answerText: 'Разница в значении, которое возвращает такой вызов', isCorrect: false },
                    { answerText: 'Разница в значении i после вызова.', isCorrect: true },
                    { answerText: 'Нет никакой разницы.', isCorrect: false },
                    
                ]
            },
            {
                questionsText: 'Что выведет этот код?  let a = (1,5 - 1) * 2;   alert(a);',
                answerOption: [
                    { answerText: '0.999999999', isCorrect: false },
                    { answerText: '1', isCorrect: false },
                    { answerText: '0.5', isCorrect: false },
                    { answerText: '8', isCorrect: true },
                ]
            },
            {
                questionsText: `Чему равно a + b + c?  
                                 let a = 1;  
                                 let b = { toString() {return "1" } };  
                                 let c = 1;`,
                answerOption: [
                    { answerText: '111', isCorrect: true },
                    { answerText: '11[object Object]', isCorrect: false },
                    { answerText: '2[object Object]', isCorrect: false },
                    { answerText: '3', isCorrect: false },

                ]
            }, {
                questionsText: '2 && 1 && null && 0 && undefined',
                answerOption: [
                    { answerText: '1', isCorrect: false },
                    { answerText: '2', isCorrect: false },
                    { answerText: 'null', isCorrect: true },
                    { answerText: 'undifind', isCorrect: false },
                ]
            },
        ]
    },
    {
        title: 'football',
        question: [
            {
                questionsText: 'Какой вратарь забил более 100 голов за свою карьеру?',
                answerOption: [
                    { answerText: 'Хосе Луис Чилаверт', isCorrect: false },
                    { answerText: 'Игорь Акинфеев', isCorrect: false },
                    { answerText: 'Рожео Сени', isCorrect: true },
                    { answerText: 'Рене Игита', isCorrect: false },
                ]
            },
            {
                questionsText: 'Какая сборная победила на первом чемпионате Европы ,проводившемся в 1960 году?',
                answerOption: [
                    { answerText: 'СССР', isCorrect: true },
                    { answerText: 'Франция', isCorrect: false },
                    { answerText: 'Югославия', isCorrect: false },
                    { answerText: 'Италия', isCorrect: false },
                ]
            },
            {
                questionsText: 'Какая сборная по футболу чаще всех выигрывала Чемпионат по футболу?',
                answerOption: [
                    { answerText: 'Германия', isCorrect: false },
                    { answerText: 'Испания', isCorrect: false },
                    { answerText: 'Бразилия', isCorrect: true },
                    { answerText: 'Канада', isCorrect: false },
                ]
            },
            {
                questionsText: 'На какой секунде был забит самый быстрый в мире автогол ?',
                answerOption: [
                    { answerText: '50 секунда', isCorrect: false },
                    { answerText: '14 секунда', isCorrect: false },
                    { answerText: '30 секунда', isCorrect: false },
                    { answerText: '17 секунда', isCorrect: true },

                ]
            }, {
                questionsText: 'Какой из этих клубов чаще всего выигрывал суперкубок УЕФА?',
                answerOption: [
                    { answerText: 'Милан', isCorrect: true },
                    { answerText: 'Ливерпуль', isCorrect: false },
                    { answerText: 'Реал Мадрид', isCorrect: false},
                    { answerText: 'Бавариа', isCorrect: false },
                ]
            },
        ]
    },
]

console.log(questions)