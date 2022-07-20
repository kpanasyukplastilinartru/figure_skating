$(".footer__menu-toggler").click(function(){
    $(this).toggleClass("js-active")
    $(this).parent().next().slideToggle(300)
})