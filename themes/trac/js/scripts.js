jQuery.noConflict();
(function( $ ) {
  $(function() {
    //enter custom code here
    var mobileMenu = {
  		button:$('header button'),
  		overlay:$('#c-mask'),
      newoverlay:$('.overlay'),
      page:$('.o-wrapper'),
      menu:$('#c-menu--push-right'),
  		init:function(){
  			mobileMenu.openClose();
  		},
  		openClose:function(){
  			mobileMenu.button.on('click',function(){
          console.log('in click');
  				if(!mobileMenu.page.hasClass('has-push-right')){
            console.log('true');
  					//open menu
  					mobileMenu.overlay.addClass('is-active');
            mobileMenu.menu.addClass('is-active');
            mobileMenu.page.addClass('has-push-right');
  				}
  			});

        mobileMenu.newoverlay.on('click',function(){
          console.log('over click');
          if(mobileMenu.page.hasClass('has-push-right')){
            console.log('over true');
            //close menu
            mobileMenu.overlay.removeClass('is-active');
            mobileMenu.menu.removeClass('is-active');
            mobileMenu.page.removeClass('has-push-right');
          }
        });
  		}
  	};
  	mobileMenu.init();

    $(window).load(function() {
      $('.flexslider').flexslider({
        animation: "slide"
      });
    });

  });
})(jQuery);