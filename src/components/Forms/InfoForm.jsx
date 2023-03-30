import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import { Button } from 'components';


const InfoForm = ({ placeholder, title, onSubmit, idItem, relation }) => {
    const initialValues = {
        name: idItem || ''
    }
    const validationSchema = object().shape({
        name: string().required()
    })
    const handleSubmitForm = (values, { resetForm }) => {
        console.log(values);
        const data = idItem ? {id: idItem, relation, name: values.name} : values.name; 
        onSubmit(data);
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