$( document ).ready(function() {

//    slick slider
    $('#portfolio-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 920,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    });

    $('#exerienced-slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 3,
        dots: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 920,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    });

    $('#story-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
    });

    $('#testimonials-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    arrows: false
                }
            }
        ]
    });

//    Close / open mobile menu
    $('.open-nav').click(function(){
        $('.main-nav').addClass('active');
    });
    $('.close-nav, a').click(function(){
        $('.main-nav').removeClass('active');
    });

//  pagescroll2id
    $("nav a").mPageScroll2id({
        offset:77,
        scrollSpeed: 600
    });

//  E-mail Ajax Send
    $("form").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            $('#popup').show();
            $('.popup').animate({
                top: '10%',
                opacity: 1
            }, 800 );
            $('.popup-sms').slideUp( 100 ).delay( 800 ).fadeIn( 400 );
        }).error(function(){
            alert("Error!");
        });
        return false;
    });

//  animate
    $("section > div").animated("fadeInUp", "fadeOutDown");

//  open / close plan
    $('.see').click(function(){
        $(this).parent().prev().find('.table-price-list').show();
        $(this).hide().next().css('display','inline-block');
    })

    $('.hide').click(function(){
        $(this).parent().prev().find('.table-price-list').hide();
        $(this).hide().prev().css('display','inline-block');
    })
});