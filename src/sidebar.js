import React from "react";
import './Sidebar.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import SidebarOption from './SidebarOption.js';


function Sidebar() {
  return (
    <div className="sidebar">
    {/*Twitter Icon*/}
    <TwitterIcon />

    {/* Sidebar Option*/}
    <SidebarOption />
    {/* Sidebar Option*/}
    <SidebarOption />
    {/* Sidebar Option*/}
    <SidebarOption />
    {/* Sidebar Option*/}
    <SidebarOption />



    {/* Button -> Tweet */}

    </div>
  );

}

export default Sidebar;
