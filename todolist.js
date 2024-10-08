let inputElement = document.getElementById('input-box');
let listElement = document.getElementById('list-container');

function addTask() {
    if (inputElement.value === '') {
        alert("Please enter a task!");
    } else {
        let listItem = document.createElement("li");
        listItem.innerHTML = inputElement.value;

        let span = document.createElement("span");
        span.innerHTML = "&times;";
        span.onclick = function() {
            listItem.remove();
            saveTasks();
        };

        listItem.appendChild(span);
        listElement.appendChild(listItem);

        listItem.onclick = function() {
            listItem.classList.toggle("checked");
            saveTasks();
        };

        inputElement.value = '';
        saveTasks();
    }
}

function saveTasks() {
    localStorage.setItem("tasks", listElement.innerHTML);
}

function loadTasks() {
    listElement.innerHTML = localStorage.getItem("tasks");
}

loadTasks();
