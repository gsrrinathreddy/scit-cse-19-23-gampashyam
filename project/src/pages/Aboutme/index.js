import {useState,useEffect} from 'react';
import axios from 'axios';
import { Typography } from '@mui/material';

export default function Aboutme(){
const [loader,setLoader] = useState(true);
    const [aboutme,setAboutme] = useState(null);

    const connectToServer = async  () => axios.get('http://localhost:8000/Aboutme')
                                            .then(res=>{
                                        
                                                console.log(res.data);
                                                setAboutme(res.data);
                                                setLoader(false)
                                            }).catch(err=>console.log(err))
useEffect(()=>{
   connectToServer();
},[])
    


    return(
        <>
        <Typography>Name:Gampa Shyam</Typography>
        <Typography>Father Name: G.krishnamurthy</Typography>
        <Typography>Mother Name:Anuradha</Typography>
        <Typography>phone Number:9390201537</Typography>
        </>
    )
}