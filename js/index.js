// WELCOME ANIMATION

lottie.loadAnimation({
    container: welcome, // the dom element that will contain the animation
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'js/EP_welcome_animation/data.json' // the path to the animation json
});

// LOGO ANIMATION


// const animation1 = lottie.loadAnimation({
//     container: herologo, // the dom element that will contain the animation
//     renderer: 'svg',
//     loop: false,
//     autoplay: true,
//     path: 'js/EP_logo/data.json' // the path to the animation json
// });



// WREATH ANIMATION

const animation2 = lottie.loadAnimation({
    container: wreath, // the dom element that will contain the animation
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'js/EP_wreath_animation/data.json' // the path to the animation json
});

const io_options_wreath = {
    // root: document.body,
    rootMargin: '-25% 0px -25% 0px',
    threshold: 0
};

const myobserver_wreath = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animation2.play();

        } else {
            animation2.stop();

        }
    });
}, io_options_wreath);
document.querySelectorAll('#section-2').forEach((div) => {
    myobserver_wreath.observe(div);
});

// COFFEE ANIMATION

const animation3 = lottie.loadAnimation({
    container: coffee, // the dom element that will contain the animation
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'js/EP_coffee_animation/data.json' // the path to the animation json
});

// DRINK FOOTER

const animation4 = lottie.loadAnimation({
    container: drinkfooter, // the dom element that will contain the animation
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'js/EP_drink_footer/data.json' // the path to the animation json
});



// MAP ANIMATION

const animation5 = lottie.loadAnimation({
    container: map, // the dom element that will contain the animation
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: 'js/EP_map_animation/data.json' // the path to the animation json
});

const io_options_map = {
    // root: document.body,
    rootMargin: '-25% 0px -25% 0px',
    threshold: 0
};

const myobserver_map = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animation5.play();

        } else {
            animation5.stop();

        }
    });
}, io_options_map);
document.querySelectorAll('#section-7').forEach((div) => {
    myobserver_map.observe(div);
});

const animation6 = lottie.loadAnimation({
    container: verticallines, // the dom element that will contain the animation
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'js/EP_line_animation/data.json' // the path to the animation json
});


