const placeholders = ["Brew some coffee", "Clean my keyboard", "Clean my car", "Buy groceries", "Wash my cloth's", "Do math homework", "Clean my room", "Call my granny", "Learn CSS", "Finish my course", "Learn git", "Read 20 sites"];
const input = document.querySelector("#input");
const interaction = document.querySelector("#userInteraction");
const todoList = document.querySelector("#todoList");
const inputLabel = document.querySelector("#inputLabel");
const doneList = document.querySelector("#doneList");

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
pholder(placeholders, input);

function renderCard(todoText, id, isNew, isDone) {
    const newTodo = document.createElement("LI");
    const todoMove = document.createElement("img");
    const todoDiv = document.createElement("div");
    const todoDone = document.createElement("img");
    todoDiv.classList.add("todoItem");
    todoMove.src = "./images/remove.png";
    todoMove.classList.add("todoItemInnerImg");
    todoDone.src = "./images/done.png";
    todoDone.classList.add("todoDoneInnerImg");

    newTodo.innerText = todoText;
    newTodo.classList.add("todoItemInner");
    inputLabel.innerText = "Add a Todo";
    todoDiv.appendChild(newTodo);
    todoDiv.appendChild(todoDone);
    todoDiv.appendChild(todoMove);
    todoDiv.setAttribute("id", id);
    if(isDone){
        doneList.append(todoDiv);
    } else {
        todoList.append(todoDiv);
    }

    mov();
    del();
}

interaction.addEventListener('submit', function (e) {
    e.preventDefault();
    
    if (!input.value) {
        const invalidAlert = document.createElement("p");
        invalidAlert.classList.add("pAlert");
        inputLabel.innerText = "";
        invalidAlert.innerText = "Please enter a valid input!";
        inputLabel.append(invalidAlert);
    } else {
        let id = uuidv4();
        input.focus();
        let taskData = {taskText: input.value, isDone: false};
        localStorage.setItem(id, JSON.stringify(taskData));
        renderCard(input.value, id, true);
        input.value = "";
    }
});

function del() {
    const delBtns = document.querySelectorAll(".todoItemInnerImg");
    delBtns.forEach(delBtn => delBtn.addEventListener('click', function () {
        try {
            document.getElementById(this.parentElement.id).remove();
            localStorage.removeItem(this.parentElement.id);
        } catch (error) {
            return
        }
    }))

}

function mov() {
    const movBtns = document.querySelectorAll(".todoDoneInnerImg");
    movBtns.forEach(movBtn => movBtn.addEventListener('click', function () {
        let key = this.parentElement.getAttribute("id");
        let value = JSON.parse(localStorage.getItem(key));
        if(value.isDone === false){
            value.isDone = true;
            localStorage.setItem(key, JSON.stringify(value));
            doneList.append(this.parentElement);
        }
    }))
}

function pholder(placeList, input) {
    let num = Math.floor(Math.random() * placeList.length);
    return input.placeholder = placeholders[num];
}

function init(){
    for(let i = 0; i < localStorage.length; i++){
        let key = localStorage.key(i);
        let value = JSON.parse(localStorage.getItem(key));
        renderCard(value.taskText, key, false, value.isDone);
    }
}
init()