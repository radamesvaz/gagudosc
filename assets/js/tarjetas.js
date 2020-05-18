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
            for(let i = 0; i < res.length; i++){

                let div2 = document.createElement('div');
                    div2.className="item-wr";


                let div3 = document.createElement('div');
                    div3.className="model-info";
                    
                let pTitulo = document.createElement('p');
                    pTitulo.className='title';
                    pTitulo.textContent= res[i].nombre;

                let img = document.createElement('img');
                    img.src=res[i].fotos;
                    img.alt="best-image";
                    img.className="model-item";
/*
                let div4 = document.createElement('div');
                    div4.className="card-top-body";                               

                let div5 = document.createElement('div');
                    div5.className="card-img-overlay product-detail";
*/
                let a = document.createElement('a');
                    a.target="_blank";
                    a.href=res[i].link;
                    
                    a.style=`background-image: url(${res[i].fotos}) `;
                    a.className='model-item';

                  //  img.appendChild(div5);
                   // div4.appendChild(img);
                   // a.appendChild(div4);
                   // div3.appendChild(a);

                a.appendChild(pTitulo);
                 a.appendChild(div3);
                div2.appendChild(a);
                resultado.appendChild(div2);

                
            }

        });
            

  }, false);