import { RiArrowDropDownLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { AiOutlineUserAdd } from "react-icons/ai";
import { BsEmojiSmileFill } from "react-icons/bs";
import "./Random.css";
const Random = () => {
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const time = hour + ":" + minute;
  console.log(time);
  return (
    <div>
      <div className="random">
        <h1>
          # random <RiArrowDropDownLine />
        </h1>
        <div className="ricon">
          <CgProfile className="randomi" />
          <hr />
          <AiOutlineUserAdd className="randomi" />
        </div>
      </div>
      <hr />
      <p className="book">+ Add a bookmark</p>
      <hr />
      <div className="emoji">
        <BsEmojiSmileFill className="smile" />
        <div>
          <h2 className="text">You've found the #random channel </h2>
          <p className="text">
            This channel is for... well, everything else. It's a place for team
            jokes, spur-of-the-moment ideas, and funny GIFs. Go wild! Edit
            description
          </p>
        </div>
      </div>
      <div className="add">
        <AiOutlineUserAdd className="out" />
        <h3>Add people</h3>
      </div>
      <hr />
      <div className="user">
        <CgProfile className="randomi" />
        <div className="rando">
          <div className="time">
            <h1>User</h1>
            <h5 className="timed">{time}</h5>
          </div>

          <p className="joined">joined #random</p>
        </div>
      </div>
      <div className="chatMain rando">
        <input
          type={"text"}
          placeholder="Please Enter Your Name"
          className="chat"
          //   onChange={inputHandler}
          //   value={inputValue}
        />
        <button className="sendbtn">Send</button>
      </div>
    </div>
  );
};
export default Random;
