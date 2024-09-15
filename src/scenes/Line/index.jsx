import React from 'react'
import Header from '../../components/Header'
import LineGraph from '../../components/LineGraph'
import {Box} from '@mui/material'

const Line = () => {
  return (
    <Box m= "20px">
        <Header title={'Line Chart'}  subtitle={'Simple Line Graph'} />
        <Box height = '75vh'>
            <LineGraph />
        </Box>
       
    </Box>
  )
}

export default Line