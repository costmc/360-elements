$( document ).ready(function() {
$('.embed-responsive')
	.click(function(){
			$(this).find('#map').addClass('clicked')})
	.mouseleave(function(){
			$(this).find('#map').removeClass('clicked')});
});
