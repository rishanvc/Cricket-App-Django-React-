import React, { useEffect, useState } from "react";
import AxiosInstance from "./Axios";
import { Box, Typography } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import TextForm from "./forms/TextForm";
import SelectForm from "./forms/SelectForm";
import MultiSelectForm from "./forms/MultiSelectForm";
import DescriptionForm from "./forms/DescriptionForm";
import Button from '@mui/material/Button';
import {useFormik} from 'formik';
import * as yup from 'yup';
import MyMessage from "./forms/Message";
import {useNavigate} from 'react-router-dom'


const Create = () => {
  const [country, setCountry] = useState([]);
  const [league, setLeague] = useState([]);
  const [characterestic, setCharacterestic] = useState([]);
  const [message,setMessge]=useState([])

  const navigate=useNavigate()

  console.log("country", country);
  console.log("league", league);
  console.log("characterestic", characterestic);

  const GetData = () => {
    AxiosInstance.get("country/").then((res) => {
      setCountry(res.data);
    });

    AxiosInstance.get("league/").then((res) => {
      setLeague(res.data);
    });

    AxiosInstance.get("characterestic/").then((res) => {
      setCharacterestic(res.data);
    });
  };

  useEffect(() => {
    GetData();
  }, []);



  const validationSchema=yup.object({
    name:yup
            .string("The name should be in text")
            .required("Name is required"),
    description:yup
            .string("The description should be in text")
            .required("description is required"),
    attendance:yup
            .number("The name should be in number")
            .required("Attendance is required"),
    characterestics:yup
            .array()
            .min(1,"You need to select atleast one option"),

  })



  const formik=useFormik({
    initialValues:{
      name:"",
      description:"",
      attendance:0,
      city:"",
      country:"",
      league:"",
      characterestics:[],
    },
     validationSchema:validationSchema,

    onSubmit:(values)=>{
      AxiosInstance.post("cricketboard/",values)
      .then(()=>{
        setMessge(
          <MyMessage 
            messageText={"Data submitted successfully"}
            messagecolor={"green"}
           />
        )
        setTimeout(()=>{
          navigate("/")
        },1000)
      })
      .catch(err => {
      console.log("BACKEND ERROR:", err.response.data)
      })
    }
  })


  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
      <Box className={"TopBar"}>
        <AddBoxIcon />
        <Typography
          sx={{ marginLeft: "15px", fontWeight: "bold" }}
          variant="subtitle2"
        >
          Create a new team
        </Typography>
      </Box>

    
    {message}

      <Box className={"FormBox"}>

        <Box className={"FormArea"}>
              <TextForm 
                  label={"Team name"} 
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                  />


                <Box sx={{marginTop:"30px"}}>
                <TextForm 
                    label={"City"} 
                    name="city"
                    value={formik.values.city}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.city && Boolean(formik.errors.city)}
                    helperText={formik.touched.city && formik.errors.city}
                    />
                </Box>


                <Box sx={{marginTop:"30px"}}>
                <SelectForm 
                    label={"League"} 
                    options={league} 
                    name="league"
                    value={formik.values.league}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.league && Boolean(formik.errors.league)}
                    helperText={formik.touched.league && formik.errors.league}
                    />
                    </Box>


                <Box sx={{marginTop:"30px"}}>
                <Button type="submit" variant="contained" fullWidth>SUBMIT THE DATA</Button>
                </Box>

        </Box>

        <Box className={"FormArea"}>
          <SelectForm 
              label={"Country"} 
              options={country} 
              name="country"
              value={formik.values.country}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.country && Boolean(formik.errors.country)}
              helperText={formik.touched.country && formik.errors.country}
              />

          <Box sx={{marginTop:"30px"}}>   
          <TextForm 
              label={"Attendance"}   
              name="attendance"
              value={formik.values.attendance}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.attendance && Boolean(formik.errors.attendance)}
              helperText={formik.touched.attendance && formik.errors.attendance}
              />
              </Box>

           <Box sx={{marginTop:"30px"}}> 
             <MultiSelectForm 
              label={"Characterestic"} 
              options={characterestic}
              name="characterestics"
              value={formik.values.characterestics}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.characterestics && Boolean(formik.errors.characterestics)}
              helperText={formik.touched.characterestics && formik.errors.characterestics}
              />
              </Box>


        </Box>

        <Box className={"FormArea"}>
          <DescriptionForm 
              label={"Description"} 
              rows={9}
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.description && Boolean(formik.errors.description)}
              helperText={formik.touched.description && formik.errors.description}
              />
        </Box>


      </Box>
  </form>
    </div>
  );
};

export default Create;
