$(function(){
	$('#menu a').click(function(e){
		if ($(this).attr('href').substring(0,1) === '#') {
			e.preventDefault();
			var div = $(this).attr('href');
			var $cur = $('#content div:visible');
			if ('#' + $cur.attr('id') !== div) {
				$cur.slideUp();
				$(div).slideDown();
			}
			return false;
		}
	});
});
