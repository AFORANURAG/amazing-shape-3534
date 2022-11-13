const navbar=()=>{
let x = document.getElementById("navbarid");
  if (x.className === "navbar") {
      console.log(x)
    x.className += " ournavbar";
  } else {
    console.log(x)
    x.className="navbar";
  }
}
