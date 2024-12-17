function calcIMC() {
    let peso =  parseFloat(document.getElementById("peso").value);
    let altura =  parseFloat(document.getElementById("altura").value);

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert("Digite numeros validos!")
        return;
    }
    const resultado = peso / (altura * altura);
    let classificação = ""
    if (resultado < 16){
        classificação = "Magreza excessiva"
    } else if (resultado > 16 && resultado < 17) {
        classificação = "Magreza moderada"
    } else if (resultado > 17 && resultado < 18.5) {
        classificação = "Magreza leve"
    } else if (resultado > 18.5 && resultado < 24.9) {
        classificação = "Peso normal"
    } else if (resultado > 24.9 && resultado < 29.9) {
        classificação = "Sobrepeso"
    } else if (resultado > 29.9 && resultado < 34.9) {
        classificação = "Obesidade moderada"
    } else if (resultado > 34.9 && resultado < 39.9) {
        classificação = "Obesidade grau 2"
    } else {
        classificação = "Obesidade morbida"
    }
    document.getElementById("resultado").innerHTML = resultado.toFixed(2)
    document.getElementById("classificação").innerHTML = classificação;
}