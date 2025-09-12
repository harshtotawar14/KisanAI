import './App.css';
import Sidebar from "./Sidebar.jsx";
import Chatwindow from "./Chatwindow.jsx";
import { MyContext} from "./MyContext.jsx";
import { useState } from 'react';
import { v1 as uuidv1 } from "uuid";



function App() {
  const [promt, serPromt] = useState("");
  const [reply, setReply] = useState(null);
  const [currThreadId, setCurrThreadId] = useState(uuidv1());
  
  const providerValues = {
    promt, serPromt,
    reply, setReply,
    currThreadId, setCurrThreadId
  };
    return (
       <div className="app">
        <MyContext.Provider values = {providerValues}>
            <Sidebar></Sidebar>
            <Chatwindow></Chatwindow>
        </MyContext.Provider>
       </div>
    )
}

export default App
