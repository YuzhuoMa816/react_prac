import MenuItem from "./menuItem";
import "./style.css";
function MenuList({ menu = [] }) {
  return (
    <ul>
      {menu && menu.length > 0
        ? menu.map((menuItem) => <MenuItem item={menuItem}></MenuItem>)
        : null}
    </ul>
  );
}

export default MenuList;
