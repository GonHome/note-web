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
          <span>数</span>
          <span>据</span>
          <span>文</span>
          <span>本</span>
          <span>M</span>
          <span>A</span>
          <span>R</span>
          <span>K</span>
          <span>D</span>
          <span>O</span>
          <span>W</span>
          <span>N</span>
        </div>
        <div className="title hover-link">
          <span>数</span>
          <span>据</span>
          <span>文</span>
          <span>本</span>
          <span>M</span>
          <span>A</span>
          <span>R</span>
          <span>K</span>
          <span>D</span>
          <span>O</span>
          <span>W</span>
          <span>N</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
