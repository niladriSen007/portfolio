import React, { useState } from 'react'
import vg from "../assets/vg.png"
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import {addDoc,collection} from "firebase/firestore"
import {db} from "../firebase"

function Contacts() {

  //ya i know i can use one object but i used these three useState 😂
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [message,setMessage] = useState("")
  const [disableBtn, setDisableBtn] = useState(false);


  const animations = {
    form: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
        transition:{
          type:"spring",
        }
      },
    },

    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
      transition: {
        delay: 0.5,
      },
    },
  };

  const submitHandler = async(e) =>{
    e.preventDefault();
    setDisableBtn(true)
   try
   {
    await addDoc(collection(db,"contacts"),{
      name,email,message
    })
    toast.success("Message Sent")
    setName("")
    setEmail("")
    setMessage("")
    setDisableBtn(false)
   }
    catch(e)
    {
      toast.error("Error")
      console.log(e)
      setDisableBtn(false)
    }

  }
  return (
    <div id="contacts">
        <section>
            <motion.form onSubmit={(e)=>submitHandler(e)} {...animations.form}>
                <h2>Contact Me</h2>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} name="name" id="name" placeholder='Your Name' />
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}  name="email" id="email" placeholder='Your Email' />
                <input type="text" value={message} onChange={(e)=>setMessage(e.target.value)}  name="message" id="message" placeholder='Your Message' />
                <motion.button {...animations.button} type='submit' disabled={disableBtn}className={disableBtn ? "disableBtn" : ""}>Send</motion.button>
            </motion.form>
        </section>
        <aside>
            <img src={vg} alt="Graphics" />
        </aside>
    </div>  
  )
}

export default Contacts