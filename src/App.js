import React, { useState } from "react"
import './App.css';
// import User from "./component/User"
// import Button from "./component/Button"


const App = () => {
  const [todo, setTodo] = useState([
    { id: 0, title: "리액트 공부하기", body: "리액트 기초를 공부해봅시다.", isDone: false },
    { id: 1, title: "리액트 공부하기", body: "리액트 기초를 공부해봅시다.", isDone: true }
  ]);

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [isDone, setIsDone] = useState('');

  const titleChageHandler = (event) => {
    setTitle(event.target.value);
  }

  const bodyChangeHandler = (event) => {
    setBody(event.target.value);
  }

  //추가 버튼 클릭
  const clickAddButtonHandler = () => {
    const newTodo = {
      id: todo.length + 1,
      title: title,
      body: body,
      isDone: false,
    }
    if (title === '' && body === '') alert('내용을 추가해주세요')
    else setTodo([...todo, newTodo])
  };

  //할일 삭제 버튼 클릭
  const clickRemoveHandler = (id) => {
    const delTodo = todo.filter((todo) => todo.id !== id);
    setTodo([...delTodo]);
  }

  // 완료 버튼 클릭
  const completeHandler = (id) => {
    const setDoneTodo = todo.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    );
    setTodo(setDoneTodo);
  };

  // 취소 버튼 클릭
  const cancleHandler = (id) => {
    const setDoneTodo = todo.map((todo) =>
      todo.id === id ? { ...todo, isDone: false } : todo
    );
    setTodo(setDoneTodo);
  }

  return (
    <div className="layout">
      <div className="container">
        <div>🤍&nbsp;My Todo List&nbsp;🤍</div>
        <div>React</div>
      </div>
      <div className="listAdd">
        <div className="input-group">
          <label className="list">제목</label>
          <input value={title} onChange={titleChageHandler} />
          <label className="body">내용</label>
          <input value={body} onChange={bodyChangeHandler} />
        </div>
        <button className="add-button" onClick={clickAddButtonHandler}>추가하기</button>

      </div>

      <div className="lists">
        <div className="list1">
          <span>
            Working.. 🔥
          </span>
          <div className="listWrapper">
            <div className="listContainer">
              {todo
                .filter((todo) => todo.isDone === false)
                .map((todo) => {
                  return (
                    <div>
                      <div className="todoTitle">
                        {todo.title}
                      </div>
                      <div className="todoBody">
                        {todo.body}
                      </div>
                      <button className="delete-button" onClick={() => clickRemoveHandler(todo.id)}>삭제하기</button>
                      <button className="complete-button" onClick={() => completeHandler(todo.id)}>
                        {todo.isDone ? "취소하기" : "완료하기"}
                      </button>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>


        <div className="list2">
          <span>
            Done..! 🎉
          </span>

          <div className="listWrapper">
            <div className="listContainer">
              {todo
                .filter((todo) => todo.isDone === true)
                .map((todo) => {
                  return (
                    <div>
                      <div className="todoTitle">
                        {todo.title}
                      </div>
                      <div className="todoBody">
                        {todo.body}
                      </div>
                      <button className="delete-button" onClick={() => clickRemoveHandler(todo.id)}>삭제하기</button>
                      <button className="complete-button" onClick={() => completeHandler(todo.id)}>
                        {todo.isDone ? "취소하기" : "완료하기"}
                      </button>
                    </div>
                  );
                })}
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}

export default App;
