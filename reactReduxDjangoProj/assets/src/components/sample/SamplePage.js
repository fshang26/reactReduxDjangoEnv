import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as modalActions from '../../actions/modalActions';
import {MODAL_TYPE_NOTIFICATION, MODAL_TYPE_CONFIRMATION} from '../../constants/constants';

class SamplePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.showNotification = this.showNotification.bind(this);
  }
  showNotification() {
    this.props.actions.showModal(MODAL_TYPE_NOTIFICATION, {
      title: 'This is an awesome notification.'
    });
  }

  render() {
    return (
      <div className="page">
        <h1>Sample</h1>
        <div onClick={this.showNotification}>Show modal</div>
      </div>
    );
  }
}

SamplePage.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(modalActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(SamplePage);
