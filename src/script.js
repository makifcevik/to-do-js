idCounter = 0;

document.addEventListener("DOMContentLoaded", () => 
{
    const addButton = document.querySelector(".btn-add");
    const taskList = document.querySelector(".main-list");

    addButton.onclick = () => 
    {
        
        // Create item
        const newTask = document.createElement("li");
        newTask.className = "main-list-item";
        newTask.innerHTML = `
        <input type="checkbox" class="checkbox" id="task-${idCounter}">
        <label class="task-label" for="task-${idCounter}">New Task</label>
        <button class="fa-regular fa-trash-can btn-delete"></button>  
        `;

        // Delete item
        const deleteButton = newTask.querySelector(".btn-delete");
        deleteButton.onclick = () => 
        {
            newTask.remove();
        }

        // Edit item
        const taskName = newTask.querySelector(".task-label");
        taskName.ondblclick = () => 
        {
            const editInput = document.createElement("input");
            editInput.className = "task-edit-entry";
            editInput.value = taskName.textContent;

            newTask.replaceChild(editInput, taskName);

            // focus
            // editInput.focus();

            // save changes
            function saveTaskName()
            {
                taskName.textContent = editInput.value;
                newTask.replaceChild(taskName, editInput);
            }

            // save on input = enter
            editInput.addEventListener("keyup", (event) =>
            {
                if (event.key === "Enter")
                {
                    saveTaskName();
                }
            });

            setTimeout( () => 
            {
                document.addEventListener("click", clickHandler);
            }, 0);

            // Click event handler
            function clickHandler(event) 
            {
                if (!newTask.contains(event.target)) 
                {
                    saveTaskName();
                    document.removeEventListener("click", clickHandler);
                }
            }

        }
        taskList.append(newTask); 
        idCounter++;
    }     
});

    

