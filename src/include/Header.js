import React from 'react'
import "./Header.css";
import { CiSearch, CiBellOn } from "react-icons/ci";
import { FaRegBookmark } from "react-icons/fa";

const Header = () => {
  return (
    <header className='header'>
    <FaRegBookmark className='bookmark' />
    <div className='header-right'>
    <CiSearch className='icons' />
    <div className='bell-container'>
    <CiBellOn id='bell' className='icons'/>
    <span className='notification-badge'>15</span>
    </div>
    <div className='user-info'>
        <span className='user-name'>Endrit Musliu</span>
        <div className='user-avatar'>EM</div>
    </div>
    </div>
    </header>
  )
}

export default Header