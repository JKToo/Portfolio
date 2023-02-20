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
import vscode from "./Sources/vscode_logo.png"
import git from "./Sources/git_logo.png"
import mysql from "./Sources/mysql_logo.png"
import mui from "./Sources/mui_logo.png"
import react from "./Sources/react_logo.png"
import express from "./Sources/nodejs_logo.png"

const Languages = ["Java", "C++", "Python", "HTML", "Javascript", "PHP", "CSS", "Swift", "SQL"]
const Tools = ["Git", "VSCode", "Visual Studio", "Android Studio", "Xcode", "Netlify", "MySQL", "MongoDB", "PhpMyAdmin", "PowerShell", "Linux", "Figma"]
const Frameworks = ["React", "Express", "Material UI"]
function Skills() {
  return (

    <div style={{ paddingBottom: "5%" }} className="bodyStyle">

      <div>
        <div style={{ display: "flex" }}>
          <h1 className="categories">Languages</h1>
          <img src={cpp} style={{ width: "90px", height: "70px", marginTop: "10px" }} />
          <img src={java} style={{ width: "90px", height: "70px", marginTop: "10px", marginLeft: "-60px" }} />
          <img src={python} style={{ width: "90px", height: "70px", marginTop: "10px", marginLeft: "-60px" }} />
        </div>

        <div style={{ width: "75%", marginLeft:"15%" }}>
            {/* {
      // Languages.map(row => (
      //   <Grid item xs={2} >
      //         <Grid container spacing={2}>
      //           <Grid item xs={12} sm={3} >
      //             <Grid container>
      //               <Grid container justify="space-evenly" >
      //                 <div className="description">{row}</div>
      //               </Grid>
      //             </Grid>
      //           </Grid>

                
      //         </Grid>
      //   </Grid>
      // ))

    } */}

{/* "Java", "C++", "Python", "HTML", "Javascript", "PHP", "CSS", "Swift", "SQL" */}
<Grid container spacing={5} style={{}} >

            <Grid item xs={5} sm={1.2} minWidth={"100px"}>
              <Card className="description">Java</Card>
            </Grid>
            <Grid item xs={5} sm={1.2} minWidth={"100px"}>
            <div className="description">C++</div>
            </Grid>
            <Grid item xs={5} sm={1.2} minWidth={"140px"}>
            <div className="description">Python</div>
            </Grid>
            <Grid item xs={5} sm={1.2} minWidth={"120px"}>
            <div className="description">HTML</div>
            </Grid>
            <Grid item xs={6} sm={1.5} minWidth={"150px"}>
            <div className="description">Javascript</div>
            </Grid>
            <Grid item xs={4} sm={1.2} minWidth={"100px"}>
            <div className="description">PHP</div>
            </Grid>
            <Grid item xs={4} sm={1.2} minWidth={"100px"}>
            <div className="description">CSS</div>
            </Grid>
            <Grid item xs={5} sm={1.2} minWidth={"120px"}>
            <div className="description">Swift</div>
            </Grid>
            <Grid item xs={4} sm={1.2} minWidth={"100px"}>
            <div className="description">SQL</div>
            </Grid>
          </Grid>
          <br />
          <hr style={{ marginLeft: "10%", marginRight: "10%", borderColor: "black", opacity: "0.2" }}></hr>

        </div>
        <div style={{ display: "flex" }}>
          <h1 className="categories">Tools</h1>
          <img src={git} style={{ width: "90px", height: "70px", marginTop: "10px" }} />
          <img src={vscode} style={{ width: "90px", height: "70px", marginTop: "10px", marginLeft: "-60px" }} />
          <img src={mysql} style={{ width: "90px", height: "70px", marginTop: "10px", marginLeft: "-60px" }} />
        </div>
        <div style={{ width: "75%", marginLeft:"15%" }}>
          <Grid container spacing={5} style={{}} >
            {
              Tools.map(row => (
                <Grid item xs={5} sm={1.2} minWidth={"150px"}>
              <Card className="description">{row}</Card>
            </Grid>
                
              ))
            }
          </Grid>
        </div>
        <br />
        <hr style={{ marginLeft: "10%", marginRight: "10%", borderColor: "black", opacity: "0.2" }}></hr>

        <div style={{ display: "flex" }}>
          <h1 className="categories">Frameworks</h1>
          <img src={react} style={{ width: "90px", height: "70px", marginTop: "10px" }} />
          <img src={express} style={{ width: "90px", height: "70px", marginTop: "10px", marginLeft: "-60px" }} />
          <img src={mui} style={{ width: "90px", height: "70px", marginTop: "10px", marginLeft: "-60px" }} />
        </div>
        <div style={{ width: "75%", marginLeft:"15%" }}>
          <Grid container spacing={5} style={{}} >
            {
              Frameworks.map(row => (
                <Grid item xs={5} sm={1.2} minWidth={"150px"}>
              <Card className="description">{row}</Card>
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
