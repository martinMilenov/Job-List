import React from 'react';
import './Form.css';

const selectBoxValues = [
  {
    label: 'Urgent',
    value: 'urgent',
    id: '1',
  },
  {
    label: 'Regular',
    value: 'regular',
    id: '2',
  },
  {
    label: 'Trivial',
    value: 'trivial',
    id: '3',
  },
];

const Select = ({ priority, label, selectError, handleChange }) => {
  return (
    <div className="selectContainer">
      {label && <label htmlFor="priority">{label}:</label>}
      <select
        style={{ borderColor: selectError?.length > 0 ? 'red' : '' }}
        name="priority"
        id="priority"
        value={priority}
        onChange={handleChange}
      >
        <option disabled value="">
          Select Priority
        </option>
        {selectBoxValues.map((item, i) => (
          <option key={item.id} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
      {selectError?.length > 0 && (
        <span className="error">{selectError[1]}</span>
      )}
    </div>
  );
};

export default Select;
