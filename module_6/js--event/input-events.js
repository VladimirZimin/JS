const input = document.querySelector('.input-events-example > input');
const output = document.querySelector('.input-events-example > .output');

input.addEventListener('input', handleInputChange);

input.addEventListener('focus', e => {
  console.log('focus');
  console.log(e);
});

input.addEventListener('blur', e => {
  console.log('blur');
  console.log(e);
});

function handleInputChange(event) {
  output.textContent = event.currentTarget.value;
  console.log(event.currentTarget.value);
  console.log(event.currentTarget);
}
