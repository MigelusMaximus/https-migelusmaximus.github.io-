
var tag = document.createElement('script');
window.onYouTubeIframeAPIReady =  ()=>{
    
    var player = document.getElementById("player");
    
     
      player = new YT.Player('player', {
        height: '720',
        width: '1280',
        videoId: '1FJRvKQmOwg',
    
      });
    };
      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);