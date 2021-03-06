let modificarNombre = document.getElementById('modificar-nombre');
let modificarEdad = document.getElementById('modificar-edad');
let modificarTitulo = document.getElementById('modificar-titulo');
let modificarDescripcion = document.getElementById('modificar-descripcion');
let modificarTelefono = document.getElementById('modificar-telefono');
let modificarLocalizacion = document.getElementById('modificar-localizacion');
let modificarDisponibilidad = document.getElementById('modificar-disponibilidad');
let modificarServicios = document.getElementById('modificar-servicios');
let modificarTarifas = document.getElementById('modificar-tarifas');
let modificarPago = document.getElementById('modificar-pago');


const botonModificar = document.getElementById('btn-modificarPerfil');
const botonCerrarSesion = document.getElementById('boton-cerrar-sesion');
const botonBorrarPerfil = document.querySelector('#btn-borrar-perfil');
const siPerfil = document.querySelector('#borrar-perfil-si');
const noPerfil = document.querySelector('#borrar-perfil-no');

const modificarPerfil = (e) => {
   e.preventDefault();
   const data = { 
      nombre: modificarNombre.value, 
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
  const urlPatch = `https://pure-lake-94197.herokuapp.com/subir-informacion/${sessionStorage.userId}`;
  fetch(urlPatch, options)
  .then(data => {
   return data.json()
      }).then(user => {
         console.log(user);
  })

}

const cargandoCampos = () =>{

   modificarNombre.value = sessionStorage.nombre;
    modificarEdad.value = sessionStorage.edad;
    modificarTitulo.value = sessionStorage.titulo;
    modificarDescripcion.value = sessionStorage.descripcion;
    modificarTelefono.value = sessionStorage.telefono;
    modificarLocalizacion.value = sessionStorage.localizacion;
    modificarDisponibilidad.value = sessionStorage.disponibilidad;
    modificarServicios.value = sessionStorage.tags;
    modificarTarifas.value = sessionStorage.tarifas;
    modificarPago.value = sessionStorage.metodospago;

    $('.input100').each(function(){
      $(this).on('blur', function(){
          if($(this).val().trim() != "") {
              $(this).addClass('has-val');
          }
          else {
              $(this).removeClass('has-val');
          }
      })    
   })

}

const cerrarSesion = () =>{
   sessionStorage.clear();
   localStorage.clear();
}

const abrirConfirmacion = (e) => {
    e.preventDefault();
    let confirmar = document.querySelector('#confirmar-eliminar-perfil');
    confirmar.style.display='block';
}

const borrarPerfilSi = (e) => {
    e.preventDefault();
    console.log('se va a borrar el perfil');
    const options = {
        method: 'delete',
        headers: {
           Accept: 'application/json',
            'Content-Type': 'application/json'
    },

    };
    fetch(`https://pure-lake-94197.herokuapp.com/borrar-perfil/${sessionStorage.userId}`, options)
    .then(data => {
     return data.json()
        }).then(user => {
           console.log(user);
           sessionStorage.clear();
           window.open("index.html", '_self' );
    })

  }
    


const borrarPerfilNo = (e) => {
    e.preventDefault();
    let confirmar = document.querySelector('#confirmar-eliminar-perfil');
    confirmar.style.display='none';
}

botonModificar.addEventListener('click', modificarPerfil);

botonCerrarSesion.addEventListener('click', cerrarSesion);

botonBorrarPerfil.addEventListener('click', abrirConfirmacion);

siPerfil.addEventListener('click', borrarPerfilSi);

noPerfil.addEventListener('click', borrarPerfilNo);

// ------------ Cargando la informacion de los campos
window.addEventListener('load', cargandoCampos());

