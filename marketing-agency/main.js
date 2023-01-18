
    $(document).ready(function() {
        $(".services-container h3").on("mouseenter", function() {
            $(this).animate({
                fontSize: "1.5em",
                marginLeft: "10px"
            }, 200);
        });
        $(".services-container h3").on("mouseleave", function() {
            $(this).animate({
                fontSize: "1em",
                marginLeft: "0px"
            }, 200);
        });
    });
    $(document).ready(function() {
        // select the element you want to apply the effect to
        var $targetElement = $("#services h2");
        // initialize the animation properties
        var animationProperties = {
            fontSize: "2.8em",
            color: "#0088cc"
        };
        // use the animate() method to gradually change the element's CSS properties
        $targetElement.animate(animationProperties, 1800);
    });
$(document).ready(function() {
    $("body").hide().fadeIn(1800);
});
$(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
    $('.parallax-bg').css('top', -(scrollTop * 0.2) + 'px');
});

$(document).ready(function() {
    $(".service-title, .portfolio-title").hover(function() {
        $(this).animate({
            fontSize: "1.5em",
            color: "#0088cc"
        }, 300);
    }, function() {
        $(this).animate({
            fontSize: "1em",
            color: "#000"
        }, 300);
    });
});
