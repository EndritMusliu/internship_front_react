import axios from "axios";
import { API_URL } from "../utils/backendUrl";

export const fetchProjects = async () => {
    try {
        const response = await axios.get(`${API_URL}api/projects/`);
        return response
    } catch (error) {
        console.log("Error fetching sites", error);
        throw error   
    }
};

export const deleteProject = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}api/projects/${id}/`);
        console.log("Deleted successfuly ");
    } catch (error) {
        console.log("Error deleting sites", error);
        throw error  
    }
};

export const fetchProject = async (projectId) => {
    try {
        const response = await axios.get(`${API_URL}api/projects/${projectId}/`);
        return response;  
    } catch (error) {
        console.log("Error fetching project", error);
        throw error       
    }
};

export const saveProject = async (projectData, projectId = null) => {
    try {
        if(projectId){
            await axios.put(`${API_URL}api/projects/${projectId}/`, projectData);
        }else{
            await axios.post(`${API_URL}api/projects/`, projectData);
        }
    } catch (error) {
        console.log("Error saving project", error);
        throw error 
    }
};


