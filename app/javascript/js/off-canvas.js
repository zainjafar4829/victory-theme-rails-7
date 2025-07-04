document.addEventListener('turbo:load', function() {
  (function($) {
    'use strict';
    $(function() {
      $('[data-toggle="offcanvas"]').on("click", function () {
        $('.row-offcanvas').toggleClass('active');
      });
    });
  })(jQuery);
})
