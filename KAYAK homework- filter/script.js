var dropbox = document.getElementById("dropbox-content");
var button1 = document.getElementById("btnEmpty1");
var button2 = document.getElementById("btnEmpty2");
var button3 = document.getElementById("btnEmpty3");
var button4 = document.getElementById("btnEmpty4");
var button5 = document.getElementById("btnEmpty5");
var button6 = document.getElementById("btnEmpty6");

$('.iconUp').hide();
$('.iconClose').hide();
$('.iconDown').show();

//More with dropbox
$('#more').click(function () {
	$('#dropbox-content').toggleClass('open');
	if($('#dropbox-content').hasClass('open') == false && $('.icon21').is(":hidden") && $('.icon22').is(":hidden") && $('.icon23').is(":hidden") && $('.icon24').is(":hidden")){
		$('.iconUp').hide();
		$('.iconClose').hide();
   		$('.iconDown').show();
	}else if($('#dropbox-content').hasClass('open') == false && ($('.icon21').is(":visible") || $('.icon22').is(":visible") || $('.icon23').is(":visible") || $('.icon24').is(":visible"))){
		$('.iconUp').hide();
		$('.iconClose').show();
   		$('.iconDown').hide();
	}else if($('#dropbox-content').hasClass('open') == true && $('.icon21').is(":hidden") && $('.icon22').is(":hidden") && $('.icon23').is(":hidden") && $('.icon24').is(":hidden")){
		$('.iconUp').show();
		$('.iconClose').hide();
   		$('.iconDown').hide();
	}
   	$('#more').toggleClass('clicked');
   	$('#btnEmpty1').removeClass('clicked'); 
});

$(document).click(function(){
 $("#dropbox-content").removeClass('open'); 
 if($("#dropbox-content").hasClass('open') == false){
 	if($('.icon21').is(":visible") || $('.icon22').is(":visible") || $('.icon23').is(":visible") || $('.icon24').is(":visible")){
 		$('.iconUp').hide();
 		$('.iconDown').hide();
 		$('iconClose').show();

	 }else{
	 	$('.iconDown').show();
	 	$('.iconUp').hide();
	 	$('.iconClose').hide();
	 }
 }
	 
});

$("#more").click(function(e){
  e.stopPropagation(); 
});

$("#dropbox-content").click(function(e){
  e.stopPropagation(); 
});

//All button is pressed
$('#btnEmpty1').click(function () {
	$('.iconUp').hide();
	$('.iconClose').hide();
	$('.iconDown').show();

//'refresh' check icons
	$('.icon21').hide();
    $('.icon22').hide();
    $('.icon23').hide();
    $('.icon24').hide();
});


button1.addEventListener("click", function() {
	button1.classList.toggle("clicked");
	button2.classList.remove("clicked");
	button3.classList.remove("clicked");
	button4.classList.remove("clicked");
	button5.classList.remove("clicked");
	button6.classList.remove("clicked");
	more.classList.remove("clicked");
	dropbox.classList.remove("open");
});

button2.addEventListener("click", function() {
	button2.classList.toggle("clicked");
	button1.classList.remove("clicked");
});

button3.addEventListener("click", function() {
	button3.classList.toggle("clicked");
	button1.classList.remove("clicked");
});

button4.addEventListener("click", function() {
	button4.classList.toggle("clicked");
	button1.classList.remove("clicked");
});

button5.addEventListener("click", function() {
	button5.classList.toggle("clicked");
	button1.classList.remove("clicked");
});

button6.addEventListener("click", function() {
	button6.classList.toggle("clicked");
	button1.classList.remove("clicked");
});


//1 check
$('.icon21').hide();

$('.icon11').click(function () {
	$('.icon21').show();
	checkShow();
});

$('.icon21').click(function() {
	$('.icon21').hide();
	checkHide();
});

//2 check
$('.icon22').hide();

$('.icon12').click(function () {
	$('.icon22').show();
	checkShow();
});
$('.icon22').click(function() {
	$('.icon22').hide();
	checkHide();		
});

//3 check
$('.icon23').hide();

$('.icon13').click(function () {
	$('.icon23').show();
	checkShow();
});
$('.icon23').click(function() {
	$('.icon23').hide();
	checkHide();
});

//4 check
$('.icon24').hide();

$('.icon14').click(function () {
	$('.icon24').show();
	checkShow();
});
$('.icon24').click(function() {
	$('.icon24').hide();
	checkHide();	
});

	
function checkHide(){
	if($('.icon21').is(":hidden") && $('.icon22').is(":hidden") && $('.icon23').is(":hidden") && $('.icon24').is(":hidden")){
		$('.iconClose').hide();
		$('.iconUp').show();
	}
}

function checkShow(){
	if($('.icon21').is(":visible") || $('.icon22').is(":visible") || $('.icon23').is(":visible") || $('.icon24').is(":visible")){
		$('.iconUp').hide();
    	$('.iconDown').hide();
    	$('.iconClose').show();
	}
}

