function preloader(e){
    $('#marquee').marquee({
        duration: 25000,
        startVisible: true,
        duplicated: true,
        pauseOnHover:false,
    });
   
    // let cookieOptions = { expires: 7, path: '/' };
    // e.cookie('visit', false, cookieOptions);
    // if (e.cookie('visit') == undefined) {
    //     setTimeout(() => {
    //         $( ".preloader__image-container--1" ).addClass("animated")
    //     }, 1000);
    //     $( ".preloader__image-container--1" ).addClass("animated")
    //     setTimeout(() => {
    //     $( ".preloader__image-container--2" ).addClass("animated")
    //     }, 700);
    //     setTimeout(() => {
    //         $( ".preloader__image-container--2" ).addClass("scale")
    //      }, 1300);
    //      setTimeout(() => {
    //         $( ".preloader__image-container--2" ).removeClass("animated").removeClass("scale")
    //         $( ".preloader__image-container--3" ).addClass("animated")
    //         $( ".preloader__image-container--4" ).addClass("animated")
    //      }, 2100);
    //      setTimeout(() => {
    //         $( ".preloader__image-container--3" ).removeClass("animated")
    //         $( ".preloader__image-container--4" ).removeClass("animated")
    //     }, 3300);
    //     setTimeout(() => {
    //         $( ".preloader__image-container--5" ).addClass("animated")
    //     }, 3500);
    //     setTimeout(() => {
    //         $( ".preloader__image-container--5" ).addClass("end-animated")
    //     }, 4500);
    //     setTimeout(() => {
    //         $(".preloader").fadeOut();
    //     }, 5100);
    //         e.cookie('visit', true, cookieOptions);
           
    // } else {
    //     $(".preloader").fadeOut();
    // }

    // if (Cookies.get('preloader')){
    //     $(".preloader").fadeOut();
    // } else {
        
    //     Cookies.set('preloader', 'true', { expires: 7 });

    // }
  
  
}
$(document).ready(function() { 
    if($.cookie("popupnotify") == null) {
        console.log("cookie")
      $.cookie("popupnotify", "2");
     } 
    });
$(document).ready(function(){
    preloader()
})
