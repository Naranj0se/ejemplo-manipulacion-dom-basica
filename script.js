const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.getElementsByClassName('parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log(input.value);
console.log({h1, p, parrafito, pid, input}); 

h1.innerHTML = 'patito';
h1.innerText = 'Patito';

// console.log(h1.getAttribute('class'));
// h1.setAttribute('class','rojo');

h1.classList.add('rojo');
h1.classList.remove('verde');

input.value = '456';

const img = document.createElement('img');
img.setAttribute('src', 'https://images.pexels.com/photos/15386314/pexels-photo-15386314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');

console.log(img);

// pid.innerHTML= '';

pid.append(img);

