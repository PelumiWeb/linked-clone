import React from 'react'
import './InputOption.css'

function InputOption({Icon, Text, color}) {
    return (
        <div className="InputOption">
            <Icon style={{color : color}} />
            <h4>{Text}</h4>
        </div>
    )
}

export default InputOption
