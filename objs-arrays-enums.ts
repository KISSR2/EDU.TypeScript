
/*const person : {
    name: string;
    age: number;
    hobbies: string[];
    role: [number,string];
 } = {
    name: 'Robert',
    age: 23,
    hobbies: ['Sports', 'Gaming'],
    role: [2, 'author']
};*/

//const ADMIN = 0;
//const READ_ONLY = 1;
//const AUTHOR = 2;

enum ROLE { ADMIN = 'ADMIN', READ_ONLY = 100 , AUTHOR = 'AUTHOR'}

const person = {
    name: 'Robert',
    age: 23,
    hobbies: ['Sports', 'Gaming'],
    role: ROLE.ADMIN
};


//person.role.push('admin');
//person.role[1] = 10;
//person.role = [0, 'admin','user'];

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for(const hobbies of person.hobbies){
    console.log(hobbies.toUpperCase());
}

if(person.role === ROLE.AUTHOR){
    console.log("ELŐADÓ");
}