let todoList = JSON.parse(localStorage.getItem('todos')) || [];

function saveToStorage() {
  localStorage.setItem('todos', JSON.stringify(todoList));
}

function renderTodos() {
  const list = document.getElementById('todo-list');
  list.innerHTML = '';

  todoList.forEach((todo, index) => {
    const li = document.createElement('li');
    li.className = todo.done ? 'done' : '';

    const text = document.createTextNode(todo.text);
    li.appendChild(text);

    const actions = document.createElement('div');
    actions.classList.add('actions');

    const doneBtn = document.createElement('button');
    doneBtn.textContent = '✓';
    doneBtn.onclick = () => toggleDone(index);

    const delBtn = document.createElement('button');
    delBtn.textContent = 'ลบ';
    delBtn.onclick = () => deleteTodo(index);

    actions.appendChild(doneBtn);
    actions.appendChild(delBtn);
    li.appendChild(actions);

    list.appendChild(li);
  });
}

function addTodo() {
  const input = document.getElementById('todo-input');
  const text = input.value.trim();

  if (text !== '') {
    todoList.push({ text: text, done: false });
    saveToStorage();
    renderTodos();
    input.value = '';
  }
}

function toggleDone(index) {
  todoList[index].done = !todoList[index].done;
  saveToStorage();
  renderTodos();
}

function deleteTodo(index) {
  todoList.splice(index, 1);
  saveToStorage();
  renderTodos();
}

renderTodos();
