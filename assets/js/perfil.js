

let elheaderDiv = document.getElementById("nombre-en-el-perfil");
let micrearNombrePerfil = document.createElement('h1');
    micrearNombrePerfil.className='profile-title';
    micrearNombrePerfil.innerHTML=sessionStorage.getItem('nombre');

elheaderDiv.appendChild(micrearNombrePerfil);


/*
 for(let i = 0; i < sessionStorage.length; i++){
     let divsInformativosPerfil = document.getElementById('perfil-info');
     let textoPerfil = document.createElement('p');

        textoPerfil.textContent= 'nombre: ' + sessionStorage.getItem('nombre');
     //   textoPerfil.textContent= 'ubicacion: ' + sessionStorage.getItem('localizacion');

    divsInformativosPerfil.appendChild(textoPerfil);
 }
 */

 for (const [key, value] of Object.entries(sessionStorage)){
    let divsInformativosPerfil = document.getElementById('perfil-info');
    let textoPerfil = document.createElement('p');

    textoPerfil.textContent= `${key}:   ${value}`;

    divsInformativosPerfil.appendChild(textoPerfil);
 }