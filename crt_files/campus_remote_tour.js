$(document).ready(function(){
  $("#slideout_button").click(function(){
    $("#crt_vid_overlay").removeClass("slideIn");
    $("#crt_vid_overlay").addClass("slideOut");
  });

  $("#slidein_button").click(function(){
    $("#crt_vid_overlay").removeClass("slideOut");
    $("#crt_vid_overlay").addClass("slideIn");
  });
});

function initMap() {
  map = new google.maps.Map(document.getElementById('crt_map'), {
    center: {lat: 34.4126452, lng: -119.8471294},
    zoom: 18
  });

  load_landmarks();
}

function load_landmarks(){

  $.getJSON('static/data/landmarks.json', function(data) {
    alert(data);
  });

}

function slideout_overlay(element){
  $(element).removeClass("slideIn");
  $(element).addClass("slideOut");
}


function slidein_overlay(element){
  $(element).removeClass("slideOut");
  $(element).addClass("slideIn");
}
