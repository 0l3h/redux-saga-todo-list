import React from 'react';
import PropTypes from 'prop-types';
import styles from './ListItem.module.sass';

function ListItem(props) {
    const {task, deleteTask} = props;

    return (
        <section className={styles.task}>
            <p className={styles.taskContent}>
                <b>{task.body}</b>
            </p>
            <button className={styles.doneButton} onClick={deleteTask}>done</button>
        </section>
    )
}

ListItem.propTypes = {
    task: PropTypes.shape({
        body: PropTypes.string.isRequired,
    }),
    deleteTask: PropTypes.func.isRequired,
}

export default ListItem;