$(document).ready(function () {
    


$(".icono_menu").click(function (e) { 
    e.preventDefault();
    
$(".fondo_menu").toggleClass("trasladar");


});

$(".cerrar").click(function (e) { 
    e.preventDefault();
    $(".fondo_menu").toggleClass("trasladar");
  
    
});

/*
$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if(scroll>100){
    $("header").addClass("menu_efecto");
    } else{
        $("header").removeClass("menu_efecto");
    }
        
})
*/
$(_ => {
    let target = parseInt($(".amarillo").text());
    let current = 0;
    let interval = setInterval(() => {
        $(".amarillo").text(current);
        if (current >= target) {
            clearInterval(interval);
        }
        current++;
    }, 1);
});

$(_ => {
    let target = parseInt($(".celeste").text());
    let current = 0;
    let interval = setInterval(() => {
        $(".celeste").text(current);
        if (current >= target) {
            clearInterval(interval);
        }
        current++;
    }, 10);
});



$(_ => {
    let target = parseInt($(".naranja").text());
    let current = 0;
    let interval = setInterval(() => {
        $(".naranja").text(current);
        if (current >= target) {
            clearInterval(interval);
        }
        current++;
    }, 10);
});

$(_ => {
    let target = parseInt($(".violet2").text());
    let current = 0;
    let interval = setInterval(() => {
        $(".violeta2").text(current);
        if (current >= target) {
            clearInterval(interval);
        }
        current++;
    }, 10);
});









});