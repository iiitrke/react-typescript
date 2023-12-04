import { Link } from "react-router-dom";
import './DesktopTopMenu.css';
import {FaHome, FaBook} from 'react-icons/fa';
import { useAppContext } from "../Context";

const DesktopTopMen = () => {

const width:number =useAppContext().innerWidth;

if(width >= 700)
{
  return (
    <>
   
      <div >
        <ul id="menuItems">
          <li> 

            <Link to="/"> <div className="icon-archive"><FaHome /></div> <div className="text">Home</div> </Link>
          </li>
          <li>
            {" "}
            <Link to="/books" >  <div className="icon-archive"><FaBook /></div> <div className="text">Books</div>  </Link>
          </li>
        </ul>
      </div>
    
    </>
  );
} else {
  return (
    <>
    </>
  );
}
};

export default DesktopTopMen;
