import React from 'react'
import data from "../assets/data.json"

function Timeline() {
  return (
    <div id="experience">
        <div className="timelineBox">
        {
            data.work.map((item,index)=>(
                <TimelineItem heading={item.title} text={item.date} index={index} key={item.title} desc={item.description} company={item.company}/>
            ))
        }
        </div>
    </div>
  )
}

const TimelineItem = ({heading,text,index,desc,company}) =>(
    <div className={`timelineItem ${index%2 === 0 ? "leftTimeline" : "rightTimeline"}`}>
            <div>
              <h2>{company}</h2>
                <p>{heading}</p>
                <p>{text}</p>
                <p>{desc}</p>
            </div>
    </div>
)

export default Timeline