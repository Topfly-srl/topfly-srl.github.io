// @ts-nocheck
/* -----------------------------------------------------------------------------



File:           JS Core
Version:        1.0
Last change:    00/00/00 
-------------------------------------------------------------------------------- */
(function ($) {
	'use strict';

    function xisCriptoCoinActive($scope, $) {
        // Three Item Carousel
        if ($('.three-item-carousel').length) {
            $('.three-item-carousel').owlCarousel({
                //animateOut: 'fadeOut',
                //animateIn: 'fadeIn',
                loop:true,
                margin:30,
                nav:true,
                //autoHeight: true,
                smartSpeed: 500,
                autoplay: 6000,
                navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:2
                    },
                    800:{
                        items:3
                    },
                    1024:{
                        items:3
                    },
                    1200:{
                        items:3
                    },
                    1400:{
                        items:3
                    }
                }
            });    		
        }
    }
    /**
     * Testimonial Active
     * @param {*} $scope 
     * @param {*} $ 
     */
    function xisCriptoTestimonialActive($scope, $) {
        // Single Item Carousel
        if ($('.single-item-carousel').length) {
            $('.single-item-carousel').owlCarousel({
                //animateOut: 'fadeOut',
                //animateIn: 'fadeIn',
                loop:true,
                margin:30,
                nav:true,
                //autoHeight: true,
                smartSpeed: 500,
                autoplay: 6000,
                navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
                responsive:{
                    0:{
                        items:1
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
	}
    /**
     * sponsors Active
     * @param {*} $scope 
     * @param {*} $ 
     */
    function xisCriptoSponsorsActive($scope, $) {
        // Sponsors Item Carousel
        if ($('.sponsors-carousel').length) {
            $('.sponsors-carousel').owlCarousel({
                loop:true,
                margin:0,
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
                        items:6
                    }
                }
            });    		
        }
	}

    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/xim-crypto-coin.default', xisCriptoCoinActive);
        elementorFrontend.hooks.addAction('frontend/element_ready/crypto-testimonial-section.default', xisCriptoTestimonialActive);
        elementorFrontend.hooks.addAction('frontend/element_ready/crypto-clients-logo.default', xisCriptoSponsorsActive);
    });  
	

})(jQuery);