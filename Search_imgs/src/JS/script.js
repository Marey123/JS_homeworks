import "../CSS/style.css";
import * as _ from "lodash";
import imgs from "../template/Images.hbs";
import { forEach } from "lodash";

 let refs={
   input : document.querySelector("input"),
   gallery: document.querySelector(".gallery"),
   button: document.querySelector("button")

 };
let url;

class Gallery{
constructor(){
this.quest  =" ";
this.counter = 1;
this.myquest =`&q=${this.quest}`;
this.mycounter =`&page=${this.counter}`;
this.My_API = `22079208-c9aa458b33ba9021c4ae816c4`;
this.URN = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&per_page=12&key=${this.My_API}`
}

InputTag(){
  refs.input.addEventListener("input", _.debounce((event) =>{
    if (event.target.value === " ") {
      refs.input.innerHTML = " ";
    }
    this.quest = event.target.value;
     this.FetchUrl();
    
     
  }, 500));
}

FetchUrl(){
 
  this.myquest =`&q=${this.quest}`;
  this.mycounter =`&page=${this.counter}`;
  url = this.URN + this.myquest + this.mycounter;
  fetch(url)
  .then(res => res.json()).then((data) => {
          let markup = imgs(data.hits);
          refs.gallery.innerHTML = markup;
    
        
})
};

TabButton(){
  
  refs.button.addEventListener("click",()=>{
  this.counter++;
  this.myquest =`&q=${this.quest}`;
  this.mycounter =`&page=${this.counter}`;
  url = this.URN + this.myquest + this.mycounter;
  fetch(url)
  .then(res => res.json()).then((data) => {
          let markup = imgs(data.hits);
          refs.gallery.innerHTML += markup;            
        })
        window.scrollTo( { top: 1600,
          behavior: 'smooth'});
  });
}
  
MyObserver(){
  this.counter++;
  this.myquest =`&q=${this.quest}`;
  this.mycounter =`&page=${this.counter}`;
  url = this.URN + this.myquest + this.mycounter;
  let intersectionObserver = new IntersectionObserver(function(entries) {
  if (entries[0].intersectionRatio <= 0) return;
  
  fetch(url)
  .then(res => res.json()).then((data) => {
    let markup = imgs(data.hits);
    refs.gallery.innerHTML += markup;            
  })
  });
 
  intersectionObserver.observe(document.querySelector('.scrollerFooter'));
}

}


let MyGallery = new Gallery();
MyGallery.InputTag();
MyGallery.TabButton();
MyGallery.MyObserver();
