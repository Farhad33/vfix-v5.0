import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import useFetch from '../../utility/hooks/useFetch'
import { api, VFixBackendURL } from '../../utility/api'

import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker as MUIDatePicker } from '@mui/x-date-pickers/DatePicker';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';


export default function Menu({ setJobs }) {
    const oneWeekAgo = dayjs().subtract(1, 'week')
    const now = dayjs()
    const [dateFrom, setDateFrom] = useState(oneWeekAgo)
    const [dateTo, setDateTo] = useState(now)
    const router = useRouter()
    const [selectedTech, setSelectedTech] = useState('');

    const handleTechChange = (event) => {
        setSelectedTech(event.target.value + '');
    };

    useEffect(() => {
        let jwt = sessionStorage.getItem("jwt");
        if (!jwt) {
            router.push('/login')
        }
    }, [])

    const { loading, error, data } = useFetch(`${VFixBackendURL}/technicians`);

    if(loading) return 'loading'
    if(error) return 'error'

    const handleSearchSubmit = (event) => {
        event.preventDefault()
        if (selectedTech.length) {
            const from = dayjs(dateFrom).format('YYYY-MM-DD')
            const to = dayjs(dateTo).add(1, 'day').format('YYYY-MM-DD')
            api.get(`${VFixBackendURL}/jobs/technicians/${selectedTech}/${from}/${to}`)
            .then(result => {
                console.log('result.data.data => ', result.data.data);
                const jobs = jobsSelector(result?.data?.data || [])
                setJobs(jobs)
                console.log('jobs => ', jobs);
            })
            .catch(console.log)
        }
    }

    const jobsSelector = (data=[]) => {
        const jobs = data.map(element => {
            let job = {}
            job.id = element.id
            job.serviceType = element.attributes.serviceType
            job.jobPrice = element.attributes.jobPrice
            job.jobDate = element.attributes.jobDate
            job.jobHour = element.attributes.jobHour
            return job
        })
        return jobs
    }

    return (
        <Header>
            <Logo src='assets/logo/VFix-logo-larg.svg' />
            <TechnicianForm onSubmit={handleSearchSubmit}>
                    <FormControl>
                        <InputLabel>Technician</InputLabel>
                        <Select
                            value={selectedTech}
                            label="Technician"
                            onChange={handleTechChange}
                        >
                            {data.map(({attributes:{technicianName}, id}, index) => (
                                <MenuItem key={id} value={id}>{technicianName}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        label="From"
                        value={dateFrom}
                        onChange={(newValue) => setDateFrom(newValue)}
                    />
                    <DatePicker
                        label="To"
                        value={dateTo}
                        onChange={(newValue) => setDateTo(newValue)}
                    />
                </LocalizationProvider>
                <SearchButton type='submit' variant="contained">Search</SearchButton>
            </TechnicianForm>
        </Header>
    )
}

const Header = styled.header`
    display: grid;
    padding: 20px;
    font-size: 14px;
    grid-template-columns: 10% 90% ;
    align-items: center;
`
const Logo = styled.img`
	cursor: pointer;
	width: 10em;
	height: 5em;
`
const TechnicianForm = styled.form`
    display: flex;
    justify-content: center;
    label {
        display: flex;
        align-items: center;
        font-size: 18px;
        font-weight: 500;
    }
    .MuiFormControl-root {
        min-width: 200px;
        max-width: 300px;
    }
`
const DatePicker = styled(MUIDatePicker)`
    .MuiInputBase-root {
        max-width: 200px;
        height: 56px;
    }
    margin: 0 10px !important;
`
const SearchButton = styled(Button)`
    margin: 0 5px;
    font-size: 18px;
    width: 150px;
`