import React, { useEffect } from 'react';
import "react-vertical-timeline-component/style.min.css"
import emoji from './Sources/emoji.gif'
import Card from "@mui/material/Card";
import Side from "./Side"
import axios from "axios"
import Timeline from "./Timeline";
import { AnimatePresence } from "framer-motion";
import Grid from "@mui/material/Grid";
import './CSS/skills.css';
import cpp from "./Sources/cpp_logo.png"
import java from "./Sources/java_logo.png"
import python from "./Sources/python_logo.png"

const Languages = ["Java", "C++", "Python", "HTML", "Javascript", "PHP", "CSS", "Swift", "SQL"]
const Tools = ["Git", "VSCode", "Visual Studio", "Android Studio", "Netlify", "MySQL", "PhpMyAdmin", "PowerShell", "Linux"]

function Skills() {
  return (

    <div style={{ paddingBottom:"5%" }} className="bodyStyle">

      <div>
        <div style={{ display: "flex"}}>
          <h1 className="categories">Languages</h1>
          <img src={cpp} style={{ width: "90px", height: "70px", marginTop: "10px" }} />
          <img src={java} style={{ width: "90px", height: "70px", marginTop: "10px", marginLeft: "-60px" }} />
          <img src={python} style={{ width: "90px", height: "70px", marginTop: "10px", marginLeft: "-60px" }} />
        </div>

        <div >
          <Grid container spacing={5} style={{width:"75%", marginRight:"15%", marginLeft:"15%"}}  className="gridLayout" >
    {
      Languages.map(row => (
        <Grid item xs={2} >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={3} >
                  <Grid container>
                    <Grid container justify="space-evenly" >
                      <div className="description">{row}</div>
                    </Grid>
                  </Grid>
                </Grid>

                
              </Grid>
        </Grid>
      ))
    }
    </Grid>           
        </div>
        <div style={{ display: "flex" }}>
          <h1 className="categories">Tools</h1>
          <img src={cpp} style={{ width: "90px", height: "70px", marginTop: "10px" }} />
          <img src={java} style={{ width: "90px", height: "70px", marginTop: "10px", marginLeft: "-60px" }} />
          <img src={python} style={{ width: "90px", height: "70px", marginTop: "10px", marginLeft: "-60px" }} />
        </div>
        <div>
          <Grid container spacing={3} style={{width:"75%", marginRight:"15%", marginLeft:"15%"}}>
    {
      Tools.map(row => (
        <Grid item xs={2} >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={13}>
                  <Grid container >
                    <Grid container justify="space-evenly" >
                      <div className="description">{row}</div>
                    </Grid>
                  </Grid>
                </Grid>

                
              </Grid>
        </Grid>
      ))
    }
    </Grid>           
        </div>

        <div style={{ display: "flex" }}>
          <h1 className="categories">Frameworks</h1>
          <img src={cpp} style={{ width: "90px", height: "70px", marginTop: "10px" }} />
          <img src={java} style={{ width: "90px", height: "70px", marginTop: "10px", marginLeft: "-60px" }} />
          <img src={python} style={{ width: "90px", height: "70px", marginTop: "10px", marginLeft: "-60px" }} />
        </div>
        <div>
          <Grid container spacing={3} style={{width:"75%", marginRight:"15%", marginLeft:"15%"}}>
    {
      Tools.map(row => (
        <Grid item xs={2} >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={13}>
                  <Grid container>
                    <Grid container justify="space-evenly">
                      <div className="description">{row}</div>
                    </Grid>
                  </Grid>
                </Grid>

                
              </Grid>
        </Grid>
      ))
    }
    </Grid>           
        </div>
      </div>

    </div>
  );
}

export default Skills;
