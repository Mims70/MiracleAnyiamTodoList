const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const li = document.createElement('li');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        const taskLabel = document.createElement('label');
        taskLabel.textContent = taskText;

        li.appendChild(checkbox);
        li.appendChild(taskLabel);
        taskList.appendChild(li);

        taskInput.value = "";
    }
}
