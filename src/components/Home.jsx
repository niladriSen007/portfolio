import React, { useRef } from 'react'
import {animate, motion} from "framer-motion"
import {BsArrowUpRight} from "react-icons/bs"
import {BsMouse} from "react-icons/bs"
import Typewriter from "typewriter-effect"

import profile from "../assets/profile.png"

function Home({ratio}) {

    const clientCount = useRef(null)
    const projectsCount = useRef(null)

    // const animationClientsCount = () =>{
    //     animate(0,60,{
    //         duration:2,
    //         onUpdate:(val)=>clientCount.current.textContent=val.toFixed()
    //     })
    // }

    // const animationProjectsCount = () =>{
    //     animate(0,100,{
    //         duration:2.5,
    //         onUpdate:(val)=>projectsCount.current.textContent=val.toFixed()
    //     })
    // }
    
    const animationsCount = (key) =>{
        animate(0,key==="client" ? 60 : 100,{
                    duration: key === "client" ? 2 : 2.5,
                    onUpdate:(val)=>{
                        return(
                            (key === "client" ? clientCount : projectsCount).current.textContent=val.toFixed()
                        )
                    }
                })
    }

    const animations = {
        h1:{
            initial:
            {
                x:"-100%",
            opacity:0
        },
             whileInView:
             {
                x:"0",
             opacity:1
            },
            transition:{
                type:"spring",
                
            }
        },
        button:{
            initial:
            {
                y:"-100%",
            opacity:0
        },
             whileInView:
             {
                y:"0",
             opacity:1
            }
        }
    }
  return (
    <div className='home' id="home">
        <section>
            <div>
                <motion.h1 {...animations.h1}>
                    Hi, I am <br /> <span>Niladri Sen</span>
                </motion.h1>
                <Typewriter options={{
                    strings:["A Developer","A Software Engineer","A Designer","A Coder"],
                    autoStart:true,
                    loop:true,
                    wrapperClassName:"typewriter",
                    cursor:"",
                }} />
                <div>
                <a href="mailto:niladris002@gmail.com">Hire Me</a>
                <a href="#work">Projects <BsArrowUpRight /></a>
                </div>
                <article>
                    <p>+ {ratio <2 && <motion.span whileInView={()=>animationsCount("client")} ref={clientCount}></motion.span>}</p>
                    <span>Clients Worldwide</span>
                </article>

                <aside>
                <article>
                    <p>+ {ratio <2 && <motion.span ref={projectsCount} whileInView={()=>animationsCount("project")}></motion.span>}</p>
                    <span>Projects</span>
                </article>

                <article data-special>
                    <p>Contact</p>
                    <span>niladris002@gmail.com</span>
                </article>
                </aside>

            </div>
        </section>
        <section>
            <img src={profile} alt="Niladri_sen" />
        </section>  
        {/* <BsMouse className='hide' /> */}
    </div>
  )
}

export default Home