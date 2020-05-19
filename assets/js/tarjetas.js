//------------------------------ Estado en el que se va a guardar la informacion de cada persona

const state ={
    searchField: '',
     
}


// -------------------------------- Cargando las tarjetas

let resultado = document.getElementById('id-tarjetas');

window.addEventListener('load', 
   getCards = () => { 
    const options = {
        method: 'get'
    };
    fetch('http://localhost:3000/home', options)
    .then(data => {
        return data.json()
        }).then( res => {
            state.nuevoEstadoTarjetas = res;
            for(let i = 0; i<state.nuevoEstadoTarjetas.length; i++){
                let div2 = document.createElement('div');
                    div2.className="item-wr";


                let div3 = document.createElement('div');
                    div3.className="model-info";
                    
                let pTitulo = document.createElement('p');
                    pTitulo.className='title';
                    pTitulo.textContent= res[i].nombre;

                let pEdad = document.createElement('p');
                    pEdad.textContent = ('Edad: ');

                let pDesc = document.createElement('p');
                    pDesc.textContent = ('Ubicación: ');

                let pTelefono = document.createElement('p');
                    pTelefono.textContent = ('Telefono: ');

                let pEdadSpan = document.createElement('span');
                    pEdadSpan.textContent = res[i].edad;

                let pDescSpan = document.createElement('span');
                    pDescSpan.textContent = res[i].localizacion;

                let pTelefonoSpan = document.createElement('span');
                    pTelefonoSpan.textContent = res[i].telefono;

                let img = document.createElement('img');
                    img.src=res[i].fotos;
                    img.alt="best-image";
                    img.className="model-item";

                let a = document.createElement('a');
                    a.target="_blank";
                    a.href=res[i].link;
                    
                    a.style=`background-image: url(${res[i].fotos}) `;
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

        })
            

  }, false);



// --------------------- Buscador

let buscadorTarjetas = document.getElementById('buscador-tarjetas');


const buscarTarjetas = (event) => {
    state.searchField = event.target.value;
    //console.log(escortsFiltradas);
}
/*
const escortsFiltradas = state.nuevoEstadoTarjetas.filter(i =>{
    return i.nombre.toLowerCase().includes(state.searchField.toLowerCase());
  });
*/
document.addEventListener('keyup', buscarTarjetas);