/* eslint-disable */

import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [postTitle, changePostTitle] = useState([
    "임계점을 넘는 방법",
    "영어독해의 열쇠",
    "꾸준히 하는 것의 무서움",
  ]);
  const [likes, changeLikes] = useState(0);

  return (
    <div className="App">
      <nav className="header-nav">
        <div className="header-title">
          <h4>My Blog</h4>
        </div>
      </nav>
      <ul className="list">
        <li className="post">
          <h4 className="post-title">
            {postTitle[0]}{" "}
            <span
              onClick={() => {
                changeLikes(likes + 1);
              }}>
              👍
            </span>{" "}
            {likes}
          </h4>
          <p className="post-date">2월 17일 발행</p>
          <hr></hr>
        </li>
        <li className="post">
          <h4 className="post-title">{postTitle[1]}</h4>
          <p className="post-date">2월 12일 발행</p>
          <hr></hr>
        </li>
        <li className="post">
          <h4 className="post-title">{postTitle[2]}</h4>
          <p className="post-date">2월 08일 발행</p>
          <hr></hr>
        </li>
      </ul>
    </div>
  );
}

export default App;
