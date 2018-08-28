$(document).on("scroll", function() {

	if($(document).scrollTop()>400) {
		$("header").removeClass("large").addClass("small");
	} else {
		$("header").removeClass("small").addClass("large");
	}
	
});