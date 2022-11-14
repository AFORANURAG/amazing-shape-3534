// Rahul


// for importing....


import { data } from "../components/data.js";
let mainDiv = document.querySelector(".tBody");


import {navbar} from "../components/navbar.js"
document.querySelector("#navbarid").innerHTML = navbar();

import {footer} from "../components/footer.js";
document.querySelector("#footer").innerHTML = footer();


// for slideshow....

$('.responsive').slick({
  infinite:true,
slidesToShow: 3,
slidesToScroll: 3,
autoplay: true,
autoplaySpeed: 2000,
responsive: [
{
breakpoint: 768,
settings: {
  arrows: false,
  slidesToShow: 2
}
},
{
breakpoint: 480,
settings: {
  arrows: false,
  slidesToShow: 1
}
}
],
});





let temp = 0;

const displayData = (data) => {
  mainDiv.innerHTML = null;
  localStorage.setItem("exerciseData", JSON.stringify(data));

  for (let i = 0; i < data.length; i++) {
    mainDiv.innerHTML += `   <tr>
                                            <td> <img style="width:10%;" src=${data[i].a} alt=""></td>
                                            <td>${data[i].b}</td>
                                            <td>${data[i].c}</td>
                                            <td>${data[i].d}</td>
                                            <td>${data[i].e}</td>
                                            <td>${data[i].f}</td>
                                            <td>${data[i].g}</td>
                                            <td>${data[i].h}</td>
                                        </tr>`;
  }
};

displayData(data);

document.querySelector(".radioboxes").onchange = (s) => {
  let val = s.target.value;


  if (val == 1) {
    temp = "female";
    let femaleData = data.filter((e) => e.i == "female");
    displayData(femaleData);
  } else if (val == 2) {
    temp = "male";
    let maleData = data.filter((e) => e.i == "male");
    displayData(maleData);
  } else {
    temp = false;
    displayData(data);
  }
};


let mainData;



// for category 

document.querySelector(".main").onclick = () => {
    manageCat("Maintaining")
}

document.querySelector(".bulk").onclick = () => {
    manageCat("Bulking")
}
document.querySelector(".cut").onclick = () => {
    manageCat("Cutting")
}

document.querySelector(".sport").onclick = () => {
    manageCat("Sport")
}



function manageCat (x) {

    if (temp) {
        var mainDataArr =  data.filter(el => el.d == x && el.i == temp)
        displayData(mainDataArr)
   } else  {
    var mainDataArr =  data.filter(el => el.d == x)
    displayData(mainDataArr)
   }

   mainData = mainDataArr;
}




// for EXP. LEVEL 

document.querySelector(".beg").onclick = () => {
    manageExp("Beginner")
}

document.querySelector(".inter").onclick = () => {
    manageExp("Intermediate")
}
document.querySelector(".advance").onclick = () => {
    manageExp("Advanced")
}




function manageExp (x) {

        var mainDataArr =  mainData.filter(el => el.e == x)
        displayData(mainDataArr)
        
}




let searchBtn = document.querySelector("#searchBtn");



searchBtn.onclick = () => {
    
    let userinp = document.querySelector("#searchBar").value.toLowerCase();

    let kuchbhi = data.filter( el => el.j.includes (userinp))

    displayData(kuchbhi);
}


