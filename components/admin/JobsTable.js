import styled from 'styled-components'
import { DataGrid } from '@mui/x-data-grid';

export default function JobsTable({ jobs }) {

    return (
        <JobsContainer>
            <DataGrid
                rows={jobs}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </JobsContainer>
    )
}

const JobsContainer = styled.div`
`



const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'serviceType', headerName: 'Service Type', width: 130 },
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