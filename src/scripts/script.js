// $('body').on('mouseenter', '.ymaps-2-1-79-placemark-overlay', function() {
//    console.log("hover")
// });
$(document).ready(function(){
    $(".direction-item").click(function(){
        $("#prezidium").arcticmodal();
    })
    $(".blanks__item").click(function(e){
        e.preventDefault();
        $("#report").arcticmodal();
    })
    $(".select").niceSelect();
    $("form").each(function(  ) {
        $(this).validate({
           
             messages:{
               name:{
                 required: "Обязательно для заполнения",
               
             },
               date:{
               required: "Обязательно для заполнения",
               },
               coment:{
                required: "Обязательно для заполнения",
                },
                discipline:{
                required: "Обязательно для заполнения",
                },
             }
          });
      });
      autosize($('textarea'));
    new SimpleBar($('.prezidium-modal__content-block.content-block')[0]);
    // $('.report-form input,.report-form textarea').on('keyup', function() {
    //     console.log("qq")
    //     let empty = false;
    //     let emptyTx = false;
    //     $('.report-form input').each(function() {
    //       empty = $(this).val().length == 0;
    //     });
    //     $('.report-form textarea').each(function() {
    //         emptyTx = $(this).val().length == 0;
    //       });
       
    
    //     if (empty && emptyTx)
    //       $('.report-form .form__button ').attr('disabled', 'disabled');
    //     else
    //       $('.report-form .form__button ').attr('disabled', false);
    //   });

      
})
    
