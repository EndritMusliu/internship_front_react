import React, { useEffect, useState } from 'react'
import "./AddBatch.css"
import { GoHome } from 'react-icons/go'
import { toast, ToastContainer } from 'react-toastify';
import { LuBox } from "react-icons/lu";
import { fetchBatch, saveBatch } from './services/batchServices';
import { fetchProjects } from './services/projectServices';
import { useParams } from 'react-router-dom';

function AddBatch() {
  const [projects, setProjects] = useState([]);
    const [batchData,setBatchData] = useState({
        project: 2,
        cpe_elemination:false,
        batch_number: "",
        total_ports: "",
        metro_e_sur_physical: "",
        metro_e_ag_virtual: "",
        cbh_sur_physical: "",
        cbh_ag_virtual: "",
        eg_enni_services: "",
        eg_enni_billable: "",
        eg_enni_physical: "",
        eg_non_enni_physical: "",
        impacted_circuits_virtual: "",
        billable_msc_virtual: "",
        physical_msc_ports: "",
        uplinks_physical: "",
        mux: false,
        re_ip: false,
        re_ip_with_trunk:false,
        trunk: false,
        century_link_lvl3: false,
        resources: "",
        target_date: "",
        no_boom: false,
        confirmed_date: false,
        notes: "",
    })
    const { id } = useParams();

    const loadData = async () => {
      if(id){
        const batchData = await fetchBatch(id);
        setBatchData(batchData.data);
      }
    }

    useEffect(() => {
      loadData();
    },[id]);

    const handleSubmit = (e) => {
      e.preventDefault();
     if(id){
      const parsedData = {
        ...batchData,
        batch_number: parseInt(batchData.batch_number),
        total_ports: parseInt(batchData.total_ports),
        metro_e_sur_physical: parseInt(batchData.metro_e_sur_physical),
        metro_e_ag_virtual: parseInt(batchData.metro_e_ag_virtual),
        cbh_sur_physical: parseInt(batchData.cbh_sur_physical),
        cbh_ag_virtual: parseInt(batchData.cbh_ag_virtual),
        eg_enni_services: parseInt(batchData.eg_enni_services),
        eg_enni_billable: parseInt(batchData.eg_enni_billable),
        eg_enni_physical: parseInt(batchData.eg_enni_physical),
        eg_non_enni_physical: parseInt(batchData.eg_non_enni_physical),
        impacted_circuits_virtual: parseInt(batchData.impacted_circuits_virtual),
        billable_msc_virtual: parseInt(batchData.billable_msc_virtual),
        physical_msc_ports: parseInt(batchData.physical_msc_ports),
        uplinks_physical: parseInt(batchData.uplinks_physical),
      };
    
      saveBatch(parsedData, id)
        .then(() => toast.success('Batch saved!'))
        .catch((err) => {
          console.error("Error saving batch", err);
          toast.error('Failed to save batch.');
        });
     }else{
      const parsedData = {
        ...batchData,
        batch_number: parseInt(batchData.batch_number),
        total_ports: parseInt(batchData.total_ports),
        metro_e_sur_physical: parseInt(batchData.metro_e_sur_physical),
        metro_e_ag_virtual: parseInt(batchData.metro_e_ag_virtual),
        cbh_sur_physical: parseInt(batchData.cbh_sur_physical),
        cbh_ag_virtual: parseInt(batchData.cbh_ag_virtual),
        eg_enni_services: parseInt(batchData.eg_enni_services),
        eg_enni_billable: parseInt(batchData.eg_enni_billable),
        eg_enni_physical: parseInt(batchData.eg_enni_physical),
        eg_non_enni_physical: parseInt(batchData.eg_non_enni_physical),
        impacted_circuits_virtual: parseInt(batchData.impacted_circuits_virtual),
        billable_msc_virtual: parseInt(batchData.billable_msc_virtual),
        physical_msc_ports: parseInt(batchData.physical_msc_ports),
        uplinks_physical: parseInt(batchData.uplinks_physical),
      };
    
      saveBatch(parsedData)
        .then(() => toast.success('Batch saved!'))
        .catch((err) => {
          console.error("Error saving batch", err);
          toast.error('Failed to save batch.');
        });
     }
   
    };

        const handleChange = (e) => {
          const { name, type, value, checked } = e.target;
          setBatchData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
          }));
        };

          const getProjects = async () => {
                      const response = await fetchProjects(); 
                      setProjects(response.data);
                      console.log(projects, "Projects");
                      console.log(response,"Response");
                      console.log(response.data,"Response data");
                  };

        useEffect(() => {
           getProjects();
        },[]);
    
  return (
    <div className='add-container'>
        <div className='nav'>
                <h2>Add Batch</h2>&#124;
                <GoHome  id='gohome'/> &gt;&gt;
                <p id='project'>Batches</p> &gt;&gt;
                <p>Add Batch</p>
                </div>
                {console.log(projects)}
                <div className='add-batch'>
                    <h4>Add Batch</h4>
                    <div className="batch-toggle-container">
                    <label className="batch-toggle-label">
                    <input type="checkbox" name="cpe_elemination" checked={batchData.cpe_elemination} onChange={handleChange} />
                    </label>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className='batch-grid'>
                      <div  className="batch-group">
                       <label htmlFor='project'>Project</label>
                       <select name="project" value={batchData.project} onChange={handleChange}>
                      <option style={{color:"#808080"}} value="">Select Project...</option>
                      {
                        projects?.map((project) => (
                       <option key={project.id} value={project.id}>{project.project_name}</option>
                      ))
                      }                
                      </select>
                       </div>
                        <div id='batch-op'  className="batch-group">
                        <label htmlFor='batch_number'>Batch Number</label>
                       <select name="batch_number" value={batchData.batch_number} onChange={handleChange}>
                       <option style={{color:"#808080"}} value="">Select...</option>
                       <option value="1"> 1</option>
                       <option value="2"> 2</option>
                       <option value="3"> 3</option>
                       <option value="4"> 4</option>
                       <option value="5"> 5</option>
                       <option value="6"> 6</option>
                       <option value="7"> 7</option>
                       <option value="8"> 8</option>
                       <option value="9"> 9</option>
                       <option value="10"> 10</option>
                       </select>
                         </div>
                         <div className="batch-group">
                        <label htmlFor='total_ports'>Total Port</label>
                        <input type="text" name="total_ports" value={batchData.total_ports} onChange={handleChange} />
                         </div>
                         <div className="batch-group">
                        <label htmlFor='metro_e_sur_physical'>Metro-E SUR/AG/SAG (Physical)</label>
                         <input type="text" name="metro_e_sur_physical" placeholder="0" value={batchData.metro_e_sur_physical} onChange={handleChange}/>
                         </div>
                         <div className="batch-group">
                        <label htmlFor='metro_e_ag_virtual'>Metro-E AG/SAG/MTG (Virtual)</label>
                         <input type="text" name="metro_e_ag_virtual" placeholder="0" value={batchData.metro_e_ag_virtual} onChange={handleChange}/>
                         </div>
                         <div className="batch-group">
                        <label htmlFor='cbh_sur_physical'>CBH SUR/AG/SAG (Physical)</label>
                         <input type="text" name="cbh_sur_physical" placeholder='0' value={batchData.cbh_sur_physical} onChange={handleChange}/>
                         </div>
                         <div className="batch-group">
                        <label htmlFor='cbh_ag_virtual'>CBH AG/SAG/MTG (Virtual)</label>
                         <input type="text" name="cbh_ag_virtual" placeholder='0' value={batchData.cbh_ag_virtual} onChange={handleChange} />
                         </div>
                         <div className="batch-group">
                        <label htmlFor='eg_enni_services'>EG ENNI Services (Virtual)</label>
                         <input type="text" name="eg_enni_services" placeholder='0' value={batchData.eg_enni_services} onChange={handleChange}/>
                         </div>
                         <div className="batch-group">
                        <label htmlFor='eg_enni_billable'>EG ENNI Billable (Virtual)</label>
                         <input type="text" name="eg_enni_billable" placeholder='0' value={batchData.eg_enni_billable} onChange={handleChange}/>
                         </div>
                         <div className="batch-group">
                        <label htmlFor='eg_enni_physical'>EG Physical Ports (Physical)</label>
                         <input type="text" name="eg_enni_physical" placeholder='0' value={batchData.eg_enni_physical} onChange={handleChange}/>
                         </div>
                         <div className="batch-group">
                        <label htmlFor='eg_non_enni_physical'>EG NON-ENNI Ports (Physical)</label>
                         <input type="text" name="eg_non_enni_physical" placeholder="0" value={batchData.eg_non_enni_physical} onChange={handleChange}/>
                         </div>
                         <div className="batch-group">
                        <label htmlFor='impacted_circuits_virtual'>Impacted Circuits (Virtual)</label>
                         <input type="text" name="impacted_circuits_virtual"  placeholder='0' value={batchData.impacted_circuits_virtual} onChange={handleChange}/>
                         </div>
                         <div className="batch-group">
                        <label htmlFor='billable_msc_virtual'>Billable MSC Services (Virtual)</label>
                         <input type="text" name="billable_msc_virtual"  placeholder='0' value={batchData.billable_msc_virtual} onChange={handleChange}/>
                         </div>
                         <div className="batch-group">
                        <label htmlFor='physical_msc_ports'>Physical MSC Ports (Physical)</label>
                         <input type="text" name="physical_msc_ports" placeholder="0" value={batchData.physical_msc_ports} onChange={handleChange}/>
                         </div>
                         <div className="batch-group">
                        <label htmlFor='uplinks_physical'>Uplinks (Physical)</label>
                         <input type="text" name="uplinks_physical" placeholder="0" value={batchData.uplinks_physical} onChange={handleChange}/>
                         </div>
                         <div className="checked-batch">
                         <label htmlFor='mux'> MUX swap requested</label>
                         <input type="checkbox" name="mux" checked={batchData.mux} onChange={handleChange} />
                         </div>
                         <div className="checked-batch">
                         <label htmlFor='re_ip'> Re-IP</label>
                         <input type="checkbox" name="re_ip" checked={batchData.re_ip} onChange={handleChange} />
                         </div>
                         <div className="checked-batch">
                         <label htmlFor='re_ip_with_trunk'> Re-IP Trunk</label>
                         <input type="checkbox" name="re_ip_with_trunk" checked={batchData.re_ip_with_trunk} onChange={handleChange} />
                         </div>
                         <div className="checked-batch">
                         <label htmlFor='trunk'> Trunk</label>
                         <input type="checkbox" name="trunk" checked={batchData.trunk} onChange={handleChange} />
                         </div>
                         <div className="checked-batch">
                         <label htmlFor='century_link_lvl3'> Centry Link/Level 3</label>
                         <input type="checkbox" name="century_link_lvl3" checked={batchData.century_link_lvl3} onChange={handleChange} />
                         </div>
                         <div  className="batch-group" id='resources'>
                         <label htmlFor='resources'>Resources</label>
                         <select name="resources" value={batchData.resources} onChange={handleChange}>
                         <option style={{color:"#808080"}} value="">Select...</option>
                         <option value="status1">Project 1</option>
                         <option value="status2">Project 2</option>
                         </select>
                         </div>
                         <div className="checked-batch">
                         <label htmlFor='no_boom'> NoBOM</label>
                         <input type="checkbox" name="no_boom" checked={batchData.no_boom} onChange={handleChange} />
                         </div>
                         <div className="batch-group">
                         <label htmlFor='target_date'>Target Date</label>
                         <input type="text" name="target_date" value={batchData.target_date} onChange={handleChange}/>
                         </div>
                         <div className="batch-toggle-container">
                         <label className="batch-toggle-label">
                         <input type="checkbox" name="confirmed_date" checked={batchData.confirmed_date} onChange={handleChange} />
                         </label>
                         </div>
                         <div className="batch-group">
                         <label htmlFor='notes'>Note</label>
                         <textarea  id="notes" name="notes" rows="4" cols="50" value={batchData.notes} onChange={handleChange}/> 
                         </div>
                         <button id='batch-button1'  type='submit'>Submit</button>
                         <button id='batch-button2' type='reset'>Reset</button>
                         <button id='batch-button3' type='button' onClick={() => console.log('Cancel clicked')}>Cancel</button>
          
                        </div>
                    </form>
                </div>
                <div className='preview'>
                    <div className='batch-icon'>
                     <LuBox style={{background:"#0000FF",color:"white",borderRadius:"40%",width:"50px",height:"40px"}}/>
                    </div>
                    <h2>Project</h2>
                    <p>Please select a <strong>Project</strong> to view its details</p>
                </div>
                 <ToastContainer />
        </div>
  )
}

export default AddBatch