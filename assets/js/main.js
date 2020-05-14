

const mainState = {
    isSignedIn : false,
    userId: 0,
    nombre: '',

}




const removeElementsByClass = (elementName) => {
    let elements = document.getElementsByClassName(elementName);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
};

// --------------------------------  Login ------------------------------------

const email = document.getElementById('email-signin');
const password = document.getElementById('password-signin');
const btnIngreso = document.getElementById('btn-ingresar');
let loginInfo = document.getElementById('login-info');

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
        fetch('http://localhost:3000/iniciar-sesion', options)
        .then(data => {
            return data.json()
            }).then(user => {
                mainState.userId = user.id;
                mainState.isSignedIn = true;
                mainState.nombre = user.nombre;
                console.log(mainState);
                localStorage.setItem('ID', user.nombre);
                if(mainState.isSignedIn == true){
                    removeElementsByClass('login d-flex align-items-center');
                    let divNombre = document.createElement('p');
                    divNombre.textContent= 'Bienvenido ' + user.nombre

                    loginInfo.appendChild(divNombre)
                }
            })
            

            email.value='';
            
            password.value='';
            
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
