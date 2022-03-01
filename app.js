const placeholders = ["Walking my fish", "Eating my dog", "Hate Pooptin", "Dye my parrot", "Feeding my car", "Buy wirecard", "Sell CCIV", "Stalk with Palantir", "Short FACC", "Buy Nestle", "Vote for Karl Marx"];
const input = document.querySelector("#input");
const interaction = document.querySelector("#userInteraction");
const todoList = document.querySelector("#todoList");


pholder(placeholders, input);


interaction.addEventListener('submit', function (e) {
    e.preventDefault();
    const newTodo = document.createElement("LI");
    const todoMove = document.createElement("img");
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todoItem");
    todoMove.src = "./images/moveRe.png";
    todoMove.classList.add("todoItemInnerImg");
    newTodo.innerText = input.value;
    newTodo.classList.add("todoItemInner");
    todoList.append(todoDiv);
    todoDiv.appendChild(newTodo);
    todoDiv.appendChild(todoMove);
    del();
});

function del() {


    const delBtns = document.querySelectorAll(".todoItemInnerImg");
    delBtns.forEach(delBtn => delBtn.addEventListener('click', function () {
        if (!delBtn.parentElement.classList.contains('todoItem')) return

        this.parentElement.remove();
    }))

}

function pholder(placeList, input) {
    let num = Math.floor(Math.random() * placeList.length);
    return input.placeholder = placeholders[num];
}