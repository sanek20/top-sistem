import React from "react";

import bronzeBg from '../img/bgBronze.png'
import silverBg from '../img/bgSilver.png'
import goldBg from '../img/bgGold.png'
import platinumBg from '../img/bgPlatinum.png'
import vipBg from '../img/bgVip.png'
import managerBg from '../img/managerBg.png'

export const mockData = {
    cardNumber: '1267 3249 0453 9970',
    firstName: "Olga",
    lastName: "Alexeeva",
    sex: "female",
    age: "18",
    birth: "02.03.1987",
    email: "olgasjj@mail.ru",
    phone: "+7 988 347 29 23"
}

export const ages = [
    {
        label: 'от 14 до 18',
        value: 14,
    },
    {
        label: 'от 18 до 25',
        value: 18,
    },
    {
        label: 'от 25 до 35',
        value: 25,
    },
    {
        label: 'от 35 до 45',
        value: 35,
    },
    {
        label: 'от 45 до 55',
        value: 45,
    },
    {
        label: 'от 55 до 65',
        value: 55,
    },
    {
        label: 'от 65 до 75',
        value: 65,
    },
    {
        label: 'от 75 до 85',
        value: 75,
    },
];

export const cities = [
    {
        label: 'Ростов-на-Дону',
        value: 1,
    },
    {
        label: 'Москва',
        value: 2,
    },
    {
        label: 'Санкт-Петербург',
        value: 3,
    },
    {
        label: 'Краснодар',
        value: 4,
    },
    {
        label: 'Воронеж',
        value: 5,
    },
    {
        label: 'Волгоград',
        value: 6,
    },
    {
        label: 'Новосибирск',
        value: 7,
    },
]

export const gradients = [
    'linear-gradient(134.82deg, #D9F3B6 2.78%, #FFFACB 100%)',
    'linear-gradient(134.82deg, #F4E7B8 2.78%, #FFF6CA 100%)',
    'linear-gradient(134.82deg, #B7F4F4 2.78%, #CBEAFF 100%)',
    'linear-gradient(134.82deg, #F3B7F4 2.78%, #F2CAFF 100%)',
    'linear-gradient(134.82deg, #EDCECE 2.78%, #FFF2CB 100%)',
]

export const catalogList = [
    {
        id: '1',
        name: 'Рио',
        address: 'ул. Гагарина, 1',
        logo: 'https://su-orgs.ru/images/chains/rio-trts.jpg',
        chosen: false,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan massa lorem malesuada facilisi et vitae. Eu sit eu commodo semper fermentum at sagittis sit. Ridiculus lectus vulputate mattis urna. At venenatis mattis sed dignissim est potenti.'
    },
    {
        id: '2',
        name: 'Плаза',
        address: 'ул. Демократическая, 157',
        logo: 'https://touch-media.ru/wp-content/uploads/2014/10/city-plaza-logo.png',
        chosen: false,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan massa lorem malesuada facilisi et vitae. Eu sit eu commodo semper fermentum at sagittis sit. Ridiculus lectus vulputate mattis urna. At venenatis mattis sed dignissim est potenti.'
    },
    {
        id: '3',
        name: 'Горизонт',
        address: 'ул. Михаила Нагибина, 90',
        logo: 'https://sistemy-bezopasnosti.com/upload/portfolio/1000c5f836b741541ca467422614356ecf7a_large.jpg',
        chosen: true,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan massa lorem malesuada facilisi et vitae. Eu sit eu commodo semper fermentum at sagittis sit. Ridiculus lectus vulputate mattis urna. At venenatis mattis sed dignissim est potenti.'
    },
    {
        id: '4',
        name: 'Золотой Вавилон',
        address: 'ул. Жмайлова, 753',
        logo: 'https://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1Rk1AKJmp2H9VoPYHdjQ3Y6JKaKTM5SRkZCeTgDn6uOyic',
        chosen: false,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan massa lorem malesuada facilisi et vitae. Eu sit eu commodo semper fermentum at sagittis sit. Ridiculus lectus vulputate mattis urna. At venenatis mattis sed dignissim est potenti.'
    },
    {
        id: '5',
        name: 'Моремолл',
        address: 'ул. Новая Заря, 7',
        logo: 'http://salmanova.ru/media/news/image/589/image-589-original.jpg',
        chosen: false,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan massa lorem malesuada facilisi et vitae. Eu sit eu commodo semper fermentum at sagittis sit. Ridiculus lectus vulputate mattis urna. At venenatis mattis sed dignissim est potenti.'
    },
]

export const shops = [
    {
        id: '1',
        name: 'М.Видео',
        category: 'Электроника',
        logo: 'https://7nebonnov.ru/upload/iblock/f06/213d72011d0e10ed41f585a5430ac4d5.png',
        cashback: '4',
    },
    {
        id: '2',
        name: 'House',
        category: 'Одежда',
        logo: 'https://www.forumdebrecen.hu/fileadmin/user_upload/CENTERS/DFO/shops/house-logo.jpg',
        cashback: '3',
    },
    {
        id: '3',
        name: 'Koton',
        category: 'Одежда',
        logo: 'https://koton.amorltd.com.tr/wp-content/uploads/sites/2/2021/01/koton_logo2.png',
        cashback: '4',
    },
    {
        id: '4',
        name: 'Pull&Bear',
        category: 'Одежда',
        logo: 'http://mywishlist.ru/pic/i/wish/orig/008/443/681.jpeg',
        cashback: '4',
    },

]

export const levelCardColor = {
    bronze: '#BD611F',
    silver: '#6B6968',
    gold: '#C08F0F',
    platinum: '#B6B6B6',
    vip: '#000000',
}

// export const backgrounds = [
//     {status: 'bronze', asset: bronzeBg},
//     {status: 'silver', asset: silverBg},
//     {status: 'gold', asset: goldBg},
//     {status: 'platinum', asset: platinumBg},
//     {status: 'vip', asset: vipBg},
// ]
export const backgrounds = [
    {status: 'bronze', asset: bronzeBg},
    {status: 'silver', asset: silverBg},
    {status: 'gold', asset: goldBg},
    {status: 'platinum', asset: platinumBg},
    {status: 'vip', asset: vipBg},
    {status: 'manager', asset: managerBg}
]