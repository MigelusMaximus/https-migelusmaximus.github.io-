

var video = document.getElementById('background_video');
const audio = new Audio();
audio.src = "pantheon_theme.mp3";
function StartTheShow(){
    var video = document.getElementById("background_video");
    var start_the_show = document.getElementById('start_the_show');
    audio.loop=true;
    audio.play();
    video.play();
    video.style.visibility="visible";
    start_the_show.style.visibility = "hidden";

    var tag = document.createElement('script');

    window.onYouTubeIframeAPIReady =  ()=>{
      
      var player = document.getElementById("player");
       
        player = new YT.Player('player', {
          height: '360',
          width: '640',
          videoId: '3V1HCcAw4R4',
          events: {
            'onStateChange': onPlayerStateChange
          }
        });
      
    };

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

   
    
    function onPlayerStateChange(event) {
          if(event.data == 1) {
            audio.muted = true;
          }
          
          else if(event.data == 2) {
            audio.muted = false;
          }
    }
   




}


