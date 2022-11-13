
import {navbar} from "../components/navbar.js"
document.getElementById("navbarid").innerHTML=navbar()

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8c8d40d415msh14c89782e7c2770p17ea55jsnd814534b050a',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
};
// all exercises



// //-------------------------------------> exercises by equipment
// fetch('https://exercisedb.p.rapidapi.com/exercises/equipment/assisted', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

// //.....list by target muscles 
// fetch('https://exercisedb.p.rapidapi.com/exercises/targetList', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));
// //----------------------->list by names 


// fetch('https://exercisedb.p.rapidapi.com/exercises/name/%7Bname%7D', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

// //----------------------body parts
// fetch('https://exercisedb.p.rapidapi.com/exercises/bodyPart/%7BbodyPart%7D', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

//convert it to a string without white spaces
var string= "astride jumps (male)"
var filtered_string=string.split(" ")
var newone=filtered_string.join("%20")
console.log(newone)

//example responses
fetch(`https://exercisedb.p.rapidapi.com/exercises/name/${newone}`, options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));


// there will be 4 searching functionality    