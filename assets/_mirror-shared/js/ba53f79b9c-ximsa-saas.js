// @ts-nocheck
/* -----------------------------------------------------------------------------



File:           JS Core
Version:        1.0
Last change:    00/00/00 
-------------------------------------------------------------------------------- */
(function ($) {
	'use strict';

    jQuery(window).on('scroll', function() {
        if (jQuery(window).scrollTop() > 250) {
            jQuery('.xis-saas-header-section').addClass('sticky-on')
        } else {
            jQuery('.xis-saas-header-section').removeClass('sticky-on')
        }
    })

    /**
     * Background Contorl
     * @param {*} $scope 
     * @param {*} $ 
     */
    function saasBannerBg($scope, $) {
        $('[data-background]').each(function() {
            $(this).css('background-image', 'url('+ $(this).attr('data-background') + ')');
        });
    }
    function saasSponcorActive($scope, $) {
        $('.xis-saas-sponsor-slider').slick({
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 5,
            autoplay: true,
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
     * Service SLider
     * @param {*} $scope 
     * @param {*} $ 
     */
    function saasServiceActive($scope, $) {
        $('.xis-saas-service-slider').slick({
            dots: true,
            speed: 300,
            slidesToShow: 3,
            arrows: false,
            slidesToScroll: 1,
            responsive: [
            {
                breakpoint: 700,
                settings: {
                    arrows: false,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 800,
                settings: {
                    arrows: false,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            }
            ]
        });
    }

    function saasBlogPostActive($scope, $) {
        $(document).ready(function() {
            var $slider = $('.xis-saas-blog-slider');
            var $progressBar = $('.progress');
            var $progressBarLabel = $( '.slider__label' );

            $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
                var calc = ( (nextSlide) / (slick.slideCount-1) ) * 100;

                $progressBar
                .css('background-size', calc + '% 100%')
                .attr('aria-valuenow', calc );

                $progressBarLabel.text( calc + '% completed' );
            });

            $slider.slick({
                arrow: true,
                dots: true,
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                variableWidth: true,
                easing: 'swing',
                prevArrow: ".blg-left_arrow",
                nextArrow: ".blg-right_arrow",
                customPaging : function(slider, index) { 
                    var num = index + 1;
                    return '<span class="dot">'+ num +'</span>';
                },
                responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }

                ]
            });  
        });
    }

    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/saas-banner.default', saasBannerBg);
        elementorFrontend.hooks.addAction('frontend/element_ready/saas-steps.default', saasBannerBg);
        elementorFrontend.hooks.addAction('frontend/element_ready/saas-blog-.default', saasBannerBg);
        elementorFrontend.hooks.addAction('frontend/element_ready/saas-cta.default', saasBannerBg);
        elementorFrontend.hooks.addAction('frontend/element_ready/saas-service-.default', saasServiceActive);
        elementorFrontend.hooks.addAction('frontend/element_ready/saas-blog-.default', saasBlogPostActive);
        elementorFrontend.hooks.addAction('frontend/element_ready/saas-blog-.default', saasSponcorActive);
    });  
	

})(jQuery);