$(".shadow").click(function(){
    $(this).toggleClass("js-active");
    $(".search-mobile").removeClass("js-active")
    $("body").removeClass("js-hidden")
})