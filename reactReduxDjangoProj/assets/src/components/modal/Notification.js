import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {hideModal} from '../../actions/modalActions';
import Modal from './Modal';

const Notification = ({ title, hideModal }) => {
  const onClose = () => {
    hideModal();
    //if (afterClose) {
      //afterClose();
    //}
  };

  return (
    <Modal title={title} onClose={onClose}>
      <button onClick={onClose}>
        Ok
      </button>
    </Modal>
  );
};

Notification.propTypes = {
  title: PropTypes.string,
  hideModal: PropTypes.func
};

export default connect(null, {hideModal})(Notification);
