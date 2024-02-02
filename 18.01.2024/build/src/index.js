"use strict";
// const userName: string = 'fofi' 
// console.log(userName);
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