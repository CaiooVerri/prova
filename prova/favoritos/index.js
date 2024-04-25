function listaMunicipiosFavoritados(){
    favoritos = localStorage.getItem("favoritos")
    favoritosObj = JSON.parse(favoritos)
    arrayMunicipios = favoritosObj.municipio.split(",")
    arrayMunicipios.forEach(e => {
        const listaFavoritos = document.getElementById("lista-favoritos")
        const li = document.createElement('li')
        const h5 = document.createElement('h5')
        h5.textContent = e;
        li.appendChild(h5)
        listaFavoritos.appendChild(li)
    })
}

listaMunicipiosFavoritados()