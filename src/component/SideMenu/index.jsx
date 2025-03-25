import MenuList from "./menuList";
import "./style.css";

function SideMenu({ menuList = [] }) {
  return (
    <div className="sideMenu-container">
      <MenuList menu={menuList}></MenuList>
    </div>
  );
}

export default SideMenu;
