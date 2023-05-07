const linkCss = document.getElementById('theme-link');  
const themeSwitch = document.querySelector('.theme-switch');

//changing themes
window.onload = function() {
  if (localStorage.getItem("mode") === "dark") {
    linkCss.href="../styles/dark.css";
    themeSwitch.checked = true;
  } else {
    linkCss.href="../styles/light.css";
    
  }
}

themeSwitch.addEventListener('change', (e) => {
  if (e.target.checked) {
    linkCss.href="../styles/dark.css";
    localStorage.setItem("mode", "dark");
  } else {
    linkCss.href="../styles/light.css";
    localStorage.setItem("mode", "light");
  }
})