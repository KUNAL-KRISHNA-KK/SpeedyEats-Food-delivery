export const categories = [
    {
        id: 1,
        name: 'Burger',
        image: require('../assets/images/burger.png'),
    },
    {
        id: 2,
        name: 'Pizza',
        image: require('../assets/images/pizzaIcon.png'),
    },
    {
        id: 3,
        name: 'Tropical',
        image: require('../assets/images/tropical.png'),
    },
    {
        id: 4,
        name: 'Chinese',
        image: require('../assets/images/chinese.png'),
    },
    {
        id: 5,
        name: 'Noodles',
        image: require('../assets/images/noodles.png'),
    },
    {
        id: 6,
        name: 'Sweets',
        image: require('../assets/images/sweets.png'),
    },

]


export const featured = {
    id: 1,
    title: 'Hot and Spicy',
    description: 'soft and tender fried chicken',
    restaurants: [
       
        {
            id: 1,
            name: '   KFC',
            image: require('../assets/images/kfc1.jpg'),
            description: 'Finger Licking Good!',
            lng: -85.5324269,
            lat: 38.2145602,
            address: 'Nearby-dushera ground bk',
            stars: 5,
            reviews: '4.4k',
            category: 'Fast Food',
            dishes: [
                {
                   id: 1,
                   name: 'Zinger Burger',
                   description: 'cheezy burgers',
                   price: 5,
                   image:  require('../assets/images/ZingerB.jpg')
                },
                {
                   id: 2,
                   name: 'Boneless Strips',
                   description: 'soft and tender',
                   price: 10,
                   image:  require('../assets/images/boneless.jpg')
                },
                {
                   id: 3,
                   name: 'Saver Bucket',
                   description: 'cheezy garlic pizza',
                   price: 50,
                   image:  require('../assets/images/saverB.jpg')
                },
                
                 {
                    id: 4,
                    name: 'Grilled Chicken',
                    description: 'cheezy garlic Grilled',
                    price: 60,
                    image:  require('../assets/images/grilled.jpg')
                 },
                 {
                    id: 5,
                    name: 'Biryani',
                    description: 'flavours',
                    price: 30,
                    image:  require('../assets/images/biryani.jpg')
                 },
                 {
                    id: 6,
                    name: 'Chicken popcorn',
                    description: 'small and delicious',
                    price: 20,
                    image:  require('../assets/images/popcorn.jpg')
                 },
            ]
    
        },
        {
            id: 2,
            name: 'Behroz Biryani',
            image: require('../assets/images/behroz.jpg'),
            description: 'Best Biryanis in the world',
            lng: -85.5324269,
            lat: 38.2145602,
            address: 'near new line metro',
            stars: 4,
            reviews: '4.4k',
            category: 'Fast Food',
            dishes: [
                {
                   id: 1,
                   name: 'Hyderbadi Biryani',
                   description: 'spicy ',
                   price: 20,
                   image:  require('../assets/images/hyderbadi.jpg')
                },
                {
                   id: 2,
                   name: 'Murdabadi Birayani',
                   description: 'Flavourfull',
                   price: 30,
                   image:  require('../assets/images/muradabadi.jpg')
                },
                {
                   id: 3,
                   name: 'Veg Biryani',
                   description: 'with paneer and soya',
                   price: 10,
                   image:  require('../assets/images/veg.jpg')
                },
                {
                    id: 4,
                    name: 'Dum Biryani',
                    description: 'with paneer and soya',
                    price: 30,
                    image:  require('../assets/images/dum.jpg')
                 },
                 {
                    id: 5,
                    name: 'Mutton Biryani',
                    description: 'with paneer and soya',
                    price: 40,
                    image:  require('../assets/images/mutton.jpg')
                 },
                 {
                    id: 6,
                    name: 'Paneer Biryani',
                    description: 'with paneer and soya',
                    price: 60,
                    image:  require('../assets/images/paneer.jpg')
                 },
            ]
    
        },
        {
            id: 3,
            name: 'Papa Johns',
            image: require('../assets/images/pizza.png'),
            description: 'Hot and spicy pizzas',
            lng: -85.5324269,
            lat: 38.2145602,
            address: '434 second street',
            stars: 4,
            reviews: '4.4k',
            category: 'Fast Food',
            dishes: [
                {
                   id: 1,
                   name: 'pizza',
                   description: 'cheezy garlic pizza',
                   price: 10,
                   image: require('../assets/images/pizzaDish.png')
                },
                {
                   id: 2,
                   name: 'burger',
                   description: 'cheezy garlic pizza',
                   price: 10,
                   image:  require('../assets/images/burger1.jpg')
                },
                {
                   id: 3,
                   name: 'chilli p',
                   description: 'cheezy garlic pizza',
                   price: 10,
                   image:  require('../assets/images/chillip.jpg')
                },
                {
                    id: 4,
                    name: 'maggi',
                    description: 'cheezy garlic pizza',
                    price: 10,
                    image:  require('../assets/images/maggi.jpg')
                 },
                 {
                    id: 5,
                    name: 'pasta',
                    description: 'cheezy garlic pizza',
                    price: 10,
                    image:  require('../assets/images/pasta.jpg')
                 },
                 {
                    id: 6,
                    name: 'chicken',
                    description: 'cheezy garlic pizza',
                    price: 10,
                    image:  require('../assets/images/chicken.jpg')
                 },
            ]
    
        }
    ]
}

export const Italian = {
    id: 1,
    title: 'Italian',
    description: 'Italiano Pasta and more',
    restaurants: [
      {
         id: 3,
         name: 'Italianoss',
         image: require('../assets/images/italian.png'),
         description: 'Best Biryanis in the world',
         lng: -85.5324269,
         lat: 38.2145602,
         address: 'near new line metro',
         stars: 4,
         reviews: '4.4k',
         category: 'Fast Food',
         dishes: [
             {
                id: 1,
                name: 'Chesese grill',
                description: 'spicy ',
                price: 20,
                image:  require('../assets/images/cheese.jpg')
             },
             {
                id: 2,
                name: 'Cheese cake',
                description: 'Flavourfull',
                price: 30,
                image:  require('../assets/images/cake3.jpg')
             },
             {
                id: 3,
                name: 'Bread roolls',
                description: 'with paneer and soya',
                price: 10,
                image:  require('../assets/images/bread.jpg')
             },
             {
                 id: 4,
                 name: 'Chocolate cake',
                 description: 'with paneer and soya',
                 price: 30,
                 image:  require('../assets/images/cake.jpg')
              },
              {
                 id: 5,
                 name: 'Hot chocolate ',
                 description: 'with paneer and soya',
                 price: 40,
                 image:  require('../assets/images/hot.jpg')
              },
              {
                 id: 6,
                 name: 'Six Pizza',
                 description: 'with paneer and soya',
                 price: 60,
                 image:  require('../assets/images/pizzaDish.png')
              },
         ]
 
     },
        {
            id: 1,
            name: 'Xero Degrees',
            image: require('../assets/images/xero2.png'),
            description: 'Hot and spicy pizzas',
            lng: -85.5324269,
            lat: 38.2145602,
            address: '434 second street',
            stars: 4,
            reviews: '4.4k',
            category: 'Fast Food',
            dishes: [
                {
                   id: 1,
                   name: ' Pizza',
                   description: 'cheezy garlic pizza',
                   price: 40,
                   image: require('../assets/images/pizza1.jpg')
                },
                {
                   id: 2,
                   name: 'Pasta',
                   description: 'cheezy garlic pizza',
                   price: 40,
                   image:  require('../assets/images/pasta.jpg')
                },
                {
                   id: 3,
                   name: 'Alfredo',
                   description: 'cheezy garlic pizza',
                   price: 60,
                   image:  require('../assets/images/chini.jpg')
                },
                {
                    id: 4,
                    name: 'fettt',
                    description: 'cheezy garlic pizza',
                    price: 70,
                    image:  require('../assets/images/fett.jpg')
                 },
                 {
                    id: 5,
                    name: 'Chinii',
                    description: 'cheezy garlic pizza',
                    price: 30,
                    image:  require('../assets/images/chini.jpg')
                 },
                 {
                    id: 6,
                    name: 'Cheese bread',
                    description: 'cheezy garlic pizza',
                    price: 20,
                    image:  require('../assets/images/bread.jpg')
                 },
            ]
    
        },
        {
            id: 2,
            name: 'Pizza Live',
            image: require('../assets/images/showB.png'),
            description: 'Finger Licking Good!',
            lng: -85.5324269,
            lat: 38.2145602,
            address: 'Nearby-dushera ground bk',
            stars: 5,
            reviews: '4.4k',
            category: 'Fast Food',
            dishes: [
                {
                   id: 1,
                   name: 'Lime lemon',
                   description: 'cheezy burgers',
                   price: 5,
                   image:  require('../assets/images/lime.jpg')
                },
                {
                   id: 2,
                   name: 'White sauce pasta',
                   description: 'soft and tender',
                   price: 10,
                   image:  require('../assets/images/pasta.jpg')
                },
                {
                   id: 3,
                   name: 'Red sauce pasta',
                   description: 'cheezy garlic pizza',
                   price: 50,
                   image:  require('../assets/images/red.jpg')
                },
                {
                    id: 3,
                    name: 'Sweet Corn',
                    description: 'cheezy garlic pizza',
                    price: 50,
                    image:  require('../assets/images/corn.jpg')
                 },
                 {
                    id: 4,
                    name: 'Cheese strips',
                    description: 'cheezy garlic Grilled',
                    price: 60,
                    image:  require('../assets/images/cheese.jpg')
                 },
                 {
                    id: 5,
                    name: 'Big Burgers',
                    description: 'flavours',
                    price: 30,
                    image:  require('../assets/images/burger1.jpg')
                 },
                 {
                    id: 6,
                    name: 'Chocolate shake',
                    description: 'small and delicious',
                    price: 20,
                    image:  require('../assets/images/hot.jpg')
                 },
            ]
    
        }
        
    ]
}

export const Indian = {
    id: 1,
    title: 'Indain Taste',
    description: 'Mouth watering good!',
    restaurants: [
        {
            id: 1,
            name: 'Haldirams',
            image: require('../assets/images/haldirams.jpg'),
            description: 'Thalis and more',
            lng: -85.5324269,
            lat: 38.2145602,
            address: 'near faridbad',
            stars: 4,
            reviews: '4.4k',
            category: 'All food',
            dishes: [
                {
                   id: 1,
                   name: 'Shahi Paneer',
                   description: 'Butter and everything!',
                   price: 60,
                   image: require('../assets/images/shahip.jpg')
                },
                {
                   id: 2,
                   name: 'Mutton rogan',
                   description: 'cheezy garlic Mutton',
                   price: 80,
                   image:  require('../assets/images/muttonR.jpg')
                },
                {
                   id: 3,
                   name: 'Dahi Bhalle',
                   description: 'cheezy garlic pizza',
                   price: 10,
                   image:  require('../assets/images/dahiB.jpg')
                },
                {
                    id: 4,
                    name: 'Naan',
                    description: 'breads',
                    price: 10,
                    image:  require('../assets/images/naan.jpg')
                 },
                 {
                    id: 5,
                    name: 'Dal makhani',
                    description: 'cheezy garlic pizza',
                    price: 10,
                    image:  require('../assets/images/dalM.jpg')
                 },
                 {
                    id: 6,
                    name: 'Cake',
                    description: 'fluffy as fuck!',
                    price: 90,
                    image:  require('../assets/images/cake.jpg')
                 },
            ]
    
        },
        {
            id: 2,
            name: 'Punjabi Nature',
            image: require('../assets/images/punjabiN.jpg'),
            description: 'Finger Licking Good!',
            lng: -85.5324269,
            lat: 38.2145602,
            address: 'Nearby-dushera ground bk',
            stars: 5,
            reviews: '4.4k',
            category: 'Fast Food',
            dishes: [
                {
                   id: 1,
                   name: 'Matka Chicken',
                   description: 'cheezy chicken',
                   price: 15,
                   image:  require('../assets/images/matkaC.jpg')
                },
                {
                   id: 2,
                   name: 'Boneless chicken',
                   description: 'soft and tender',
                   price: 20,
                   image:  require('../assets/images/bonelessC.jpg')
                },
                {
                   id: 3,
                   name: 'Maharaja Thali',
                   description: 'cheezy garlic thali',
                   price: 40,
                   image:  require('../assets/images/maharajaT.jpg')
                },
                {
                    id: 3,
                    name: 'Veg thali',
                    description: 'cheezy garlic pizza',
                    price: 30,
                    image:  require('../assets/images/vegT.jpg')
                 },
                 {
                    id: 4,
                    name: 'Grilled Paneer',
                    description: 'cheezy garlic Grilled',
                    price: 40,
                    image:  require('../assets/images/grilledP.jpg')
                 },
                 {
                    id: 5,
                    name: 'Paneer Butter M',
                    description: 'flavours',
                    price: 50,
                    image:  require('../assets/images/paneerBM.jpg')
                 },
                 {
                    id: 6,
                    name: 'Curry',
                    description: 'small and delicious',
                    price: 20,
                    image:  require('../assets/images/curry.jpg')
                 },
            ]
    
        },
        {
            id: 3,
            name: 'Anna Madrasi',
            image: require('../assets/images/anaa.jpg'),
            description: 'Best south indian in the world',
            lng: -85.5324269,
            lat: 38.2145602,
            address: 'near new line metro',
            stars: 4,
            reviews: '4.4k',
            category: 'Fast Food',
            dishes: [
                {
                   id: 1,
                   name: 'Masala Dosa',
                   description: 'spicy ',
                   price: 20,
                   image:  require('../assets/images/dosa1.jpg')
                },
                {
                   id: 2,
                   name: 'Idli',
                   description: 'Flavourfull',
                   price: 30,
                   image:  require('../assets/images/idli.jpg')
                },
                {
                   id: 3,
                   name: 'Utpam',
                   description: 'with paneer and soya',
                   price: 10,
                   image:  require('../assets/images/uttapam.jpg')
                },
                {
                    id: 4,
                    name: 'Paner Dosa',
                    description: 'with paneer and soya',
                    price: 50,
                    image:  require('../assets/images/dosa2.jpg')
                 },
                 {
                    id: 5,
                    name: 'Plain Dosa',
                    description: 'with paneer and soya',
                    price: 40,
                    image:  require('../assets/images/dosa3.jpg')
                 },
                 {
                    id: 6,
                    name: 'Sambhar extra',
                    description: 'with paneer and soya',
                    price: 5,
                    image:  require('../assets/images/sambhar.jpg')
                 },
            ]
    
        }
    ]
}