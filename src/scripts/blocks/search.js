$(".header__button--search").click(function(){
    $(".search-mobile").addClass("js-active");
    $(".shadow").toggleClass("js-active");
})
$(".search-mobile__close-btn").click(function(){
    $(".search-mobile").removeClass("js-active");
    $(".shadow").removeClass("js-active");
})
