window.jQuery(function ($) {

  //UTILIZAR WEBP DE FORMA AUTOMATICA
  $(document).ready(function() {
    Modernizr.on('webp', function (result) {
      var img = $('.myimg');
      for (var i = 0; i < img.length; i++) { 
        if (result) {
          img[i].src = img[i].getAttribute('data-webp');
        }
        else {
          img[i].src = img[i].getAttribute('data-jpg');
        }
      }
    });
  });

	// ABRIR MENU
    $(function(){
      $("#ButtonMenu #open, #ButtonMobile #open").click(function(e){
      	$('#ButtonMenu, #ButtonMobile').addClass('active');
      	$('#site #content').addClass('active');
      	$('menu').addClass('active');
      });
    });

    // FECHAR MENU
    $(function(){
      $("#ButtonMenu #close, #ButtonMobile #close").click(function(e){
      	$('#ButtonMenu, #ButtonMobile').removeClass('active');
      	$('#site #content').removeClass('active');
      	$('menu').removeClass('active');
      });
    });

    //CAROUSEL
    $(document).ready(function() {
      var owl = $('#jobs');
      owl.owlCarousel({
        margin: 0,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        loop:true,
        autoplay:true,
        autoplayTimeout:9000,
        autoplayHoverPause:false,
        nav: true,
        dots: false,
        loop: true,
        responsive: {
          0: {
            items: 1,
            autoHeight: true,
            loop: false,
          },
          980: {
            items: 1,
            autoHeight: true,
            loop: false,
          },
          1000: {
            items: 1,
            autoHeight: true,
          }
        }
      });
    });

	// MENU FIXO - INSERIR E REMOVER CLASS COM SCROLL
	$(window).scroll(function() {    
	  var scroll = $(window).scrollTop();
	  if (scroll >= 50) {
	    $("#masthead, #menuMobile").addClass("headerFixed");
	  } else {
	    $("#masthead, #menuMobile").removeClass("headerFixed");
	  }
	});


  // ROLAGEM SUAVE
  $('a[href^="#"]' ).on('click', function(e) {
    e.preventDefault();
    var id = $(this).attr('href'),
        targetOffset = $(id).offset().top;
        
    $('html, body').animate({ 
      scrollTop: targetOffset - 0
    }, 500);
  });


});
