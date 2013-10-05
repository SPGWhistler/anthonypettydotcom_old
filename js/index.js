/*global $ */
(function () {
	$(function () {
		$('#headernav a').each(function () {
			var $this, href;
			$this = $(this);
			href = $this.attr('href');
			if (href.substr(0, 1) === '#' && href.length > 1) {
				$this.click(function () {
					$('#headernav li').removeClass('active');
					$this.parent().addClass('active');
					$('.container>div').hide();
					$(href).show();
				});
			}
		});
	});
}());
