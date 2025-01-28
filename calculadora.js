document.getElementById('calcular').addEventListener('click', function() {
    const distancia = parseFloat(document.getElementById('distancia').value);
    const consumo = parseFloat(document.getElementById('consumo').value);
    const preco = parseFloat(document.getElementById('preco').value);
    const resultado = document.getElementById('resultado');

    if (!isNaN(distancia) && !isNaN(consumo) && !isNaN(preco) && distancia > 0 && consumo > 0 && preco > 0) {
        const litros = (distancia / consumo).toFixed(2);
        const custo = (litros * preco).toFixed(2);

        resultado.textContent = `Você precisará de ${litros} litros de combustível, o que custará R$ ${custo}.`;
    } else {
        resultado.textContent = 'Preencha todos os campos corretamente!';
    }
});
