let btnPerfil = document.getElementById('btn-perfil');
let fotoPerfil = document.getElementById('foto-perfil');
let btnPerfilPrueba = document.getElementById('btn-subir-archivos');
let textoPerfil = document.getElementById('prueba-texto-archivos');

 btnPerfilPrueba.addEventListener('click', function(){
    fotoPerfil.click();
    
});

fotoPerfil.addEventListener('change', function(){
    if(fotoPerfil.value){
        textoPerfil.innerHTML = fotoPerfil.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
    }else {
        textoPerfil.innerHTML = 'Sin Imagen';
    }
})


let btnGaleriaImg1 = document.getElementById('btn-galeria-img1');
let galeriaImg1 = document.getElementById('foto-galeria-img1');
let btnAbrirGaleria1 = document.getElementById('btn-subir-archivos1');
let textoGaleria1 = document.getElementById('prueba-texto-archivos1');

btnAbrirGaleria1.addEventListener('click', function(){
    galeriaImg1.click();
});

galeriaImg1.addEventListener('change', function(){
    if(galeriaImg1.value){
        textoGaleria1.innerHTML = galeriaImg1.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
    }else {
        textoGaleria1.innerHTML = 'Sin Imagen';
    }
})


let btnGaleriaImg2 = document.getElementById('btn-galeria-img2');
let galeriaImg2 = document.getElementById('foto-galeria-img2');
let btnAbrirGaleria2 = document.getElementById('btn-subir-archivos2');
let textoGaleria2 = document.getElementById('prueba-texto-archivos2');

btnAbrirGaleria2.addEventListener('click', function(){
    galeriaImg2.click();
});

galeriaImg2.addEventListener('change', function(){
    if(galeriaImg2.value){
        textoGaleria2.innerHTML = galeriaImg2.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
    }else {
        textoGaleria2.innerHTML = 'Sin Imagen';
    }
})


let btnGaleriaImg3 = document.getElementById('btn-galeria-img3');
let galeriaImg3 = document.getElementById('foto-galeria-img3');
let btnAbrirGaleria3 = document.getElementById('btn-subir-archivos3');
let textoGaleria3 = document.getElementById('prueba-texto-archivos3');

btnAbrirGaleria3.addEventListener('click', function(){
    galeriaImg3.click();
});

galeriaImg3.addEventListener('change', function(){
    if(galeriaImg3.value){
        textoGaleria3.innerHTML = galeriaImg3.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
    }else {
        textoGaleria3.innerHTML = 'Sin Imagen';
    }
})



let btnGaleriaImg4 = document.getElementById('btn-galeria-img4');
let btnGaleriaImg5 = document.getElementById('btn-galeria-img5');
let btnGaleriaImg6 = document.getElementById('btn-galeria-img6');
let btnGaleriaImg7 = document.getElementById('btn-galeria-img7');





let galeriaImg4 = document.getElementById('foto-galeria-img4');
let galeriaImg5 = document.getElementById('foto-galeria-img5');
let galeriaImg6 = document.getElementById('foto-galeria-img6');
let galeriaImg7 = document.getElementById('foto-galeria-img7');



const archivosGaleria = {
    perfil: null,
    foto1: null,
    foto2: null,
    foto3: null,
    foto4: null,
    foto5: null,
    foto6: null,
    foto7: null

}

subirFotoPerfil = (e) => {
    e.preventDefault();
    archivosGaleria.perfil = fotoPerfil.files[0];
     
        var blobFile = archivosGaleria.perfil;
        var formData = new FormData();
        formData.append("image", blobFile);
    
        $.ajax({
           url: `https://pure-lake-94197.herokuapp.com/foto-perfil/${sessionStorage.userId}`,
           type: "PATCH",
           data: formData,
           processData: false,
           contentType: false,
           success: function(response) {
               console.log(response)
           },
           error: function(jqXHR, textStatus, errorMessage) {
               console.log(errorMessage); // Optional
           }
        });
    
  
}

subirFotoGaleria1 = (e) =>{
    e.preventDefault();
    archivosGaleria.foto1 = galeriaImg1.files[0];
     
        var blobFile = archivosGaleria.foto1;
        var formData = new FormData();
        formData.append("image", blobFile);
    
        $.ajax({
           url: `https://pure-lake-94197.herokuapp.com/galeria-foto1/${sessionStorage.userId}`,
           type: "PATCH",
           data: formData,
           processData: false,
           contentType: false,
           success: function(response) {
               console.log(response)
           },
           error: function(jqXHR, textStatus, errorMessage) {
               console.log(errorMessage); // Optional
           }
        });
    
  
}

subirFotoGaleria2 = (e) =>{
    e.preventDefault();
    archivosGaleria.foto2 = galeriaImg2.files[0];
     
        var blobFile = archivosGaleria.foto2;
        var formData = new FormData();
        formData.append("image", blobFile);
    
        $.ajax({
           url: `https://pure-lake-94197.herokuapp.com/galeria-foto2/${sessionStorage.userId}`,
           type: "PATCH",
           data: formData,
           processData: false,
           contentType: false,
           success: function(response) {
               console.log(response)
           },
           error: function(jqXHR, textStatus, errorMessage) {
               console.log(errorMessage); // Optional
           }
        });
    
  
}

subirFotoGaleria3 = (e) =>{
    e.preventDefault();
    archivosGaleria.foto3 = galeriaImg3.files[0];
     
        var blobFile = archivosGaleria.foto3;
        var formData = new FormData();
        formData.append("image", blobFile);
    
        $.ajax({
           url: `https://pure-lake-94197.herokuapp.com/galeria-foto3/${sessionStorage.userId}`,
           type: "PATCH",
           data: formData,
           processData: false,
           contentType: false,
           success: function(response) {
               console.log(response)
           },
           error: function(jqXHR, textStatus, errorMessage) {
               console.log(errorMessage); // Optional
           }
        });
    
  
}

subirFotoGaleria4 = (e) =>{
    e.preventDefault();
    archivosGaleria.foto4 = galeriaImg4.files[0];
     
        var blobFile = archivosGaleria.foto4;
        var formData = new FormData();
        formData.append("image", blobFile);
    
        $.ajax({
           url: `https://pure-lake-94197.herokuapp.com/galeria-foto4/${sessionStorage.userId}`,
           type: "PATCH",
           data: formData,
           processData: false,
           contentType: false,
           success: function(response) {
               console.log(response)
           },
           error: function(jqXHR, textStatus, errorMessage) {
               console.log(errorMessage); // Optional
           }
        });
    
  
}

subirFotoGaleria5 = (e) =>{
    e.preventDefault();
    archivosGaleria.foto5 = galeriaImg5.files[0];
     
        var blobFile = archivosGaleria.foto5;
        var formData = new FormData();
        formData.append("image", blobFile);
    
        $.ajax({
           url: `https://pure-lake-94197.herokuapp.com/galeria-foto5/${sessionStorage.userId}`,
           type: "PATCH",
           data: formData,
           processData: false,
           contentType: false,
           success: function(response) {
               console.log(response)
           },
           error: function(jqXHR, textStatus, errorMessage) {
               console.log(errorMessage); // Optional
           }
        });
    
  
}

subirFotoGaleria6 = (e) =>{
    e.preventDefault();
    archivosGaleria.foto6 = galeriaImg6.files[0];
     
        var blobFile = archivosGaleria.foto6;
        var formData = new FormData();
        formData.append("image", blobFile);
    
        $.ajax({
           url: `https://pure-lake-94197.herokuapp.com/galeria-foto6/${sessionStorage.userId}`,
           type: "PATCH",
           data: formData,
           processData: false,
           contentType: false,
           success: function(response) {
               console.log(response)
           },
           error: function(jqXHR, textStatus, errorMessage) {
               console.log(errorMessage); // Optional
           }
        });
    
  
}

subirFotoGaleria7 = (e) =>{
    e.preventDefault();
    archivosGaleria.foto7 = galeriaImg7.files[0];
     
        var blobFile = archivosGaleria.foto7;
        var formData = new FormData();
        formData.append("image", blobFile);
    
        $.ajax({
           url: `https://pure-lake-94197.herokuapp.com/galeria-foto7/${sessionStorage.userId}`,
           type: "PATCH",
           data: formData,
           processData: false,
           contentType: false,
           success: function(response) {
               console.log(response)
           },
           error: function(jqXHR, textStatus, errorMessage) {
               console.log(errorMessage); // Optional
           }
        });
    
  
}




btnPerfil.addEventListener('click', subirFotoPerfil);
btnGaleriaImg1.addEventListener('click', subirFotoGaleria1);
btnGaleriaImg2.addEventListener('click', subirFotoGaleria2);
btnGaleriaImg3.addEventListener('click', subirFotoGaleria3);
btnGaleriaImg4.addEventListener('click', subirFotoGaleria4);
btnGaleriaImg5.addEventListener('click', subirFotoGaleria5);
btnGaleriaImg6.addEventListener('click', subirFotoGaleria6);
btnGaleriaImg7.addEventListener('click', subirFotoGaleria7);

