import React, { useEffect } from 'react';
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
import python from './Sources/python.png'
import car from './Sources/car.png'
import Cards from "@mui/material/Card"
import Avatar from "@mui/material/Avatar";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";

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
import { CardActionArea } from '@mui/material';

function Projects() {
useEffect(() => {
Aos.init({ duration: 2000 });
}, [])
return (
<>
<h1 className='title'>My Work </h1>


    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
        <Grid item xs={12}>
            <Grid container justifyContent="center" spacing={3}>

                <Grid key={1} item>
                <div className='layout' data-aos="fade-up" >
                    <CardActionArea href="https://github.com/JKToo/Laundry-Reservation" target="_blank">
                        <Cards sx={{ minWidth: 340, maxWidth: 350, color:"#0072E5", boxShadow: "1px 2px 2px 2px #888888"}}>
                            <CardHeader
                                title="First Come First Serve"
                                subheader="August 25, 2020"
                            />
                            <CardMedia
                                component="img"
                                height="194"
                                image={laundry}
                                alt="Laundry"
                            />
                            <CardContent>
                                <Typography variant="body1" color="text.primary">
                                    Lead group for web development <br></br>
                                    Interviewed client for website expectations
                                </Typography><hr />
                                <Typography variant="body2" color="text.secondary">
                                    Developed in: <br></br>
                                    <div style={{ display: 'flex', justifyContent: 'center', padding: 4 }}>
                                        <div className='html'>HTML</div>
                                        <div className='css'>CSS</div>
                                        <div className='js'>Javascript</div>
                                        <div className='php'>PHP</div>
                                        <div className='mysql'>MySQL</div></div>
                                </Typography>
                            </CardContent>
                        </Cards>
                    </CardActionArea>
                    </div>
                </Grid>

                <Grid key={2} item>
                <div className='layout' data-aos="fade-up" >
                    <CardActionArea href="https://github.com/JKToo/Study-Peer-Discord-Bot" target="_blank">
                    <Cards sx={{ minWidth: 340, maxWidth: 350, color:"#0072E5", boxShadow: "1px 2px 2px 2px #888888" }}>

                            <CardHeader
                                title="Study Peer"
                                subheader="September 5, 2021"
                            />
                            <CardMedia
                                component="img"
                                height="194"
                                image={studypeer}
                                alt="study"
                            />
                            <CardContent>
                                <Typography variant="body1" color="text.primary">
                                    Discord Bot for self studies <br></br>
                                    Translates languages and tests users
                                </Typography><hr />
                                <Typography variant="body2" color="text.secondary">
                                    Developed in: <br></br>
                                    <div style={{ display: 'flex', justifyContent: 'center', padding: 4 }}>
                                        <div className='python'>Python</div>
                                        <div className='api'>REST API</div>
                                    </div>
                                </Typography>
                            </CardContent>
                        </Cards>
                    </CardActionArea>
                    </div>
                </Grid>

                <Grid key={3} item>
                <div className='layout' data-aos="fade-up" >
                    <CardActionArea href="https://github.com/JKToo/Portfolio" target="_blank">
                    <Cards sx={{ minWidth: 340, maxWidth: 350, color:"#0072E5", boxShadow: "1px 2px 2px 2px #888888" }}>
                            <CardHeader
                                title="Portfolio Website"
                                subheader="April, 2020"
                            />
                            <CardMedia
                                component="img"
                                height="194"
                                image={portfolio}
                                alt="portfolio"
                            />
                            <CardContent>
                                <Typography variant="body1" color="text.primary">
                                    Source code for this website <br></br>
                                    using React.js
                                </Typography><hr />
                                <Typography variant="body2" color="text.secondary">
                                    Developed in: <br></br>
                                    <div style={{ display: 'flex', justifyContent: 'center', padding: 4 }}>
                                        <div className='html'>HTML</div>
                                        <div className='css'>CSS</div>
                                        <div className='js'>Javascript</div>
                                        <div className='react'>React</div></div>
                                </Typography>
                            </CardContent>
                        </Cards>
                    </CardActionArea>
                    </div>
                </Grid>

                <Grid key={4} item>
                <div className='layout' data-aos="fade-up" >
                    <CardActionArea href="https://github.com/JKToo/Cooking101" target="_blank">
                    <Cards sx={{ minWidth: 340, maxWidth: 350, color:"#0072E5", boxShadow: "1px 2px 2px 2px #888888" }}>
                            <CardHeader
                                title="Cooking101"
                                subheader="February, 2022"
                            />
                            <CardMedia
                                component="img"
                                height="194"
                                image={cooking101}
                                alt="cooking101"
                            />
                            <CardContent>
                                <Typography variant="body1" color="text.primary">
                                    iPhone Application using REST API <br></br>
                                    Incorporated User Defaults and Core Data
                                </Typography><hr />
                                <Typography variant="body2" color="text.secondary">
                                    Developed in: <br></br>
                                    <div style={{ display: 'flex', justifyContent: 'center', padding: 4 }}>
                                        <div className='swift'>Swift</div>
                                        <div className='api'>REST API</div></div>
                                </Typography>
                            </CardContent>
                        </Cards>
                    </CardActionArea>
                    </div>
                </Grid>

                <Grid key={5} item>
                <div className='layout' data-aos="fade-up" >
                    <CardActionArea className="comingSoon">
                    <Cards sx={{ minWidth: 340, maxWidth: 350, color:"#0072E5", boxShadow: "1px 2px 2px 2px #888888" }}>
                            <CardHeader
                                title="Universal Calculator"
                                subheader="September 26, 2021"
                            />
                            <CardMedia
                                component="img"
                                height="194"
                                image={calculator}
                                alt="Laundry"
                            />
                            <CardContent>
                                <Typography variant="body1" color="text.primary">
                                    Multi-purpose calculator for Android <br></br>
                                    <strong>In works on publishing</strong>
                                </Typography><hr />
                                <Typography variant="body2" color="text.secondary">
                                    Developed in: <br></br>
                                    <div style={{ display: 'flex', justifyContent: 'center', padding: 4 }}>
                                        <div className='js'>Java</div>
                                        <div className='css'>XML</div></div>
                                </Typography>
                            </CardContent>
                        </Cards>
                    </CardActionArea>
                    </div>
                </Grid>

                <Grid key={6} item>
                <div className='layout' data-aos="fade-up" >
                    <CardActionArea href="https://github.com/JKToo/Quizlet_API" target="_blank">
                    <Cards sx={{ minWidth: 340, maxWidth: 350, color:"#0072E5", boxShadow: "1px 2px 2px 2px #888888" }}>
                            <CardHeader
                                title="Quizlet API"
                                subheader="May 3, 2022"
                            />
                            <CardMedia
                                component="img"
                                height="194"
                                image={quizlet}
                                alt="quizlet"
                            />
                            <CardContent>
                                <Typography variant="body1" color="text.primary">
                                    Developed an API to scrape Quizlet for <br></br>
                                    flashcard info and returns in a JSON File
                                </Typography><hr />
                                <Typography variant="body2" color="text.secondary">
                                    Developed in: <br></br>
                                    <div style={{ display: 'flex', justifyContent: 'center', padding: 4 }}>
                                        <div className='js'>Javascript</div>
                                        <div className='api'>API</div></div>
                                </Typography>
                            </CardContent>
                        </Cards>
                    </CardActionArea>
                    </div>
                </Grid>

                <Grid key={7} item>
                <div className='layout' data-aos="fade-up" >
                    <CardActionArea href="https://github.com/JKToo/EasyRental" target="_blank">
                    <Cards sx={{ minWidth: 340, maxWidth: 350, color:"#0072E5", boxShadow: "1px 2px 2px 2px #888888" }}>
                            <CardHeader
                                title="Easy Rental"
                                subheader="August 12, 2022"
                            />
                            <CardMedia
                                component="img"
                                height="194"
                                image={car}
                                alt="car"
                            />
                            <CardContent>
                                <Typography variant="body1" color="text.primary">
                                    MySQL Project<br></br>
                                    DB designed to make rental tracking easier
                                </Typography><hr />
                                <Typography variant="body2" color="text.secondary">
                                    Developed in: <br></br>
                                    <div style={{ display: 'flex', justifyContent: 'center', padding: 4 }}>
                                        <div className='mysql'>MySQL</div></div>
                                </Typography>
                            </CardContent>
                        </Cards>
                    </CardActionArea>
                    </div>
                </Grid>

                <Grid key={8} item>
                <div className='layout' data-aos="fade-up" >
                    <CardActionArea href="https://github.com/JKToo/C-Plus-Plus" target="_blank">
                    <Cards sx={{ minWidth: 340, maxWidth: 350, color:"#0072E5", boxShadow: "1px 2px 2px 2px #888888" }}>
                            <CardHeader
                                title="C++"
                                subheader="2017-2022"
                            />
                            <CardMedia
                                component="img"
                                height="194"
                                image={cpp}
                                alt="car"
                            />
                            <CardContent>
                                <Typography variant="body1" color="text.primary">
                                    All of my C++ work<br></br>
                                    Includes School projects
                                </Typography><hr />
                                <Typography variant="body2" color="text.secondary">
                                    Developed in: <br></br>
                                    <div style={{ display: 'flex', justifyContent: 'center', padding: 4 }}>
                                        <div className='cpp'>C++</div></div>
                                </Typography>
                            </CardContent>
                        </Cards>
                    </CardActionArea>
                    </div>
                </Grid>

                <Grid key={9} item>
                <div className='layout' data-aos="fade-up" >
                    <CardActionArea href="https://github.com/JKToo/Java" target="_blank">
                    <Cards sx={{ minWidth: 340, maxWidth: 350, color:"#0072E5", boxShadow: "1px 2px 2px 2px #888888" }}>
                            <CardHeader
                                title="Java"
                                subheader="2017-2022"
                            />
                            <CardMedia
                                component="img"
                                height="194"
                                image={java}
                                alt="car"
                            />
                            <CardContent>
                                <Typography variant="body1" color="text.primary">
                                    All of my Java work <br></br>
                                    Includes School projects
                                </Typography><hr />
                                <Typography variant="body2" color="text.secondary">
                                    Developed in: <br></br>
                                    <div style={{ display: 'flex', justifyContent: 'center', padding: 4 }}>
                                        <div className='js'>Java</div>
                                    </div>
                                </Typography>
                            </CardContent>
                        </Cards>
                    </CardActionArea>
                    </div>
                </Grid>

                <Grid key={10} item>
                <div className='layout' data-aos="fade-up" >
                    <CardActionArea href="https://github.com/JKToo/HTML" target="_blank">
                    <Cards sx={{ minWidth: 340, maxWidth: 350, color:"#0072E5", boxShadow: "1px 2px 2px 2px #888888" }}>
                            <CardHeader
                                title="HTML/CSS"
                                subheader="2017-2022"
                            />
                            <CardMedia
                                component="img"
                                height="194"
                                image={html}
                                alt="car"
                            />
                            <CardContent>
                                <Typography variant="body1" color="text.primary">
                                    All of my HTML / CSS work <br></br>
                                    Includes School projects
                                </Typography><hr />
                                <Typography variant="body2" color="text.secondary">
                                    Developed in: <br></br>
                                    <div style={{ display: 'flex', justifyContent: 'center', padding: 4 }}>
                                        <div className='html'>HTML</div>
                                        <div className='css'>CSS</div>
                                    </div>
                                </Typography>
                            </CardContent>
                        </Cards>
                    </CardActionArea>
                    </div>
                </Grid>

                <Grid key={11} item>
                <div className='layout' data-aos="fade-up" >
                    <CardActionArea href="https://github.com/JKToo/Python" target="_blank">
                    <Cards sx={{ minWidth: 340, maxWidth: 350, color:"#0072E5", boxShadow: "1px 2px 2px 2px #888888" }}>
                            <CardHeader
                                title="Python"
                                subheader="2017-2022"
                            />
                            <CardMedia
                                component="img"
                                height="194"
                                image={python}
                                alt="car"
                            />
                            <CardContent>
                                <Typography variant="body1" color="text.primary">
                                    All of my Python work <br></br>
                                    Includes School projects
                                </Typography><hr />
                                <Typography variant="body2" color="text.secondary">
                                    Developed in: <br></br>
                                    <div style={{ display: 'flex', justifyContent: 'center', padding: 4 }}>
                                        <div className='python'>Python</div>
                                    </div>
                                </Typography>
                            </CardContent>
                        </Cards>
                    </CardActionArea>
                    </div>
                </Grid>

                <Grid key={12} item>
                <div className='layout' data-aos="fade-up" >
                    <CardActionArea href="https://github.com/JKToo/PHP" target="_blank">
                    <Cards sx={{ minWidth: 340, maxWidth: 350, color:"#0072E5", boxShadow: "1px 2px 2px 2px #888888" }}>
                            <CardHeader
                                title="PHP"
                                subheader="2017-2022"
                            />
                            <CardMedia
                                component="img"
                                height="194"
                                image={php}
                                alt="car"
                            />
                            <CardContent>
                                <Typography variant="body1" color="text.primary">
                                    All of my PHP work <br></br>
                                    Includes School projects
                                </Typography><hr />
                                <Typography variant="body2" color="text.secondary">
                                    Developed in: <br></br>
                                    <div style={{ display: 'flex', justifyContent: 'center', padding: 4 }}>
                                        <div className='php'>PHP</div>

                                    </div>
                                </Typography>
                            </CardContent>
                        </Cards>
                    </CardActionArea>
                    </div>
                </Grid>

            </Grid>
        </Grid>
    </Grid>
</>
);
}

export default Projects;