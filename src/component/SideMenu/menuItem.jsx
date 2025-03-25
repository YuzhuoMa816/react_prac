import MenuList from "./menuList";
import { useState, useEffect } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function MenuItem({ item }) {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  function handleToggleClick(currentLabel) {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [currentLabel]: !displayCurrentChildren[currentLabel],
    });
  }

  console.log("displayCurrentChildren: ", displayCurrentChildren);
  return (
    <li>
      <div className="menu-item">
        <p>{item.label}</p>
        {item && item.children && item.children.length > 0 ? (
          <span onClick={() => handleToggleClick(item.label)}>
            {displayCurrentChildren[item.label] ? (
              <FaMinus color="#fff" size={25}>
                -
              </FaMinus>
            ) : (
              <FaPlus color="#fff" size={25}>
                +
              </FaPlus>
            )}
          </span>
        ) : null}
      </div>

      {item &&
      item.children &&
      item.children.length > 0 &&
      displayCurrentChildren[item.label] ? (
        <MenuList menu={item.children}></MenuList>
      ) : null}
    </li>
  );
}
