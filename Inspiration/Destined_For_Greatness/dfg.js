var tag = document.createElement('script');
window.onYouTubeIframeAPIReady =  ()=>{
    
    var player = document.getElementById("player");
    
     
      player = new YT.Player('player', {
        height: '720',
        width: '1280',
        videoId: '1FJRvKQmOwg',
        events: {
            'onStateChange': onPlayerStateChange
          }
    
      });
    };

    function setTransition(element,duration){
        element.style.transition =`background-color ${duration}s,opacity ${duration}s `;
    }
    function setTransitionOpacity(element,duration){
        element.style.transition =`opacity ${duration}s `;
    }
    function changeBackgroundColor(element,newColor){
        element.style.backgroundColor=newColor;
    }
    function changeOpacity(element, opacityValue){
        element.style.opacity = opacityValue;
    }
    function setTransitionColor(element,duration){
        element.style.transition =`color ${duration}s `;
    }
    function changeColor(element, newColor){
        element.style.color = newColor;
    }
      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      function onPlayerStateChange(event) {
        const body = document.body;
        const navigation_background = document.getElementById("navigation");
        const DFG_name = document.getElementById("DFG_name");
        if(event.data == 1) {

            setTransition(body,3);
            setTransitionOpacity(navigation_background,3);
            setTransitionColor(DFG_name,6);
            changeColor(DFG_name,"#ffe680")
            

            
            changeBackgroundColor(body, "#000000");
            changeOpacity(navigation_background,"0");
            
            

        }
        
        else if(event.data == 2) {
            

            navigation_background.style.opacity ="1";
            changeOpacity(navigation_background,"1");
            changeBackgroundColor(body, "#e76f51");
            changeColor(DFG_name,"black")

            
        }
  }