$('.hero__swiper-container').each(function(){
    let heroSlider = new Swiper(this, {
    //   effect: 'fade',
      autoHeight:true,
    calculateHeight:true,
    //   fadeEffect: {
    //     crossFade: true
    //   },
        pagination: {
            clickable: true,
            el: $(this).parent().find(".swiper-pagination")[0],
          },
          spaceBetween: 30,
      navigation: {
        nextEl: $(this).parent().find('.hero__arrow--right')[0],
        prevEl: $(this).parent().find('.hero__arrow--left')[0],
      },
      observer: true,  
      observeParents: true,
      autoplay: {
        delay: 5000,
      },
    //   loop:true,
    });
  });
  console.log("q")