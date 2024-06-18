import React from 'react';

const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend developer</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i className='bx bx-badge-check'></i>

            <div>
              <h3 className="skills__name">Node.js</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i className='bx bx-badge-check'></i>

            <div>
              <h3 className="skills__name">Java</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i className='bx bx-badge-check'></i>

            <div>
              <h3 className="skills__name">Spring Boot</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <i className='bx bx-badge-check'></i>

            <div>
              <h3 className="skills__name">Next.js</h3>
              <span className="skills__level">Fundamental</span>
            </div>
          </div>

          <div className="skills__data">
            <i className='bx bx-badge-check'></i>

            <div>
              <h3 className="skills__name">Python</h3>
              <span className="skills__level">Fundamental</span>
            </div>
          </div>

          <div className="skills__data">
            <i className='bx bx-badge-check'></i>

            <div>
              <h3 className="skills__name">MongoDB</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Backend;
