import $ from 'jquery';
import React, {useState} from 'react';
import "react-vertical-timeline-component/style.min.css"
import Card from "@mui/material/Card";
import axios from "axios"
import { useEffect } from 'react';
const { Octokit } = require("@octokit/core");

const Github = (data) => {

  
  let github = []
  let commit1, commit2, commit3;
  const [isLoading, setLoading] = useState(true);
  
  // console.log("data: " + strings)

  
// console.log("logging data: " + data)

// console.log(det)
commit1 = data;

  return (
    <>
    <h1>{data}</h1>
    </>
  );
}

export default Github;
