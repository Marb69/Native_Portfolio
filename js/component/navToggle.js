

export function navtoggle(){


    const MenuBtn = document.querySelector('#menu');
    const Nav = document.querySelector('.nav');

    MenuBtn.addEventListener('click',()=>{

        Nav.classList.add('toggle');
        console.log('click')
         
    })

    Nav.addEventListener('click',()=>{

        Nav.classList.remove('toggle');
    })
      
}