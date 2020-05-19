console.dir(window.document);


var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");


//button functionality
var createTaskHandler = function () {
    event.preventDefault();

    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
    
    //Create List Item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    //create div to hold task information and add to list item
    var taskInfoEl = document.createElement("div");
    //Give it a class Name
    taskInfoEl.className = "task-info";
    //Add HTML content to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";
    listItemEl.appendChild(taskInfoEl);
    //Add entire list item to list
    tasksToDoEl.appendChild(listItemEl);
}

formEl.addEventListener("submit", createTaskHandler);