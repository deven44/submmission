var tl10 = gsap.timeline();
tl10.to("#wapper",{
    delay:4,
    opacity:0,
    // duration:1,
   },'a')
   tl10.from("#loader",{
    width:"40vw",
    duration:0.8
   },"b")
   tl10.to("#loader",{
    delay:1,
    y:-1000
   })
   tl10.to("#loader",{
    delay:1,
    y:-1000
   })
var tl = gsap.timeline({scrollTrigger:{
    trigger: ".part-1",
    start:"50% 50%",
    end:"250% 50%",
    scrub:true,
    // markers:true,
    pin:true,
}})

tl.to(".rotate-div",{
    rotate: -15,
    scale: 0.8,
},'a')
tl.to("#row-div-2",{
    marginTop: "5%"
},'a')
tl.to("#row-div-3",{
    marginTop: "-2%"
},'a')
tl.to("#row-div-4",{
    marginTop: "-8%"
},'a')
tl.to("#row-div-5",{
    marginTop: "-10%"
},'a')
tl.to(".overlay-div h1",{
    opacity: "1",
    delay: 0.2,
},'a')
tl.to(".overlay-div",{
    backgroundColor: "#000000b4",
},'a')
tl.to(".scrolling",{
    width: "100%",
},'a')

var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".part-2",
    start:"0% 70%",
    end:"50% 50%",
    scrub:true,
    // markers:true,
}})

tl2.to(".rounded-div-wrapper",{
    height:0,
    marginTop: 0
})

// <----part-3
const slider = document.querySelector('.slider');

function activate(e) {
  const items = document.querySelectorAll('.item');
  e.target.matches('.next') && slider.append(items[0])
  e.target.matches('.prev') && slider.prepend(items[items.length-1]);
}

document.addEventListener('click',activate,false);



function init() {
    gsap.registerPlugin(ScrollTrigger);
  
    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
  
    // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
  
  
  
  
  
  
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
  }
  init()
  
  var main = document.querySelector("#main")
  var crsr = document.querySelector("#cursor")
  main.addEventListener("mousemove", function (dets) {
    gsap.to(crsr, {
      left: dets.x + "px",
      top: dets.y + "px"
    })
  })
  
  
  
  
  
  
  var tl2 = gsap.timeline();
  
  
  tl2.to("#page2div3 video", {
    y: -100,
    height: "107vh",
    marginTop: 0,
    marginBottom: 0,
    paddingTop: 0,
    paddingBottom: 0,
    scrollTrigger: {
      scroller: "#main",
      trigger: "#page2div3 video",
      scrub: 2,
      markers:true,
      start: "top 80%",
      pin:true,
      end: "top 10%"
    }
  })
  
  
  tl2.to("#page2div3 video", {
    width: "100vw",
    scrollTrigger: {
      trigger: "#page2",
      scroller: "#main",
      markers:true, 
      pin: true,
      scrub: 2,
      start: "top 0%",
      end: "top -500%"
    }
  })
//   tl2.from("#page2 h2", {
//     y: 600,
//     scrollTrigger: {
//       scroller: "body",
//       trigger: "#page2 h2",
//       scrub: 2,
//       // markers:true,
//       start: "top 0%",
//       end: "top -400%"
//     }
//   })
  
//   var icon = document.querySelector("#overlay h3 i")
//   var video = document.querySelector("#overlay video")
  
//   icon.addEventListener("click", function (dets) {
//     video.style.opacity = 1
//     video.style.zIndex = 210
//     icon.style.opacity = 0
  
//   })
//   video.addEventListener("click", function () {
//     video.style.opacity = 0
//     video.style.zIndex = 0
//     icon.style.opacity = 1
//     icon.style.zIndex = 1
//   })
  
//   var h31 = document.querySelector("#page4div1 h3 i")
//   var h32 = document.querySelector("#page4div2 h3 i")
//   var h33 = document.querySelector("#page4div3 h3 i")
//   var icons = document.querySelectorAll(".page4div h3 i")
  
  
//   var overlay1 = document.querySelector("#page4 #overlay1")
//   var overlay2 = document.querySelector("#page4 #overlay2")
//   var overlay3 = document.querySelector("#page4 #overlay3")
  
//   var i1 = document.querySelector("#overlay1 h3 i")
//   var i2 = document.querySelector("#overlay2 h3 i")
//   var i3 = document.querySelector("#overlay3 h3 i")
  
//   h31.addEventListener("click", function (dets) {
  
//     gsap.from(overlay1, {
//       y: "-100%",
  
//     })
//     gsap.to(overlay1, {
//       // y:"-100%",
//       opacity: 1,
//       zIndex: 350
//     })
  
  
//     h31.style.opacity = 0
//     h32.style.opacity = 0
//     h33.style.opacity = 0
  
  
//     i1.addEventListener("click", function () {
//       console.log(i1)
//       gsap.to(overlay1, {
//         y: "100%",
//         display: "none",
//         opacity: 0,
//         zIndex: 0,
//       })
//       h32.style.opacity = 1
//       h31.style.opacity = 1
//       h33.style.opacity = 1
//     })
  
//   })
  
  
//   h32.addEventListener("click", function (dets) {
//     gsap.from(overlay2, {
//       y: "-100%",
  
//     })
//     gsap.to(overlay2, {
//       y: 0,
//       opacity: 1,
//       zIndex: 350
//     })
//     h31.style.opacity = 0
//     h32.style.opacity = 0
//     h33.style.opacity = 0
//   })
//   i2.addEventListener("click", function (e) {
//     gsap.to(overlay2, {
//       y: "100%",
//       opacity: 0,
//       zIndex: 0
//     })
//     h32.style.opacity = 1
//     h31.style.opacity = 1
//     h33.style.opacity = 1
  
//   })
  
//   h33.addEventListener("click", function (dets) {
//     gsap.from(overlay3, {
//       y: "-100%",
  
//     })
//     gsap.to(overlay3, {
//       y: 0,
//       opacity: 1,
//       zIndex: 350
//     })
//     h31.style.opacity = 0
//     h32.style.opacity = 0
//     h33.style.opacity = 0
//   })
//   i3.addEventListener("click", function (e) {
//     gsap.to(overlay3, {
//       y: "100%",
//       opacity: 0,
//       zIndex: 0
//     })
//     h32.style.opacity = 1
//     h31.style.opacity = 1
//     h33.style.opacity = 1
  
//   })
  
//   gsap.to("#page4", {
//     backgroundColor: "white",
//     color: "black",
//     scrollTrigger:{
//       scroller:"#bo",
//       trigger:"#page4",
//       // markers:true,
//       start:"top 1%",
//       end:"top 1%",
//   scrub:true
//     }
//   })

