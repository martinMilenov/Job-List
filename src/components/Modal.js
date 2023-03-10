import React from 'react';
import ReactDOM from 'react-dom';
import Select from './Select';
import './Modal.css';

const Modal = ({ title, content, onDismiss, onSuccess }) => {
  return ReactDOM.createPortal(
    <div className="modal-background">
      <div className="modal-container">
        <div className="close-modal" onClick={onDismiss}>
          X
        </div>
        <div className="header">{title}</div>
        <div className="content">{content}</div>
        <div className="actions">
          <button onClick={onSuccess}>Update</button>
        </div>
      </div>
    </div>,
    document.getElementById('modal')
  );
};

export default Modal;
