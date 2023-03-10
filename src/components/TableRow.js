import { useState } from 'react';
import './TableRow.css';
import Select from './Select';
import Modal from './Modal';

const priorityColorMapper = {
  urgent: 'red',
  regular: 'yellow',
  trivial: 'blue',
};

const TableRow = ({
  job,
  priority,
  id,
  handleDelete,
  handleUpdatePriority,
}) => {
  const [inputValue, setInputValue] = useState(priority);
  const [currentPriority, setCurrentPriority] = useState(priority);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleUpdate = () => {
    setCurrentPriority(inputValue);
    handleUpdatePriority(id, inputValue);
    setShowModal(false);
  };

  return (
    <>
      <div
        style={{ backgroundColor: priorityColorMapper[currentPriority] }}
        className="table-row"
      >
        <div>{job}</div>
        <div style={{ textTransform: 'capitalize' }}>{currentPriority}</div>
        <div>
          <button
            style={{ marginRight: '10px' }}
            onClick={() => setShowModal(true)}
          >
            Edit
          </button>
          <button onClick={() => handleDelete(id)}>Delete</button>
        </div>
      </div>
      {showModal && (
        <Modal
          onDismiss={() => setShowModal(false)}
          onSuccess={handleUpdate}
          content={
            <Select
              priority={inputValue}
              selectError={[]}
              handleChange={handleChange}
            />
          }
          title={job}
          priority={priority}
        />
      )}
    </>
  );
};

export default TableRow;
