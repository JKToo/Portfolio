import React, { useEffect } from 'react';
import "react-vertical-timeline-component/style.min.css"
import emoji from './Sources/emoji.gif'
import Card from "@mui/material/Card";
import Side from "./Side"
import axios from "axios"
import Timeline from "./components/Timeline";
import { AnimatePresence } from "framer-motion";
import Grid from "@mui/material/Grid";
import './CSS/skills.css';
import cpp from "./Sources/cpp_logo.png"
import java from "./Sources/java_logo.png"
import python from "./Sources/python_logo.png"
import vscode from "./Sources/vscode_logo.png"
import git from "./Sources/git_logo.png"
import mysql from "./Sources/mysql_logo.png"
import mui from "./Sources/mui_logo.png"
import rails from "./Sources/rails.png"
import react from "./Sources/react_logo.png"
import express from "./Sources/nodejs_logo.png"

const Languages = ["Java", "C++", "Python", "HTML", "Javascript", "Ruby", "PHP", "CSS", "Swift", "SQL"]
const Tools = ["Git", "VSCode", "Visual Studio", "Android Studio", "Xcode", "Netlify", "MySQL", "MongoDB", "PhpMyAdmin", "Postgres",
"PowerShell", "Linux", "Figma", "Active Directory", "Sharepoint", "RMM", "MDM", "Azure", "Intune"]
const Frameworks = ["React", "Ruby on Rails", "Express", "Material UI"]
function Skills() {
  return (

    <div style={{ paddingBottom:"8%", paddingTop:"8%" }} className="bodyStyle">

      <div>
        <div style={{ display: "flex"}}>
          <h1 className="categories">Languages</h1>
          <img src={cpp} style={{ width: "90px", height: "70px", marginTop: "10px" }} />
          <img src={java} style={{ width: "90px", height: "70px", marginTop: "10px", marginLeft: "-60px" }} />
          <img src={python} style={{ width: "90px", height: "70px", marginTop: "10px", marginLeft: "-60px" }} />
        </div>
        <AnimatePresence>

        <div data-aos="fade-up">
          <Grid container spacing={3} style={{width:"75%", marginRight:"15%", marginLeft:"15%"}} >
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
    <br/>
        <hr style={{marginLeft:"10%", marginRight:"10%", borderColor:"black", opacity:"0.2"}}></hr>
      
        </div>
        </AnimatePresence>

        <div style={{ display: "flex" }}>
          <h1 className="categories">Tools</h1>
          <img src={git} style={{ width: "90px", height: "70px", marginTop: "10px" }} />
          <img src={vscode} style={{ width: "90px", height: "70px", marginTop: "10px", marginLeft: "-60px" }} />
          <img src={mysql} style={{ width: "90px", height: "70px", marginTop: "10px", marginLeft: "-60px" }} />
        </div>
        <AnimatePresence>
        <div data-aos="fade-up" >
          <Grid container spacing={3} style={{width:"75%", marginRight:"15%", marginLeft:"15%"}}>
    {
      Tools.map(row => (
        <Grid item xs={2} >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={11}>
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
        </AnimatePresence>
<br/>
        <hr style={{marginLeft:"10%", marginRight:"10%", borderColor:"black", opacity:"0.2"}}></hr>

        <div style={{ display: "flex" }}>
          <h1 className="categories">Frameworks</h1>
          <img src={react} style={{ width: "90px", height: "70px", marginTop: "10px" }} />
          <img src={express} style={{ width: "90px", height: "70px", marginTop: "10px", marginLeft: "-60px" }} />
          <img src={rails} style={{ width: "60px", height: "60px", marginTop: "17px", marginLeft: "-50px" }} />
        </div>
        <AnimatePresence>
        <div data-aos="fade-up" >
          <Grid container spacing={3} style={{width:"75%", marginRight:"15%", marginLeft:"15%"}}>
    {
      Frameworks.map(row => (
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
        </AnimatePresence>
      </div>

    </div>
  );
}

export default Skills;
