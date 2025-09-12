import "./Sidebar.css"

function Sidebar() {
    return(
       <section className="sidebar">
             {/*new chat button  */}
              <button>
                <div className="logo">New Chat</div>
                <span> <i class="fa-solid fa-pen-to-square"></i> </span>
              </button>

             {/* history */} 
             <ul className="history">
                <li>harsh</li>
                <li>harsh</li>
                <li>harsh</li>
                <li>harsh</li>
             </ul>

             {/* sign */}
             <div className="sign">
                BY Harsh
             </div>
       </section>
    )
}

export default Sidebar;