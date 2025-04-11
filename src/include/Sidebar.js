import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { RxCube } from "react-icons/rx";
import { PiCube } from "react-icons/pi";
import { FiAlertTriangle } from "react-icons/fi";
import { FaRegDotCircle } from "react-icons/fa";
import { CiMap } from "react-icons/ci";
import { TfiReload } from "react-icons/tfi";
import { BsListTask } from "react-icons/bs";
import { CiCalendar } from "react-icons/ci";
import { PiSquaresFour } from "react-icons/pi";
import { FaRegFile } from "react-icons/fa";
import { LuUsers } from "react-icons/lu";
import { RiEmotionHappyLine } from "react-icons/ri";
import { CiCircleQuestion } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { FaRegCircleStop } from "react-icons/fa6";
import logo1 from "../assets/images/logo-1.png"
import "./Sidebar.css"

const Sidebar = () => {
    const location = useLocation();
    const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };
  return (
    <div className="sidebar p-2">
        <div className="logo m-1">
        <img className="comcast" src={logo1} alt="logo"/>
          <Link
          to="/dashboard"
          className={`dashboard-link ${
            location.pathname === "/dashboard" ? "active-link" : ""
          }`}
        >
          Comcast
        </Link>{" "}
        <p className="p-text">tool</p>
        <FaRegDotCircle className="dot-circle" />
        </div>
        <div className="list-group list-group-flush">
        <Link
          to="/"
          id="d-text"
          className={`list-group-item py-2 rounded ${
            location.pathname === "/" ? "active-link" : ""
          }`}
        >
          <MdOutlineSpaceDashboard className="fs-5 me-3" /> <span>Dashboard</span>
        </Link>

        <div className="dropdown">
        <button 
        className="list-group-item py-2 rounded dropdown-toggle" 
        onClick={() => toggleDropdown("projects")}
        aria-expanded={openDropdown === "projects"}
        >
       <RxCube className="fs-5 me-3" /> <span>Project</span>
       </button>
          <div className={`dropdown-menu ${openDropdown === "projects" ? "show" : ""}`}>
            <Link to="/project/projects" className="dropdown-item">Projects</Link>
            <Link to="/project/completed" className="dropdown-item">Completed</Link>
            <Link to="/project/deleted" className="dropdown-item">Deleted</Link>
          </div>
        </div>

        <div className="dropdown">
        <button 
        className="list-group-item py-2 rounded dropdown-toggle" 
        onClick={() => toggleDropdown("batch")}
        aria-expanded={openDropdown === "batch"}
        >
       <PiCube className="fs-5 me-3" /> <span>Batch</span>
       </button>
          <div className={`dropdown-menu ${openDropdown === "batch" ? "show" : ""}`}>
            <Link to="/batch/batches" className="dropdown-item">Batches</Link>
            <Link to="/batch/completed" className="dropdown-item">Completed</Link>
            <Link to="/batch/deleted" className="dropdown-item">Deleted</Link>
          </div>
        </div>

        <div className="dropdown">
        <button 
        className="list-group-item py-2 rounded dropdown-toggle" 
        onClick={() => toggleDropdown("sr")}
        aria-expanded={openDropdown === "sr"}
        >
       <FiAlertTriangle className="fs-5 me-3" /> <span>SR</span>
       </button>
          <div className={`dropdown-menu ${openDropdown === "sr" ? "show" : ""}`}>
            <Link to="/sr/srs" className="dropdown-item">SRs</Link>
            <Link to="/sr/completed" className="dropdown-item">Completed</Link>
            <Link to="/sr/deleted" className="dropdown-item">Deleted</Link>
          </div>
        </div>

        <div className="dropdown">
        <button 
        className="list-group-item py-2 rounded dropdown-toggle" 
        onClick={() => toggleDropdown("trunk")}
        aria-expanded={openDropdown === "trunk"}
        >
       <FaRegCircleStop className="fs-5 me-3" /> <span>Trunk</span>
       </button>
          <div className={`dropdown-menu ${openDropdown === "trunk" ? "show" : ""}`}>
            <Link to="/trunk/trunks" className="dropdown-item">Trunks</Link>
            <Link to="/trunk/completed" className="dropdown-item">Completed</Link>
            <Link to="/trunk/deleted" className="dropdown-item">Deleted</Link>
          </div>
        </div>

        <div className="dropdown">
        <button 
        className="list-group-item py-2 rounded dropdown-toggle" 
        onClick={() => toggleDropdown("conversion-region")}
        aria-expanded={openDropdown === "conversion-region"}
        >
       <CiMap className="fs-5 me-3" /> <span>Conversion region</span>
       </button>
          <div className={`dropdown-menu ${openDropdown === "conversion-region" ? "show" : ""}`}>
            <Link to="/conversion-region/regions" className="dropdown-item">Regions</Link>
            <Link to="/conversion-region/deleted" className="dropdown-item">Deleted</Link>
          </div>
        </div>

        <div className="dropdown">
        <button 
        className="list-group-item py-2 rounded dropdown-toggle" 
        onClick={() => toggleDropdown("conversion")}
        aria-expanded={openDropdown === "conversion"}
        >
       <TfiReload className="fs-5 me-3" /> <span>Conversion</span>
       </button>
          <div className={`dropdown-menu ${openDropdown === "conversion" ? "show" : ""}`}>
            <Link to="/conversion/conversions" className="dropdown-item">Conversions</Link>
            <Link to="/conversion/completed" className="dropdown-item">Completed</Link>
            <Link to="/conversion/deleted" className="dropdown-item">Deleted</Link>
          </div>
        </div>

        <div className="dropdown">
        <button 
        className="list-group-item py-2 rounded dropdown-toggle" 
        onClick={() => toggleDropdown("tasks")}
        aria-expanded={openDropdown === "tasks"}
        >
       <BsListTask className="fs-5 me-3" /> <span>Tasks</span>
       </button>
          <div className={`dropdown-menu ${openDropdown === "tasks" ? "show" : ""}`}>
            <Link to="/tasks/tasks" className="dropdown-item">All tasks</Link>
            <Link to="/tasks/completed" className="dropdown-item">Team tasks</Link>
          </div>
        </div>


        <Link
          to="/calendar"
          className={`list-group-item py-2 rounded ${
            location.pathname === "/calendar" ? "active-link" : ""
          }`}
        >
          <CiCalendar className="fs-5 me-3" /> <span>Calendar</span>
        </Link>

        <Link
          to="/tools"
          className={`list-group-item py-2 rounded ${
            location.pathname === "/tools" ? "active-link" : ""
          }`}
        >
          <PiSquaresFour className="fs-5 me-3" /> <span>Tools</span>
        </Link>

        <div className="dropdown">
        <button 
        className="list-group-item py-2 rounded dropdown-toggle" 
        onClick={() => toggleDropdown("export-menager")}
        aria-expanded={openDropdown === "export-menager"}
        >
       <FaRegFile className="fs-5 me-3" /> <span>Export Menager</span>
       </button>
          <div className={`dropdown-menu ${openDropdown === "export-menager" ? "show" : ""}`}>
            <Link to="/export-menagment/billing" className="dropdown-item">Billing</Link>
            <Link to="/export-menagment/admin-export" className="dropdown-item">Admin Export</Link>
            <Link to="/export-menagment/bom-jira-export" className="dropdown-item">Bom/Jira Export</Link>
            <Link to="/export-menagment/export-migration-log" className="dropdown-item">Export migration Log</Link>
            <Link to="/export-menagment/export-log-rollback" className="dropdown-item">Export port rollback</Link>
            <Link to="/export-menagment/export-batch-rewind" className="dropdown-item">Export batch rewind</Link>
            <Link to="/export-menagment/exported" className="dropdown-item">Exported</Link>
          </div>
        </div>

        <div className="dropdown">
        <button 
        className="list-group-item py-2 rounded dropdown-toggle" 
        onClick={() => toggleDropdown("user-menagment")}
       aria-expanded={openDropdown === "user-menagment"}
       >
      <LuUsers className="fs-5 me-3" /> <span>User menagment</span>
      </button>
       <div className={`dropdown-menu ${openDropdown === "user-menagment" ? "show" : ""}`}>
       <Link to="/user-menagment/users" className="dropdown-item">Users</Link>
       <Link to="/user-menagment/teams" className="dropdown-item">Teams</Link>
       <Link to="/user-menagment/roles" className="dropdown-item">Roles</Link>
      </div>
     </div>

        <Link
          to="/feedback"
          className={`list-group-item py-2 rounded ${
            location.pathname === "/feedback" ? "active-link" : ""
          }`}
        >
          <RiEmotionHappyLine className="fs-5 me-3" /> <span>Feedback</span>
        </Link>

        <Link
          to="/faq"
          className={`list-group-item py-2 rounded ${
            location.pathname === "/faq" ? "active-link" : ""
          }`}
        >
          <CiCircleQuestion className="fs-5 me-3" /> <span>FAQ</span>
        </Link>

        <div className="dropdown">
        <button 
        className="list-group-item py-2 rounded dropdown-toggle" 
        onClick={() => toggleDropdown("settings")}
        aria-expanded={openDropdown === "settings"}
        >
       <CiSettings className="fs-5 me-3" /> <span>Settings</span>
       </button>
          <div className={`dropdown-menu ${openDropdown === "settings" ? "show" : ""}`}>
            <Link to="/settings/general" className="dropdown-item">General</Link>
            <Link to="/settings/projects" className="dropdown-item">Projects</Link>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Sidebar