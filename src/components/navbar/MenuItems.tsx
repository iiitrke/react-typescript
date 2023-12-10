import React, {
  ElementRef,
  MouseEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import { MenuItem } from "./types";

interface MenuItemsProps {
  items?: any;
  key?: number;
  depthLevel: number;
}

const MenuItems = ({ items, depthLevel }: MenuItemsProps) => {
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
    setDropdown((prev) => !prev);
  };

  const closeDropdown = () => {
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
        {items.url && items.submenu ? (
          <>
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={dropdown ? "true" : "false"}
              onClick={() => toggleDropdown()}
            >
              <Link to={items.url}>{items.title}</Link>
              {depthLevel > 0 ? (
                <span>&raquo;</span>
              ) : (
                <span className="arrow" />
              )}
            </button>
            <Dropdown
              depthLevel={depthLevel}
              submenus={items.submenu}
              dropdown={dropdown}
            />
          </>
        ) : !items.url && items.submenu ? (
          <>
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={dropdown ? "true" : "false"}
            >
              {items.title}
              {depthLevel > 0 ? (
                <span>&raquo;</span>
              ) : (
                <span className="arrow" />
              )}
            </button>
            <Dropdown
              depthLevel={depthLevel}
              submenus={items.submenu}
              dropdown={dropdown}
            />
          </>
        ) : (
          <Link to={items.url}>{items.title}</Link>
        )}
      </li>
    </>
  );
};

export { MenuItems };
