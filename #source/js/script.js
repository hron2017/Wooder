$('.header-top__btn-icon').click(function () {
	$('.header-top__form, .header-top__btn').toggleClass('visible');
});
function ibg() {
	$.each($('.ibg'), function (index, val) {
		if ($(this).find('img').length > 0) {
			$(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
		}
	});
}
ibg();