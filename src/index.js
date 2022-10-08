import App from './App';

import { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import { Button } from './components/Button';
import Header from './components/Header';
import About from './components/About';
import Roadmap from './components/Roadmap';
import Team from './components/Team';
import Footer from './components/Footer';

import './scss/style.scss';

// при перезагрузке страница будет в верху (чтобы не ломался скрипт в roadmap на движение рыбки)
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
