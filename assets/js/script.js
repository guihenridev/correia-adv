//Menu
function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    const iconMenu = document.querySelector('.icon');
    menuMobile.classList.toggle('open');
    iconMenu.classList.toggle('fa-bars');
    iconMenu.classList.toggle('fa-xmark');

    // if(menuMobile.classList.contains('open')){
    //     menuMobile.classList.remove('open');
        
    //     iconMenu.classList.add('fa-bars')
    // }else{
    //     menuMobile.classList.add('open');
    //     iconMenu.classList.remove("fa-bars")
    //     iconMenu.classList.add("fa-xmark");
    // }
}
