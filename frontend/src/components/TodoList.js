import React from 'react';

export default function TodoList({ todos = [], onToggle, onDelete }){
  if(!todos.length) return <p>No todos yet.</p>;
  return (
    <div>
      {todos.map(todo => (
        <div className="todo-item" key={todo.id}>
          <div className="left">
            <input type="checkbox" checked={!!todo.completed} onChange={()=>onToggle(todo)} />
            <div>
              <div className={todo.completed? 'completed' : ''}>{todo.title}</div>
              {todo.description && <div style={{fontSize:'0.9em', color:'#555'}}>{todo.description}</div>}
            </div>
          </div>
          <div>
            <button onClick={()=>onDelete(todo.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}
