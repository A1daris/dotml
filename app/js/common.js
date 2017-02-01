$(function() {
$(window).resize( function() {
	$(".s_portfolio").css("min-height", $(window).height());
	// $(".p_col").height($(window).height());
	// console.log($(window).height());
});
	// $(".s_portfolio").height($(window).height());
	// $(".p_col").height($(window).height());
$(".image_wrap").hover(function () {
	$(this).find("span").toggleClass("hidden");
})
$('.image_link').magnificPopup({
  type: 'image'
  // other options
});

});
