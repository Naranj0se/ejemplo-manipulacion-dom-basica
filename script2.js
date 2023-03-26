const h1 = document.querySelector('h1');
const input1 = document.getElementById('calculo1');
const input2 = document.getElementById('calculo2');
const btn = document.querySelector('#btnCalcular');
const resultado = document.querySelector('.resultado');


function btnOnClick(){
    const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
    resultado.innerHTML = `Resultado: ${sumaInputs}`;

    // resultado.append(sumaInputs);

};

