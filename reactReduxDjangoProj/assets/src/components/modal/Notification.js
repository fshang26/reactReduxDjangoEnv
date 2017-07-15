import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {hideModal} from '../../actions/modalActions';
import Modal from './Modal';

const Notification = ({content, hideModal}) => {
  const onClose = () => {
    hideModal();
    //if (afterClose) {
      //afterClose();
    //}
  };

  return (
    <Modal content={content} onClose={onClose}>
      <div className='button' onClick={onClose}>
        Ok
      </div>
    </Modal>
  );
};

Notification.propTypes = {
  content: PropTypes.object.isRequired,
  hideModal: PropTypes.func
};

export default connect(null, {hideModal})(Notification);
