// Задание 1
// Объяви две переменные хранящие название и цену товара: name и price
// Присвой переменным следующие характеристики товара (сразу при объявлении)
// название: Генератор защитного поля
// цена: 1000
// Используя шаблонную строку выведи в консоль информацию о товаре, получится: 'Выбран «Генератор защитного поля», цена за штуку 1000 кредитов'.
// Присвой товару новую цену - 2000
// Используя шаблонную строку выведи в консоль информацию о товаре, получится: 'Выбран «Генератор защитного поля», цена за штуку 2000 кредитов'.

'use strict';

const name = 'Генератор защитного поля';
let price = 1000;
let summary = `Выбран \"${name}\", цена за штуку ${price} кредитов.`;

console.log(summary);

price = 2000;

console.log(summary);

/*
1. если значение перпеменной не меняется - то обязательно const (стр 14)
не совсем правильное решение - 2 раза выдаёт:
* Выбран "Генератор защитного поля", цена за штуку 1000 кредитов.
чтобы сиправить - не создавай константу а просто в console.log пиши шаблонную строку;

всегда помни что код читается сверху вниз.
в данном  случае ты выводишь с консоль неизмененную строку 14. хотя цена цже другая.

*
* */