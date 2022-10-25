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


const Side = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  let github = []
  let commit1, commit2, commit3;
  const [isLoading, setLoading] = useState(true);
  const [details, setDetails] = useState([])
  const [gitImg, setGitImg] = useState(null)
  const [gitDate, setDate] = useState(null)
  let dataReturned;
  // console.log("data: " + strings)
  useEffect(() => {
    async function test() {
      const octokit = new Octokit({ auth: apiKey });
      dataReturned = await octokit.request('GET /repos/jktoo/UniversalCalculator/commits', {
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
  // function display(){
  //   setTimeout(() => {
  //     console.log(dataReturned)
  //   }, 3000);
  // }
  // console.log("logging data: " + data)

  // console.log(det)


  return (
    <>

      <div style={{ flexDirection: "column", display: "flex" }}>
        <div style={{ height: "50%", margin: "10px 10px 10px 10px" }}>
          <div style={{ flexDirection: "row", display: "flex" }}>
            <div style={{ width: "50%", margin: "10px 10px 10px 10px" }}>
              <Card style={{ height: "100%", background: "white", color: "black",boxShadow: "3px 3px 3px #888888" }}>

                <img className='sidenav-img' style={{ marginTop: "10px" }} src={profile}></img>
                <h3>Justin Too</h3>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <h3 style={{ margin: "10px" ,color: "rgb(0, 114, 229)"}}>Status: </h3><p style={{ marginTop: "12px" }}><i>Student</i> </p></div>
              </Card>
            </div>
            <div style={{ width: "50%", margin: "10px 10px 10px 10px" }}>
              <Card style={{ background: "white", color: "black",boxShadow: "3px 3px 3px #888888" }}>

                <div>
                  <div className='stats'>
                  </div>
                  <div className='stats'>
                    <h3 style={{color: "rgb(0, 114, 229)"}}>Location:</h3>
                    <p className='statanswers'>The Big Apple</p>
                  </div>
                  <div className='stats'>
                    <h3 style={{color: "rgb(0, 114, 229)"}}>Degree:</h3>
                    <p className='statanswers'>Associates In Computer Science<br></br>Bachelors (Pursuing)</p>
                  </div>
                  <div className='stats'>
                    <h3 style={{color: "rgb(0, 114, 229)"}}>Hobbies:</h3>
                    <p className='statanswers'>Programming | Gaming</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          <div style={{ height: "50%", margin: "10px 10px 10px 10px" }}>
            <Card style={{ height: "100%", width: "100%", background: "white",boxShadow: "2px 2px 2px #888888" }}>
              <h2 style={{ justifyContent: "center",  color: "rgb(0, 114, 229)",}}>Featured Github Project </h2>
              <div style={{ justifyContent: "center"}}>
                <h3>Universal Calculator</h3>
                <div>{isLoading ? <Skeleton><div style={{ justifyContent: "left", display:"flex", paddingBottom:"50px"}}>
                    <Card style={{width:"100%", marginLeft:"10px", paddingBottom:"20px", background: "linear-gradient(to right bottom, #007FFF, #0059B2) 120%", color:"white", boxShadow: "3px 3px 3px #888888"}}>
                      <h3>Recent Commits:</h3>

                      <div style={{paddingRight:"5px"}}>
                        <div style={{ float: "left", paddingLeft:"10px", }}>
                        - {commit1}
                        </div><br/>
                        <div style={{ float: "left",paddingLeft:"10px", }}>
                        - {commit2}
                        </div><br/>
                        <div style={{ float: "left",paddingLeft:"7px", paddingRight:"10px"}}>
                        - {commit3}
                        </div>
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
                  </div></Skeleton>: <>
                  <div style={{ justifyContent: "left", display:"flex", paddingBottom:"50px"}}>
                    <Card style={{width:"50%", marginLeft:"10px", paddingBottom:"20px", background: "linear-gradient(to right bottom, #007FFF, #0059B2) 120%", color:"white", boxShadow: "3px 3px 3px #888888"}}>
                      <h3>Recent Commits:</h3>

                      <div style={{paddingRight:"5px"}}>
                        <div style={{ float: "left", paddingLeft:"10px", }}>
                        - {commit1}
                        </div><br/>
                        <div style={{ float: "left",paddingLeft:"10px", }}>
                        - {commit2}
                        </div><br/>
                        <div style={{ float: "left",paddingLeft:"7px", paddingRight:"10px"}}>
                        - {commit3}
                        </div>
                        </div>
                    </Card>
                    <Card style={{width:"50%", marginLeft:"10px",marginRight:"10px", background: "linear-gradient(to right bottom, #007FFF, #0059B2) 120%", color:"white",  boxShadow: "3px 3px 3px #888888"}}>
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
                  </div>
                </>}
                </div>

              </div>

            </Card>
          </div>
        </div>

      </div>
    </>
  );
}

export default Side;
