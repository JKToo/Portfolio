import React from "react";
import HorizontalTimeline from "react-horizontal-timeline";
import * as timeline from "./timeLineElements";
import Card from "@mui/material/Card";

export default class Timeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curIdx: timeline.History.length-1,
    };
  }

  //state = { value: 0, previous: 0 };

  render() {
    const { curIdx, prevIdx } = this.state;
    const curStatus = timeline.History[curIdx].event;
    const curRole = timeline.History[curIdx].role; 
    const curDescription = timeline.History[curIdx].description;
    const curDescription2 = timeline.History[curIdx].description2;
    const curDescription3 = timeline.History[curIdx].description3;
    const curDescription4 = timeline.History[curIdx].description4;
    const curDescription5 = timeline.History[curIdx].description5;
    const curDuration = timeline.History[curIdx].duration;
    const thumbnail = timeline.History[curIdx].thumbnail;
    const prevStatus = prevIdx >= 0 ? timeline.History[prevIdx].event : "";
    return (
                  <div className='layout' data-aos="fade-up" >

        <Card style={{borderRadius:"5px", marginLeft:"5%", marginRight:"5%", paddingBottom:"1%", boxShadow: "3px 3px 3px #888888" }}>
          <h1 style={{color:'#007FFF'}}>Timeline</h1>
        <div
          style={{
            width: "70%",
            height: "100px",
            margin: "0 auto",
            marginTop: "20px",
            fontSize: "15px",
            color:'black'
          }}
        >
          <HorizontalTimeline
            styles={{
              foreground: "#007FFF",
              outline: "black",
            }}
            index={this.state.curIdx}
            indexClick={(index) => {
              const curIdx = this.state.curIdx;
              this.setState({ curIdx: index, prevIdx: curIdx });
            }}
            values={timeline.History.map((x) => x.date)}
          />
        </div>
        <div >
          {/* Prevoius:-{prevStatus} - Current Select:-{curStatus} */}
          <div className="timelineTitle">{curStatus}<br></br></div>
          <div className="timelineRole">{curRole}<br></br></div> {curDuration}
          <div className="timelineDescription">{curDescription}<br></br>{curDescription2}<br></br>{curDescription3}<br></br>{curDescription4}<br></br>{curDescription5}</div>
        </div>
        </Card>
      </div>
    );
  }
}
