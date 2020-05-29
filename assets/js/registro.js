const btnRegistro = document.getElementById('btn-registrar');
const nombreRegistro = document.getElementById('nombre');
const emailRegistro = document.getElementById('email');
const passwordRegistro = document.getElementById('password');
const verifyPassword = document.getElementById('verifyPassword');




const registrar = (event) => {
    event.preventDefault();

    let usuarioCheck = false;
    let emailCheck = false;
    let passwordMatch = false;

    // -------------------- Verificando campos

    // verificando email
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailRegistro.value))
  {
    emailCheck = true;
  } else {
    emailCheck = false;
  }

  // verificando que las contraseás coincidan
  if(passwordRegistro.value === verifyPassword.value){
    passwordMatch = true
} else{
    passwordMatch = false
}

    //Verificando usuario
if(nombreRegistro.value == ''){
    usuarioCheck = false;
}else{
    usuarioCheck = true
}

    if(usuarioCheck == true && emailCheck == true &&passwordMatch == true){
        const data = { email: emailRegistro.value, 
            usuario: nombreRegistro.value,
            password: passwordRegistro.value }
        const options = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
        },
            body: JSON.stringify(data)
        };
        fetch('https://pure-lake-94197.herokuapp.com/registro', options)
        .then(data => {
            return data.json()
            }).then(user => {
    
                    sessionStorage.setItem('userId', user.id);
                    sessionStorage.setItem('nombre', user.nombre);
                    sessionStorage.setItem('isSignedIn', 'true');
                    sessionStorage.setItem('edad', user.edad);
                    sessionStorage.setItem('titulo', user.titulo);
                    sessionStorage.setItem('descripcion', user.descripcion);
                    sessionStorage.setItem('telefono', user.telefono);
                    sessionStorage.setItem('localizacion', user.localizacion);
                    sessionStorage.setItem('disponibilidad', user.disponibilidad);
                    sessionStorage.setItem('tags', user.tags);
                    sessionStorage.setItem('tarifas', user.tarifas);
                    sessionStorage.setItem('metodospago', user.metodospago);
                
                    email.value='';
                    password.value='';

                    window.open("perfil.html", '_self' );
                

            
            
        })
    }else{
        console.log('campos incorrectos');
    }


}
        


btnRegistro.addEventListener("click", registrar);

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
