import React from 'react';
import PropTypes from 'prop-types';

// design: default header, body, footer 3 parts, specific modal can use content = {header, body, footer} to override
class Modal extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    window.addEventListener("click", this.closeModal);
  }

  componentWillUnmount() {
    window.removeEventListener("click", this.closeModal);
  }

  closeModal(event) {
    if (event.target.className === "app-modal") {
      this.props.onClose();
    }
  }

  render () {
    return (
      <div className="app-modal">
        <div className="modal-content">
          <div className="modal-header">
            <div className="modal-header-content">
              {this.props.content.header}
              </div>
            <div className="modal-header-close" onClick={this.props.onClose}>
              &times;
            </div>
            <span className="clearfix"></span>
          </div>
          <div className="modal-body">
            {this.props.content.body}
          </div>
          {this.props.children}
          <span className="clearfix"></span>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  children: PropTypes.object.isRequired,
  content: PropTypes.object.isRequired,
  onClose: PropTypes.object.func
};

export default Modal;
