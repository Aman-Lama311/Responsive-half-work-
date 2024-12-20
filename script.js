function animation(){
    let tl = gsap.timeline();

tl.from("nav h1, nav li, nav button",{
    y:-30,
    opacity:0,
    duration:.5,
    delay:.5,
    stagger:.2
})

tl.from(".center h1, .center p",{
    x:-200,
    opacity:0,
    duration:.5,
    stagger:.2
})

tl.to(".center-left button",{
    opacity:1,
    duration:.4
})

tl.from(".center img",{
    opacity:0,
    duration:.5
},"-=.3")

tl.from(".companies img",{
    opacity:0,
    y:30,
    duration:0.6,
    stagger:.15
})
}

animation();

let crsr = document.querySelector(".cursor");
let main = document.querySelector(".main");

main.addEventListener("mousemove",function(dets){
    gsap.to(crsr,{
        x:dets.x,
        y:dets.y,
        duration:1.5,
        ease:"back.out"
    })
})

function secAnimation(){
    let tl2 = gsap.timeline({
        scrollTrigger: {
            trigger:".service",
            // markers:true,
            scroller:"body",
            start:"top 50%",
            end:"top 0",
            scrub:2
        }
    })
    
    tl2.from(".services h1, .services p",{
        y:30,
        opacity:0,
    })
    
    tl2.from(".elem.line1.left",{
        x:-200,
        opacity:0,
        duration:1.5
    },"anim1")
    
    tl2.from(".elem.line1.right",{
        x:200,
        opacity:0,
        duration:1.5
    },"anim1")
    
    tl2.from(".elem.line2.left",{
        x:-200,
        opacity:0,
        duration:1.5
    },"anim2")
    
    tl2.from(".elem.line2.right",{
        x:200,
        opacity:0,
        duration:1.5
    },"anim2")
}

secAnimation();

function finalAnimation(){
    let tl3 = gsap.timeline({
        scrollTrigger:{
            trigger: "footer",
            scroller:"body",
            // markers:true,
            start:"top 30%",
            end:"top 0",
            scrub:2
        }
    });
    
    
    tl3.from(".last-left h1",{
        y:50,
        duration:1.5
    },"same")
    
    tl3.from(".last-left p",{
        opacity:0,
        duration:1.5,
        x:-200,
    },"same")
    
    tl3.to(".last-left button",{
        opacity:1,
        duration:.4
    },"same")
    
    tl3.from(".last-right img",{
        opacity:0
    },"-=.3")
    
    tl3.from(".case h1, .case p",{
        x:-1000,
        duration:2,
        scrub:3
    })
 
}

finalAnimation();
