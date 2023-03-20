import PT from 'prop-types';
import { Paper } from 'components';
import UniversityIcon from '../../assets/images/mock-university.svg';
import EditBtnIcon from '../../assets/images/edit.svg';
import DeleteBtnIcon from '../../assets/images/delete.svg';

import {
  ImgStyled,
  CardName,
  UniversityName,
  Btn,
  Controls,
} from './UniversityCard.styled';
import css from './UniversityCard.module.css';

const UniversityCard = ({ name, onEdit, onDelete }) => {
  return (
    <Paper styles={css.container}>
      <ImgStyled src={UniversityIcon} alt="mit" />
      <CardName>University</CardName>
      <UniversityName>{name}</UniversityName>
      <Controls>
        <Btn type="button" onClick={onEdit}>
          <img src={EditBtnIcon} alt="editBtn" />
        </Btn>
        <Btn type="button" onClick={() => onDelete()}>
          <img src={DeleteBtnIcon} alt="deleteBtn" />
        </Btn>
      </Controls>
    </Paper>
  );
};
export default UniversityCard;

UniversityCard.propTypes = {
  name: PT.string.isRequired, 
  onEdit: PT.func.isRequired, 
  onDelete: PT.func.isRequired,
}