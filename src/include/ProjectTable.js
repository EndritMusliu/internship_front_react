import React, { useState, useEffect } from 'react';
import { CiSearch } from "react-icons/ci";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import "./ProjectTable.css";
import { fetchProjects, deleteProject, fetchProject, saveProject } from "../services/projectServices.js";

const PROJECT_DATA = [
    { id: 1, name: "Springfield_Savannah", manager: "Drin Gjonbalaj", batch: 3, status: "Completed", priority: "POR", region: "Central", startDate: "12/08/2020" },
    { id: 2, name: "22ndst - Ticket nr. 26", manager: "Elza Kantarxhiu", batch: 1, status: "Completed", priority: "Market Request", region: "Central", startDate: "12/11/2020" },
    { id: 3, name: "Springrd - Ticket nr. 28", manager: "Elza Kantarxhiu", batch: 1, status: "Completed", priority: "Market Request", region: "Central", startDate: "12/11/2020" },
    { id: 4, name: "Towerln - Ticket nr. 27", manager: "Elza Kantarxhiu", batch: 1, status: "Completed", priority: "Market Request", region: "Central", startDate: "12/11/2020" },
    { id: 5, name: "Wellstar Hairpin in ATL", manager: "Drin Gjonbalaj", batch: 1, status: "Completed", priority: "Market Request", region: "Central", startDate: "12/11/2020" },
    { id: 6, name: "Woodbury.pa", manager: "Elza Kantarxhiu", batch: 12, status: "Completed", priority: "POR", region: "Northeast", startDate: "12/24/2020" },
    { id: 7, name: "Atlanticcity.pa", manager: "Elza Kantarxhiu", batch: 9, status: "Completed", priority: "POR", region: "Northeast", startDate: "12/21/2020" },
    { id: 8, name: "Area4 - Ticket nr. 31", manager: "Elza Kantarxhiu", batch: 1, status: "Completed", priority: "Market Request", region: "Central", startDate: "12/18/2020" },
    { id: 9, name: "Granby #30", manager: "Ibrahim Murati", batch: 1, status: "Completed", priority: "POR", region: "West", startDate: "12/12/2020" },
    { id: 10, name: "d2lithonia.ga", manager: "Drilon Kameri", batch: 5, status: "Completed", priority: "POR", region: "Central", startDate: "12/30/2020" },
    { id: 11, name: "Brooklyn_NY", manager: "Arben Selmani", batch: 2, status: "In Progress", priority: "Market Request", region: "Northeast", startDate: "01/05/2021" },
    { id: 12, name: "Sunset Blvd - Ticket nr. 45", manager: "Elza Kantarxhiu", batch: 4, status: "Completed", priority: "POR", region: "West", startDate: "02/10/2021" },
    { id: 13, name: "Downtown Miami - Area 6", manager: "Drin Gjonbalaj", batch: 3, status: "Pending", priority: "Market Request", region: "Southeast", startDate: "03/22/2021" },
    { id: 14, name: "Lincoln Park - Expansion", manager: "Ibrahim Murati", batch: 2, status: "Completed", priority: "POR", region: "Midwest", startDate: "04/14/2021" },
    { id: 15, name: "Boston Financial District", manager: "Drilon Kameri", batch: 5, status: "In Progress", priority: "Market Request", region: "Northeast", startDate: "05/07/2021" },
    { id: 16, name: "Austin Tech Hub", manager: "Elza Kantarxhiu", batch: 7, status: "Completed", priority: "POR", region: "South", startDate: "06/18/2021" },
    { id: 17, name: "Silicon Valley Expansion", manager: "Drin Gjonbalaj", batch: 6, status: "Pending", priority: "Market Request", region: "West", startDate: "07/25/2021" },
    { id: 18, name: "Phoenix Metro Area", manager: "Arben Selmani", batch: 3, status: "Completed", priority: "POR", region: "West", startDate: "08/12/2021" },
    { id: 19, name: "Denver Downtown", manager: "Ibrahim Murati", batch: 2, status: "Completed", priority: "Market Request", region: "Central", startDate: "09/05/2021" },
    { id: 20, name: "Seattle Waterfront", manager: "Drilon Kameri", batch: 4, status: "In Progress", priority: "POR", region: "Northwest", startDate: "10/10/2021" },
    { id: 21, name: "Boston Financial District", manager: "Drilon Kameri", batch: 5, status: "In Progress", priority: "Market Request", region: "Northeast", startDate: "05/07/2021" },
    { id: 22, name: "Austin Tech Hub", manager: "Elza Kantarxhiu", batch: 7, status: "Completed", priority: "POR", region: "South", startDate: "06/18/2021" },
    { id: 23, name: "Silicon Valley Expansion", manager: "Drin Gjonbalaj", batch: 6, status: "Pending", priority: "Market Request", region: "West", startDate: "07/25/2021" },
    { id: 24, name: "Phoenix Metro Area", manager: "Arben Selmani", batch: 3, status: "Completed", priority: "POR", region: "West", startDate: "08/12/2021" },
    { id: 25, name: "Denver Downtown", manager: "Ibrahim Murati", batch: 2, status: "Completed", priority: "Market Request", region: "Central", startDate: "09/05/2021" },
    { id: 26, name: "Seattle Waterfront", manager: "Drilon Kameri", batch: 4, status: "In Progress", priority: "POR", region: "Northwest", startDate: "10/10/2021" }
];

function ProjectTable() {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredTable, setFilteredTable] = useState(PROJECT_DATA);
    const [projects, setProjects] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
   
    const handleSearch = (e) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);
        const filtered = PROJECT_DATA.filter(
            (data) => data.name.toLowerCase().includes(term) || data.manager.toLowerCase().includes(term)
        );
        setFilteredTable(filtered);
        setCurrentPage(1);
    };

    const handleDelete = async (id) => {
        try {
            await deleteProject(id);
            getProjects();
        } catch (error) {
            console.log("Error deleting project", error)
        }
    }


    const getProjects = async () => {
        const response = await fetchProjects(); 
        setProjects(response.data);
    };

    useEffect(() => {
        getProjects();
    },[]);

    const totalPages = Math.ceil(filteredTable.length / itemsPerPage);
    const currentItems = filteredTable.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <div className="projects-container">
            <h2 className="projects-title">Projects</h2>
            <div className="search-wrapper">
                <input
                    type="text"
                    placeholder="Search projects..."
                    className="search-input"
                    onChange={handleSearch}
                    value={searchTerm}
                />
                <CiSearch className="search-icon" />
            </div>
            <div className="table-container">
                <table className="custom-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Project Name</th>
                            <th>Project Menager</th>
                            <th>Friendly Name</th>
                            <th>Project Status</th>
                            <th>Project Priority</th>
                            <th>Division</th>
                            <th>Start Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects?.map((product) => (
                            <tr key={product.id}>
                                <td className='product-info'>{product.id}</td>
                                <td>{product.friendly_name}</td>
                                <td>{product.project_manager}</td>
                                <td>{product.fqdn}</td>
                                <td>{product.edp_status}</td>
                                <td>{product.priority}</td>
                                <td>{product.division}</td>
                                <td>{product.start_date_edp}</td>
                                <td className="action-buttons">
                                    <button className="edit-btn">
                                        <FaRegEdit size={18} />
                                    </button>
                                    <button className="delete-btn" onClick= {()=> handleDelete(product.id)}>
                                        <RiDeleteBin5Line size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* {totalPages > 1 && (
                <div className="pagination">
                    <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage <= 1}>
                        &laquo;
                    </button>
                    {[...Array(totalPages)].map((_, index) => (
                        <button
                            key={index + 1}
                            onClick={() => setCurrentPage(index + 1)}
                            className={currentPage === index + 1 ? "active" : ""}
                        >
                            {index + 1}
                        </button>
                    ))}
                    <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage >= totalPages}>
                        &raquo;
                    </button>
                </div>
            )} */}
        </div>
    );
}

export default ProjectTable;



