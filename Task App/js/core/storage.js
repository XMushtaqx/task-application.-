const STORAGE_KEYS = {
    USER: "task_app_user",
    TASKS: "task_app_tasks"
};

export function getItem(key){
    const data = localStorage.getItem(key);
    return data? JSON.parse(data): null;
};
export function setItem(key, value){
    localStorage.setItem(key, JSON.stringify(value));

};

export function removeItem(key){
    localStorage.removeItem(key);

};
export function clearAll(){
    localStorage.clear();
}

export { STORAGE_KEYS};