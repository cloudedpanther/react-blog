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
  const [likes, changeLikes] = useState([0, 0, 0]);
  const [modal, changeModal] = useState(false);
  const [modalNumber, changeModalNumber] = useState(0);
  const [inputValue, changeInputValue] = useState("");

  const addLikes = (index) => {
    let newLikes = [...likes];
    newLikes[index]++;
    changeLikes(newLikes);
  };

  const sortPosts = () => {
    changePostTitle([...postTitle].sort());
  };

  const toggleModal = () => {
    changeModal(!modal);
  };

  return (
    <div className="App">
      <nav className="header-nav">
        <div className="header-title">
          <h4>My Blog</h4>
        </div>
      </nav>

      <button onClick={sortPosts}>정렬</button>

      <ul className="list">
        {/* or you can use for loop inside a function */}
        {/* but not forEach loop itself*/}
        {/* because it has no return value  */}
        {postTitle.map((title, index) => {
          return (
            <li className="post" key={index}>
              <h4
                className="post-title"
                onClick={() => changeModalNumber(index)}>
                {title} <span onClick={() => addLikes(index)}>👍</span>{" "}
                {likes[index]}
              </h4>
              <p className="post-date">2월 17일 발행</p>
              <hr></hr>
            </li>
          );
        })}
      </ul>

      {/* <input onChange={(e) => changeInputValue(e.target.value)} /> */}

      <button onClick={toggleModal}>버튼</button>

      {modal ? (
        <Modal postTitle={postTitle} modalNumber={modalNumber}></Modal>
      ) : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h2>{props.postTitle[props.modalNumber]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
