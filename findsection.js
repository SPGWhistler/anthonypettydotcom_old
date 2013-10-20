/*global $, body */

var deleteItems = function (firstDate, lastDate) {
	var fd, ld;
	$('section').show();
	$('p').show();
	if (!firstDate || !lastDate) {
		return;
	}
	fd = new Date(firstDate);
	ld = new Date(lastDate);
	$('p.date-time').filter(function () {
		return ($(this).data('ts') < fd.getTime() || $(this).data('ts') > ld.getTime());
	}).hide().next().hide();
};

var addGlobalStyle = function (css) {
	var head, style;
	head = document.getElementsByTagName('head')[0];
	if (!head) { return; }
	style = document.createElement('style');
	style.type = 'text/css';
	style.innerHTML = css;
	head.appendChild(style);
};

$(document).ready(function () {
	addGlobalStyle("#datebar { position: fixed; top: 0; left: 0; right: 0; background: yellow; z-index: 10000; border: 1px solid black; }");
	addGlobalStyle("@media print { #datebar { display: none; } }");
	//addGlobalStyle("* {page-break-before: avoid; page-break-after: avoid} p.date-time {page-break-before: always;} section { page-break-after: auto; }");
	//addGlobalStyle("div {page-break-after: always;");
	/*
	$('section').each(function () {
		var html = $(this).html();
		var cls = $(this).attr('class');
		$('#wrapper').append('<div class="' + cls + '">' + html + '</div>');
		$(this).remove();
	});
	*/
	$('p.date-time').each(function () {
		var d;
		d = new Date($(this).text());
		$(this).attr('data-ts', d.getTime());
	});
	var html = '<div id="datebar">';
	html += 'Start Date: <input type="text" id="datepicker" /> - End Date: <input type="text" id="datepicker2" />';
	html += '</div>';
	$('body').append(html);
	$("#datepicker").datepicker().change(function () {
		deleteItems($('#datepicker').val(), $('#datepicker2').val());
	});
	$("#datepicker2").datepicker().change(function () {
		deleteItems($('#datepicker').val(), $('#datepicker2').val());
	});
});
