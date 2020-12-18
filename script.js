const form = document.getElementById('form');
const addTask = document.getElementById('add-task');
const input = document.getElementById('input');
const addButton = document.getElementById('add');
const list = document.getElementById('list');
const text = document.getElementById('text');
const removeButton = document.getElementById('remove');

function validateForm() {
    let taskInput = document.getElementById('input').value;
	if (taskInput == '') {
        document.getElementById('error').innerHTML = "Please Enter a Task"
        return false;
    } else if (taskInput != '') {
        document.getElementById('error').innerHTML = '';
    }
}

function newTask() {

}

// Event Listeners
addButton.addEventListener('click', e => {
  e.preventDefault();
  const taskInput = input.value.trim();
  console.log(taskInput);
  validateForm();
  document.getElementById('input').value = '';
  
})