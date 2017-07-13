import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Notification from './Notification';
import Confirmation from './Confirmation';
import {MODAL_TYPE_NOTIFICATION, MODAL_TYPE_CONFIRMATION} from '../../constants/constants';

const MODAL_COMPONENTS = {
  [MODAL_TYPE_NOTIFICATION]: Notification,
  [MODAL_TYPE_CONFIRMATION]: Confirmation
};

const ModalRoot = ({ modalType, modalProps }) => {
  if (!modalType) {
    return null;
  }

  const ModalComponent = MODAL_COMPONENTS[modalType];
  return <ModalComponent {...modalProps} />;
};

ModalRoot.propTypes = {
  modalType: PropTypes.string,
  modalProps: PropTypes.object
};

export default connect(state => state.modal)(ModalRoot);
