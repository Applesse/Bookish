const linkCss = document.getElementById('theme-link');  
const themeSwitch = document.querySelector('.theme-switch');

//changing themes
window.onload = function() {
  if (localStorage.getItem("mode") === "dark") {
    linkCss.href="styles/dark.css";
    themeSwitch.checked = true;
  } else {
    linkCss.href="styles/light.css";
    
  }
}

themeSwitch.addEventListener('change', (e) => {
  if (e.target.checked) {
    linkCss.href="styles/dark.css";
    localStorage.setItem("mode", "dark");
  } else {
    linkCss.href="styles/light.css";
    localStorage.setItem("mode", "light");
  }
})

const menuButton = document.querySelector(".dropdown-menu-for-smaller-devices");
const subMenu = document.querySelector(".submenu-for-smaller-devices");

menuButton.addEventListener("click", ()=>{
  if(subMenu.classList.contains('hidden')){
    subMenu.classList.remove('hidden')
  }
  else{
    subMenu.classList.add('hidden');
  }
  
})