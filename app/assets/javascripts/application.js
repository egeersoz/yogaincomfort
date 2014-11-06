// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require bootstrap-sprockets
//= require jquery_ujs
// require turbolinks
//= require maps
//= require_tree .

$(document).ready(function() {

	$('#sixty_minutes, #once').addClass('selected');

	var values = {
		sixty_minutes: 75,
		ninety_minutes: 100,
		once: 1,
		biweekly: 0.95,
		weekly: 0.9
	};

	function calculatePrice() {
		var selected_array = [];
		$('.selected').each(function() {
			selected_array.push(values[$(this).attr('id')]);
		});
		$('#final-price').html((selected_array[0] * selected_array[1]).toFixed(2));
	}
	calculatePrice();

	$('.pricing-item').on('click', function() {
		$(this).parent('.list-group').children('.pricing-item.selected').removeClass('selected');
		$(this).addClass('selected');
		calculatePrice();
	});

});