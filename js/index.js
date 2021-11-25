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
    path: 'js/EP_coffee_animation/data.json' // the path to the animation json
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
    container: drinkfooter, // the dom element that will contain the animation
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'js/EP_drink_footer/data.json' // the path to the animation json
});

const io_options_drinkfooter = {
    // root: document.body,
    rootMargin: '-25% 0px -25% 0px',
    threshold: 0
};

const myobserver_drinkfooter = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animation3.play();

        } else {
            animation3.stop();

        }
    });
}, io_options_drinkfooter);
document.querySelectorAll('#section-6').forEach((div) => {
    myobserver_drinkfooter.observe(div)
});

// SHAKER ANIMATION

const animation4 = lottie.loadAnimation({
    container: shaker, // the dom element that will contain the animation
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'js/EP_shaker_animation/data.json' // the path to the animation json
});

const io_options_shaker = {
    // root: document.body,
    rootMargin: '-25% 0px -25% 0px',
    threshold: 0
};

const myobserver_shaker = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animation4.play();

        } else {
            animation4.stop();

        }
    });
}, io_options_shaker);
document.querySelectorAll('#section-2').forEach((div) => {
    myobserver_shaker.observe(div)
});

// TOP LEAF ANIMATION

const animation5 = lottie.loadAnimation({
    container: topbranch, // the dom element that will contain the animation
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: 'js/EP_topbranch_animation/data.json' // the path to the animation json
});

const io_options_topbranch = {
    // root: document.body,
    rootMargin: '-25% 0px -25% 0px',
    threshold: 0
};

const myobserver_topbranch = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animation5.play();

        } else {
            animation5.stop();

        }
    });
}, io_options_topbranch);
document.querySelectorAll('#section-1').forEach((div) => {
    myobserver_topbranch.observe(div)
});

// BOTTOM BRANCH ANIMATION

const animation6 = lottie.loadAnimation({
    container: bottombranch, // the dom element that will contain the animation
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: 'js/EP_bottombranch_animation/data.json' // the path to the animation json
});

const io_options_bottombranch = {
    // root: document.body,
    rootMargin: '-25% 0px -25% 0px',
    threshold: 0
};

const myobserver_bottombranch = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animation6.play();

        } else {
            animation6.stop();

        }
    });
}, io_options_bottombranch);
document.querySelectorAll('#section-1').forEach((div) => {
    myobserver_bottombranch.observe(div)
});
