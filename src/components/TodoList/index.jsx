import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ListItem from '../ListItem';
import { deleteTaskAction, getTasksAction } from '../../actions/actionCreators';

function TodoList() {
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.tasks);

    const getTasks = () => {
        dispatch(getTasksAction());
    }

    useEffect(() => {
        getTasks();
    }, [tasks.length]);

    return (
        <div>
            {tasks.length}
            {tasks.map((task, index) => {
                const deleteTask = () => {
                    dispatch(deleteTaskAction(task.id));
                }

                return <ListItem key={index} task={task} deleteTask={deleteTask}/>
            })}
        </div>
    )
}

export default TodoList;