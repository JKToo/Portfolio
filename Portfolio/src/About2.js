import React,{ useEffect }  from 'react';
 import {ReactComponent as WorkIcon} from "./work.svg"
 import {ReactComponent as SchoolIcon} from "./school.svg"
 import timelineElements from "./timeLineElements"
 import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
 import "react-vertical-timeline-component/style.min.css"
 import { useLocation } from "react-router-dom";

function About() {
  const location = useLocation();
  useEffect(()=> {
    if (location.hash) {
        let elem = document.getElementById(location.hash.slice(1))
        if (elem) {
            elem.scrollIntoView({behavior: "smooth"})
        }
    } else {
    window.scrollTo({top:0,left:0, behavior: "smooth"})
    }
}, [location,])

 let workIconStyles = {background: "#06D6A0"}
 let schoolIconStyles = {background: "#f9c74f"}

  return (
   
    <div className='split'>
       <div>
       <a href="https:/github.com/jktoo"><img src="git.png" alt="github" height="60px" widght="60px" className='align'/></a>
         <img src="code.png" alt="github" height="60px" widght="60px"  className='align'/>
       </div>
       <div>
       <p className="align"> <a href="https:/github.com/jktoo">Github</a></p>
       <p className="align">LinkedIn</p>
       </div>
      <br></br>
      <h1 > Timeline</h1>
      <VerticalTimeline>
        {timelineElements.map(element => {
        let isWorkIcon = element.icon === "work";
          return (
           <VerticalTimelineElement
           key={element.key}
            dateClassName="date"
            iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
            icon={isWorkIcon ? <WorkIcon/> : <SchoolIcon/>}
          >
            <u><h2 className="vertical-timeline-element-title"> {element.title} </h2></u>
            <i><h3 className = "vertical-timeline-element-subtitle"> {element.role} </h3></i>
            <h4 className = "vertical-timeline-element-subtitle"> {element.location} </h4>
            <h5 className="vertical-timeline-element-title"> {element.date} {element.gpa}</h5>
            
            
            <p id='description'> {element.description}</p>
          </VerticalTimelineElement>
        );
      })}
    </VerticalTimeline>
    <h1>Test</h1>
  </div>
  );
}

export default About;
