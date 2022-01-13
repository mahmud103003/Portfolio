$(document).ready(function(){
  $('.about-test').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows:false,
    autoplay: true,
  });
  new WOW().init();

  $('.counter').counterUp({
    delay: 0.5,
});


var typed = new Typed('.about-man h5', {
  strings: ["Graphic & Web Designer", "Web Developer","Freelancer",],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true,
  showCursor: false,
});

  $('.about-service').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots:false,
    arrows:true,
    prevArrow: '<i class="far fa-circle left-arrow"></i>',
    nextArrow: '<i class="far fa-circle right-arrow"></i>',
  });
  $('#portfolio .about-portfolio .about-text ul li').on("click",function(){
    $(this).addClass("active").siblings().removeClass('active');
  });
  
});
var mixer = mixitup('.about-image');


$(window).on('load',function(){
  $('.loader').delay(1000).fadeOut(500)
});

// venobox
$(document).ready(function(){
  $('.venobox').venobox();
  });


  // scroll-button
  $(window).scroll(function(){
    var scrolling =$(this).scrollTop();

    if(scrolling>600){
    $('.scroll').fadeIn();}


    else{
      $('.scroll').fadeOut();}

  });

  $('.scroll').click(function(){
    $('html,body').animate({
      scrollTop:'0px',
    },1500);
  });