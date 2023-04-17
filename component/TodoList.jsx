export default function TodoList(props) {
  return (
    <div className="list">
          <span>
            {props.title}
          </span>

          <div className="listWrapper">
            <div className="listContainer">
              {props.todo
                .filter((todo) => todo.isDone === true)
                .map((todo) => {
                  return (
                    <TodoItem todo={props.todo} clickRemoveHandler={props.clickRemoveHandler} completeHandler={props.completeHandler}/>
                  );
                })}
            </div>
          </div>

        </div>
  )
}