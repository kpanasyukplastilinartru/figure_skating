$(".burger").click(function(){
    $(this).toggleClass("js-active");
    $(".mobile-menu").slideToggle(300);
    $("body").toggleClass("js-hidden")
})