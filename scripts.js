
const key = "0296a33de66c6a46993ea0b15490d371";

function colocarNomesNaTela(dados) {
  console.log(dados);
  document.querySelector(".cidade").innerHTML = "Tempo em  " + dados.name;

  // Remova as aspas ao redor do valor da temperatura e adicione °C
  
  document.querySelector(".temperatura").innerHTML =
    "Temperatura: " + Math.floor(dados.main.temp) + "°C";

  document.querySelector(".texto-previsao").innerHTML =
    " " + dados.weather[0].description;

  document.querySelector('.Umidade').innerHTML = "Umidade: " + dados.main.humidity + "%";

  document.querySelector('.img-previsao').src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;
}

async function buscarCidade(cidade) {
  const dados = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`
  ).then((resposta) => resposta.json());

  colocarNomesNaTela(dados);
}

function criqueiNoBotao() {
  const cidade = document.querySelector(".input-cidade").value;

  buscarCidade(cidade);
}

criqueiNoBotao();
