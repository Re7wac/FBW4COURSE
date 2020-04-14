class Person {
    constructor(
        name,
        age,
        gender
    ) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    sayYourName() {

        return `My Name is ${this.name}`;

    }
}

function leHimSayhisname(human) {
     return human.sayYourName()
}

function leHirSayhisname(human) {
    return human.age
}


export {
    leHimSayhisname,
    leHirSayhisname
}
export default Person;