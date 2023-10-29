const coordenadasEstadosBrasil = {
  Acre: [-9.0479, -70.5265],
  Alagoas: [-9.5713, -36.7819],
  Amapá: [0.902, -52.0038],
  Amazonas: [-3.4168, -65.8561],
  Bahia: [-12.9718, -38.5011],
  Ceará: [-3.7172, -38.5433],
  "Distrito Federal": [-15.8267, -47.9218],
  "Espírito Santo": [-20.3155, -40.3128],
  Goiás: [-16.6864, -49.2643],
  Maranhão: [-2.5297, -44.3043],
  "Mato Grosso": [-15.5989, -56.0949],
  "Mato Grosso do Sul": [-20.4486, -54.6296],
  "Minas Gerais": [-19.9167, -43.9345],
  Pará: [-1.455, -48.5037],
  Paraíba: [-7.1219, -34.8829],
  Paraná: [-25.4284, -49.2733],
  Pernambuco: [-8.0476, -34.877],
  Piauí: [-5.0919, -42.8034],
  "Rio de Janeiro": [-22.9068, -43.1729],
  "Rio Grande do Norte": [-5.7945, -35.211],
  "Rio Grande do Sul": [-30.0346, -51.2177],
  Rondônia: [-8.7608, -63.9008],
  Roraima: [2.8199, -60.6733],
  "Santa Catarina": [-27.5954, -48.548],
  "São Paulo": [-23.5505, -46.6333],
  Sergipe: [-10.9472, -37.0731],
  Tocantins: [-10.1753, -48.2982],
};
const zonaSP = ["Socorro", "Serra Negra", "Amparo"];

const zonaSPminuscula = zonaSP.map((zona) => zona.toLowerCase());
console.log(zonaSPminuscula);
var map = L.map("map").setView([-23.5505, -46.6333], 5); // Coordenadas para centralizar em São Paulo
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);
//marker SP
{
  let markerSP = L.marker([-23.6814347, -46.9249413]).addTo(map);
  markerSP.bindPopup(`
  <h1>Unidade: TSE001 - SP</h1>
  <p>Permissão para atuar no território: todas unidades, franquias e canais - desde que estejam abaixo da unidade RJ.</p>
  <p>Canais: somente os canais vinculados à unidade RJ possuem permissão de atuar no território.</p>
  <p>Exceção: TSE018 - TSM pode invadir o território (se aplica para os canais tambem) da TOTVS SP para a venda de Intera.</p>
  `);
  markerSP._icon.classList.add("hueRosa");
}
//marker MG
{
  let markerMG = L.marker([-18.460567, -44.013941]).addTo(map);
  markerMG.bindPopup(`
    <h1>Unidade: TSE004 - MG</h1>
    <p>Permissão para atuar no território: todas unidades, franquias e canais - desde que estejam abaixo da unidade RJ.</p>
    <p>Canais: somente os canais vinculados à unidade RJ possuem permissão de atuar no território.</p>
    `);
    markerMG._icon.classList.add("hueVerde");
}
{
  let markerPE = L.marker([-8.061638, -34.899566]).addTo(map);
  markerPE.bindPopup(`
    <h1>Unidade: TNE004 - RECIFE</h1>
    <p>Permissão para atuar no território: todas unidades, franquias e canais - desde que estejam abaixo da unidade RJ.</p>
    <p>Canais: somente os canais vinculados à unidade RJ possuem permissão de atuar no território.</p>
    `);
    markerPE._icon.classList.add("hueRoxo");
}
