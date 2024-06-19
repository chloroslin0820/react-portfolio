import React, { useEffect, useState } from 'react';
import { projectsData, projectsNav } from './Data';
import WorkItems from './WorkItems';

const Works = () => {
  const [item, setItem] = useState({ name: 'all'});
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if(item.name === 'all') {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        const categoryName = project.category.toLowerCase();
        const filterName = item.name.toLowerCase();
        return categoryName.includes(filterName);
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  }

  return (
    <div>
      <div className="projects__filters">
        {
          projectsNav.map((item, index) => {
              return (
                <span 
                  onClick={(e) => { handleClick(e, index); }} 
                  key={index} 
                  className={`${ active === index ? 'active-project' : "" } projects__item`}
                >
                  {item.name}
                </span>
              )
            }
          )
        }
      </div>

      <div className="projects__container container grid">
          {
            projects.map((item) => {
                return (
                  <WorkItems item={item} key={item.id} />
                )
              }
            )
          }
      </div>
    </div>
  );
}

export default Works;
