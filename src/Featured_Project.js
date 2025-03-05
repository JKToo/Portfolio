import React, { useEffect } from 'react';
import "react-vertical-timeline-component/style.min.css"
import './CSS/skills.css';
import Description from "./Sources/Featured_Project.png"
import Grid from "@mui/material/Grid";
import iPhone from "./Sources/iphone_model.png"
import iPad from "./Sources/ipad_model.png"
import iPhone_Video from "./Sources/iphone_video.mp4"
import iPad_Video from "./Sources/ipad_video.mp4"
import { AnimatePresence } from "framer-motion";
import java from "./Sources/java_logo.png"
import android_studio from "./Sources/android_studio.png"

function Featured_Project() {
  return (
    <div style={{ paddingBottom: "8%", paddingTop: "2%" }}>
      <h1>Featured Project</h1>

      <Grid container justifyContent="center" spacing={2} style={{ width: "100%" }}>
        <Grid item xs>

          <div data-aos="zoom-out" >
            <h1 class="featured_project_title" >Omni Tool</h1>
            <p style={{ fontSize: "30px" }}>A <span style={{ backgroundColor: "rgb(0, 114, 229)", color: "white", padding: "0px 5px 0px 5px" }}>versatile</span> all-in-one app designed to simplify your life. </p>
          </div>
          <div data-aos="zoom-out" d ata-aos-duration="3000" >
            <img src={Description} style={{ marginTop: "5%"}} />
          </div>
        </Grid>
        <Grid item xs >
        <Grid sx={{ flexGrow: 1 }} container spacing={2}>
        <Grid item xs={12}>
            <Grid container justifyContent="center" spacing={3} >

            <Grid key={0} item className = "cards">
            <div class="video_model" data-aos="zoom-out" data-aos-duration="3000" style={{ marginTop: "60%" }}>
              
              <video width="160px" height="340px" style={{ marginTop: "0px", borderRadius: "20px" }} autoPlay loop={true} muted={true}>
                <source src={iPhone_Video} type="video/mp4" />
              </video>
              <img src={java} style={{ width: "90px", height: "70px", position: "absolute", zIndex:"1", bottom: "10px", left:"-30px"}} />

            </div>
            </Grid>

            <Grid key={1} item className = "cards">
              <div class="video_model_ipad"  data-aos="zoom-out" data-aos-duration="3000" style={{ marginTop: "25%" }}>
              <video width="277px" height="400px" style={{ marginTop: "0px", borderRadius: "20px" }} autoPlay loop={true} muted={true}>
                <source src={iPad_Video} type="video/mp4" />
              </video>
              <img src={android_studio} style={{ width: "45px", height: "46px", position: "absolute", zIndex:"1", bottom: "61px", left:"-10px"}} />

              </div>
            </Grid>
          </Grid>
          </Grid>
          </Grid>
          </Grid>

      </Grid>
    </div>

  );
}

export default Featured_Project;
