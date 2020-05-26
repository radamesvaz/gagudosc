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
            }).then(console.log);

            emailRegistro.value='';
            nombreRegistro.value='';
            passwordRegistro.value='';
            verifyPassword.value='';
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
