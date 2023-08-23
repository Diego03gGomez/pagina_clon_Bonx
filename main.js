$(document).ready(function () {
    


$(".icono_menu").click(function (e) { 
    e.preventDefault();
    
$(".fondo_menu").toggleClass("trasladar");


});

$(".cerrar").click(function (e) { 
    e.preventDefault();
    $(".fondo_menu").toggleClass("trasladar");
  
    
});

$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if(scroll>100){
    $("header").addClass("menu_efecto");
    } else{
        $("header").removeClass("menu_efecto");
    }
        
})











});