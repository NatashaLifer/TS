"use strict";
/* TASK
 
Написати невеличкий функціонал роботи звичайного магазину одягу.
+ Тобто, у нас є склад товарів, де ми маємо приняти товар і розклеїти на них ціну.
+ Та перевірити чи вся розмірна сітка є в наявності.
+ Якщо товару якогось розміру немає (переліченого в розмірній сітці), то вивести повідомлення про те, що товару немає.
+ Для розмірної сітки використати enum.
+ Також, додати можливість зміни ціни на товар при умові, що буде SALE. а не звичайна акція
+ Вивести на екран в довільному вигляді інформацію про товари, які є в наявності і з проставленою ціною.
+ Якщо товару немає (кількість - "0"), то вивести повідомлення про те, що товару немає

* Список товарів які можуть продаватися:
    Футболка - T-shirt
    Штани - Pents
    Світшот - Sweater
* Розмірна сітка:
    S
    M
    L
    XL
Також описати типи для змінних які вказані нижче.
*/
// import { Size, Clothes, PriceMark } from './types'
// import { CardComponent } from './CardComponent'
// import 'stickPrice'
// import {stickPrice} from './stickPrice'
var Size;
(function (Size) {
    Size["S"] = "S";
    Size["M"] = "M";
    Size["L"] = "L";
    Size["XL"] = "XL";
})(Size || (Size = {}));
const newClothes = [
    {
        _id: 883355,
        name: 'T-shirt',
        price: null,
        size: Size.M,
        // size: 'S',
        count: 10,
    },
    {
        _id: 883356,
        name: 'T-shirt',
        price: null,
        size: Size.M,
        // size: 'M',
        count: 10,
    },
    {
        _id: 883357,
        name: 'T-shirt',
        price: null,
        size: Size.L,
        // size: 'L',
        count: 0,
    },
    {
        _id: 883358,
        name: 'T-shirt',
        price: null,
        size: Size.XL,
        // size: 'XL',
        count: 10,
    },
    {
        _id: 883359,
        name: 'T-shirt',
        price: null,
        size: Size.XL,
        // size: 'XXL',
        count: 10,
    },
    {
        _id: 883365,
        name: 'Pents',
        price: null,
        size: Size.S,
        // size: 'S',
        count: 2,
    },
    {
        _id: 883366,
        name: 'Pents',
        price: null,
        size: Size.M,
        // size: 'M',
        count: 6,
    },
    {
        _id: 883367,
        name: 'Pents',
        price: null,
        size: Size.L,
        // size: 'L',
        count: 10,
    },
    {
        _id: 883368,
        name: 'Pents',
        price: null,
        size: Size.XL,
        // size: 'XL',
        count: 0,
    },
    {
        _id: 883310,
        name: 'Sweater',
        price: null,
        size: Size.S,
        // size: 'S',
        count: 10,
    },
    {
        _id: 883311,
        name: 'Sweater',
        price: null,
        size: Size.M,
        // size: 'M',
        count: 10,
    },
    {
        _id: 883312,
        name: 'Sweater',
        price: null,
        size: Size.L,
        // size: 'L',
        count: 1,
    },
    {
        _id: 883313,
        name: 'Sweater',
        price: null,
        size: Size.L,
        // size: 'XL',
        count: 10,
    },
];
const priceMark = [
    {
        _id: 883355,
        price: 100,
    },
    {
        _id: 883356,
        price: 100,
    },
    {
        _id: 883357,
        price: 130,
    },
    {
        _id: 883358,
        price: 100,
    },
    {
        _id: 883359,
        price: 110,
    },
    {
        _id: 883365,
        price: 120,
    },
    {
        _id: 883366,
        price: 100,
    },
    {
        _id: 883367,
        price: 100,
    },
    {
        _id: 883368,
        price: 150,
    },
    {
        _id: 883310,
        price: 100,
    },
    {
        _id: 883311,
        price: 100,
    },
    {
        _id: 883312,
        price: 120,
    },
    {
        _id: 883313,
        price: 200,
    },
];
const ourSizes = Object.values(Size);
function stickPrice(clothes, marks) {
    clothes.forEach(item => {
        marks.forEach(mark => {
            if (item._id === mark._id) {
                item.price = mark.price;
            }
        });
    });
}
stickPrice(newClothes, priceMark);
function chengePriceforSale(clothes, clothesActie, discount) {
    clothes.forEach(item => {
        if (item.name === clothesActie && item.price !== null) {
            item.price = item.price * (100 - discount) / 100;
        }
    });
}
chengePriceforSale(newClothes, 'Sweater', 10);
function checkAvailableAllSizes(clothes) {
    let structuredGoods = [];
    let names = Array.from(new Set(clothes.map(elem => elem.name)));
    names.forEach((elem, index) => {
        structuredGoods[index] = clothes.filter(element => element.name == elem);
    });
    structuredGoods.forEach(item => {
        let allSize = [];
        let name = '';
        item.forEach(elem => {
            allSize.push(elem.size);
            name = elem.name;
        });
        ourSizes.forEach(singleSize => {
            if (!allSize.includes(singleSize)) {
                // console.log('розміру ' + singleSize + ' немає для ' + name )
                const messageWrap = document.querySelector('.message');
                messageWrap.classList.remove('deactiveted');
                const orderClothes = document.createElement('p');
                orderClothes.textContent = `- ${name} size: ${singleSize}`;
                orderClothes.className = 'message__order-clothes';
                messageWrap.append(orderClothes);
            }
        });
    });
}
checkAvailableAllSizes(newClothes);
const parentElement = document.querySelector(".table__body");
const CardComponent = (data, parent) => {
    data.forEach((item) => {
        const self = document.createElement('ul');
        const clothesTitle = document.createElement("li");
        const clothesId = document.createElement("li");
        const clothesPrice = document.createElement("li");
        const clothesSize = document.createElement("li");
        const clothesCount = document.createElement("li");
        const comment = document.createElement("li");
        clothesTitle.textContent = item.name;
        clothesId.textContent = `${item._id}`;
        clothesSize.textContent = `${item.size}`;
        clothesPrice.textContent = `${item.price}`;
        clothesCount.textContent = `${item.count}`;
        if (clothesCount.textContent === '0') {
            comment.textContent = "EMPTY!";
            comment.style.color = 'red';
        }
        else {
            comment.textContent = 'Ok';
        }
        self.className = 'table__body-item';
        clothesTitle.className = 'table__body-item-description';
        clothesId.className = 'table__body-item-description';
        clothesSize.className = 'table__body-item-description';
        clothesPrice.className = 'table__body-item-description';
        clothesCount.className = 'table__body-item-description';
        comment.className = 'table__body-item-description';
        self.append(clothesTitle, clothesId, clothesSize, clothesPrice, clothesCount, comment);
        parent.append(self);
    });
};
CardComponent(newClothes, parentElement);
//# sourceMappingURL=index.js.map