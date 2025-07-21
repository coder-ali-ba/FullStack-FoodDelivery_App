
import React from 'react';
import VendorLayout from '../../../../Components/LayoutComp/VendorLayout'
import MenuModal from "../../../../Modals/MenuModals"
import { Button, Stack, Typography } from '@mui/material';


function Menu() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
  return (
    <VendorLayout>

        <Stack direction={"row"} justifyContent={"space-between"}>
          <Typography variant="h5" align="center" gutterBottom>
          Menu Items
          </Typography>
          <Button variant='contained' onClick={handleOpen}>Create Menu</Button>
        </Stack>


      {open && <MenuModal   Close={handleClose}/>}
      
    </VendorLayout>
  )
}

export default Menu
