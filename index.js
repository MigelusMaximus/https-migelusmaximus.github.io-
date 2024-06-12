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

    // Subtle movement effect for h1
    const header = document.querySelector('.header');

    // Nav items
    const navItems = document.querySelectorAll('.nav_item');

    document.addEventListener('mousemove', function (e) {
        const moveX = (e.clientX / window.innerWidth - 0.5) * 10; // Adjust multiplier for effect strength
        const moveY = (e.clientY / window.innerHeight - 0.5) * 10; // Adjust multiplier for effect strength
        header.style.transform = `translate(${moveX}px, ${moveY}px)`;

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
});
