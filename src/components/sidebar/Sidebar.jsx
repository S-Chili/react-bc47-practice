import MenuList from 'components/Menu/Menu';
import userImg from '../../assets/images/mock-user-ava.svg';

function Sidebar() {
  return (
    <aside>
      <div>Logo</div>
      <MenuList />

      <div>
        <img src={userImg} alt="userIcon" />
        <p>Bill Biden</p>
      </div>
    </aside>
  );
}

export default Sidebar;
