import $ from 'jquery';
import React, { useState } from 'react';
import "react-vertical-timeline-component/style.min.css"
import profile from './Sources/avatar.jpg';
import Card from "@mui/material/Card";
import axios from "axios"
import { useEffect } from 'react';
import Github from "./components/github"
import { Octokit } from "@octokit/core"
import { Skeleton } from "@mui/material";
import { format } from "date-fns";
import Button from '@mui/material/Button';
import Grid from "@mui/material/Grid";


const Side = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  let github = []
  let commit1, commit2, commit3;
  const [isLoading, setLoading] = useState(true);
  const [details, setDetails] = useState([])
  const [gitImg, setGitImg] = useState(null)
  const [gitDate, setDate] = useState(null)
  let dataReturned;

  useEffect(() => {
    async function test() {
      const octokit = new Octokit({ auth: apiKey });
      dataReturned = await octokit.request('GET /repos/jktoo/Universal-Calculator/commits', {
        owner: 'OWNER',
        repo: 'REPO',
      })
      github.push(dataReturned.data[0].commit.message)
      github.push(dataReturned.data[1].commit.message)
      github.push(dataReturned.data[2].commit.message)
      setLoading(false);
      setDetails(github)
      setGitImg(dataReturned.data[0].author.avatar_url)
      let date = new Date(dataReturned.data[0].commit.author.date)
      let formattedDate = format(date, "MMMM do, yyyy H:mma");
      setDate(formattedDate);
    }
    test();
  }, [])


  commit1 = details[0];
  commit2 = details[1];
  commit3 = details[2];


  return (
    <>
          <Grid sx={{ flexGrow: 1 }} container spacing={2} style={{width:"100%", marginLeft:"0.5px"}}>

            <Grid item xs={12}>
            <Grid container  spacing={3}>
            <Grid key={1}   item   className = "resizer">

            
            <div className='layout' data-aos="fade-up">
            

                
                <Card style={{ height: "50%", background: "white", color: "black",boxShadow: "3px 3px 3px #888888",minHeight:300, maxHeight:300 }}>

                <img className='sidenav-img' style={{ marginTop: "10px", width: "25%", borderRadius:"60%" }} src={profile}></img>
                <p>Justin Too</p>
                  <div style={{display:"flex", justifyContent:"center"}}>
                    <Button variant="contained" style={{margin:5}} href="https://github.com/JKToo" target="_blank">Github</Button>
                    <Button variant="contained" style={{margin:5}} href="https://www.linkedin.com/in/justin-k-too/" target="_blank">Linkedin</Button>
                    </div>
                </Card>
               
             
              </div>
            </Grid>

            <Grid key={2} item className = "resizer">


            <div  data-aos="fade-up" >

              <Card style={{ background: "white", color: "black",boxShadow: "3px 3px 3px #888888", paddingLeft:"10px", paddingRight:"10px", minHeight:300, maxHeight:300}}>

                <div>
                  <div className='stats'>
                  </div>
                  <div className='stats'>
                    <h3 style={{color: "rgb(0, 114, 229)"}}>Location:</h3>
                    <p className='statanswers'>New York City</p>
                  </div>
                  <div className='stats'>
                    <h3 style={{color: "rgb(0, 114, 229)"}}>Degree:</h3>
                    <p className='statanswers'>Associates In Computer Science<br></br>Bachelors in Computer Science</p>
                  </div>
                  <div className='stats'>
                    <h3 style={{color: "rgb(0, 114, 229)"}}>Hobbies:</h3>
                    <p className='statanswers'>Programming | Gaming</p>
                  </div>
                </div>
              </Card>
              
              </div>
              </Grid>
              </Grid>
              </Grid>
            {/* </div> */}


          <Grid key={3} item style={{width:"100%"}}>

          <div className='layout' data-aos="fade-up" >
            <Card style={{ height: "100%", width: "100%", background: "white",boxShadow: "2px 2px 2px #888888" }}>
              <h2 style={{ justifyContent: "center",  color: "rgb(0, 114, 229)",}}>Latest Github Activity</h2>
              <div style={{ justifyContent: "center"}}>
                <h3>Omni Tool</h3>
                <div style={{marginTop:"-10px"}}> <i>Live data feed</i></div><br/>
                <div>{isLoading ? 
                  <Skeleton>
                    <div style={{ justifyContent: "left", display:"flex", paddingBottom:"50px"}}>
                    <Card style={{width:"100%",  paddingBottom:"20px", background: "linear-gradient(to right bottom, #007FFF, #0059B2) 120%", color:"white", boxShadow: "3px 3px 3px #888888"}}>
                      <h3>Recent Commits:</h3>
                      <div style={{ float: "left", marginLeft:"10px", }}>
                        - {commit1}
                        </div><br/>
                        <div style={{ float: "left", marginLeft:"10px", }}>
                        - {commit2}
                        </div><br/>
                        <div style={{ float: "left",marginLeft:"10px"}}>
                        - {commit3}
                        </div>
                    </Card>
                    <Card style={{width:"100%", marginLeft:"10px",marginRight:"10px", background: "linear-gradient(to right bottom, #007FFF, #0059B2) 120%", color:"white",  boxShadow: "3px 3px 3px #888888"}}>
                      <h3>Last modified:</h3>
                      {gitDate}

                      <div style={{display:"flex", flexDirection:"row"}}>
                        <div style={{width:"50%", float:"right"}}>
                      <h3>Repository Status:</h3>
                      </div>
                      <div style={{width:"10%", marginTop:"5px"}}>
                      <p><i>Private</i></p>
                      </div>
                      </div>
                    </Card>
                  </div></Skeleton>
                  
                  : 
                  
                  <>

                  <div style={{ justifyContent: "left", display:"flex", paddingBottom:"50px"}}>
                    <Card style={{width:"50%", marginLeft:"10px", paddingBottom:"20px", background: "linear-gradient(to right bottom, #007FFF, #0059B2) 120%", color:"white", boxShadow: "3px 3px 3px #888888"}}>
                      <h3>Recent Commits:</h3>

                        <div style={{ textAlign:"start", marginLeft:"20px"}}>
                        - {commit1}
                        <br/>
                        - {commit2}
                        <br/>
                        - {commit3}
                        </div>
                    </Card>
                    <Card style={{width:"50%", marginLeft:"10px",marginRight:"10px", background: "linear-gradient(to right bottom, #007FFF, #0059B2) 120%", color:"white",  boxShadow: "3px 3px 3px #888888"}}>
                      <h3>Last modified:</h3>
                      {gitDate}

                     
                        <div style={{width:"100%", textAlign:"center"}}>
                      <p><b>Repository Status:</b>    <i style={{textDecoration:"none"}}>Private</i></p>
                     
                      </div>
                    </Card>
                  </div>
                </>}
                </div>

              </div>

            </Card>
            </div>
          </Grid>

      </Grid>

    </>
  );
}

export default Side;
