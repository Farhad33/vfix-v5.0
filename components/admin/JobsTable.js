import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { DataGrid, GridCellEditStopReasons } from '@mui/x-data-grid';
import { api, VFixBackendURL } from '../../utility/api'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Zoom, Button, Tooltip as MUITooltip } from '@mui/material';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { tooltipClasses } from '@mui/material/Tooltip';



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
      return sideTech.length ? <GrayCell>{cash}</GrayCell> : <div>{cash}</div>
    } },
    { field: 'reimbursement', headerName: 'Technician Reimbursment', width: 130, editable: true, renderCell: ({row: {sideTech, reimbursement}}) => {
      return sideTech.length ? <GrayCell>{reimbursement}</GrayCell> : <div>{reimbursement}</div>
    } },
    { field: 'sideTech', headerName: 'Side Technician', width: 130, editable: true },
    { field: 'finalPay', headerName: 'Technician Final Payout', width: 130 },
    { field: 'tooltip', headerName: '', width: 10, renderCell: CustomCellTooltip}

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
                onCellEditStop={(params, event) => {
                  if (params.reason === GridCellEditStopReasons.tabKeyDown || params.reason === GridCellEditStopReasons.enterKeyDown) {
                    let data = { 
                      [params.field]: event.target.value,
                      id: params.id
                    }
                    api.put(`${VFixBackendURL}/job-technicians`, data)
                  }
                }}
            />
        </JobsContainer>
    )
}

const JobsContainer = styled.div`
`
const GrayCell = styled.div`
  color: lightgray;
`

const Tooltip = styled(({ className, ...props }) => (
  <MUITooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#fff',
    padding: '26px 24px',
    boxShadow: '0px 2px 48px 0px #00000026',
    borderRadius: '7px'
  },
}))

const CustomCellTooltip = ({ id, row: { isPaid }})   => { 
  const [open, setOpen] = useState(false)
  const [hasItPaid, setHasItPaid] = useState(isPaid)

  const handleSubmit = () => {
    let data = {  
      isPaid: !hasItPaid,
      id
    }
    api.put(`${VFixBackendURL}/job-technicians`, data)
    .then(result => {
      setHasItPaid(!hasItPaid)
    })
    .catch(console.log)
  }

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <div>
        <Tooltip
          TransitionComponent={Zoom}
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
          disableFocusListener
          disableHoverListener
          disableTouchListener
          placement='left'
          title={
              <TooltipTitle>
                {hasItPaid ?
                  <Button 
                    variant="outlined"
                    onClick={handleSubmit}
                  >
                    <CheckCircleOutlineIcon sx={{marginRight: 1,}}/> Mark as Unpaid
                  </Button>
                  :
                  <Button 
                    variant="contained"
                    onClick={handleSubmit}
                  >
                    <CheckCircleOutlineIcon sx={{marginRight: 1,}}/> Mark as Paid
                  </Button>
              }
              </TooltipTitle>
            } 
          >
            <MoreVertIcon onClick={() => setOpen(!open)} />
        </Tooltip>
      </div>
    </ClickAwayListener>
)}

const TooltipTitle = styled.div`
  button {
    width: 100%;
    margin-bottom: 10px;
  }
`