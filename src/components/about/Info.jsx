import React from 'react';

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className='bx bx-award about__icon'></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">4-month full-time boot-camp</span>
      </div>

      <div className="about__box">
        <i className='bx bx-briefcase-alt about__icon'></i>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">48 + personal projects</span>
      </div>

      <div className="about__box">
        <i className="bx bx-desktop about__icon"></i>
        <h3 className="about__title">Attitude</h3>
        <span className="about__subtitle">Willing to learn, work hard</span>
      </div>
    </div>
  );
}

export default Info;
