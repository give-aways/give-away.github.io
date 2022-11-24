(function ($) {
  $(function () {
    $(".sidenav").sidenav();
    $(".parallax").parallax();
    let twoDaysFromNow = new Date().getTime() / 1000 + 3600 * 2 + 1;
    let flipdown = new FlipDown(twoDaysFromNow, {
      theme: "light",
    })
      .start()
      .ifEnded(() => {
        console.log("The countdown has ended!");
      });
  }); // end of document ready
})(jQuery); // end of jQuery name space
