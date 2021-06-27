// Write your Character component here
import React, {useState, useEffect} from 'react'
import axios from 'axios'
// import handlers from './mocks/handlers.js'
import styled from 'styled-components'

const Character = (props) => {


    return (
        <div>{props.name}</div>
    )
}

export default Character;
