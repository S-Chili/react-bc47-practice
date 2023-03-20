import PT from 'prop-types';
import { Paper } from 'components';
import { Container, ColumnItem } from './TutorItem.styled';

const TutorItem = ({
  firstName,
  lastName,
  patronymic,
  phone,
  email,
  city,
  options,
}) => {
  return (
    <Paper>
      <Container>
        <ColumnItem>
          <span>{lastName}</span>
          <span>{firstName}</span>
          <span>{patronymic}</span>
        </ColumnItem>
        <ColumnItem>
          <span>{phone}</span>
          <span>{email}</span>
          <span>{city}</span>
        </ColumnItem>
        <ColumnItem>
          <p>{options}</p>
        </ColumnItem>
      </Container>
    </Paper>
  );
};

export default TutorItem;

TutorItem.propTypes = {
    firstName: PT.string.isRequired,
    lastName: PT.string.isRequired,
    patronymic: PT.string.isRequired,
    phone: PT.string.isRequired,
    email: PT.string.isRequired,
    city: PT.string.isRequired,
    options: PT.string,
}