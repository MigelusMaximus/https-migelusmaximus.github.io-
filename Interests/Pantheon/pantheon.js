
const pantheon_words = document.getElementById('#Pantheon_Words');
var video = document.getElementById('background_video');
const audio = new Audio();
audio.src = "pantheon_theme.mp3";
function StartTheShow(){
    var video = document.getElementById("background_video");
    var start_the_show = document.getElementById('start_the_show');
    const pantheon_words = document.getElementById('Pantheon_Words');
    audio.loop=true;
    audio.play();
    video.play();
    video.style.visibility="visible";
    start_the_show.style.visibility = "hidden";
    pantheon_words.style.opacity = "100%";
    pantheon_words.contentDocument.body.addEventListener("play",()=> {
        alert("Ha");
        audio.muted=true;
        })
        pantheon_words.contentDocument.body.addEventListener("pause",()=> {
            alert("Ha");
            audio.muted=false;
            })




}



pantheon_words.contentDocument.body.addEventListener("play",()=> {
    alert("Ha");
    audio.muted=true;
    })
    pantheon_words.contentDocument.body.addEventListener("pause",()=> {
        alert("Ha");
        audio.muted=false;
        })