import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import { Button } from 'components';


const InfoForm = ({ placeholder, title, addNewValue}) => {
    const initialValues = {
        name: ''
    }
    const validationSchema = object().shape({
        name: string().required()
    })
    const handleSubmitForm = (values, { resetForm }) => {
        console.log(values);
        addNewValue(values.name);
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
                    <Button type="submit" text={'Добавить'} />
                </Form>
            )
            }

        </Formik>
    )
}


export default InfoForm