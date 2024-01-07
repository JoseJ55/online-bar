import React, { useEffect, useState } from 'react';
import './MenuInfo.css';

import MenuCard from '../MenuCard/MenuCard';

function MenuInfo() {
    const data = [
        {
            title: 'Cocktails',
            desc: 'Experience the magic of mixology with our handcrafted cocktails. Each drink is a symphony of flavors, carefully composed to delight your senses. From classic concoctions to innovative creations, our cocktail menu is a celebration of the art of drink.',
            image: null,
            drinks: [
                {
                    name: 'Classic Monjito',
                    price: '5.00',
                    desc: 'Rum infused with fresh lime, mint and sugar.'
                },
                {
                    name: 'Royal Martini',
                    price: '5.00',
                    desc: 'Freshly brewed espresso mixed with rum and lime.'
                },
                {
                    name: 'Raspberry Mojito',
                    price: '5.00',
                    desc: 'Rum stirred with raspberry, fresh mint, lime and sugar.'
                },
                {
                    name: 'Daiquiri',
                    price: '5.00',
                    desc: 'Rum, lemon juice and sugar mixed with apple.'
                },
                {
                    name: 'Retro Margarita',
                    price: '5.00',
                    desc: 'Tequila, lime juice, rum with pinch of salt.'
                },
                {
                    name: 'Dry Fruit Mojito',
                    price: '5.00',
                    desc: 'Vodka mixed with sugar and dry fruits.'
                },
                {
                    name: 'Classic Margarita',
                    price: '5.00',
                    desc: 'Tequila mixed with sugar and lime'
                }
            ]
        },
        {
            title: 'Whiskey',
            desc: `Savor the rich, complex flavors of our curated selection of whiskeys. From the smoky peat of Scotland to the sweet corn of Kentucky, our whiskey menu takes you on a journey through the world's finest distilleries Manhattan.`,
            image: '/images/edgar-chaparro-Lwx-q6OdGAc-unsplash.jpg',
            drinks: [
                {
                    name: 'Whiskey sour',
                    price: '5.00',
                    desc: 'Fresh lemon juice infused premium whiskey and lime.'
                },
                {
                    name: 'Manhattan',
                    price: '5.00',
                    desc: 'White rum mixed with whiskey and sugar.'
                },
                {
                    name: 'Bourbon Flip',
                    price: '5.00',
                    desc: 'Premium whiskey, lime mixed with sugar syrup.'
                },
                {
                    name: 'Old Fashioned',
                    price: '5.00',
                    desc: 'Brown sugar, lime and sugar mixed with whiskey.'
                },
                {
                    name: 'Paper Plane',
                    price: '5.00',
                    desc: 'Premium whiskey mixed with lime and sugar.'
                },
                {
                    name: 'Gin Fizz',
                    price: '5.00',
                    desc: 'Premium gin mixed with sugar syrup.'
                },
                {
                    name: 'Gim Gimlet',
                    price: '5.00',
                    desc: 'Premium gin with lime and tequila.'
                }
            ]
        },
        {
            title: 'Savory Delights',
            desc: 'Enjoy the delightful flavors and variety of our carefully crafted appetizers!',
            image: '/images/lidye-1Shk_PkNkNw-unsplash.jpg',
            drinks: [
                {
                    name: 'Mozzarella Pesto Skewers',
                    price: '5.00',
                    desc: 'Fresh mozzarella balls skewered with cherry tomatoes and basil leaves, drizzled with a zesty homemade pesto.'
                },
                {
                    name: 'Crispy Spinach Artichoke Dip',
                    price: '5.00',
                    desc: 'A creamy blend of spinach, artichokes, and melted cheese, baked to golden perfection and served with crisp tortilla chips.'
                },
                {
                    name: 'Sesame Soy Edamame',
                    price: '5.00',
                    desc: 'Steamed edamame pods tossed in a savory blend of sesame oil and soy sauce, sprinkled with toasted sesame seeds for a delightful crunch.'
                },
                {
                    name: 'Stuffed Mushrooms with Goat Cheese',
                    price: '5.00',
                    desc: 'Mushrooms caps filled with a savory mixture of goat cheese, garlic, and herbs, baked until golden brown and garnished with fresh parsley.'
                },
                {
                    name: 'Spicy Shrimp Wonton Cups',
                    price: '5.00',
                    desc: 'Crispy wonton cups filled with a spicy shrimp mixture, topped with a drizzle of sriracha and garnished with green onions.'
                },
                {
                    name: 'Bruschetta Trio',
                    price: '5.00',
                    desc: 'A trio of classic tomato and basil bruschetta, tangy olive tapenade, and creamy white bean spread served on toasted baguette slices.'
                },
                {
                    name: 'Baked Brie with Cranberry Compote',
                    price: '5.00',
                    desc: 'Warm, gooey brie cheese baked to perfection and topped with a sweet and tangy cranberry compote, served with crusty bread or crackers.'
                },
                {
                    name: 'Prosciutto-Wrapped Asparagus',
                    price: '5.00',
                    desc: 'Tender asparagus spears wrapped in thin slices of prosciutto, roasted until crispy, and served with a balsamic glaze.'
                }
            ]
        }
    ]

    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentPosition = window.scrollY;
            console.log(currentPosition)
            setScrollPosition(currentPosition);
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

  return (
    <div id='menuInfo'>
        <div id='menuInfo-header'>
            <img 
                id='menuInfo-header-background' 
                src='/images/louis-hansel-Zg7_HNM9H7I-unsplash.jpg' 
                alt='menu header' 
                style={{ transform: `translateY(-${Math.min(scrollPosition / 700, 10)}%)` }} />

            <p id='menuInfo-header-title'>Our Menu</p>
            <p id='menuInfo-header-text'>Indulge in Our Exquisite Selection of Food and Drinks</p>
        </div>

        <div id='menuInfo-container'>
          <p id='container-title'>Quench Your Thirst with Our Handcrafted Cocktails and Fine Whiskeys</p>
          
          <div id='container-items'>
            {data.map((item, index) => (
                <MenuCard data={item} headerImage={item?.image ? true : false} />
            ))}
          </div>
        </div>
    </div>
  )
}

export default MenuInfo