 Animal = {
     name: 'dog',
     legs: '4',
     legsCount: function () {
         return `This animal ${this.name} has ${this.legs} `
     }
 }
 console.log(Animal.legsCount())