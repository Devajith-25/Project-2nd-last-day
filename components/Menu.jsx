import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';
import {MenuData} from './Menu.Data'

const Contact = () => {
    const [items,setItems] = useState(MenuData)


    const decQty = (id)=>{
        const newItem = items.map((item)=>
        item.id === id && item.qty > 1 ?{...item,qty:item.qty-1}:item
        );
        setItems(newItem);
        
        }
      
      const incQty = (id)=>{
        const newItem = items.map((item)=>
        item.id === id?{...item,qty:item.qty+1}:item
        );
        setItems(newItem);
        
        }

  return (


    <div style={{paddingTop:"150px" ,paddingLeft:"30px", paddingBottom:"30px"}}>
    {items.map((items)=>
<div style={{display:"inline-flex",paddingInline:"20px",position:"space-between"}}>
<Card sx={{ maxWidth: "210px",maxHeight:"500px"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="190"
          image={items.image}
          alt="image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {items.item}
          </Typography>
          <Typography variant="h6" color="text.secondary">
           Price: {items.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <div>
            <p>
              <h4>Qty:{items.qty}</h4>
               <Button style={{padding:"30 30px"}} onClick={()=> decQty(items.id)}>-</Button>&nbsp;&nbsp;&nbsp;&nbsp;
               <Button onClick={()=> incQty(items.id)}>+</Button>
           </p>
        <Button style={{width:"20px",paddingTop:"15px",marginBottom:"50px"}} variant='contained'>Buy</Button>&nbsp;&nbsp;
        <Button style={{width:"20px",paddingTop:"15px",marginBottom:"50px"}} variant='contained'>Cart</Button>
        </div>
    </Card>
    </div>

    )}
      </div>
  )
}

export default Contact
