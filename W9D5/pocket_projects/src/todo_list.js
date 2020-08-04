const todoUl = document.querySelector(".todos");
const todoForm = document.querySelector(".add-todo-form");
const todos = JSON.parse(localStorage.getItem('todos')) || [];

const addTodo = (e) => {
  e.preventDefault();
  const todoText = document.querySelector('input[name="add-todo"]');
  let value = todoText.value;
  const task = {value: value, done: false};
  todos.push(task.value);
  localStorage.setItem('todos', JSON.stringify(todos));
  todoForm.reset();

  populateList(todos);
}

const populateList = (tasks) => {
  tasks.forEach( (todo) => {
    const label = document.createElement("label");
    label.innerHTML = todo;
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const outerLi = document.createElement("li");
    outerLi.appendChild(checkbox);
    outerLi.appendChild(label);

    todoUl.appendChild(outerLi);
  });
}

todoForm.addEventListener("submit", addTodo);