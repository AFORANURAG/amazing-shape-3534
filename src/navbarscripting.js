const navbar=()=>{
    let x = document.getElementById("ournavbar");
    if (x.className === "responsive_navbar") {
        console.log(x)
      x.className += " responsive_hogaya";
    } else {
      console.log(x)
      x.className = "responsive_navbar";
    }
  }