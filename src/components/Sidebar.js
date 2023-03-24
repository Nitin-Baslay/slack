import "./Sidebar.css";
import { CgProfile } from "react-icons/cg";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiEditCircleFill } from "react-icons/ri";
import { TbBuildingSkyscraper, TbRuler2 } from "react-icons/tb";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { BsPlusSquare } from "react-icons/bs";
import { FaHashtag } from "react-icons/fa";
import { FiHeadphones } from "react-icons/fi";
import { BsCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sliceAction } from "./Store/Slice";
import { IdsliceAction } from "./Store/Idslice";

const Sidebar = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState();
  const [edit, setEdit] = useState(false);
  const [editName, setEditName] = useState();
  const dispatch = useDispatch();
  const mainData = useSelector((state) => {
    return state.slice.finalData;
  });
  const editId = useSelector((state) => {
    return state.id.id;
  });
  // console.log(editId);
  const channelHandler = () => {
    setShow(true);
  };
  const changeHandler = (event) => {
    setName(event.target.value);
  };
  const createHandler = () => {
    setShow(false);
    if (name == "") {
      return;
    }
    {
      let obj = { name: name, id: Math.random() };
      dispatch(sliceAction.roomData(obj));
    }
  };
  const deleteHandler = (id) => {
    dispatch(sliceAction.deleteData(id));
  };
  const updateHandler = (id) => {
    dispatch(IdsliceAction.idHandler(id));
    // dispatch(sliceAction.updateData(id));
    setEdit(true);
  };
  const editHandler1 = (event) => {
    setEditName(event.target.value);
    // setEdit(false);
  };
  const editHandler2 = () => {
    setEdit(false);
    dispatch(sliceAction.updateData({ editId: editId, name: editName }));
  };
  // console.log(mainData);

  return (
    <div>
      <aside>
        <div className="one">
          <h1>
            slack
            <RiArrowDropDownLine className="icon" />
          </h1>
          <RiEditCircleFill className="icon big" />
        </div>
        <hr />
        <div className="two">
          <p>
            <TbBuildingSkyscraper className="icon" />
            Slack Connect
          </p>
          <p>
            <BsThreeDotsVertical className="icon" />
            Browse Slack
          </p>
        </div>
        <hr />
        <div className="three">
          <p>
            <MdOutlineArrowDropDown className="icon" />
            Channels
          </p>
          <Link to={"/main"}>
            <p className="route">
              <FaHashtag className="icon" />
              general
            </p>
          </Link>
          <Link to={"/random"}>
            <p className="route">
              <FaHashtag className="icon" />
              random
            </p>
          </Link>
          <Link to={"/slack"}>
            <p className="route">
              <FaHashtag className="icon" />
              slack-clone
            </p>
          </Link>
          {/* <p>Hello</p> */}

          <div className="addchannel">
            {edit ? (
              <div>
                <input
                  type={"text"}
                  className="editInput"
                  onChange={editHandler1}
                />
                <button
                  className="edit2"
                  onClick={() => {
                    editHandler2();
                  }}
                >
                  Edit
                </button>
              </div>
            ) : (
              <div>
                {mainData.map((ele) => {
                  return (
                    <div className="finalize">
                      <p className="route">
                        <FaHashtag className="icon" />
                        {ele.name}
                      </p>
                      <button
                        className="deletedIn"
                        onClick={() => {
                          updateHandler(ele.id);
                        }}
                      >
                        Update
                      </button>
                      <button
                        className="deletedIn"
                        onClick={() => {
                          deleteHandler(ele.id);
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          {/* {edit ? (
            <input
              type={"text"}
              className="editInput"
              onChange={editHandler2}
            />
          ) : (
            ""
          )} */}
          {show ? (
            <div>
              <input
                type={"text"}
                className="channelinput"
                onChange={changeHandler}
              />
              <button onClick={createHandler} className="create">
                Create
              </button>
            </div>
          ) : (
            <button onClick={channelHandler} className="channel">
              <BsPlusSquare className="icon" />
              Add channels
            </button>
          )}
          <p>
            {" "}
            <MdOutlineArrowDropDown className="icon" />
            Direct Messages
          </p>
          <p>
            <CgProfile className="icon" />
            slack you
          </p>
          <p>
            <BsPlusSquare className="icon" />
            Add coworkers
          </p>
        </div>
        <div className="auto">
          <hr />
          <div className="four">
            <p>
              slack-clone <RiArrowDropDownLine />{" "}
            </p>
            <div className="iconlast">
              {" "}
              <BsCircleFill />
              <FiHeadphones className="iconhead" />
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};
export default Sidebar;
