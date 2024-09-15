import React from 'react';
import { Box, Typography } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { tokens } from '../../themes';
import { mockDataInvoices } from '../../data/mockData';
import Header from '../../components/Header';
import { useTheme } from '@mui/material';

const invoices = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        { field: 'id', headerName: 'ID'},
        { field: 'name', headerName: 'Name', flex: 1, cellClassName: 'name-column--cell' },
        { field: 'phone', headerName: 'Phone number', flex: 1 },
        { field: 'email', headerName: 'Email', flex: 1 },
        { field: 'cost', headerName: 'Cost', flex: 1, renderCell: (params) => (
            <Typography color = {colors.greenAccent[500]} sx={{m: '15px 0'}}>
                ${params.row.cost}
            </Typography>
        ) },
       {field: "date",
        headerName: "Date",
        flex: 1
       }
    ];

    return (
        <Box m={'25px'}>
            <Header title="Invoices" subtitle="List of Invoice Balances" />
            <Box
                m="20px 0 0 0"
                height="75vh"
                sx={{
                    '& .MuiDataGrid-root': {
                        border: 'none',
                    },
                    '& .MuiDataGrid-cell': {
                        border: 'none',
                    },
                    '& .name-column--cell': {
                        color: colors.greenAccent[300],
                    },
                    '& .MuiDataGrid-columnHeaders': {
                        backgroundColor: colors.blueAccent[700],
                        borderBottom: 'none',
                    },
                    '& .MuiDataGrid-virtualScroller': {
                        backgroundColor: colors.primary[400],
                    },
                    '& .MuiDataGrid-footerContainer': {
                        backgroundColor: colors.blueAccent[700],
                        borderTop: 'none',
                    },
                    "& .MuiDataGrid-checkboxInput" : {
                        color: `${colors.greenAccent[400]} !important`
                    }
                   
                }}
            >
                <DataGrid 
                    checkboxSelection
                    
                    // color= {colors.greenAccent[400]}
                    rows={mockDataInvoices}
                    columns={columns}
                    components={{ Toolbar: GridToolbar }}
                />
            </Box>
        </Box>
    );
};

export default invoices;
