import React from 'react'
import { Box, Button, IconButton, Typography, useTheme } from '@mui/material'
import { tokens } from '../../themes'
import { mockTransactions } from '../../data/mockData'
import Header from '../../components/Header'
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined'
import EmailIcon from '@mui/icons-material/Email'
import PointOfSaleIcon from '@mui/icons-material/PointOfSale'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import TrafficIcon from '@mui/icons-material/Traffic'
import LineGraph from '../../components/LineGraph'
import BarChart from '../../components/BarChart'
import PieChart from '../../components/PieChart'
import GeoChart from '../../components/GeoChart'
import StatBox from '../../components/StatBox'
import ProgressCircle from '../../components/ProgressCircle'


const dashboard = () => {
      const theme = useTheme()
      const colors = tokens(theme.palette.mode)
  return (
    <Box m ='20px'>
      <Box display = "flex" justifyContent={'space-between'} alignItems={'center'}>
        <Header title ='DASHBOARD' subtitle = 'Welcome to your Dashboard'/>
     
      
      <Box>
        <Button sx={{backgroundColor: colors.blueAccent[700],
          color: colors.grey[100],
          fontSize:'14px',
          fontWeight: 'bold',
          padding: '10px 20px'
        }}>
            <DownloadOutlinedIcon sx={{mr: '10px'}} />
            Download Reports
        </Button>
      </Box>
     </Box>

      {/* Grid & CHARTS*/}
      <Box display={'grid'} gridTemplateColumns={'repeat(12, 1fr)'} gridAutoRows = '140px' gap={'20px'}>

        {/* Row 1 */}
        <Box gridColumn={'span 3'} backgroundColor = {colors.primary[400]} display={'flex'} alignItems={'center'} justifyContent={'center'}>
          <StatBox title='12,361' subtitle = 'Emails Sent' progress= '0.75' increase={'+14%'} icon={<EmailIcon sx={{color: colors.greenAccent[600], fontSize: '26px'}}/>} />

        </Box>

         <Box gridColumn={'span 3'} backgroundColor = {colors.primary[400]} display={'flex'} alignItems={'center'} justifyContent={'center'}>
          <StatBox title='450,225' subtitle = 'Sales Obtained' progress= '0.75' increase={'+26%'} icon={<PointOfSaleIcon sx={{color: colors.greenAccent[600], fontSize: '26px'}}/>} />

        </Box>

        <Box gridColumn={'span 3'} backgroundColor = {colors.primary[400]} display={'flex'} alignItems={'center'} justifyContent={'center'}>
          <StatBox title='40,902' subtitle = 'New Clients' progress= '0.6' increase={'+26%'} icon={<PersonAddIcon sx={{color: colors.greenAccent[600], fontSize: '26px'}}/>} />

        </Box>

        <Box gridColumn={'span 3'} backgroundColor = {colors.primary[400]} display={'flex'} alignItems={'center'} justifyContent={'center'}>
          <StatBox title='1,350,625' subtitle = 'Traffic Inbound' progress= '0.80' increase={'+43%'} icon={<TrafficIcon sx={{color: colors.greenAccent[600], fontSize: '26px'}}/>} />

        </Box>

        {/* Row 2 */}
      <Box gridColumn={'span 8'} gridRow={'span 2'} backgroundColor = {colors.primary[400]} >
          <Box mt={'25px'} p={'0 30px'}
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}>
            <Box>
              <Typography variant='h5' fontWeight={'600'} color = {colors.grey[100]}>
                Revenue Generated
              </Typography>
               <Typography variant='h3' fontWeight={'bold'} color = {colors.greenAccent[500]}>
                $59,900.20
              </Typography>
            </Box>

            <Box>
              <IconButton>
                <DownloadOutlinedIcon sx={{fontSize:'26px', color: colors.greenAccent[500]}} />
              </IconButton>
            </Box>
          </Box>

          <Box height={'250px'} mt={'-20px'}>
            <LineGraph isDashboard = {true} />
          </Box>
        </Box>

          {/* TRANSACTIONS */}
          <Box gridColumn={'span 4'} gridRow={'span 2'} backgroundColor = {colors.primary[400]} overflow={'auto'}>
              <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} borderBottom={`4px solid ${colors.primary[500]}`} color={colors.grey[100]} p={'15px'}>
                <Typography color={colors.grey[100]} variant='h5' fontWeight={'600'}>
                  Recent Transactions
                </Typography>
              </Box>

              {mockTransactions.map((transaction, index) => (
                
                <Box
                  key={`${transaction.txId}-${index}`}
                  display={'flex'}
                  justifyContent={'space-between'}
                  alignItems={'center'}
                  borderBottom={`4px solid ${colors.primary[500]}`}
                  p={'15px'}
                >
                  <Box>
                    <Typography color={colors.greenAccent[500]} variant='h5' fontWeight={'600'}>
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}  fontWeight={'600'}>
                  {transaction.user}
                </Typography>


                  </Box>
                  <Box color={colors.grey[100]}>{transaction.date}</Box>
                  <Box backgroundColor = {colors.greenAccent[500]} p={'5px 10px'} borderRadius={'4px'}>
                      ${transaction.cost}
                  </Box>
                </Box>
              ))}
              
          </Box>

          {/* Row 3 */}
          <Box gridColumn={'span 4'} gridRow = {'span 2'} backgroundColor= {colors.primary[400]} p={'30px'} >
            <Typography variant='h5' fontWeight={'600'}>
              Campaign
            </Typography>
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'25px'}>
              <ProgressCircle size='125' />
              <Typography variant='h5' color={colors.greenAccent[500]} sx={{mt: '15px'}}>
                $48,500 revenue generated
              </Typography>
              <Typography>
              Includes extra miscellanous expenditures
            </Typography>

            </Box>

          </Box>

          <Box gridColumn={'span 4'} gridRow = {'span 2'} backgroundColor= {colors.primary[400]}  >
            <Typography variant='h5' fontWeight={'600'}sx={{p: '30px 30px 0 30px '}}>
              Sales Quantity
            </Typography>
            <Box height={'250px'} mt={'-20px'}>
              <BarChart  isDashboard = {true}/>

            </Box>

          </Box>

          <Box gridColumn={'span 4'} gridRow = {'span 2'} backgroundColor= {colors.primary[400]} p={'30px'} >
            <Typography variant='h5' fontWeight={'600'}sx={{mb: '15px'}}>
              Geography Based Traffic
            </Typography>
            <Box height={'200px'} mt={'-10px'}>
              <GeoChart  isDashboard = {true}/>

            </Box>

          </Box>

          {/*  */}
        </Box>

      </Box>
    
  )
}

export default dashboard