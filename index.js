$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:3
            }
        }
    })

    $(".menu-right-open").click(function(){
        $(".menu-right").addClass("active")
    })
    $(".menu-right-close").click(function(){
        $(".menu-right").removeClass("active")
    })

});


/* document.getElementById("btn-regis").addEventListener("click", Registration)

    function Registration(){
        alert ("Đăng ký lái thử thành công");
    } */
