
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");
const errorMessage = document.getElementById("errorMessage");

// Step 1: [Check the conditions]
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        errorMessage.textContent = "Task cannot be empty. Please enter a task.";
        errorMessage.style.display = "block";
        return;
    } else {
        errorMessage.style.display = "none";
    }


    // Step 2: [create an element]

    // Create a new list item
    const taskItem = document.createElement("li");

    // Create a span for the task text
    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;

    // Create a container for the buttons
    const taskActions = document.createElement("div");
    taskActions.setAttribute("class", "task-actions");

    // Create a 'Mark Complete' button
    const completeButton = document.createElement("button");
    completeButton.textContent = "Complete";
    completeButton.setAttribute("class", "mark-complete");
    completeButton.addEventListener("click", () => {
        taskSpan.classList.toggle("complete");

        // Toggle button text
        if (taskSpan.classList.contains("complete")) {
            completeButton.textContent = "Incomplete";
        } else {
            completeButton.textContent = "Complete";
        }
    });


    // Create a 'Delete' button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.setAttribute("class", "delete-task");
    deleteButton.addEventListener("click", () => {
        taskList.removeChild(taskItem);
    });

    // Create a 'Edit' button
    const editButton = document.createElement('button');
    editButton.textContent = "Edit";
    editButton.setAttribute('class', 'edit-Task');
    editButton.addEventListener('click', () => {
        const newTaskText = prompt("Edit this task:", taskSpan.textContent);
        if (newTaskText !== null && newTaskText.trim() !== "") {
            taskSpan.textContent = newTaskText.trim();
        }
    })

    // Step 3: [Append the Items ]  

    // Append buttons to the actions container
    taskActions.appendChild(completeButton);
    taskActions.appendChild(deleteButton);
    taskActions.appendChild(editButton);

    // Append task text and actions to the list item
    taskItem.appendChild(taskSpan);
    taskItem.appendChild(taskActions);

    // Append the list item to the task list
    taskList.appendChild(taskItem);

    // Clear the input field
    taskInput.value = "";
}

addTaskButton.addEventListener("click", addTask);

taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});