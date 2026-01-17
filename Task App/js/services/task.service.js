import { getItem, setItem, STORAGE_KEYS } from "../core/storage";
import { createTask,updateTask } from "../models/task.model";

export function getAllTasks(){
    return getItem(STORAGE_KEYS.TASKS) || [];
}

export function addTask(taskData){
    const task = createTask(taskData);
    const tasks = getAllTasks();
    task.push(task);

    setItem(STORAGE_KEYS.TASKS,tasks);
    return task;
}

export function updateExistingTask(taskId, updateds){
    const tasks = getAllTasks();
    const index = tasks.findIndex(t => t.id === taskId);

    if (index === -1) throw new Error ("task not found");

    tasks[index] = updateTask(tasks[index],updateds);

    setItem(STORAGE_KEYS.TASKS,tasks);
    return tasks[index];
}

export function deleteTask(status){
    let tasks = getAllTasks();
    tasks = task.filter(t => t.id === taskId);
    setItem(STORAGE_KEYS.TASKS,tasks);

}

export function getTaskByStatus(status){
    const tasks = getAllTasks();
    return tasks.filter(t=> t.status ===  status);
}