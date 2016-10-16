$(document).ready(function(){
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