(()=>{
gsap.core.globals("ScrollTrigger", ScrollTrigger);
// const imgElem=document.querySelector('.intro');
// const body=document.querySelector('body');
const cards=document.querySelectorAll(".main_cards .card");
const myProject=document.querySelector(".myproject");
const bar=document.querySelector(".loading_bar")

const intro=gsap.timeline({
    scrollTrigger:{
        trigger:'.main_section',
        pin: ".main_section",
        scrub:1,
        // markers:{
        //     startColor:'blue',
        //     endColor:'red'
        // },
    }
});
intro.to('.name',0.1,{y:160,opacity:1, autoAlpha: 1, ease:"bounce.out"})
.to('.circle_bg',0.3,{y:-20},0.3)
.to('.circle_bg',0.2,{opacity:0})
.to('.arrow',0.1,{opacity:1,y:20})
.to('.wave',0.3,{y:-400})
.to('.wave_bg',0.3,{x:70})
.to('.name',0.3,{y:0,opacity:0})

// introduce
// const introduce = gsap.timeline({
//     scrollTrigger: {
//         trigger: '.fix.introduce',
//         pin: '.fix.introduce',
//         start: 'top top',
//         end: '+=1000',
//         scrub:1
//     }
// });
// introduce.to('body',0.3,{backgroundColor:'#BBDEFB'})
// .to('.introduce .bg_main',0.5,{ opacity: 1,scale:2,ease:"circ.out"})
// .to('.introduce .txt-1',0.3,{opacity:1})
// .to('.introduce .txt-1',0.3,{top:'3%'},'-=0.2')
// .to('.main .person',0.5,{opacity:1,scale:0.9},'-=0.2')
// .to('.introduce .txt-1,.main .person',0.3,{opacity:0})
// .to('.introduce .bg_main',0.3,{opacity:0},'-=0.1')
// .to('.introduce .bg_work',0.3,{opacity:1},'-=0.2')
// .to('.introduce .txt-2',0.3,{opacity:1})
// .to('.introduce .txt-2',0.3,{top:'2%'},'-=0.2')
// .to('body',0.3,{backgroundColor:'#EDE7F6'})
// .to('.work .person',0.5,{opacity:1,scale:1.1},'-=0.2')
// .to('.work .person',0.4,{opacity:0})
// .to('.introduce .txt-3',0.3,{opacity:1})
// .to('.introduce .txt-3',0.3,{top:'15%'},'-=0.2')
// .to('.qna .person',0.4,{opacity:1},'-=0.1')
// .to('.introduce .word01',0.3,{opacity:1})
// .to('.introduce .word01',0.3,{y:-10},'-=0.2')
// .to('.introduce .word02',0.3,{opacity:1})
// .to('.introduce .word02',0.3,{y:-10},'-=0.2')
// .to('.introduce .word03',0.3,{opacity:1})
// .to('.introduce .word03',0.3,{y:-10},'-=0.2')
// .to('.introduce .txt-2,.introduce .txt-3,.word01,.word02,.word03',0.3,{opacity:0,y:100})
// .to('.introduce .bg_work,.qna .person',0.3,{opacity:0})
// // .to('.introduce .house',0.3,{opacity:1,scale:1.5})
// .addLabel("start")
// .to('.introduce .txt-4',0.3,{opacity:1,y:20})
// .to('.introduce .main-circle',0.3,{opacity:1})
// .to('.introduce .circle-container,.introduce .line1',0.7,{rotate:'360deg',repeat:4})
// .to('.introduce .line2',0.7,{rotate:'10deg'},'-=0.6')
// .to('.introduce .circle1,.summer',0.2,{opacity:1},'-=1.5')
// .to('.introduce .circle2,.fall',0.2,{opacity:1},'-=1')
// .to('.winter',0.2,{opacity:1},'-=0.2')
// .addLabel("end")
// .to('.introduce .line1,.center-circle,.introduce .line2',0.6,{opacity:1},'-=3.5')
// .to('.work .person',0.1,{opacity:1},'-=3')
// .to('.introduce .txt-5',0.3,{opacity:1, top:'15%'},'-=0.2')
// .to('.introduce .slide,.main-circle,.small-circle,.txt-4,.txt-5',0.3,{opacity:0})
// .to('.work .person',0.3,{opacity:0})
// .to('.introduce .txt-10',0.3,{opacity:1,top:'10%'})
// .to('.office',0.3,{opacity:1})
// .to('body',0.3,{backgroundColor:'#222'})
// advantage
const advantage = gsap.timeline({
    scrollTrigger: {
        trigger: '.fix.advantage',
        pin: '.fix.advantage',
        start: 'top top',
        end: '+=1500',
        scrub:1
    }
});
advantage
.to('.advantage .main_title',0.2,{opacity:1,x:"0px"})
.to('.txt1',0.1,{y:200, autoAlpha: 1})
// .to('.layer1',0.1,{scale:1})
// .to('.layer2',0.1,{scale:1})
.to('body',0.3,{backgroundColor:'#222'})
.to('.advantages',0.3,{left:"0%"})
.to('.text.txt-2',0.3,{opacity:1})
advantage.to('.ad1',0.4,{scale:1.1})
advantage.to('.text.txt-2',0.3,{opacity:0})
advantage.to('.advantages',0.4,{left:"-100%"})
advantage.to('.text.txt-3',0.3,{opacity:1})
advantage.to('.ad2',0.4,{scale:1.1})
advantage.to('.text.txt-3',0.3,{opacity:0})
advantage.to('.advantages',0.4,{left:"-200%"})
advantage.to('.ad3',0.4,{scale:1.1})
advantage.to('.text.txt-4',0.3,{opacity:1})
advantage.to('.text.txt-4',0.3,{opacity:0})

// 프로젝트
const project = gsap.timeline({
    scrollTrigger: {
        trigger: '.fix.myproject',
        pin: '.fix.myproject',
        start: 'top top',
        end: '+=500',
        scrub:1
    }
});
project.to('.myproject .main_title',0.2,{opacity:1,x:"0px"})
project.to('.myproject .layer_bg',0.3,{opacity:0.2})
project.to('.myproject .bulb1',0.1,{y:-140})
project.to('.myproject .bulb2',0.1,{y:-100})
project.to('.myproject .bulb3',0.1,{y:-70})
project.to('.myproject .bulb1 .on',0.1,{opacity:1})
project.to('.myproject .bulb2 .on',0.1,{opacity:1})
project.to('.myproject .bulb3 .on',0.1,{opacity:1})
project.to('.card.library',0.3,{opacity:1,x:"0%",y:"0%",visibility:"visible",rotate:"0deg"})
project.to('.card.memo',0.3,{opacity:1,x:"0%",y:"0%",visibility:"visible",rotate:"0deg"})


let prevIndex;
for(let i=0; i<cards.length; i++){
    console.log(cards[i],'카드좀')
    cards[i].addEventListener("mouseenter",(e)=>{
        e.preventDefault()
        console.log("click")
        myProject.classList.add(`active${i}`)
        if(prevIndex !== i){
            myProject.classList.remove(`active${prevIndex}`)
        }
        prevIndex=i
       })
       cards[i].addEventListener("mouseleave",e=>{
           console.log("리브")
            myProject.classList.remove(`active${prevIndex}`)
       })
}
// cards.forEach((card,i)=>{
//    card.addEventListener("mouseenter",(e)=>{
//     e.preventDefault()
//     console.log("click")
//     myProject.classList.add(`active${i}`)
//     if(prevIndex !== i){
//         myProject.classList.remove(`active${prevIndex}`)
//     }
//     prevIndex=i
//    })
//    card.addEventListener("mouseleave",e=>{
//        console.log("리브")
//         myProject.classList.remove(`active${prevIndex}`)
//    })
// })
const scrollValue = () =>{
    const scrollHeight=document.body.scrollHeight;
    const realHeight=scrollHeight - window.innerHeight;
    let realRatio = window.pageYOffset/realHeight*100;
    if(realRatio<0) realRatio=1;
    if(realRatio>100) realRatio=100;

    bar.style.width=`${realRatio}%`
}
window.addEventListener("scroll",scrollValue)


})()