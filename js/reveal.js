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

    $(".img_a").mouseenter(function(){
            if ($(this).parent('div').children('div.image').length) {
                $(this).parent('div').children('div.image').show();
            } else {
                var image_name=$(this).data('image');
                var imageTag='<div class="image" style="position:absolute; margin-top: -10%;">'
                +'<img src="'+image_name+'" alt="image" height="100""/>'
                +'</div>';
                $(this).parent('div').append(imageTag);
            }
        });

        $(".img_a").mouseleave(function(){
            $(this).parent('div').children('div.image').hide();
        });

    $(".img_b").mouseenter(function(){
            if ($(this).parent('div').children('div.image').length) {
                $(this).parent('div').children('div.image').show();
            } else {
                var image_name=$(this).data('image');
                var imageTag='<div class="image" style="position:absolute; margin-top: -10%;">'
                +'<img src="'+image_name+'" alt="image" height="200" style="filter: grayscale(100%);border-radius:10%;"/>'
                +'</div>';
                $(this).parent('div').append(imageTag);
            }
        });

        $(".img_b").mouseleave(function(){
            $(this).parent('div').children('div.image').hide();
        });

        $(".img_c").mouseenter(function(){
                if ($(this).parent('div').children('div.image').length) {
                    $(this).parent('div').children('div.image').show();
                } else {
                    var image_name=$(this).data('image');
                    var imageTag=
                    '<div class="image" style="position:absolute; margin-left: 5%; margin-top: -10%;">'
                    +'<img src="'+image_name+'" alt="image" height="200" style="border-radius:10%;"/>'
                    +'</div>';
                    $(this).parent('div').append(imageTag);
                }
            });

            $(".img_c").mouseleave(function(){
                $(this).parent('div').children('div.image').hide();
            });
