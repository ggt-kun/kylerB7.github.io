 //Initialization Codes for plugins
 $(document).ready(function(){
   $('.dropdown-button').dropdown({hover:false});
   $(".button-collapse").sideNav();
   $('.collapsible').collapsible();
   //$('.carousel').carousel();
   $('.carousel.carousel-slider').carousel({fullWidth: true});
   //$('ul.tabs').tabs();
   $('ul.tabs').tabs('select_tab', 'tab_id');
 });

//Counter Code
 $('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

//Pushpin code
$('.pushpin-demo-nav').each(function() {
    var $this = $(this);
    var $target = $('#' + $(this).attr('data-target'));
    $this.pushpin({
      top: $target.offset().top,
      bottom: $target.offset().top + $target.outerHeight() - $this.height()
    });
  });

  $(document).ready(function(){
    $('.target').pushpin({
      top: 0,
      bottom: 1000,
      offset: 0
    });
  });
