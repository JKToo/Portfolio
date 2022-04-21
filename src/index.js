import React from 'react';
import ReactDOM from 'react-dom';
// import Content from './Content';
import App from "./App"
import './styles.css';
import {BrowserRouter} from 'react-router-dom'
//import reportWebVitals from './reportWebVitals';



// function Page() {
//   return (
//   <>
//     <Header />
//     <Content />
//   </>
//   )
// }


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


ReactDOM.render(
   <BrowserRouter>
    <App/>
    </BrowserRouter>, 
    document.getElementById('root')
);

