const h1 = document.querySelector('h1');
const input1 = document.getElementById('calculo1');
const input2 = document.getElementById('calculo2');
const btn = document.querySelector('#btnCalcular');
const resultado = document.querySelector('.resultado');
const form = document.querySelector('#formulario');
const hoverxd = document.querySelector('#hover');

// form.addEventListener('submit', btnOnClick);

// function btnOnClick(){
//     event.preventDefault(); 
//     const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
//      resultado.innerHTML = `Resultado: ${sumaInputs}`;

//      resultado.append(sumaInputs);

// };

btn.addEventListener('click', btnOnClick);

function btnOnClick(){
    const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
     resultado.innerHTML = `Resultado: ${sumaInputs}`;

     resultado.append(sumaInputs);

};

hoverxd.addEventListener('mouseover', cambiaHover);

function cambiaHover(){
    hoverxd.innerHTML = 'Hola MOOOUSEEE!';
};