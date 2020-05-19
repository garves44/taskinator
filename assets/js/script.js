console.dir(window.document);


var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");



var taskFormHandler = function () {
    event.preventDefault();

    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
    //check if input values are empty strings
    if (!taskNameInput || !taskTypeInput) {
        alert("You need to fill out the task form!");
        return false;
    }
    formEl.reset();
    //package up data as an object
    var taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput
    };
    //send it as an argument to creatTaskEl
    creatTaskEl(taskDataObj);
}

var creatTaskEl = function (taskDataObj) {
    //Create List Item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    //create div to hold task information and add to list item
    var taskInfoEl = document.createElement("div");
    //Give it a class Name
    taskInfoEl.className = "task-info";
    //Add HTML content to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
    listItemEl.appendChild(taskInfoEl);
    //Add entire list item to list
    tasksToDoEl.appendChild(listItemEl);

}
formEl.addEventListener("submit", taskFormHandler);