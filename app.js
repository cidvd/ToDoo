const placeholders = ["Brew some coffee", "Clean my keyboard", "Clean my car", "Buy groceries", "Wash my cloth's", "Do math homework", "Clean my room", "Call my granny", "Learn CSS", "Finish my course", "Learn git", "Read 20 sites"];
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
    todoMove.src = "./images/remove.png";
    todoMove.classList.add("todoItemInnerImg");
    if (!input.value){
        alert("Please enter a valid input!");
    }
    else {
    newTodo.innerText = input.value;
    newTodo.classList.add("todoItemInner");
    todoList.append(todoDiv);
    todoDiv.appendChild(newTodo);
    todoDiv.appendChild(todoMove);
    }
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
