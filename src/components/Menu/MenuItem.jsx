import PT from 'prop-types';
import { Item,Link } from "./MenuItem.styled";

function MenuItem({title, link, image}){
    return(
        <Item>
            <Link href={link}>
              {image}
              {title}
            </Link>
        </Item>
    )
}

export default MenuItem;

MenuItem.propTypes = {
    title: PT.string.isRequired,
    link: PT.string.isRequired,
    image: PT.object,
}