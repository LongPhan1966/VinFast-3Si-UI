$(document).ready(function(){
    var owl = $('.owl-carousel');
    owl.owlCarousel({
    items:1,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$(".menu-right-open").click(function(){
    $(".menu-right").addClass("active")
})
$(".menu-right-close").click(function(){
    $(".menu-right").removeClass("active")
})
/* $('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
}) */
});