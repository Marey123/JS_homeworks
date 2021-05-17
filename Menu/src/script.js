import "./css/styles.css";
import menuTemplate from "./template/menu.hbs";
import menuData from "./menu.json";
let bodyRef = document.querySelector("body");
let selectRef = document.querySelector("#theme-switch-toggle")
let menuRef = document.querySelector('.js-menu')
const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };
  let defaultCondition = JSON.parse(localStorage.getItem("light-theme"));
  
  selectRef.addEventListener("change",(event)=>
  {
    localStorage.setItem("defaultTheme", event.target.checked);
    defaultCondition = JSON.parse(localStorage.getItem("defaultTheme"));
 
    if (defaultCondition === false || defaultCondition === null) {
      bodyRef.classList.add('light-theme');
      bodyRef.classList.remove('dark-theme');
      selectRef.checked = defaultCondition;
    } else {
      bodyRef.classList.remove('light-theme');
      bodyRef.classList.add('dark-theme');
      selectRef.checked = defaultCondition;
   
    }
  
  });

  menuData.forEach((item) => {
    let markup = menuTemplate(item);
    menuRef.innerHTML += markup;
  });