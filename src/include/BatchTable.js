import React, { useEffect, useState } from 'react'
import { CiSearch } from 'react-icons/ci';
import { FaRegEdit } from 'react-icons/fa';
import { RiDeleteBin5Line } from 'react-icons/ri';
import "./BatchTable.css"
import { fatchBatches, deleteBatch, fetchBatch, saveBatch } from "../services/batchServices.js"
import { fetchProjects, saveProject } from '../services/projectServices.js';


const BATCH_DATA = [
    { id: 1, batchName: "Wellstar Hairpin in ATL", friendlyName: "Wellstar Hairpin in ATL", status: "Completed", migrationDate: "01/08/2021", openCMDate: "12/29/2020", CPEElimination: true, NoBom: false, Tentative: false, CenturyLink_Level3: false, HasRelp: true, HasRelpWithTrunk: false, HasTrunk: false, HasMux: false, batchPorts: 2 },
    { id: 2, batchName: "22ndst - Ticket nr. 26", friendlyName: "22ndst - Ticket nr. 26", status: "Completed", migrationDate: "01/20/2021", openCMDate: "01/08/2021", CPEElimination: false, NoBom: false, Tentative: false, CenturyLink_Level3: false, HasRelp: false, HasRelpWithTrunk: false, HasTrunk: false, HasMux: false, batchPorts: 1 },
    { id: 3, batchName: "Towerln - Ticket nr. 27", friendlyName: "Towerln - Ticket nr. 27", status: "Completed", migrationDate: "01/20/2021", openCMDate: "01/08/2021", CPEElimination: false, NoBom: false, Tentative: false, CenturyLink_Level3: false, HasRelp: true, HasRelpWithTrunk: false, HasTrunk: false, HasMux: false, batchPorts: 2 },
    { id: 4, batchName: "Springrd - Ticket nr. 28", friendlyName: "Springrd - Ticket nr. 28", status: "Completed", migrationDate: "01/20/2021", openCMDate: "01/08/2021", CPEElimination: false, NoBom: false, Tentative: false, CenturyLink_Level3: false, HasRelp: true, HasRelpWithTrunk: false, HasTrunk: false, HasMux: false, batchPorts: 1 },
    { id: 5, batchName: "Area4 - Ticket nr. 31", friendlyName: "Area4 - Ticket nr. 31", status: "Completed", migrationDate: "01/07/2021", openCMDate: "12/23/2020", CPEElimination: false, NoBom: false, Tentative: true, CenturyLink_Level3: false, HasRelp: false, HasRelpWithTrunk: false, HasTrunk: false, HasMux: false, batchPorts: 6 },
    { id: 6, batchName: "Granby #30", friendlyName: "Granby #30", status: "Completed", migrationDate: "06/10/2021", openCMDate: "05/28/2021", CPEElimination: false, NoBom: false, Tentative: false, CenturyLink_Level3: false, HasRelp: false, HasRelpWithTrunk: false, HasTrunk: false, HasMux: false, batchPorts: 10 },
    { id: 7, batchName: "sur10.northave_Slot#2", friendlyName: "sur10.northave_Slot4", status: "Completed", migrationDate: "08/23/2018", openCMDate: "08/08/2018", CPEElimination: false, NoBom: false, Tentative: false, CenturyLink_Level3: true, HasRelp: false, HasRelpWithTrunk: false, HasTrunk: false, HasMux: false, batchPorts: 15 },
    { id: 8, batchName: "sur10.northave_Slot#3", friendlyName: "sur10.northave_Slot4", status: "Completed", migrationDate: "08/24/2018", openCMDate: "08/14/2018", CPEElimination: false, NoBom: false, Tentative: false, CenturyLink_Level3: false, HasRelp: false, HasRelpWithTrunk: true, HasTrunk: false, HasMux: false, batchPorts: 16 },
    { id: 9, batchName: "Boston_Dover#1", friendlyName: "Boston_Dover", status: "Migrated", migrationDate: "09/20/2019", openCMDate: "09/10/2019", CPEElimination: false, NoBom: false, Tentative: false, CenturyLink_Level3: false, HasRelp: false, HasRelpWithTrunk: false, HasTrunk: false, HasMux: false, batchPorts: 6 },
    { id: 10, batchName: "Foster#1", friendlyName: "Foster", status: "Completed", migrationDate: "07/30/2019", openCMDate: "07/19/2019", CPEElimination: false, NoBom: false, Tentative: false, CenturyLink_Level3: false, HasRelp: false, HasRelpWithTrunk: false, HasTrunk: false, HasMux: true, batchPorts: 20 }
  ];

function BatchTable() {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredTable, setFilteredTable] = useState(BATCH_DATA);
    const [batches, setBatches] = useState([]);
    const [projects,setProjects] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
  
    const handleSearch = (e) => {
      const term = e.target.value.toLowerCase();
      setSearchTerm(term);
      const filtered = BATCH_DATA.filter((data) =>
        data.batchName.toLowerCase().includes(term)
      );
      setFilteredTable(filtered);
      setCurrentPage(1);
    };

      const handleDelete = async (id) => {
            try {
                await deleteBatch(id);
                getBatches();
            } catch (error) {
                console.log("Error deleting batches", error)
            }
        }

        const getBatches = async () => {
          const response = await fatchBatches();
          setBatches(response.data); 
      };

       const getProjects = async () => {
              const response = await fetchProjects(); 
              setProjects(response);
          };
    
    useEffect(() => {
      getBatches();
  }, []);

    const totalPages = Math.ceil(filteredTable.length / itemsPerPage);
    const currentItems = filteredTable.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );

  return (
    <div className="batch-container">
      <h2 className="batch-title">Batches</h2>
      <div className="search-wrapper">
        <input
          type="text"
          placeholder="Search by Batch Name..."
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
              <th>Batch Number</th>
              <th>Total Ports</th>
              <th>Uplinks</th>
              <th>Migration Date</th>
              <th>Open CM Date</th>
              <th>CPE</th>
              <th>NoBOM</th>
              <th>Tentative</th>
              <th>CenturyLink</th>
              <th>Relp</th>
              <th>Relp+Trunk</th>
              <th>no_boom</th>
              <th>Confirmed Date</th>
              <th>Notes</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {batches?.map((batch) => (
              <tr key={batch.id}>
                <td className="batch-info">{batch.id}</td>
                <td className="batch-name">{batch.batch_number}</td>
                <td>{batch.total_ports}</td>
                <td>{batch.uplinks_physical}</td>
                <td>{batch.target_date}</td>
                <td>{batch.metro_e_sur_physical}</td>
                <td>{batch.mux ? <input type="checkbox" checked/> : <input type="checkbox" /> }</td>
                <td>{batch.re_ip ? <input type="checkbox" checked/> : <input type="checkbox" />}</td>
                <td>{batch.re_ip_with_trunk ? <input type="checkbox" checked/> : <input type="checkbox" />}</td>
                <td>{batch.trunk ? <input type="checkbox" checked/> : <input type="checkbox" />}</td>
                <td>{batch.century_link_lvl3 ? <input type="checkbox" checked/> : <input type="checkbox" />}</td>
                <td>{batch.resources}</td>
                <td>{batch.no_boom}</td>
                <td>{batch.target_date}</td>
                <td>{batch.notes}</td>
               
                <td>{batch.batchPorts}</td>
                <td className="action-buttons">
                  <button className="edit-btn">
                    <FaRegEdit size={18} />
                  </button>
                  <button className="delete-btn" onClick= {()=> handleDelete(batch.id)}>
                    <RiDeleteBin5Line size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {totalPages > 1 && (
        <div className="pagination">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage <= 1}
          >
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
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage >= totalPages}
          >
            &raquo;
          </button>
        </div>
      )}
    </div>
  )
}

export default BatchTable