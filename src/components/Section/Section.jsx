import CN from 'classnames'
import PropTypes from 'prop-types'
import { SectionWrapper } from './Section.styled'

const Section = ({ title, children, image, isRightPosition, isRow }) =>{

    return (
        <SectionWrapper isRow={isRow}>
            <h2 className={CN('title', {titleRight: isRightPosition})}>
                {image && <img src={image} alt={title}/>}
                {title}
            </h2>
            <div className='sectionRow'>
                {children}
            </div>
        </SectionWrapper>
    )
}
export default Section;
Section.propTypes = {
    title: PropTypes.string, 
    children: PropTypes.node, 
    image: PropTypes.string, 
    isRightPosition: PropTypes.bool, 
    isRow: PropTypes.bool,
}
