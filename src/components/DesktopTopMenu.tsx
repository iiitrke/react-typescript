import { Link } from "react-router-dom";
import './DesktopTopMenu.css';

const DesktopTopMen = () => {
  return (
    <>
      <div >
        <ul id="menuItems">
          <li> 
            <Link to="/">Home </Link>
          </li>
          <li>
            {" "}
            <Link to="/books">Books </Link>
          </li>
        </ul>
      </div>
      ß
    </>
  );
};

export default DesktopTopMen;
