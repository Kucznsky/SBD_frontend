import React from 'react'
import {useParams} from "react-router-dom";
import Axios from "axios";

const Employee_details = () => {

    const {id} = useParams();
    return (
        <div className='content'>
            <p>umowa pracownika</p>
        </div>
    )
}

export default Employee_details
