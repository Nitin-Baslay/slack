import "./Navbar.css";
import { BsClockHistory } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { CiCircleList } from "react-icons/ci";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  let navigate = useNavigate();
  const clickHandler = () => {
    navigate("/");
    console.log("Hello");
  };
  return (
    <div className="navmain">
      <header className="top">
        <div className="topone">
          <BsClockHistory className="icon" />
          <div className="searchbar">
            <input
              type={"text"}
              className="inputfield"
              placeholder="Search slack"
            />
            <div className="iconMulti">
              <CiSearch className="icon one" />
              <CiCircleList className="icon two" />
            </div>
          </div>
        </div>
        <div className="toptwo">
          <AiOutlineQuestionCircle className="icon three" />
          <CgProfile className="icon four" onClick={clickHandler} />
        </div>
      </header>
    </div>
  );
};
export default Navbar;
