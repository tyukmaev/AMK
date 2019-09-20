$(function() {
	wow = new WOW(
		{
			offset: 60
		}
	)
	wow.init();
});


$('a[onclick*="#"]').on('click', function(e){
	$('html,body').animate({
		scrollTop: $($(this).attr('onclick')).offset().top - 80
	},1000);
	e.preventDefault();
});


$(function() {
	$(".movebg").click(function(e) {
		$(".background").addClass("moved");
		$(".menu").addClass("hide");
	});
	$(".showtexture").click(function(e) {
		$(".textureprev").addClass("moved");
	});
	$(".showtexturemore").click(function(e) {
		$(".textureprev").addClass("second");
	});
});