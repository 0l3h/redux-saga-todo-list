import React from 'react'
import { Formik, Form, Field, ErrorMessage} from 'formik';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';
import { createTaskAction } from '../../../actions/actionCreators';
import styles from './TodoForm.module.sass';
import validationSchema from '../../../utils/validationSchemas';

function TodoForm() {
    const dispatch = useDispatch();

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
            [styles.inputValid]: touched.content && !errors.content,
            [styles.inputInvalid]: touched.content && errors.content,
        });

    return (
        
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={submitHandler}>
            {({errors, touched}) => 
                <Form className={styles.todoForm}>
                    <Field name='content' placeholder='Type in your task' className={calculateInputStyles(errors, touched)}/>
                    <button type='submit' className={styles.submitButton}>Create</button>
                    <ErrorMessage name='content' component='div' className={styles.errorMessage}/>
                </Form>
            }
        </Formik>
    )
}

export default TodoForm;