import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import {useState,useEffect} from 'react';
import axios from 'axios';
import { Typography } from '@mui/material';



export default function Qualifications() {
    const [loader,setLoader] = useState(true);
        const [Qualifications,setQualifications] = useState(null);
    
        const connectToServer = async  () => axios.get('http://localhost:8000/Qualifications')
                                                .then(res=>{
                                            
                                                    console.log(res.data);
                                                    setQualifications(res.data);
                                                    setLoader(false)
                                                }).catch(err=>console.log(err))
    useEffect(()=>{
       connectToServer();
    },[])
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', p: 3}}>
      <h1 className='mode'>Qualification</h1>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Sree Chaitanya Institute of Technoligical Sciences" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSPcHLQr7yXRS3xTzz-fDmcbo_3WbimLnvW5-w8r5IJQ&s" />
        </ListItemAvatar>
        <ListItemText
          primary="Sree Chaitanya Institute of Technoligical Sciences"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                7 CGPA
              </Typography>
              {" B.TECH CSE"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Sree Sai Junior College" src="https://www.w3schools.com/howto/img_avatar.png" />
        </ListItemAvatar>
        <ListItemText
          primary="Sree Sai Junior College"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                92% CGPA
              </Typography>
              {" — Intermediate MPC"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="ZPHS High School" src="https://55knots.com.au/wp-content/uploads/2021/01/Zanj-Avatar-scaled.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="ZPHS High School"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                98% CGPA
              </Typography>
              {' — Secondary School Certificate'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}