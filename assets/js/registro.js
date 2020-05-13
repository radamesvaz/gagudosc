const btnRegistro = document.getElementById('btn-registrar');
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const password = document.getElementById('password');
const verifyPassword = document.getElementById('verifyPassword');

const registrar = (event) => {
    event.preventDefault();

    let usuarioCheck = false;
    let emailCheck = false;
    let passwordMatch = false;

    // -------------------- Verificando campos

    // verificando email
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))
  {
    emailCheck = true;
  } else {
    emailCheck = false;
  }

  // verificando que las contraseás coincidan
  if(password.value === verifyPassword.value){
    passwordMatch = true
} else{
    passwordMatch = false
}

    //Verificando usuario
if(nombre.value == ''){
    usuarioCheck = false;
}else{
    usuarioCheck = true
}

    if(usuarioCheck == true && emailCheck == true &&passwordMatch == true){
        console.log('todos los campos son validos');
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
