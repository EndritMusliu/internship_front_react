import React from 'react'
import { GoHome } from 'react-icons/go'
import { Link } from 'react-router-dom'
import "./Batch.css"
import BatchTable from './include/BatchTable'

function Batch() {
  return (
    <div>
    <div className='nav-batch'>
            <h2>Batches</h2>&#124;
            <GoHome  id='gohomebatch'/> &gt;&gt;
            <p id='projectbatch'>Batches</p> 
            </div>
            <Link to="/addBatch" style={{ textDecoration: 'none' }}>
            <button className='addbatch'>+ Add new</button>
            </Link>
            <div className='filter-dropdowns-batch'>
            <p className='filter-title-batch'>Filters</p>
            <div className="form-grid-batch">
            <div className="form-group-batch">
            <label htmlFor='devision'>Region</label>
            <select name="devision" >
            <option style={{color:"#808080"}} value="">Select...</option>
            <option value="devision1">Region 1</option>
            <option value="devision2">Region 2</option>
            </select>
            </div>
            <div className="form-group-batch">
            <label htmlFor='devision'>Status</label>
            <select name="devision" >
            <option style={{color:"#808080"}} value="">Select...</option>
            <option value="devision1">Status 1</option>
            <option value="devision2">Status 2</option>
            </select>
            </div>
            <div className="form-group-batch">
            <label htmlFor='devision'>Project Name</label>
            <select name="devision" >
            <option style={{color:"#808080"}} value="">Select...</option>
            <option value="devision1">Name 1</option>
            <option value="devision2">Name 2</option>
            </select>
            </div>
            <div className="form-group-batch">
            <label htmlFor='devision'>Project Menager</label>
            <select name="devision" >
            <option style={{color:"#808080"}} value="">Select...</option>
            <option value="devision1">Menager 1</option>
            <option value="devision2">Menager 2</option>
            </select>
            </div>
            <div className="form-group-batch">
            <label htmlFor='devision'>Metro_e CM</label>
            <select name="devision" >
            <option style={{color:"#808080"}} value="">Select...</option>
            <option value="devision1">CM 1</option>
            <option value="devision2">CM 2</option>
            </select>
            </div>
            <div className="form-group-batch">
            <label htmlFor='devision'>CBH CM</label>
            <select name="devision" >
            <option style={{color:"#808080"}} value="">Select...</option>
            <option value="devision1">CBH 1</option>
            <option value="devision2">CBH 2</option>
            </select>
            </div>
            <div className="form-group-batch">
            <label htmlFor='devision'>Re_ip CM</label>
            <select name="devision" >
            <option style={{color:"#808080"}} value="">Select...</option>
            <option value="devision1">RE 1</option>
            <option value="devision2">RE 2</option>
            </select>
            </div>
            <div id='toggle' className="toggle-container-batch">
            <label className="toggle-label-batch">
            <input type="checkbox" /> Only On Hold
            </label>
            </div>
            </div>
            </div>
            <BatchTable />
</div>
  )
}

export default Batch