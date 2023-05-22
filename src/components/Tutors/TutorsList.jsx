import PT from 'prop-types';
import TutorItem from "./TutorItem";

const TutorList = ({ tutors, deleteTutor }) => {
    return (
        tutors.map((tutor) =>
            <TutorItem
                key={tutor.phone}
                {...tutor}
                deleteTutor={deleteTutor}
            // tutor={tutor}
            />
        )
    )
}

export default TutorList;

TutorList.propTypes = {
    tutors: PT.arrayOf(PT.shape({ phone: PT.string.isRequired })),
}