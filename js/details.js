let btn = document.getElementById("btn");
let mywind = document.querySelector('.body');

btn.addEventListener('click', (e) => {
    if (e.target.classList.contains('quick-btn')) {
        mywind.style.display = 'inline';
    }
});

//details
let options= document.getElementsByClassName("options");
let screen = document.getElementById("screen");
let next= document.getElementById("next");
let prev= document.getElementById("prev");


for(let op of options){
    op.addEventListener('click',(e)=>{
        screen.src=e.target.src;
        for(let op2 of options){
        op2.classList.remove("active") }
        op.classList.add("active")
        })
    }

next.addEventListener('click',()=>{
    let source = parseInt(screen.src.split('product-detail-')[1].split('.')[0]);
    let i= source+1>3? 1 :source+1;
    screen.src=`../images/product-detail-0${i}.jpg`;
    
})

prev.addEventListener('click',()=>{
    let source = parseInt(screen.src.split('product-detail-')[1].split('.')[0]);
    let i= source-1<1? 3 :source-1;
    screen.src=`../images/product-detail-0${i}.jpg`;
})

let inc = document.getElementById("btn-inc");
let dec = document.getElementById("btn-dec");
let num = document.getElementById("numinput");

inc.addEventListener('click',()=>{
    num.stepUp(1);
})

dec.addEventListener('click',()=>{
    num.stepDown(1);
})

let close =document.getElementById("close");
close.addEventListener('click',()=>{
    mywind.style.display='none';
})

// let zoom = document.getElementById("zoom");
// let copy = screen;
// zoom.addEventListener('click',()=>{
//     copy.classList.add("zoomMode");
// })
