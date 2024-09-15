import React from 'react'
import {useState} from 'react'
import {ProSidebar, Menu, MenuItem} from 'react-pro-sidebar'
import 'react-pro-sidebar/dist/css/styles.css'
import {Box, Icon, IconButton, Typography, useTheme} from '@mui/material'
import {Link } from 'react-router-dom'
import {tokens} from '../../themes';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined'
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined'
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined'
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined'
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined'
import PieChartOutlinedIcon from '@mui/icons-material/PieChartOutlined'
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import MapOutlinedIcon from '@mui/icons-material/MapOutlined'
import profileImg from '../../assets/user.png'

const Item = ({title, to, icon, selected, setSelected}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem active={selected === title} style ={{color:colors.grey[100]}} onClick = {()=> setSelected(title)} icon = {icon} > 
      <Typography >
        {title}
      </Typography>
      <Link to = {to}></Link>
      
    </MenuItem>
  )
}

const Sidebar = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [selected, setSelected] = useState("Dashboard")
  return (
    <Box sx={{
      height: '150%',
        display: 'flex',
      "& .pro-sidebar-inner" : {
        background: `${colors.primary[400]} !important`,
        overflowY: 'auto'
      },
      "& .pro-icon-wrapper" : {
        backgroundColor: 'transparent !important'
      }, 
      "& .pro-inner-item" : {
        padding: "5px 35px 5px 20px !important "
      },
      "& .pro-inner-item:hover" : {
        color: "#868dfb !important "
      },
      "&. pro-menu-item-active.active" : {
        color: '#6870fa !important'
      },
    
    }} >
      <ProSidebar  collapsed = {isCollapsed}>
        <Menu iconShape='square'>
          {/* Logo and Menu Icon */}
          <MenuItem onClick={() => setIsCollapsed(!isCollapsed)} icon = {isCollapsed ? <MenuOutlinedIcon /> : undefined}
          style={{
            margin: "20px 0 20px 0",
            color: colors.grey[100]
          }}>
              {!isCollapsed && (
                <Box display= 'flex' justifyContent= 'space-between' alignItems= 'center' ml= '15px'>
                  <Typography variant='h3' color={colors.grey[100]}>
                      PANELX
                  </Typography>
                  <IconButton onClick={() => setIsCollapsed(!isCollapsed)} >
                    <MenuOutlinedIcon/>
                  </IconButton>
                </Box>
              )}
          </MenuItem>

          {/* USER */}
          {!isCollapsed && (
            <Box mb= '20px'>
              <Box display= 'flex' justifyContent='center' alignItems= 'center'>
                <img src= {profileImg} alt="profile-user"
                width= '80px' height= '80px'
                style={{cursor: 'pointer', borderRadius: '50%'}} />
              </Box>

              <Box textAlign={'center'}>
                <Typography variant='h3' color={colors.grey[100]} fontWeight={'bold'} sx={{mt: '10px', mb: '2px'}} >
                  James Langley
                </Typography>
                 <Typography variant='h5' color={colors.greenAccent[500]} sx={{marginTop: '10px'}}>
                  VP Rich Foods
                </Typography>
              </Box>
            </Box>
          )}

          {/* Menu Items  */}
          <Box paddingLeft={isCollapsed ? undefined : '10%'}>
              <Item 
              title= 'Dashboard'
              to = "/"
              icon={<HomeOutlinedIcon/>}
              selected={selected}
              setSelected={setSelected}
              />
              <Typography variant='h6' color={colors.grey} sx={{m: '15px 0 10px 20px'}}>Data</Typography>
              <Item 
              title= 'Manage Team'
              to = "/team"
              icon={<PeopleOutlinedIcon/>}
              selected={selected}
              setSelected={setSelected}
              />
              <Item 
              title= 'Contacts Info'
              to = "/contacts"
              icon={<ContactsOutlinedIcon/>}
              selected={selected}
              setSelected={setSelected}
              />
              <Item 
              title= 'Invoices'
              to = "/invoices"
              icon={<ReceiptOutlinedIcon/>}
              selected={selected}
              setSelected={setSelected}
              />
               <Typography variant='h6' color={colors.grey} sx={{m: '15px 0 10px 20px'}}>Pages</Typography>
              
              <Item 
              title= 'Profile Form'
              to = "/form"
              icon={<PersonOutlinedIcon/>}
              selected={selected}
              setSelected={setSelected}
              />
              <Item 
              title= 'Calendar'
              to = "/calendar"
              icon={<CalendarTodayOutlinedIcon/>}
              selected={selected}
              setSelected={setSelected}
              />
              <Item 
              title= 'FAQ Page'
              to = "/faq"
              icon={<HelpOutlinedIcon/>}
              selected={selected}
              setSelected={setSelected}
              />
               <Typography variant='h6' color={colors.grey} sx={{m: '15px 0 10px 20px'}}>Charts</Typography>
              
              <Item 
              title= 'Bar Chart'
              to = "/bar"
              icon={<BarChartOutlinedIcon/>}
              selected={selected}
              setSelected={setSelected}
              />
              <Item 
              title= '  Pie Chart'
              to = "/pie"
              icon={<PieChartOutlinedIcon/>}
              selected={selected}
              setSelected={setSelected}
              />
              <Item 
              title= 'Line Chart'
              to = "/line"
              icon={<TimelineOutlinedIcon/>}
              selected={selected}
              setSelected={setSelected}
              />
              <Item 
              title= 'Geography Chart'
              to = "/geography"
              icon={<MapOutlinedIcon/>}
              selected={selected}
              setSelected={setSelected}
              />

          </Box>
        </Menu>
      </ProSidebar>


    </Box>
  )
}

export default Sidebar