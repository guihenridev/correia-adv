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
window.sr = ScrollReveal();
sr.reveal('.intervalCardReveal', {
  duration:1500, 
  interval: 300, 
  origin: "top",
  distance: "50px"});
sr.reveal('.titleReveal', {duration: 2000, origin:"top", distance:"60px"});
