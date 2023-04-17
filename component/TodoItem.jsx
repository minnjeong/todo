export default function TodoItem(props) {

    return (
      <div>
        <div className="todoTitle">
          {props.todo.title}
        </div>
        <div className="todoBody">
          {props.todo.body}
        </div>
        <button className="delete-button" onClick={() => props.clickRemoveHandler(props.todo.id)}>삭제하기</button>
        <button className="complete-button" onClick={() => props.completeHandler(props.todo.id)}>
          {props.todo.isDone ? "취소하기" : "완료하기"}
        </button>
      </div>
    )
  }

