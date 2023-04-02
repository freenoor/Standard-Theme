  // jQuery("a[href='#anchor-direct']").click(function() {
  //   jQuery("html, body").animate({ scrollTop: 20 }, "slow");
  //   return false;
  // });

 
 var Menu = {
    el: {
    ham: jQuery('.menu-m'),
    menuTop: jQuery('.menu-top'),
    menuMiddle: jQuery('.menu-middle'),
    menuBottom: jQuery('.menu-bottom')
    },
    init: function() {
    Menu.bindUIactions();
    },
    bindUIactions: function() {
    Menu.el.ham
    .on(
    'click',
    function(event) {
    Menu.activateMenu(event);
    event.preventDefault();
    }
    );
    },
    activateMenu: function() {
    Menu.el.menuTop.toggleClass('menu-top-click');
    Menu.el.menuMiddle.toggleClass('menu-middle-click');
    Menu.el.menuBottom.toggleClass('menu-bottom-click'); 
    }
    };
Menu.init();


$(document).ready(function() {
  $(window).scroll(function(){
      if ($(this).scrollTop() > 70) {
         $('.logo_header').addClass('scroll-imgchange'); 
         $('.navbar-nav').addClass('scroll-navchange');
         $('.headerbar').addClass('scroll-headerchange');
      } else {
         $('.logo_header').removeClass('scroll-imgchange');
         $('.navbar-nav').removeClass('scroll-navchange');
         $('.headerbar').removeClass('scroll-headerchange');
      }
  });
});


$(document).ready(function() {
   $('.navbar-toggler').click(function() {
     $('.menu-menu-1-container').toggleClass('act');
   });
 });

 

 