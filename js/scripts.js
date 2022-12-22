$(document).ready(function(){

	//phone masked
	$('input[type="tel"]').mask("+7 (999) 999-99-99",{placeholder:"+7 (___) ___-__-__"});
	$('input[type="tel"]').on('click', function() {
		$(this).setCursorPosition(4);
	})
	$.fn.setCursorPosition = function(pos) {
	  this.each(function(index, elem) {
	    if (elem.setSelectionRange) {
	      elem.setSelectionRange(pos, pos);
	    } else if (elem.createTextRange) {
	      var range = elem.createTextRange();
	      range.collapse(true);
	      range.moveEnd('character', pos);
	      range.moveStart('character', pos);
	      range.select();
	    }
	  });
	  return this;
	};

    
    //popup block
	$('.js-popup-wrap .js-btn-toggle').on('click', function() {
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
			$('body').removeClass('menu-show');
		} else {
			$('.js-popup-wrap:not(.no-close) .js-btn-toggle').removeClass('active');
			$(this).addClass('active');
			if ($(this).parent().hasClass('popup-menu-wrap')) {
				$('body').addClass('menu-show');
			}
		}
		return false;
	})
	$('.js-popup-wrap .js-btn-close').on('click', function() {
		$(this).parents('.js-popup-wrap').children('.js-btn-toggle').removeClass('active');
		$('body').removeClass('menu-show');
		return false;
	})
	$(document).click(function(event) {
	    if ($(event.target).closest(".js-popup-block").length) return;
	    $('.js-popup-wrap:not(.no-close) .js-btn-toggle').removeClass('active');
	    $('body').removeClass('menu-show');
	    event.stopPropagation();
	});
	$('.js-popup-wrap').each(function() {
		if ($(this).hasClass('js-popup-select')) {
			// alert(1)
			if ($(this).find('.js-popup-block').find('.active').length>0) {} else {
				$(this).find('.js-popup-block').find('li').eq(0).children('a').addClass('active');
			}
			var currentSelect = $(this).find('.js-popup-block').find('.active').html();
			$(this).find('.js-btn-toggle').html(currentSelect);
		}
	})
	$('.js-popup-wrap.js-popup-select .js-popup-block a').on('click', function() {
		if ($(this).hasClass('active')) {} else {
			$(this).parents('.js-popup-wrap').find('.js-popup-block').find('.active').removeClass('active');
			$(this).addClass('active');
		}
		$('.js-popup-wrap').each(function() {
			if ($(this).hasClass('js-popup-select')) {
				if ($(this).find('.js-popup-block').find('.active').length>0) {} else {
					$(this).find('.js-popup-block').find('li').eq(0).children('a').addClass('active');
				}
				var currentSelect = $(this).find('.js-popup-block').find('.active').html();
				$(this).find('.js-btn-toggle').html(currentSelect);
			}
		})
		$(this).parents('.js-popup-wrap').find('.js-btn-toggle').removeClass('active');
		return false;
	})

    //animation
    if (!!$('.item-animation').offset()) {
        let sTop = $(window).scrollTop() + $(window).innerHeight();
        $('.item-animation').each(function () {
            if ($(this).offset().top < sTop) {
                $(this).addClass('item-active')
            }
        })
    
        $(window).scroll(function () {
            let sTop = $(window).scrollTop() + $(window).innerHeight() + 50;
            $('.item-animation').each(function () {
                if ($(this).offset().top < sTop) {
                    $(this).addClass('item-active')
                }
            })
        });
    }

    //tooltip
    $('.js-tooltip').tooltip({
        track: true,
        //position: {my: "center center", at: "center top-10"}
    })
    $(document).on('click', '.js-tooltip', function () {
        if ($(window).innerWidth() < 1024) {
            $(this).tooltip({});
            $(this).tooltip("open");
        }
    })
    
    //mobile menu
    $('.popup-menu-wrap li ul').each(function () {
        $(this).parent().addClass('submenu');
    })
    $('.popup-menu-wrap li a').on('click', function () {
        if ($(this).next('ul').length > 0) {
            if ($(window).innerWidth() < 1024) {
                if ($(this).parent().hasClass('open')) {
                    $(this).parent().removeClass('open').children('ul').slideUp(200);
                } else {
                    $('.popup-menu-wrap li.open').removeClass('open').children('ul').slideUp(200);
                    $(this).parent().addClass('open').children('ul').slideDown(200);
                }
                return false;
            }
        }
    })

	//tabs
	$('.js-tabs-nav').each(function() {
		$('.js-tab-block[data-tab*="'+$(this).find('.active').attr('data-tab')+'"]').addClass('active');
	})
	$('.js-tab-title').each(function() {
		if ($(this).hasClass('active')) {
			$(this).next('.js-tab-content').show(0);
		}
	})
	$('.js-tabs-nav li a').on('click', function() {
		if ($(this).hasClass('active')) {} else {
			$('.js-tab-block').removeClass('active');
			$(this).parents('.js-tabs-nav').find('.active').removeClass('active');
			$(this).addClass('active');
			$('.js-tabs-nav').each(function() {
				$('.js-tab-block[data-tab*="'+$(this).find('.active').attr('data-tab')+'"]').addClass('active');
			})
		}
		return false;
	})
	$('.js-tab-title').on('click' , function() {
		if ($(this).hasClass('active')) {
			$(this).removeClass('active').next('.js-tab-content').slideUp(200);
		} else {
			$(this).addClass('active').next('.js-tab-content').slideDown(200);
		}
	})


    //tiles-slider-box
    if (!!$('.tiles-slider-box').offset()) {
        $('.tiles-slider-box .slider').slick({
            dots: false,
            slidesToShow: 3,
            variableWidth: false,
            infinite: true,
            adaptiveHeight: false,
            prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-prev"></span>',
            nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-next"></span>',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        prevArrow: false,
                        nextArrow: false,
                        dots: true,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        prevArrow: false,
                        nextArrow: false,
                        dots: true,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        prevArrow: false,
                        nextArrow: false,
                        dots: true,
                    }
                },
            ]
        });
    }

    //main-slider-box
    if (!!$('.main-slider-box').offset()) {
        $('.main-slider-box .slider').slick({
            dots: true,
            slidesToShow: 1,
            variableWidth: false,
            infinite: true,
            adaptiveHeight: false,
            autoplay: true,
            autoplaySpeed: 5000,
            speed: 1000,
            prevArrow: false,
            nextArrow: false,
            fade: true,
        });
    }
    $('.main-slider-box .elm-photo').hover(function() {
        $('.main-slider-box').removeClass('slider-hover');
    })
    $('.main-slider-box .elm-photo, .main-slider-box .slick-dots button').mouseover(function() {
        $('.main-slider-box').addClass('slider-hover');
    })


    //gallery-slider-box
    if (!!$('.gallery-slider-box').offset()) {
        $('.gallery-slider-box .slider').slick({
            dots: false,
            slidesToShow: 1,
            variableWidth: false,
            infinite: false,
            adaptiveHeight: false,
            rows: 1,
            initialSlide: 4,
            swipeToSlide: true,
            prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-prev"></span>',
            nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-next"></span>',
        });
        $('.gallery-slider-box').on('click', '.slick-slide:not(.slick-active)', function() {
            if ($(this).prev('.slick-active').length>0) {
                $('.gallery-slider-box .ico-arrow-next').click();
            } else {
                $('.gallery-slider-box .ico-arrow-prev').click();
            }
            return false;
        })
    }

    //swipebox
    $('[data-swipebox]').swipebox();


    
	
});


