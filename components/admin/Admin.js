import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { useState, useEffect, useRef } from 'react'
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


export default function Admin() {
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

    const { loading, error, data } = useFetch('https://localhost:3010/technicians');
    console.log('data =>',data);

    if(loading) return 'loading'
    if(error) return 'error'

    const handleSearchSubmit = (event) => {
        event.preventDefault()
        if (selectedTech.length) {
            const from = dayjs(dateFrom).format('YYYY-MM-DD')
            const to = dayjs(dateTo).add(1, 'day').format('YYYY-MM-DD')
            api.get(`${VFixBackendURL}/jobs/technicians/${selectedTech}/${from}/${to}`)
            .then(result => {
                console.log('result.data => ', result.data);
            })
            .catch(console.log)
        }
    }

    return (
        <Header>
            <Logo src='assets/logo/VFix-logo-larg.svg' />
            <TechnicianForm onSubmit={handleSearchSubmit}>
                    <FormControl fullWidth>
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
                <Search type='submit' value='Search'/>
            </TechnicianForm>
        </Header>
    )
}

const Header = styled.header`
    display: grid;
    padding: 20px;
    font-size: 14px;
    grid-template-columns: 10% 70% 20% ;
    align-items: center;
`
const Logo = styled.img`
	cursor: pointer;
	width: 10em;
	height: 5em;
`
const TechnicianForm = styled.form`
    display: flex;
    justify-content: space-evenly;
    label {
        display: flex;
        align-items: center;
        font-size: 18px;
        font-weight: 500;
    }
`
// const Select = styled.select`
//     padding: 10px;
//     min-width: 200px;
//     font-size: 15px;
//     margin-left: 5px;
//     margin-right: 20px;
// `
const DatePicker = styled(MUIDatePicker)`
    .MuiInputBase-root {
        max-width: 200px;
        height: 56px;
    }
    margin: 0 10px !important;
`
const Search = styled.input`
    margin: 0 5px;
    font-size: 18px;
    padding: 5px 25px;
    font-weight: 500;
    background-color: #07aef0;
    color: white;
    border: none;
    border-radius: 5px;
`