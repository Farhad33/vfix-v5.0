import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { DataGrid as MUIDataGrid, GridCellEditStopReasons } from '@mui/x-data-grid';
import { api, VFixBackendURL } from '../../utility/api'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Zoom, Button, Tooltip as MUITooltip } from '@mui/material';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { tooltipClasses } from '@mui/material/Tooltip';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import TechCompensation from './TechCompensation'



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
    { field: 'finalPay', headerName: 'Technician Final Payout', width: 130, renderCell: ({row: {finalPay, isPaid}}) => (
      isPaid ? 
      <FinalPay color='green'><CheckCircleOutlineIcon />${finalPay}</FinalPay> 
      : 
      <FinalPay color='red'><HighlightOffIcon/>${finalPay}</FinalPay>
    ) },
    // tooltip
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
                getRowHeight={({ id, densityFactor }) => {
                  return 70 * densityFactor;
                }}
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
          <TotallContainer>
            <span></span>
            <h2>Totall</h2>
            <h4>{jobs.hours}</h4>
            <h4>${jobs.cash}</h4>
            <h4>${jobs.reimbursement} </h4>
            <h4>${jobs.finalPay}</h4>
            <span></span>
          </TotallContainer>
        </JobsContainer>
    )
}

const JobsContainer = styled.div`
  position: relative;
  bottom: 57px;
  margin: 0 50px;
  background-color: #ffffff;
`
const DataGrid = styled(MUIDataGrid)`
  .MuiDataGrid-columnHeaderTitle {
    white-space: normal;
    line-height: normal;
  }
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

const CustomCellTooltip = ({ id, row: { isPaid, technicianRate, technicianRateMode, strapiTechID }})   => { 
  const [open, setOpen] = useState(false)
  const [hasItPaid, setHasItPaid] = useState(isPaid)
  const [openDialog, setOpenDialog] = useState(false)

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

  const handleTechCompensationClick = () => {
    setOpenDialog(true)
    setOpen(false)
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
                    <HighlightOffIcon /> Mark as Unpaid
                  </Button>
                  :
                  <Button 
                    variant="contained"
                    onClick={handleSubmit}
                  >
                    <CheckCircleOutlineIcon /> Mark as Paid
                  </Button>
                }
                <Button 
                  variant="contained"
                  onClick={handleTechCompensationClick}
                >Tech Compensation</Button>
              </TooltipTitle>
            } 
          >
            <MoreVertIcon onClick={() => setOpen(!open)} />
        </Tooltip>
        <TechCompensation 
          open={openDialog} 
          setOpen={setOpenDialog}
          technicianRate={technicianRate}
          technicianRateMode={technicianRateMode}
          id={id}
          strapiTechID={strapiTechID}
        />
      </div>
    </ClickAwayListener>
)}

const TooltipTitle = styled.div`
  button {
    width: 100%;
    margin-bottom: 10px;
    svg {
      margin-right: 5px;
    }
  }
`
const FinalPay = styled.p`
  display: flex;
  color: ${({color}) => color};
  svg {
    font-size: 1.1rem;
    margin-right: 5px;
  }
`

const TotallContainer = styled.div`
  display: grid;
  grid-template-columns: 5% 20% 14% 6% 17% 10% 25%;
`