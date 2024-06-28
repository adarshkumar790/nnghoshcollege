import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, imgSrc }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>X</button>
                <img src={imgSrc} className="modal-img" alt="Enlarged" />
            </div>
        </div>
    );
};

export default Modal;
