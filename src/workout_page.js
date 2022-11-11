// import navbar from "../components/navbar.js"
// document.querySelector("#navbarid").innerHTML = navbar();

import { data } from "../components/data.js";
let mainDiv =  document.querySelector(".tBody");








const displayData = (data) => {
    
    mainDiv.innerHTML = null;
localStorage.setItem("exerciseData", JSON.stringify(data));

data.forEach(el => {
        mainDiv.innerHTML +=        ` <tr>
                                        <td> <img style="width:10%;" src=${el.a} alt=""></td>
                                        <td>${el.b}</td>
                                        <td>${el.c}</td>
                                        <td>${el.d}</td>
                                        <td>${el.e}</td>
                                        <td>${el.f}</td>
                                        <td>${el.g}</td>
                                        <td>${el.h}</td>
                                      </tr>`                          

                                    
});
}



    displayData(data)
