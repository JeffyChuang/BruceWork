$(document).ready(function(){
window.sr = ScrollReveal({ reset: true });
sr.reveal('.poster1-js',{ duration:1500,origin: 'bottom',scale:0.5});
sr.reveal('.poster1-js-text1',{ duration:1000,origin: 'left',delay:500,scale:0.5});
sr.reveal('.poster1-js-text2',{ duration:1000,origin: 'top',delay:1000,scale:0.5});

	$('.hamber').click(function(){
		if($('.navbar_1').css("left") == "-250px"){
			$('.navbar_1').animate({
				left:'0px'
			},1000,'easeInBounce');
			$('.section').animate({
				left:'250px'
			},1000,'easeInBounce');
			$('.hamber').animate({
				left:'270px'
			},1000,'easeInBounce');
		}else if($('.navbar_1').css("left") == "0px"){
			$('.navbar_1').animate({
				left:'-250px'
			},1000,'easeOutBounce');
			$('.section').animate({
				left:'0%'
			},1000,'easeOutBounce');
			$('.hamber').animate({
				left:'1%'
			},1000,'easeOutBounce');

		}
	});







});














// $(document).ready(function() {
// 	$('#board2222').click(function() {
// 		if($('#board111').css("left")=="-200px")
// 		{
// 		$('#board111').animate({
// 			left : '0px'
// 		}, 1000, 'easeOutQuad');
// 	}else{
// 				$('#board111').animate({
// 			left : '-200px'
// 		}, 1000, 'easeOutQuad');
// 	}
// 	});
// 	$('#board2222').click(function() {
// 		if($(this).css("left")=="0px")
// 		{
// 		$(this).animate({
// 			left : '250px'
// 		}, 1000, 'easeOutQuad');
// 	}else{
// 				$(this).animate({
// 					left : '0px'
// 		}, 1000, 'easeOutQuad');
	
	
	 
	 
// 	}
// 	});
	
	
	
// });