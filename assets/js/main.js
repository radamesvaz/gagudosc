

// https://pure-lake-94197.herokuapp.com/iniciar-sesion


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
            ulNav.id='nav-menu';

        let liNav1 = document.createElement('li');
            liNav1.className='menu-item';

        let aListHome = document.createElement('a');
            aListHome.href='index.html';
            aListHome.textContent='Inicio';
            aListHome.target='_self';

        let liNav2 = document.createElement('li');
            liNav2.className = 'menu-item';

        let aListTarjetas = document.createElement('a');
            aListTarjetas.href='tarjetas.html';
            aListTarjetas.textContent='Ver Tarjetas';
            aListTarjetas.target='_self';

        let liNav3 = document.createElement('li');
            liNav3.className = 'menu-item';

        let aListRegistro = document.createElement('a');
            aListRegistro.href='Register.html';
            aListRegistro.textContent='Registrarse';
            aListRegistro.target='_self';
/*
            if(sessionStorage.isSignedIn == 'true'){

            let liNav4 = document.createElement('li');
                liNav4.className = 'menu-item';

            let aListLogin = document.createElement('a');
                aListLogin.href='perfil.html';
                aListLogin.textContent=sessionStorage.getItem('nombre');
                aListLogin.target='_self';

                liNav4.appendChild(aListLogin);
                ulNav.appendChild(liNav4);

            }*/

        let iResponsive = document.createElement('i');
            iResponsive.className='fa fa-times';
            iResponsive.ariaHidden='true';
  
        let iResponsive2 = document.createElement('i');
            iResponsive2.className='fa fa-bars';
            iResponsive2.ariaHidden='true';




        
        liNav3.appendChild(aListRegistro);
        liNav2.appendChild(aListTarjetas);
        liNav1.appendChild(aListHome);
        ulNav.appendChild(liNav1);
        ulNav.appendChild(liNav2);
        ulNav.appendChild(liNav3);
        
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
        
        if(sessionStorage.isSignedIn == 'true'){
    

            let liNav4 = document.createElement('li');
            liNav4.className = 'menu-item';
        
            let aListLogin = document.createElement('a');
                aListLogin.href='perfil.html';
                aListLogin.textContent=sessionStorage.getItem('nombre');
                aListLogin.target='_self';
        
            liNav4.appendChild(aListLogin);
            ulNav.appendChild(liNav4);
            
        }
        
    }



window.addEventListener('load', loadingHeader());




const removeElementsByClass = (elementName) => {
    let elements = document.getElementsByClassName(elementName);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
};

// Si el usuario ha iniciado sesion

