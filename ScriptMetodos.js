function lineal() {
    //Se mandan a llamar los valores
    let x = parseFloat(document.getElementById("x").value);
    let x0 = parseFloat(document.getElementById("x0").value);
    let x1 = parseFloat(document.getElementById("x1").value);
    let fx0 = parseFloat(document.getElementById("fx0").value);
    let fx1 = parseFloat(document.getElementById("fx1").value);
    //Para poder realizar correctamente el cálculo se dividen
    //en varias operaciones siguiendo la fórmula
    let resta1 = fx1 - fx0;
    let resta2 = x1 - x0;
    let resta3 = x - x0;
    let division = resta1 / resta2;
    resultado = fx0 + division * resta3;
    document.getElementById("fx").value = resultado;

}

function cuadratica() {
    //valores
    let x = parseFloat(document.getElementById("x").value);
    let x0 = parseFloat(document.getElementById("x0").value);
    let x1 = parseFloat(document.getElementById("x1").value);
    let x2 = parseFloat(document.getElementById("x2").value);
    let fx0 = parseFloat(document.getElementById("fx0").value);
    let fx1 = parseFloat(document.getElementById("fx1").value);
    let fx2 = parseFloat(document.getElementById("fx2").value);
    //calculo de b1
    let b0 = fx0;
    //calculo de b1
    let b1 = (fx1 - fx0) / (x1 - x0);
    let man = (fx2 - fx1) / (x2 - x1); //es parte para calcular b2
    //calculo de b2
    let b2 = (man - b1) / (x2 - x0); //ya que igualmente se reutiliza el b1
    let resultado = b0 + b1 * (x - x0) + b2 * (x - x0) * (x - x1); //resultado final

    document.getElementById("fx").value = resultado;

}

function lagrange1() {
    //valores
    let x = parseFloat(document.getElementById("x").value);
    let x0 = parseFloat(document.getElementById("x0").value);
    let x1 = parseFloat(document.getElementById("x1").value);
    let fx0 = parseFloat(document.getElementById("fx0").value);
    let fx1 = parseFloat(document.getElementById("fx1").value);
    //segmentación de fórmula
    let rd1 = ((x - x1) / (x0 - x1)) * fx0;
    let rd2 = ((x - x0) / (x1 - x0) * fx1)
    let resultado = rd1 + rd2;

    document.getElementById("fx").value = resultado;
}

function lagrange2() {
    //valores
    let x = parseFloat(document.getElementById("x").value);
    let x0 = parseFloat(document.getElementById("x0").value);
    let x1 = parseFloat(document.getElementById("x1").value);
    let x2 = parseFloat(document.getElementById("x2").value);
    let fx0 = parseFloat(document.getElementById("fx0").value);
    let fx1 = parseFloat(document.getElementById("fx1").value);
    let fx2 = parseFloat(document.getElementById("fx2").value);
    //segmentación
    let s1 = ((x - x1) / (x0 - x1)) * ((x - x2) / (x0 - x2)) * fx0;
    let s2 = ((x - x0) / (x1 - x0)) * ((x - x2) / (x1 - x2)) * fx1;
    let s3 = ((x - x0) / (x2 - x0)) * ((x - x1) / (x2 - x1)) * fx2;
    //resultado
    let resultado = s1 + s2 + s3;

    document.getElementById("fx").value = resultado;
}

function error() {
    //Se piden los valores
    let aprox = parseFloat(document.getElementById("fx").value);
    let verdadero = parseFloat(document.getElementById("ev").value);
    //Se realiza la validación 
    if (!isNaN(aprox) && !isNaN(verdadero) && aprox != "" && verdadero != "") {
        let et = verdadero - aprox;
        //Se calcula el error verdadero y se usa la función math.abs para aplicar el valor absoluto y que el resultado sea positivo
        let Et = Math.abs((et / verdadero) * 100);
        document.getElementById("error").innerHTML = "El error verdadero es de: " + et + "<br> El error porcentual es de: " + Et.toFixed(6) + "%";
    } else {
        //Lanza un alert si no cumple las condiciones
        alert("Ingresa un número válido o realiza antes la interpolación")
    }
}

function borrarA() {
    document.getElementById("x").value = "";
    document.getElementById("x0").value = "";
    document.getElementById("x1").value = "";
    document.getElementById("fx").value = "";
    document.getElementById("fx0").value = "";
    document.getElementById("fx1").value = "";

}

function borrarB() {
    document.getElementById("x").value = "";
    document.getElementById("x0").value = "";
    document.getElementById("x1").value = "";
    document.getElementById("x2").value = "";
    document.getElementById("fx").value = "";
    document.getElementById("fx0").value = "";
    document.getElementById("fx1").value = "";
    document.getElementById("fx2").value = "";

}

function borrar2() {
    document.getElementById("ev").value = "";
    document.getElementById("error").innerHTML = "";
}