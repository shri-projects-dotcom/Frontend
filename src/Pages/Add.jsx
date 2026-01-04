import {Box,Button,FormControl,InputLabel,MenuItem,Paper,Select,TextField,Typography,} from "@mui/material";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { host } from "../components/Api";
import { toast } from "react-toastify";

export default function Form() {
    const nav=useNavigate()
    const [formData,setFormData]=useState({
        title:'',
        amount:'',
        category:''
    })
    const handleSubmit=async()=>{
        try {
            const res=await axios.post(`${host}/add`,formData)
            // console.log(res)
            if (res.data.success){
                toast.success(res.data.message)
            }
            nav("/")

        } catch (error) {
                toast.error(res.data.message)
                console.log(error)            
        }
    }
  return (
    <div>
      <Box>
        <Typography sx={{textAlign:"center",fontWeight:"bold"}}>Enter the Expenses</Typography>
      </Box>
      <Box>
        <Paper>
          <TextField
            id="outlined-basic"
            label="Expense Title"
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
            onChange={(e)=>setFormData({...formData,title:e.target.value})}
            value={formData.title}
          />
          <TextField
            id="outlined-basic"
            label="Amount"
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
            type="Number"
            onChange={(e)=>setFormData({...formData,amount:e.target.value})}
            value={formData.amount}
          />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Category"
              onChange={(e)=>setFormData({...formData,category:e.target.value})}
              value={formData.category}
            >
              <MenuItem value='Food'>Food</MenuItem>
              <MenuItem value='Transport'>Transport</MenuItem>
              <MenuItem value='Other'>Other</MenuItem>
            </Select>
          </FormControl>
          <Button variant="contained" fullWidth sx={{mb:2}} onClick={handleSubmit}>Submit</Button>
          <Button variant="contained" fullWidth sx={{mb:2}} onClick={()=>nav('/')}>Return to Expenses</Button>
        </Paper>
      </Box>
    </div>
  );
}
