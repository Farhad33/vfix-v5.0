import { useState, useEffect } from 'react'
import axios from 'axios';
import styled from 'styled-components'
import { useRouter } from 'next/router'



export default function Admin() {
    const router = useRouter()


    useEffect(() => {
        let jwt = sessionStorage.getItem("jwt");
        if (!jwt) {
            router.push('/login')
        }
    }, [])

    return (
        <div>Admin</div>
    )
}

