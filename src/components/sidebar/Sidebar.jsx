import MenuList from 'components/Menu/Menu';
import { InnerContainer,UserWrap,Logo } from './Sidebar.styled';
import { FaUserCircle } from 'react-icons/fa'

function Sidebar() {
  return (
    <aside>
      <Logo>Logo</Logo>
      <InnerContainer>
      <MenuList />

      <UserWrap>
        <FaUserCircle color={'#FF6B0A'} size={25}/>
        <p>Bill Biden</p>
      </UserWrap>
      </InnerContainer>
    </aside>
  );
}

export default Sidebar;
