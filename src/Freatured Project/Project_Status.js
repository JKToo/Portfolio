import React, { useEffect }   from 'react';
import { Timeline, TimelineEvent } from '@mailtop/horizontal-timeline'
import { FaBug, FaRegCalendarCheck, FaRegFileAlt, FaBuffer, FaGithub, FaGooglePlay, FaAndroid } from 'react-icons/fa'
import Grid from "@mui/material/Grid";


function Featured_Project() {
    return (
<div style={{scale:"0.8"}} >

<div class="pstatus">

<Timeline minEvents={5} placeholder variant="" >
  <TimelineEvent
    color='#146CF6'
    icon={FaRegFileAlt}
    title='Plan'
    
  />
  <TimelineEvent
    color='#188AF0'
    icon={FaBuffer}
    title='Design'
  />

  <TimelineEvent
    color='#00B7D8'
    icon={FaGithub}
    title='Development'
  />

  <TimelineEvent
    color='#00D4B0'
    icon={FaBug}
    title='Beta'

  />


   <TimelineEvent
//    color='#00D54B'
    icon={FaGooglePlay}
    title='Deployment'
    // subtitle='TBD'
    
  />

</Timeline>
</div>
</div>

    )
}
export default Featured_Project