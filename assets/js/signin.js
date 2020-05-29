const email = document.getElementById('email-signin');
const password = document.getElementById('password-signin');
const btnIngreso = document.getElementById('btn-ingresar');
let loginInfo = document.getElementById('login-info');

let mensajeError = document.querySelector('.error')

const ingresar = (event) => {
    event.preventDefault();

    if(email.value && password.value){
        const data = { 
            email: email.value, 
            password: password.value 
        }
        const options = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
        },
            body: JSON.stringify(data)
        };
        fetch('https://pure-lake-94197.herokuapp.com/iniciar-sesion', options)
        .then(data => {
            return data.json()
            }).then(user => {
                    if(user == 'credenciales incorrectas'){

                        mensajeError.style.display = 'block';
                        password.value='';
                        
                    } else{
                        mensajeError.style.display = 'none';

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
                    }

                
                
            })
            


            
    }else{
        console.log('por favor llena los campos');
    }


}


btnIngreso.addEventListener("click", ingresar);


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
