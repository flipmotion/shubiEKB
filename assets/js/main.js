$(document).ready(function() {
	$('[data-item="phone"]').mask("9 (999) 999-99-99");
	$("body").scrollspy({target: "#menu", offset:80});
	$('a.smooth').click(function(){
		$('html, body').animate({
			scrollTop: $( $.attr(this, 'href') ).offset().top - 80
		}, 1000);
		return false;
	});
	var form = $('[data-form="send"]');
	form.ajaxForm(function() {
		$('#call').modal('hide');
		$('#thx').modal('show');
		$(form).resetForm();
	});
	menuTop();
	$(window).scroll(function () {
		var scroll_r = $(this).scrollTop();
		menuTop();
	});
	$('.timer').countdown({
		date: +(new Date) + 86400000 * 3,
		//date: "October 7, 2087 12:55:00",
		render: function(data) {
			$(this.el).html("<div class='days'>" + this.leadingZeros(data.days, 2) + " </div><div class='hours'>" + this.leadingZeros(data.hours, 2) + " </div><div class='mins '>" + this.leadingZeros(data.min, 2) + " </div><div class='secs'>" + this.leadingZeros(data.sec, 2) + " </div>");
		},
		onEnd: function() {
			this.update(+(new Date) + 86400000 * 10);
			this.start();
		}
	});
	var myMap2;
	ymaps.ready(init2);


	function init2 () {
		myMap2 = new ymaps.Map('map', {
			center: [56.854310, 60.605048],
			zoom: 16,
			controls: []
		}),
		myMap2.behaviors
			.disable(['rightMouseButtonMagnifier' , 'scrollZoom'])
			myPlacemark = new ymaps.Placemark([56.854310, 60.605048], {
				hintContent: [
				''
			].join('')
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'assets/img/pick-map.png',
				iconImageSize: [21, 29],
				iconImageOffset: [-10.5, -29]
			});
		myMap2.geoObjects.add(myPlacemark);
		
	}
});
function menuTop(){
	if ( $(this).scrollTop() > 10 && !$('.header').hasClass('open') ) {
		$('.header').addClass('fix-header');
		var loc = $('.header .logo img').attr("data-src");
		$('.header .logo img').attr("src",loc);
	} else if ( $(this).scrollTop() <= 10 ) {
		$('.header').removeClass('fix-header');
		var pick = $('.header .logo img').attr("data-src2");
		$('.header .logo img').attr("src",pick);
	}
}
