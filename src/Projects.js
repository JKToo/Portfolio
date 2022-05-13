import React, { useEffect }   from 'react';
import php from './Sources/php.png'
import java from './Sources/java.png'
import cooking101 from './Sources/cooking101.png'
import './CSS/projects.css';
import cpp from './Sources/cpp.png'
import laundry from './Sources/laundry.png'
import studypeer from './Sources/studypeer.png'
import portfolio from './Sources/portfolio.png'
import html from './Sources/html.png'
import quizlet from './Sources/quizlet.png'
import calculator from './Sources/calculator.png'
import {
    Card,
    CardBlock,
    CardFooter,
    CardTitle,
    CardText,
    CardImg,
  } from 'react-bootstrap-card';
  import Aos from "aos";
  import "aos/dist/aos.css";

function Projects() {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, [])
return (
  <div className='projectbody' style={{height:2000}}>
    <h1 className='title'>My Work </h1>
    <div className='layout' data-aos="fade-up" >
        <a href="https://github.com/JKToo/Laundry-Reservation" target="_blank">
        <Card style={{width: '18rem'}} className="card">
            <CardImg src={laundry} style={{height: 286, width: 288, }}/>
            <CardBlock>
            <CardTitle>
                Laundry Website
            </CardTitle>
            Lead group for web development <br></br>
            Interviewed client for website expectations
            </CardBlock><hr></hr>
            <CardFooter className="text-xs-center">
                <div style={{display:'flex', justifyContent:'center', padding:4}}>
            <div className='html'>HTML</div>
            <div className='css'>CSS</div>
            <div className='js'>Javascript</div>
            <div className='php'>PHP</div>
            <div className='mysql'>MySQL</div>
            </div>
            </CardFooter>
         </Card>
         </a>
         <a href="https://github.com/JKToo/Study-Peer-Discord-Bot" target="_blank">
         <Card style={{width: '18rem'}} className="card">
            <CardImg src={studypeer} style={{height: 286, width: 288}}/>
            <CardBlock>
            <CardTitle>
                Study Peer
            </CardTitle>
            Discord Bot for self studies <br></br>
            Translates languages and tests users
            </CardBlock><hr></hr>
            <CardFooter className="text-xs-center">
            <div style={{display:'flex', justifyContent:'center', padding:4}}>
                <div className='python'>Python</div>
                <div className='api'>REST API</div>
            </div>
            </CardFooter>
         </Card>
         </a>
         <a href="https://github.com/JKToo/Portfolio" target="_blank">
         <Card style={{width: '18rem'}} className="card">
            <CardImg src={portfolio} style={{height: 286, width: 288}}/>
            <CardBlock>
            <CardTitle>
                Portfolio Website
            </CardTitle>
                Source code for this website <br></br>
                using React.js
            </CardBlock>
            <hr></hr>
            <CardFooter className="text-xs-center">
             <div style={{display:'flex', justifyContent:'center', padding:4}}>
             <div className='html'>HTML</div>
            <div className='css'>CSS</div>
            <div className='js'>Javascript</div>
            <div className='react'>React</div>
            </div>
            </CardFooter>
         </Card>
        </a>
    </div>

    <br></br><br></br>
{/* New Row */}


    <div className='layout'  data-aos="fade-up">
    <a href= "https://github.com/JKToo/Cooking101" target="_blank">
        <Card style={{width: '18rem'}} className="card">
            <CardImg src={cooking101} style={{height: 286, width: 288}}/>
            <CardBlock>
            <CardTitle>
                Cooking 101
            </CardTitle>
                iPhone Application using REST API <br></br>
                Incorporated User Defaults and Core Data
            </CardBlock><hr></hr>
            <CardFooter className="text-xs-center">
            <div style={{display:'flex', justifyContent:'center', padding:4}}>
             <div className='swift'>Swift</div>
            <div className='api'>REST API</div>
            </div>
            </CardFooter>
         </Card>
    </a>

        <div className='comingSoon'>
         <Card style={{width: '18rem'}} className="card">
            <CardImg src={calculator} style={{height: 286, width: 288}}/>
            <CardBlock>
            <CardTitle>
                Universal Calculator
            </CardTitle>
                Multi-purpose calculator for Android <br></br>
            </CardBlock><hr></hr>
            <CardFooter className="text-xs-center">
            <div style={{display:'flex', justifyContent:'center', padding:4}}>
             <div className='js'>Java</div>
            <div className='css'>XML</div>
            </div>
            </CardFooter>
         </Card>
         </div>

        <a href="https://github.com/JKToo/Quizlet_API" target="_blank">
         <Card style={{width: '18rem'}} className="card">
            <CardImg src={quizlet} style={{height: 286, width: 284, marginLeft:2, marginRight:2, marginTop:3}}/>
            <CardBlock>
            <CardTitle>
            Quizlet API
            </CardTitle>
           Developed an API to scrape Quizlet for <br></br>
           flashcard info and returns in a JSON File
            </CardBlock> <hr></hr>
            <CardFooter className="text-xs-center">
            <div style={{display:'flex', justifyContent:'center', padding:4}}>
            <div className='js'>Javascript</div>
            <div className='api'>API</div>
            </div>
            </CardFooter>
         </Card>
         </a>
    </div>

    {/* 
        New row
    */}
  <br></br><br></br>

<div className='layout' data-aos="fade-up" >
        <a href="https://github.com/JKToo/C-Plus-Plus" target="_blank">
        <Card style={{width: '18rem'}} className="card">
            <CardImg src={cpp} style={{height: 286, width: 288, }}/>
            <CardBlock>
            <CardTitle>
                C++
            </CardTitle>
            All of my C++ work<br></br>
            Includes School projects
            </CardBlock><hr></hr>
            <CardFooter className="text-xs-center">
                <div style={{display:'flex', justifyContent:'center', padding:4}}>
            <div className='cpp'>C++</div>
            </div>
            </CardFooter>
         </Card>
         </a>
         <a href="https://github.com/JKToo/Java" target="_blank">
         <Card style={{width: '18rem'}} className="card">
            <CardImg src={java} style={{height: 286, width: 288}}/>
            <CardBlock>
            <CardTitle>
                Java
            </CardTitle>
            All of my Java work <br></br>
            Includes School projects
            </CardBlock><hr></hr>
            <CardFooter className="text-xs-center">
            <div style={{display:'flex', justifyContent:'center', padding:4}}>
                <div className='js'>Java</div>
            </div>
            </CardFooter>
         </Card>
         </a>

         <div className='comingSoon'>
             <a href="https://github.com/JKToo/PHP" target="_blank">
                <Card style={{width: '18rem'}} className="card">
                    <CardImg src={php} style={{height: 286, width: 288}}/>
                    <CardBlock>
                    <CardTitle>
                        PHP
                    </CardTitle>
                        All of my PHP work <br></br>
                        Includes School projects
                    </CardBlock>
                    <CardFooter className="text-xs-center"><hr></hr>
                    <div style={{display:'flex', justifyContent:'center', padding:4}}>
                    <div className='php'>PHP</div>
                    </div>
                    </CardFooter>
                </Card>
            </a>
        </div>
       
    </div>

<br></br><br></br>

    <div className='layout' data-aos="fade-up" >
    <a href="https://github.com/JKToo/HTML" target="_blank">
         <Card style={{width: '18rem'}} className="card">
            <CardImg src={html} style={{height: 286, width: 284, marginLeft:2, marginRight:2, marginTop:3}}/>
            <CardBlock>
            <CardTitle>
            HTML/CSS
            </CardTitle>
           All of my HTML / CSS work <br></br>
           Includes School projects
            </CardBlock> <hr></hr>
            <CardFooter className="text-xs-center">
            <div style={{display:'flex', justifyContent:'center', padding:4}}>
            <div className='html'>HTML</div>
            <div className='css'>CSS</div>
            </div>
            </CardFooter>
         </Card>
         </a>
        
       
    </div>
  </div>
);
}

  export default Projects;