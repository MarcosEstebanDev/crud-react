import React from "react"
import{ Link } from "react-router-dom"

function Navbar(){
  return (
    <div className="bg-neutral-800 flex justify-between px-20 py-4">
    
    <Link className="text-white font-bold" to="/"> 
      <h1>React MySql</h1>
    </Link>
    <ul className="flex gap-x-1">
        <li>
            <Link to="/" className="bg-slate-200 px-2 py-1">Home</Link>
        </li>
        <li>
            <Link to="/new" className="bg-teal-200 px-2 py-1">Create Tasks</Link>
        </li>
    </ul>
    </div>
  )
}
export default Navbar