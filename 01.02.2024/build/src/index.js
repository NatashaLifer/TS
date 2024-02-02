"use strict";
/*
Написати функціонал імітації складу магазину продуктів.

Product - базовий обʼєкт, який містить властивості:
id
name
price
category
description: GMO, Gluten
count
expiredDate: date format dd.mm.yyyy

Написати функцію, яка приймає масив продуктів і виводить на екран тільки ті продукти, які є свіжими.
Написати функцію, яка приймає масив продуктів і сортує їх за ціною в порядку зростання.
Написати функцію, яка буде з масиву продуктів робити один обʼект в якому ключи будуть категорії продуктів,
  а значення - масив продуктів цієї категорії.
Написати функцію, яка має перевіряти чи відповідає кожний продукт 2-м критеріям:
'with out GMO'
'with out Gluten'
*/
const products = [
    {
        id: 1,
        name: 'Apple',
        price: 20,
        category: 'Fruits',
        description: 'Green apple',
        count: 10,
        expiredDate: '01.01.2024',
    },
    {
        id: 2,
        name: 'Potato',
        price: 10,
        category: 'Vegetables',
        description: 'Potato',
        count: 20,
        expiredDate: '03.02.2024',
    },
    {
        id: 3,
        name: 'Tomato',
        price: 15,
        category: 'Vegetables',
        description: 'Tomato',
        count: 20,
        expiredDate: '20.02.2024',
    },
    {
        id: 4,
        name: 'Milk',
        price: 30,
        category: 'Milk',
        description: 'Milk Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum facere odio itaque! Sapiente quod aperiam, velit exercitationem, iusto fuga explicabo ratione esse nihil quasi doloribus hic a fugiat repellat perferendis.',
        count: 20,
        expiredDate: '02.02.2023',
    },
    {
        id: 5,
        name: 'Bread',
        price: 10,
        category: 'Bread',
        description: 'Bread Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum facere odio itaque! Sapiente quod aperiam, velit exercitationem, iusto fuga GMO explicabo ratione esse nihil quasi doloribus hic a fugiat repellat perferendis.',
        count: 20,
        expiredDate: '03.02.2024',
    },
    {
        id: 6,
        name: 'Meat',
        price: 100,
        category: 'Meat',
        description: 'Meat Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum facere odio itaque! Sapiente quod aperiam, velit exercitationem, iusto fuga explicabo ratione Gluten esse nihil quasi doloribus hic a fugiat repellat perferendis.',
        count: 20,
        expiredDate: '02.10.2024',
    },
    {
        id: 7,
        name: 'Orange',
        price: 20,
        category: 'Fruits',
        description: 'Green apple Lorem ipsum, dolor sit amet GMO consectetur adipisicing elit. Cum facere odio itaque! Sapiente quod aperiam, velit exercitationem, iusto fuga explicabo ratione esse nihil quasi doloribus hic a fugiat repellat perferendis.',
        count: 10,
        expiredDate: '02.02.2024',
    },
    {
        id: 8,
        name: 'Cucumber',
        price: 10,
        category: 'Vegetables',
        description: 'Cucumber',
        count: 20,
        expiredDate: '04.02.2024',
    },
    {
        id: 9,
        name: 'Coca-Cola',
        price: 15,
        category: 'Water',
        description: 'Coca-Cola 1L',
        count: 20,
        expiredDate: '28.01.2024',
    },
    {
        id: 10,
        name: 'Yuorhurt',
        price: 30,
        category: 'Milk',
        description: 'Yuorhurt 1L',
        count: 20,
        expiredDate: '02.02.2024',
    },
];
let selectedFreshProducts = [];
function showFreshProducts(prod) {
    let dateNow = new Date();
    selectedFreshProducts = prod.filter((singleProd) => {
        const expiredDateProd = new Date(singleProd.expiredDate.split('.').reverse().join('.'));
        const lostFreshDays = (expiredDateProd.getTime() - dateNow.getTime()) / (1000 * 60 * 60 * 24) + 1;
        // if(lostFreshDays > 0){
        //     console.log(singleProd.name, singleProd.expiredDate)
        // }
        return lostFreshDays > 0;
    });
    return selectedFreshProducts;
}
showFreshProducts(products);
function sortProductsByPrice(prod) {
    const priceUp = prod.sort((a, b) => {
        return a.price - b.price;
    });
    return priceUp;
}
sortProductsByPrice(selectedFreshProducts);
function sortByCategories(prod) {
    let structuredByCategories = prod.reduce((acc, elem) => {
        if (acc[elem.category]) {
            acc[elem.category].push(elem);
        }
        else {
            acc[elem.category] = [elem];
        }
        return acc;
    }, {});
    console.log(structuredByCategories);
    return structuredByCategories;
}
sortByCategories(products);
const parentElement = document.querySelector(".wrapper");
const renderCardProduct = (data, parent) => {
    data.forEach((item) => {
        const self = document.createElement('div');
        const productTitle = document.createElement("h2");
        const productId = document.createElement("span");
        const productPrice = document.createElement("h3");
        const productCategory = document.createElement("h3");
        const productDescription = document.createElement("p");
        const productCount = document.createElement("p");
        const productExpireDate = document.createElement("p");
        // const withoutGmoGluten = document.createElement('p')
        productTitle.textContent = item.name;
        productId.textContent = `ID: ${item.id}`;
        productCategory.textContent = `${item.category}`;
        productDescription.textContent = `Description: ${item.description}`;
        productExpireDate.textContent = `Expired Date: ${item.expiredDate}`;
        productCount.textContent = `Quntity: ${item.count}`;
        productPrice.textContent = `Price: $${item.price}`;
        // withoutGmoGluten.textContent = 'GMO-free & gluten-free'
        productTitle.style.color = 'purple';
        productId.style.color = 'darkgrey';
        // withoutGmoGluten.className = 'products__item-gmo-gluten'
        self.append(productTitle, productId, productCategory, productDescription, productExpireDate, productCount, productPrice);
        parent.append(self);
    });
};
renderCardProduct(selectedFreshProducts, parentElement);
// const textGmoFree = document.querySelectorAll('.products__item-gmo-gluten')
// console.log(textGmoFree);
function checkGmoAndGliten(prod) {
    prod.forEach((singleProduct) => {
        const productWithGmo = singleProduct.description.toLowerCase().includes(('gmo'));
        const productWihGluten = singleProduct.description.toLowerCase().includes(('gluten'));
        if (!productWithGmo && !productWihGluten) {
            console.log(singleProduct.id + singleProduct.name + ' is a GMO-free and gluten-free product');
        }
    });
}
checkGmoAndGliten(products);
//# sourceMappingURL=index.js.map