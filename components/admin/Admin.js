import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import styled from 'styled-components'
import Menu from './Menu'
import JobsTable from './JobsTable';
import { useState, useEffect } from 'react'

export default function Admin() {
    const [jobs, setJobs] = useState([])

    return (
        <AdminContainer>
            <Menu setJobs={setJobs} />
            <JobsTable jobs={jobs} />
        </AdminContainer>
    )
}

const AdminContainer = styled.div`
    background-color: #D8DEE2;
`