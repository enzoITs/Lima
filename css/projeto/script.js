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

function areaSetorCircular() {
    let num1 = parseFloat(document.getElementById('1').value); // Ângulo (α)
    let num2 = parseFloat(document.getElementById('2').value); // Raio (r)
    let resultado = (num1 / 360) * 3.14 * (num2 ** 2);
    document.getElementById('resultado-triangulo').innerText = resultado;
}

function areaCoroaCircular() {
    let num1 = parseFloat(document.getElementById('1').value); // Raio maior (R)
    let num2 = parseFloat(document.getElementById('2').value); // Raio menor interno (r)
    let resultado = 3.14 * ((num1 ** 2) - (num2 ** 2));
    document.getElementById('resultado-triangulo').innerText = resultado;
}

function areaElipse() {
    let num1 = parseFloat(document.getElementById('1').value); // Semieixo maior (a)
    let num2 = parseFloat(document.getElementById('2').value); // Semieixo menor (b)
    let resultado = 3.14 * num1 * num2;
    document.getElementById('resultado-triangulo').innerText = resultado;
}

function areaParalelogramo() {
    let num1 = parseFloat(document.getElementById('1').value); // Base (b)
    let num2 = parseFloat(document.getElementById('2').value); // Altura perpendicular (h)
    let resultado = num1 * num2;
    document.getElementById('resultado-triangulo').innerText = resultado;
}

function areaPoligonoRegular() {
    let num1 = parseFloat(document.getElementById('1').value); // Semiperímetro (p)
    let num2 = parseFloat(document.getElementById('2').value); // Apótema (a)
    let resultado = num1 * num2;
    document.getElementById('resultado-triangulo').innerText = resultado;
}

function areaCirculo() {
    let num1 = parseFloat(document.getElementById('1').value);
    let resultado = 3.14 * (num1 ** 2);
    document.getElementById('resultado-triangulo').innerText = resultado;
}
