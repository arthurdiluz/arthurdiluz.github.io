(function ($) {
  "use strict";

  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    const p = "/^//";

    if (
      location.pathname.replace(p, "") == this.pathname.replace(p, "") &&
      location.hostname == this.hostname
    ) {
      let target = $(this.hash);

      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");

      if (target.length) {
        $("html, body").animate(
          { scrollTop: target.offset().top },
          1000,
          "easeInOutExpo"
        );
        return false;
      }
    }
  });

  $(".js-scroll-trigger").click(function () {
    $(".navbar-collapse").collapse("hide");
  });

  $("body").scrollspy({ target: "#sideNav" });
})(jQuery);
