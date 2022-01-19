const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");
const cmd_AddButton = toDoForm.querySelector("#AddButton");

let toDos = [];

function SaveToDos() {
  localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteToDo(event) {
  const toDelEl = event.target.parentElement;
  toDos = toDos.filter((elem) => {
    return elem.id != toDelEl.id;
  });
  SaveToDos();
  toDelEl.remove();
}

function paintToDo(newToDo) {
  const newTodoListli = document.createElement("li");
  newTodoListli.id = newToDo.id;

  const newTodoListSpan = document.createElement("span");
  newTodoListSpan.innerText = newToDo.text;

  const newTodoListButton = document.createElement("button");
  newTodoListButton.innerText = "X";
  newTodoListButton.addEventListener("click", deleteToDo);

  newTodoListli.appendChild(newTodoListSpan);
  newTodoListli.appendChild(newTodoListButton);

  toDoList.appendChild(newTodoListli);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";

  const PushItem = {
    id: Date.now(),
    text: newTodo,
  };

  toDos.push(PushItem);
  paintToDo(PushItem);
  SaveToDos();
}

// toDoForm.addEventListener("submit", handleToDoSubmit);
cmd_AddButton.addEventListener("click", handleToDoSubmit);

const savedToDos = localStorage.getItem("todos");
if (savedToDos != null) {
  toDos = JSON.parse(savedToDos);
  toDos.forEach(paintToDo);
}
