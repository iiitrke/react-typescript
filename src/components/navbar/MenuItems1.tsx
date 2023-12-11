import React, {
  ElementRef,
  MouseEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "./Dropdown";
import { MenuItem } from "./types";

interface MenuItemsProps {
  item?: any;
  key?: number;
  depthLevel: number;
}

const MenuItems = ({ item, depthLevel }: MenuItemsProps) => {
  const [dropdown, setDropdown] = useState(false);
  let ref = useRef<any>();
  useEffect(() => {
    const handler = (event: any) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
      }
      setDropdown(false);
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
      document.addEventListener("touchstart", handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    setDropdown(true);
  };

  const onMouseLeave = () => {
    setDropdown(false);
  };

  const toggleDropdown = () => {
    console.log("buuton ontoggle clicked");
    setDropdown((prev) => !prev);
  };

  const closeDropdown = () => {
    console.log("buuton ontoggle clicked");
    dropdown && setDropdown(false);
  };

  return (
    <>
      <li
        className="menu-items"
        ref={ref}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={closeDropdown}
      >
        {item.url && item.submenu ? (
          <>
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={dropdown ? "true" : "false"}
              onClick={() => toggleDropdown()}
            >
              <Link to={item.url}>{item.title}</Link>
              {depthLevel > 0 ? (
                <span>&raquo;</span>
              ) : (
                <span className="arrow" />
              )}
            </button>
            <Dropdown
              depthLevel={depthLevel}
              submenus={item.submenu}
              dropdown={dropdown}
            />
          </>
        ) : !item.url && item.submenu ? (
          <>
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={dropdown ? "true" : "false"}
            >
              {item.title}
              {depthLevel > 0 ? (
                <span>&raquo;</span>
              ) : (
                <span className="arrow" />
              )}
            </button>
            <Dropdown
              depthLevel={depthLevel}
              submenus={item.submenu}
              dropdown={dropdown}
            />
          </>
        ) : (
          <Link to={item.url}>{item.title}</Link>
        )}
      </li>
    </>
  );
};

export { MenuItems };
