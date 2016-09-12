/*
$(document).ready(function(){
	$(".menu").hover(function(){
		$(this).css("border-color", "#F00")
		       .css("background-color", "#FF5a02")	
		       .css("color", "#0FF");
	},
	function(){
		$(this).css("border-color", "#FFF")
		       .css("background-color", "#EBFFEB")
		       .css("color", "#0FF");
	});
});
 */
$(document).ready(function() {
	$('#board111').hover(function() {
		$(this).animate({
			left : '0px'
		}, 1000, 'easeInSine');
	}, function() {
		$(this).animate({
			left : '-180px'
		}, 1500, 'easeOutBounce');
	});
});