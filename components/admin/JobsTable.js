import styled from 'styled-components'
import { DataGrid, gridClasses } from '@mui/x-data-grid';

export default function JobsTable({ jobs }) {

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



const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'serviceType', headerName: 'Service Type', width: 130 },
  { field: 'startEnd', headerName: 'Job Start/End/Date/Time', width: 140, renderCell: (params) => {
    return (
      <div>
        <div>{params.row.jobDate}</div>
        <div>{params.row.jobHour}</div>
      </div>
    )
  } },
  { field: 'jobPrice', headerName: 'Job Price', width: 130 },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (params) =>
//       `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//   },
];