import {React, useState, useEffect} from "react";
import {
  Box,
  Toolbar,
  Typography,
  Grid,
} from "@material-ui/core";


const Content = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("./assets/data.json")
      .then(response => response.json())
      .then(
        (data) => setVideos(data.result),
        (error) => console.log(error)
      );
      

    }, []);
    

  return (
    <Box p={8}>
      <Toolbar />
      <Typography 
        variamt='h5'
        color='textPrimary'
        style={{ fontWeight: 600 }}>
        Recomendados
      </Typography> 

        <Grid container spacing={4}>
          {
            videos.map((item, index) => (
              <Grid item lg={3} md={4} sm={6} xs={12} key={index}>
                <Box >
                  <img
                    style={{ width: '100%' }}
                    alt={item.title}
                    src={item.thumb}
                  />
                  <Box>
                    <Typography
                      style={{ fontWeight: 600 }}
                      gutterBottom
                      variant='body1'
                      color='textPrimary'
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      display='block'
                      variant='body2'
                      color='textSecondary'
                    >
                      {item.channel}
                    </Typography>
                    <Typography variant='body2' color='textSecondary'>
                      {`${item.views} • ${item.date}`}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))
          }
        </Grid>
    </Box>
  )
};

export default Content;