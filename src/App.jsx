import ReactDOM from 'react-dom';

import AOS from './assets/js/aos';

import Header from './components/Header';
import About from './components/About';
import Roadmap from './components/Roadmap';
import Team from './components/Team';
import Footer from './components/Footer';

import './scss/style.scss';
import './assets/aos.css';
import { useEffect } from 'react/cjs/react.development';

// при перезагрузке страница будет в верху (чтобы не ломался скрипт в roadmap на движение рыбки)
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

const App = () => {
  useEffect(() => {
    console.log(AOS);
    AOS.init({
      disable: 'phone', // accepts following values: 'phone', 'tablet',
    });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <About />
      <Roadmap />
      <Team />
      <Footer />
    </div>
  );
};

export default App;
