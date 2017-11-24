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
$('input[type="date"], input[type="datetime"], input[type="datetime-local"], input[type="month"], input[type="time"], input[type="week"]').each(function() {
    var el = this, type = $(el).attr('type');
    if ($(el).val() == '') $(el).attr('type', 'text');
    $(el).focus(function() {
        $(el).attr('type', type);
        el.click();
    });
    $(el).blur(function() {
        if ($(el).val() == '') $(el).attr('type', 'text');
    });
});