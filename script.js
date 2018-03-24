// function myFunction() {
//     var letters = '0123456789ABCDEF'.split('');
//     var color = '#';
//     for (var i = 0; i < 6; i++ ) {color += letters[Math.round(Math.random() * 15)];
//     }
//     return color;
// }

$(document).ready(function(){
	function myColor(){
		return "#" + Math.random().toString(12).slice(2,6);
	};

	$(".button").on("click", function(){
		$('body').css("background", myColor());
	});
});