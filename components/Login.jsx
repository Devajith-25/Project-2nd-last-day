import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import img from './Images/monu.jpg'

import axios from 'axios';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email,setEmail]= useState()
const  [epass,setPassword]=useState()
const navigate=useNavigate()

    const backgroundImagesStyle={
     backgroundImage:`url(${img})`,
     backgroundSize:'cover',
    //  backgroundRepeat:'no-repeat',
     height:'100vh',
     fontSize:'10x'
    };
    const addHandler = (e)=>{

      e.preventDefault()
      console.log(email)
      
      
      axios.post("http://localhost:3006/login",{email,epass})
      .then((result)=>{
        console.log(result.data)
        { alert(result.data)}
        if(result.data === "success"){
          navigate('/menu')
        }
      })
      .catch((err)=>console.log(err))
     }
        
    
    return (
     <div style={backgroundImagesStyle}>


        <div  style={{"paddingTop":"100px"}}>
            <Box><br /><br /><br />
            <Typography variant='h4'>Login</Typography><br /><br />
            <TextField id="outlined-basic" label="Email"  variant="outlined" name="email" onChange={(e)=> setEmail(e.target.value)}  /><br/><br/>
            <TextField id="filled-basic" label="Password" type='password' variant="outlined" name="epass" onChange={(e)=> setPassword(e.target.value)}/><br/><br/>
            <Button variant="contained" color='success'onClick={addHandler}>Login</Button>
            </Box>
            </div>
        </div>
      )
    }

export default Login