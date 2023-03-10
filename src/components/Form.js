import './Form.css';
import Select from './Select';

const Form = ({ job, priority, handleChange, handleCreate, errors }) => {
  const selectError = Object.entries(errors).find(
    ([key, value]) => key === 'priority'
  );

  const inputError = Object.entries(errors).find(
    ([key, value]) => key === 'job'
  );

  return (
    <form>
      <div>
        <label htmlFor="job">Job:</label>
        <input
          style={{ borderColor: inputError?.length > 0 ? 'red' : '' }}
          type="text"
          name="job"
          id="job"
          value={job}
          onChange={handleChange}
        />
        {inputError?.length > 0 && (
          <span className="error">{inputError[1]}</span>
        )}
      </div>
      <Select
        label="Priority"
        priority={priority}
        handleChange={handleChange}
        selectError={selectError}
      />
      <button
        style={{ marginTop: '20px' }}
        type="button"
        onClick={handleCreate}
      >
        Create
      </button>
    </form>
  );
};

export default Form;
