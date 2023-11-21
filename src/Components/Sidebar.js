import React from 'react';
import '../Styles/Sidebar.css';

import { Link } from 'react-router-dom';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import SchoolIcon from '@mui/icons-material/School';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import FluorescentIcon from '@mui/icons-material/Fluorescent';

function Sidebar() {
  return (
    <div className='sidebar'>
      <li ><AccountCircleIcon/> <Link to ="/studentprofile" className='textName'>Personal Information</Link></li>
      <li ><SchoolIcon/> <Link to ="/maineducation" className='textName'>Education</Link></li>
      <li ><EmojiEventsIcon/> <Link to ="/achievements" className='textName'>Achivements</Link></li>
      <li ><WorkHistoryIcon/> <Link to ="/mainexperience" className='textName'>Experience</Link></li>
      <li ><HistoryEduIcon/> <Link to ="/activities" className='textName'>Co-Curriculum</Link></li>
      <li ><DeveloperBoardIcon/> <Link to ="/projects" className='textName'>Project</Link></li>
      <li ><FluorescentIcon/> <Link to ="/skills" className='textName'>Skills</Link></li>
    </div>
  )
}

export default Sidebar

