function somar() {
    let num1 = parseFloat(document.getElementById('1').value);
    let num2 = parseFloat(document.getElementById('2').value);
    document.getElementById('result').innerText = num1 + num2;
}

function subtrair() {
    let num1 = parseFloat(document.getElementById('1').value);
    let num2 = parseFloat(document.getElementById('2').value);
    let resultado = num1 - num2;
    document.getElementById('result1').innerText = resultado;
}

function multiplicar() {
    let num1 = parseFloat(document.getElementById('1').value)
    let num2 = parseFloat(document.getElementById('2').value)
    let resultado = num1 * num2;
    document.getElementById('result2').innerText = num1 * num2;
}

function areaTriangulo() {
    let num1 = parseFloat(document.getElementById('1').value);
    let num2 = parseFloat(document.getElementById('2').value);
    let resultado = (num1 * num2) / 2;
    document.getElementById('resultado-triangulo').innerText = resultado;
}

function areaQuadrado() {
    let num1 = parseFloat(document.getElementById('1').value);
    let resultado = num1 * num1;
    document.getElementById('resultado-triangulo').innerText = resultado;
}

function areaRetangulo() {
    let num1 = parseFloat(document.getElementById('1').value);
    let num2 = parseFloat(document.getElementById('2').value);
    let resultado = (num1 * num2);
    document.getElementById('resultado-triangulo').innerText = resultado;    
}

function areaTrapezio() {
    let num1 = parseFloat(document.getElementById('1').value)
    let num2 = parseFloat(document.getElementById('2').value);
    let num3 = parseFloat(document.getElementById('3').value);
    let resultado = [(num1 + num2) * num3] / 2;
    document.getElementById('resultado-triangulo').innerText = resultado;
}

function areaLosango() {
    let num1 = parseFloat(document.getElementById('1').value);
    let num2 = parseFloat(document.getElementById('2').value);
    let resultado = (num1 * num2) / 2;
    document.getElementById('resultado-triangulo').innerText = resultado;
}

function areaCirculo() {
    let num1 = parseFloat(document.getElementById('1').value);
    let resultado = (3,14 * num1**2);
    document.getElementById('resultado-triangulo').innerText = resultado;
}

