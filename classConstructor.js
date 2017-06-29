'use strict';

class Dog {

  constructor() {
    this.sound = 'Woof!';
  }

  talk() {
    console.log(this.sound);
  }

}

const buster = new Dog();
const ginger = new Dog();

buster.talk();
ginger.talk();
