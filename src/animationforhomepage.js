 let slider_container=document.querySelector(".myslider")
let innerslider=document.querySelector(".myinnerslider")
let pressed=false;
let startx;
let x;
slider_container.addEventListener("mousedown",(e)=>{
pressed=true;
startx=e.offsetX - innerslider.offsetLeft;
console.log(startx)
slider_container.style.cursor="grabbing"
})
slider_container.addEventListener("mouseenter",()=>{
    slider_container.style.cursor="grab"
})
slider_container.addEventListener("mouseup",()=>{
    slider_container.style.cursor="grab"
})
window.addEventListener("mouseup",()=>{
    pressed=false;
})
slider_container.addEventListener("mousemove",(e)=>{
if(!pressed) return
e.preventDefault()
x=e.offsetX
innerslider.style.left=`${x-startx}px`
myfun()
})
const myfun=  ()=>{
   let outer=slider_container.getBoundingClientRect();
   let inner=innerslider.getBoundingClientRect(); 
if(parseInt(innerslider.style.left)>0){
    innerslider.style.left="0px"
}else if(inner.right<outer.right){
innerslider.style.left=`-${inner.width-outer.width}px`
}
}
innerslider.addEventListener("mouseout",function(){
   animated() 
})

