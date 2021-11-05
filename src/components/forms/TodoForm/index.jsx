import React from 'react'
import { Formik, Form, Field, ErrorMessage} from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import { createTaskAction } from '../../../actions/actionCreators';
import styles from './TodoForm.module.sass';
import validationSchema from '../../../utils/validationSchemas';

function TodoForm() {
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.tasks);

    const initialValues = {
        body: '',
    }

    const submitHandler = (values, formikBag) => {
        dispatch(createTaskAction(values));
        formikBag.resetForm();
    }

    const calculateInputStyles = (errors, touched) => 
        classNames(styles.input,
        {
            [styles.inputValid]: touched.body && !errors.body,
            [styles.inputInvalid]: touched.body && errors.body,
        });

    return (
        <>
            {tasks.length}
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={submitHandler}>
            {({errors, touched}) => 
                <Form className={styles.todoForm}>
                    <Field name='body' placeholder='Type in your task' className={calculateInputStyles(errors, touched)}/>
                    <button type='submit' className={styles.submitButton}>Create</button>
                    <ErrorMessage name='body' component='div' className={styles.errorMessage}/>
                </Form>
            }
            </Formik>
        </>
    )
}

export default TodoForm;