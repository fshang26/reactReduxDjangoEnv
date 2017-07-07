import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../common/TextInput';

const LoginForm = ({userinfo, onSave, onChange, errors}) => {
  return (
    <div>
        <div>login error</div>
        <div>
          <TextInput
            name="username"
            label="Username"
            value={userinfo.username}
            onChange={onChange}
            error={errors.username}
            type="text"/>
        </div>
        <div>
          <TextInput
            name="password"
            label="Password"
            value={userinfo.password}
            onChange={onChange}
            error={errors.password}
            type="password"/>
        </div>
        <div>
          <button type="submit" onClick={onSave}>Submit</button>
        </div>
    </div>
  );
};

LoginForm.propTypes = {
  userinfo: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object
};

export default LoginForm;


