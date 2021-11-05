import ACTION_TYPES from "../actions/actionTypes";

const initialState = {
    tasks: [],
    isFetching: false,
    error: null,
}

const todoReducer = (state = initialState, action) => {
    const {type} = action;

    switch (type) {
        // ------------------ GET ---------------------

        case ACTION_TYPES.GET_TASKS_REQUEST: {
            return {...state, isFetching: true, error: null};
        }

        case ACTION_TYPES.GET_TASKS_SUCCESS: {
            const {tasks} = action;

            return {...state, isFetching: false, tasks: tasks};
        }

        case ACTION_TYPES.GET_TASKS_ERROR: {
            const {error} = action;

            return {...state, isFetching: false, error: error}
        }

        // ------------------ CREATE ---------------------

        case ACTION_TYPES.CREATE_TASK_REQUEST: {
            return {...state, isFetching: true, error: null};
        }

        case ACTION_TYPES.CREATE_TASK_SUCCESS: {
            const {tasks} = state;
            const {task} = action;
            console.log(tasks);
            return {
                ...state, 
                tasks: [...tasks, {id: Date.now(), ...task}],
                isFetching: false,
            };
        }

        case ACTION_TYPES.CREATE_TASK_ERROR: {
            const {error} = action;

            return {...state, isFetching: false, error: error}
        }

        // ------------------ DELETE ---------------------

        case ACTION_TYPES.DELETE_TASK_REQUEST: {
            return {...state, isFetching: true, error: null};
        }

        case ACTION_TYPES.DELETE_TASK_SUCCESS: {
            const {deletedTask} = action;
            const {tasks} = state;
            const newTasks = [...tasks];
            console.log(`newTasks`, newTasks)

            newTasks.splice(newTasks.findIndex(task => task.id === deletedTask.id), 1);

            return {
                ...state,
                tasks: newTasks,
                isFetching: false,
            };
        }

        case ACTION_TYPES.DELETE_TASK_ERROR: {
            const {error} = action;

            return {...state, isFetching: false, error: error};
        }

        default:
            return state;
    }
}


export default todoReducer;