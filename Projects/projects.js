document.addEventListener('DOMContentLoaded', function() {
    const audioElement = document.getElementById('hoverSound');
    const border_image =document.getElementById("game_icon")
    const fadeInDuration = 1000; // 1 second
    const fadeOutDuration = 1000; // 1 second
    audioElement.volume = 0; // Start muted

    let fadeInterval; // Declare it outside to keep track and clear if needed
    function setTransition(element,duration){
        element.style.transition =`opacity ${duration}s `;
    }
    function clearExistingFade() {
        if (fadeInterval) {
            clearInterval(fadeInterval);
            fadeInterval = null;
        }
    }
    function showBorder(element) {
        element.style.borderColor = "black"; // Replace 'colorName' with your desired color
    }
    
    function hideBorder(element) {
        element.style.borderColor = "transparent";
    }

    function fadeIn(audio) {
        clearExistingFade(); // Clear any ongoing fade interval
        let volume = audio.volume;
        const interval = 50;
        const increment = 1 / (fadeInDuration / interval);

        // Try playing the audio
        const playPromise = audio.play();

        // If the audio plays successfully, start the fade-in process
        if (playPromise !== undefined) {
            playPromise.then(_ => {
                fadeInterval = setInterval(function() {
                    volume += increment;
                    if (volume >= 1) {
                        volume = 1;
                        clearInterval(fadeInterval);
                    }
                    audio.volume = volume;
                }, interval);
            }).catch(error => {
                console.error("Audio play failed:", error);
            });
        }
    }

    function fadeOut(audio) {
        clearExistingFade(); // Clear any ongoing fade interval
        const interval = 50;
        const decrementFactor = Math.pow(0.01, interval / fadeOutDuration); // Exponential fade
        fadeInterval = setInterval(function() {
            audio.volume *= decrementFactor;
            if (audio.volume <= 0.01) { // Nearly silent
                audio.pause();
                audio.volume = 0; // Fully mute
                clearInterval(fadeInterval);
            }
        }, interval);
    }

    document.querySelector('#my_first_game > a').addEventListener('mouseenter', function() {
        fadeIn(audioElement);
        setTransition(border_image,0.2);
        showBorder(border_image);
    });

    document.querySelector('#my_first_game > a').addEventListener('mouseleave', function() {
        fadeOut(audioElement);
        hideBorder(border_image);
    });
});
