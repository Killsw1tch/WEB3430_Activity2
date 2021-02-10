import React, { useState } from 'react'
import {FaStar} from 'react-icons/fa'
import {top10} from '../top10'

const createArray = length => [...Array(length)];

const Star = ({ selected = false }) => (
    <FaStar color={selected ? "maroon" : "grey"} />
  );

  export default function StarRating({ totalStars = 5 }) {
    const [selectedStars, setSelectedStars] = useState(4);
    return (
      <>
        {createArray(totalStars).map((n, i) => (
          <Star
            key={i}
            selected={selectedStars > i}
            onSelect={() => setSelectedStars(i + 1)}
          />
        ))}
      </>
    );
  }