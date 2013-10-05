$(function(){
	$('#menu ul').css('margin-top', -($('#menu ul').height() / 2));
	$('#menu ul').fadeIn(1500);
	$('#menu a').click(function(e){
		if ($(this).attr('href').substring(0,1) === '#') {
			e.preventDefault();
			var div = $(this).attr('href');
			var $cur = $('#content div:visible');
			if ('#' + $cur.attr('id') !== div) {
				$cur.fadeOut(100, function(){
					$(div).css('margin-top', -($(div).height() / 2));
					$(div).fadeIn(100);
				});
			}
			return false;
		}
	});
});
