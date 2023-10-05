document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        const container = document.querySelector('.container');
        container.classList.remove('hidden');
        container.classList.add('reveal');
    }, 500);  // 1000 milliseconds (1 second) delay
    setTimeout(function() {
        const container = document.querySelector('.header');
        container.classList.remove('hidden');
        container.classList.add('reveal');
    }, 1500);  // 1000 milliseconds (1 second) delay
    
});
