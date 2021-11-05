import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ListItem from '../ListItem';
import { deleteTaskAction, getTasksAction } from '../../actions/actionCreators';

function TodoList() {
    const dispatch = useDispatch();
    const {tasks, isFetching} = useSelector(state => state);

    const getTasks = () => {
        dispatch(getTasksAction());
    }

    useEffect(() => {
        getTasks();
    }, []);

    return (
        <div>
            {isFetching? 
            <h2>loading...</h2>
            : 
            tasks.map((task, index) => {
                const deleteTask = () => {
                    dispatch(deleteTaskAction(task.id));
                }

                return <ListItem key={index} task={task} deleteTask={deleteTask}/>
            })}
        </div>
    )
}

export default TodoList;