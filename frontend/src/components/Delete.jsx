import { useEffect, useState } from "react";
import AxiosInstance from "./Axios";
import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import {useNavigate,useParams} from 'react-router-dom'
import MyMessage from "./forms/Message";

const Delete = () => {

  const MyParameter=useParams()
  const MyId=MyParameter.id
  const navigate=useNavigate()

  const [message,setMessge]=useState([])
  const [myData,setMyData]=useState({
        name:"",
        description:"",
        attendance:0,
        city:"",
        country:"",
        league:"",
        characterestics:[],
    })


  const GetData = () => {
    AxiosInstance.get(`cricketboard/${MyId}`).then((res) => {
      setMyData(res.data)
    })

  };

  useEffect(() => {
    GetData();
  }, []);

  const DeleteRecord=(event)=>{
    event.preventDefault()
    AxiosInstance.delete(`cricketboard/${MyId}/`)
    .then(()=>{
      setMessge(
        <MyMessage 
          messageText={"Data Deleted successfully"}
          messagecolor={"green"}
          />
      )
      setTimeout(()=>{
        navigate("/")
      },1000)
      })
    }
  

  return (
    <div>
      <form onSubmit={DeleteRecord}>
        {message}
        <Box className={"TopBar"}>
                <DeleteIcon />
                <Typography
                  sx={{ marginLeft: "15px", fontWeight: "bold" }}
                  variant="subtitle2"
                >
                  Are you sure that you want to delete the data ?
                </Typography>
          </Box>

          <Box className={"TextBox"}>
            <Typography>
                You will be deleting the club <strong>{myData.name}</strong> from <strong> {myData.city}</strong>
            </Typography>
          </Box>

          <Box sx={{marginTop:'30px'}}>
              <Button type="submit" variant="contained" fullWidth>DELETE</Button>
          </Box>
      </form>
    </div>
  )
}

export default Delete
