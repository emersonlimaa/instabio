const highlightScroll = document.querySelector('.highlight-scroll');
const highlightCards = document.querySelectorAll('.highlight-card');

let currentIndex = 0;
let cardWidth = highlightCards[0].offsetWidth;
let numCards = highlightCards.length;
let maxIndex = numCards - Math.ceil(highlightScroll.offsetWidth / cardWidth);

function scrollToIndex(index) {
  currentIndex = index;
  highlightScroll.style.transform = `translateX(${-1 * currentIndex * cardWidth}px)`;
}

function scrollLeft() {
  if (currentIndex > 0) {
    scrollToIndex(currentIndex - 1);
  }
}

function scrollRight() {
  if (currentIndex < maxIndex) {
    scrollToIndex(currentIndex + 1);
  }
}

highlightCards.forEach((card, index) => {
  card.addEventListener('click', () => {
    console.log(`Clicked card ${index}`);
    // Add your code to open a modal or navigate to a new page here
  });
});

document.querySelector('.scroll-left').addEventListener('click', scrollLeft);
document.querySelector('.scroll-right').addEventListener('click', scrollRight);
