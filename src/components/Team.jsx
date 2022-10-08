import React from 'react';

// imgs
import fish4 from './../assets/images/fish4.png';
import fish5 from './../assets/images/fish5.png';
import fish11 from './../assets/images/fish11.png';

const Team = () => {
  return (
    <section className="team ">
      <div className="container">
        <h2 className="title">Team</h2>
        <div className="team__row d-g gtc-3-af">
          <div className="team__column">
            <h3 className="text-border">ManaMoon</h3>
            <div className="team__columnImg">
              <img src={fish4} alt="fish" />
            </div>
            <h4 className="text-border">Founder</h4>
            <p>Project director and marketer. Lover of fish.</p>
          </div>
          <div className="team__column">
            <h3 className="text-border">ManaMoon</h3>
            <div className="team__columnImg">
              <img src={fish5} alt="fish" />
            </div>
            <h4 className="text-border">Founder</h4>
            <p>Project director and marketer. Lover of fish.</p>
          </div>
          <div className="team__column">
            <h3 className="text-border">ManaMoon</h3>
            <div className="team__columnImg">
              <img src={fish11} alt="fish" />
            </div>
            <h4 className="text-border">Founder</h4>
            <p>Project director and marketer. Lover of fish.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
