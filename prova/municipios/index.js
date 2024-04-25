function fetchApi(IdEstado){
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${idEstado}/municipios`)
    .then((fetchData) => {
        return fetchData.json()
    })
  .then((jsonData) => 
    jsonData.forEach(e => {
        insereDataList(e.nome)
    })
    )
  .catch((error) => console.error(error))
}

function insereDataList(nomeMunicipio){
    const listaMunicipios = document.getElementById("lista-municipios")
    const li = document.createElement('li')
    const button = document.createElement('button')
    button.addEventListener("click", (event) => {
        insereLocalStorage(nomeMunicipio)
    });
    const h5 = document.createElement('h5')
    h5.textContent = nomeMunicipio
    li.appendChild(h5)
    li.appendChild(button)
    listaMunicipios.appendChild(li)
}

function insereLocalStorage(nomeMunicipio){
    favoritos = localStorage.getItem("favoritos")
    favoritosObj = JSON.parse(favoritos)
    favoritosObj.municipio += (favoritosObj.municipio != "" ? ","+nomeMunicipio : nomeMunicipio)
    localStorage.setItem("favoritos",JSON.stringify(favoritosObj))
}

const urlSearchParams = new URLSearchParams(location.search)
nomeEstado = urlSearchParams.get('uf')
idEstado = urlSearchParams.get('id')
const h2 = document.createElement('h2')
h2.textContent = `Municípios de ${nomeEstado}`
console.log(idEstado)
document.getElementById("nomePagina").appendChild(h2)
fetchApi(idEstado)