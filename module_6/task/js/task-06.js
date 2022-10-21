/**
 Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.

 - Сколько символов должно быть в инпуте, указывается в его атрибуте data-length
 - Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
 - Для добавления стилей, используй CSS-классы valid и invalid
 */

const dataLength = 6;
const validatioInput = document.querySelector('#validation-input');

//validatioInput.addEventListener('input', handleInput);
//validatioInput.addEventListener('focus', handleInput);
validatioInput.addEventListener('blur', handleInput);

function handleInput(e) {
  const valueLength = (validatioInput.textContent = e.currentTarget.value);

  if (valueLength.length >= dataLength) {
    validatioInput.classList.remove('invalid');
    validatioInput.classList.add('valid');
  } else {
    validatioInput.classList.remove('valid');
    validatioInput.classList.add('invalid');
  }
}
