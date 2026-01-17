export function createTask({title,description = "", status = "todo"}){
    if(!title || title.trim().length === 0){
        throw new Error ("Task title can not be empty");

    }
    return {
        id: crypto.randomUUID(),
        title: title.trim(),
        description: description.trim(),
        status,
        createdAt: Date.now(),
        updatedAt: Date.now()
    };
}

export function updateTask(task,updateds){

    return {
        ...task,
        ...updateds,
        updatedAt: Date.now()
    };

}