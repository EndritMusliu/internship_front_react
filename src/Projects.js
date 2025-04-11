import React from 'react';
import "./Projects.css";
import { Link } from 'react-router-dom';
import { GoHome } from 'react-icons/go';
import ProjectTable from './include/ProjectTable';

function Projects() {
  return (
    <div className='project'>
      <div className='nav-project'>
            <h2>Projects</h2>&#124;
            <GoHome  id='goProject'/> &gt;&gt;
            <p id='project'>Projects</p>
        </div>
        <div className="button-container">
        <Link to="/addProject" style={{ textDecoration: 'none' }}>
        <button className="addfilterProject">+ Add new</button>
       </Link>
       </div>

      <div className='filter-dropdowns-project'>
        <p className='filter-title-project'>Filters</p>
        <div className="filters-container-project">
          <div className="filter-group-project">
            <label>Regions</label>
            <select>
              <option value=""></option>
              <option value="Central">Central</option>
              <option value="Northeast">Northeast</option>
              <option value="West">West</option>
            </select>
          </div>
          
          <div className="filter-group-project">
            <label>Priorities</label>
            <select>
              <option value=""></option>
              <option value="POR">POR</option>
              <option value="Market Request">Market Request</option>
            </select>
          </div>

          <div className="filter-group-project">
            <label>Project Name</label>
            <select>
              <option value=""></option>
            </select>
          </div>

          <div className="filter-group-project">
            <label>Project Manager</label>
            <select>
              <option value=""></option>
            </select>
          </div>

          <div style={{gridTemplateColumns:"1/2"}} className="filter-group-project">
            <label>BOM</label>
            <select>
              <option value=""></option>
            </select>
          </div>
          
          <div className="filter-group-project">
            <label>JIRA</label>
            <select>
              <option value=""></option>
            </select>
          </div>
        </div>
        <div className="toggle-container-project">
          <label className="toggle-label-project">
            <input type="checkbox" /> Only On Hold
          </label>
        </div>
      </div>
      <ProjectTable />
    </div>
  );
}

export default Projects;
