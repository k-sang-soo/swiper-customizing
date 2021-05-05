var progressBar = document.querySelector('.slide_progress-bar');
var playButton = document.querySelector('.swiper-play');
var pauseButton = document.querySelector('.swiper-pause');

var swiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
        renderFraction: function (currentClass, totalClass, progressBar) {
            return '<span class="' + currentClass + '"></span><span class="' + totalClass + '"></span>';
        },
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    on: {
        init: function () {
            progressBar.classList.remove('animate');
            //progressBar.classList.remove('active');
            progressBar.classList.add('animate');
            //progressBar.classList.add('active');
        },
        slideChangeTransitionStart: function () {
            progressBar.classList.remove('animate');
            //progressBar.classList.remove('active');
            //progressBar.classList.add('active');
        },
        slideChangeTransitionEnd: function () {
            progressBar.classList.add('animate');
        },
    },
});
playButton.addEventListener('click', function () {
    // this.classList.toggle('pause');
    console.log('play');
    swiper.autoplay.start();
});

pauseButton.addEventListener('click', function () {
    console.log('pause');
    swiper.autoplay.stop();
});
