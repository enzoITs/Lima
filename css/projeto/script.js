function somar() {
    let n1 = parseFloat(document.getElementById("soma1").value);
    let n2 = parseFloat(document.getElementById("soma2").value);

    document.getElementById("resultSoma").innerText = n1 + n2;
}

function subtrair() {
    let n1 = parseFloat(document.getElementById("sub1").value);
    let n2 = parseFloat(document.getElementById("sub2").value);

    document.getElementById("resultSub").innerText = n1 - n2;
    }

function multiplicar() {
    let n1 = parseFloat(document.getElementById("mult1").value);
    let n2 = parseFloat(document.getElementById("mult2").value);

    document.getElementById("resultMult").innerText = n1 * n2;
}

function areaTriangulo() {
    let base = parseFloat(document.getElementById("triBase").value);
    let altura = parseFloat(document.getElementById("triAltura").value);

    let area = (base * altura) / 2;

    document.getElementById("resultTri").innerText = area;
}

function areaQuadrado() {
    let lado = parseFloat(document.getElementById('lado').value);
    let resultado = lado**2

    document.getElementById('resultadoQuadrado').innerText = resultado;
}

function areaTrapezio() {
    let B = parseFloat(document.getElementById("trapBaseMaior").value);
    let b = parseFloat(document.getElementById("trapBaseMenor").value);
    let h = parseFloat(document.getElementById("trapAltura").value);

    let area = ((B + b) * h) / 2;

    document.getElementById("resultTrap").innerText = area;
}

function areaCirculo() {
    let r = parseFloat(document.getElementById("raio").value);

    let area = Math.PI * (r ** 2);

    document.getElementById("resultCirculo").innerText = area.toFixed(2);
}

function areaLosango() {
    let D = parseFloat(document.getElementById("diagMaior").value);
    let d = parseFloat(document.getElementById("diagMenor").value);

    let area = (D * d) / 2;

    document.getElementById("resultLosango").innerText = area;
}

function areaSetorCircular() {
    let num1 = parseFloat(document.getElementById('1').value); // Ângulo (α)
    let num2 = parseFloat(document.getElementById('2').value); // Raio (r)
    let resultado = (num1 * 360) * 3.14 * (num2 ** 2);
    document.getElementById('resultadoSetor').innerText = resultado;
}

function areaCoroaCircular() {
    let num1 = parseFloat(document.getElementById('3').value);
    let num2 = parseFloat(document.getElementById('4').value); 
    let resultado = 3.14 * ((num1 ** 2) - (num2 ** 2));
    document.getElementById('resultadoCoroa').innerText = resultado;
}

function areaElipse() {
    let num1 = parseFloat(document.getElementById('5').value); 
    let num2 = parseFloat(document.getElementById('6').value); 
    let resultado = 3.14 * num1 * num2;
    document.getElementById('resultadoElipse').innerText = resultado;
}

function areaParalelogramo() {
    let num1 = parseFloat(document.getElementById('7').value);
    let num2 = parseFloat(document.getElementById('8').value);
    let resultado = num1 * num2;
    document.getElementById('resultadoParalelogramo').innerText = resultado;
}

function areaPoligonoRegular() {
    let num1 = parseFloat(document.getElementById('9').value);
    let num2 = parseFloat(document.getElementById('10').value);
    let resultado = num1 * num2;
    document.getElementById('resultadoPoligono').innerText = resultado;
}

function areaCirculo() {
    let num1 = parseFloat(document.getElementById('circulo').value);
    let resultado = 3.14 * (num1 ** 2);
    document.getElementById('resultadoCirculo').innerText = resultado;
}