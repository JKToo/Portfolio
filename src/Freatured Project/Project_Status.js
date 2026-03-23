import React from 'react';
import { FaBug, FaRegFileAlt, FaBuffer, FaGithub, FaGooglePlay } from 'react-icons/fa';
import Grid from "@mui/material/Grid";

function Featured_Project() {
  const stages = [
    { name: 'Plan', icon: <FaRegFileAlt />, color: '#146CF6' },
    { name: 'Design', icon: <FaBuffer />, color: '#188AF0' },
    { name: 'Development', icon: <FaGithub />, color: '#00B7D8' },
    { name: 'Beta', icon: <FaBug />, color: '#00D4B0' },
    { name: 'Deployment', icon: <FaGooglePlay />, color: '#00D54B' },
  ];

  const currentStage = 3; 

  return (
    <div className="featured_project_size">
      <div className="pstatus" style={{ position: 'relative', margin: '50px auto', width: '80%' }}>
        <Grid container justifyContent="space-between" alignItems="center" style={{ position: 'relative' }}>
          
          {/* Base line */}
          <div style={{
            position: 'absolute',
            top: 25,
            left: '10%',
            right: '10%',
            height: 6,
            backgroundColor: '#ccc',
            borderRadius: 3,
            zIndex: 0
          }} />

          {/* Progress bar */}
          <div style={{
            position: 'absolute',
            top: 25,
            left: '10%',
            width: `${(currentStage / (stages.length - 1)) * 80}%`,
            height: 6,
            backgroundColor: '#146CF6',
            borderRadius: 3,
            zIndex: 1,
            transition: 'width 0.5s ease'
          }} />

          {stages.map((stage, idx) => {
            const completed = idx <= currentStage;
            return (
              <Grid item key={idx} style={{ textAlign: 'center', flex: 1, position: 'relative' }}>
                <div style={{
                  width: 50,
                  height: 50,
                  borderRadius: '50%',
                  backgroundColor: completed ? stage.color : '#fff',
                  border: `3px solid ${stage.color}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto',
                  zIndex: 2,
                  position: 'relative',
                  transition: 'background-color 0.3s'
                }}>
                  {React.cloneElement(stage.icon, { color: completed ? '#fff' : stage.color, size: 24 })}
                </div>
                <div style={{ marginTop: 8 }}>{stage.name}</div>
              </Grid>
            )
          })}
        </Grid>
      </div>
    </div>
  );
}

export default Featured_Project;