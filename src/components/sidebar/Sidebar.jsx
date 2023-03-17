import MenuList from 'components/Menu/Menu';
import userImg from '../../assets/images/mock-user-ava.svg';
import { InnerContainer,UserWrap,Logo } from './Sidebar.styled';

function Sidebar() {
  return (
    <aside>
      <Logo>Logo</Logo>
      <InnerContainer>
      <MenuList />

      <UserWrap>
        <img src={userImg} alt="userIcon" />
        <p>Bill Biden</p>
      </UserWrap>
      </InnerContainer>
    </aside>
  );
}

export default Sidebar;
