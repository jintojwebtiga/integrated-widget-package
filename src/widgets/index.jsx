import React from 'react';
import ReactDOM from 'react-dom/client'
import LoginComponent from '../components/Login.jsx';
import InfoComponent from '../components/Info.jsx';

export const createWidget = (containerSelector) => {
  const container = document.querySelector(containerSelector);
  const iframe = document.createElement('iframe');
  container.appendChild(iframe);

  const widgetWindow = iframe.contentWindow;
  const widgetDocument = widgetWindow.document;

  const openLogin = ({ onLoginComplete }) => {
    const handleLogin = (userDetails) => {
      onLoginComplete(userDetails);
    };

    ReactDOM.createRoot(widgetDocument.body).render(<LoginComponent onLogin={handleLogin} />);
  };

  const showInfo = () => {
    ReactDOM.createRoot(widgetDocument.body).render(<InfoComponent />);
  };

  return {
    openLogin,
    showInfo
  };
};
