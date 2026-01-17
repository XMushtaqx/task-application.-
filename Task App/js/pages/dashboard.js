import { addTask,getAllTasks,deleteTask,updateExistingTask } from "../services/task.service";

const taskForm = document.getElementById("taskForm")
const taskInput = document.getElementById("taskInput")
const tasklist  = document.getElementById("taskList")
const emptyState = document.getElementById("emptyState")

function createTaskElement(task){
    const li = document.createElement("li");
    li.className = "flex justify-between items-center p-3 bg-white rounded shadow hover:bg-gray-50"

    const titleSpan = document.createElement("span")
    titleSpan.className = "flex-1";
    titleSpan.textContent = task.title;


    const statusBadge = document.createElement("span");
    statusBadge.className = "px-2 py-1 rounded text-width"
}