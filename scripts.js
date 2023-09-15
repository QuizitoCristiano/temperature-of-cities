const key = "0296a33de66c6a46993ea0b15490d371";

function colocarNomesNaTela(dados) {
  console.log(dados);

  // Se você deseja a previsão para amanhã, considere o segundo item na lista de previsões (índice 1).

  // const previsaoAmanha = dados.list[1];
  // document.querySelector('.temperaturaAmanha').innerHTML = `Temperatura Amanhã: ${Math.floor(previsaoAmanha.main.temp)} °C`;

  document.querySelector(".cidade").innerHTML = "Tempo em  " + dados.name;

  document.querySelector(".temperatura").innerHTML =
    "Temperatura: " + Math.floor(dados.main.temp) + "°C";

  document.querySelector(".texto-previsao").innerHTML =
    " " + dados.weather[0].description;

  document.querySelector(
    ".temperaturaMinima"
  ).innerHTML = `Temperatura Mínima: ${dados.main.temp_min} °C`;

  document.querySelector(
    ".temperaturaMax"
  ).innerHTML = `Temperatura Máxima: ${dados.main.temp_max} °C`;

  document.querySelector(".Umidade").innerHTML =
    "Umidade: " + dados.main.humidity + "%";

  document.querySelector(
    ".img-previsao"
  ).src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;
}

// Função assíncrona para buscar dados do clima para uma cidade
async function buscarCidade(cidade) {
  const dados = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`
  ).then((resposta) => resposta.json());

  colocarNomesNaTela(dados);
}

async function ForCastNextDays(lat, lon) {
  const dados = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${cidade}&appid=${apiKey}&lang=pt_br&units=metric`

  ).then((resposta) => resposta.json());

  console.log(dados);
}

function criqueiNoBotao() {
  const cidade = document.querySelector(".input-cidade").value;

  // buscarCidade(cidade);

  const previsaoDoTempo = buscarCidade(cidade);

  ForCastNextDays(35, 139);

  return previsaoDoTempo;
}

criqueiNoBotao();

// const key = "0296a33de66c6a46993ea0b15490d371";

// function colocarNomesNaTela(dados) {
//   // Exibe os dados recebidos no console
//   console.log(dados);

//   // Se você deseja a previsão para amanhã, considere o segundo item na lista de previsões (índice 1).
//   const previsaoAmanha = dados.list[1];

//   // Atualiza os elementos HTML com as informações do clima
//   document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name;
//   document.querySelector(".temperatura").innerHTML = "Temperatura: " + Math.floor(dados.main.temp) + "°C";
//   document.querySelector(".texto-previsao").innerHTML = " " + dados.weather[0].description;
//   document.querySelector('.temperaturaMinima').innerHTML = `Temperatura Mínima: ${dados.main.temp_min} °C`;
//   document.querySelector('.temperaturaMax').innerHTML = `Temperatura Máxima: ${dados.main.temp_max} °C`;
//   document.querySelector('.Umidade').innerHTML = "Umidade: " + dados.main.humidity + "%";
//   document.querySelector('.img-previsao').src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;

//   // Exibe a temperatura para amanhã
//   document.querySelector('.temperaturaAmanha').innerHTML = `Temperatura Amanhã: ${Math.floor(previsaoAmanha.main.temp)} °C`;
// }

// // Função assíncrona para buscar dados do clima para uma cidade
// async function buscarCidade(cidade) {
//   const dados = await fetch(
//     `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`
//   ).then((resposta) => resposta.json());

//   // Chama a função para colocar os dados na tela
//   colocarNomesNaTela(dados);
// }

// // Função chamada quando o botão é clicado
// function criqueiNoBotao() {
//   const cidade = document.querySelector(".input-cidade").value;

//   // Chama a função para buscar os dados do clima para a cidade
//   buscarCidade(cidade);
// }

// // Inicia a busca quando o script é carregado
// criqueiNoBotao();
