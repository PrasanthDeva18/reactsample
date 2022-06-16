import "./sidebar.scss";
//import DashboardIcon from '@mui/icons-material/Dashboard';
//import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
//import StoreIcon from '@mui/icons-material/Store';

const Sidebar = () =>
{
    return (
        <div class="sidebar">
            <div className="top">
                <div class="logo">Prasanth</div>
            </div>
            <hr/>
            <div className="center">
                <ul>
                    <li>
                        {/* <DashboardIcon/>  */}
                        <span>Dashboard</span></li>
                </ul>
                <ul>
                    
                    <li>
                    {/* <PersonOutlineOutlinedIcon /> */}
                        <span>Users</span></li>
                </ul>
                <ul>
                    <li>
                        {/* <StoreIcon/> */}
                        <span>Products</span></li>
                </ul>
                <ul>
                    <li><span>Orders</span></li>
                </ul>
                <ul>
                    <li><span>Delivery</span></li>
                </ul>
                <ul>
                    <li><span>Stats</span></li>
                </ul>
                <ul>
                    <li><span>Notification</span></li>
                </ul>
                <ul>
                    <li><span>System Health</span></li>
                </ul>
                <ul>
                    <li><span>Logs</span></li>
                </ul>
                <ul>
                    <li><span>Settings</span></li>
                </ul>
                <ul>
                    <li><span>Orders</span></li>
                </ul>
                 <ul>
                    <li><span>Profile</span></li>
                </ul>
                <ul>
                    <li><span>Logout</span></li>
                </ul>

            </div>
            <div className="bottom">color options</div>
        </div>
    )
}

export default Sidebar;