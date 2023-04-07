import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import { Button } from 'components';
import { useDispatch } from 'react-redux'


const InfoForm = ({ placeholder, title, onSubmit, idItem, textItem, relation, toggleModal }) => {
    const dispatch = useDispatch();

    const initialValues = {
        name: textItem || ''
    }
    const validationSchema = object().shape({
        name: string().required()
    })
    const handleSubmitForm = (values, { resetForm }) => {

        const data = idItem ? { id: idItem, relation, name: values.name } : values.name;

        dispatch(onSubmit(data))
        toggleModal()
        resetForm();

    }
    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmitForm} validationSchema={validationSchema}>

            {({
                values,
                handleChange,
                handleBlur
            }) => (
                <Form>
                    <h3>{title}</h3>
                    <Field
                        type="text"
                        name="name"
                        id={placeholder}
                        placeholder={placeholder}
                        value={values.name || ''}
                        onBlur={handleBlur}
                        onChange={handleChange}


                    />
                    <ErrorMessage component='div' name="name" />
                    <Button type="submit" text={idItem ? 'Сохранить' : 'Добавить'} />
                </Form>
            )
            }

        </Formik>
    )
}


export default InfoForm