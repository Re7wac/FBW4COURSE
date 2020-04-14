import Human from './person.js';

import {
    leHimSayhisname,
    leHirSayhisname
} from './person.js'

let fabian = new Human('Fabian', 24, 'Male')

let marry = new Human('Marry', 22, 'famle')

// console.log(fabian.sayYourName());

console.log(leHimSayhisname(fabian));
console.log(leHirSayhisname(marry));
