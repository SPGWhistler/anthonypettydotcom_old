/*global $ */
(function () {
	$(function () {
		var loc;
		$('#headernav a').each(function () {
			var $this, href;
			$this = $(this);
			href = $this.attr('href');
			if (href.substr(0, 1) === '#' && href.length > 1) {
				$this.click(function () {
					$('#headernav li').removeClass('active');
					$this.parent().addClass('active');
					$('.container>div').hide();
					$(href).fadeIn();
				});
			}
		});
		$('a.navbar-brand').click(function () {
			$('#headernav li a[href="#hello"]').click();
		});
		$('nav').fadeIn();
		loc = window.location.hash;
		if (loc !== "") {
			$('#headernav li').removeClass('active');
			$('#headernav li a[href="' + loc + '"]').parent().addClass('active');
			$('.container>div').hide();
			$(loc).fadeIn(1200);
		} else {
			$('#headernav li a[href="#home"]').parent().addClass('active');
			$('#hello').fadeIn(1200);
		}
	});
}());
