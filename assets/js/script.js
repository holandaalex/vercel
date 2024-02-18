// Obtém referências para os elementos do DOM que mostram as horas, minutos e segundos
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

// Define uma função para atualizar o relógio a cada segundo usando setInterval
const relogio = setInterval(function time() {
    // Obtém a data e hora atual
    let dateToday = new Date();
    // Extrai as horas, minutos e segundos da data atual
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    // Formata os valores para terem sempre dois dígitos (com zero à esquerda se necessário)
    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (s < 10) s = '0' + s;

    // Atualiza o conteúdo dos elementos do DOM com as horas, minutos e segundos formatados
    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;
})


    


// Prof. Alexsander Barreto - alexholanda.com.br