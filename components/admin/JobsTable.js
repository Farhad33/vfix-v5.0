import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { DataGrid } from '@mui/x-data-grid';
import TextField from "@mui/material/TextField";

export default function JobsTable({ jobs }) {
  

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'comp', headerName: 'Tech Comp', width: 100, renderCell: ({ row: {technicianRate, technicianRateMode} }) => {
      let rateAndSign = technicianRateMode === 'percentage' ? '% ' : 'H '
      rateAndSign += technicianRate
      return (<div>{rateAndSign}</div>)
    } },
    { field: 'serviceType', headerName: 'Service Type', width: 130 },
    { field: 'startEnd', headerName: 'Job Start/End/Date/Time', width: 145, renderCell: (params) => {
      return (
        <div>
          <div>{params.row.jobDate}</div>
          <div>{params.row.jobHour}</div>
        </div>
      )
    } },
    { field: 'totalHour', headerName: 'Total Hours Worked', width: 130 },
    { field: 'jobPrice', headerName: 'Final price of the job', width: 130 },
    { field: 'cash', headerName: 'Cash Received By Technician', width: 130, renderCell: ({row: {sideTech, cash}}) => {
      return sideTech.length ? <div>{cash}</div> : <GrayCell>{cash}</GrayCell>
    } },
    { field: 'reimbursement', headerName: 'Technician Reimbursment', width: 130, editable: true, renderCell: ({row: {sideTech, reimbursement}}) => {
      return sideTech.length ? <div>{reimbursement}</div> : <GrayCell>{reimbursement}</GrayCell>
    } },
    { field: 'sideTech', headerName: 'Side Technician', width: 130, editable: true },
    { field: 'finalPay', headerName: 'Technician Final Payout', width: 130 },
  ];

    return (
        <JobsContainer>
            <DataGrid
                rows={jobs}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                getRowHeight={() => 'auto'}
            />
        </JobsContainer>
    )
}

const JobsContainer = styled.div`
`
const GrayCell = styled.div`
  color: lightgray;
`




//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (params) =>
//       `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//   },