listOfTasks = [];

function load()
{
    listOfTasks = JSON.parse(localStorage.getItem("listOfTasks"));
    
    if (!listOfTasks)
    {
        listOfTasks = [];
    }
    display()
}

function save()
{
    localStorage.setItem("listOfTasks", JSON.stringify(listOfTasks));
}

function display() {
    const taskList = document.querySelector(".main-list");
    
    // Clear existing content in the taskList
    taskList.innerHTML = '';

    for (const task of listOfTasks) {
        const newTask = document.createElement("li");
        newTask.className = "main-list-item";

        newTask.innerHTML = `
            <input type="checkbox" class="checkbox" id="task-${listOfTasks.indexOf(task)}" ${task.checked ? 'checked' : ''}>
            <label class="task-label" for="task-${listOfTasks.indexOf(task)}">${task.name}</label>
            <button class="fa-regular fa-trash-can btn-delete"></button>
        `;

        taskList.appendChild(newTask);
    }
    save()
}

document.addEventListener("DOMContentLoaded", () => 
{
    load();

    const addButton = document.querySelector(".btn-add");

    function createTask(name='New Task', checked='') {
        return {
            "name": name,
            "checked": checked,
        };
    }

    addButton.onclick = () =>
    {
        // Create task item
        let newTask = createTask();
        listOfTasks.push(newTask);
        display();
    }
});