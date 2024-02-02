import {User} from './types'

const T:User = {
    name: 'Gogi',
    adress: 20,
    age: 22,
}

// console.log(T);

// console.log(T.name, T.age);

function selectUser(user: User):void {
    if(user.adress > 18){
        console.log(user);
    }
} 

selectUser(T)