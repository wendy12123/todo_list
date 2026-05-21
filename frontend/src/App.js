import React, { useEffect, useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

export default function App(){
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const api = '/api/todos';

  useEffect(()=>{ fetchTodos(); },[]);

  async function fetchTodos(){
    setLoading(true);
    try{ const res = await fetch(api); const data = await res.json(); setTodos(Array.isArray(data)?data:[data]); }catch(e){ console.error(e); }
    setLoading(false);
  }

  async function addTodo(payload){ const res = await fetch(api, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload)}); const saved = await res.json(); setTodos(t=>[...t, saved]); }

  async function toggleComplete(todo){ const updated = { ...todo, completed: !todo.completed }; const res = await fetch(`${api}/${todo.id}`, { method:'PUT', headers:{'Content-Type':'application/json'}, body: JSON.stringify(updated) }); if(res.ok){ const saved = await res.json(); setTodos(t=>t.map(x=>x.id===saved.id?saved:x)); } }

  async function removeTodo(id){ const res = await fetch(`${api}/${id}`, { method:'DELETE' }); if(res.status===204){ setTodos(t=>t.filter(x=>x.id!==id)); } }

  return (
    <div className="container">
      <h1>Todo List</h1>
      <TodoForm onAdd={addTodo} />
      {loading ? <p>Loading...</p> : <TodoList todos={todos} onToggle={toggleComplete} onDelete={removeTodo} />}
    </div>
  );
}
