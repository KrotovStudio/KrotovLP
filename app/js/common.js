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

//  popup
    $(document).ready(function() {
        $('.popup').magnificPopup({
            type: 'inline',
            preloader: false,
            focus: '#name',

            // When elemened is focused, some mobile browsers in some cases zoom in
            // It looks not nice, so we disable it:
            callbacks: {
                beforeOpen: function() {
                    if($(window).width() < 700) {
                        this.st.focus = false;
                    } else {
                        this.st.focus = '#name';
                    }
                }
            }
        });
    });

//  E-mail Ajax Send
    $("form").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            $.magnificPopup.open({
                items: {
                    src: '.modal-thanks'
                }
            });
            setTimeout(function () {
                $.magnificPopup.close();
            }, 3000);
        }).error(function(){
            $.magnificPopup.open({
                items: {
                    src: '.modal-error'
                }
            });
            setTimeout(function () {
                $.magnificPopup.close();
            }, 3000);
        });
        return false;
    });

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

/* Маска для телефона */
$(document).ready(function(){
    $('input[type="tel"]').inputmask({
        showMaskOnHover: true
    });
});