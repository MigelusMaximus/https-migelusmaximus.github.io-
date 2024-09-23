document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        const container = document.querySelector('.container');
        container.classList.remove('hidden');
        container.classList.add('reveal');
    }, 500);  // 500 milliseconds delay

    setTimeout(function () {
        const header = document.querySelector('.header');
        header.classList.remove('hidden');
        header.classList.add('reveal');
    }, 1500);  // 1500 milliseconds delay

    // Elements to move
    const header = document.querySelector('.header');
    const personImage = document.querySelector('.person-image');
    const skyImage = document.querySelector('.sky-image');
    const leftTreesImage = document.querySelector('.left-trees-image');
    const rightTreesImage = document.querySelector('.right-trees-image');
    const grassImage = document.querySelector('.grass-image');
    const navItems = document.querySelectorAll('.nav_item');

    // Make tree images non-clickable and bring to the front
    leftTreesImage.style.pointerEvents = 'none';
    rightTreesImage.style.pointerEvents = 'none';
    leftTreesImage.style.zIndex = 10;
    rightTreesImage.style.zIndex = 10;
    personImage.style.pointerEvents = 'none';
    personImage.style.zIndex = 5;

    // Set initial opacity
    leftTreesImage.style.opacity = 1;
    rightTreesImage.style.opacity = 1;

    document.addEventListener('mousemove', function (e) {
        const moveX = (e.clientX / window.innerWidth - 0.5) * 10;
        const moveY = (e.clientY / window.innerHeight - 0.5) * 10;
        header.style.transform = `translate(${moveX}px, ${moveY}px)`;

        // Align person image
        const personMoveX = (e.clientX / window.innerWidth - 0.5) * 5;
        const personMoveY = (e.clientY / window.innerHeight - 0.5) * 5 - 20; // Adjust vertical position
        personImage.style.transform = `translate(${personMoveX}px, ${personMoveY}px) scale(1.05)`;

        // Subtle movement for sky image
        const skyMoveX = (e.clientX / window.innerWidth - 0.5) * 3;
        const skyMoveY = (e.clientY / window.innerHeight - 0.5) * 3;
        skyImage.style.transform = `translate(${skyMoveX}px, ${skyMoveY}px)`;

        // Calculate the distance from the mouse to the center of the h1 element
        const h1Bounds = document.querySelector('h1.header').getBoundingClientRect();
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        const centerX = (h1Bounds.left + h1Bounds.right) / 2;
        const centerY = (h1Bounds.top + h1Bounds.bottom) / 2;

        const distX = Math.abs(mouseX - centerX);
        const distY = Math.abs(mouseY - centerY);

        const maxDistX = window.innerWidth / 3;
        const maxDistY = window.innerHeight / 3;

        const opacityX = Math.pow(Math.min(distX / maxDistX, 1), 1.5); // More aggressive exponential function
        const opacityY = Math.pow(Math.min(distY / maxDistY, 1), 1.5); // More aggressive exponential function

        const finalOpacity = Math.max(opacityX, opacityY);
        leftTreesImage.style.opacity = finalOpacity;
        rightTreesImage.style.opacity = finalOpacity;

        // Apply subtle movement for grass image
        const grassMoveX = (e.clientX / window.innerWidth - 0.5) * 5;
        const grassMoveY = (e.clientY / window.innerHeight - 0.5) * 5;
        grassImage.style.transform = `translate(${grassMoveX}px, ${grassMoveY}px)`;

        // Apply different movements for each nav item
        navItems.forEach((item, index) => {
            let itemMoveX, itemMoveY;
            switch (index) {
                case 0: // Most left
                    itemMoveX = (e.clientX / window.innerWidth - 0.5) * -5;
                    itemMoveY = (e.clientY / window.innerHeight - 0.5) * 5;
                    break;
                case 1: // Second left
                    itemMoveX = (e.clientX / window.innerWidth - 0.5) * -3;
                    itemMoveY = (e.clientY / window.innerHeight - 0.5) * 3;
                    break;
                case 2: // Middle
                    itemMoveX = moveX;
                    itemMoveY = moveY;
                    break;
                case 3: // Second right
                    itemMoveX = (e.clientX / window.innerWidth - 0.5) * 3;
                    itemMoveY = (e.clientY / window.innerHeight - 0.5) * 3;
                    break;
                case 4: // Most right
                    itemMoveX = (e.clientX / window.innerWidth - 0.5) * 5;
                    itemMoveY = (e.clientY / window.innerHeight - 0.5) * 5;
                    break;
            }
            item.style.transform = `translate(${itemMoveX}px, ${itemMoveY}px)`;
        });
    });

    // Intersection Observer for About Me Section
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    function observerCallback(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const aboutMeItems = document.querySelectorAll('.about-me-item');
    aboutMeItems.forEach(item => {
        observer.observe(item);
    });

    // Dimming effect on h1 hover


    const h1 = document.querySelector('h1.header');
    const images = document.querySelectorAll('.background-image, .sky-image, .left-trees-image, .right-trees-image, .grass-image, .person-image');

    h1.addEventListener('mouseenter', function () {
        images.forEach(image => {
            image.classList.add('dim');
            image.classList.remove('normal');
        });
        h1.style.zIndex = 10;
    });

    h1.addEventListener('mouseleave', function () {
        images.forEach(image => {
            image.classList.add('normal');
            image.classList.remove('dim');
        });
        h1.style.zIndex = 4;
    });
});
