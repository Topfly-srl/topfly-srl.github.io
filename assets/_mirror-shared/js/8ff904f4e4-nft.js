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
            jQuery('.xis-nft-header-section').addClass('sticky-on')
        } else {
            jQuery('.xis-nft-header-section').removeClass('sticky-on')
        }
    })

    if($('.xis-nft-product-select-option select').length) {
        $(document).ready(function() {
            $('.xis-nft-product-select-option select').niceSelect();
        });
    };

    function nftProductSlider($scope, $) {
        $('.xis-nft-live-bid-slider').slick({
            arrow: true,
            dots: false,
            infinite: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            variableWidth: true,
            prevArrow: ".liv-bid_left_arrow",
            nextArrow: ".liv-bid_right_arrow",
            responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
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
    }
    function countDownActive($scope, $) {
        $('.countdown_timer').each(function(){
            $('[data-countdown]').each(function() {
                var $this = $(this), finalDate = $(this).data('countdown');
                $this.countdown(finalDate, function(event) {
                    var $this = $(this).html(event.strftime(''
                        + '<li class="days_count"><strong>%D</strong><span>Days</span></li>'
                        + '<li class="hours_count"><strong>%H</strong><span>Hours</span></li>'
                        + '<li class="minutes_count"><strong>%M</strong><span>Mins</span></li>'
                        + '<li class="seconds_count"><strong>%S</strong><span>Secs</span></li>'));
                });
            });
        });	
    }
    function dataBGNFT($scope, $) {
        $('[data-background]').each(function() {
            $(this).css('background-image', 'url('+ $(this).attr('data-background') + ')');
        });
    }
    function productFilter($scope, $) {
        // external js: isotope.pkgd.js
		var $grid = $('.grid').isotope({
			itemSelector: '.xis-nft-product'
		});

        // store filter for each group
        var filters = {};

        $('.filters').on( 'change', function( event ) {
            var $select = $( event.target );
        // get group key
        var filterGroup = $select.attr('value-group');
        // set filter for group
        filters[ filterGroup ] = event.target.value;
        // combine filters
        var filterValue = concatValues( filters );
        // set filter for Isotope
        $grid.isotope({ filter: filterValue });
        });

        // flatten object by concatting values
        function concatValues( obj ) {
            var value = '';
            for ( var prop in obj ) {
                value += obj[ prop ];
            }
            return value;
        }
    }

    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/nft_live_auction.default', nftProductSlider);
        elementorFrontend.hooks.addAction('frontend/element_ready/nft_live_auction.default', countDownActive);
        elementorFrontend.hooks.addAction('frontend/element_ready/nft-newslater.default', dataBGNFT);
        elementorFrontend.hooks.addAction('frontend/element_ready/nft_product.default', productFilter);
    });  
	

})(jQuery);