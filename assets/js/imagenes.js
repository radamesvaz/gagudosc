let btnPerfil = document.getElementById('btn-foto-perfil');

let fotoPerfil = document.getElementById('foto-perfil');


const archivosGaleria = {
    perfil: null,
    galeriaFoto1: null,
    galeriaFoto2: null,
    galeriaFoto3: null,
    galeriaFoto4: null,
    galeriaFoto5: null,
    galeriaFoto6: null,
    galeriaFoto7: null

}

subirFotoPerfil = (e) => {
    e.preventDefault();
    archivosGaleria.perfil = fotoPerfil.files[0];
     
        var blobFile = archivosGaleria.perfil;
        var formData = new FormData();
        formData.append("image", blobFile);
    
        $.ajax({
           url: `http://localhost:3000/foto-perfil/${sessionStorage.userId}`,
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