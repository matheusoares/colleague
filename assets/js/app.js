$(document).on("scroll", function() {

	if($(document).scrollTop()>200) {
		$("header").removeClass("large").addClass("small");
	} else {
		$("header").removeClass("small").addClass("large");
	}
	
});