lottie.loadAnimation({
    container: herologo, // the dom element that will contain the animation
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: 'js/EP_logo/data.json' // the path to the animation json
});

let animationDiv = document.getElementById('coffee')
animationDiv.style.display = 'none'

lottie.loadAnimation({
    container: coffee, // the dom element that will contain the animation
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: 'js/EP_coffee_animation/data2.json' // the path to the animation json
});

window.addEventListener('scroll', () => {
    // can set scroll height by changing the number
    let scrollHeightPercent = document.documentElement.scrollHeight * 0.08
    let currentPOS = document.documentElement.scrollTop || document.body.scrollTop

    // once the scroll height has gone past the % stated abvoe it will make the style appear
    if (currentPOS >= scrollHeightPercent) {
        let animationDiv = document.getElementById('coffee');
        if (animationDiv.style.display == 'none') {
            // stuff here
            animationDiv.style.display = ""

            let bodyMotion1 = document.getElementById('section-4');
            loader(bodyMotion1, "js/EP_coffee_animation/data2.json")
        };
    };
});