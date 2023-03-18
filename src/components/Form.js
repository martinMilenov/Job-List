import { useState } from 'react';
import './Form.css';
import Select from './Select';

const Form = ({ handleCreate }) => {
  const [formValues, setFormValues] = useState({
    job: '',
    priority: '',
  });
  const [errors, setErrors] = useState({});

  const selectError = Object.entries(errors).find(
    ([key, value]) => key === 'priority'
  );

  const inputError = Object.entries(errors).find(
    ([key, value]) => key === 'job'
  );

  const validateFields = (job, priority) => {
    const regex = /^[a-zA-Z\s]*$/;
    let errors = {};

    if (!job || !job.trim()) {
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

  const handleChange = (e) => {
    setFormValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCreateJob = () => {
    const { job, priority } = formValues;

    const errors = validateFields(job, priority);

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    handleCreate(job, priority);
    setFormValues({ job: '', priority: '' });
    setErrors({});
  };

  return (
    <form>
      <div>
        <label htmlFor="job">Job:</label>
        <input
          style={{ borderColor: inputError?.length > 0 ? 'red' : '' }}
          type="text"
          name="job"
          id="job"
          value={formValues.job}
          onChange={handleChange}
        />
        {inputError?.length > 0 && (
          <span className="error">{inputError[1]}</span>
        )}
      </div>
      <Select
        label="Priority"
        priority={formValues.priority}
        handleChange={handleChange}
        selectError={selectError}
      />
      <button
        style={{ marginTop: '20px' }}
        type="button"
        onClick={handleCreateJob}
      >
        Create
      </button>
    </form>
  );
};

export default Form;
