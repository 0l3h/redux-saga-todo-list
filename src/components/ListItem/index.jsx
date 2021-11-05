import React from 'react';
import styles from './ListItem.module.sass';

function ListItem(props) {
    const {task, deleteTask} = props;

    return (
        <section className={styles.task}>
            <p className={styles.taskContent}>
                <b>{task.content}</b>
            </p>
            <button className={styles.doneButton} onClick={deleteTask}>done</button>
        </section>
    )
}

export default ListItem;