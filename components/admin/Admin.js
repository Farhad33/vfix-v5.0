import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import useFetch, { api } from '../../utility/hooks/useFetch'


export default function Admin() {
    const router = useRouter()
    const [selectedTechID, setSelectedTechID] = useState(null)
    console.log('selectedTechID => ', selectedTechID);
    useEffect(() => {
        let jwt = sessionStorage.getItem("jwt");
        if (!jwt) {
            router.push('/login')
        }
    }, [])

    const { loading, error, data } = useFetch('https://strapi.myvfix.com/api/technicians');

    if(loading) return 'loading'
    if(error) return 'error'

    console.log('data => ', data);

    const handleSearchSubmit = (event) => {
        event.preventDefault()
        console.log("handleSearchSubmit");
    }

    return (
        <Header>
            <Logo src='assets/logo/VFix-logo-larg.svg' />
            <TechnicianForm onSubmit={handleSearchSubmit}>
                <label>Technician:
                    <Select onChange={(e) => setSelectedTechID(e.target.value)}>
                        <option value={null}>...</option>
                        {data.map(({attributes:{techninianID, technicianName}}) => (
                            <option key={techninianID} value={techninianID}>{technicianName}</option>
                        ))}
                    </Select>
                </label>
                <label>Date:
                    <InputDate type='date' />
                    -
                    <InputDate type='date' />
                </label>
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
        font-size: 18px;
        font-weight: 500;
        align-items: center;
    }
`
const Select = styled.select`
    padding: 10px;
    min-width: 200px;
    font-size: 15px;
    margin-left: 5px;
    margin-right: 20px;
`
const InputDate = styled.input`
    margin: 0 5px;
    padding: 10px;
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