
import "../css/style.css";
import * as _ from "lodash";
import CountryInfo from "../template/CountryInfo.hbs";
import Items from "../template/Items.hbs";
import Pnoty from "./Pnoty"

let refs = {
    input: document.querySelector(".search"),
    countryInfo: document.querySelector(".countryInfo"),
    main: document.querySelector("main"),
  };


  refs.input.addEventListener("input", _.debounce((event) =>{
    if (event.target.value === "") {
      refs.countryInfo.innerHTML = "";
    }
     FetchName(event.target.value);

  }, 500));

 
  function FetchName(name){
    fetch(`https://restcountries.eu/rest/v2/name/${name}`)
    .then((res) => res.json()).then((data) =>{
      console.log(data)
      if (data.length > 10) {
        console.log(data);
         Pnoty();
      }
    
     if (data.length < 10 && data.length > 2) {
        refs.countryInfo.innerHTML = "";
        data.map((item) => {
          let markup = Items(item);
          refs.countryInfo.innerHTML += markup;
        });
      }
    
     if (data.length === 1) {
        let markup = CountryInfo(data[0]);
        refs.main.innerHTML = markup;
      }

    });
  }
  
  