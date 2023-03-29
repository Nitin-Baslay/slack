import { RiArrowDropDownLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { AiOutlineUserAdd } from "react-icons/ai";
import { BsEmojiSmileFill } from "react-icons/bs";
import "./Random.css";
import { useState, useEffect } from "react";
import axios from "axios";
const Random = () => {
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const time = hour + ":" + minute;
  const day = date.toLocaleString("default", { day: "2-digit" });
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.toLocaleString("default", { year: "numeric" });
  console.log(year);
  const [input, setInput] = useState();
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]);

  const inputHandler = (event) => {
    setInput(event.target.value);
    setInputValue(event.target.value);
  };

  const sendHandler = () => {
    const obj = {
      input: input,
      name: localStorage.getItem("name"),
      times: time,
    };
    axios
      .post("https://slack-c8f5d-default-rtdb.firebaseio.com/random.json", obj)
      .then(() => {
        getData();
      });
    setInputValue("");
  };
  const deleteHandler = (key) => {
    axios
      .delete(
        `https://slack-c8f5d-default-rtdb.firebaseio.com/random/${key}.json`
      )
      .then(() => {
        getData();
      });
  };
  const getData = () => {
    axios
      .get("https://slack-c8f5d-default-rtdb.firebaseio.com/random.json")
      .then((response) => {
        const finalData = [];
        for (let key in response.data) {
          const obj = {
            final: response.data[key].input,
            name: response.data[key].name,
            key: key,
            time: response.data[key].times,
          };
          finalData.push(obj);
        }
        setData(finalData);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="homediv">
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
      <div className="chatMain">
        <input
          type={"text"}
          placeholder="Please Enter Your Name"
          className="chat"
          onChange={inputHandler}
          value={inputValue}
        />
        <button className="sendbtn" onClick={sendHandler}>
          Send
        </button>
      </div>
      <div className="randomContainer">
        <div className="emoji">
          <BsEmojiSmileFill className="smile" />
          <div>
            <h2 className="text">You've found the #random channel </h2>
            <p className="text">
              This channel is for... well, everything else. It's a place for
              team jokes, spur-of-the-moment ideas, and funny GIFs. Go wild!
              Edit description
            </p>
          </div>
        </div>
        <div className="add">
          <AiOutlineUserAdd className="out" />
          <h3>Add people</h3>
        </div>
        <span>
          <div className="date">
            <h4>{month}</h4>
            <h4>{day},</h4>
            <h4>{year}</h4>
          </div>

          <hr />
        </span>
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
        <div className="renderdata">
          {data.map((ele) => {
            return (
              <div key={ele.key}>
                <div className="randomtopp">
                  <h4>{ele.name}</h4>
                  <h6>{ele.time} hrs</h6>
                </div>

                <div className="randomData">
                  <h6 className="user">{ele.final}</h6>
                  <div>
                    <button
                      className="randomdelete"
                      onClick={() => {
                        deleteHandler(ele.key);
                      }}
                    >
                      <img
                        src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                        alt="del"
                        className="delicon"
                      />{" "}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Random;
