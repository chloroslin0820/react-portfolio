import React from 'react';

const WorkItems = ({ item }) => {
  return (
    <div className="project__card">
      <a href={item.web} target="_blank" rel="noopener noreferrer">
        <img src={item.image} alt="" className="project__img" />
      </a>
      <div className="project__container-git-title">
        <a href={item.git} className="project__social-icon" target="_blank">
            <i className="uil uil-github-alt"></i>
        </a>
        <h3 className="project__title">{item.title}</h3>
        <a href={item.web} target="_blank" rel="noopener noreferrer">
          <i className="bx bx-right-arrow-alt project__title-icon"></i>
        </a>
      </div>
      <div>
        <i className='ri-file-code-line project__content-icon'></i>
        <span className="project__content-tech">{item.language}</span>
      </div>
      <div>
        <i className='ri-function-line project__content-icon'></i>
        <span className="project__content-tech">{item.languageFramework}</span>
      </div>
      <div>
        <i className='ri-css3-line project__content-icon'></i>
        <span className="project__content-tech">{item.cssFramework}</span>
      </div>
      <div>
        <i className='ri-database-2-line project__content-icon'></i>
        <span className="project__content-tech">{item.database}</span>
      </div>
      <div>
        <i className='ri-cloud-line project__content-icon'></i>
        <span className="project__content-tech">{item.deployment}</span>
      </div>
    </div>
  );
}

export default WorkItems;
