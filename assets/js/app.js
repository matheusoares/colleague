$(document).on("scroll", function() {

	if($(document).scrollTop()>100) {
		$("header").removeClass("large").addClass("small");
	} else {
		$("header").removeClass("small").addClass("large");
	}
	
});

var btn = document.getElementById("btnTrigger");
var menu = document.getElementById("menuHidded");

btn.addEventListener('click', function(){
	menu.classList.toggle('menu-hidded');

	if (!menu.classList.contains('menu-hidded')) {
		btn.classList.add('open');
		$('body').css("overflow", "hidden");
	}else{
		btn.classList.remove('open');
		$('body').css("overflow", "initial");
	}

});


