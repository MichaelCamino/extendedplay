const animation1 = lottie.loadAnimation({
    container: herologo, // the dom element that will contain the animation
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: 'js/EP_logo/data.json' // the path to the animation json
});


const animation2 = lottie.loadAnimation({
    container: coffee, // the dom element that will contain the animation
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'js/EP_coffee_animation/data2.json' // the path to the animation json
});

const io_options_coffee = {
    // root: document.body,
    rootMargin: '-25% 0px -25% 0px',
    threshold: 0
};

const myobserver_coffee = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animation2.play();

        } else {
            animation2.stop();

        }
    });
}, io_options_coffee);
document.querySelectorAll('#section-4').forEach((div) => {
    myobserver_coffee.observe(div);
});

const animation3 = lottie.loadAnimation({
    container: strawberrydrink, // the dom element that will contain the animation
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: 'js/EP_strawberrydrink/data.json' // the path to the animation json
});

const io_options_strawberrydrink = {
    // root: document.body,
    rootMargin: '-25% 0px -25% 0px',
    threshold: 0
};

const myobserver_strawberrydrink = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animation3.play();

        } else {
            animation3.stop();

        }
    });
}, io_options_coffee);
document.querySelectorAll('#section-6').forEach((div) => {
    myobserver_strawberrydrink.observe(div)
});
