const tasks = [
    {
        id: Date.now(),
        body: 'Some stuff to do',
    }
];

export const getTasks = () => {
    return Promise.resolve({data: [...tasks]});
};

export const createTask = (task) => {
    const newTask = {...task, id: Date.now()};
    tasks.push(newTask);
    return Promise.resolve({data: newTask});
};

export const deleteTask = (id) => {
    const index = tasks.findIndex(task => task.id === id)
    return Promise.resolve({data: tasks.splice(index, 1)[0]});
}