'use strict';
/**
 *
 * this
 *
 */

/*
 * Упражнение 1
 */

const fn = function () {
  console.log('fn -> this', this);
};

fn(); // Window || undefined

/*
 * Упражнение 2
 */

const book = {
  title: 'React for beginners',
  showThis() {
    console.log('showThis -> this', this);
  },
  showTitle() {
    console.log('showTitle -> this.title', this.title);
  },
};

book.showThis(); // title: 'React for beginners', showThis: ƒ, showTitle: ƒ

const outerShowThis = book.showThis;
outerShowThis(); // Window || undefined

const outerShowTitle = book.showTitle;
outerShowTitle(); // undefined / error

/*
 * Упражнение 3
 */

const makeChangeColor1 = function () {
  const changeColor = function (color) {
    console.log('changeColor -> this', this);
    this.color = color;
  };

  changeColor(); // Window || undefined

  const sweater = {
    color: 'teal',
  };

  sweater.updateColor = changeColor;

  sweater.updateColor('red'); // color: 'teal', updateColor: ƒ

  return sweater.updateColor;
};

const swapColor = makeChangeColor1();

swapColor('blue'); // Window || undefined

/*
 * Упражнение 4
 */

const makeChangeColor = function () {
  const changeColor = function (color) {
    console.log('changeColor -> this', this);
  };

  return changeColor;
};

const updateColor = makeChangeColor();
updateColor('yellow'); // Window || undefined

const hat = {
  color: 'blue',
  updateColor: updateColor,
};

hat.updateColor('orange'); // color: 'blue', updateColor: ƒ

/*
 * Упражнение 5
 */

const counter = {
  value: 0,
  increment(value) {
    console.log('increment -> this', this);
    return (this.value += value);
  },
  decrement(value) {
    console.log('decrement -> this', this);
    return (this.value -= value);
  },
};

const updateCounter = function (value, operation) {
  counter.operation(value);
};

counter.increment(10); // value: 12, increment: ƒ, decrement: ƒ
counter.decrement(5); // value: 12, increment: ƒ, decrement: ƒ

updateCounter(10, counter.increment); // Window || undefined
updateCounter(5, counter.decrement); // Window || undefined
