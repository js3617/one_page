import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// 성능을 측정하려면 logResults 함수를 전달하거나
// 또는 분석 엔드포인트로 전송할 수 있습니다.
// 성능 측정에 대한 자세한 내용은 https://bit.ly/CRA-vitals을 참조하세요.
reportWebVitals();
