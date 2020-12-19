function getValue(e){
    e.preventDefault();
    let task = document.getElementById('enter-task');

    if(task.value != '') {
        createTask(task.value);
    } else {
        task.value = '';
    }
}

function createTask(task){
    let taskList = document.getElementById('list');
    let newTask = document.createElement('li');
    newTask.classList.add('todo__item', 'list-group-item');
    newTask.id = 'item';
    newTask.innerHTML = 
    `
    <p class="todo__text" id="text">
        ${task}
    </p>
    <button class="todo__button--remove btn btn-danger" id="remove" onclick="removeTask()">
        <i class="fas fa-minus"></i>
    </button>
    `;

    taskList.appendChild(newTask);
    clearInput();
}

function clearInput() {
    let enterTask = document.getElementById('enter-task');
    if (enterTask.value != '') {
        enterTask.value = ''
    }
}

function removeTask() {
    let taskItem = document.getElementById('item');
    taskItem.parentNode.removeChild(taskItem);
}

// Event Listeners
document.getElementById('form').addEventListener('submit', getValue);