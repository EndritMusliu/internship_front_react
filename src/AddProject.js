import React, { useEffect, useState } from 'react'
import "./AddProject.css"
import { GoHome } from "react-icons/go";
import { toast, ToastContainer } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { fetchProject, saveProject } from './services/projectServices';

function AddProject() {
    const [formData, setFormData] = useState({
      project_name:"",
      friendly_name:"",
      division:"",
      market:"",
      project_manager:"",
      priority_type:"",
      start_date_edp:"",
      priority:"",
      share_point:"",
      public_folder:"",
      target_date:"",
      fqdn:"",
      edp_status:"",
      device_launch:"",
      migration_date_status: false,
      mux_swap_request: "",
      mux_swap_approved: "",
      edp_redisign_recheck_needed:false,
      no_bom:false,
      approved_first_name:"",
      approved_last_name:"",
      deployment_engineer_first_name:"",
      deployment_engineer_last_name:"",
      deployment_engineer_email:"",
      deployment_engineer_phone:"",
      commercial_first_name:"",
      commercial_last_name:"",
      commercial_email:"",
      commercial_phone:"",
      commercial_notes:"",
    })

    const { id } = useParams();

    const loadData = async () => {
      if(id){
        const projectData = await fetchProject(id);
        setFormData(projectData.data);
      }

    }
    
    useEffect(() => {
        loadData();
    },[id]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
          ...formData,
          [name]: type === "checkbox" ? checked : value,
        });
      };

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(formData)
        if(id){
          saveProject(formData, id)
          .then(() => toast.success('Project saved!'))
                  .catch((err) => {
                    console.error("Error saving project", err);
                    toast.error('Failed to save project.');
                  });
        }else{
          saveProject(formData)
          .then(() => toast.success('Project saved!'))
                  .catch((err) => {
                    console.error("Error saving project", err);
                    toast.error('Failed to save project.');
                  });
        }
       

        // if (!formData.projectName || !formData.device || !formData.devision ||!formData.edp ||!formData.fqdn 
        //     ||!formData.friendlyName ||!formData.market ||!formData.priority ||!formData.priorityType ||!formData.projectMenager 
        //     ||!formData.public ||!formData.share ||!formData.startDate ||!formData.target ||!formData.firstName||!formData.firstNameC
        //     ||!formData.firstNameD||!formData.email||!formData.emailC||!formData.lastName||!formData.lastNameC
        //     ||!formData.lastNameD||!formData.textArea) {
        //     toast.error('Please fill in all fields!', {
        //       className: 'toast-error-custom',  
        //     });
        //   }
       
    }

    console.log(formData,"Formdata")

  return (
    <div>
        <div className='nav-add'>
                    <h2>Projects</h2>&#124;
                    <GoHome  id='goAdd'/> &gt;&gt;
                    <p id='projectAdd'>Projects</p>
                </div>
        <div className='addProject'>
            <h4>Add Project</h4>
        <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor='projectName'>Project name</label>
            <input type="text" name="project_name" value={formData.project_name} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor='friendlyName'>Friendly name</label>
            <input type="text" name="friendly_name" value={formData.friendly_name}  onChange={handleChange}/>
          </div>

          <div className="form-group">
            {console.log(formData,"Data")}
            <label htmlFor='division'>Division</label>
            <select name="division" value={formData.division}  onChange={handleChange}>
              <option style={{color:"#808080"}} value="">Select...</option>
              <option value="division1">Division 1</option>
              <option value="division2">Division 2</option>
              <option value="Georgia">Georgia</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor='market'>Market</label>
            <select name="market" value={formData.market}  onChange={handleChange}>
              <option style={{color:"#808080"}} value="">Select...</option>
              <option value="market1">Market 1</option>
              <option value="market2">Market 2</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor='projectMenager'>Project Menager</label>
            <select name="project_manager" value={formData.project_manager}  onChange={handleChange}>
              <option style={{color:"#808080"}} value="">Select...</option>
              <option value="menager1">Menager 1</option>
              <option value="menager2">Menager 2</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor='priorityType'>Priority Type</label>
            <select name="priority_type" value={formData.priority_type}  onChange={handleChange}>
              <option style={{color:"#808080"}} value="">Select...</option>
              <option value="priority1">Priority 1</option>
              <option value="priority2">Priority 2</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor='start_date_edp'>Start Date\EDP</label>
            <input type="text" name="start_date_edp" value={formData.start_date_edp} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor='priority'>Priority</label>
            <select name="priority" value={formData.priority}  onChange={handleChange}>
              <option style={{color:"#808080"}} value="">Select...</option>
              <option value="priority3">Priority 3</option>
              <option value="priority4">Priority 4</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor='share'>Share Point Comcast URL</label>
            <input type="text" name="share_point" value={formData.share_point}  onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor='public'>Public Folder - 3CIS URL</label>
            <input type="text" name="public_folder" value={formData.public_folder} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor='target'>Target Data</label>
            <input type="text" name="target_date" value={formData.target_date}  onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor='fqdn'>FDQN</label>
            <input type="text" name="fqdn" value={formData.fqdn}  onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor='edp'>EDP Status</label>
            <select name="edp_status" value={formData.edp_status}  onChange={handleChange}>
              <option style={{color:"#808080"}} value="">Select...</option>
              <option value="status1">Status 1</option>
              <option value="status2">Status 2</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor='device'>Device Launch</label>
            <input type="text" name="device_launch" value={formData.device_launch}  onChange={handleChange} />
          </div>
          <div className="form-group">
          </div>
          <div className="form-group toggle-switch">
          <label>Migration date status</label>
          <input type="checkbox" name="migration_date_status" checked={formData.migration_date_status} onChange={handleChange} />
        </div>

        <div className="checked-group">
            <label htmlFor='checked'> MUX swap requested</label>
            <input type="checkbox" name="mux_swap_request" checked={formData.mux_swap_request} value={formData.mux_swap_request} onChange={handleChange} />
          </div>

          <div className="checked-group">
            <label htmlFor='checked1'> MUX swap approved</label>
            <input type="checkbox" name="mux_swap_approved" checked={formData.mux_swap_approved} value={formData.mux_swap_request} onChange={handleChange} />
          </div>

         <p id='market-p'>Market resource dates proposed/approved by</p>

         <div id='item1' className="form-group">
            <label htmlFor='firstName'>First Name</label>
            <input type="text" name="approved_first_name" value={formData.approved_first_name}  onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor='lastName'>Last Name</label>
            <input type="text" name="approved_last_name" value={formData.approved_last_name}  onChange={handleChange} />
          </div>

          <p id='deployment-p'>Deployment Engineer</p>

          <div id='item2' className="form-group">
            <label htmlFor='firstNameD'>First Name</label>
            <input type="text" name="deployment_engineer_first_name" value={formData.deployment_engineer_first_name}  onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor='lastNameD'>Last Name</label>
            <input type="text" name="deployment_engineer_last_name" value={formData.deployment_engineer_last_name}  onChange={handleChange} />
          </div>

          
          <div className="form-group">
            <label htmlFor='email'>Email</label>
            <input type="text" name="deployment_engineer_email" value={formData.deployment_engineer_email}  onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor='phone'>Phone</label>
            <input type="tel" placeholder='+1 XXX XXX-XXXX' name="deployment_engineer_phone" value={formData.deployment_engineer_phone}  onChange={handleChange} />
          </div>

          <p id='comercial-p'>Comercial Engineer</p>

          <div id='item3' className="form-group">
            <label htmlFor='firstNameC'>First Name</label>
            <input type="text" name="commercial_first_name" value={formData.commercial_first_name}  onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor='lastNameC'>Last Name</label>
            <input type="text" name="commercial_last_name" value={formData.commercial_last_name}  onChange={handleChange}/>
          </div>

          <div className="form-group">
            <label htmlFor='emailC'>Email</label>
            <input type="text" name="commercial_email" value={formData.commercial_email}  onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor='phoneC'>Phone</label>
            <input type="tel" placeholder='+1 XXX XXX-XXXX' name="commercial_phone" value={formData.commercial_phone}  onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor='textArea'>Note</label>
            <textarea  id="textArea" name="commercial_notes" rows="4" cols="50" value={formData.commercial_notes}  onChange={handleChange} /> 
          </div>
          <button id='btn1' type='submit'>Submit</button>

          <button id='btn2' type='reset'>Reset</button>

          <button id='btn3' type='cancle'>Cancle</button>
          
        </div>
        </form>
        </div>
        <ToastContainer />
    </div>
   
  )
}

export default AddProject