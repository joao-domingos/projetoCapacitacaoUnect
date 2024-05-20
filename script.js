let currentIndex = 0;

document.getElementById('left-button').addEventListener('click', () => moveCarousel(-1));
document.getElementById('right-button').addEventListener('click', () => moveCarousel(1));

function moveCarousel(direction) {
    const carouselTrack = document.querySelector('.carousel-track');
    const items = document.querySelectorAll('.carousel-slide');
    const itemWidth = items[0].offsetWidth;
    const totalItems = items.length;
    const visibleItems = 3;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalItems - visibleItems;
    } else if (currentIndex > totalItems - visibleItems) {
        currentIndex = 0;
    }

    const offset = -currentIndex * itemWidth;
    carouselTrack.style.transform = `translateX(${offset}px)`;
}
