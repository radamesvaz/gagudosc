


//--------------------------- Creando el menu --------------------

const loadingHeader = () =>{

        let realHeader = document.getElementById("real-header");
    
        // Creando los divs del header
        let header = document.createElement('header');
            header.className='header'
        
        let div1 = document.createElement('div');
            div1.id = 'div-contenedor';
            div1.className='container';

        let div2 = document.createElement('div');
            div2.id='div-header-inner';
            div2.className='header-inner';
        
        let aHome = document.createElement('a');
            aHome.target='_self';
            aHome.className='site-logo';
            aHome.href='index.html';
            aHome.textContent='TOP'

        let spanLogo = document.createElement('span');
            //spanLogo.className='site-logo';
            spanLogo.textContent='MODELS'

        let div3 = document.createElement('div');
            div3.id='div-navigation-wr';
            div3.className='navigation-wr';

        let nav = document.createElement('nav');
            nav.id='nav-navigation';
            nav.className='navigation';

        let ulNav = document.createElement('ul');

        let liNav1 = document.createElement('li');
            liNav1.className='menu-item';

        let aListHome = document.createElement('a');
            aListHome.href='index.html';
            aListHome.textContent='Inicio';
            aListHome.target='_self';

        let liNav2 = document.createElement('li');
            liNav2.className = 'menu-item';

        let aListTarjetas = document.createElement('a');
            aListTarjetas.href='index.html';
            aListTarjetas.textContent='Ver Tarjetas';
            aListTarjetas.target='_self';

        let liNav3 = document.createElement('li');
            liNav3.className = 'menu-item';

        let aListRegistro = document.createElement('a');
            aListRegistro.href='index.html';
            aListRegistro.textContent='Registrarse';
            aListRegistro.target='_self';

        let liNav4 = document.createElement('li');
            liNav4.className = 'menu-item';

        let aListLogin = document.createElement('a');
            aListLogin.href='index.html';
            aListLogin.textContent='Iniciar Sesión';
            aListLogin.target='_self';


        let iResponsive = document.createElement('i');
            iResponsive.className='fa fa-times';
            iResponsive.ariaHidden='true';
  
        let iResponsive2 = document.createElement('i');
            iResponsive2.className='fa fa-bars';
            iResponsive2.ariaHidden='true';




        liNav4.appendChild(aListLogin);
        liNav3.appendChild(aListRegistro);
        liNav2.appendChild(aListTarjetas);
        liNav1.appendChild(aListHome);
        ulNav.appendChild(liNav1);
        ulNav.appendChild(liNav2);
        ulNav.appendChild(liNav3);
        ulNav.appendChild(liNav4);
        nav.appendChild(ulNav);
        div3.appendChild(nav);
        div3.appendChild(iResponsive);
        
        

        aHome.appendChild(spanLogo);
        div2.appendChild(aHome);
 
        div2.appendChild(div3);
        div2.appendChild(iResponsive2);
        div1.appendChild(div2);    
        header.appendChild(div1);
        realHeader.appendChild(header);
        
        
    }



window.addEventListener('load', loadingHeader());























sessionStorage.setItem('isSignedIn', 'false');
sessionStorage.setItem('nombre', '');
sessionStorage.setItem('userId', '');

console.log(sessionStorage);



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

                sessionStorage.setItem('userId', user.id);
                sessionStorage.setItem('nombre', user.nombre);
                sessionStorage.setItem('isSignedIn', 'true');
                console.log(sessionStorage);
                if(sessionStorage.getItem('isSignedIn') == 'true'){
                    removeElementsByClass('login d-flex align-items-center');
                    let divNombre = document.createElement('p');
                    divNombre.textContent= 'Bienvenido ' + user.nombre
                    loginInfo.appendChild(divNombre);

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
