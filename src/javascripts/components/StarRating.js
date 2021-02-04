import React, { useState } from 'react'
import {FaStar} from 'react-icons/fa'
import {top10} from '../top10'

export default function StarRating(){
    const Star = ({selected = false}) => (
        <FaStar color={selected ? "maroon" : "gray"}/>
    )

    return [
        <FaStar color="red" />,
        <FaStar color="red" />,
        <FaStar color="red" />,
        <FaStar color="grey" />,
        <FaStar color="grey" /> 
    ]
}