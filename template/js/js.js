$(document).ready(function(){
    $('#aboutSlider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: document.querySelector('#about-arrow-next'),
        prevArrow: document.querySelector('#about-arrow-prev')                 
    });
})
$(document).ready(function(){
    $('#eventSlider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: document.querySelector('#event-arrow-next'),
        prevArrow: document.querySelector('#event-arrow-prev')                 
    });
})
$(document).ready(function(){
    $('#teamSlider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: document.querySelector('#team-arrow-next'),
        prevArrow: document.querySelector('#team-arrow-prev')                 
    });
})
window.onscroll = function() {myFunction()};        
    let header = document.getElementById("header");
    let sticky = header.offsetTop;        
    function myFunction() {
        if (window.pageYOffset > sticky) {
        header.classList.add("header__fixed");
        } else {
        header.classList.remove("header__fixed");
    }
}