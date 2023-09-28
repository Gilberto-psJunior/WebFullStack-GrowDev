const form = document.querySelector('form');
const submit = document.querySelector('submit');

form.addEventListener('submit',(e) => {
    e.preventDefault();
const name = form.name.value;
const address =form.address.value
const city = form.city.value
const state = form.state.value


});
console.log(name, address, city, state)