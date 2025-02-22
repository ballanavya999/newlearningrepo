import './tictaktoe.css'
import { useState } from 'react'

function Square(){
    const [value, setValue]=useState();
    function cross(){
        setValue('X');
     }
     return(
    <button className="square" onClick={cross}>{value}</button>)
}
export default function Tictaktoe(){
    return(
        <div>
            <h1>Tic Tak Toe Game 2nd commit</h1>
            <div className='container'>
            <Square />
            <Square />
            <Square />
            </div>
            <div className='container'>
            <Square />
            <Square />
            <Square />
            </div>
            <div className='container'>
            <Square />
            <Square />
            <Square />
            </div>
        </div>
    )
} 