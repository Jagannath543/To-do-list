const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

addBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText) {
        const li = document.createElement('li');
        li.innerHTML = `${taskText} <button onclick="this.parentElement.remove()">Delete</button>`;
        li.addEventListener('click', () => li.classList.toggle('completed'));
        taskList.appendChild(li);
        taskInput.value = '';
    }
});
