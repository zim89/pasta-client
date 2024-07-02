export type Category = 'Pasta' | 'Risotto' | 'Soup' | 'Drink' | 'Other'

export const categories: Category[] = [
  'Pasta',
  'Risotto',
  'Soup',
  'Drink',
  'Other'
]

export type Dish = {
  name: string
  description: string
  mass: number
  price: number
  ingredients: string[]
  imageSrc: string
  category: Category
}

export const menu: Dish[] = [
  {
    name: 'Спагеті Карбонара',
    description: 'Класична римська паста з яйцями, сиром, панчеттою та перцем.',
    mass: 350,
    price: 474.34,
    ingredients: ['спагеті', 'яйця', 'сир', 'панчетта', 'перець'],
    imageSrc: 'https://placehold.co/600x400.png',
    category: 'Pasta'
  },
  {
    name: 'Піца Маргарита',
    description: 'Традиційна піца з томатами, моцарелою та базиліком.',
    mass: 450,
    price: 365.14,
    ingredients: ['тісто', 'томат', 'моцарела', 'базилік'],
    imageSrc: 'https://placehold.co/600x400.png',
    category: 'Other'
  },
  {
    name: 'Різотто з Грибами',
    description: 'Кремовий різотто з грибами та сиром Пармезан.',
    mass: 400,
    price: 547.54,
    ingredients: ['рис', 'гриби', 'сир Пармезан', 'масло', 'бульйон'],
    imageSrc: 'https://placehold.co/600x400.png',
    category: 'Risotto'
  },
  {
    name: 'Мінестроне',
    description: 'Ситний овочевий суп з бобами та пастою.',
    mass: 300,
    price: 328.04,
    ingredients: ['овочі', 'боби', 'паста', 'томат', 'бульйон'],
    imageSrc: 'https://placehold.co/600x400.png',
    category: 'Soup'
  },
  {
    name: 'Тірамісу',
    description:
      'Класичний італійський десерт з шарами бісквіту, просоченого кавою, та маскарпоне.',
    mass: 250,
    price: 255.84,
    ingredients: ['бісквіт', 'кава', 'маскарпоне', 'какао-порошок'],
    imageSrc: 'https://placehold.co/600x400.png',
    category: 'Other'
  },
  {
    name: 'Лазанья Болоньєзе',
    description: 'Шари пасти з соусом Болоньєзе, бешамелем та сиром.',
    mass: 500,
    price: 584.64,
    ingredients: ['паста', 'соус Болоньєзе', 'бешамель', 'сир'],
    imageSrc: 'https://placehold.co/600x400.png',
    category: 'Pasta'
  },
  {
    name: 'Салат Капрезе',
    description:
      'Свіжий салат з томатами, моцарелою, базиліком та оливковою олією.',
    mass: 200,
    price: 292.47,
    ingredients: ['томати', 'моцарела', 'базилік', 'оливкова олія'],
    imageSrc: 'https://placehold.co/600x400.png',
    category: 'Other'
  },
  {
    name: 'Ньоккі з Песто',
    description: "М'які картопляні ньоккі з соусом песто.",
    mass: 350,
    price: 511.34,
    ingredients: [
      'ньоккі',
      'базилік',
      'сир Пармезан',
      'кедрові горіхи',
      'оливкова олія'
    ],
    imageSrc: 'https://placehold.co/600x400.png',
    category: 'Pasta'
  },
  {
    name: 'Феттучині Альфредо',
    description: 'Кремова паста з маслом та сиром Пармезан.',
    mass: 400,
    price: 474.34,
    ingredients: ['феттучині', 'масло', 'сир Пармезан'],
    imageSrc: 'https://placehold.co/600x400.png',
    category: 'Pasta'
  },
  {
    name: 'Оссо Буко',
    description: 'Тушковані телячі ніжки з овочами, білим вином та бульйоном.',
    mass: 450,
    price: 730.59,
    ingredients: ['телячі ніжки', 'овочі', 'біле вино', 'бульйон'],
    imageSrc: 'https://placehold.co/600x400.png',
    category: 'Other'
  },
  {
    name: 'Брускетта',
    description:
      'Підсмажений хліб з томатами, часником, базиліком та оливковою олією.',
    mass: 150,
    price: 219.49,
    ingredients: ['хліб', 'томати', 'часник', 'базилік', 'оливкова олія'],
    imageSrc: 'https://placehold.co/600x400.png',
    category: 'Other'
  },
  {
    name: 'Прошуто та диня',
    description: 'Простий закусок з скибочками прошуто та дині.',
    mass: 200,
    price: 328.04,
    ingredients: ['прошуто', 'диня'],
    imageSrc: 'https://placehold.co/600x400.png',
    category: 'Other'
  },
  {
    name: 'Пенне Аррабіата',
    description: 'Гостра паста з томатним соусом, часником та перцем чилі.',
    mass: 350,
    price: 438.14,
    ingredients: ['пенне', 'томатний соус', 'часник', 'перець чилі'],
    imageSrc: 'https://placehold.co/600x400.png',
    category: 'Pasta'
  },
  {
    name: 'Панна Котта',
    description: 'Кремовий десерт з желатином та ягідним соусом.',
    mass: 200,
    price: 255.84,
    ingredients: ['вершки', 'желатин', 'цукор', 'ваніль', 'ягоди'],
    imageSrc: 'https://placehold.co/600x400.png',
    category: 'Other'
  },
  {
    name: 'Равіолі з рікоттою та шпинатом',
    description: 'Фарширована паста з рікоттою та шпинатом.',
    mass: 300,
    price: 511.34,
    ingredients: ['паста', 'рікотта', 'шпинат'],
    imageSrc: 'https://placehold.co/600x400.png',
    category: 'Pasta'
  },
  {
    name: 'Фріттата',
    description: 'Італійський омлет з овочами та сиром.',
    mass: 250,
    price: 328.04,
    ingredients: ['яйця', 'овочі', 'сир'],
    imageSrc: 'https://placehold.co/600x400.png',
    category: 'Other'
  },
  {
    name: 'Аранчіні',
    description: 'Смажені рисові кульки, фаршировані сиром та рагу.',
    mass: 200,
    price: 292.47,
    ingredients: ['рис', 'сир', 'рагу', 'панірувальні сухарі'],
    imageSrc: 'https://placehold.co/600x400.png',
    category: 'Other'
  },
  {
    name: 'Лімончелло',
    description: 'Популярний італійський лимонний лікер.',
    mass: 50,
    price: 182.39,
    ingredients: ['лимони', 'спирт', 'цукор'],
    imageSrc: 'https://placehold.co/600x400.png',
    category: 'Drink'
  },
  {
    name: 'Тальятеле з Рагу',
    description: "Довга, пласка паста з багатим м'ясним соусом рагу.",
    mass: 400,
    price: 547.54,
    ingredients: ['тальятеле', "м'ясний соус рагу", 'томатний соус'],
    imageSrc: 'https://placehold.co/600x400.png',
    category: 'Pasta'
  },
  {
    name: "Каннеллоні з М'ясом",
    description:
      "Трубочки пасти, фаршировані м'ясним фаршем та запечені в томатному соусі.",
    mass: 350,
    price: 511.34,
    ingredients: ['каннеллоні', "м'ясний фарш", 'томатний соус', 'сир'],
    imageSrc: 'https://placehold.co/600x400.png',
    category: 'Pasta'
  },
  {
    name: 'Меланзане алла Парміджана',
    description: 'Запечені баклажани з томатним соусом та сиром пармезан.',
    mass: 300,
    price: 438.14,
    ingredients: ['баклажани', 'томатний соус', 'сир пармезан'],
    imageSrc: 'https://placehold.co/600x400.png',
    category: 'Other'
  },
  {
    name: 'Карбонара алла Зукка',
    description: 'Кремова паста з беконом, яйцями та гарбузом.',
    mass: 350,
    price: 474.34,
    ingredients: ['паста', 'бекон', 'яйця', 'гарбуз', 'сир пармезан'],
    imageSrc: 'https://placehold.co/600x400.png',
    category: 'Pasta'
  },
  {
    name: 'Ризотто з Креветками',
    description: 'Ризотто з кремовою текстурою та свіжими креветками.',
    mass: 400,
    price: 584.64,
    ingredients: ['рис', 'креветки', 'бульйон', 'сир пармезан', 'часник'],
    imageSrc: 'https://placehold.co/600x400.png',
    category: 'Risotto'
  },
  {
    name: 'Панцанелла',
    description: 'Італійський салат з хліба, томатів та огірків.',
    mass: 250,
    price: 292.47,
    ingredients: ['хліб', 'томати', 'огірки', 'базилік', 'оливкова олія'],
    imageSrc: 'https://placehold.co/600x400.png',
    category: 'Other'
  },
  {
    name: 'Фаршировані Кальмари',
    description: 'Запечені кальмари, фаршировані хлібом, сиром та травами.',
    mass: 300,
    price: 584.64,
    ingredients: ['кальмари', 'хліб', 'сир', 'трави'],
    imageSrc: 'https://placehold.co/600x400.png',
    category: 'Other'
  },
  {
    name: 'Баклажани алла Норма',
    description: 'Смажені баклажани з томатним соусом та сиром рікотта.',
    mass: 350,
    price: 438.14,
    ingredients: ['баклажани', 'томатний соус', 'сир рікотта'],
    imageSrc: 'https://placehold.co/600x400.png',
    category: 'Other'
  },
  {
    name: 'Паста Путтанеска',
    description: 'Паста з оливками, каперсами та анчоусами у томатному соусі.',
    mass: 350,
    price: 474.34,
    ingredients: ['паста', 'оливки', 'каперси', 'анчоуси', 'томатний соус'],
    imageSrc: 'https://placehold.co/600x400.png',
    category: 'Pasta'
  },
  {
    name: 'Різотто з Гарбузом',
    description: 'Кремове різотто з гарбузом та сиром пармезан.',
    mass: 400,
    price: 547.54,
    ingredients: ['рис', 'гарбуз', 'бульйон', 'сир пармезан'],
    imageSrc: 'https://placehold.co/600x400.png',
    category: 'Risotto'
  },
  {
    name: 'Томатний Суп',
    description: 'Свіжий томатний суп з базиліком та часником.',
    mass: 300,
    price: 292.47,
    ingredients: ['томати', 'базилік', 'часник', 'бульйон'],
    imageSrc: 'https://placehold.co/600x400.png',
    category: 'Soup'
  },
  {
    name: 'Капоната',
    description: 'Сицилійська страва з тушкованими овочами та каперсами.',
    mass: 300,
    price: 365.14,
    ingredients: ['баклажани', 'томати', 'цибуля', 'каперси', 'оливки'],
    imageSrc: 'https://placehold.co/600x400.png',
    category: 'Other'
  },
  {
    name: 'Фаршировані Перці',
    description: 'Печені перці, фаршировані рисом та овочами.',
    mass: 300,
    price: 401.34,
    ingredients: ['перці', 'рис', 'овочі', 'томатний соус'],
    imageSrc: 'https://placehold.co/600x400.png',
    category: 'Other'
  },
  {
    name: 'Суп з Квасолею та Макаронами',
    description: 'Ситний суп з квасолею, макаронами та томатами.',
    mass: 300,
    price: 328.04,
    ingredients: ['квасоля', 'макарони', 'томати', 'бульйон'],
    imageSrc: 'https://placehold.co/600x400.png',
    category: 'Soup'
  },
  {
    name: 'Флорентійський Бістека',
    description: 'Традиційний флорентійський стейк на грилі.',
    mass: 500,
    price: 912.94,
    ingredients: ['яловичий стейк', 'оливкова олія', 'сіль', 'перець'],
    imageSrc: 'https://placehold.co/600x400.png',
    category: 'Other'
  },
  {
    name: 'Паніні з Прошуто',
    description: 'Гарячий сендвіч з прошуто, моцарелою та томатами.',
    mass: 250,
    price: 328.04,
    ingredients: ['хліб', 'прошуто', 'моцарела', 'томати'],
    imageSrc: 'https://placehold.co/600x400.png',
    category: 'Other'
  },
  {
    name: 'Біфштекс алла Фіорентіна',
    description: 'Флорентійський стейк з розмарином та часником.',
    mass: 500,
    price: 876.74,
    ingredients: ['яловичий стейк', 'розмарин', 'часник', 'оливкова олія'],
    imageSrc: 'https://placehold.co/600x400.png',
    category: 'Other'
  },
  {
    name: 'Чізкейк з Рікотти',
    description: 'Ніжний чізкейк з рікотти та лимонною цедрою.',
    mass: 200,
    price: 365.14,
    ingredients: ['рікотта', 'лимонна цедра', 'цукор', 'яйця'],
    imageSrc: 'https://placehold.co/600x400.png',
    category: 'Other'
  },
  {
    name: 'Фаршировані Артишоки',
    description: 'Запечені артишоки, фаршировані хлібними крихтами та травами.',
    mass: 250,
    price: 438.14,
    ingredients: ['артишоки', 'хлібні крихти', 'трави', 'оливкова олія'],
    imageSrc: 'https://placehold.co/600x400.png',
    category: 'Other'
  },
  {
    name: 'Пастіцціо',
    description: "Грецько-італійська запіканка з макаронів, м'яса та бешамелю.",
    mass: 400,
    price: 547.54,
    ingredients: ['макарони', "м'ясний фарш", 'бешамель', 'сир пармезан'],
    imageSrc: 'https://placehold.co/600x400.png',
    category: 'Pasta'
  },
  {
    name: 'Паста з Сальсіче',
    description: 'Паста з італійськими ковбасками та томатним соусом.',
    mass: 350,
    price: 474.34,
    ingredients: ['паста', 'сальсіча', 'томатний соус', 'сир пармезан'],
    imageSrc: 'https://placehold.co/600x400.png',
    category: 'Pasta'
  },
  {
    name: 'Фарфалле з Лососем',
    description: 'Паста у формі метеликів з кремовим соусом та лососем.',
    mass: 350,
    price: 547.54,
    ingredients: ['фарфалле', 'лосось', 'вершки', 'сир пармезан'],
    imageSrc: 'https://placehold.co/600x400.png',
    category: 'Pasta'
  },
  {
    name: 'Брускетта з Печеними Перцями',
    description: 'Хліб з печеними перцями, оливками та каперсами.',
    mass: 150,
    price: 219.49,
    ingredients: ['хліб', 'печені перці', 'оливки', 'каперси'],
    imageSrc: 'https://placehold.co/600x400.png',
    category: 'Other'
  },
  {
    name: 'Різотто з Шафраном',
    description: 'Класичне міланське різотто з шафраном.',
    mass: 400,
    price: 511.34,
    ingredients: ['рис', 'шафран', 'бульйон', 'сир пармезан'],
    imageSrc: 'https://placehold.co/600x400.png',
    category: 'Risotto'
  },
  {
    name: 'Спагеті алла Путтанеска',
    description:
      'Паста з оливками, каперсами, анчоусами у гострому томатному соусі.',
    mass: 350,
    price: 474.34,
    ingredients: ['спагеті', 'оливки', 'каперси', 'анчоуси', 'томатний соус'],
    imageSrc: 'https://placehold.co/600x400.png',
    category: 'Pasta'
  },
  {
    name: 'Лимонний Сорбет',
    description: 'Освіжаючий лимонний десерт.',
    mass: 150,
    price: 182.39,
    ingredients: ['лимонний сік', 'цукор', 'вода'],
    imageSrc: 'https://placehold.co/600x400.png',
    category: 'Other'
  },
  {
    name: 'Тортелліні з Сиром',
    description: 'Маленькі фаршировані пасти з сиром.',
    mass: 300,
    price: 511.34,
    ingredients: ['тортелліні', 'сир рікотта', 'шпинат'],
    imageSrc: 'https://placehold.co/600x400.png',
    category: 'Pasta'
  },
  {
    name: 'Гаспачо',
    description: 'Освіжаючий холодний суп з томатів та овочів.',
    mass: 300,
    price: 328.04,
    ingredients: ['томати', 'огірки', 'перець', 'часник', 'оливкова олія'],
    imageSrc: 'https://placehold.co/600x400.png',
    category: 'Soup'
  },
  {
    name: 'Каннолі',
    description:
      'Сицилійський десерт з хрусткою оболонкою та начинкою з рікотти.',
    mass: 200,
    price: 292.47,
    ingredients: ['оболонка', 'рікотта', 'цукор', 'шоколад'],
    imageSrc: 'https://placehold.co/600x400.png',
    category: 'Other'
  },
  {
    name: 'Феттучіне Альфредо',
    description: 'Паста феттучіне з вершковим соусом Альфредо.',
    mass: 350,
    price: 474.34,
    ingredients: ['феттучіне', 'вершки', 'сир пармезан', 'масло'],
    imageSrc: 'https://placehold.co/600x400.png',
    category: 'Pasta'
  },
  {
    name: 'Полента',
    description: 'Традиційна італійська страва з кукурудзяної каші.',
    mass: 300,
    price: 365.14,
    ingredients: ['кукурудзяна крупа', 'вода', 'сіль', 'сир пармезан'],
    imageSrc: 'https://placehold.co/600x400.png',
    category: 'Other'
  },
  {
    name: 'Равіолі з Шпинатом та Рікоттою',
    description: 'Маленькі фаршировані пасти зі шпинатом та рікоттою.',
    mass: 300,
    price: 547.54,
    ingredients: ['равіолі', 'шпинат', 'рікотта', 'сир пармезан'],
    imageSrc: 'https://placehold.co/600x400.png',
    category: 'Pasta'
  },
  {
    name: 'Артишоки по-римськи',
    description: "Запечені артишоки з часником та м'ятою.",
    mass: 250,
    price: 438.14,
    ingredients: ['артишоки', 'часник', "м'ята", 'оливкова олія'],
    imageSrc: 'https://placehold.co/600x400.png',
    category: 'Other'
  },
  {
    name: 'Кальмари фрі',
    description: 'Смажені кальмари у клярі.',
    mass: 200,
    price: 401.34,
    ingredients: ['кальмари', 'борошно', 'яйця', 'олія'],
    imageSrc: 'https://placehold.co/600x400.png',
    category: 'Other'
  }
]
