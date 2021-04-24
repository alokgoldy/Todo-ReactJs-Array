import React from 'react'
import './styles.css';


function InputField({set,text,setArray}) {
    
    return (
        <div className="inputField__div">
            <div>
                <input type="text" className="input__div" placeholder="Add Task" value={text} onChange={e=>set(e.target.value)}/>
            </div>
            <div>
                <button className="add__button" onClick={setArray}>+</button>
            </div>
        </div>
    )
}

export default InputField
