$( document ).ready(function(){
/*  $( ".page-header" ).load( "includes/page-header.html", function() {
  	$("..rd-navbar-fixed").css("display","block");
  });*/

  $( ".back" ).click(function() {
    window.history.back();
  });     
});
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
    sURLVariables = sPageURL.split('&'),
    sParameterName,
    i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};