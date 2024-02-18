
/** 
 * 1 ==> Preloader
 * 2 ==> Header All Functions Here
    2.1 ==> Menu Icon
    2.2 ==> Color Settings
    2.3 ==> Mobile Menu 
    2.4 ==> Mobile Menu V2
    2.4 ==> Sticky Header

 * 3 ==> Sliders All Functions Here
    3.1 ==> Owl Carousel Custom Js
    3.2 ==> Carousel Slider Icon
        3.2.1 ==> Short Code Slider 01
        3.2.2 ==> Short Code Slider 02
        3.2.3 ==> Short Code testimonial-carousel-02
        3.2.4 ==> Short Code testimonial-carousel-03
        3.2.5 ==> Short Code testimonial-carousel-03

 * 4 ==> countDown_clock
 * 5 ==> Nice Select 
 * 6 ==> Accordion
 * 7 ==> Counter Up
 * 8 ==> magnificPopup
 * 9 ==> Isotope Gallery 
 * 10 ==> twentytwenty Image
 * 11 ==> Nab Tab
 * 12 ==> All Vanilla Functions Here
 *  12.1 ==> Dark Mode Activation
**/

// Preloader
window.onload = function(){
    var el = document.getElementById('preloader');
    el.style.display = 'none';
};

(function($) {
    "use strict";

    var allfunctions = {
        // Menu Icon 
        menu_icon: function() {
            $('.main-menu li,.main-menu-v2 li').each(function() {
                if ($(this).children('.sub-menu,.mega-menu').length) {
                    $(this).children('a').append(`
                        <svg class="fill-current text-text-pragraph dark:text-white transition-all duration-300" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.7185 0.888352C11.7224 0.715183 11.6722 0.545129 11.5749 0.401833C11.4775 0.258537 11.3379 0.149119 11.1756 0.0887911C11.0132 0.0284637 10.8361 0.0202246 10.6688 0.0652188C10.5016 0.110213 10.3526 0.206205 10.2424 0.339849L5.87388 5.43913L1.50693 0.339849C1.43899 0.247401 1.35273 0.169977 1.25347 0.112428C1.15421 0.0548779 1.04412 0.0184419 0.930128 0.00540088C0.816139 -0.00764019 0.70071 0.00299492 0.591022 0.0366401C0.481335 0.0702852 0.379742 0.126215 0.292671 0.200928C0.2056 0.275642 0.13497 0.367528 0.0850553 0.470833C0.03514 0.574138 0.00710484 0.686638 0.0026817 0.801284C-0.00174145 0.915931 0.0174884 1.03026 0.0592956 1.1371C0.101102 1.24394 0.164517 1.34101 0.245573 1.42221L5.24075 7.26042C5.31899 7.3521 5.4161 7.42573 5.52555 7.47621C5.63499 7.52669 5.75412 7.55283 5.87465 7.55283C5.99518 7.55283 6.1143 7.52669 6.22375 7.47621C6.3332 7.42573 6.4304 7.3521 6.50864 7.26042L11.5086 1.42221C11.6396 1.27472 11.7141 1.08556 11.7187 0.888352L11.7185 0.888352Z"/>
                        </svg>                    
                    `);
                }
            });
        },

        // Color Settings
        colors_popup: function() {

            var header_settings_btn = $('.header-settings'),
            header_settings_wrap = $('.header-settings-wrap');

            header_settings_btn.on('click', function() {
                header_settings_wrap.toggleClass('settings-wrap-active');
            });  

            $(document).on('click', function(event){
                if(!header_settings_btn.is(event.target) && !header_settings_btn.has(event.target).length) {
                    header_settings_wrap.removeClass('settings-wrap-active');
                }
            }) 
        },  

        // Mobile Menu 
        mobile_menu: function(){
            $('.hamburger').on('click', function(e){
                e.stopPropagation();
                e.preventDefault();
                $('.main-menu-wrap').addClass('mobile-meni-active')
                $('body').addClass('overflow-hidden')
            })
            $('.menu-close').on('click', function(){
                $('.main-menu-wrap').removeClass('mobile-meni-active')
                $('body').removeClass('overflow-hidden')
                $('.main-menu li').removeClass('active').find('li.active').removeClass('active');
                $('.main-menu li').children('.sub-menu,.mega-menu').slideUp().parents('li').siblings().find('.sub-menu,.mega-menu').slideUp();
            })
            $('.main-menu li').on('click', function(e) {
                e.stopPropagation();
                $(this).children('.sub-menu,.mega-menu').slideToggle().parents('li').siblings().find('.sub-menu,.mega-menu').slideUp();
                $(this).toggleClass('active').siblings().removeClass('active').find('li.active').removeClass('active');
            });
        },

        // Mobile Menu V2
        mobile_menu_v2: function(){
            var menu = $('.main-menu-v2 li');
            var menu_wrap = $('.main-menu-wrap-v2');
            var menu_close =  $('.menu-close');
            var hamburger =  $('.hamburger-2');

            hamburger.on('click', function(e){
                e.stopPropagation();
                menu_wrap.addClass('menu-active')
                $('body').addClass('menu-overlay')
            });
            menu.on("click", function(e) {
                e.stopPropagation();
                $(this).children('.sub-menu,.mega-menu').slideToggle().parents('li').siblings().find('.sub-menu,.mega-menu').slideUp();
                $(this).toggleClass('active').siblings().removeClass('active').find('li.active').removeClass('active');
            });

            menu_close.on('click', function() {
                menu_wrap.removeClass('menu-active')
                $('body').removeClass('menu-overlay')
                menu.removeClass('active').find('li.active').removeClass('active');
                menu.children('.sub-menu,.mega-menu').slideUp().parents('li').siblings().find('.sub-menu,.mega-menu').slideUp();
            });

            $(document).on('click', function(event){
                if(!menu_wrap.is(event.target) && !menu_wrap.has(event.target).length) {
                    menu_wrap.removeClass('menu-active')
                    $('body').removeClass('menu-overlay')
                    menu.removeClass('active').find('li.active').removeClass('active');
                    menu.children('.sub-menu,.mega-menu').slideUp().parents('li').siblings().find('.sub-menu,.mega-menu').slideUp();
                }
            }) 
        },

        // Owl Carousel Custom Js     
        owl_custom_js: function () {
            var owlSelector = $(".owl-carousel");
            owlSelector.each(function() {
                var option = {
                    items: 1,
                    margin: 30,
                    loop: false,
                    slideBy: 1,
                    center: false,
                    mousedrag: true,
                    touchdrag: true,
                    pulldrag: true,
                    nav: false,
                    dots: false,
                    dotsdata: false,
                    autoplay: true,
                    smartspeed: 650,
                    animateout: 'fadeOut',
                    animatein: null,
                    autoHeight: true,
                    autoWidth: true,
                    xs: 1.,
                    sm: 1,
                    md: 1,
                    lg: 1,
                    xl: 1,
                };
                for (var k in option) {
                    if (option.hasOwnProperty(k)) {
                        if ($(this).attr("data-carousel-" + k) != null) {
                            option[k] = $(this).data("carousel-" + k);
                        }
                    }
                }

                $(this).owlCarousel({
                    items: option.items,
                    slideBy: option.slideBy,
                    margin: option.margin,
                    loop: option.loop,
                    center: option.center,
                    mouseDrag: option.mousedrag,
                    touchDrag: option.touchdrag,
                    pullDrag: option.pulldrag,
                    nav: option.nav,
                    navText: option.navtext,
                    dots: option.dots,
                    dotsData: option.dotsdata,
                    autoplay: option.autoplay,
                    smartSpeed: option.smartspeed,
                    animateIn: option.animatein,
                    animateOut: option.animateout,
                    autoHeight: option.autoHeight,
                    responsive: { // Responsive breakpoints Set-up
                        0: {
                            items: option.xs,
                        },
                        400: {
                            items: option.sm,
                        },
                        640: {
                            items: option.md,
                        },
                        1024: {
                            items: option.lg,
                        },
                        1280: {
                            items: option.xl,
                        },
                        1400: {
                            items: option.items,
                        },
                    },
                });
                // Go to the next item
                $(".next").on("click", function() {
                    owlSelector.trigger("next.owl.carousel");
                });
                // Go to the previous item
                $(".prev").on("click", function() {
                    owlSelector.trigger("prev.owl.carousel", [300]);
                });
            });
        },

        // Carousel Slider Icon
        slider_icon: function() {
            // Slider 01
            var s_slider1 = $('.s_slider1')
            $(".s_slider1_next").on("click", function() {
                s_slider1.trigger("next.owl.carousel");
            });
            $(".s_slider1_prev").on("click", function() {
                s_slider1.trigger("prev.owl.carousel", [300]);
            });

            // Slider 02
            var s_slider2 = $('.s_slider2')
            $(".s_slider2_next").on("click", function() {
                s_slider2.trigger("next.owl.carousel");
            });
            $(".s_slider2_prev").on("click", function() {
                s_slider2.trigger("prev.owl.carousel", [300]);
            });

            // testimonial carousel-02
            var st_slider1 = $('.st_slider1')
            $(".st_slider1_next").on("click", function() {
                st_slider1.trigger("next.owl.carousel");
            });
            $(".st_slider1_prev").on("click", function() {
                st_slider1.trigger("prev.owl.carousel", [300]);
            });

            // Testimonial-carousel-03
            var st_slider2 = $('.st_slider2')
            $(".st_slider2_next").on("click", function() {
                st_slider2.trigger("next.owl.carousel");
            });
            $(".st_slider2_prev").on("click", function() {
                st_slider2.trigger("prev.owl.carousel", [300]);
            });

            // Testimonial-carousel-03
            var sc_slider1 = $('.client-slider-01')
            $(".sc_slider1_next").on("click", function() {
                sc_slider1.trigger("next.owl.carousel");
            });
            $(".sc_slider1_prev").on("click", function() {
                sc_slider1.trigger("prev.owl.carousel", [300]);
            });
        },

        // countDown clock
        countDown_clock: function(){
            if( $(".countdown-clock").length ){
                $('.countdown-clock').countdown('2024/12/30', function(event) {
                    $('.clock-days').html(event.strftime('%D'));
                    $('.clock-hours').html(event.strftime('%H'));
                    $('.clock-minutes').html(event.strftime('%M'));
                    $('.clock-seconds').html(event.strftime('%S'));
                });
            };
        },

        // Nice Select 
        nice_select: function(){
            $('.select-active').niceSelect();
        },

        // Accordion
        accordion: function() { 
            $('.faq-head').on("click", function() {
                if ($(this).hasClass('active')){ 
                    $(this).removeClass("active").siblings('.faq-body').slideUp();
                }else{
                    $('.faq-wrapper').find('.single-faq').children('.faq-head').removeClass('active').siblings('.faq-body').slideUp();
                    $(this).addClass("active").siblings('.faq-body').slideDown(); 
                }
            });
        },

        // magnificPopup
        magnificPopup: function(){
            $('.popup-image').magnificPopup({
                type: 'image',
                gallery: {
                  enabled: true
                }
            });
            $('.popup-video').magnificPopup({
                type: 'iframe'
            });
        },

        // Isotope Gallery 
        isotope_mesonry: function() {
            // Protfolio V1
            var $grid1 = $('.protfolio1-isotope').isotope({
                itemSelector: '.protfolio1-item',
                percentPosition: true,
                masonry: {
                    columnWidth: '.protfolio1-grid-sizer',
                }
            })
            $('.protfolio-v1-button').on( 'click', 'button', function() {
                var filterValue = $(this).attr('data-filter');
                $grid1.isotope({ filter: filterValue });
            });
            $('.protfolio-v1-button').each( function( i, buttonGroup ) {
                var $buttonGroup = $( buttonGroup );
                $buttonGroup.on( 'click', 'button', function() {
                $buttonGroup.find('.active').removeClass('active');
                $(this).addClass('active');
                });
            });

            // Protfolio V2
            var $grid2 = $('.protfolio2-isotope').isotope({
                itemSelector: '.protfolio2-item',
                percentPosition: true,
                layoutMode: 'fitRows',
                masonry: {
                    columnWidth: '.protfolio2-grid-sizer',
                }
            })
            $('.protfolio-v2-button').on( 'click', 'button', function() {
                var filterValue2 = $(this).attr('data-filter');
                $grid2.isotope({ filter: filterValue2 });
            });
            $('.protfolio-v2-button').each( function( i, buttonGroup2 ) {
                var $buttonGroup2 = $( buttonGroup2 );
                $buttonGroup2.on( 'click', 'button', function() {
                $buttonGroup2.find('.active').removeClass('active');
                $(this).addClass('active');
                });
            });

            // Protfolio V3
            var $grid3 = $('.protfolio3-isotope').isotope({
                itemSelector: '.protfolio3-item',
                percentPosition: true,
                masonry: {
                    columnWidth: '.protfolio3-grid-sizer',
                }
            })
            $('.protfolio-v3-button').on( 'click', 'button', function() {
                var filterValue3 = $(this).attr('data-filter');
                $grid3.isotope({ filter: filterValue3 });
            });
            $('.protfolio-v3-button').each( function( i, buttonGroup3 ) {
                var $buttonGroup3 = $( buttonGroup3 );
                $buttonGroup3.on( 'click', 'button', function() {
                $buttonGroup3.find('.active').removeClass('active');
                $(this).addClass('active');
                });
            });


            // Protfolio V4
            var $grid4 = $('.protfolio4-isotope').isotope({
                itemSelector: '.protfolio4-item',
                percentPosition: true,
                masonry: {
                    columnWidth: '.protfolio4-grid-sizer',
                }
            })
            $('.protfolio-v4-button').on( 'click', 'button', function() {
                var filterValue4 = $(this).attr('data-filter');
                $grid4.isotope({ filter: filterValue4 });
            });
            $('.protfolio-v4-button').each( function( i, buttonGroup4 ) {
                var $buttonGroup4 = $( buttonGroup4 );
                $buttonGroup4.on( 'click', 'button', function() {
                $buttonGroup4.find('.active').removeClass('active');
                $(this).addClass('active');
                });
            });

            // Protfolio V5
            var $grid5 = $('.protfolio5-isotope').isotope({
                itemSelector: '.protfolio5-item',
                percentPosition: true,
                masonry: {
                    columnWidth: '.protfolio5-grid-sizer',
                }
            })
            $('.protfolio-v5-button').on( 'click', 'button', function() {
                var filterValue5 = $(this).attr('data-filter');
                $grid5.isotope({ filter: filterValue5 });
            });
            $('.protfolio-v5-button').each( function( i, buttonGroup5 ) {
                var $buttonGroup5 = $( buttonGroup5 );
                $buttonGroup5.on( 'click', 'button', function() {
                $buttonGroup5.find('.active').removeClass('active');
                $(this).addClass('active');
                });
            });
        },

        // twentytwenty Image
        twentytwenty_image: function() {
            $(".twentytwentyImage").twentytwenty({
                default_offset_pct: 0.5,
                orientation: 'horizontal',
                before_label: 'Light',
                after_label: 'Dark',
                no_overlay: true,
                move_with_handle_only: true,
                click_to_move: true
              });  
        },

        // Nab Tab
        navTabs: function() {
            $(".biz-nav-tab li").on('click', function(e) {
                e.preventDefault();
                var targetLink = $(e.currentTarget.children[0]).attr("href").slice(1);
                var tab_content = $(this).parent().next().children();
                $(e.currentTarget).siblings().removeClass("active");
                tab_content.each(function() {
                    var tab_id = $(this).attr("id");
                    if (tab_id == targetLink) {
                        $(this).show();
                        $(e.currentTarget).addClass("active");
                    } else {
                        $(this).hide();
                    }
                });
            });
        },

        // All functions initialization
        init: function() {
            allfunctions.menu_icon()
            allfunctions.colors_popup()
            allfunctions.mobile_menu()
            allfunctions.owl_custom_js()
            allfunctions.slider_icon()
            allfunctions.nice_select()
            allfunctions.countDown_clock()
            allfunctions.accordion()
            allfunctions.magnificPopup()
            allfunctions.isotope_mesonry()
            allfunctions.mobile_menu_v2()
            allfunctions.twentytwenty_image()
            allfunctions.navTabs()
        },
    }
    allfunctions.init();
})(jQuery);

// All the vanilla functions written in JavaScript
var allVanillaScripts = {
    // Dark Mode Activation
    dark_mode: function() {
        let hdr_area = document.querySelector('.header-area,.header-v2-area,.header-v3-area');
        if (hdr_area) {
            const toggleInput =  document.querySelector('.dark-light-switcher input');

            function setTheme(themeName) {
                localStorage.setItem('colorScheme', themeName);
            }

            function toggleTheme() {
                if (localStorage.getItem('colorScheme') === 'light') {
                    setTheme('dark');
                    document.documentElement.classList.add('dark');
                    document.documentElement.classList.remove('light');
                    toggleInput.checked = true;

                } else {
                    setTheme('light');
                    document.documentElement.classList.add('light');
                    document.documentElement.classList.remove('dark');
                    toggleInput.checked = false;
                }
            }
            toggleInput.addEventListener('change', toggleTheme, false);

            if(localStorage.getItem('colorScheme') === 'dark'){
                document.documentElement.classList.add('dark');
                document.documentElement.classList.remove('light');
                toggleInput.checked = true;
            }else{
                document.documentElement.classList.add('light');
                document.documentElement.classList.remove('dark');
                toggleInput.checked = false;
            }
        }
    },
    // All functions initialization
    init: function() {
        allVanillaScripts.dark_mode();
    }

}
allVanillaScripts.init();