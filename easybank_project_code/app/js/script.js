// on click adding the open class to the hamburger menu span, 
// which has transform 
const body = document.querySelector('body');
const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');


btnHamburger.addEventListener('click', function(){
    console.log("menu clicked!");
    if(header.classList.contains('open')){
        body.classList.remove('noscroll');
        header.classList.remove('open');

    }
    //when menu is open
    else{
        body.classList.add('noscroll');
        header.classList.add('open');
        

    }
    

})