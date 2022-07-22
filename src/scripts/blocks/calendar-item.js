$(".calendar-item__head").click(function(){
    $(this).parent().toggleClass("js-active");
    $(this).next().slideToggle(300)
})