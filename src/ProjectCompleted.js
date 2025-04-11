import React from 'react';
import "./ProjectCompleted.css";
import { Link } from 'react-router-dom';
import { GoHome } from 'react-icons/go';
import ProjectTable from './include/ProjectTable';

function ProjectCompleted() {
    return (
        <div className='project-complete'>
          <div className='nav-project-complete'>
                <h2>Projects</h2>&#124;
                <GoHome  id='goProjectComplete'/> &gt;&gt;
                <p id='project-complete'>Projects</p>
            </div>
            <div className="button-container-complete">
            <Link to="/addProject" style={{ textDecoration: 'none' }}>
            <button className="addfilterProjectComplete">+ Add new</button>
           </Link>
           </div>
    
          <div className='filter-dropdowns-project-complete'>
            <p className='filter-title-project-complete'>Filters</p>
            <div className="filters-container-project-complete">
              <div className="filter-group-project-complete">
                <label>Regions</label>
                <select>
                  <option value=""></option>
                  <option value="Central">Central</option>
                  <option value="Northeast">Northeast</option>
                  <option value="West">West</option>
                </select>
              </div>
              
              <div className="filter-group-project-complete">
                <label>Priorities</label>
                <select>
                  <option value=""></option>
                  <option value="POR">POR</option>
                  <option value="Market Request">Market Request</option>
                </select>
              </div>
    
              <div className="filter-group-project-complete">
                <label>Project Name</label>
                <select>
                  <option value=""></option>
                </select>
              </div>
    
              <div className="filter-group-project-complete">
                <label>Project Manager</label>
                <select>
                  <option value=""></option>
                </select>
              </div>
    
              <div style={{gridTemplateColumns:"1/2"}} className="filter-group-project-complete">
                <label>BOM</label>
                <select>
                  <option value=""></option>
                </select>
              </div>
              
              <div className="filter-group-project-complete">
                <label>JIRA</label>
                <select>
                  <option value=""></option>
                </select>
              </div>
            </div>
            <div className="toggle-container-project-complete">
              <label className="toggle-label-project-complete">
                <input type="checkbox" /> Only On Hold
              </label>
            </div>
          </div>
          <ProjectTable />
        </div>
      );
}

export default ProjectCompleted