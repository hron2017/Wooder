//====================  SCROLL ========================//
$(window).scroll(function (event) {
	var scr = $(this).scrollTop();
	sectors(scr);
});
function sectors(scr) {
	var w = $(window).outerWidth();
	var h = $(window).outerHeight();
	if (scr > 130) {
		$('.header').addClass('scroll');
	} else {
		$('.header').removeClass('scroll');
	}
}
//====================  <!-- SCROLL --> ========================//
//====================  UP ========================//
$(window).scroll(function () {
	var w = $(window).width();
	if ($(window).scrollTop() > 50) {
		$('#up').fadeIn(300);
	} else {
		$('#up').fadeOut(300);
	}
});
$('#up').click(function (event) {
	$('body,html').animate({ scrollTop: 0 }, 300);
});
//==================== <!-- UP --> ========================//
//====================  ImageBg ========================//
function ibg() {
	function isIE() {
		let ibg = document.querySelectorAll(".ibg");
		for (var i = 0; i < ibg.length; i++) {
			if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
				ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
			}
		}
	}
}
ibg();
//====================  <!-- ImageBg -->  ========================//

//====================   GoTO -->  ========================//
$('.goto').click(function () {
	var el = $(this).attr('href').replace('#', '');

	var offset = 0;
	$('body,html').animate({ scrollTop: $('.' + el).offset().top + offset }, 500, function () { });

	if ($('.header-menu').hasClass('active')) {
		$('.header-menu, .header-menu__icon').removeClass('active');
		$('body').removeClass('lock');
	}
	return false;
});
//====================  <!-- GoTO -->  ========================//

//====================  Intro Slider  ========================//
$('.intro-slider').slick({
	arrows: false,
	dots: true,
	autoplay: true,

	appendDots: $('.intro-slider__dots'),
	customPaging: function (slider, i) {
		return '<span class="intro-slider__dot"></span>';
	}
});
$('.intro-slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
	current = currentSlide + 1;
	$('.intro-slider__current').text('0' + current);
});
//====================  <!-- GoTO -->  ========================//


//====================  Video  ========================//
$('.play-btn').click(function (e) {
	e.preventDefault();
	$(this).parent().parent().find('.video-previw__poster, .section-contant').fadeOut();
	$(this).parent().parent().find('video, .section-video__close').fadeIn().get(0).play();
	$(this).parent().parent().find('.section-video__close').css("opacity", "1");
	$(this).fadeOut();
});

$('.section-video__close').click(function () {
	$(this).parent().parent().find('video').fadeOut();
	$(this).parent().parent().find('.section-contant, .play-btn').fadeIn();
	$(this).css("opacity", "0");
})
//====================  <!-- Video -->  ========================//