//Module Wrapper Function Ceci est entoure cette class
// function (exports,require,module,__filename,__dirname){})

// Pour démontrer que nous avons accès a filename et dirname
// console.log(
//   ` Ceci est le chemin du directoire : ${__dirname}, ceci est le file name : ${__filename}`
// );

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greeting() {
    console.log(`My name is ${this.name} and I am  ${this.age}`);
  }
}

module.exports = Person;
