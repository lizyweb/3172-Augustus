document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  // Sticky Navbar
  // $(window).scroll(function () {
  //   if ($(this).scrollTop() > 300) {
  //       $('.sticky-top').addClass('shadow-sm').css('top', '0px');
  //   } else {
  //       $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
  //   }
  // });

  // Spinner
  var spinner = function () {
    setTimeout(function () {
        if ($('#spinner').length > 0) {
            $('#spinner').removeClass('show');
        }
    }, 1);
  };
  spinner();

  (function ($) {
    
    // ****************************
    // :: 2.0 ClassyNav Active Code
    // ****************************

    if ($.fn.classyNav) {
        $('#robertoNav').classyNav();
    }

    })(jQuery);


    new Swiper('.clients-slider', {
      speed: 4000,
      loop: true,
      autoplay: {
        delay: 0,
        disableOnInteraction: false
      },
      slidesPerView: 'auto',
      spaceBetween: 40,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      breakpoints: {
        320: {
          slidesPerView: 3,
          spaceBetween: 40
        },
        480: {
          slidesPerView: 3,
          spaceBetween: 60
        },
        640: {
          slidesPerView: 4,
          spaceBetween: 80
        },
        992: {
          slidesPerView: 6,
          spaceBetween: 120
        }
      },
      speed: 3000,
      autoplay: {
        delay: 0,
        disableOnInteraction: false
      },
      allowTouchMove: false
    });

    new Swiper('.clients-slider-2', {
      speed: 4000, // Speed of smooth scrolling
      loop: true,
      autoplay: {
        delay: 0, // No delay between slides
        disableOnInteraction: false,
        reverseDirection: true // Set to true for Right-to-Left scrolling
      },
      rtl: false, // Set to true for RTL (Right-to-Left)
      direction: 'horizontal', // 'horizontal' for left/right, 'vertical' for up/down
      slidesPerView: 'auto',
      spaceBetween: 40,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      breakpoints: {
        320: {
          slidesPerView: 3,
          spaceBetween: 40
        },
        480: {
          slidesPerView: 3,
          spaceBetween: 60
        },
        640: {
          slidesPerView: 4,
          spaceBetween: 80
        },
        992: {
          slidesPerView: 6,
          spaceBetween: 120
        }
      },
      speed: 3000, // Speed of continuous scrolling
      allowTouchMove: false // Disable manual sliding for smooth effect
    });
    


});

document.addEventListener("DOMContentLoaded", function () {
  // Create a new button element
  var closeButton = document.createElement("button");
  closeButton.type = "button";
  closeButton.className = "close d-flex align-items-center justify-content-center";
  closeButton.setAttribute("data-dismiss", "modal");
  closeButton.setAttribute("aria-label", "Close");

  // Create an icon element for the close button
  var closeIcon = document.createElement("i");
  closeIcon.className = "bx bx-window-close";
  closeIcon.setAttribute("aria-hidden", "true");

  // Append the icon to the button
  closeButton.appendChild(closeIcon);

  // Find the modal content and append the close button
  var modalContent = document.querySelector("#exampleModal .modal-content");
  if (modalContent) {
      modalContent.insertBefore(closeButton, modalContent.firstChild);

      // Attach a click event listener to close the modal
      closeButton.addEventListener("click", function () {
          $('#exampleModal').modal('hide');
      });
  }
});