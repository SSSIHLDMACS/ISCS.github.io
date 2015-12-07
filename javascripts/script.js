$(document).ready(function(){
	$("#header").load("../header.html");
	$("#navigation").load("../navigation.html");
	$("#footer").load("../footer.html");
})

var setCurrent = function(){
	var target = $("#current-page").val();

	if( target ){
		$( "#" + target ).addClass("current");
	}
}
