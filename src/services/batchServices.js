import axios from "axios";
import { API_URL } from "../utils/backendUrl";

export const fatchBatches = async () => {
    try {
        const response = await axios.get(`${API_URL}api/batches/`);
        return response
    } catch (error) {
        console.log("Error fetching batches", error);
        throw error   
    }
}

export const deleteBatch = async (batchId) => {
    try {
        const response = await axios.delete(`${API_URL}api/batches/${batchId}/`);
        console.log("Batch deleted successfully!")
    } catch (error) {
        console.log("Error deleting batches", error);
        throw error 
    }
}

export const fetchBatch = async (batchId) => {
    try {
        const response = await axios.get(`${API_URL}api/batches/${batchId}/`)
        return response;  
    } catch (error) {
        console.log("Error fetching project", error);
        throw error  
    }
}

export const saveBatch = async (batchData, batchId = null) => {
    try {
        if(batchId){
            await axios.put(`${API_URL}api/batches/${batchId}/`, batchData);
        }else{
            await axios.post(`${API_URL}api/batches/`, batchData);
        }
    } catch (error) {
        console.log("Error saving batch", error);
        throw error 
    }
};