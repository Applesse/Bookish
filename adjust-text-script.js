const background = document.querySelector('.background-for-adj');
const modulos = document.querySelector('.adjusting-text-chapter');
const buttonAdj = document.querySelector('.adjust-chapter-btn');
const buttonClose = document.querySelector('.close-modulos');
const moveUp = document.querySelector('.move-up');
const adjText = document.querySelector('.adjust-text');
const adjSpace = document.querySelector('.adjust-space');
const chapterContent = document.querySelector('.chapter-content');
let valueOptionT, valueOptionS, choosedSpace, choosedText;



//scroll up button
window.addEventListener('scroll', ()=>{
    if(window.scrollY >= 200){
        moveUp.classList.remove('hidden');
    }
    else{
        moveUp.classList.add('hidden');
    }
})
moveUp.addEventListener('click',()=>{
    window.scrollTo({top: 0, behavior: 'smooth'});
})




//opening and closing modulos
buttonAdj.addEventListener('click', ()=>{
    modulos.classList.remove('hidden');
    background.classList.remove('hidden');
})
const closeModulos = () =>{
    if(!modulos.classList.contains('hidden')&&!background.classList.contains('hidden')){
        modulos.classList.add('hidden');
        background.classList.add('hidden');
    }
    else{return}
}
background.addEventListener('click', closeModulos);
buttonClose.addEventListener('click', closeModulos);

//changing font size
adjText.addEventListener('change', ()=>{
    valueOptionT =adjText.value;
    chapterContent.style.setProperty('--size', `${valueOptionT}px`);
    localStorage.setItem('--size', `${valueOptionT}px`);
}
)

//changing space between paragraphs
adjSpace.addEventListener('change', ()=>{
    valueOptionS = adjSpace.value;
    chapterContent.style.setProperty('--space', `${valueOptionS}rem`);  
})