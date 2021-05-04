var progressBar = document.querySelector('.swiper-progress-bar');
var playButton = document.querySelector('.swiper-play');
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
    autoplay: {
        delay: 5000,
    },
    on: {
        init: function () {
            progressBar.classList.remove('animate');
            progressBar.classList.remove('active');
            progressBar.classList.add('animate');
            progressBar.classList.add('active');
        },
        slideChangeTransitionStart: function () {
            progressBar.classList.remove('animate');
            progressBar.classList.remove('active');
            progressBar.classList.add('active');
        },
        slideChangeTransitionEnd: function () {
            progressBar.classList.add('animate');
        },
    },
});
playButton.addEventListener('click', function () {
    this.classList.toggle('pause');
    if (!this.classList.contains('pause')) {
        console.log('play');
        swiper.autoplay.start();
    } else {
        console.log('pause');
        swiper.autoplay.stop();
    }
});
