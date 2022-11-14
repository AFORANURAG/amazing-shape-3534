import {navbar} from "../components/navbar.js"
import {footer} from "../components/footer.js"
document.getElementById("navbarid").innerHTML=navbar()

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd1c8f36415msh2e7a1b6caefa3ddp167082jsn33c71d3d8bd8',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
};
// all exercises



//-------------------------------------> exercises by equipment
fetch('https://exercisedb.p.rapidapi.com/exercises/equipment/assisted', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

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
fetch('https://exercisedb.p.rapidapi.com/exercises/bodyPart/%7BbodyPart%7D', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

//convert it to a string without white spaces
var string= "astride jumps (male)"
var filtered_string=string.split(" ")
var newone=filtered_string.join("%20")
console.log(newone)

//example responses


// there will be 4 searching functionality    


 
let image_array=  [
	{
	        "id": 3,
            "uuid": "ef0b00e2-3323-4e7f-88fe-d71ef34b3384",
            "exercise_base": 167,
            "image": "https://wger.de/media/exercise-images/91/Crunches-1.png",
            "is_main": true,
            "style": "1",
            "license": 1,
            "license_author": "",
            "author_history": []
        },
        {
            "id": 7,
            "uuid": "bed4f21b-28be-4ef1-bd88-1a4e3db66c5c",
            "exercise_base": 427,
            "image": "https://wger.de/media/exercise-images/93/Decline-crunch-1.png",
            "is_main": true,
            "style": "1",
            "license": 1,
            "license_author": "",
            "author_history": []
        },
        {
            "id": 11,
            "uuid": "59efcec2-a7ce-40ba-bf2b-1a6eabe52fbd",
            "exercise_base": 301,
            "image": "https://wger.de/media/exercise-images/128/Hyperextensions-1.png",
            "is_main": true,
            "style": "1",
            "license": 1,
            "license_author": "Everkinetic",
            "author_history": []
        },
        {
            "id": 15,
            "uuid": "1c37e4e1-5144-4a50-8294-16180a9bc767",
            "exercise_base": 76,
            "image": "https://wger.de/media/exercise-images/88/Narrow-grip-bench-press-1.png",
            "is_main": true,
            "style": "1",
            "license": 1,
            "license_author": "Everkinetic",
            "author_history": []
        },
        {
            "id": 19,
            "uuid": "065f9418-6245-46ae-8e24-b4013ce084e4",
            "exercise_base": 95,
            "image": "https://wger.de/media/exercise-images/129/Standing-biceps-curl-1.png",
            "is_main": true,
            "style": "1",
            "license": 1,
            "license_author": "Everkinetic",
            "author_history": []
        },
        {
            "id": 23,
            "uuid": "ca71df8e-a6d6-453f-a25a-f4cebae3b970",
            "exercise_base": 92,
            "image": "https://wger.de/media/exercise-images/81/Biceps-curl-1.png",
            "is_main": true,
            "style": "1",
            "license": 1,
            "license_author": "Everkinetic",
            "author_history": []
        },
        {
            "id": 27,
            "uuid": "7276a19e-06d0-45ae-a2a3-569bed75686b",
            "exercise_base": 91,
            "image": "https://wger.de/media/exercise-images/74/Bicep-curls-1.png",
            "is_main": true,
            "style": "1",
            "license": 1,
            "license_author": "Everkinetic",
            "author_history": []
        },
        {
            "id": 35,
            "uuid": "c64a9199-5ad7-4552-abdd-491deb02296a",
            "exercise_base": 197,
            "image": "https://wger.de/media/exercise-images/83/Bench-dips-1.png",
            "is_main": true,
            "style": "1",
            "license": 1,
            "license_author": "Everkinetic",
            "author_history": []
        },
        {
            "id": 39,
            "uuid": "dd0a0445-11cf-45d3-bbd1-6ae0add6b39c",
            "exercise_base": 572,
            "image": "https://wger.de/media/exercise-images/151/Dumbbell-shrugs-2.png",
            "is_main": true,
            "style": "1",
            "license": 1,
            "license_author": "Everkinetic",
            "author_history": []
        },
        {
            "id": 43,
            "uuid": "f22c1928-fc70-4595-b090-af73e7a019fe",
            "exercise_base": 571,
            "image": "https://wger.de/media/exercise-images/150/Barbell-shrugs-1.png",
            "is_main": true,
            "style": "1",
            "license": 1,
            "license_author": "Everkinetic",
            "author_history": []
        },
        {
            "id": 47,
            "uuid": "aa574839-4a7e-4c0d-ac72-2f7448478a1c",
            "exercise_base": 272,
            "image": "https://wger.de/media/exercise-images/86/Bicep-hammer-curl-1.png",
            "is_main": true,
            "style": "1",
            "license": 1,
            "license_author": "Everkinetic",
            "author_history": []
        },
        {
            "id": 51,
            "uuid": "4545b1ab-bf7f-4626-894e-b801047f2fa9",
            "exercise_base": 275,
            "image": "https://wger.de/media/exercise-images/138/Hammer-curls-with-rope-1.png",
            "is_main": true,
            "style": "1",
            "license": 1,
            "license_author": "Everkinetic",
            "author_history": []
        },
        {
            "id": 55,
            "uuid": "f3ea8468-02df-4022-a8ef-17700c98d63c",
            "exercise_base": 482,
            "image": "https://wger.de/media/exercise-images/195/Push-ups-1.png",
            "is_main": true,
            "style": "1",
            "license": 1,
            "license_author": "Everkinetic",
            "author_history": []
        },
        {
            "id": 60,
            "uuid": "ad26f561-e80b-43e2-93ed-07c0fba63a3d",
            "exercise_base": 246,
            "image": "https://wger.de/media/exercise-images/84/Lying-close-grip-triceps-press-to-chin-1.png",
            "is_main": true,
            "style": "1",
            "license": 1,
            "license_author": "Everkinetic",
            "author_history": []
        },
        {
            "id": 66,
            "uuid": "a02c9c7d-f42d-43e0-9946-1b99b014daee",
            "exercise_base": 268,
            "image": "https://wger.de/media/exercise-images/116/Good-mornings-2.png",
            "is_main": true,
            "style": "1",
            "license": 1,
            "license_author": "Everkinetic",
            "author_history": []
        },
        {
            "id": 68,
            "uuid": "08517378-bc36-4f6b-9952-1f45a02d936e",
            "exercise_base": 73,
            "image": "https://wger.de/media/exercise-images/192/Bench-press-1.png",
            "is_main": true,
            "style": "1",
            "license": 1,
            "license_author": "Everkinetic",
            "author_history": []
        },
        {
            "id": 73,
            "uuid": "6c1a7459-266d-491a-bd50-7cbaea2bc771",
            "exercise_base": 154,
            "image": "https://wger.de/media/exercise-images/181/Chin-ups-2.png",
            "is_main": true,
            "style": "1",
            "license": 1,
            "license_author": "Everkinetic",
            "author_history": []
        },
        {
            "id": 77,
            "uuid": "94347272-2ea7-407f-9362-cde777bc908d",
            "exercise_base": 513,
            "image": "https://wger.de/media/exercise-images/106/T-bar-row-1.png",
            "is_main": true,
            "style": "1",
            "license": 1,
            "license_author": "Everkinetic",
            "author_history": []
        },
        {
            "id": 84,
            "uuid": "63da5c54-7f1d-4a09-9867-2bdda2a6ddeb",
            "exercise_base": 83,
            "image": "https://wger.de/media/exercise-images/109/Barbell-rear-delt-row-1.png",
            "is_main": true,
            "style": "1",
            "license": 1,
            "license_author": "Everkinetic",
            "author_history": []
        },
        {
            "id": 88,
            "uuid": "90e32fa6-a90d-46b3-8ea8-c9ec8e666eca",
            "exercise_base": 525,
            "image": "https://wger.de/media/exercise-images/70/Reverse-grip-bent-over-rows-1.png",
            "is_main": true,
            "style": "1",
            "license": 1,
            "license_author": "Everkinetic",
            "author_history": []
        }
]

append(image_array)
function append(array){
document.getElementById("options").innerHTML=null
array.forEach(element => {
let div=document.createElement("div")
div.setAttribute("class","mydiv")
let image$=document.createElement("img")
image$.setAttribute("class","images")
image$.src=element.image
div.append(image$)
document.getElementById("options").append(image$)
});
}
document.getElementById("footer").innerHTML=footer()