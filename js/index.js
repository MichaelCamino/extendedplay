const animation1 = lottie.loadAnimation({
    container: herologo, // the dom element that will contain the animation
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: 'js/EP_logo/data.json' // the path to the animation json
});

// WELCOME ANIMATION

const animation5 = lottie.loadAnimation({
    container: welcome, // the dom element that will contain the animation
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'js/EP_welcome_animation/data.json' // the path to the animation json
});


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
            animation3.play();

        } else {
            animation3.stop();

        }
    });
}, io_options_coffee);
document.querySelectorAll('#section-4').forEach((div) => {
    myobserver_coffee.observe(div);
});

// DRINK FOOTER

const animation4 = lottie.loadAnimation({
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
            animation4.play();

        } else {
            animation4.stop();

        }
    });
}, io_options_drinkfooter);
document.querySelectorAll('#section-6').forEach((div) => {
    myobserver_drinkfooter.observe(div)
});



// PLAYLIST ANIMATION

const animation6 = lottie.loadAnimation({
    container: playlist, // the dom element that will contain the animation
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'js/EP_playlist_animation/data.json' // the path to the animation json
});

const io_options_playlist = {
    // root: document.body,
    rootMargin: '-25% 0px -25% 0px',
    threshold: 0
};

const myobserver_playlist = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animation6.play();

        } else {
            animation6.stop();

        }
    });
}, io_options_playlist);
document.querySelectorAll('#section-3').forEach((div) => {
    myobserver_playlist.observe(div)
});

