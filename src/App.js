import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Table from './components/Table';

function App() {
  const [data, setData] = useState([]);

  const handleCreate = (job, priority) => {
    const item = {
      job,
      priority,
      id: Math.random().toString(36).slice(2, 6),
    };

    setData((prevState) => [...prevState, item]);
  };

  const handleDelete = (id) => {
    setData((prevState) => prevState.filter((row) => row.id !== id));
  };

  const handleUpdatePriority = (id, updatedPriority) => {
    const updatedData = data.map((el) => {
      if (el.id === id) {
        return { ...el, priority: updatedPriority };
      }
      return el;
    });
    setData(updatedData);
  };

  return (
    <div className="container">
      <Form handleCreate={handleCreate} />
      {data.length > 0 && (
        <Table
          data={data}
          handleDelete={handleDelete}
          handleUpdatePriority={handleUpdatePriority}
        />
      )}
    </div>
  );
}

export default App;
