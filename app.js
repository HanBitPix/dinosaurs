
'use strict';
// Create Dino Constructor

const Dinos = [];

class Dino {
	constructor(dino){
		this.species = dino.species;
		this.weight = dino.weight;
		this.height = dino.height;
		this.where = dino.where;
		this.diet = dino.diet;
		this.when = dino.when;
		this.fact1 = dino.fact1;
	}
}
// Create Dino Objects
const triceratops = new Dino({
	"species": "Triceratops",
	"weight": 13000,
	"height": 114,
	"diet": "herbavor",
	"where": "North America",
	"when": "Late Cretaceous",
	"fact1": "First discovered in 1889 by Othniel Charles Marsh"
});
Dinos.push(triceratops);

const trex = new Dino({
	"species": "Tyrannosaurus Rex",
	"weight": 11905,
	"height": 144,
	"diet": "carnivor",
	"where": "North America",
	"when": "Late Cretaceous",
	"fact1": "The largest known skull measures in at 5 feet long."
});
Dinos.push(trex);

const anklyosaurus = new Dino({
	"species": "Anklyosaurus",
	"weight": 10500,
	"height": 55,
	"diet": "herbavor",
	"where": "North America",
	"when": "Late Cretaceous",
	"fact1": "Anklyosaurus survived for approximately 135 million years."
});
Dinos.push(anklyosaurus);

const brachiosaurus = new Dino({
	"species": "Brachiosaurus",
	"weight": 70000,
	"height": "372",
	"diet": "herbavor",
	"where": "North America",
	"when": "Late Jurasic",
	"fact1": "An asteroid was named 9954 Brachiosaurus in 1991."
});
Dinos.push(brachiosaurus);

const stegosaurus = new Dino({
  "species": "Stegosaurus",
	"weight": 11600,
	"height": 79,
	"diet": "herbavor",
	"where": "North America, Europe, Asia",
	"when": "Late Jurasic to Early Cretaceous",
	"fact1": "The Stegosaurus had between 17 and 22 seperate places and flat spines."
});
Dinos.push(stegosaurus);

const elasmosaurus = new Dino({
	"species": "Elasmosaurus",
	"weight": 16000,
	"height": 59,
	"diet": "carnivor",
	"where": "North America",
	"when": "Late Cretaceous",
	"fact1": "Elasmosaurus was a marine reptile first discovered in Kansas."
});
Dinos.push(elasmosaurus);

const pteranodon = new Dino({
	"species": "Pteranodon",
	"weight": 44,
	"height": 20,
	"diet": "carnivor",
	"where": "North America",
	"when": "Late Cretaceous",
	"fact1": "Actually a flying reptile, the Pteranodon is not a dinosaur."
});
Dinos.push(pteranodon);

const pigeon = new Dino({
	"species": "Pigeon",
	"weight": 0.5,
	"height": 9,
	"diet": "herbavor",
	"where": "World Wide",
	"when": "Holocene",
	"fact1": "All birds are living dinosaurs."
});
Dinos.push(pigeon);

// Create Human Object
const human = {
	name: '',
	height: {
		feet: 0,
		inches: 0
	},
	weight: 0,
	diet: ''
};

// Hide Form Function
const hideForm = () => {
	document.getElementById("dino-compare").style.display = "none";
}

// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches. 
const compareWeight = (human, dino) => {

	if(human.weight === dino.weight){
		dino.fact2 = `${dino.species} weighs exactly the same as you`;
	} 
	else if (human.weight < dino.weight){
		dino.fact2 = `${dino.species} weighs ${(dino.weight / human.weight).toFixed(2)}xs more heavier than you!`;
	}
	else if (human.weight > dino.weight){
		dino.fact2 = `${dino.species} weighs ${(human.weight / dino.weight).toFixed(2)}xs less heavier than you!`;
	}
	else {
		dino.fact2 = `You are infinite more times lighter than ${dino.species}`;
	}
}

// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.
const compareHeight = (humanHeight, dino) => {
	if(humanHeight === dino.height){
		dino.fact3 = `${dino.species} is exactly the same height as you`;
	} 
	else if (humanHeight < dino.height){
		dino.fact3 = `${dino.species} is ${(dino.height / humanHeight).toFixed(2)}xs more taller than you!`;
	}
	else if (humanHeight > dino.height){
		dino.fact3 = `${dino.species} is ${(humanHeight / dino.height).toFixed(2)}xs less taller than you!`;
	}
	else {
		dino.fact3 = `You are infinite more times taller than ${dino.species}`;
	}
}

// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.
const compareDiet = (diet, dino) => {
	if(diet === dino){
		dino.fact4 = "You have the exactly the same diet!"
	}
	else {
		dino.fact4 = `You do not have the same diet as ${dino.species}`
	}
}

// Get human data from form
const getHumanData = () => {

	human.name = document.getElementById("name").value;
	human.height.feet = parseInt(document.getElementById("feet").value) || 0;
	human.height.inches = parseInt(document.getElementById("inches").value) || 0;
	human.weight = parseInt(document.getElementById("weight").value) || 0;
	human.diet = document.getElementById("diet").value;

	const totalInchesHumanHeight = (human.height.feet * 12) + human.height.inches;
	let createGrid = '';

	for (let d = 0; d < Dinos.length; d++){
		compareWeight(human,Dinos[d]);
		compareHeight(totalInchesHumanHeight,Dinos[d]);
		compareDiet(human.diet,Dinos[d]);

		if(d === 4){
			createGrid += 	
				`<div class="grid-item">
					<h3>${human.name}</h3>
					<img src="./images/human.png" alt="">
					<p></p>
				</div>
				<div class="grid-item">
					<h3>${Dinos[d].species}</h3>
					<img src="./images/${Dinos[d].species.toLowerCase()}.png" alt="">
					<p>Fact 1: ${Dinos[d].fact1}</p>
					<p>Fact 2: ${Dinos[d].fact2}</p>
					<p>Fact 3: ${Dinos[d].fact3}</p>
					<p>Fact 4: ${Dinos[d].fact4}</p>
				</div>`
		} else {
			createGrid += 
				`<div class="grid-item">
					<h3>${Dinos[d].species}</h3>
					<img src="./images/${Dinos[d].species.toLowerCase()}.png" alt=""/>
					<p>Fact 1: ${Dinos[d].fact1}</p>
					<p>Fact 2: ${Dinos[d].fact2}</p>
					<p>Fact 3: ${Dinos[d].fact3}</p>
					<p>Fact 4: ${Dinos[d].fact4}</p>
				</div>`
		}
	}
	console.log(Dinos);

	hideForm();

	//TODO: Finish creating the grid item template 
	document.getElementById('grid').innerHTML = createGrid;

};

    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM



// On button click, prepare and display infographic
