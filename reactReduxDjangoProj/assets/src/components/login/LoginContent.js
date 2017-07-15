import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../common/TextInput';

const LoginContent = ({userinfo, onSave, onChange, errors}) => {
  return (
    <div className="flex-center content-login">
      <div className="login-form">
        {false && <div className="title">尚峰</div>}
        <TextInput
          name="username"
          value={userinfo.username}
          onChange={onChange}
          palceholder="username"
          error={errors.username}
          type="text"/>
        <TextInput
          name="password"
          value={userinfo.password}
          onChange={onChange}
          palceholder="password"
          error={errors.password}
          type="password"/>
        <div>
          <div className="button" onClick={onSave}>sign in</div>
        </div>
      </div>
    </div>
  );
};

LoginContent.propTypes = {
  userinfo: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object
};

export default LoginContent;


