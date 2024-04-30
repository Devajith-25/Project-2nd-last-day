import { Box, Button, TextField} from '@mui/material'
import React, { useState } from 'react'
import img from'./Images/i77.jpeg'
import axios from 'axios';



const Feedback = () => {
  const [inputs,setInputs] = useState({
    aname:"",
    
    amail:"",
    asuggetion:""

  });
  const inputHandler = (e) =>{
    const { name, value } = e.target
    setInputs((prevData)=>({...prevData,[name]: value}))

  }
  const addHandler = (e)=>{
    console.log("button clicked")
    axios.post("http://localhost:3006/create1",inputs)
    .then((response)=>{
      console.log(response.data)
      alert(response.data)
    })
    .catch((err)=> console.log(err))
  }




  const backgroundImagesStyle={
    backgroundImage:`url(${img})`,
    backgroundSize:'cover',
   //  backgroundRepeat:'no-repeat',
    height:'100vh',
    fontSize:'10x'
   };
  return (
    <div style={backgroundImagesStyle}>

      <div style={{paddingTop:"200px",width:"800px",marginLeft:"350px"}}>
       
        <Box><br/><br/>

        <TextField fullWidth label="Enter your name" id="fullWidth"  name='aname' value={inputs.aname} onChange={inputHandler}/><br/><br/><br/>
        <TextField fullWidth label="Email" id="fullWidth"  name='amail' value={inputs.amail} onChange={inputHandler}/><br/><br/><br/>

        <TextField
         fullWidth label="Your suggetions" id="fullWidth"  name='asuggetion' value={inputs.asuggetion} onChange={inputHandler}/><br/><br/><br/>
        <Button variant='contained' color='success' onClick={addHandler}>Submit</Button>
        
        

        </Box>

       
        

      </div>

    </div>
  )
}

export default Feedback