import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../common/TextInput';

const LoginForm = ({userinfo, onSave, onChange, errors}) => {
  return (
    <div className="login-form">
        <div>login error</div>
        <div>
          <TextInput
            name="username"
            value={userinfo.username}
            onChange={onChange}
            palceholder="username"
            error={errors.username}
            type="text"/>
        </div>
        <div>
          <TextInput
            name="password"
            value={userinfo.password}
            onChange={onChange}
            palceholder="password"
            error={errors.password}
            type="password"/>
        </div>
        <div>
          <button type="submit" onClick={onSave}>sign in</button>
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


