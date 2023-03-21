import PT from 'prop-types';
import { Paper } from "components";
import  TutorItem  from "./TutorItem";

const TutorList = ({tutors}) => {
    return(
        tutors.map((tutor) => 
                <TutorItem
                key={tutor.phone}
                {...tutor}
                // tutor={tutor}
                />                   
        )
    )
}

export default TutorList;

TutorList.propTypes = {
    tutors: PT.arrayOf(PT.shape({phone: PT.string.isRequired})),
}