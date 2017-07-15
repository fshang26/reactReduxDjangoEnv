import React from 'react';
import PropTypes from 'prop-types';

// design: default header, body, footer 3 parts, specific modal can use content = {header, body, footer} to override
class Modal extends React.Component {
  render () {
    return (
      <div className="app-modal">
        <div className="modal-content">
          <div className="modal-content-header">
            <div className="modal-content-header-content">
              {this.props.content.header}
              </div>
            <div className="modal-close" onClick={this.props.onClose}>
              &times;
            </div>
            <span className="clearfix"></span>
          </div>
          <p>{this.props.content.body}</p>
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
