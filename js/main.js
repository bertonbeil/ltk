jQuery(document).ready( main() );

function main() {
  var menuBtn = $('button.hamburger'),
      sideMenu = $('div.menu'),
      blur = $('.Vidage');

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

  function contentOn() {
      var content = $('section.content');

      onBlur(content);
      conten.addClass('content__under');
  }

  // intro fade
  function introVideo() {
      var bgVideo = $('.Vidage');
          bgVideo.css('opacity', '1');
  }

  // blur
  function onBlur(elem) {
      this.e = elem;
      this.$elem = $(elem);
      console.log($elem);
      $elem.addClass('has-blur')
  }


  // inro
  function intro () {
    var header = $('header'),
        content = $('section.content'),
        player = $('footer'),
        menuBtn = $('button.hamburger'),
        sideMenu = $('div.menu'),
        video = $('.Vidage');

        setTimeout(function () {

            introVideo();
        }, 400);

        setTimeout(function () {
            onBlur(video);
            video.addClass('is-open');
            header.addClass('header__active');
            player.removeClass('footer__close')
                  .addClass('footer__mini');

            setTimeout(function () {
                menuBtn.addClass('is-active');
                sideMenu.addClass('menu__open');
                contentOn();
            }, 300);
        }, 4000);
    console.debug(player);
  }
  intro();


}
