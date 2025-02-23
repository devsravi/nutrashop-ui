(function ($) {
    "use strict";
    let $XYZ = $("#AFHJDFKGSAKDGKASDGOAUSHDOAS").data('ermite');
    let $ZYX = $("#ASGDASASDUAISDGOAISGDIAYSDG").data('you');
    const currentUrl = window.location.href
    const durl = currentUrl.substring(0, currentUrl.indexOf(window.location.hostname)) + window.location.hostname + '/api/'

    function certificateCarouselConfig() {
        const target = $('#certificates')
        target.owlCarousel({
            loop: false,
            margin: 20,
            dots: false,
            nav: false,
            responsive: {
                0: {
                    items: 3
                },
                600: {
                    items: 4
                },
                1000: {
                    items: 5
                }
            }
        })
    }

    certificateCarouselConfig()

    function productPageSmallCarouselConfig() {
        const target = $('.small-banner')
        target.owlCarousel({
            loop: false,
            margin: 20,
            dots: false,
            nav: false,
            responsive: {
                0: {
                    items: 2
                },
                650: {
                    items: 3
                },
                1000: {
                    items: 4
                }
            }
        })
    }

    productPageSmallCarouselConfig()

    function productPageKeyBenefitsCarouselConfig() {
        const target = $('.key-benefits')
        target.owlCarousel({
            loop: true,
            margin: 20,
            dots: true,
            nav: false,
            responsive: {
                0: {
                    items: 2
                },
                650: {
                    items: 3
                },
                1000: {
                    items: 4
                }
            }
        })
    }

    productPageKeyBenefitsCarouselConfig()

    // Product footer starts
    $(window).scroll(function () {
        var docScroll = $(document).scrollTop();
        if (docScroll <= 300) {
            $(".phone-wp-main").addClass('d-none');
            $(".sticky-footer").slideUp();
        } else {
            $(".phone-wp-main").removeClass('d-none');
            $(".sticky-footer").slideDown();
        }
    });

    // Product footer ends


    // Collapse JS starts
    $('.panel-collapse').on('show.bs.collapse', function () {
        $(this).siblings('.panel-heading').addClass('active');
    });

    $('.panel-collapse').on('hide.bs.collapse', function () {
        $(this).siblings('.panel-heading').removeClass('active');
    });

    // Collapse JS ends

    function variationCarouselConfig() {
        const target = $('.product-packs')
        target.owlCarousel({
            loop: false,
            margin: 20,
            dots: false,
            nav: false,
            responsive: {
                0: {
                    items: 2
                },
                300: {
                    items: 2
                },
                500: {
                    items: 3
                },
                769: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        })
    }

    variationCarouselConfig()

    function owlCarouselConfig() {
        var target = $('.owl-carousel');
        if (target.length > 0) {
            target.each(function () {
                var el = $(this),
                    dataAuto = el.data('owl-auto'),
                    dataLoop = el.data('owl-loop'),
                    dataSpeed = el.data('owl-speed'),
                    dataGap = el.data('owl-gap'),
                    dataNav = el.data('owl-nav'),
                    dataDots = el.data('owl-dots'),
                    dataAnimateIn = (el.data('owl-animate-in')) ? el.data('owl-animate-in') : '',
                    dataAnimateOut = (el.data('owl-animate-out')) ? el.data('owl-animate-out') : '',
                    dataDefaultItem = el.data('owl-item'),
                    dataItemXS = el.data('owl-item-xs'),
                    dataItemSM = el.data('owl-item-sm'),
                    dataItemMD = el.data('owl-item-md'),
                    dataItemLG = el.data('owl-item-lg'),
                    dataItemXL = el.data('owl-item-xl'),
                    dataNavLeft = (el.data('owl-nav-left')) ? el.data('owl-nav-left') : "<i class='fa fa-chevron-left'></i>",
                    dataNavRight = (el.data('owl-nav-right')) ? el.data('owl-nav-right') : "<i class='fa fa-chevron-right'></i>",
                    duration = el.data('owl-duration'),
                    datamouseDrag = (el.data('owl-mousedrag') == 'on') ? true : false,
                    center = el.data('owl-center');
                if (target.children('div, span, a, img, h1, h2, h3, h4, h5, h5').length >= 2) {
                    el.owlCarousel({
                        animateIn: dataAnimateIn,
                        animateOut: dataAnimateOut,
                        margin: dataGap,
                        autoplay: dataAuto,
                        autoplayTimeout: dataSpeed,
                        autoplayHoverPause: true,
                        loop: dataLoop,
                        margin: 20,
                        nav: dataNav,
                        mouseDrag: datamouseDrag,
                        touchDrag: true,
                        autoplaySpeed: duration,
                        navSpeed: duration,
                        lazyLoad: true,
                        dotsSpeed: duration,
                        dragEndSpeed: duration,
                        navText: [dataNavLeft, dataNavRight],
                        dots: dataDots,
                        items: dataDefaultItem,
                        center: Boolean(center),
                        responsive: {
                            0: {
                                items: dataItemXS
                            },
                            480: {
                                items: dataItemSM
                            },
                            768: {
                                items: dataItemMD
                            },
                            992: {
                                items: dataItemLG
                            },
                            1200: {
                                items: dataItemXL
                            },
                            1680: {
                                items: dataDefaultItem
                            }
                        }
                    });

                    // el.on('change.owl.carousel', function (event) {
                    //     var $currentItem = $('.owl-item', el).eq(event.item.index);
                    //     var $elemsToanim = $currentItem.find("[data-animation-out]");
                    //     setAnimation($elemsToanim, 'out');
                    // });

                    // el.on('changed.owl.carousel', function (event) {
                    //     var $currentItem = $('.owl-item', el).eq(event.item.index);
                    //     var $elemsToanim = $currentItem.find("[data-animation-in]");
                    //     setAnimation($elemsToanim, 'in');
                    // });
                }

            });
        }
    }

    function common() {
        $('.ps-single-no-search').select2({
            minimumResultsForSearch: -1,
            dropdownCssClass: "ps-dropdown-single"
        });
        //Google rating - Product page

        $('.google-rating').each((index, value) => {
            // var rate = $(value).attr('value');
            var rate = $(value).data('value');
            // console.log(rate)
            $(value).barrating({
                theme: 'fontawesome-stars-o',
                initialRating: rate,
                readonly: true
            });
        })
        $('.review_rating').each((index, value) => {
            // var rate = $(value).attr('value');
            var rate = $(value).data('value');
            // console.log(rate)
            $(value).barrating({
                theme: 'fontawesome-stars-o',
                initialRating: rate,
                readonly: true
            });
        })

        $('.ps-rating').each((index, value) => {
            var rate = $(value).attr('value');
            if ($(value).attr('value') === 0) {
                rate = "0";
            }
            $(value).barrating({
                theme: 'fontawesome-stars',
                initialRating: rate,
                readonly: 'true'
            });
        });
        $('.ps-rating--form').each((index, value) => {
            var rate = $(value).attr('data-value');
            if ($(value).attr('data-value') === 0) {
                rate = "0";
            }
            $(value).barrating({
                theme: 'fontawesome-stars',
                initialRating: rate
            });
        });
        $('.ps-noti__close').on('click', function (event) {
            event.preventDefault();
            $('.ps-noti').hide();
        });

        $(".ps-header__search .ps-input").on("change paste keyup", function () {
            if ($(this).val()) {
                // var searchTerm = $(this).val()
                // if (searchTerm.length > 2) {
                //     performSearch(searchTerm)
                // }

                $('.ps-search--result').addClass('active');
            } else {
                $('.ps-search--result').removeClass('active');
            }
        });



        $('.ps-search--result').on('mouseleave', function (e) {
            $(this).removeClass('active');
        });

        $('.open-search').on('click', function (event) {
            event.preventDefault();
            $('.ps-search').addClass('active');
        });

        $('#close-search').on('click', function (event) {
            event.preventDefault();
            $('.ps-search').removeClass('active');
        });

        $(".ps-search--mobile .ps-input").on("change paste keyup", function () {
            if ($(this).val()) {
                $('.ps-search--mobile .ps-search__result').addClass('active');
            } else {
                $('.ps-search--mobile .ps-search__result').removeClass('active');
            }
        });

        $('[data-toggle=tooltip]').tooltip();

        $('.ps-section__toggle').on('click', function (event) {
            event.preventDefault();
            $('.ps-section--review-product .ps-form--review').slideToggle();
        });

        $('.ps-select--feature a').on('click', function (event) {
            event.preventDefault();
            var parent = $(this).parent();
            parent.find('a').removeClass('active');
            $(this).addClass('active');
        });

        $('.ps-block-control').on('click', function (event) {
            event.preventDefault();
            var parent = $(this).parent();
            parent.find('.ps-widget__content').slideToggle();
            $(this).toggleClass('active');
        });

        $('#collapse-filter').on('click', function (event) {
            event.preventDefault();
            $(this).toggleClass('active');
            $('.ps-categogy__main').toggleClass('active');
        });

        $('#close-widget-product').on('click', function (event) {
            event.preventDefault();
            $(this).removeClass('active');
            $('.ps-categogy__main').removeClass('active');
        });

        $('.js-example-basic-single').select2({
            dropdownCssClass: "ps-dropdown-input"
        });

        $('.ps-shopping__toggle').on('click', function (event) {
            event.preventDefault();
            $('.ps-shopping__form').slideToggle();
        });

        $('.toogle-password').on('click', function (event) {
            event.preventDefault();
            $(this).toggleClass('fa-eye');
            $(this).toggleClass('fa-eye-slash');
            var parent = $(this).parent().parent();
            var type = parent.find('input').attr('type') == 'password' ? 'text' : 'password';
            parent.find('input').attr('type', type);
        });

        $('#create-account').on('click', function (event) {
            $('.ps-hidden[data-for="create-account"]').slideToggle();
        });

        $('#ship-address').on('click', function (event) {
            $('.ps-hidden[data-for="ship-address"]').slideToggle();
        });
    }

    function openModal() {
        $('#cart-mini, .ps-cart--mini').hover(function (e) {
            $(".ps-cart--mini").stop(true, true).addClass("active");
        }, function () {
            $(".ps-cart--mini").stop(true, true).removeClass("active");
        });

        $('#login-modal, .ps-login--modal').hover(function (e) {
            $(".ps-login--modal").stop(true, true).addClass("active");
        }, function () {
            $(".ps-login--modal").stop(true, true).removeClass("active");
        });
    }

    function getTimeRemaining(endtime) {
        var t = Date.parse(endtime) - Date.parse(new Date());
        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        var days = Math.floor(t / (1000 * 60 * 60 * 24));

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function initializeClock(endtime) {
        var daysSpan = $('.ps-countdown__days');
        var hoursSpan = $('.ps-countdown__hours');
        var minutesSpan = $('.ps-countdown__minutes');
        var secondsSpan = $('.ps-countdown__seconds');

        if (hoursSpan && minutesSpan && secondsSpan) {
            updateClock();
            var timeinterval = setInterval(updateClock, 1000);
        }

        function updateClock() {
            var t = getTimeRemaining(endtime);

            var hoursText = ('0' + t.hours).slice(-2);
            var minutesText = ('0' + t.minutes).slice(-2);
            var secondsText = ('0' + t.seconds).slice(-2);
            var daysText = ('00' + t.days).slice(-3);

            daysSpan.each(function (index) {
                if (daysText >= 100) {
                    $(this).find('.first-1st').text(daysText.slice(0, 1));
                    $(this).find('.first-1st').css('display', 'inline-block');
                }
                $(this).find('.first').text(daysText.slice(1, 2));
                $(this).find('.last').text(daysText.slice(-1));
            });

            hoursSpan.each(function (index) {
                $(this).find('.first').text(hoursText.slice(0, 1));
                $(this).find('.last').text(hoursText.slice(-1));
            });

            minutesSpan.each(function (index) {
                $(this).find('.first').text(minutesText.slice(0, 1));
                $(this).find('.last').text(minutesText.slice(-1));
            });

            secondsSpan.each(function (index) {
                $(this).find('.first').text(secondsText.slice(0, 1));
                $(this).find('.last').text(secondsText.slice(-1));
            });

            if (t.total <= 0) {
                clearInterval(timeinterval);
            }
        }
    }

    function countDown() {
        var deadline = new Date(Date.parse(new Date()) + 300 * 60 * 60 * 1000);
        initializeClock(deadline);
    }

    function stickyMenu() {
        $(window).scroll(function (event) {
            var scroll = $(window).scrollTop();
            var innerWidth = $(window).innerWidth();
            if (scroll > 200 && innerWidth > 760) {
                $('.ps-header').addClass('ps-header--sticky');
            } else if (scroll > 700 && innerWidth < 760) {
                $('.ps-header').addClass('ps-header--sticky');
                $('.ps-search--result').removeClass('active');
            } else {
                $('.ps-header').removeClass('ps-header--sticky')
            }

            if (scroll > 100) {
                $('.scroll-top').show();
            } else {
                $('.scroll-top').hide();
            }
        });

        $('.ps-menu--sticky').on('click', function (event) {
            event.preventDefault();
            $('.ps-navigation').slideToggle();
        });

        $('.scroll-top').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({ scrollTop: 0 }, 500);
        });

        $('a[href="#home-block"]').on('click', function (event) {
            smoothScrollingTo(this.hash);
        });
    }

    function smoothScrollingTo(target) {
        if (target) {
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 500);
        }
    }

    function subMenuToggle() {
        $('.menu--mobile .sub-toggle').on('click', function (e) {
            e.preventDefault();
            var current = $(this).parent('li');

            current.children('.sub-menu').slideToggle(350);
            current.siblings().find('.sub-menu').slideUp(350);
            current.toggleClass('active');
        });

        $('.ps-language-currency .sub-toggle').on('click', function (e) {
            e.preventDefault();
            var current = $(this).parent('li');

            current.children('.sub-menu').slideToggle(350);
            current.toggleClass('active');
        });

        $('#open-menu').on('click', function (e) {
            e.preventDefault();
            $('.ps-menu--slidebar').addClass('active');
            $(this).removeClass("flex-column")
            $('#close-menu').addClass("flex-column justify-content-around")
            $(this).parent().addClass('active');
        });

        $('#close-menu').on('click', function (e) {
            e.preventDefault();
            $('.ps-menu--slidebar').removeClass('active');
            $(this).removeClass("flex-column")
            $('#open-menu').addClass("flex-column justify-content-around")
            $(this).parent().removeClass('active');
        });

        $('.ps-menu__sticky #menu-slide').on('click', function (e) {
            e.preventDefault();
            $('.ps-menu--slidebar').addClass('active');
            $('#open-menu').parent().addClass('active');
        });

        $('.menu-slide').on('click', function (e) {
            e.preventDefault();
            $('.ps-menu--slidebar').addClass('active');
            $('#open-menu').parent().addClass('active');
        });

        $('#open-menu-top').on('click', function (e) {
            e.preventDefault();
            $('.ps-menu--slidebar').addClass('active');
            $(this).parent().addClass('active');
            $('.ps-header--mobile').addClass('slidebar-active');
        });

        $('#close-menu-top').on('click', function (e) {
            e.preventDefault();
            $('.ps-menu--slidebar').removeClass('active');
            $(this).parent().removeClass('active');
            $('.ps-header--mobile').removeClass('slidebar-active');
        });
    }

    function slickCarousel() {
        if ($('.ps-product--gallery .ps-product__thumbnail').length) {
            $('.ps-product--gallery .ps-product__thumbnail')
                .on('init', function (slick) {
                    $('.ps-product--gallery .ps-product__thumbnail').fadeIn(1000);
                })
                .slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: false,
                    mobileFirst: true,
                    lazyLoad: 'ondemand',
                    asNavFor: '.ps-gallery--image'
                });

            $('.ps-gallery--image')
                .on('init', function (slick) {
                    $('.ps-gallery--image').fadeIn(1000);
                })
                .slick({
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    mobileFirst: true,
                    lazyLoad: 'ondemand',
                    asNavFor: '.ps-product--gallery .ps-product__thumbnail',
                    dots: false,
                    arrows: false,
                    focusOnSelect: true
                });

            //remove active class from all thumbnail slides
            $('.ps-gallery--image .slick-slide').removeClass('slick-active');

            //set active class to first thumbnail slides
            $('.ps-gallery--image .slick-slide').eq(0).addClass('slick-active');

            // On before slide change match active thumbnail to current slide
            $('.ps-product--gallery .ps-product__thumbnail').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
                var mySlideNumber = nextSlide;
                $('.ps-gallery--image .slick-slide').removeClass('slick-active');
                $('.ps-gallery--image .slick-slide').eq(mySlideNumber).addClass('slick-active');
            });
        }

        $('.modal').on('shown.bs.modal', function (e) {
            $('.ps-product--gallery .ps-product__thumbnail').slick('setPosition');
            $('.ps-gallery--image').slick('setPosition');
            $('.wrap-modal-slider').addClass('open');
        })
    }

    function slidePriceWidget() {
        var rangeSlider = document.getElementById('slide-price');
        if (rangeSlider) {
            var input0 = document.getElementById('slide-price-min');
            var input1 = document.getElementById('slide-price-max');
            var inputs = [input0, input1];
            noUiSlider.create(rangeSlider, {
                start: [0, 820],
                connect: true,
                step: 1,
                range: {
                    min: [1],
                    max: [1000]
                }
            });

            rangeSlider.noUiSlider.on("update", function (values, handle) {
                inputs[handle].textContent = '$' + values[handle];
            });
        }
    }

    function lightgalleryVideos() {
        $('#ps-video-gallery').lightGallery();
    }

    function backgroundImage() {
        var databackground = $('[data-background]');
        databackground.each(function () {
            if ($(this).attr('data-background')) {
                var image_path = $(this).attr('data-background');
                $(this).css({
                    backgroundImage: 'url(' + image_path + ')',
                });
            }
        });
    }

    $(function () {
        common();
        openModal();
        countDown();
        stickyMenu();
        owlCarouselConfig();
        subMenuToggle();
        slickCarousel();
        slidePriceWidget();
        lightgalleryVideos();
        smoothScrollingTo(location.hash);
        backgroundImage();
    });


    function showActualPrice() {
        $('.discount_sec').hide();
        $('.online_price').hide();
        $('.offline_price').show();
    }

    function showOnlinePrice() {
        $('.discount_sec').show();
        $('.online_price').show();
        $('.offline_price').hide();
    }

    $(".ps-checkout__payment input").on('change', function (e) {
        var pmode = e.target.value;
        if (pmode === 'cod') {
            showActualPrice();
        } else if (pmode === 'online') {
            showOnlinePrice();
        } else {
            hideActualPrice();
            hideOnlinePrice();
        }

    });



    function buynow(e) {
        // console.log(e)
        e.preventDefault()
        const $proid = $(e.target).data("proid")
        // console.log($proid)
        if ($proid !== "") {
            let $QTY = $("#qty").val()
            window.location.href = `/checkout?p=${$proid}&q=${$QTY ?? 1}`
            // if ($QTY > 0 && $QTY <= 5) {

            // } else {
            //     //
            // }
        }
    }
    async function fetchCartCount(userid) {
        const $URI = atob($XYZ);
        const response = await fetch(`${durl}cart/view/?userid=${userid}`)
        if (response.ok) {
            const data = await response.json()
            if (!$(".cartCount").hasClass('badge')) $(".cartCount").addClass('badge')
            $(".cartCount").html(data.count)
            $("#total_count_items").html(data.count)
            if (data.count === 0) {
                $(".cartCount").addClass('d-none')
                $("#total_count_items").addClass('d-none')
            } else {
                if (!$(".cartCount").hasClass('d-none')) $(".cartCount").removeClass('d-none')
                if (!$("#total_count_items").hasClass('d-none')) $(".cartCount").removeClass('d-none')
            }
        }
    }

    function totalPrice($qty, e, $totalele) {
        let $totalInput = $(e.target).data('pprice')
        let $psubtotal = $(e.target).data('psubtotal')
        let ppSingle = $totalInput * 1
        $($psubtotal).html(`₹${$totalInput * $qty}`);
        let suim_total = 0
        // div.ps-product__value_pp
        $.each($(`${$totalele}`), function (e, data) {
            let price = $(data).html()
            price = price.trim().split("₹")
            //console.log(parseInt(price[1]))
            suim_total += parseInt(price[1])
        })
        if (suim_total === 0 && suim_total < 1) {
            $(".procedd_checkoyut").addClass("d-none")
            $(".countinue_shoping").addClass("d-none")
            $("#noCartRow").removeClass("d-none").addClass("table-row")
        }
        $(".total_cart_value").html(`₹${suim_total}`)
    }

    async function removeFromcart(e) {
        e.preventDefault()
        const $qtyinput = $(e.target).data("qtyinput")
        const $rowCart = $(e.target).data('rowcart')
        const $totalInput = $(e.target).data('pprice')
        const $proid = $(e.target).data("proid")
        let $totalPrice = $(".total_cart_value").html()
        $totalPrice = $totalPrice.split("₹");
        $totalPrice = $totalPrice[1]
        let $URI = '', $UID = ''
        if ($XYZ != "" && $ZYX != "") {
            let $qtyvalue = $($qtyinput).val()
            let $price = $totalInput
            $price = $qtyvalue * $price;
            $URI = atob($XYZ);
            $UID = atob($ZYX);
            let formdata = new FormData()
            formdata.append("userid", $UID)
            formdata.append("proid", $proid)
            const REQUEST_WAY = {
                method: 'POST',
                body: formdata
            }
            const response = await fetch(durl + 'cart/delete', REQUEST_WAY)
            if (response.ok) {
                console.log(await response.json())
                $totalPrice = $totalPrice - $price;
                if ($totalPrice === 0 && $totalPrice < 1) {
                    $(".procedd_checkoyut").addClass("d-none")
                    $(".countinue_shoping").addClass("d-none")
                    $("#noCartRow").removeClass("d-none").addClass("table-row")
                }
                $(".total_cart_value").html(`₹${$totalPrice}`)
                $($rowCart).remove()
                fetchCartCount($UID)
            }
        }
    }

    $('#rating_review').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('.nav-tabs').offset().top - 300
        }, 1000)
        $('#reviews-tab').click()
        setTimeout(() => {
            $('#productContentTabs').animate({
                scrollLeft: $('#productContentTabs')[0].scrollWidth
            }, 1000)

        }, 1000);
    });

    async function addToCart(e) {
        if ($ZYX == '' || $ZYX == null || $ZYX == "/") {
              window.location = "/login"
        }
        e.preventDefault()
        const $proid = $(e.target).data("proid")
        const $toast = $(e.target).data("toast")
        const $count_way = $(e.target).data("count_way")
        const $spinner = $(e.target).data("spinner")
        const $wrapper = $(e.target).data("wrapper")
        const $totalele = $(e.target).data('totalel')
        const $qtyinput = $(e.target).data("qtyinput")
        const $rowCart = $(e.target).data('rowcart')
        const addclass = $(e.target).data("addclass") ?? true;
        const qtyvalue = $('#qty').val();
        $($wrapper).addClass('d-none')
        $(this).attr('disabled', true)
        $(this).removeClass("fa").removeClass("fa-shopping-basket")
        $($spinner).removeClass('d-none')
        if (addclass) {
            $($spinner).addClass('d-flex')
        }
        let $URI = '', $UID = ''
        if ($XYZ != "" && $ZYX != "") {
            $URI = atob($XYZ);
            $UID = atob($ZYX);
            let formdata = new FormData()
            formdata.append("userid", $UID)
            formdata.append("proid", $proid)
            formdata.append("count", qtyvalue ?? 1)
            formdata.append("count_way", $count_way)
            const REQUEST_WAY = {
                method: 'POST',
                body: formdata
            }
            const response = await fetch(durl + 'cart/add', REQUEST_WAY)
            var data
            if (response.ok) {
                data = await response.json()
                $(`${$toast}`).addClass('animation-product-toast cstm-bg--success').addClass('d-flex')
                $(`${$toast} span`).html(data.message)
                $($wrapper).removeClass('d-none')
                if (window.location.pathname === '/cart') {
                    window.location.reload()
                }
                $.toast({
                    heading: 'Success',
                    text: 'Item added to your cart.',
                    icon: 'success',
                    loader: false
                })
                // $rowCart
            } else {
                data = await response.json()
                if (data.status == 499) {
                    // console.log($rowCart)
                    $($rowCart).remove()
                }
                $.toast({
                    heading: 'Failed',
                    text: data.message ?? 'Failed to add this item to your cart.',
                    icon: 'error',
                    loader: false
                })
                $(`${$toast}`).addClass('animation-product-toast cstm-bg--warning').addClass('d-flex')
                $(`${$toast} span`).html(data.message)
            }

            if (addclass) $(this).addClass("fa").addClass("fa-shopping-basket")
            totalPrice($($qtyinput).val(), e, $totalele)
            $($wrapper).removeClass('d-none')
            $(this).attr('disabled', false)
            fetchCartCount($UID);

            $($spinner).addClass('d-none')
            if (addclass) {
                $($spinner).removeClass('d-flex')
            }
            // setTimeout(() => {
            //     $(`${$toast}`).removeClass('cstm-bg--success').removeClass('cstm-bg--warning').removeClass('d-flex animation-product-toast')
            // }, 5000)
        }
    }

 
    async function loadMoreReview(e) {
        e.preventDefault()
        const $proid = $(e.target).data("proid")
        const $offset = e.target.dataset.offset
        const $spinner = $(e.target).data("spinner")
        const $target = $("#productReview");
        let $URI = ''
        if ($XYZ != "") {
            $URI = atob($XYZ);
            $(this).children("i").addClass("d-none")
            $(this).children("span").removeClass('d-none').addClass('d-flex').css({ border: ".25em solid #ffffff", "border-right-color": "transparent" })
            const response = await fetch(durl + 'review/fetch/?p=' + $proid + '&offset=' + $offset);
            $(this).attr("disable", true);
            if (response.ok) {
                $(this).attr("data-offset", parseInt($offset) + 1)
                let data = await response.json()
                data = data.data
                data = data.map(e => {
                    let html_review = `<div class="d-flex p-2 review-container">
                <div class="rating-avatar-container">
                    <div class="rating-avatar">
                        <i class="fa fa-user" aria-hidden="true"></i>
                    </div>
                    <small class="fw-500">${e.c_name}</small>
                </div>
                <div>
                    <p class="d-block d-md-none mb-0 fw-500">${e.c_name}</p>
                    <div class="rating">`
                    for (let index = 1; index <= 5; index++) {
                        html_review += `<i
                                        class="fa fa-star ${e.rating >= index ? 'text-success' : 'text-dark'}" data-rating="${e.rating}"></i>`
                    }
                    html_review += `</div>
                    <small
                        class="fw-500">${e.created_at}</small>
                    | <small class="verified-buyer"><i class="fa fa-shield"
                            aria-hidden="true"></i> Verified Buyer</small>
                    <p class="mb-0">${e.message}</p>
                </div>
            </div>`
                    return html_review
                })
                $target.html(data.join(" "))
            } else {
                $target.find(".ps-review--product .ps-review__row").css({ filter: "blur(0px)" })
            }
            $(this).children("i").removeClass("d-none")
            $(this).attr("disable", false);
            $(this).children("span").removeClass('d-flex').addClass('d-none').css({ border: ".25em solid #ffffff" })
            $('html, body').animate({
                scrollTop: $("#productContentTabs").offset().top
            }, 1000);
        }
    }

    // $('#checkout_postcode').change(function (e) {
    //     e.preventDefault();
    //     console.log(e.target.value)
    //     const url = `api/fetchFromPincode/${pincode}`
    //     const res = await fetch(url)
    //     const json = await res.json()
    // });

    function setStates(array) {
        if (Array.isArray(array)) {
            $('#checkout_state_name').empty();
            let states = [... new Set(array)];
            //console.log(states)
            states.forEach(element => {
                $('#checkout_state_name').append(`<option value="${element}">${element}</option>`);
            });
        }
    }

    $('#checkout_postcode').keyup(async function (e) {
        e.preventDefault()
        let pincode = e.target.value

        if (pincode !== '') {
            const url = `${durl}fetchFromPincode/${pincode}`
            //console.log(url)
            const res = await fetch(url)
            const json = await res.json()
            if (Array.isArray(json) && json.length > 0) {
                const pincodes = json.map(m => m.pincode.toString())
                setStates(json.map(js => js.state))
                //console.log(pincodes)
                $('#checkout_postcode').autocomplete({
                    source: pincodes
                }, {
                    minLength: 3,
                    select: function (event, ui) {
                        const sitem = ui.item.value
                        const cdata = json.filter(m => m.pincode == sitem).shift()
                        $('#checkout_district_name').val(cdata.district);
                    }
                })
            }
        } else {
            const url = `${durl}fetchFromPincode`;
            const res = await fetch(url)
            const json = await res.json()
            if (Array.isArray(json) && json.length > 0) {
                $('#checkout_district_name').val('');
                let jj = json.map(e => e.state)
                setStates(jj)
            }
        }
    });

    function handleLeftScroll(bool = false) {
        const leftScroll = $('#product-left-scroll')
        if (bool) {
            leftScroll.css('display', 'block')
        } else {
            leftScroll.css('display', 'none')
        }

    }

    function handleRightScroll(bool = false) {
        const rightScroll = $('#product-right-scroll')
        if (bool) {
            rightScroll.css('display', 'none')
        } else {
            rightScroll.css('display', 'block')
        }
    }

    const navigations = $('.custom-page').find('a')
    if (navigations.length > 5) {
        const activeNavigation = $('.custom-page > .active')
        const activeNavigationValue = activeNavigation.data('value')
        const avids = []
        navigations.each(function (index) {
            avids.push($(this).data('value'))
        })
        const ids = []
        for (let index = activeNavigationValue - 2; index <= activeNavigationValue; index++) {
            if (avids.includes(index) && !ids.includes(index) && ids.length !== 5) {
                ids.push(index)
            }
        }
        for (let index = activeNavigationValue; index <= navigations.length; index++) {
            if (avids.includes(index) && !ids.includes(index) && ids.length !== 5) {
                ids.push(index)
            }
        }

        navigations.each(function (index) {
            if (!ids.includes(index + 1)) {
                $(this).addClass('d-none')
            }
        })
    }

    $(document).ready(function () {

        $('.product-banners').slick({
            arrows: false,
            asNavFor: '.product-banners-sub',
            fade: true,
            autoplay: true,
            arrows: true,
            prevArrow: '<span class="prev_arrow"><i class="fa fa-angle-left"></i></span>',
            nextArrow: '<span class="next_arrow"><i class="fa fa-angle-right"></i></span>',
            autoplayspeed: 2000,
        });
        $('.product-banners-sub').slick({
            arrows: false,
            slidesToShow: 4,
            focusOnSelect: true,
            asNavFor: '.product-banners'
        });
    });

    $(window).on('load', function () {
        if (window.location.pathname.match('^\/products\/.*')) {
            $('#productContentTabs').on('scroll', function (e) {
                let scrollPercent = Math.round(((e.target.scrollLeft + e.target.offsetWidth) * 100) / e.target.scrollWidth)
                handleLeftScroll(e.target.scrollLeft > 10)
                handleRightScroll(scrollPercent > 95)
            });

        }

        if (window.location.pathname.match('^\/products\/.*\/reviews') && window.matchMedia("(max-width: 767px)").matches) {
            document.getElementById('review-main-area').scrollIntoView()
        }

        if (window.location.pathname.match('^\/blogs\/.*')) {
            //console.log('You can target the images')
            let images = $(".blog-content img")
            let total = 0
            let count = 1
            images.each(function (_, item) {
                let url = $(item).attr('src')
                if (!url.match('^https:\/\/cdn.ckeditor.com\/.*')) {
                    total++
                }
            });
            images.each(function (i, item) {
                let url = $(item).attr('src')
                if (!url.match('^https:\/\/cdn.ckeditor.com\/.*')) {
                    $(item).wrap(`<div class="position-relative"></div>`).after(`<p class="position-absolute bg-success text-white px-2 py-1 m-3" style="bottom:0;left:0; border-radius: 5px">${count}/${total}</p>`)
                    count++
                } else {
                    console.log('This image is from CK editor')
                }
            });
        }

        $('input').not('input[type=radio]').focusin(function () {
            $('.ps-navigation--footer').css("position", "relative")
        })

        $('input').not('input[type=radio]').focusout(function () {
            $('.ps-navigation--footer').css("position", "fixed")
        })
    });

    $("#place_order_checkout").on('click', function () {
        $(this).prop('disabled', true)
        
      
        
        $("#checkout_form").submit()
        
    })

    async function insertRplReview(e) {
        var us = $(this).data("us");
        var rid = $(this).data("rid");
        var btn = $(this)
        btn.html("<i class='fa fa-spinner fa-spin'></i> Posting")
        btn.attr("disabled", true)
        var message = $(`#${rid}`).val();
        var validation = $(`.validation_warning_for_rpl_review${rid}`)
        if (message.length < 10) {
            btn.attr("disabled", false)
            btn.html("Post reply")
            validation.css("color", "#dc3545")
            return validation.css("display", "block")
        }
        let data = {
            c_id: us,
            review_id: rid,
            message: message
        }
        const requestOptions = {
            'method': 'POST',
            'body': JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        try {
            const response = await fetch(`${durl}review/rpl_add`, requestOptions)
            if (response.status === 200) {
                window.location.reload()
            }
        } catch (err) {
            validation.html("Failed to submit.")
            return validation.css("display", "block")
        }
    }

    function input_visible(e) {
        var auth = $("[data-auth]").attr("data-auth") === "1" ? true : false
        if (auth) {
            let b = document.getElementById($(this).data("rrid"))
            if (b.style.display == "none") {
                b.style.display = "block"
            } else {
                b.style.display = "none"
            }
        } else {
            window.location.pathname = "login"
        }
    }

    async function HelpfullCount(e) {
        var auth = $(this).data("auth")
        if (auth !== 1) {
            return window.location.pathname = "login"
        }
        var btn = document.getElementById($(this).data("helpful"))
        var review_id = $(this).data("helpful")
        review_id = review_id.substring(8, review_id.length)
        var p = $(`#count_display_${review_id}`)
        var p2 = $(`.helpful_${review_id}`)
        p2.css("display", "block")
        btn.style.display = "none"
        const requestOptions = {
            'method': 'PUT',
            'body': JSON.stringify({ review_id: review_id }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        try {
            const response = await fetch(`${durl}review/helpful`, requestOptions)
            if (response.status === 200) {
                p.css("display", "block")
                var json = await response.json()
                p.html(`${json.data.count} people found this helpful`)
            } else {
                p.css("color", "#dc3545")
                p.html(`Fail to submit.`)
            }
        } catch (err) {
            if (err) {
                p.css("color", "#dc3545")
                p.html(`Fail to submit.`)
            }
        }
    }

    $("[data-speakid]").each((x, d) => {
        $(d).on("click", (e) => {
            e.preventDefault()
            document.getElementById("videoModal_Customer").style.display = "flex"
            let video = $(d).data("video_url")+"?autoplay=1"
            let ifrem = document.getElementById("video_container_customer_speak")
            ifrem.src = video
            document.querySelector(".modal-dialog").style.width = "100%"
        })
    })
    const model = document.getElementById("videoModal_Customer")
    $(model).on("click", () => {
        model.style.display = "none"
    })

    $("[data-helpful]").each((x, d) => {
        $(d).on("click", HelpfullCount)
    })

    $("[data-rrid]").each((x, d) => {
        $(d).on("click", input_visible)
    })
    $("[data-rid]").each((x, d) => {
        $(d).on("click", insertRplReview)
    })
    $(".buy-now").on("click", buynow)
    $(".add-to-carta").on("click", addToCart)
    $(".remove_from_cart").on("click", removeFromcart)
    $(".mobile-add-to-cart").on("click", addToCart)
    $(".mobile-remove_from_cart").on("click", removeFromcart)
    $(".load-more-review").on('click', loadMoreReview)

})(jQuery);

