// @ts-nocheck
/* -----------------------------------------------------------------------------



File:           JS Core
Version:        1.0
Last change:    00/00/00 
-------------------------------------------------------------------------------- */
(function ($) {
	'use strict';

    /**
     * Parallax Effect
     */
    if ($('.scene').length > 0 ) {
        $('.scene').parallax({
            scalarX: 10.0,
            scalarY: 10.0,
        }); 
    }

    // Mobile Menu
    $('.open_mobile_menu').on("click", function() {
        $('.mobile_menu_wrap').toggleClass("mobile_menu_on");
    });
    $('.open_mobile_menu').on('click', function () {
        $('body').toggleClass('mobile_menu_overlay_on');
    });
    if($('.mobile_menu li.dropdown ul').length){
        $('.mobile_menu li.dropdown').append('<div class="dropdown-btn"><span class="fas fa-caret-right"></span></div>');
        $('.mobile_menu li.dropdown .dropdown-btn').on('click', function() {
            $(this).prev('ul').slideToggle(500);
        });
    }
    $(".dropdown-btn").on("click", function () {
        $(this).toggleClass("toggle-open");
    });
    // Sticky Header
    jQuery(window).on('scroll', function() {
        if (jQuery(window).scrollTop() > 250) {
            jQuery('.xisma-header-section').addClass('sticky-on')
        } else {
            jQuery('.xisma-header-section').removeClass('sticky-on')
        }
    })

    /**
     * Animation
     */
    if($('.wow').length){
        var wow = new WOW(
        {
            boxClass:     'wow',
            animateClass: 'animated',
            offset:       0,
            mobile:       true,
            live:         true
        }
        );
        wow.init();
    }

    /**
     * Banner Background
     * @param {*} $scope 
     * @param {*} $ 
     */
    function bannerDataBackground($scope, $) {
        $('[data-background]').each(function() {
            $(this).css('background-image', 'url('+ $(this).attr('data-background') + ')');
        });
    }
    /**
     * Banner Background
     * @param {*} $scope 
     * @param {*} $ 
     */
    function bannerDgiDataBackground($scope, $) {
        $('[data-background]').each(function() {
            $(this).css('background-image', 'url('+ $(this).attr('data-background') + ')');
        });
    }


    /**
	 * Progress bar Active
	 */
	if ($(".progress-bar").length) {
		var $progress_bar = $('.progress-bar');
		$progress_bar.appear2();
		$(document.body).on('appear2', '.progress-bar', function() {
			var current_item = $(this);
			if (!current_item.hasClass('appeared')) {
				var percent = current_item.data('percent');
				current_item.css('width', percent + '%').addClass('appeared').parent().append('<span>' + percent + '%' + '</span>');
			}
			
		});
	};

    jQuery('.counter').counterUp({
        delay: 100,
        time: 4000,
    });

    /**
     * Testimonial Carousel Active
     * @param {*} $scope 
     * @param {*} $ 
     */
    function xisTestimonialActive($scope, $) {
        $('.xis-testimonial-slider').slick({
            centerMode: true,
            dots: false,
            infinite: true,
            speed: 1500,
            autoplay: false,
            slidesToShow: 3,
            arrows: false,
            vertical: true,
            verticalSwiping: true,
            focusOnSelect: true,
        });
    }

    /** 
     * Sponsor Carousel
     * @param {*} $scope 
     * @param {*} $ 
     */
    function xisClientsActive($scope, $) {
        $('.xis-sponsor-item-wrapper').slick({
            dots: false,
            infinite: false,
            speed: 300,
            slidesToShow: 5,
            autoplay: true,
            arrows: false,
            responsive: true,
            slidesToScroll: 1,
            responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    infinite: true,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    infinite: true,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }

            ]
        });
    }
    /** 
     * Sponsor Carousel
     * @param {*} $scope 
     * @param {*} $ 
     */
    function xisDgitClientActive($scope, $) {
        $('.xis-dia-banner-sponsor').slick({
            dots: false,
            infinite: true,
            speed: 300,
            arrows: false,
            slidesToShow: 4,
            autoplay: true,
            responsive: true,
            slidesToScroll: 1,
            responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 5,
                    infinite: true,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 5,
                    infinite: true,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }

            ]
        });
    }
    if ($(".odometer").length) {
        $('.odometer').appear2();
        $(document.body).on('appear2', '.odometer', function(e) {
            var odo = $(".odometer");
            odo.each(function() {
                var countNumber = $(this).attr("data-count");
                $(this).html(countNumber);
            });
            window.odometerOptions = {
                format: 'd',
            };
        });
    }

    function digpayTestimonialActive($scope, $) {
        $('.testimonial-carousel-three').owlCarousel({
            //animateOut: 'fadeOut',
            //animateIn: 'fadeIn',
            loop:true,
            margin:0,
            nav:true,
            //autoHeight: true,
            smartSpeed: 500,
            autoplay: 6000,
            navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
            responsive:{
                0:{
                    items:1,
                    margin:15
                },
                600:{
                    items:1
                },
                800:{
                    items:1
                },
                1024:{
                    items:1
                },
                1200:{
                    items:1
                },
                1400:{
                    items:1
                }
            }
        });  
    }

        $('.sponsors-carousel-two').owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            smartSpeed: 500,
            autoplay: true,
            autoplay: 4000,
            navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
            responsive:{
                0:{
                    items:1
                },
                480:{
                    items:2
                },
                600:{
                    items:3
                },
                800:{
                    items:4
                },
                1024:{
                    items:5
                },
                1200:{
                    items:5
                }
            }
        });
    function fintechSponcor($scope, $) {
        $('.sponsors-carousel-two').owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            smartSpeed: 500,
            autoplay: 4000,
            navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
            responsive:{
                0:{
                    items:1
                },
                480:{
                    items:2
                },
                600:{
                    items:3
                },
                800:{
                    items:4
                },
                1024:{
                    items:5
                },
                1200:{
                    items:5
                }
            }
        });   
    }
    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/xim-bank-banner.default', bannerDataBackground);
        elementorFrontend.hooks.addAction('frontend/element_ready/banking-testimonial-item.default', xisTestimonialActive);
        elementorFrontend.hooks.addAction('frontend/element_ready/banking-clients-logo.default', xisClientsActive);
        elementorFrontend.hooks.addAction('frontend/element_ready/xim-digital-banner.default', bannerDgiDataBackground);
        elementorFrontend.hooks.addAction('frontend/element_ready/xim-digital-banner.default', xisDgitClientActive);
        elementorFrontend.hooks.addAction('frontend/element_ready/digpay_testimonials.default', digpayTestimonialActive);
        elementorFrontend.hooks.addAction('frontend/element_ready/fintech_sponsor.default', fintechSponcor);
    });  
	

})(jQuery);