import React,{useState} from 'react';
import './App.css'
import Navbar from './components/navbar'
import InputField from './components/inputField'
import TodoContainer from './components/todoContainer'
const App = () => {

    const [input,setInput] = useState([]);
    const [text,setText] = useState("");

    const setArray = () => {
        setInput([...input,text])
        setText("");
    }
    const editFun = (idx) => {
        setText(input[idx])
        input.splice(idx,1);
        setInput([...input])
    }
    const removeFun = (idx) => {
        input.splice(idx,1);
        setInput([...input])
    }
    
    return(
        <div className="app">
            <Navbar/>
            <InputField set={setText} text={text} setArray={setArray}/>
            <TodoContainer data={input} editFun={editFun} removeFun={removeFun}/>
        </div>
    )
}

export default App;