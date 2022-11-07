import React from 'react'
import {motion} from "framer-motion"
import {AiFillIeCircle,AiFillAndroid,AiFillWindows} from "react-icons/ai"

function Services() {


    const animations = {
        whileInView:{
            x:0,
            y:0,
            opacity:1,
            transition:
            {
                type:"spring",
            }
        }
        ,
        one:{
            opacity:0,
            x:"-100%"
        }
        ,
        two:{
            opacity:0,
            y:"-100%"
        }
        ,
        three:{
            opacity:0,
            y:"-100%"
        }
        ,
        four:{
            opacity:0,
            y:"100%"
        }
    }

  return (
    <div id="services">
        <h2>SERVICES</h2>
        <section>
            <motion.div className='serviceBox1' initial={animations.one} whileInView={animations.whileInView}>
                <h3>2+</h3>
                <span>Years Of Experience</span>
            </motion.div>

            <motion.div className='serviceBox2' initial={animations.two} whileInView={animations.whileInView}>
               <AiFillIeCircle />
               <span>Web Development</span>
            </motion.div>

            <motion.div className='serviceBox3' initial={animations.three} whileInView={animations.whileInView}>
            <AiFillAndroid />
               <span>App Development</span>
            </motion.div>

            <motion.div className='serviceBox4' initial={animations.four} whileInView={animations.whileInView}>
                <AiFillWindows />
               <span>Desktop  Development</span>
            </motion.div>
        </section>
    </div>
  )
}

export default Services