import { Item,Link } from "./MenuItem.styled";

function MenuItem({title, link, image}){
    return(
        <Item>
            <Link href={link}>
              <img src={image} alt={title} />
              {title}
            </Link>
        </Item>
    )
}

export default MenuItem;
