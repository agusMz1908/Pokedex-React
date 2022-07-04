import React from 'react'
import SortNum from '../Images/sortNum.png'
import SortStr from '../Images/sort.png'
import { useState } from 'react'

const SortControl = ({handleStr, handleNum}) => {

    const [sortByNumber, setSortByNumber] = useState(true)

    const handleChange = () => {
        if(!sortByNumber) {
            handleNum()
        } else {
            handleStr()
        }
        setSortByNumber(!sortByNumber)
    }

    return (
        <div>
            <button
                onClick={() => handleChange()}
            >
                {sortByNumber ? <img className="w-[50px] h-[50px]" src={SortStr} /> : <img className="w-[50px] h-[50px]" src={SortNum}/>}
            </button>
            
        </div>
    )
}

export default SortControl