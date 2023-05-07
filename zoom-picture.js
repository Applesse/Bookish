//shoving art of story in bigger size after clicking:
const bigImageOfFiction = document.querySelector('.showing-image-of-fiction');
const smallImageOfFiction = document.querySelector('.image-positioning-fiction');
const background = document.querySelector('.background-for-image');

let showingImg = smallImageOfFiction.addEventListener('click', () =>{
    bigImageOfFiction.classList.remove('hidden');
    background.classList.remove('hidden');
});

let hideImg = background.addEventListener('click', () =>{
    if(!bigImageOfFiction.hidden && !background.hidden){
    bigImageOfFiction.classList.add('hidden');
    background.classList.add('hidden');}});
