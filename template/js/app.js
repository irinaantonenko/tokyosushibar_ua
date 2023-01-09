function copytext(el) {
     
    var doc = document,
	text = doc.getElementById(el), range, selection;
	
	if(doc.body.createTextRange) {
	
		range = document.body.createTextRange();
		range.moveToElementText(text);
		range.select();
		
	} else if(window.getSelection) {
		
		selection = window.getSelection();
		range = document.createRange();
		range.selectNodeContents(text);
		selection.removeAllRanges();
		selection.addRange(range);
	}
	document.execCommand("copy");
}   


function init() {
    var e, t, a = document.getElementById("map");
    if (a) {
        var n = {
            lat: 55.753648,
            lng: 37.604270
        };
        
        var coord1 = $('.b-address:eq(0)').attr('data-coords');
        var coord2 = $('.b-address:eq(1)').attr('data-coords');
        
        var text1 = $('.b-address:eq(0)').find('.b-address__place').text();
        var text2 = $('.b-address:eq(1)').find('.b-address__place').text();
        
        
        var res = coord1.split(",");
        var res2 = coord2.split(",");
         
         
        var p1 = {
            lat: parseFloat(res[0]),
            lng: parseFloat(res[1]),
        }
        
        var p2 = {
            lat: parseFloat(res2[0]),
            lng: parseFloat(res2[1]),
        }
        
        console.log(p1);
        
        

        e = new google.maps.Map(a, {
            center: n,
            zoom: 11,
            mapTypeControlOptions: {
                mapTypeIds: []
            },
            disableDefaultUI: !0,
            mapTypeControl: !0,
            scaleControl: !0,
            zoomControl: !0,
            styles: [{
                featureType: "water",
                elementType: "geometry",
                stylers: [{
                    color: "#e9e9e9"
                }, {
                    lightness: 17
                }]
            }, {
                featureType: "landscape",
                elementType: "geometry",
                stylers: [{
                    color: "#f5f5f5"
                }, {
                    lightness: 20
                }]
            }, {
                featureType: "road.highway",
                elementType: "geometry.fill",
                stylers: [{
                    color: "#ffffff"
                }, {
                    lightness: 17
                }]
            }, {
                featureType: "road.highway",
                elementType: "geometry.stroke",
                stylers: [{
                    color: "#ffffff"
                }, {
                    lightness: 29
                }, {
                    weight: .2
                }]
            }, {
                featureType: "road.arterial",
                elementType: "geometry",
                stylers: [{
                    color: "#ffffff"
                }, {
                    lightness: 18
                }]
            }, {
                featureType: "road.local",
                elementType: "geometry",
                stylers: [{
                    color: "#ffffff"
                }, {
                    lightness: 16
                }]
            }, {
                featureType: "poi",
                elementType: "geometry",
                stylers: [{
                    color: "#f5f5f5"
                }, {
                    lightness: 21
                }]
            }, {
                featureType: "poi.park",
                elementType: "geometry",
                stylers: [{
                    color: "#dedede"
                }, {
                    lightness: 21
                }]
            }, {
                elementType: "labels.text.stroke",
                stylers: [{
                    visibility: "on"
                }, {
                    color: "#ffffff"
                }, {
                    lightness: 16
                }]
            }, {
                elementType: "labels.text.fill",
                stylers: [{
                    saturation: 36
                }, {
                    color: "#333333"
                }, {
                    lightness: 40
                }]
            }, {
                elementType: "labels.icon",
                stylers: [{
                    visibility: "off"
                }]
            }, {
                featureType: "transit",
                elementType: "geometry",
                stylers: [{
                    color: "#f2f2f2"
                }, {
                    lightness: 19
                }]
            }, {
                featureType: "administrative",
                elementType: "geometry.fill",
                stylers: [{
                    color: "#fefefe"
                }, {
                    lightness: 20
                }]
            }, {
                featureType: "administrative",
                elementType: "geometry.stroke",
                stylers: [{
                    color: "#fefefe"
                }, {
                    lightness: 17
                }, {
                    weight: 1.2
                }]
            }]
        });
        var i = new google.maps.InfoWindow({
            content: '<div class="g-marker">\n<p>'+text1+'</p>\n</div>'
        });
        
        var i2 = new google.maps.InfoWindow({
            content: '<div class="g-marker">\n<p>'+text2+'</p>\n</div>'
        });
        (t = new google.maps.Marker({
            position: p1,
            icon: {
                url: "/template/img/mapMarker.png",
                scaledSize: new google.maps.Size(160, 120),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(80, 115)
            },
            map: e,
            title: "Tokio",
            animation: google.maps.Animation.DROP
        })).addListener("click", function() {
            i.open(e, t)
        }), google.maps.event.addListener(e, "click", function() {
            i.close()
        });
        
        
        (t2 = new google.maps.Marker({
            position: p2,
            icon: {
                url: "/template/img/mapMarker.png",
                scaledSize: new google.maps.Size(160, 120),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(80, 115)
            },
            map: e,
            title: "Tokio",
            animation: google.maps.Animation.DROP
        })).addListener("click", function() {
            i2.open(e, t2)
        }), google.maps.event.addListener(e, "click", function() {
            i2.close()
        })
        

        
        
    }
}
function delivery(){
    var val = $('input[name="delivery"]:checked').val();
    if(val == '1'){
        $('#deliveryForm').slideUp();
        $('#deliveryAdress').slideDown();
    } if(val == '2'){
        $('#deliveryAdress').slideUp();
        $('#deliveryForm').slideDown();
        
    }
};
$(document).ready(function() {
document.cookie = "cart_timeDelivery=0";
	$(document).on('dp.change','#formOrderTime [name="orderTime"]', function(){
		if($('#deliveryDateButton').hasClass('btn__silver_active')){
				var time = $('#formOrderTime [name="orderTime"]').val();
	
		  document.cookie = "cart_timeDelivery="+time;
		   miniShop2.Order.getcost();
		}
	
	});
	
		$('#deliveryNowButton').on('click', function(){
			
			    document.cookie = "cart_timeDelivery=0";
				
				miniShop2.Order.getcost();
		});
		
		$('#deliveryDateButton').on('click', function(){
			$('#formOrderTime [name="orderTime"]').trigger('dp.change');
			
		});
        miniShop2.Callbacks.add('Order.getcost.response.success', 'orders_add_ok', function(response) {
    
        if (response.data.special) {
			    var special = $(response.data.special);
            if (!$('#cart-products').find('#' + special.attr('id') + '.special').length) {
                $('#cart-products').append(special.hide().fadeIn("normal"));
				
				if(response.data.message){
					miniShop2.Message.show(response.data.message, {
						theme: 'ms2-message-success',
						sticky: false
					});
				}
            }

        } else {
            $('#cart-products tr.special').fadeOut("normal", function() {
                $(this).remove();
				if(response.data.message){
					miniShop2.Message.show(response.data.message, {
						theme: 'ms2-message-success',
						sticky: false
					});
				}
            });
        }
    });
    /*=========about us slider ========*/
    $('.stick-photos').slick({
        appendArrows: '.photos__nav',
        prevArrow: '<button type="button" class="photos__arrow slick-prev"><svg width="29" height="24" viewBox="0 0 29 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.0607 13.0607C28.6464 12.4749 28.6464 11.5251 28.0607 10.9393L18.5147 1.3934C17.9289 0.807611 16.9792 0.807611 16.3934 1.3934C15.8076 1.97919 15.8076 2.92893 16.3934 3.51472L24.8787 12L16.3934 20.4853C15.8076 21.0711 15.8076 22.0208 16.3934 22.6066C16.9792 23.1924 17.9289 23.1924 18.5147 22.6066L28.0607 13.0607ZM0 13.5H27V10.5H0V13.5Z" fill="white"/></svg></button>',
        nextArrow: '<button type="button" class="photos__arrow slick-next"><svg width="29" height="24" viewBox="0 0 29 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.0607 13.0607C28.6464 12.4749 28.6464 11.5251 28.0607 10.9393L18.5147 1.3934C17.9289 0.807611 16.9792 0.807611 16.3934 1.3934C15.8076 1.97919 15.8076 2.92893 16.3934 3.51472L24.8787 12L16.3934 20.4853C15.8076 21.0711 15.8076 22.0208 16.3934 22.6066C16.9792 23.1924 17.9289 23.1924 18.5147 22.6066L28.0607 13.0607ZM0 13.5H27V10.5H0V13.5Z" fill="white"/></svg></button>'
    })
    
    
    /*===== Yandex metrika =====*/
    $('.js_clickPhoneFirstScreen').on('click', function(){
        ym(51941426,'reachGoal','clickOrder');
        gtag('event','click', {'event_category':'button','event_label':'clickOrder'});
        return true;
    });
    
    $('.js_clickPhoneFirstScreen').on('click', function(){
        ym(51941426,'reachGoal',' clickPhoneFirstScreen');
        gtag('event','click', {'event_category':'button','event_label':'clickPhoneFirstScreen'});
        return true;
    });
    
    $('.js_add_to_cart').on('click', function(){
        ym(51941426,'reachGoal','clickAddToCart');
        gtag('event','click', {'event_category':'button','event_label':'clickAddToCart'});
        return true;
    });
    
    $('.js_order_submit_btn').on('click', function(){
        ym(51941426,'reachGoal','clickFinalOrder');
        gtag('event','click', {'event_category':'button','event_label':'clickFinalOrder'});
        return true;
    });
    
    
    
    /*===== Work Time =====*/
    if($('#msCart').length){
        $(function() {
			
			/* === для НГ ===*/
			//document.getElementById('deliveryDateButton').style.display='none';
			
			 let deliveries = document.querySelectorAll('#deliveries .order__descr');

			let today = new Date();

			if (today.getDate()  == 31 && today.getMonth() == 11) {

				if (deliveries) {
				   deliveries.forEach(function(elem,index){
					 if (elem.textContent.includes('2 000 руб.'))
					   deliveries[index].textContent = elem.textContent.replace('2 000 руб.','5 000 руб.');
					});
				}
			}			

			/* === для НГ ===<<< */
			
			
            var d = new Date()
            var time = d.getHours()
            console.log('time ' + time);
            if (time >= 22 || time < 12){
                $("#timeMess").show();
				$("#msOrder").hide();
				$(".table-responsive").hide();
				
            } else{
                $("#timeMess").hide();
            }
        });
    }
    
    /*===== Category filter =====*/
    if($('#categoryPage').length){
        $(function() {
            var hash = window.location.hash;
            
            if(hash){
                hash = hash.replace('#', '')
                console.log(hash);
                $('.' + hash).show().addClass('category__list_active');
                var subcategory = $('.subcategory__item[data-subcategory="' + hash  + '"]').addClass('category__item_active');
                var category = subcategory.parents('.subcategory__nav').attr('id');
                $('.' + category).addClass('category__item_active')
            } else {

                var parents = $('.subcategory__item:first').addClass('category__item_active').parents('.subcategory__nav');
                var parents_category = parents.attr('id');
                $('.' + parents_category).addClass('category__item_active');
                var first_subcategory = $('.subcategory__item:first-child').data('subcategory');
                $('.' + first_subcategory).show().addClass('category__list_active');
                            
            }
        });
        
        $('.subcategory__item').on('click', function(){
            var category = $(this).data('subcategory');
            window.location.hash = category;
            $('.category__list.category__list_active').hide();
            $('.subcategory__item.category__item_active').removeClass('category__item_active');
            $('.subcategory__item[data-subcategory="' + category + '"]').addClass('category__item_active');
            $('.' + category).show().addClass('category__list_active');
        });
    }
    
    
    /*===== Category filter =====*/
    delivery();
    $(document).on('change', '[name="delivery"]', function() {
        delivery();
    })
    
    /*===== Quantity =====*/
    $('.quantity-button').on('click', function(){
        var input = $(this).parents('.quantity').find('input');
        var old_val = parseFloat(input.val());
        var step = +$(this).data('step');
        var newVal = old_val + step;
        if (newVal < input.attr('min')) {
          var newVal = old_val;
        };      
        input.val(newVal);
        input.trigger("change");
    });
    
    
    /*========= delivery banner ========*/
    let slideIndex = 0;
    if($('.delbanner__img')){
        showDeliverySlides();
        function showDeliverySlides() {
           let slides = $('.delbanner__img');
           slides.removeClass('delbanner__img_active')
           slideIndex++;
           if (slideIndex >= slides.length) { 
                 slideIndex = 0;
            }
            $(slides[slideIndex]).addClass('delbanner__img_active');
            setTimeout(showDeliverySlides, 3000);
        }
    }
    /*===== fancybox =====*/
    $("[data-fancybox]").fancybox({
	    hash: false
    });
    
    
    //INSTAGRAM
    // (function (container) {
    //     if (!container.length) {
    //         return;
    //     }

    //     var accessToken = $.trim(container.data('access-token'));
    //     if (accessToken === '') {
    //         return;
    //     }

    
    
    //     var feed = new Instafeed({
    //         get: 'user',
    //         userId: container.data('user-id'),
    //         accessToken: accessToken,
    //         target: 'instagram_blk',
    //         limit: 60,
    //         resolution: 'standard_resolution',
           
    //         template: '<div class="inst_item"><img src="{{image}}" alt="flat12_instagramm"></div>',
    //         after: function () {

    //                 $('.instagram_box').owlCarousel({
    //                     navigation: true,
    //                     slideSpeed: 300,
    //                     paginationSpeed: 400,
    //                     smartSpeed: 900,
    //                     singleItem: true,
    //                     navigationText: ['', ''],
    //                     autoPlay: 3000,
    //                     stopOnHover: true,
    //                     pagination: false,
    //                     items: 6,
    //                     dots: false,
    //                     nav: false,
    //                     navText: ['', ''],
    //                     loop: true,
    //                     autoplay: true,
    //                     autoplayTimeout: 3000,
    //                     autoplayHoverPause: true,
    //                     slideBy: 1,
    //                     margin: 0,
    //                     lazyLoad: false,
    //                     responsive : {

    //                         0 : {
    //                             items: 3
    //                         },

    //                         768 : {
    //                             items: 5
    //                         },

    //                         1024 : {
    //                             items: 8

    //                         }
    //                     }
    //                 });

    //         }
    //     });

    //     feed.run();
    // })($('#instagram_blk'));

    var e = $(window),
        t = $(document),
        a = {
            mobileS: 375,
            mobile: 568,
            tablet: 768,
            desktop: 992,
            wide: 1366,
            hd: 1680
        },
        n = [.02, .01, .47, 1];
     
    function i() {
        var a, n, i;
        o(), a = 0, $("[js-popup]").magnificPopup({
                type: "inline",
                fixedContentPos: !0,
                fixedBgPos: !0,
                overflowY: "auto",
                closeBtnInside: !0,
                preloader: !1,
                midClick: !0,
                removalDelay: 300,
                mainClass: "popup-buble",
                callbacks: {
                    beforeOpen: function() {
                        a = e.scrollTop()
                    },
                    close: function() {
                        e.scrollTop(a)
                    }
                }
            }), $("[js-popup-gallery]").magnificPopup({
                delegate: "a",
                type: "image",
                tLoading: "Загрузка #%curr%...",
                mainClass: "popup-buble",
                gallery: {
                    enabled: !0,
                    navigateByImgClick: !0,
                    preload: [0, 1]
                },
                image: {
                    tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
                }
            }), $("[js-main-page-slider]").each(function(e, t) {
                $(t).slick({
                    autoplay: 20,
                    dots: !0,
                    customPaging: function(e, t) {
                        return '<a class="fish__bone">'
                    },
                    fade: !0,
                    arrows: !1,
                    prevArrow: '<div class="slick-prev"><svg class="ico ico-back-arrow"><use xlink:href="img/sprite.svg#ico-back-arrow"></use></svg></div>',
                    nextArrow: '<div class="slick-next"><svg class="ico ico-next-arrow"><use xlink:href="img/sprite.svg#ico-next-arrow"></use></svg></div>',
                    infinite: !0,
                    speed: 300,
                    slidesToShow: 1,
                    accessibility: !1,
                    adaptiveHeight: !1,
                    draggable: !0,
                    swipe: !0,
                    swipeToSlide: !0,
                    touchMove: !0
                })
            }), $(".wow").each(function(e, t) {
                var a, n = scrollMonitor.create($(t));
                a = $(window).width() < 768 ? 0 : $(t).data("animation-delay");
                var i = $(t).data("animation-class") || "wowFadeUp",
                    o = $(t).data("animation-name") || "wowFade";
                n.enterViewport(throttle(function() {
                    $(t).addClass(i), $(t).css({
                        "animation-name": o,
                        "animation-delay": a,
                        visibility: "visible"
                    })
                }, 100, {
                    leading: !0
                })), n.exitViewport(throttle(function() {
                    $(t).removeClass(i), $(t).css({
                        "animation-name": "none",
                        "animation-delay": 0,
                        visibility: "hidden"
                    })
                }, 100))
            }),
            function() {
                $("[js-dateMask]").mask("99.99.99", {
                    placeholder: "ДД.ММ.ГГ"
                }), $("input[type='tel']").mask("0 (000) 000-0000", {
                    placeholder: "_ (___) ___-____"
                }), $("input[data-js-mask]"), $("input[data-js-timeMask]").mask("00:00", {
                    placeholder: $(this).attr("placeholder"),
                    selectOnFocus: !0
                });
            }(), t.find("[js-lazy]").Lazy({
                threshold: 500,
                enableThrottle: !0,
                throttle: 100,
                scrollDirection: "vertical",
                effect: "fadeIn",
                effectTime: 350,
                onError: function(e) {
                    console.log("error loading " + e.data("src"))
                },
                beforeLoad: function(e) {}
            }), (n = t.find("[js-select]")).chosen({
                disable_search: !0
            }), n.each(function() {
                var e = $(this)[0].classList;
                $(this).next(".chosen-container").attr("data-class", e)
            }), pickmeup.defaults = Object.assign(pickmeup.defaults, {
                format: "Y-m-d",
                locales: {
                    ru: {
                        days: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
                        daysShort: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
                        daysMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
                        months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
                        monthsShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"]
                    }
                },
                locale: "ru",
                title_format: "B",
                min: Date.now().toString()
            }), pickmeup("[js-datepicker]",{
                render: function(date) {
                        if ( [0,5,6].includes(date.getDay()) ||
                            ([7,8].includes(date.getDate()) && date.getMonth()==2 && date.getFullYear()==2021) ) {
                            return {
                                disabled   : true,
                                class_name : 'disabled'
                            }
                        }
                }
            }


        ), i = $(".mobile-chrome-fix-height"), e.on("orientationchange", function() {
                o(), i.removeClass("mobile-chrome-fix-height-fix"), setTimeout(function() {
                    i.addClass("mobile-chrome-fix-height-fix")
                }, 10)
            })

        // set timePicker date
        function getFormatDate() {

            var dt = new Date(),
                i=0,
                denyDays = [0,5,6];

            for (var i=0; i<7; i++){
                if (!denyDays.includes(dt.getDay())) break;
                dt.setDate(dt.getDate() + 1);
            }

            var d = new Date(dt),
                month = '' + (d.getMonth() + 1),
                day = '' + d.getDate(),
                year = d.getFullYear();

            if (month.length < 2)
                month = '0' + month;
            if (day.length < 2)
                day = '0' + day;

            return [year, month, day].join('-');
        }

        document.querySelector("[js-datepicker]").value=getFormatDate();

    }

    function o() {
        svg4everybody(), window.viewportUnitsBuggyfill.init({
            force: !1,
            refreshDebounceWait: 150,
            appendToBody: !0
        })
    }
    i(), t.on("click", '[href="#"]', function(e) {
        e.preventDefault()
    }).on("click", 'a[href^="#section"]', function() {
        var e = $(this).attr("href");
        return $("body, html").animate({
            scrollTop: $(e).offset().top
        }, 1e3), !1
    }), t.on("click", "[js-hamburger]", function() {
        $(this).toggleClass("is-active"), $(".mobile-navi").toggleClass("is-active")
    });
    
    
    //Barba.Pjax.Dom.containerClass = "page";
    //var s = Barba.BaseTransition.extend({
    //    start: function() {
    //        Promise.all([this.newContainerLoading, this.fadeOut()]).then(this.fadeIn.bind(this))
    //    },
    //    fadeOut: function() {
    //        var e = Barba.Utils.deferred();
    //        return anime({
    //            targets: this.oldContainer,
    //            opacity: .5,
    //            easing: n,
    //            duration: 300,
    //            complete: function(t) {
    //                e.resolve()
    //            }
    //        }), e.promise
    //    },
    //    fadeIn: function() {
    //        var e = this,
    //            t = $(this.newContainer);
    //        $(this.oldContainer).hide(), t.css({
    //            visibility: "visible",
    //            opacity: .5
    //        }), anime({
    //            targets: "html, body",
    //            scrollTop: 0,
    //            easing: n,
    //            duration: 150
    //        }), anime({
    //            targets: this.newContainer,
    //            opacity: 1,
    //            easing: n,
    //            duration: 300,
    //            complete: function(t) {
    //                $(window).scroll(), $(window).resize(), e.done()
    //            }
    //        })
    //    }
    //});
   // Barba.Pjax.getTransition = function() {
   //     return s
   // }, 
    
    //Barba.Prefetch.init(), Barba.Pjax.start(), Barba.Dispatcher.on("newPageReady", function(e, t, a, n) {
    //    r() && $.fn.fullpage.reBuild(), i(), $("[js-hamburger]").removeClass("is-active"), $(".mobile-navi").removeClass("is-active")
    //});
    
    
    var l = function() {
        var e;
        if (e = $(".icon-mouse.down-button")) return e;
        return (e = $('<a href="#" class="icon-mouse down-button" />')).appendTo("body"), e.click(function() {
            e.removeClass("mouse-showed"), $.fn.fullpage.moveSectionDown()
        }), e
    }();

    function r() {
        return $("html").hasClass("fp-enabled")
    }

    function c(e) {
        var t = $("#footer");
        e ? t.addClass("b-footer--fixed") : t.removeClass("b-footer--fixed")
    }

    function d() {
        if (e.width() > a.tablet && e.height() > 500) {
            if (r()) return $.fn.fullpage.reBuild(), void c(!0);
            var t = $("#fullpage");
            t.fullpage({
                anchors: ["home", "about", "news", "contacts"],
                paddingTop: "70px",
                paddingBottom: "60px",
                fixedElements: "#header, #footer",
                scrollOverflow: !0,
                normalScrollElements: "#map",
                fitToSection: false,
                sectionSelector: ".fp-sect",
                autoScrolling: false,
                responsiveWidth: 1024,
                responsiveHeight: 670,
                afterLoad: function(e, t) {
                    1 === t ? l.addClass("mouse-showed") : l.removeClass("mouse-showed")
                },
                onSlideLeave: function(e, t) {
                    1 === t ? l.addClass("mouse-showed") : l.removeClass("mouse-showed")
                }
            }), c(!0), t.addClass("fullpage-active")
        } else r() && ($.fn.fullpage.destroy("all"), c(!1))
    }
    d(), e.on("resize", debounce(d, 100)), $("[js-fullpage-link]").each(function(e, t) {
        $(t).click(function() {
            if (r()) $.fn.fullpage.moveTo($(this).attr("js-fullpage-link"));
            else {
                var e = $("[data-anchor=" + $(this).attr("js-fullpage-link") + "]");
                if (!e.length) return;
                var t = e.find("[js-nav-anchor]");
                $("html, body").animate({
                    scrollTop: (t.length ? t.offset().top - 10 : e.offset().top) - $("#header").height()
                }, 1e3)
            }
        })
    });
    var f = {
        $base: $(".select_container"),
        exists: function() {
            return !!this.$base
        },
        init: function() {
            if (!this.exists()) return null;
            var e = this,
                t = this.$base.find(".select_container-control"),
                a = t.eq(0).attr("data-link");
            this.setActiveMenu(a), t.click(function(t) {
                t.preventDefault(), e.setActiveMenu($(this).attr("data-link"))
            });
            
                if( $('.menu_select__nav').length > 0  ){
                   var hash = window.location.hash;
                    
                    if( hash !='' ){
                        
                        hash = hash.substring(1);
                       
                        $('.menu_select__nav_item[data-link='+hash+']').click();
                        
                    } else {
                        $('.menu_select__nav_item:eq(0)').click();
                        
                    }
                }
    
    
    
        },
        getActive: function() {
            return this.exists() ? parseInt(this.$base.attr("data-select-container-active")) : null
        },
        onMenuChange: function(e) {},
        menuCount: function() {
            return this.exists() ? this.$base.find(".select_container-control").length : null
        },
        setActiveMenu: function(e) {
            if (!this.exists()) return null;
            this.$base.find(`.select_container-block[data-id=${e}]`) && (this.$base.find(".select_container-block").removeClass("select_container-block--active"), this.$base.find(`.select_container-block[data-id=${e}]`).addClass("select_container-block--active"), this.$base.find(".select_container-control").removeClass("select_container-control--active"), this.$base.find(`.select_container-control[data-link=${e}]`).addClass("select_container-control--active"), this.onMenuChange(e))
        }
    };
    f.init(), f.onMenuChange = function(e) {
        var t = $(".menu_select__image");
        if (t) {
            var a = $(`.select_container-control[data-link=${e}]`),
                n = a.attr("data-img");
            t.find(".menu_select__image-frame").eq(0).css("background-image", `url("${n}")`), t.find(".menu_select__image_text").eq(0).text(a.text())
        }
    };
    var u = function(e) {
            if (e) {
                var t = $("#" + e);
                if (t.length) {
                    try {
                        $.fn.fullpage.setAllowScrolling(!1)
                    } catch (e) {}
                    t.addClass("b-modal--open"), $("html, body").addClass("global-modal--open")
                } else console.error(`Modal with id ${e} doesn't exist`)
            }
        },
        m = function() {
            try {
                $.fn.fullpage.setAllowScrolling(!0)
            } catch (e) {}
            $(".b-modal--open").removeClass("b-modal--open"), $("html, body").removeClass("global-modal--open")
        };
    $("[js-modal-invoker]").click(function() {
        m(), u($(this).attr("js-modal-invoker"))
    }), $("[js-modal-closer]").click(function() {
        m()
    }), $("video[autoplay]").each(function() {
        this.play()
    }), jQuery.extend(jQuery.validator.messages, {
        required: "Поле не заполнено",
        remote: "Please fix this field.",
        email: "Введите корректный e-mail",
        url: "Введите корректный URL",
        date: "Введите корректную дату",
        dateISO: "Введите корректную дату (ISO).",
        number: "Введите корректное число",
        digits: "Пожалуйста, введите только цифры",
        creditcard: "Введите корректный номер карты",
        equalTo: "Please enter the same value again.",
        accept: "Please enter a value with a valid extension.",
        maxlength: jQuery.validator.format("Не более {0} символов"),
        minlength: jQuery.validator.format("Не менее {0} символов"),
        rangelength: jQuery.validator.format("Please enter a value between {0} and {1} characters long."),
        range: jQuery.validator.format("Please enter a value between {0} and {1}."),
        max: jQuery.validator.format("Please enter a value less than or equal to {0}."),
        min: jQuery.validator.format("Please enter a value greater than or equal to {0}.")
    });
    
       
    if ( $('.menu_select__nav').length > 0 ){
        
        $('.menu_select__nav_item:eq(0)').click();
    }
}), 

$("#map").length > 0 && google.maps.event.addDomListener(window, "load", init), $(document).ready(function() {
    $(".js-registration-form").validate({
        errorPlacement: function(e, t) {
            e.addClass("ui-input__validation"), e.appendTo(t.parent("div"))
        },
        highlight: function(e) {
            $(e).parent("div").addClass("has-error")
        },
        unhighlight: function(e) {
            $(e).parent("div").removeClass("has-error")
        },
        submitHandler: function(e) {
            $(e).addClass("loading"), $.ajax({
                type: "POST",
                url: $(e).attr("action"),
                data: $(e).serialize(),
                success: function(t) {
                    $(e).removeClass("loading");
                    var a = $.parseJSON(t);
                    "success" == a.status || $(e).find("[data-error]").html(a.message).show()
                }
            })
        },
        rules: {
            last_name: "required",
            first_name: "required",
            email: {
                required: !0,
                email: !0
            },
            password: {
                required: !0,
                minlength: 6
            }
        },
        messages: {
            last_name: "Заполните это поле",
            first_name: "Заполните это поле",
            email: {
                required: "Заполните это поле",
                email: "Email содержит неправильный формат"
            },
            password: {
                required: "Заполните это поле",
                email: "Пароль мимимум 6 символов"
            }
        }
    })
});



// var fixNav = 300;
// 	$(window).scroll(function () {
// 		var scroll = $(this).scrollTop();
// 		if (scroll >= fixNav) {
// 			$('.fixed_block').fadeIn(500);
// 		} else {
// 				$('.fixed_block').fadeOut(500);
// 		}
// });