// Write your Character component here
import React, {useState, useEffect} from 'react'
import axios from 'axios'
// import styled from 'styled-components'

const Character = () => {
    const [character, setCharacter] = useState([])

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people`)
        // .then(res => {
        //   console.log(res.data)
        // })
        .then(res => {
        setCharacter(res.data)
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <div></div>
    )
}

export default Character;

// const Name = styled.p`
// `
