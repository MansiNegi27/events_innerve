var left_hand = document.getElementById("left_hand");
var right_hand = document.getElementById("right_hand");
var ellipse = document.getElementsByClassName('my_ellipse');
var light_bolts = document.getElementsByClassName('light_bolt');
var my_tabs = document.getElementsByClassName('my_tabs');
left_hand.addEventListener("animationend",ellipse_shine);
right_hand.addEventListener("animationend",ellipse_shine);
ellipse[0].addEventListener("animationend",start_light);
ellipse[1].addEventListener("animationend",start_light);
light_bolts[0].addEventListener("animationend",tab_reveal);
light_bolts[1].addEventListener("animationend",tab_reveal);
my_tabs[0].addEventListener("animationend",border_gradient);
my_tabs[1].addEventListener("animationend",border_gradient);
function ellipse_shine()
{
	ellipse[0].classList.add("ellipse_shine");
	ellipse[1].classList.add("ellipse_shine");
}
function start_light(){
	light_bolts[1].classList.add("light_up");
	light_bolts[0].classList.add("light_up");
}
function tab_reveal(){
	light_bolts[1].style.opacity="1";
	light_bolts[0].style.opacity="1";
	my_tabs[0].classList.add("tab_reveal");
	my_tabs[1].classList.add("tab_reveal");
	light_bolts[1].classList.add("shiny_light");
	light_bolts[0].classList.add("shiny_light");
}
function border_gradient(){
	my_tabs[0].classList.add("border_gradient");
	my_tabs[1].classList.add("border_gradient");
}
