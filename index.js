document.getElementById("submit").addEventListener("click", submitForm);

function submitForm() {
    var reponse = document.getElementById("response");
    reponse.classList.remove("hidden");
    
    document.getElementById("name").value="";
    document.getElementById("email").value="";
}

const flightPath1 = {
    curviness: 0,
    autoRotate: false,
    values: [
      {x: 400, y: 0}
    ]
};

const flightPath2 = {
    curviness: 0,
    autoRotate: false,
    values: [
        {x: -400, y:0}
    ]
}

const tween = new TimelineLite();

tween.add(
    TweenLite.to('#yellow-splashes', 0.5, {
        bezier: flightPath1,
        ease: Power1.easeInOut
    }),
    "first"
);

tween.add(
    TweenLite.to('#blue-splashes', 0.5, {
        bezier: flightPath2,
        ease: Power1.easeInOut,
    }),
    "first"
);

const controller1 = new ScrollMagic.Controller();

const scene1 = new ScrollMagic.Scene({
    triggerElement: '.section1',
    duration: 500,
    triggerHook: 0

})

.setTween(tween)
.addIndicators()
.setPin('.section1')
.addTo(controller1);

const tween2 = new TimelineLite();

tween2.add(
    TweenLite.to('#green-splashes', 1, {
        bezier: flightPath1,
        ease: Power1.easeInOut
    }),
    "second"
);

tween2.add(
    TweenLite.to('#purple-splashes', 1, {
        bezier: flightPath2,
        ease: Power1.easeInOut
    }),
    "second"
);


const controller2 = new ScrollMagic.Controller();

const scene2 = new ScrollMagic.Scene({
    triggerElement: '.section2',
    duration: 500,
    triggerHook: 0
})

.setTween(tween2)
.addIndicators()
.setPin('.section2')
.addTo(controller2);

const tween3 = new TimelineLite();

tween3.add(
    TweenLite.to('#yellow-splashes2', 1, {
        bezier: flightPath1,
        ease: Power1.easeInOut
    }),
    "third"
);

tween3.add(
    TweenLite.to('#blue-splashes2', 1, {
        bezier: flightPath2,
        ease: Power1.easeInOut
    }),
    "third"
);


const controller3 = new ScrollMagic.Controller();

const scene3 = new ScrollMagic.Scene({
    triggerElement: '.section3',
    duration: 500,
    triggerHook: 0
})

.setTween(tween3)
.addIndicators()
.setPin('.section3')
.addTo(controller3);