import React, { useState } from 'react';

export default function TodoForm({ onAdd }){
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const submit = (e)=>{
    e.preventDefault();
    if(!title.trim()) return;
    onAdd({ title, description, completed:false });
    setTitle(''); setDescription('');
  }

  return (
    <form onSubmit={submit} style={{marginBottom:12}}>
      <div className="form-row">
        <input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Title" />
        <button type="submit">Add</button>
      </div>
      <div style={{marginTop:8}}>
        <input value={description} onChange={e=>setDescription(e.target.value)} placeholder="Description (optional)" />
      </div>
    </form>
  );
}
