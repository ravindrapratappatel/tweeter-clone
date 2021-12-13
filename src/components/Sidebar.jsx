import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from "./SidebarOption";
import ExploreIcon from '@mui/icons-material/Explore';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from "@mui/material";
import './Sidebar.css';
function Sidebar() {
  return (
    <div className="sidebar">
      {/* Twitter Icon*/}
      <TwitterIcon className="sidebar__twitterIcon" />
      <SidebarOption active Icon={HomeIcon} text="Home" />
      <SidebarOption Icon={ExploreIcon} text="Explore" />
      <SidebarOption Icon={NotificationAddIcon} text="Notification" />
      <SidebarOption Icon={MailOutlineIcon} text="Message" />
      <SidebarOption Icon={BookmarkBorderIcon} text="Bookmark" />
      <SidebarOption Icon={ListAltIcon} text="List" />
      <SidebarOption Icon={PermIdentityIcon} text="Profile" />
      <SidebarOption Icon={MoreHorizIcon} text="More" />
     
      
      {/*SidebarOption */}
      <Button variant="outlined" className="sidebar__tweet" fullWidth> Tweet</Button>
    </div>
  );
}

export default Sidebar;
