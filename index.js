var progressBar = document.querySelector('.slide_progress-bar');
var playBtnWrapper = document.querySelector('.swiper-btn-state');
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
        init: function () {},
        slideChange: function () {
            progress_motion();
        },
    },
});

// playBtnWrapper 에 class들 play, pause 는 단순히 재생 상태인지 일시정지 상태인지 확인하기 위한 장치
playButton.addEventListener('click', function () {
    if (playBtnWrapper.classList.contains('pause')) {
        console.log('play');
        swiper.autoplay.start();
        playBtnWrapper.classList.remove('pause');
        playBtnWrapper.classList.add('play');
        if (playBtnWrapper.classList.contains('progress_max')) {
            swiper.slideNext();
        }
    }
});

pauseButton.addEventListener('click', function () {
    if (playBtnWrapper.classList.contains('play')) {
        swiper.autoplay.stop();
        playBtnWrapper.classList.remove('play');
        playBtnWrapper.classList.add('pause');
    }
});

// playBtnWrapper 에 class progress_max 는 animation이 끝나면 다음 슬라이드로 넘어가는 역활을 함
// (일시정지 하고 재생 할 때 바로 다음 슬라이드로 넘어가기 위한 중요한 장치)
function progress_motion() {
    gsap.killTweensOf('.slide_progress-bar');
    gsap.set('.slide_progress-bar', { width: '0%' });
    gsap.to('.slide_progress-bar', 5, {
        width: '100%',
        ease: 'power1.out',
        onStart: function () {
            playBtnWrapper.classList.remove('progress_max');
        },
        onComplete: function () {
            console.log('motion_complete');
            playBtnWrapper.classList.add('progress_max');
            if (playBtnWrapper.classList.contains('play')) {
                swiper.slideNext();
            }
        },
    });
}
