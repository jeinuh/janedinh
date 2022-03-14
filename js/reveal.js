function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

 $(window).scroll(function(){
 $('.nav-link').toggleClass('scrolled', $(this).scrollTop() > 180);
 });

var initialSrc = "images/logo.png";
var scrollSrc = "images/logo2.png";

    $(window).scroll(function() {
       var value = $(this).scrollTop();
       if (value > 180)
          $(".logo-img").attr("src", scrollSrc);
       else
          $(".logo-img").attr("src", initialSrc);
    });

    $(document).ready(() => {
      $(document.body).on('click', '.card[data-clickable=true]', (e) => {
        var href = $(e.currentTarget).data('href');
        window.location = href;
      });
    });
