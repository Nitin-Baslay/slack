import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Random from "./components/Random";
import Slack from "./components/Slack";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Login />
            </>
          }
        ></Route>
        <Route
          path="/signup"
          element={
            <>
              <Header />
              <Signup />
            </>
          }
        ></Route>
        <Route
          path="/home"
          element={
            <>
              {" "}
              <Navbar />
              <Sidebar />
              <Home />
            </>
          }
        ></Route>
        <Route
          path="/main"
          element={
            <>
              {" "}
              <Navbar />
              <Sidebar />
              <Home />
            </>
          }
        ></Route>
        <Route
          path="/random"
          element={
            <>
              {" "}
              <Navbar />
              <Sidebar />
              <Random />
            </>
          }
        ></Route>
        <Route
          path="/slack"
          element={
            <>
              <Navbar />
              <Sidebar />
              <Slack />
            </>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
