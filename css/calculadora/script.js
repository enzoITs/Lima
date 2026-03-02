window.alert("Bem Vindo a Calculadora");
function somar() {
    let num1 = parseFloat(document.getElementById("1").value);
    let num2 = parseFloat(document.getElementById("2").value);
    let resultado = num1 + num2;
    document.getElementById('result').innerText = resultado;
}

function menos() {
    let num1 = parseFloat(document.getElementById("1").value);
    let num2 = parseFloat(document.getElementById("2").value);
    // if (num1 < num2) {
    //     window.alert("O primeiro número deve ser maior que o segundo para realizar a subtração.");
    //     return;
    // }
    let resultado = num1 - num2;
    document.getElementById('result').innerText = resultado;
}

function divisao() {
    let num1 = parseFloat(document.getElementById("1").value);
    let num2 = parseFloat(document.getElementById("2").value);
    if (num2 === 0) {
        window.alert("Não é possível dividir por zero.");
        return;
    }
    let resultado = num1 / num2;
    document.getElementById('result').innerText = resultado;
}

function multiplicacao() {
    let num1 = parseFloat(document.getElementById("1").value);
    let num2 = parseFloat(document.getElementById("2").value);
    let resultado = num1 * num2;
    document.getElementById('result').innerText = resultado;
}