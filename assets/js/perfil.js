//let modificarNombre = document.getElementById('modificar-nombre');
let modificarEdad = document.getElementById('modificar-edad');
let modificarTitulo = document.getElementById('modificar-titulo');
let modificarDescripcion = document.getElementById('modificar-descripcion');
let modificarTelefono = document.getElementById('modificar-telefono');
let modificarLocalizacion = document.getElementById('modificar-localizacion');
let modificarDisponibilidad = document.getElementById('modificar-disponibilidad');
let modificarServicios = document.getElementById('modificar-servicios');
let modificarTarifas = document.getElementById('modificar-tarifas');
let modificarPago = document.getElementById('modificar-pago');

const proxyUrl = 'https://guarded-ridge-41595.herokuapp.com/';

const urlPatch = `http://localhost:3000/subir-informacion/${sessionStorage.userId}`;


const botonModificar = document.getElementById('btn-modificarPerfil');

const modificarPerfil = (e) => {
   e.preventDefault();
   const data = { 
     // nombre: modificarNombre.value, 
      edad: modificarEdad.value,
      titulo: modificarTitulo.value,
      descripcion: modificarDescripcion.value,
      telefono: modificarTelefono.value,
      localizacion: modificarLocalizacion.value,
      tags: modificarServicios.value,
      tarifas: modificarTarifas.value,
      metodospago: modificarPago.value 
  }
  const options = {
      method: 'PATCH',
      headers: {
         Accept: 'application/json',
          'Content-Type': 'application/json'
  },
      body: JSON.stringify(data)
  };
  fetch(proxyUrl + urlPatch, options)
  .then(data => {
   return data.json()
      }).then(user => {
         console.log(user);
  })

}

botonModificar.addEventListener('click', modificarPerfil);





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
 

 for (const [key, value] of Object.entries(sessionStorage)){
    let divsInformativosPerfil = document.getElementById('perfil-info');
    let textoPerfil = document.createElement('p');

    textoPerfil.textContent= `${key}:   ${value}`;

    divsInformativosPerfil.appendChild(textoPerfil);
 }*/