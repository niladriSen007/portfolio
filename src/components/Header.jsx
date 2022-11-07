import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import {BsXLg} from "react-icons/bs"
const links=[
    {
        name:"Home",
        link:"#home"
    },
    {
        name:"Work",
        link:"#work"
    },
    {
        name:"Experience",
        link:"#experience"
    },
    {
        name:"Services",
        link:"#services"
    },
    {
        name:"Testimonials",
        link:"#testimonials"
    },
    {
        name:"Contact",
        link:"#contacts"
    },
    
]

function Header({menuOpen,setMenuOpen}) {
  return (
   <>
     <nav>
        <NavContent setMenuOpen={setMenuOpen}/>
    </nav>
    <button className="navBtn" onClick={()=>setMenuOpen(!menuOpen)}>
       {menuOpen ? <BsXLg /> :  <AiOutlineMenu />}
    </button>
    
   </>
  )
}



export const HeaderPhone = ({menuOpen,setMenuOpen}) => {
    return (
      <div className={`navPhone ${menuOpen ? "navPhoneMukhDekhao" : "" } `}>
          <NavContent setMenuOpen={setMenuOpen}/>
      </div>
    )
  }

 const NavContent = ({setMenuOpen}) =>(
    <>
        <h2>Niladri.</h2>
        <div>
            {
                links.map(link=> (
                    <a key={link.name} href={link.link} onClick={()=>setMenuOpen(false)}>{link.name}</a>
                ))
            }
        </div>
        <a href="mailto:niladris002@gmail.com">
            <button>Email</button>
        </a>
    </>
)

export default Header