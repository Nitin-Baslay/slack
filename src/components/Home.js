import axios from "axios";
import { useEffect, useState } from "react";
import "./Home.css";

const Home = () => {
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
    };
    axios
      .post("https://slack-c8f5d-default-rtdb.firebaseio.com/name.json", obj)
      .then(() => {
        getData();
      });
    setInputValue("");
  };
  const deleteHandler = (key) => {
    axios
      .delete(
        `https://slack-c8f5d-default-rtdb.firebaseio.com/name/${key}.json`
      )
      .then(() => {
        getData();
      });
  };
  const getData = () => {
    axios
      .get("https://slack-c8f5d-default-rtdb.firebaseio.com/name.json")
      .then((response) => {
        const finalData = [];
        for (let key in response.data) {
          const obj = {
            final: response.data[key].input,
            name: response.data[key].name,
            key: key,
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
      <nav>
        <h1>
          Welcome to <span style={{ color: "red" }}>S</span>
          <span style={{ color: "green" }}>L</span>
          <span style={{ color: "blue" }}>A</span>
          <span style={{ color: "yellow" }}>C</span>
          <span style={{ color: "pink" }}>K</span> Chat Portal # general
        </h1>
      </nav>
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
      <div className="hello">
        {data.map((ele) => {
          return (
            <div className="containerMaster" key={ele.key}>
              <div className="container">
                <h5 className="user">{ele.name}</h5>
                <h6 className="data">{ele.final}</h6>
                <div className="del">
                  <button
                    className="delete"
                    onClick={() => {
                      deleteHandler(ele.key);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Home;
