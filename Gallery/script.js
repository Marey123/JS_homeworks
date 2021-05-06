import gallery from "./gallery-items.js";
class Gallery{
    constructor(elements,refsobj){
        this.refs = refsobj;
        this.gallery = elements;
    }



create()
    {
        this.gallery.forEach((img)=>{
        refs.ulGallary.insertAdjacentHTML("beforeend",`<li class="gallery__item"><a class="gallery__link" href="${img.original}"
        ><img class="gallery__image" src="${img.original}" data-source="${img.original}" alt="${img.description}" /></a></li>`)});
    }
select()
    {
    let {ulGallary,LightBox,LightBoxImage} = this.refs;
    ulGallary.addEventListener("click", (event)=>{
    event.preventDefault();
    if("IMG" !== event.target.nodeName) return;
    LightBox.classList.add('is-open');
    LightBoxImage.setAttribute('src',`${event.target.dataset.source}`);
   
    });
    }
closeButton()
    {
    let {LightBoxCloseButton,LightBox,LightBoxImage} = this.refs;
    LightBoxCloseButton.addEventListener("click", ()=>
    {
    LightBox.classList.remove('is-open');
    LightBoxImage.setAttribute('src',` `);
   
    });
    }
overlay()
    {
    let {LightBoxOverlay,LightBox,LightBoxImage} = this.refs;
    const imgArr = this.gallery.map(({ original }) => original);
   
    imgArr.push(this.original);
    LightBoxOverlay.addEventListener("click", ()=>
    {
    LightBox.classList.remove('is-open');
    LightBoxImage.setAttribute('src',` `);
    
    });
    window.addEventListener("keydown", (event) => {
    
        if (event.key === "Escape") {
          LightBox.classList.remove("is-open");
          LightBoxImage.src = "";
        }
        if (
            event.code === "ArrowRight" && LightBox.classList.contains("is-open")
          ) {
            let index = imgArr.indexOf(LightBoxImage.src);
            if (index != imgArr.length - 1) {
              index++;
              LightBoxImage.src = imgArr[index];
            }
            console.log(index);
            
          }
    
          if (
            event.code === "ArrowLeft" && LightBox.classList.contains("is-open")
          ) {
            let idx = imgArr.indexOf(LightBoxImage.src);
              if (idx <=-1 || idx === 0 || idx == imgArr.length-1) {
              idx == imgArr.length-1;
              LightBoxImage.src = imgArr[idx];
            } else {
                LightBoxImage.src = imgArr[--idx];
              }
            
          }
      });
    }
    
}
const refs = 
{ulGallary:document.querySelector(".js-gallery"),
LightBox: document.querySelector(".js-lightbox"),
LightBoxImage: document.querySelector(".lightbox__image"),
LightBoxCloseButton: document.querySelector( 'button[data-action="close-lightbox"]' ),
LightBoxOverlay: document.querySelector(".lightbox__overlay")}

const Mygallery = new Gallery(gallery,refs);
Mygallery.create();
Mygallery.select();
Mygallery.closeButton();
Mygallery.overlay();