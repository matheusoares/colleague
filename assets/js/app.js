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

function initMap() {
	var beDifferent = { lat: -31.7541639, lng: -52.3174417 };
	var map = new google.maps.Map(
		document.getElementById('map'), { zoom: 17, center: beDifferent });

	var contentString = '<div id="content" style="width: 256px;">' +
		'<div id="siteNotice">' +
		'</div>' +
		'<img id="firstHeading" class="firstHeading" src="assets/img/logo.svg" alt="logomarca da beDifferent" >' +
		'<div id="bodyContent">' +
		'<p>Pelotas Parque Tecnológico, Av. Domingos de Almeida, 1785 - Areal, Pelotas - RS. </p>' +
		'</div>' +
		'</div>';

	var infowindow = new google.maps.InfoWindow({
		content: contentString
	});
	
	var marker = new google.maps.Marker({ position: beDifferent, map: map,  title: 'be Different' });
	$( document ).ready(function() {
		infowindow.open(map, marker);
	});
}


