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

    $(".nav-mobile-menu").click(function(){
        $(".nav-mb-right").addClass("active")
        
    })
    $(".nav-mobile-close").click(function(){
        $(".nav-mb-right").removeClass("active")
    })
    
    $(".menu-right-open").click(function(){
        $(".overlay").addClass("active");
      });
  
      
      $(".menu-right-close").click(function(){
        $(".overlay").removeClass("active");
      });

    $(".header-mega-menu-option-left div:first-child").addClass("header-mega-menu-left-petro-active")

    $(".header-mega-menu-option-left div").click(function(){
        $(this).siblings(".header-mega-menu-left-petro-active").removeClass('header-mega-menu-left-petro-active');
        $(this).addClass("header-mega-menu-left-petro-active");
        $(".aaa div").addClass("header-mega-menu-product-show");
    })
   
    $(".header-mega-menu-option-left div").click(function(){
        $(".aaa div").siblings(".header-mega-menu-product-show").removeClass("header-mega-menu-product-show");
        $(".aaa div").addClass("header-mega-menu-product-show");
    })
    
    /* ------------Chọn dòng xe------------ */
    $(".vf-car-product-list li:first-child").addClass("vf-car-product-item-active");

    $(".vf-car-product-list li").click(function(){
        $(this).siblings(".vf-car-product-item-active").removeClass("vf-car-product-item-active");
        $(this).addClass("vf-car-product-item-active");
    })

    $(".product-car-right div:first-child").addClass("car-product-active");
    
    $(".vf-car-product-list li:first-child").click(function(){
        $(".product-car-right div:second-child",".product-car-right div:third-child").siblings("car-product-active").removeClass("car-product-active");
        $(".product-car-right div:first-child").addClass("car-product-active");
    })
    $(".vf-car-product-list li:second-child").click(function(){
        $(".product-car-right div:first-child",".product-car-right div:third-child").siblings("car-product-active").removeClass("car-product-active");
        $(".product-car-right div:second-child").addClass("car-product-active");
    })
     



    /* Change img */
    $("#lux-sa").click(function(){
        $('#img-360').attr("src","./img/CarDetail/LuxSA360-2.png")
    });
    $("#lux-a").click(function(){
        $('#img-360').attr("src","./img/CarDetail/LuxA360.png")
    });
    $("#fadil").click(function(){
        $('#img-360').attr("src","./img/CarDetail/Fadil360.png")
    });

    

    /* ------------Chọn loại xe ------------*/
    $(".version-option button:first-child").addClass("btn-option-active");

    $(".version-option button").click(function(){
        $(this).siblings('.btn-option-active').removeClass('btn-option-active');
        $(this).addClass('btn-option-active');
    });

    /* ------------Chọn màu ngoại thất xe ------------*/

    $(".exterior-color-list li:first-child").addClass("exterior-color-item-active");

    $(".exterior-color-list li").click(function(){
        $(this).siblings(".exterior-color-item-active").removeClass("exterior-color-item-active");
        $(this).addClass("exterior-color-item-active")
    })

    /* ------------Chọn màu nội thất ------------*/
    $(".furniture-color-list li:first-child").addClass("exterior-color-item-active");
    $(".furniture-color-list li").click(function(){
        $(this).siblings(".exterior-color-item-active").removeClass("exterior-color-item-active");
        $(this).addClass("exterior-color-item-active")
    })


    
});


/* document.getElementById("btn-regis").addEventListener("click", Registration)

    function Registration(){
        alert ("Đăng ký lái thử thành công");
    } */