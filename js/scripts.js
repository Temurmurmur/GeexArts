var flySuvi = anime({ //Animate SUVI
  targets: '#topFly',
  translateX: '-109%',
  duration: 2000,
  easing: 'easeInOutExpo',
  complete: function() {
    anime({
      targets: '#topFly .top-info__city, #topFly .top-info__year',
      opacity: 1
    });
  }
});

var scrolled = window.pageYOffset;
var fFlag = true,
  tFlag = true,
  thFlag = true,
  foFlag = true,
  fiFlag = true,
  zFlag = true,
  sFlag = true;
window.onscroll = function() { //отслеживаем изменение скролла
  scrolled = window.pageYOffset;
  if (scrolled > 150 && zFlag) {
    zFlag = false;
    anime({ //Animate KAPONEN
      targets: '#fly',
      translateX: '98%',
      duration: 1000,
      easing: 'easeInOutExpo'
    });

    anime({ //Animate KAPONEN - E
      targets: '#fly li:nth-child(6)',
      translateX: '4vw',
      translateY: '-4vw',
      rotate: -36,
      easing: 'easeInOutExpo',
    });

    anime({ //Animate KAPONEN - N
      targets: '#fly li:nth-child(7)',
      translateX: '2vw',
      translateY: '-17vw',
      rotate: -60,
      easing: 'easeInOutExpo',
    });
  }
  if (scrolled > 300 && fFlag) {
    fFlag = false;
    anime({
      targets: '#topCard1',
      translateX: -230,
      duration: 1000,
      opacity: 1,
      easing: 'easeInOutSine'
    });
  }
  if (scrolled > 400 && tFlag) {
    tFlag = false;
    anime({
      targets: '#authors li',
      translateX: 230,
      duration: 1000
    });
  }
  if (scrolled > 800 && thFlag) {
    thFlag = false;
    anime({
      targets: '#animImg1',
      translateX: 230,
      duration: 2000,
      easing: 'easeOutBounce'
    });
  }
  if (scrolled > 1000 && foFlag) {
    foFlag = false;
    anime({
      targets: '#animImg2',
      translateY: 230,
      duration: 2000,
      easing: 'easeOutBounce',
      opacity: 1
    });
  }
  if (scrolled > 1600 && fiFlag) {
    fiFlag = false;
    anime({
      targets: '#topCard2',
      translateX: 230,
      duration: 1000,
      opacity: 1,
      easing: 'easeInOutSine'
    });
  }
  if (scrolled > 1600 && sFlag) {
    sFlag = false;
    anime({ //Animate WINTER
      targets: '#flyWinter',
      translateX: '98%',
      duration: 1000,
      easing: 'easeInOutExpo'
    });

    anime({ //Animate WINTER - E
      targets: '#flyWinter li:nth-child(5)',
      translateX: '2vw',
      translateY: '-1.8vw',
      rotate: -25,
      easing: 'easeInOutExpo',
    });

    anime({ //Animate WINTER - R
      targets: '#flyWinter li:nth-child(6)',
      translateX: '2vw',
      translateY: '-7.8vw',
      rotate: -53,
      easing: 'easeInOutExpo',
    });
  }
};

var slider = tns({ //Slider settings
  container: '.more__slider',
  items: 1,
  slideBy: 'page',
  nested: 'outer',
  loop: false,
  controlsText: [" ", " "]
});