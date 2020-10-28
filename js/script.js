$(document).ready(function () {
  // Menu
  const item = $('.dropdown-submenu span');
  const show = $('.dropdown-menu-sub');

  show.each(function () {
    $(this).removeClass('show');

    item.on('click', function () {
      item.removeClass('active');
      $(this).addClass('active');
      show.each(function () {
        $(this).removeClass('show');
      });
      $(this).closest('.dropdown-submenu').find('.dropdown-menu-sub').addClass('show');
    });
  });

  function toggleDropdown(e) {
    const _d = $(e.target).closest('.dropdown'),
      _m = $('.dropdown-menu', _d);
    setTimeout(
      function () {
        const shouldOpen = e.type !== 'click' && _d.is(':hover');
        _m.toggleClass('show', shouldOpen);
        _d.toggleClass('show', shouldOpen);
        $('[data-toggle="dropdown"]', _d).attr('aria-expanded', shouldOpen);
      },
      e.type === 'mouseleave' ? 300 : 0,
    );
  }

  $('body')
    .on('mouseenter mouseleave', '.dropdown', toggleDropdown)
    .on('click', '.dropdown-menu a', toggleDropdown);

  /* not needed, prevents page reload for SO example on menu link clicked */
  // $('.dropdown a').on('click tap', (e) => e.preventDefault());
});

$(function () {
  $('.scroll-top').click(function () {
    $('html, body').animate(
      {
        scrollTop: 0,
      },
      1000,
    );
  });
});
$(window).scroll(function () {
  if ($(this).scrollTop() > 800) {
    $('.scroll-top').fadeIn();
  } else {
    $('.scroll-top').fadeOut();
  }
});
