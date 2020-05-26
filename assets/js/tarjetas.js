//------------------------------ Estado en el que se va a guardar la informacion de cada persona y valor del buscador

const state ={
    searchField: '',
     
}


// -------------------- Funciones

// Crear tarjetas
let resultado = document.getElementById('id-tarjetas');

const crearTarjetas = (e) => {
    for(let i = 0; i<state.nuevoEstadoTarjetas.length; i++){
        let div2 = document.createElement('div');
            div2.className="item-wr";
            

        let div3 = document.createElement('div');
            div3.className="model-info";
            div3.id=e[i].id;
            
        let pTitulo = document.createElement('p');
            pTitulo.className='title';
            pTitulo.textContent= e[i].nombre;
            

        let pEdad = document.createElement('p');
            pEdad.textContent = ('Edad: ');

        let pDesc = document.createElement('p');
            pDesc.textContent = ('Ubicación: ');

        let pTelefono = document.createElement('p');
            pTelefono.textContent = ('Telefono: ');

        let pEdadSpan = document.createElement('span');
            pEdadSpan.textContent = e[i].edad;

        let pDescSpan = document.createElement('span');
            pDescSpan.textContent = e[i].localizacion;

        let pTelefonoSpan = document.createElement('span');
            pTelefonoSpan.textContent = e[i].telefono;

        let img = document.createElement('img');
            img.src=e[i].fotoperfil;
            img.alt="best-image";
            img.className="model-item";

        let a = document.createElement('a');
            a.target="_blank";
          //  a.href=`perfil.html`;
            a.style=`background-image: url(${e[i].fotoperfil}) `;
            a.id='modalBtn';
            a.className='model-item';



        pEdad.appendChild(pEdadSpan);
        pDesc.appendChild(pDescSpan);
        pTelefono.appendChild(pTelefonoSpan);

        

        div3.appendChild(pEdad);
        div3.appendChild(pDesc);
        div3.appendChild(pTelefono);
        a.appendChild(pTitulo);
         a.appendChild(div3);
        div2.appendChild(a);
        resultado.appendChild(div2);

        
    }

}

const openModal = (e) => {

    removeElementsByClass('item-wr slick-slide slick-current slick-active');

     modal.style.display = 'block';

    let slider = document.getElementById('profile-slider');

    let modalNombre = document.getElementById('nombre-modal');
    let modalImage = document.getElementsByClassName('modal-image-profile')[0];
    let modalTitulo = document.getElementById('titulo-modal');
    let modalTelefono = document.getElementById('telefono-modal');
    let modalDisponibilidad = document.getElementById('disponibilidad-modal');
    let modalDescripcion = document.getElementById('descripcion-modal');
    let modalServicios = document.getElementById('servicios-modal');
    let modalTarifas = document.getElementById('tarifas-modal');
    let modalMetodospago = document.getElementById('metodospago-modal');
    let modalUbicacion = document.getElementById('ubicacion-modal');

    for(let i = 0; i < state.nuevoEstadoTarjetas.length; i++){
        if(state.nuevoEstadoTarjetas[i].id == e){
                modalNombre.innerHTML = state.nuevoEstadoTarjetas[i].nombre;
                modalImage.src= state.nuevoEstadoTarjetas[i].fotoperfil;
                modalTitulo.innerHTML = state.nuevoEstadoTarjetas[i].titulo;
                modalTelefono.innerHTML ='Telefono: '  + state.nuevoEstadoTarjetas[i].telefono;
                modalDisponibilidad.innerHTML ='Disponibilidad: ' + state.nuevoEstadoTarjetas[i].disponibilidad;
                modalDescripcion.innerHTML = state.nuevoEstadoTarjetas[i].descripcion;
                modalServicios.innerHTML ='Servicios: ' + state.nuevoEstadoTarjetas[i].tags;
                modalTarifas.innerHTML ='Tarifas: ' + state.nuevoEstadoTarjetas[i].tarifas;
                modalMetodospago.innerHTML ='Metodos de pago: ' + state.nuevoEstadoTarjetas[i].metodospago;
                modalUbicacion.innerHTML ='Ubicacion: ' + state.nuevoEstadoTarjetas[i].localizacion;

            let galeriaDiv1Padre = document.createElement('div');
                galeriaDiv1Padre.className='item-wr slick-slide slick-current slick-active';
                galeriaDiv1Padre.role='option';
                galeriaDiv1Padre.style='width: 147px';

            let galeriaDiv2Padre = document.createElement('div');
                galeriaDiv2Padre.className='item-wr slick-slide slick-current slick-active';
                galeriaDiv2Padre.role='option';
                galeriaDiv2Padre.style='width: 147px';
        
            let galeriaDiv1Hijo = document.createElement('div');
                galeriaDiv1Hijo.className ='profile-thumbnails';
                galeriaDiv1Hijo.style=`background-image: url(${state.galeriaImagenes[i].foto1})`;

            let galeriaDiv2Hijo = document.createElement('div');
                galeriaDiv2Hijo.className ='profile-thumbnails';
                
                galeriaDiv2Hijo.style=`background-image: url(${state.galeriaImagenes[i].foto2})`;
        
            
            galeriaDiv2Padre.appendChild(galeriaDiv2Hijo);

            galeriaDiv1Padre.appendChild(galeriaDiv1Hijo);
            slider.appendChild(galeriaDiv1Padre);
            slider.appendChild(galeriaDiv2Padre);

        }
    }

    



}

const closeModal = () => {
    modal.style.display = 'none';
}

const clickOutside = (e) => {
    if(e.target == modal){
        modal.style.display = 'none';
    }
    
}

// -------------------------------- Cargando las tarjetas y galeria



window.addEventListener('load', 
   getCards = () => { 
    const options = {
        method: 'get'
    };
    fetch('https://pure-lake-94197.herokuapp.com/home', options)
    .then(data => {
        return data.json()
        }).then( res => {
            state.nuevoEstadoTarjetas = res;
            crearTarjetas(res);
        })
            

  }, false);

  window.addEventListener('load', 
  getCards = () => { 
   const options = {
       method: 'get'
   };
   fetch('https://pure-lake-94197.herokuapp.com/home-galeria', options)
   .then(data => {
       return data.json()
       }).then( res => {
           state.galeriaImagenes = res;
           
       })
           

 }, false);


// --------------------- Buscador de Tarjetas

let buscadorTarjetas = document.getElementById('buscador-tarjetas');


const buscarTarjetas = (event) => {
    state.searchField = event.target.value;
    const escortsFiltradas = state.nuevoEstadoTarjetas.filter(i =>{
        return i.nombre.toLowerCase().includes(state.searchField.toLowerCase());
      });
      removeElementsByClass('item-wr');
    crearTarjetas(escortsFiltradas);
}


document.addEventListener('keyup', buscarTarjetas);

// --------------------- Llamando al Modal

const modal = document.getElementById('simpleMoodal');
const modalBtn12 = document.getElementById('modalBtn');
const closeModalBtn = document.getElementById('close-modal');

resultado.addEventListener('click', function(e){
    const target = e.target;
    if(target.matches('div.model-info')){
        openModal(target.id);
    }
    })

closeModalBtn.addEventListener('click', closeModal);

window.addEventListener('click', clickOutside);


