import {Typography,Box} from '@mui/material'
import Table from '../components/Table.jsx'
import FloatButton from'../components/FloatButton.jsx'
import React, { useEffect, useState } from 'react'
import { Try } from '@mui/icons-material'
import axios from 'axios'
import { host } from '../components/Api.js'
import { toast } from 'react-toastify'

export default function View() {
  const [showData,setshowData]=useState([])
  //useEffect
   const fetchData=async()=>{
    try {
      const res= await axios.get(`${host}/view`)
      // console.log(res)
      if(res.data.success){
        setshowData(res.data.data)
      }
    } catch (error) {
      console.log(error)
      toast.error(res.data.message)
    }
  }
  // console.log("this is data",fetchData)
  useEffect(()=>{fetchData();},[])
  return (
    <div><Typography sx={{textAlign:"center",fontWeight:"bold"}}>
        Expense Tracker</Typography>
        <Box><Table fetchData={showData}/>
        <FloatButton/></Box>
        </div>
        
  )
}
