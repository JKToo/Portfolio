import React from 'react';
import ReactDOM from 'react-dom';
// import Content from './Content';
import App from "./App"
import './CSS/styles.css';
import './CSS/languages.css'
import './CSS/about.css'
import './CSS/timeline.css'
import './CSS/projects.css'
import './CSS/landing.css'
import './CSS/side.css'
import {BrowserRouter} from 'react-router-dom'
import $ from 'jquery';
//import reportWebVitals from './reportWebVitals';

var lZone = $('.left-zone');
$(window).on('scroll', function() {
    lZone.css('margin-top', $(document).scrollTop() + 100);
});



ReactDOM.render(
   <BrowserRouter>
    <App/>
    </BrowserRouter>, 
    document.getElementById('root')
);

