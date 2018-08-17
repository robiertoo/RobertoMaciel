$(document).ready(function () {
    $(document).on("scroll", onScroll);
    $('.navbar .menu a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 10
        }, 1300, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
    $(window).bind("resize", function () {
        console.log($(this).width());
        if ($(this).width() < 768) {
            $("#formacao .linha .formacao").removeClass("col bloco");
            $("#formacao .linha").removeClass("row");
        } else {
            $("#formacao .linha .formacao").addClass("col bloco");
            $("#formacao .linha").addClass("row");
        }
    });
    if ($(window).width() < 768) {
        $("#formacao .linha .formacao").removeClass("col bloco");
        $("#formacao .linha").removeClass("row");
    }
    function onScroll() {
        var scrollPos = $(document).scrollTop();
        $('.navbar .menu a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos + 231 && refElement.position().top + refElement.height() > scrollPos) {
                $('.navbar .menu a').removeClass("active");
                currLink.addClass("active");
                console.log(refElement.position());
            } else {
                currLink.removeClass("active");
            }
        });
    }
});