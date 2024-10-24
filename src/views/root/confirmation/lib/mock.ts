import { Order } from '@/entities/order'

export const mockedOrder: Order = {
  id: 1,
  number: '710b1a62',
  deliveryAdress: {
    id: 1,
    buildingNumber: 13,
    city: 'Red City',
    street: 'Friday street',
  },
  orderDetail: {
    id: 1,
    noChange: true,
    phone: '+123 456 7890',
    changeFrom: 500,
    date: '24.10.2024',
    email: 'd.goncharenko.man@gmail.com',
    name: 'Dima Honcharenko',
    payType: 'card',
  },
  orderItems: [
    {
      dish: {
        id: 11,
        title: 'Окрошка',
        weight: 250,
        volume: null,
        composition:
          'Копчене філе курки,редис,огірок,перепелине яйце\n(на айрані)',
        price: 220,
        image:
          'https://images.bolt.eu/store/2024/2024-05-30/31924a9d-ec6c-43a3-bc73-887bb4c839d7.jpeg',
        type: 'Супи',
        isNew: false,
      },
      orderItemIngredients: [],
    },
    {
      dish: {
        id: 10,
        title: 'Паста з телятиною та овочами',

        weight: 400,
        volume: null,
        composition: 'Ніжна телятина та овочі у вершково-пряному соусі',
        price: 345,
        image:
          'https://images.bolt.eu/store/2022/2022-03-29/2677177a-0a7a-4b5a-bb3c-f1453b165b00.jpeg',
        type: 'Паста',
        isNew: false,
      },
      orderItemIngredients: [
        {
          id: 1,
          quantity: 2,
        },
      ],
    },
    {
      dish: {
        id: 8,
        title: 'Паста з куркою та грибами',

        weight: 400,
        volume: null,
        composition:
          'Шматочки соковитої курки, печериці, пармезан у томатно-вершковому соусі',
        price: 335,
        image:
          'https://images.bolt.eu/store/2022/2022-03-29/8ff88e23-762b-4e9b-bd8f-e18bf4011620.jpeg',
        type: 'Паста',
        isNew: false,
      },
      orderItemIngredients: [],
    },
  ],
  pickup: false,
  totalPrice: 0,
}
