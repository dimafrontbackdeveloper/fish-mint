import React, { useEffect, useState } from 'react';

// imgs
import gull1 from './../assets/images/gull1.png';
import gull2 from './../assets/images/gull2.png';
import gull3 from './../assets/images/gull3.png';
import logo from './../assets/images/logo.svg';
import headerFish from './../assets/images/header-fish.gif.mp4';
import island from './../assets/images/island.png';
import twitter from './../assets/images/twitter.svg';
import magicElden from './../assets/images/magic-elden.svg';

import { Button } from './Button';
import axios from 'axios';
import { useRandomInterval } from '../hooks/useRandomInterval';

let countOfNftPrev = 0; // значение для обновления

const Header = () => {
  const maxNft = 3333; // максимальное количество nft
  const minAdd = 3; // минимальное количества прибавления  nft
  const maxAdd = 10; // максимальное количества прибавления  nft

  const [countOfNft, setCountOfNft] = useState(0); // сколько рыб прибавляется
  const [percentOfProgessBar, setPercentOfProgessBar] = useState(0); // заполнение прогресс-бара

  // устанавливаем countOfNft при первом рендере
  useEffect(async () => {
    try {
      const res = await axios.get('http://localhost:1337/api/timeouts');
      console.log(res);

      // устанавливаем начальное значение
      if (res.status >= 200 && res.status < 300) {
        const count = res.data.data[0].attributes.count;
        setCountOfNft(count);

        const percentNft = (count / maxNft) * 100;
        setPercentOfProgessBar(percentNft);
      }
    } catch (e) {
      console.log(e);
    }
  }, []);

  // устанавливаем countOfNft при интервале
  useRandomInterval(async () => {
    if (countOfNft < maxNft) {
      setCountOfNft((prev) => {
        const newValue = prev + Math.floor(Math.random() * (maxAdd - minAdd + 1) + minAdd);
        countOfNftPrev = newValue;

        const percentNft = (newValue / maxNft) * 100;
        setPercentOfProgessBar(percentNft);

        if (newValue >= maxNft) {
          return maxNft;
        }

        return newValue;
      });

      const res = await axios.put('http://localhost:1337/api/timeouts/1', {
        data: { count: countOfNftPrev },
      });
    } else {
      setCountOfNft(maxNft);
    }
  }, ...[5000, 60000]);

  return (
    <header className="header">
      <div className="container">
        <img dataaos="fade-up-left" className="gull gull1" src={gull1} alt="gull" />
        <img dataaos="fade-right" className="gull gull2" src={gull2} alt="gull" />
        <img dataaos="fade-up-right" className="gull gull3" src={gull3} alt="gull" />
        <div className="header__top d-f fd-c">
          <ul className="social d-f ai-c">
            <li>
              <a src="https://twitter.com/DuckFrens" href="#">
                <img src={twitter} alt="twitter" />
              </a>
            </li>
            <li>
              <a src="https://opensea.io/collection/duck-frens" href="#">
                <img src={magicElden} alt="magic-elden" />
              </a>
            </li>
          </ul>
          <nav className="mint">{/* <Button /> */}</nav>
        </div>
        <div className="header__bottom">
          <div className="header__bottom-row d-g gtc-2">
            <div dataaos="fade-right" className="header__bottomColumn">
              <h1 className="logo">
                <img src={logo} alt="logo" />
              </h1>
              <h2 className="text-border">{countOfNft} fish left to migrate!</h2>
              <div className="progressBar">
                <div style={{ width: `${percentOfProgessBar}%` }}></div>
              </div>
              <Button />
            </div>
            <div dataaos="fade-left" className="header__bottomColumn d-f jc-e">
              <div className="header__bottomColumnImg ">
                <video autoPlay loop muted>
                  <source src={headerFish} type="video/webm" />
                  <source src={headerFish} type="video/mp4" />
                </video>
                <img src={island} alt="island" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
