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

});
//send form data to mail.php
$("#message").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Message was successfully sent. Thank you.");
			$("#callback").trigger("reset");
		});
		return false;
	});
});
