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