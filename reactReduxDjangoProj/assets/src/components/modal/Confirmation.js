import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {hideModal} from '../../actions/modalActions';
import Modal from './Modal';

const Confirmation = ({title, hideModal}) => {
  const handleConfirm = (isConfirmed) => () => {
    hideModal();
  };

  return (
    <Modal title={title}>
      <button onClick={handleConfirm(true)}>
        Yes
      </button>
      <button onClick={handleConfirm(false)}>
        No
      </button>
    </Modal>
  );
};

Confirmation.propTypes = {
  title: PropTypes.string,
  hideModal: PropTypes.func
};

export default connect(null, {hideModal})(Confirmation);
