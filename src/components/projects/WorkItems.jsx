import React from 'react';

const WorkItems = ({ item }) => {
  return (
    <div className="project__card">
      <img src={item.image} alt="" className="project__img" />
      <h3 className="project__title">{item.title}</h3>
      <a href="#" className="project__button">
        Demo
        <i className="bx bx-right-arrow-alt project__button-icon"></i>
      </a>
    </div>
  );
}

export default WorkItems;
