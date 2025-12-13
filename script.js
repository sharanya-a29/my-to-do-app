let taskCount = 0;

function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    taskCount++;

    let li = document.createElement("li");

    let title = document.createElement("div");
    title.className = "task-header";
    title.innerText = taskCount + ". " + taskText;

    let date = document.createElement("div");
    date.className = "task-date";
    date.innerText = "Added on: " + new Date().toLocaleDateString();

    let actions = document.createElement("div");
    actions.className = "actions";

    let doneBtn = document.createElement("button");
    doneBtn.innerText = "Done";
    doneBtn.onclick = function () {
        title.classList.toggle("done");
    };

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.onclick = function () {
        li.remove();
    };

    actions.appendChild(doneBtn);
    actions.appendChild(deleteBtn);

    li.appendChild(title);
    li.appendChild(date);
    li.appendChild(actions);

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}