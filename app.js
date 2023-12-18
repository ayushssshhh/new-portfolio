const lenis = new Lenis()


lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

// gsap

gsap.registerPlugin(ScrollTrigger)

const splitTypes = document.querySelectorAll('.reveal-type')

splitTypes.forEach((char, i) => {

  const bg = char.dataset.bgColor
  const fg = char.dataset.fgColor

  const text = new SplitType(char, { types: 'chars' })

  gsap.fromTo(text.chars,
    {
      color: bg,
    },
    {
      color: fg,
      duration: 0.3,
      stagger: 0.1,
      y: -15,
      scrollTrigger: {
        trigger: char,
        start: 'top 50%',
        end: 'top 20%',
        scrub: true,
        markers: false,
        toggleActions: 'play play reverse reverse'
      }
    })
})

// first zoom animation
gsap.to(".first", {
  scale: 26, stagger: 0.25, duration: 3,
  scrollTrigger: {
    trigger: ".second",
    start: 'top 90%',
    end: 'top 20%',
    toggleActions: 'play play reverse reverse',
    scrub: true
  }
});

// project
gsap.to(".project", {
  scale: 1.05, stagger: 0.25, duration: 1,
  scrollTrigger: {
    trigger: ".project",
    start: 'top 80%',
    end: 'top 20%',
    toggleActions: 'play play reverse reverse',
    scrub: true
  }
});


gsap.fromTo(".title",

  { color: "rgba(128, 128, 128, 0)" },

  {
    color: "white",
    x: 200,
    stagger: 0.25,
    duration: .6,
    scrollTrigger: {
      trigger: ".project",
      start: 'top 60%',
      end: 'top 20%',
      toggleActions: 'play play reverse reverse',
      // scrub: true
    }
  }
);


// mobile
const pTab = document.querySelectorAll('.pTab');

pTab.forEach((p) => {
  gsap.to(p, {
    scale: 1,
    opacity: 1,
    duration: .2,
    scrollTrigger: {
      trigger: p,
      start: 'top 80%',
      end: 'top 20%',
      toggleActions: 'play play reverse reverse',
      scrub: true
    }
  });
})

// contact
gsap.to(".contact",  {
  y: -200,
  stagger: 0.25,
  duration: .6,
  scrollTrigger: {
    trigger: ".contact",
    start: 'top 100%',
    end: 'top 0%',
    toggleActions: 'play play reverse reverse',
  }
}
);

gsap.to(".get",  {
    x: 100,
    stagger: 0.25,
    duration: .6,
    scrollTrigger: {
      trigger: ".get",
      start: 'top 90%',
      end: 'top 20%',
      toggleActions: 'play play reverse reverse',
      scrub : true,
    }
  }
);


// skill
const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}

// locomotive

function loco() {
  const scroll = new LocomotiveScroll({
    el: document.querySelector('.cover'),
    smooth: true
  });
}


