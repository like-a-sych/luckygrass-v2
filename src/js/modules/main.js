
var minOffset = 50;
window.onscroll = function () {
  let has_class = document.body.classList.contains("is_scrolled");

  if (minOffset < document.documentElement.scrollTop) {
    if (!has_class) {
      document.body.classList.add("is_scrolled");
    }
  } else if (has_class) {
    document.body.classList.remove("is_scrolled")

  }
}


// ЗАКРЫТЬ МОБИЛЬНОЕ МЕНЮ СВАЙПОМ

$(document).ready(function () {
  $("#offcanvasRight").swipe({
    allowPageScroll: "vertical",
    swipeStatus: function (event, phase, direction, distance, duration, fingerCount, fingerData) {
      if (phase == "move" && direction == "right") {
        $('#offcanvasRight').offcanvas('hide');
        return false;
      }
    }
  });
});


//Анимация кнопки
$(function () {
  $(".form-btn").click(function () {
    if ($(this).attr('disabled', true)) {
      $(this).addClass('hide-btn');
      $(".spin").removeClass('hide-check');
      $(".check-input").attr('checked', true);
      $(".check-input").attr('disabled', true);
      $(".form-control").attr('disabled', true);
    }
  });
});


var animationTiming = 500;

/* Add the class effect on button */
$('.button-effect').on('click', function (e) {
  e.preventDefault();
  var self = $(this),
    /* Get the width of button (if different buttons types) */
    btnWidth = self.outerWidth(),
    x = e.offsetX,
    y = e.offsetY;

  self.prepend('<span class="effect-wave"></span>');

  $('.effect-wave')
    .css({ 'top': y, 'left': x })
    .animate({
      opacity: '0',
      width: btnWidth * 2,
      height: btnWidth * 2
    }, animationTiming, function () {
      self.find('.effect-wave').remove();
    })

})

$(".card-block__column").on("click", ".btn-uni", function () {
  var e = String('Рассчитать стоисость для: ' + $(this).data("uniform"));
  $('#callback').find('#fr').val(e);
});




//ПЛАВНЫЙ СКРОЛЛ К ЯКОРЯМ

// Select all links with hashes
$('.to-anchor')
  .click(function (event) {
    $('#offcanvasRight').offcanvas('hide');

    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top - 50
        }, 500, function () {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

// подключение swiper
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay]);


const swiper = new Swiper(".main-slider", {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  initialSlide: 1,
  pagination: {
    el: ".main-pagination",
    dynamicBullets: true,
  },

});

const amateur = new Swiper(".amateur-slider", {

  navigation: {
    nextEl: ".amateur-next",
    prevEl: ".amateur-prev",
  },
  pagination: {
    el: ".amateur-pagination",
    dynamicBullets: false,
  },
});
const athlete = new Swiper(".athlete-slider", {

  navigation: {
    nextEl: ".athlete-next",
    prevEl: ".athlete-prev",
  },
  pagination: {
    el: ".athlete-pagination",
    dynamicBullets: false,
  },
});
const profi = new Swiper(".profi-slider", {

  navigation: {
    nextEl: ".profi-next",
    prevEl: ".profi-prev",
  },
  pagination: {
    el: ".profi-pagination",
    dynamicBullets: false,
  },
});



let init = false;

function swiperCard() {
  if (window.innerWidth >= 550) {
    if (!init) {
      init = true;
      const design = new Swiper(".design-slider", {
        slidesPerView: 1,
        spaceBetween: 16,
        freeMode: true,
        centeredSlides: true,
        navigation: {
          nextEl: ".design-next",
          prevEl: ".design-prev",
        },
        breakpoints: {
          550: {
            slidesPerView: 3,
            spaceBetween: 32,
            centeredSlides: false,
          },
        }

      });
    }
  } else if (init) {
    design.destroy();
    init = false;
  }
}
swiperCard();
window.addEventListener("resize", swiperCard);
