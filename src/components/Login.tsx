import * as React from 'react';
import '../styles/login.scss';

type propTypes = {
  login: () => void;
};
const Login = (props: propTypes) => {
  return (
    <div className="main-body">>欢迎登录大数据标准化治理平台</div>
  );
};

export default Login;
