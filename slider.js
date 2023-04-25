const leftarr=document.querySelector('.left-arr');
const rightarr=document.querySelector('.right-arr');
const slides=document.querySelectorAll('.slide');
const firstSlide=document.querySelector('.Mercury');
const firstDot=document.querySelector('.first');
const lastDot=document.querySelector('.nineth');
const lastSlide=document.querySelector('.last');
const dots= document.querySelectorAll('.kolko');
const dotsContainer= document.querySelector('.dots');
const body=document.querySelector('body');
const siodme=document.querySelector('.eighth');
console.log(leftarr);
console.log(rightarr);
console.log(slides);
console.log(dots);

let currentDot=1;
let currentSlide=0;
const nexting=function(){
    nextSlide();
    nextDot();
    if(currentSlide==8){
        currentSlide=0;
        firstSlide.classList.add('active');
        firstSlide.classList.remove('hidden');
        lastSlide.classList.remove('active');
        lastSlide.classList.add('hidden');
        slides[currentSlide].classList.add('active');
        // firstDot.classList.add('activeDot');
        // firstSlide.classList.add('active');

    }
    
    // slides[currentSlide-1].classList.add('hidden');
    // slides[currentSlide-1].classList.remove('active');

    // dots[currentDot-1].classList.remove('activeDot');
    console.log(dots[currentDot]);
    console.log(slides[currentSlide]);

    

}
console.log(slides[currentSlide])
rightarr.addEventListener('click',function(){
   nexting();
    



})
console.log(dots);
leftarr.addEventListener('click',function(){
    prevSlide();
})
const nextSlide=function(){
    let prevy=currentSlide-1;
    currentSlide+=1;
    if(currentSlide>=1 && currentSlide<=8){
        slides[currentSlide].classList.remove('hidden');
        slides[currentSlide].classList.add('active');
        slides[currentSlide-1].classList.add('hidden');
        slides[currentSlide-1].classList.remove('active');
        console.log(`Obecny slide:${currentSlide}`);
    }
    else if(currentSlide==8){
        currentSlide=0;
    }
}



const prevSlide=function(){
    let nexty=currentSlide+1
    if(currentSlide>0&& currentSlide<=9){
        currentSlide-=1;
        currentDot-=1;
        slides[currentSlide].classList.add('active');
        slides[currentSlide].classList.remove('hidden');
        slides[currentSlide+1].classList.add('hidden');
        slides[currentSlide+1].classList.remove('active');

        dots[currentDot].classList.remove('activeDot');
        dots[currentDot-1].classList.add('activeDot');

    }


    console.log(slides[currentSlide]);
    console.log(currentSlide);


}
dots.forEach((e)=>{
    e.addEventListener('click',function(eve){
        console.log(currentSlide);
        console.log(eve.target);
        if(eve.target.classList.contains('second')){
            currentSlide=1;
        }
        if(eve.target.classList.contains('third')){
            currentSlide=2;
            slides[currentSlide].classList.remove('hidden');
        }
    })
})
const nextDot=function(){
    if(currentDot>=1 && currentDot<=9){
        dots[currentDot].classList.add('activeDot');
        dots[currentDot-1].classList.remove('activeDot');    
        currentDot+=1;
        console.log(`Obecna kropka:${currentDot}`);
        if(currentDot==9){
            currentDot=1;
            firstDot.classList.add('activeDot');
            lastDot.classList.remove('activeDot');

            
        }
    }
}
        