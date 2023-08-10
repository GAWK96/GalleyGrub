const foods = [
    {
        type: 'Burger',
        id: 1,
        name: 'Classic',
        price: '$5.00',
        filtered: 'Burger Classic',
        link: 'https://i.ibb.co/kS9YcrD/CLASSIC.jpg',
    },
    {
        type: 'Burger',
        id: 2,
        name: 'Irl',
        price: '$8.00',
        filtered: 'Burger Irl',
        link: 'https://i.ibb.co/PNtCzbD/IRL.jpg',
    },
    {
        type: 'Burger',
        id: 3,
        name: 'Frozen',
        price: '$7.00',
        filtered: 'Burger Frozen',
        link: 'https://i.ibb.co/wMYMqnf/FROZEN.jpg',
    },
    {
        type: 'Burger',
        id: 4,
        name: 'Jellyfish',
        price: '$15.00',
        filtered: 'Burger Jellyfish',
        link: 'https://i.ibb.co/D800qFz/JELLYFISH-JELLY.jpg',
    },
    {
        type: 'Burger',
        id: 5,
        name: 'Nasty',
        filtered: 'Burger Nasty',
        price: '$9.00',
        link: 'https://i.ibb.co/CHN7w8y/NASTY.jpg',
    },
    {
        type: 'Burger',
        id: 6,
        name: 'Pretty',
        filtered: 'Burger Pretty',
        price: '$10.00',
        link: 'https://i.ibb.co/n8ySVxv/PRETTY.jpg',
    },
    {
        type: 'Burger',
        id: 7,
        name: 'New',
        filtered: 'Burger New',
        price: '$10.00',
        link: 'https://i.ibb.co/bH3YLCK/NEW.jpg',
    },
    {
        type: 'Burger',
        id: 8,
        name: 'With love',
        filtered: 'Burger With Love',
        price: '$12.00',
        link: 'https://i.ibb.co/MNDzmMj/WITH-LOVE.jpg',
    },
    {
        type: 'Burger',
        id: 9,
        name: 'Pipsqueak',
        filtered: 'Burger Pipsqueak',
        price: '$12.00',
        link: 'https://i.ibb.co/2Pk7CkX/PIPSQUEAK.jpg',
    },


    {
        type: 'Coral-Bits',
        id: 10,
        name: 'Small',
        filtered: 'Coral Bits Small',
        price: '$5.00',
        link: 'https://i.ibb.co/9pqPyGF/CORAL-BITS.png',
    },
    {
        type: 'Coral-Bits',
        id: 11,
        name: 'Medium',
        filtered: 'Coral Bits Medium',
        price: '$10.00',
        link: 'https://i.ibb.co/9pqPyGF/CORAL-BITS.png',
    },
    {
        type: 'Coral-Bits',
        id: 12,
        name: 'Large',
        filtered: 'Coral Bits Large',
        price: '$15.00',
        link: 'https://i.ibb.co/9pqPyGF/CORAL-BITS.png',
    },
    {
        type: 'Kiddie-meal',
        id: 12,
        name: 'Single',
        filtered: 'Kiddie Meal Single',
        price: '$10.00',
        link: 'https://i.ibb.co/nc7k61L/KIDDIE-MEAL.png',
    },
    {
        type: 'Kiddie-meal',
        id: 12,
        name: 'Double',
        filtered: 'Kiddie Meal Double',
        price: '$20.00',
        link: 'https://i.ibb.co/nc7k61L/KIDDIE-MEAL.png',
    },
    {
        type: 'Kiddie-meal',
        id: 12,
        name: 'Tripple',
        filtered: 'Kiddie Meal Tripple',
        price: '$30.00',
        link: 'https://i.ibb.co/nc7k61L/KIDDIE-MEAL.png',
    },
    {
        type: 'Soda',
        id: 13,
        name: 'Small',
        filtered: 'Soda Small',
        price: '$5.00',
        link: 'https://i.ibb.co/TP8jpQG/KELP-SODA.png',
    },
    {
        type: 'Soda',
        id: 14,
        name: 'Medium',
        filtered: 'Soda Medium',
        price: '$10.00',
        link: 'https://i.ibb.co/TP8jpQG/KELP-SODA.png'
    },
    {
        type: 'Soda',
        id: 15,
        name: 'big',
        filtered: 'Soda Big',
        price: '$15.00',
        link: 'https://i.ibb.co/TP8jpQG/KELP-SODA.png',
    },
]

const headers = [
    {header: 'Burger',
     inputValue:'Burger'
    },
    {header: 'Coral Bits',
     inputValue:'Coral-Bits'
    },
    {header: 'Kiddie Meal',
     inputValue:'Kiddie-meal'
    },
    {header: 'Soda',
     inputValue:'Soda'
    }
]

const kart = [
]

const totalKart =
[
    {total: parseFloat(parseFloat(500).toFixed(2))}
]
module.exports = { foods, headers, kart, totalKart }
