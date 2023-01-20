const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");


function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newToDo) {
    const li = document.createElement("li");
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    const span = document.createElement("span");
    span.innerText = newToDo;
    const button = document.createElement("button");
    button.innerText = "delete";
    button.addEventListener("click", deleteToDo);
    li.appendChild(checkBox);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li); 
    

    checkBox.addEventListener("submit", () => {
        if (checkBox.checked === true) {
          // textDecoration 의 속성을 line-through로 변경
          span.style.textDecoration = "line-through";
        } else {
          span.style.textDecoration = "";
        }
      });
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = ""; 
    paintToDo(newToDo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
