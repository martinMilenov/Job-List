import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Table from './components/Table';

function App() {
  const [formValues, setFormValues] = useState({
    job: '',
    priority: '',
  });
  const [errors, setErrors] = useState({});
  const [data, setData] = useState([]);

  const handleChange = (e) => {
    setFormValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const validateFields = (job, priority) => {
    const regex = /^[a-zA-Z]+$/;
    let errors = {};

    if (!job) {
      errors = { ...errors, job: 'This field is required' };
    } else if (job.length > 70) {
      errors = { ...errors, job: 'Exceed maximum characters' };
    } else if (!new RegExp(regex).test(job)) {
      errors = { ...errors, job: 'Incorect field format' };
    }

    if (!priority) {
      errors = { ...errors, priority: 'This field is required' };
    }

    return errors;
  };

  const handleCreate = () => {
    const { job, priority } = formValues;

    const item = {
      job,
      priority,
      id: Math.random().toString(36).slice(2, 6),
    };

    const errors = validateFields(job, priority);

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    setData((prevState) => [...prevState, item]);
    setFormValues({ job: '', priority: '' });
    setErrors({});
  };

  const handleDelete = (id) => {
    setData((prevState) => prevState.filter((row) => row.id !== id));
  };

  return (
    <div className="container">
      <Form
        job={formValues.job}
        priority={formValues.priority}
        handleChange={handleChange}
        handleCreate={handleCreate}
        errors={errors}
      />
      {data.length > 0 && <Table data={data} handleDelete={handleDelete} />}
    </div>
  );
}

export default App;
