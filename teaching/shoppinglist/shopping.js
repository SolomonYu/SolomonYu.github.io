
let totalCost = 0;
let costArray = [];



function buyItem(item, cost){
	var element = document.createElement('div');
	element.innerHTML = item;
	element.id = 'item';
	document.getElementById('items').appendChild(element);
	
	console.log("Bought item: " + item + " at cost: $" + cost);
	addCost(cost);
}

function removeItem(){
	var items = document.getElementById('items');
	items.removeChild(items.lastChild);
	var lastCost = costArray.pop();
	totalCost -= lastCost;
	document.getElementById('totalCost').innerHTML = totalCost.toFixed(2);
}

function addCost(cost){
	totalCost += cost;
	costArray.push(cost);
	document.getElementById('totalCost').innerHTML = totalCost.toFixed(2);
}

function expandImage(imageId){
	console.log(imageId);
	document.getElementById(imageId).className = "shownImage";
}

function shrinkImage(imageId){
	console.log(imageId);
	document.getElementById(imageId).className = "hiddenImage";
}