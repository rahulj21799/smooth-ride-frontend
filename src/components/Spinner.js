import React from 'react'
import {Spin} from 'antd';
import './Spinner.css'
const Spinner = () => {

    return (
        <>
            <div className="customSpinner">
                <Spin />
            </div>
        </>
    )
}

export default Spinner

