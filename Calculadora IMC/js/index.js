    document.getElementById('imcForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);
    const imc = peso / (altura * altura);
    const resultado = document.getElementById('resultado');
    
    let categoria = '';
    if (imc < 18.5) {
        categoria = 'Bajo peso';
    } else if (imc >= 18.5 && imc <= 24.9) {
        categoria = 'Normal';
    } else if (imc >= 25 && imc <= 29.9) {
        categoria = 'Sobrepeso';
    } else {
        categoria = 'Obesidad';
    }

    resultado.textContent = `El índice de masa corporal (IMC) para una persona de peso ${peso} kg y altura ${altura} m es de ${imc.toFixed(2)}, categorizado como ${categoria}.`;
});