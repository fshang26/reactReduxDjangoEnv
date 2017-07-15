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
      content: {
        header: 'Information',
        body: 'Congrats! You are rewarded one dollar.'
      }
    });
  }

  render() {
    return (
      <div className="page">
        <h1>demos</h1>
        <div onClick={this.showNotification}>Show notification</div>
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
