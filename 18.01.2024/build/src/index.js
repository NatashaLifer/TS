"use strict";
/*
щоб створити новий проект TS, створюємо окрему папку під проект та прописуємо в терміналі:
npm init vite@latest FOLDER_NAME --template vanilla-ts
потім вибираємо: vanilla JS, і помім: TS
*/
// const userName: string = 'fofi' 
// console.log(userName);
/* TASK - 1
 
Створити стрілочну функцію, яка повертає максимальне значення з усіх переданих аргументів.
Кількість аргументів може бути довільною. Потрібно повернути найбільше з них.
*/
// const checkMaxValue: number[] = [1, 2, 3, 4, 5, 6, 7]
// findMaxValue(1, 2, 3, 4, 5, 6, 7, 8, 9, 10,1234,45,456,6,7,657,657,56,578,768,68,869,89,879,7,0,98,0)
function findMaxValue(...allNumbers) {
    let max = allNumbers[0];
    for (let i = 0; i < allNumbers.length; i++) {
        if (allNumbers[i] > max) {
            max = allNumbers[i];
        }
    }
    return max;
}
// console.log(findMaxValue(1, 2, 3, 4, 5, 6, 7, 8, 9, 10,1234,45,456,6,7,657,657,56,578,768,68,869,89,879,7,0,98,0));
/* TASK - 1.1
 
З масиву чисел виберіть парні числа та обчисліть їх суму.*/
// const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// checkMaxValue(1, 2, 3, 4, 5, 6, 7, 8, 9, 10,1234,45,456,6,7,657,657,56,578,768,68,869,89,879,7,0,98,0)
const evenSum = () => {
    let result = 0;
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    result = numbers.reduce((acc, e) => {
        if (e % 2 === 0) {
            acc += e;
        }
        return acc;
    }, 0);
    return result;
};
/* TASK - 2
 
Створити функцію getItemList(), яка повинна отримувати від користувача рядок з іменами елементів, відокремлених символами ', '.
Елементи в рядку користувача можуть повторюватись.
Рядок користувача потрібно перетворити в масив з унікальними значеннями.
*/
const usersName = 'Nastya, Vova, Valeriy, Dima, Oleg, Sergiy, Valeriy, Nastya';
function getItemList(usersName) {
    let arrayUsers = usersName.split(', ');
    let uniqNames = arrayUsers.filter((item, index) => {
        let indexMainArray = arrayUsers.indexOf(item);
        return indexMainArray === index;
    });
    return uniqNames;
}
const userList = [
    {
        fullName: 'Andy',
        birthDate: '12.10.1994',
        pets: ['cat'],
    },
    {
        fullName: 'Julia',
        birthDate: '21.03.1990',
        pets: ['cat', 'dog'],
    },
    {
        fullName: 'Dima',
        birthDate: '02.12.1992',
        pets: [],
    },
    {
        fullName: 'Vova',
        birthDate: '02.12.2010',
        pets: ['rat', 'dog'],
    },
    {
        fullName: 'Karen',
        birthDate: '22.05.1988',
        pets: [],
    },
];
function showConsoleUsers(users, pet, ageMin) {
    const dateNow = new Date();
    const yearNow = dateNow.getFullYear();
    let selectedUsersSomeAge = users.filter((singleUser) => {
        const userAge = yearNow - new Date(singleUser.birthDate.split(".").reverse().join(".")).getFullYear();
        if (ageMin) {
            if (userAge > ageMin) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return true;
        }
    });
    if (pet === null) {
        let usersWitoutPets = selectedUsersSomeAge.filter((singleUser) => singleUser.pets.length === 0);
        console.log(usersWitoutPets);
    }
    else {
        let petOwners = selectedUsersSomeAge.filter(singleUser => {
            let checkPet = singleUser.pets.some(singlePet => singlePet === pet);
            return checkPet;
        });
        console.log(petOwners);
    }
}
showConsoleUsers(userList, 'cat');
showConsoleUsers(userList, 'dog');
showConsoleUsers(userList, null, 18);
//# sourceMappingURL=index.js.map