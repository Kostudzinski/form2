var $homeSlider = $('.swiper-container.home_slider');
if($homeSlider.length) {
	var mySwiper = new Swiper ('.swiper-container.home_slider', {
		slidesPerView: 4,
		spaceBetween: 10,
		loop: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		autoplay: {
			delay: 4000,
		},
		breakpoints: {
			767: {
				slidesPerView: 1
			}
		}
	});
}

var $productLineSlider = $('.swiper-container.product_line_slider');
if($productLineSlider.length) {
	var mySwiper = new Swiper ('.swiper-container.product_line_slider', {
		slidesPerView: 3,
		loop: true,
		centeredSlides: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			767: {
				slidesPerView: 1,
				autoHeight: true
			}
		}
	})
}

var $recomSlider = $('.swiper-container.recom_slider');
if($recomSlider.length) {
	var mySwiper = new Swiper ('.swiper-container.recom_slider', {
		// Optional parameters
		slidesPerView: 1,
		loop: true,
		autoHeight: true,
		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	})
}

var $skorzystajSlider = $('.swiper-container.skorzystaj_slider');
if($skorzystajSlider.length) {
	var mySwiper = new Swiper ('.swiper-container.skorzystaj_slider', {
		// Optional parameters
		slidesPerView: 1,
		loop: true,
		autoplay: {
			delay: 4000,
		},
	})
}

var $stratasysSlider = $('.stratasys_slider');
if($stratasysSlider.length) {
	var stratasys_slider = new Swiper('.stratasys_slider', {
		slidesPerView: 1,
		loop: true,
		autoplay: {
			delay: 5000,
		},
		navigation: {
			nextEl: '.stratasys_slider .swiper-button-next',
			prevEl: '.stratasys_slider .swiper-button-prev'
		}
	});

	$stratasysSlider.hover(function() {
		stratasys_slider.autoplay.stop();
	}, function() {
		stratasys_slider.autoplay.start();
	});
}

var $branchesTabsSlider = $('.rozwiazania_tabs_slider');
if($branchesTabsSlider.length) {
	var branches_tabs_slider = new Swiper('.rozwiazania_tabs_slider', {
		slidesPerView: 6,
		loop: true,
		navigation: {
			nextEl: '.rozwiazania_tabs_slider .swiper-button-next',
			prevEl: '.rozwiazania_tabs_slider .swiper-button-prev'
		},
		on: {
			sliderMove: function () {
				$('.rozwiazania_tabs_slider .swiper-button-prev').fadeIn(200);
			},
		},
	});
	$('.rozwiazania_tabs_slider .swiper-button-next').click(function () {
		$('.rozwiazania_tabs_slider .swiper-button-prev').fadeIn(200);
	});
}

var $tabsSlider = $('.swiper-container.tabs_slider');
if($tabsSlider.length) {
	var tabsSwiper = new Swiper('.swiper-container.tabs_slider', {
		init: false,
		direction: 'vertical',
		slidesPerView: 10,
		allowTouchMove: false,
		navigation: {
			nextEl: '.tabs_slider_next_arrow',
			prevEl: '.tabs_slider_prev_arrow',
		},
		on: {
			slideChange: function () {
				if (tabsSwiper.activeIndex == 0) {
					/*$('.tabs_slider_prev').hide()
					$('.tabs_slider_next').show()*/
					$('.tabs_slider_prev').addClass("no_arrow")
				}
				// last Slide
				else if (tabsSwiper.activeIndex == tabsSwiper.slides.length-10) {
					/*$('.tabs_slider_prev').show()
					$('.tabs_slider_next').hide()*/

					$('.tabs_slider_next').addClass("no_arrow")
				}
				// slides inbetween
				else {
					/*$('.tabs_slider_prev').show()
					$('.tabs_slider_next').show()*/
					$('.tabs_slider_prev').removeClass("no_arrow")
					$('.tabs_slider_next').removeClass("no_arrow")
				}
			}
		}
	});

	tabsSwiper.on('init', function() {
		$('.tabs_slider_prev').addClass("no_arrow");
		if(tabsSwiper.slides.length < 11) {
			$('.tabs_slider_prev').hide()
			$('.tabs_slider_next').hide()
		}

	});

	// init Swiper
	tabsSwiper.init();
}

var $galeriaWydrukowSlider = $('.galeria_wydrukow_slider');
if($galeriaWydrukowSlider.length) {
	var galeria_wydrukow_slider = new Swiper('.galeria_wydrukow_slider', {
		slidesPerView: 1,
		loop: true,
		initialSlide: 0

	});

	var galeria_wydrukow_slider_nav = new Swiper('.galeria_wydrukow_slider_nav', {
		loop: true,
		slidesPerView: 4,
		navigation: {
			nextEl: '.galeria_wydrukow_slider_nav .swiper-button-next',
			prevEl: '.galeria_wydrukow_slider_nav .swiper-button-prev'
		}

	});

	$('.galeria_wydrukow_slider_nav a').each(function () {
		$('.galeria_wydrukow_slider_nav a').click(function (e) {
			e.preventDefault();
			$('.galeria_wydrukow_slider_nav a').removeClass('active');
			$(this).addClass('active');
			var id = parseInt($(this).attr("data-hash")) + 1;
			galeria_wydrukow_slider.slideTo(id);
		});
	});

	galeria_wydrukow_slider.on('TransitionEnd', function () {
		var realIndex = $('.galeria_wydrukow_slider .swiper-slide-active').attr('data-swiper-slide-index');
		var id = $('.galeria_wydrukow_slider_nav a.active').attr("data-hash");
		$('.galeria_wydrukow_slider_nav a').removeClass('active');
		$('.galeria_wydrukow_slider_nav a:eq(' + realIndex + ')').addClass('active');
		galeria_wydrukow_slider_nav.slideTo(id);
	});

	setTimeout(function () {
		galeria_wydrukow_slider.update();
	}, 500);
}

var $sls_galeriaWydrukowSlider = $('.materials_sls .galeria_wydrukow_slider');
if($sls_galeriaWydrukowSlider.length) {
	var galeria_wydrukow_slider = new Swiper('.materials_sls .galeria_wydrukow_slider', {
		slidesPerView: 1,
		loop: true,
		initialSlide: 0

	});

	var galeria_wydrukow_slider_nav = new Swiper('.materials_sls .galeria_wydrukow_slider_nav', {
		loop: true,
		slidesPerView: 4,
		navigation: {
			nextEl: '.materials_sls .swiper-button-next',
			prevEl: '.materials_sls .swiper-button-prev'
		}

	});

	$('.galeria_wydrukow_slider_nav a').each(function () {
		$('.galeria_wydrukow_slider_nav a').click(function (e) {
			e.preventDefault();
			$('.galeria_wydrukow_slider_nav a').removeClass('active');
			$(this).addClass('active');
			var id = parseInt($(this).attr("data-hash")) + 1;
			galeria_wydrukow_slider.slideTo(id);
		});
	});

	galeria_wydrukow_slider.on('TransitionEnd', function () {
		var realIndex = $('.galeria_wydrukow_slider .swiper-slide-active').attr('data-swiper-slide-index');
		var id = $('.galeria_wydrukow_slider_nav a.active').attr("data-hash");
		$('.galeria_wydrukow_slider_nav a').removeClass('active');
		$('.galeria_wydrukow_slider_nav a:eq(' + realIndex + ')').addClass('active');
		galeria_wydrukow_slider_nav.slideTo(id);
	});
}

var $fdm_galeriaWydrukowSlider = $('.materials_fdm .galeria_wydrukow_slider');
if($fdm_galeriaWydrukowSlider.length) {
	var galeria_wydrukow_slider = new Swiper('.materials_fdm .galeria_wydrukow_slider', {
		slidesPerView: 1,
		loop: true,
		initialSlide: 0

	});

	var galeria_wydrukow_slider_nav = new Swiper('.materials_fdm .galeria_wydrukow_slider_nav', {
		loop: true,
		slidesPerView: 4,
		navigation: {
			nextEl: '.materials_fdm .swiper-button-next',
			prevEl: '.materials_fdm .swiper-button-prev'
		}

	});

	$('.galeria_wydrukow_slider_nav a').each(function () {
		$('.galeria_wydrukow_slider_nav a').click(function (e) {
			e.preventDefault();
			$('.galeria_wydrukow_slider_nav a').removeClass('active');
			$(this).addClass('active');
			var id = parseInt($(this).attr("data-hash")) + 1;
			galeria_wydrukow_slider.slideTo(id);
		});
	});

	galeria_wydrukow_slider.on('TransitionEnd', function () {
		var realIndex = $('.galeria_wydrukow_slider .swiper-slide-active').attr('data-swiper-slide-index');
		var id = $('.galeria_wydrukow_slider_nav a.active').attr("data-hash");
		$('.galeria_wydrukow_slider_nav a').removeClass('active');
		$('.galeria_wydrukow_slider_nav a:eq(' + realIndex + ')').addClass('active');
		galeria_wydrukow_slider_nav.slideTo(id);
	});
}