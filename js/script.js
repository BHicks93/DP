$(document).ready(function(){

$.fn.center = function () {
   this.css("position","absolute");
   this.css("top", ( $(window).height() - this.height() ) / 2  + "px");
   this.css("left", ( $(window).width() - this.width() ) / 2 + "px");
   return this;
}

$('.header').center();

	$(function(){
		        $('h1').glitch();
		        $('#container').glitch();
		      });

 });