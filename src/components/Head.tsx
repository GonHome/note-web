import * as React from 'react';
import '../styles/login.scss';

type propTypes = {
  HEAD_HEIGHT: number;
};
const Login = (props: propTypes) => {
  const { HEAD_HEIGHT } = props;
  return (
    <div className="head" style={{ height: HEAD_HEIGHT }}>
      <img src='logo.svg' />
      <div className="head-logo-text">
        <div className="title hover-link">
          <span>A</span>
          <span>I</span>
          <span>&nbsp;</span>
          <span>编</span>
          <span>辑</span>
          <span>笔</span>
          <span>记</span>
        </div>
        <div className="title hover-link">
          <span>A</span>
          <span>I</span>
          <span>&nbsp;</span>
          <span>编</span>
          <span>辑</span>
          <span>笔</span>
          <span>记</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
