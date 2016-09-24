jQuery(document).ready( main() );


function main() {
  var menuBtn = $('button.hamburger'),
      sideMenu = $('div.menu'),
      blur = $('#open-blur');

  menuBtn.on('click', function() {

      if (menuBtn.hasClass('is-active')) {
          closeMenu(menuBtn, sideMenu);
      } else {
          showMenu(menuBtn, sideMenu);
      }

      console.debug('click');
  });

  blur.on('click', function () {
    if( blur.hasClass('is-open') )
        closeMenu(menuBtn, sideMenu);
  });


  function showMenu(hamb, menu) {
      $(hamb).addClass('is-active');
      $(menu).addClass('menu__open');
      blur.addClass('is-open');
      blurElement(blur, 4);
  }

  function closeMenu(hamb, menu) {
      $(hamb).removeClass('is-active');
      $(menu).removeClass('menu__open');
      blur.removeClass('is-open');
      blurElement(blur, 0);
  }

  function blurElement(element, size) {
      var filterVal = 'blur(' + size + 'px)';
      $(element)
          .css('filter', filterVal)
          .css('webkitFilter', filterVal)
          .css('mozFilter', filterVal)
          .css('oFilter', filterVal)
          .css('msFilter', filterVal);
  }

}
