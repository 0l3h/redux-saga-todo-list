import {put} from 'redux-saga/effects';
import {
    getTasksRequest,
    getTasksSuccess,
    getTasksError,
    createTaskRequest, 
    createTaskSuccess, 
    createTaskError,
    deleteTaskRequest,
    deleteTaskSuccess,
    deleteTaskError
} from './../actions/actionCreators';
import * as API from './../api';

export function * getTasksSaga() {
    yield put(getTasksRequest());

    try {
        const {data: tasks} = yield API.getTasks();
        yield put(getTasksSuccess(tasks));
    } catch (error) {
        yield put(getTasksError(error));
    }
}

export function * createTaskSaga(action) {
    const {task} = action;    

    yield put(createTaskRequest());

    try {
        const {data: newTask} = yield API.createTask(task);
        yield put(createTaskSuccess(newTask));
    } catch (error) {
        yield put(createTaskError(error));
    }
}

export function * deleteTaskSaga(action) {
    const {id} = action;

    yield put(deleteTaskRequest());

    try {
        const {data: deletedTask} = yield API.deleteTask(id);
        yield put(deleteTaskSuccess(deletedTask));
    } catch (error) {
        yield put(deleteTaskError(error));
    }
}