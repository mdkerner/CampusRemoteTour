$(document).ready(function(){

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

  $.getJSON('crt_files/static/data/landmarks.json',function (data) {
    for (var i = 0; i < data.length; i++) {
      landmark = {
        name : data[i].name,
        lat : data[i].lat,
        lng : data[i].lng,
        vid_url: data[i].vid_url
      };
      create_marker(landmark);
    }
  });

}
function create_marker(landmark){
    var position = new google.maps.LatLng({lat: landmark.lat, lng: landmark.lng});
    var marker_image = 'crt_files/static/img/video_icon.png';
    var beachMarker = new google.maps.Marker({
        position: position,
        map: map,
        icon: marker_image
    });

    var marker = new google.maps.Marker({
        position: position,
        map: map,
        title: landmark.name,
        icon: marker_image
    });
    marker.addListener('click', function() {
        load_video(landmark.vid_url);
    });
}
function load_video(vid_url){
    slideout_overlay($("#crt_vid_overlay"));
    $("#crt_vid_frame").attr("src", vid_url);
}

function slideout_overlay(element){
  $(element).removeClass("slideIn");
  $(element).addClass("slideOut");
}
