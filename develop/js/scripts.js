window.$ = window.jQuery  = require("jquery");
require('bootstrap');
require('waypoints/lib/jquery.waypoints');
require('waypoints/lib/shortcuts/sticky');
window.Swiper = require('swiper');
require('./common');
require('./sliders');

$(document).ready(function ($) {

	$('a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top - 50
				}, 1000);
				return false;
			}
		}
	});

	$('.hamb').click(function (e) {
		e.preventDefault();

		$(this).toggleClass('open');
		$(this).parent().toggleClass('opened');
	});

	if($('.materials_fdm').length) {
		$(document).scroll(function() {
			checkOffset();
		});
	}

	function checkOffset() {
		var offset = $('.materials_fdm').offset().top,
			parentSelector = $('.materials_fdm__aside_wrapper').width();
		if($(window).scrollTop() > offset) {
			if($('.materials_fdm__aside').offset().top + $('.materials_fdm__aside').height()
				>= $('footer').offset().top - 50)
				$('.materials_fdm__aside').css('width', parentSelector).removeClass('fixedPosition').addClass('bottomPosition');
			if($(document).scrollTop() + window.innerHeight < $('footer').offset().top)
				$('.materials_fdm__aside').css('width', parentSelector).removeClass('bottomPosition').addClass('fixedPosition');
		} else {
			$('.materials_fdm__aside').removeClass('bottomPosition').removeClass('fixedPosition');
		}
	}

	$('.materials_fdm__mobile-aside a.open_nav').click(function () {
		if($('.materials_fdm__mobile-aside .nav ul').hasClass('opened')) {
			$('.materials_fdm__mobile-aside .nav ul').slideUp(300).removeClass('opened');
			$(this).removeClass('opened');
			$(this).find('span').text('pokaż wszystkie');
		} else {
			$('.materials_fdm__mobile-aside .nav ul').addClass('opened').slideDown(300);
			$(this).addClass('opened');
			$(this).find('span').text('zwiń');
		}
	});

});