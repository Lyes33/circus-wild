 $('.header_nav_toggle').click(function(e){
    e.preventDefault();
    //    on ajoute ou on supprime la classe is-open
    $('.header_nav').toggleClass('is-open');

})
//fonction règles protection des données 
$(function(){
    $(".box").click(function(){
        var parent = $(this).parent();
        
        if($(this).is(':checked')){
            parent.addClass("checked");
        }else{
            parent.removeClass("checked");
        }
    });
})