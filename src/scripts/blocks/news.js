$(".news-preview__toggler").click(function(){
    $(this).toggleClass("js-active")
    $(this).closest(".news-preview__right").find(".news-preview__hidden").slideToggle(300)
})