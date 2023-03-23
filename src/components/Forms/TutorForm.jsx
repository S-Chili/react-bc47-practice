import { Formik, Form, ErrorMessage } from 'formik';
import { Button } from 'components';
import { FieldStyled, Error } from './TutorForm.styled'; 
import { object, string } from 'yup'; 

const fieldsData = [
  {
    name: 'lastName',
    lable: 'Фамилия*',
  },
  {
    name: 'firstName',
    lable: 'Имя*',
  },
  {
    name: 'patronymic',
    lable: 'Отчество*',
  },
  {
    name: 'phone',
    lable: 'Телефон*',
  },
  {
    name: 'email',
    lable: 'email*',
  },
  {
    name: 'city',
    lable: 'Город*',
  }
];

const validationSchema = object().shape({
  lastName: string().required('Please put the data'),
  firstName: string()
    .min(2, 'This field should have min 2 letters')
    .max(9, 'Max length is 9 symbols')
    .required(),
  patronymic: string().required('Please put the data'),
  phone: string().required('Please put the data'),
  email: string().required('Please put the data'),
  city: string().required('Please put the data'),
});

const TutorForm = ({addTutor}) => {
    const initialValue = {
        lastName: '',
        firstName: 'red',
        patronymic: '',
        phone: '',
        email: '',
        city: '',
    };
    
    const handleSubmitForm = (values, {resetForm}) => {
        console.log(values);
        addTutor(values);
        resetForm();
    }
  return (
      <Formik initialValues={initialValue} onSubmit={handleSubmitForm} validationSchema={validationSchema}>
          {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
          }) => (
              <Form>
                  <h3>Добавление преподавателя</h3>
                  {fieldsData.map(({name, lable}) => {
                      return (
                        <div key={name}>
                          <FieldStyled
                            type="text"
                            name={name}
                            id={name}
                            placeholder={lable}
                            value={values[name] || ''}
                            onBlur={handleBlur}
                            onChange={handleChange}
                              />
                              <Error component='div' name={name}/>
                        </div>
                      );
                  })}

                  <Button type="submit" text={'Пригласить'} />
              </Form>
          )}
    </Formik>
  );
};

export default TutorForm;