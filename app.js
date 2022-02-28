const placeholders = ["Walking my fish", "Eating my dog", "Hate Pooptin", "Dye my parrot", "Feeding my car", "Buy wirecard", "Sell CCIV", "Stalk with Palantir", "Short FACC", "Buy Nestle", "Vote for Karl Marx"];
const input = document.querySelector("#input");
const interaction = document.querySelector("#userInteraction");
const todolist = document.querySelector("#todoList");
pholder(placeholders, input);

interaction.addEventListener('submit', function(e){
	e.preventDefault();
	const newTodo = document.createElement("LI");
	newTodo.innerText = input.value;
	todoList.append(newTodo);
});

function pholder(placeList, input){
	let num = Math.floor(Math.random() * placeList.length);
	return input.placeholder = placeholders[num];
}
