let todoList = JSON.parse(localStorage.getItem('todos')) || [];

function saveToStorage() {
  localStorage.setItem('todos', JSON.stringify(todoList));
}

function renderTodos() {
  const list = document.getElementById('todo-list');
  const search = document.getElementById('search-input').value.toLowerCase();
  list.innerHTML = '';

  todoList
    .filter(todo => todo.text.toLowerCase().includes(search))
    .forEach((todo, index) => {
      const li = document.createElement('li');
      li.className = todo.done ? 'done' : '';

      const content = document.createElement('div');
      const category = document.createElement('span');
      category.className = 'category-label';
      category.textContent = todo.category;

      const text = document.createElement('span');
      text.textContent = todo.text;

      content.appendChild(category);
      content.appendChild(text);
      li.appendChild(content);

      const actions = document.createElement('div');
      actions.classList.add('actions');

      const editBtn = document.createElement('button');
      editBtn.textContent = 'แก้ไข';
      editBtn.classList.add('edit');
      editBtn.onclick = () => editTodo(index);

      const doneBtn = document.createElement('button');
      doneBtn.textContent = '✓';
      doneBtn.classList.add('done');
      doneBtn.onclick = () => toggleDone(index);

      const delBtn = document.createElement('button');
      delBtn.textContent = 'ลบ';
      delBtn.classList.add('delete');
      delBtn.onclick = () => deleteTodo(index);

      actions.appendChild(editBtn);
      actions.appendChild(doneBtn);
      actions.appendChild(delBtn);

      li.appendChild(actions);
      list.appendChild(li);
    });
}

function addTodo() {
  const input = document.getElementById('todo-input');
  const category = document.getElementById('category-input').value;
  const text = input.value.trim();

  if (text !== '') {
    todoList.push({ text, category, done: false });
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

function editTodo(index) {
  const newText = prompt('แก้ไขรายการ:', todoList[index].text);
  if (newText !== null && newText.trim() !== '') {
    todoList[index].text = newText.trim();
    saveToStorage();
    renderTodos();
  }
}

renderTodos();
