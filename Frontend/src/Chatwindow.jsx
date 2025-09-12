import "./Chatwindow.css";
import Chat from "./Chat.jsx"
import { MyContext } from "./MyContext.jsx"; 
import { useContext } from "react";



function Chatwindow(){
    const {promt, setPromt, reply , setEeply, currThreadId} = useContext(MyContex);

    const getReply = async() => {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
        },
        body: {
            message: promt,
            threadId: currThreadId
        }
    };

    try{
        await fetch("http://localhost:8000/api.chat");
    }catch(err){
        console.error(err);
    }
}
    return(
      <div className="chatwindow">
        <div className="navbar">
            <span> &nbsp;&nbsp;KisanAI <i class="fa-solid fa-chevron-down"></i></span>
            <div className="usericon">
                <span><i class="fa-solid fa-user"></i></span>
            </div>
        </div>
        

        <div className="chatinput">
            <div className="inputbox">
                <input placeholder="Ask anything" 
                      value = {promt}
                      onChange = {(e) => setPromt(e.target.value)}>
                </input>
                <div id="submit" onClick={getReply}><i class="fa-solid fa-paper-plane"></i></div>
            </div>
            <p className="info">KisanAI can make mistakes. Check important info. See Cookie Preferences</p>
        </div>
        
      </div> 
    )
}

export default Chatwindow;