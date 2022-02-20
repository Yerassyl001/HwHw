$(document).ready(function(){
var len = 250;
$('textarea').keyup(function() {
  var textlen = len - $(this).val().length;
  $('#anyid').text(textlen);
});
var count = 0;
$("#addcomment").click(function(event) {
  let text_area_data = $('textarea#comment').val();
  switch(count%3){
    case 0:
    document.getElementById("toaddcomment1").innerHTML = text_area_data;
    break;
    case 1:
    document.getElementById("toaddcomment2").innerHTML = text_area_data;
    
    case 2:
    document.getElementById("toaddcomment3").innerHTML = text_area_data;
  }
  count++;
  $('textarea#comment').val('');
});

});
