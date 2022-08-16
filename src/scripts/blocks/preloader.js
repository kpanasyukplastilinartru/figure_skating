function preloader(){
    $('#marquee').marquee({
        duration: 25000,
        startVisible: true,
        duplicated: true,
        pauseOnHover:false,
    });
   
    if($.cookie("popupnotify") == null) {
       
      $.cookie("popupnotify", "2");
     } else {
      
        // setTimeout(() => {
        //     $(".preloader").fadeOut();
        // }, 2500);

        $(".preloader__wrapper").addClass("animated");
        setTimeout(() => {
            $( ".preloader__image-container--1" ).addClass("animated")
        }, 800);

        setTimeout(() => {
        $( ".preloader__image-container--2" ).addClass("animated")
        }, 500);
        setTimeout(() => {
            $( ".preloader__image-container--2" ).addClass("scale")
         }, 1100);
         setTimeout(() => {
            $( ".preloader__image-container--2" ).removeClass("animated").removeClass("scale")
            $( ".preloader__image-container--3" ).addClass("animated")
            $( ".preloader__image-container--4" ).addClass("animated")
         }, 1900);
         setTimeout(() => {
            $( ".preloader__image-container--3" ).removeClass("animated")
            $( ".preloader__image-container--4" ).removeClass("animated")
        }, 2800);
        setTimeout(() => {
            $( ".preloader__image-container--5" ).addClass("animated")
        }, 3100);
        setTimeout(() => {
            $( ".preloader__image-container--5" ).addClass("end-animated")
        }, 4000);
        setTimeout(() => {
            $(".preloader").fadeOut();
        }, 4400);

        
     }

  
  
  
}

$(document).ready(function(){
    preloader()
})
