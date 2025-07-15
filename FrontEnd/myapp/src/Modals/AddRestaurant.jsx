import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack, TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import axios from 'axios';

import Cookies from 'js-cookie';
import { BASE_URL } from '../Utils/utility';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function AddResortModal() {
  const [open, setOpen] = React.useState(false);
  
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  const {control , handleSubmit , reset} = useForm()

  const onSubmit = async(obj) => {
     try {
        const response =await axios.post(`${BASE_URL}restaurant/create` , obj ,{
          headers :{
             Authorization : `Bearer ${Cookies.get("authToken")}`
          }
        })      
        alert(response.data.message)   
        reset({})    
     } catch (error) {
        console.log(error.message);       
     }    
  }
  return (
    
    <div>
      <Button onClick={handleOpen} variant='contained'>Create Restaurant</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Stack component="form" onSubmit={handleSubmit(onSubmit)}>
                <Typography  variant="h5" margin={"auto"} mb={"10px"}>Create Restaurant</Typography>
                <Controller
                  control={control}
                  name="restaurantName"
                  render={({field , formState : {errors},
                  }) => (
                    <TextField 

                      {...field}
                      required
                      label ='Name'
                    />
                   )}
                />

                <Controller
                  control={control}
                  name="details"
                  render={({field , formState : {errors},
                  }) => (
                    <TextField 

                      {...field}
                      required
                      label ='Details'
                    />
                   )}
                />

                <Controller
                  control={control}
                  name="contactNumber"
                  render={({field , formState : {errors},
                  }) => (
                    <TextField 

                      {...field}
                      required
                      label ='PhNumber'
                    />                   
                   )}
                />

                <Controller
                  control={control}
                  name="address"
                  render={({field , formState : {errors},
                  }) => (
                    <TextField 

                      {...field}
                      required
                      label ='Address'
                    />                   
                   )}
                />

                <Controller
                  control={control}
                  name="email"
                  render={({field , formState : {errors},
                  }) => (
                    <TextField 

                      {...field}
                      required
                      label ='email'
                    />                   
                   )}
                />

                <Controller
                  control={control}
                  name="category"
                  render={({field , formState : {errors},
                  }) => (
                    <TextField 

                      {...field}
                      required
                      label ='category'
                    />                   
                   )}
                />

                <Button variant='contained' type='submit'>Create Restaurant</Button>
            </Stack>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
