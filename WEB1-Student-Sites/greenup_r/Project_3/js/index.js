function change_color(){
	var colorInput = document.getElementById('color-input');
	var selectedColor = colorInput.value;
	set_colors(selectedColor);
}



// Get the modal
var color_input = document.getElementById("color_input_div");
var color_input_shadow = document.getElementById("color_input_shadow");
// Get the button that opens the modal
var palette = document.getElementById("palette");
// Get the  element that closes the modal
var close = document.getElementById("close_color_input");
// When the user clicks the button, open the modal 
palette.onclick = function() {
	color_input.style.display = "flex";
	color_input_shadow.style.display = "flex";
}
// When the user clicks on  (x), close the modal
close.onclick = function() {
	color_input.style.display = "none";
	color_input_shadow.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target != palette && event.target != document.getElementById('color-input')) {
		color_input.style.display = "none";
		color_input_shadow.style.display = "none";
	}
}