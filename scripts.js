gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText)


ScrollSmoother.create({
    smooth: 1,
    effects: true
});

function animatePage() {



    // ANIMAÇÕES HERO
    gsap.from(".hero", {
        opacity: 0,
        duration: 1

    })

    gsap.from("picture:nth-child(1)", {
        y: -60,
        duration: 2
    })

    gsap.from("picture:nth-child(2)", {
        y: 200,
        duration: 2
    })



    // ANIMAÇÕES CARDS
    gsap.from(".card", {
        opacity: 0,
        duration: 1,
        stagger: .9,
        scrollTrigger: {
            trigger: ".cards",
            scrub: true,
            start: "0% 80%",
            end: "100% 70%"
        }
    })

    gsap.from(".sectionThanks ul li", {
        opacity: 0,
        x: 40,
        duration: 0.5,
        filter: "blur(10px)",
        stagger: .2,
        scrollTrigger: {
            trigger: ".sectionThanks ul",
            start: "0% 80%",
            end: "100% 50%"
        }

    })


    // ANIMAÇÕES FOOTER
    gsap.from("footer", {
        y: -150,
        immediateRender: false,
        scrollTrigger: {
            trigger: "footer",
            scrub: true,
            invalidateOnRefresh: true,
            end: "100% 100%"
        }

    })


    // LETRAS ANIMADAS


    const splitTextGroup = document.querySelectorAll(".splitText");

    splitTextGroup.forEach(uniqueSplitText => {

        const split = new SplitText(uniqueSplitText, {
            type: "lines, chars, words",
            linesClass: "split-line"
        });


        gsap.from(split.chars, {
            y: 40,
            opacity: 0,
            duration: 0.5,
            stagger: 0.05,
            scrollTrigger: {
                trigger: uniqueSplitText,
                start: "0% 80%",
                end: "100% 60%"
            }
        });
    });
};

// SCROLL SUAVE BOTÃO
let smoother = ScrollSmoother.create({
    smooth: 2,
    effects: true
});

let button = document.querySelector(".direct");
button.addEventListener("click", () => smoother.scrollTo("#cities", true));


// PRELOADER

const tl = gsap.timeline({
    onComplete() {
        animatePage();
        gsap.to("#preloader", {
            opacity: 0,
            duration: 1,
            display: "none"

        })
    }
})

tl.to("#preloader path", {
    duration: 1.4,
    strokeDashoffset: 0
})

tl.to("#preloader path", {
    fill: "rgb(168, 19, 19)",
    duration: 0.5,
    strokeDashoffset: 0
})

