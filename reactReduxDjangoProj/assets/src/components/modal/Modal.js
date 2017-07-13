import React from 'react';
import PropTypes from 'prop-types';

class Modal extends React.Component {

  render () {
    return (
      <div className="app-modal">
        <div className="modal-content">
          <span className="modal-close">&times;</span>
          <p>Some text in the Modal..</p>
          {this.props.children}
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  children: PropTypes.object.isRequired
};

export default Modal;
