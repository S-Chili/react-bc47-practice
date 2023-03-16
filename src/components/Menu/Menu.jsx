import { menuConfig } from 'constants/menu';
import MenuItem from './MenuItem';

function MenuList() {
  return (
    <nav>
      <ul>
        {menuConfig.map(({ name, link, img }) => (
          <MenuItem key={name} title={name} link={link} image={img}/>
        ))}
      </ul>
    </nav>
  );
}

export default MenuList;
